import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { createRequire } from 'node:module';

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
export default [
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist/cjs',
        declarationDir: 'dist/cjs/types',
      }),
      terser(),
    ],
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      '@types/react',
      '@types/react-dom',
      '@types/node',
    ],
  },
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist/esm',

        declarationDir: 'dist/esm/types',
      }),
      terser(),
    ],
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      '@types/react',
      '@types/react-dom',
      '@types/node',
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
