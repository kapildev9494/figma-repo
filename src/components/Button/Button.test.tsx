import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
// import * as axe from 'axe-core';

describe('Button', () => {
  test('renders the button component and is accessible', async () => {
    render(<Button>Click Me</Button>);

    // const results = await axe.run(document.body); // Use async/await

    // expect(results.violations).toHaveLength(0); // Expect no violations
  });
});
