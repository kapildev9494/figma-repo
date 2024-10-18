import { Theme } from '@fluentui/react-components';

interface BrandThemeExtension {
  // global tokens
  'global-Linear': string;
  'global-fontFamilies-segoe-ui': string;
  'global-lineHeights-0': string;
  'global-lineHeights-1': string;
  'global-lineHeights-2': string;
  'global-lineHeights-3': string;
  'global-lineHeights-4': string;
  'global-lineHeights-5': string;
  'global-lineHeights-6': string;
  'global-lineHeights-7': string;
  'global-lineHeights-8': string;
  'global-lineHeights-9': string;
  'global-lineHeights-10': string;
  'global-fontWeights-segoe-ui-0': string;
  'global-fontWeights-segoe-ui-1': string;
  'global-fontWeights-segoe-ui-2': string;
  'global-fontWeights-segoe-ui-3': string;
  'global-fontWeights-segoe-ui-4': string;
  'global-fontSize-0': string;
  'global-fontSize-1': string;
  'global-fontSize-2': string;
  'global-fontSize-3': string;
  'global-fontSize-4': string;
  'global-fontSize-5': string;
  'global-fontSize-6': string;
  'global-fontSize-7': string;
  'global-fontSize-8': string;
  'global-fontSize-9': string;
  'global-fontSize-10': string;
  'global-letterSpacing-0': string;
  'global-letterSpacing-1': string;
  'global-paragraphSpacing-0': string;
  'global-textCase-none': string;
  'global-textDecoration-none': string;
  'global-paragraphIndent-0': string;

  // global/global tokens
  'global/global-fontFamilies-segoe-ui': string;
  'global/global-fontWeights-segoe-ui-0': string;
  'global/global-fontWeights-segoe-ui-1': string;
  'global/global-fontWeights-segoe-ui-2': string;
  'global/global-fontWeights-segoe-ui-3': string;
  'global/global-fontWeights-segoe-ui-4': string;

  // Theme/Light tokens
  'Theme/Light-Neutral-Background-1-Rest': string;
  'Theme/Light-Neutral-Background-1-Hover': string;
  'Theme/Light-Neutral-Background-1-Pressed': string;
  'Theme/Light-Neutral-Background-1-Selected': string;
  'Theme/Light-Neutral-Background-2-Rest': string;
  'Theme/Light-Neutral-Background-3-Rest': string;
  'Theme/Light-Neutral-Background-3-Hover': string;
  'Theme/Light-Neutral-Background-3-Pressed': string;
  'Theme/Light-Neutral-Background-4-Rest': string;
  'Theme/Light-Neutral-Background-4-Hover': string;
  'Theme/Light-Neutral-Background-4-Pressed': string;
  'Theme/Light-Neutral-Background-5-Rest': string;
  'Theme/Light-Neutral-Background-6-Rest': string;
  'Theme/Light-Neutral-Background-Inverted-Rest': string;
  'Theme/Light-Neutral-Background-Inverted-Disabled-Rest': string;
  'Theme/Light-Neutral-Background-Alpha-1-Rest': string;
  'Theme/Light-Neutral-Background-Alpha-2-Rest': string;
  'Theme/Light-Neutral-Background-Static-Rest': string;
  'Theme/Light-Neutral-Background-Subtle-Rest': string;
  'Theme/Light-Neutral-Background-Subtle-Hover': string;
  'Theme/Light-Neutral-Background-Subtle-Pressed': string;
  'Theme/Light-Neutral-Background-Subtle-Selected': string;
  'Theme/Light-Neutral-Background-Subtle-Light alpha-Hover': string;
  'Theme/Light-Neutral-Background-Subtle-Light alpha-Pressed': string;
  'Theme/Light-Neutral-Background-Subtle-Light alpha-Selected': string;
  'Theme/Light-Neutral-Background-Subtle-Inverted-Rest': string;
  'Theme/Light-Neutral-Background-Subtle-Inverted-Hover': string;
  'Theme/Light-Neutral-Background-Subtle-Inverted-Pressed': string;
  'Theme/Light-Neutral-Background-Subtle-Inverted-Selected': string;
  'Theme/Light-Neutral-Background-Transparent-Rest': string;
  'Theme/Light-Neutral-Background-Transparent-Hover': string;
  'Theme/Light-Neutral-Background-Transparent-Pressed': string;
  'Theme/Light-Neutral-Background-Transparent-Selected': string;
  'Theme/Light-Neutral-Background-Disabled-Rest': string;
  'Theme/Light-Neutral-Background-Stencil-1-Rest': string;
  'Theme/Light-Neutral-Background-Stencil-2-Rest': string;
  'Theme/Light-Neutral-Background-Overlay-Rest': string;
  'Theme/Light-Neutral-Background-Overlay-Scrollbar-Rest': string;
  'Theme/Light-Neutral-Foreground-1-Rest primary text': string;
  'Theme/Light-Neutral-Foreground-1-Hover': string;
  'Theme/Light-Neutral-Foreground-1-Pressed': string;
  'Theme/Light-Neutral-Foreground-1-Selected': string;
  'Theme/Light-Neutral-Foreground-2-Rest secondary text': string;
  'Theme/Light-Neutral-Foreground-2-Hover': string;
  'Theme/Light-Neutral-Foreground-2-Pressed': string;
  'Theme/Light-Neutral-Foreground-2-Selected': string;
  'Theme/Light-Neutral-Foreground-2-Brand-Hover': string;
  'Theme/Light-Neutral-Foreground-2-Brand-Pressed': string;
  'Theme/Light-Neutral-Foreground-2-Brand-Selected': string;
  'Theme/Light-Neutral-Foreground-2-Brand-Rest': string;
  'Theme/Light-Neutral-Foreground-2-Link-Rest': string;
  'Theme/Light-Neutral-Foreground-2-Link-Hover': string;
  'Theme/Light-Neutral-Foreground-2-Link-Pressed': string;
  'Theme/Light-Neutral-Foreground-2-Link-Selected': string;
  'Theme/Light-Neutral-Foreground-4-Rest': string;
  'Theme/Light-Neutral-Foreground-Disabled-2-Rest': string;
  'Theme/Light-Neutral-Foreground-Disabled-Rest': string;
  'Theme/Light-Neutral-Foreground-Static-Inverted-Rest': string;
  'Theme/Light-Neutral-Foreground-Inverted-1-Rest': string;
  'Theme/Light-Neutral-Foreground-Inverted-1-Hover': string;
  'Theme/Light-Neutral-Foreground-Inverted-1-Pressed': string;
  'Theme/Light-Neutral-Foreground-Inverted-1-Selected': string;
  'Theme/Light-Neutral-Foreground-Inverted-2-Rest': string;
  'Theme/Light-Neutral-Foreground-Inverted-Disabled-Rest': string;
  'Theme/Light-Neutral-Foreground-Inverted-Link-Rest': string;
  'Theme/Light-Neutral-Foreground-Inverted-Link-Hover': string;
  'Theme/Light-Neutral-Foreground-Inverted-Link-Pressed': string;
  'Theme/Light-Neutral-Foreground-Inverted-Link-Selected': string;
  'Theme/Light-Neutral-Foreground-On Brand-Rest': string;
  'Theme/Light-Neutral-Stroke-1-Rest': string;
  'Theme/Light-Neutral-Stroke-1-Hover': string;
  'Theme/Light-Neutral-Stroke-1-Pressed': string;
  'Theme/Light-Neutral-Stroke-1-Selected': string;
  'Theme/Light-Neutral-Stroke-2-Rest': string;
  'Theme/Light-Neutral-Stroke-3-Rest': string;
  'Theme/Light-Neutral-Stroke-Alpha-1-Rest': string;
  'Theme/Light-Neutral-Stroke-Alpha-2-Rest': string;
  'Theme/Light-Neutral-Stroke-Subtle-Rest': string;
  'Theme/Light-Neutral-Stroke-on Brand-1-Rest': string;
  'Theme/Light-Neutral-Stroke-on Brand-2-Rest': string;
  'Theme/Light-Neutral-Stroke-Accessible-Rest': string;
  'Theme/Light-Neutral-Stroke-Accessible-Hover': string;
  'Theme/Light-Neutral-Stroke-Accessible-Pressed': string;
  'Theme/Light-Neutral-Stroke-Accessible-Selected': string;
  'Theme/Light-Neutral-Stroke-Focus-1-Rest': string;
  'Theme/Light-Neutral-Stroke-Focus-2-Rest': string;
  'Theme/Light-Neutral-Stroke-Transparent-Interactive-Rest': string;
  'Theme/Light-Neutral-Stroke-Transparent-Disabled-Rest': string;
  'Theme/Light-Neutral-Stroke-Transparent-Rest': string;
  'Theme/Light-Neutral-Stroke-Disabled-Rest': string;
  'Theme/Light-Neutral-Stroke-Disabled-Inverted-Rest': string;
  'Theme/Light-Brand-Background-1-Rest': string;
  'Theme/Light-Brand-Background-1-Hover': string;
  'Theme/Light-Brand-Background-1-Pressed': string;
  'Theme/Light-Brand-Background-1-Selected': string;
  'Theme/Light-Brand-Background-2-Rest': string;
  'Theme/Light-Brand-Background-2-Hover': string;
  'Theme/Light-Brand-Background-2-Pressed': string;
  'Theme/Light-Brand-Background-3-Rest': string;
  'Theme/Light-Brand-Background-Inverted-Rest': string;
  'Theme/Light-Brand-Background-Inverted-Hover': string;
  'Theme/Light-Brand-Background-Inverted-Pressed': string;
  'Theme/Light-Brand-Background-Inverted-Selected': string;
  'Theme/Light-Brand-Background-Static-Rest': string;
  'Theme/Light-Brand-Background-Compound-Rest': string;
  'Theme/Light-Brand-Background-Compound-Hover': string;
  'Theme/Light-Brand-Background-Compound-Pressed': string;
  'Theme/Light-Brand-Foreground-1-Rest': string;
  'Theme/Light-Brand-Foreground-1-Hover': string;
  'Theme/Light-Brand-Foreground-1-Pressed': string;
  'Theme/Light-Brand-Foreground-1-Selected': string;
  'Theme/Light-Brand-Foreground-2-Rest': string;
  'Theme/Light-Brand-Foreground-2-Hover': string;
  'Theme/Light-Brand-Foreground-2-Pressed': string;
  'Theme/Light-Brand-Foreground-Link-Rest': string;
  'Theme/Light-Brand-Foreground-Link-Hover': string;
  'Theme/Light-Brand-Foreground-Link-Pressed': string;
  'Theme/Light-Brand-Foreground-Link-Selected': string;
  'Theme/Light-Brand-Foreground-Inverted-Rest': string;
  'Theme/Light-Brand-Foreground-Inverted-Hover': string;
  'Theme/Light-Brand-Foreground-Inverted-Pressed': string;
  'Theme/Light-Brand-Foreground-On Light-Rest': string;
  'Theme/Light-Brand-Foreground-On Light-Hover': string;
  'Theme/Light-Brand-Foreground-On Light-Pressed': string;
  'Theme/Light-Brand-Foreground-On Light-Selected': string;
  'Theme/Light-Brand-Foreground-Compound-Rest': string;
  'Theme/Light-Brand-Foreground-Compound-Hover': string;
  'Theme/Light-Brand-Foreground-Compound-Pressed': string;
  'Theme/Light-Brand-Stroke-1-Rest': string;
  'Theme/Light-Brand-Stroke-1-Hover': string;
  'Theme/Light-Brand-Stroke-1-Pressed': string;
  'Theme/Light-Brand-Stroke-1-Selected': string;
  'Theme/Light-Brand-Stroke-2-Rest': string;
  'Theme/Light-Brand-Stroke-2-Contrast-Rest': string;
  'Theme/Light-Brand-Stroke-3-Rest': string;
  'Theme/Light-Brand-Stroke-Compound-Rest': string;
  'Theme/Light-Brand-Stroke-Compound-Hover': string;
  'Theme/Light-Brand-Stroke-Compound-Pressed': string;
  'Theme/Light-Status-Danger-Background-1-Rest': string;
  'Theme/Light-Status-Danger-Background-3-Rest': string;
  'Theme/Light-Status-Danger-Foreground-1-Rest': string;
  'Theme/Light-Status-Danger-Foreground-3-Rest': string;
  'Theme/Light-Status-Danger-Stroke-1-Rest': string;
  'Theme/Light-Status-Danger-Stroke-2-Rest': string;
  'Theme/Light-Status-Success-Background-1-Rest': string;
  'Theme/Light-Status-Success-Background-3-Rest': string;
  'Theme/Light-Status-Success-Foreground-1-Rest': string;
  'Theme/Light-Status-Success-Foreground-3-Rest': string;
  'Theme/Light-Status-Success-Stroke-1-Rest': string;
  'Theme/Light-Status-Success-Stroke-2-Rest': string;
  'Theme/Light-Status-Warning-Background-1-Rest': string;
  'Theme/Light-Status-Warning-Background-3-Rest': string;
  'Theme/Light-Status-Warning-Foreground-1-Rest': string;
  'Theme/Light-Status-Warning-Foreground-3-Rest': string;
  'Theme/Light-Status-Warning-Stroke-1-Rest': string;
  'Theme/Light-Status-Warning-Stroke-2-Rest': string;
  'Theme/Light-Status-Oof-Foreground-3-Rest': string;
  'Theme/Light-Status-Away-Background-3-Rest': string;
  'Theme/Light-Status-Available-Foreground-3-Rest': string;
  'Theme/Light-Status-Generic-Anchor-Background-2-Rest': string;
  'Theme/Light-Status-Generic-Anchor-Foreground-2-Rest': string;
  'Theme/Light-Status-Generic-Anchor-Stroke-Active-Rest': string;
  'Theme/Light-Status-Generic-Information-Background-1-Rest': string;
  'Theme/Light-Status-Generic-Information-Background-1-Hover': string;
  'Theme/Light-Status-Generic-Information-Background-1-Pressed': string;
  'Theme/Light-Status-Generic-Information-Stroke-1-Rest': string;
  'Theme/Light-Status-Generic-Information-Stroke-2-Rest': string;
  'Theme/Light-Status-Generic-Information-Stroke-2-Hover': string;
  'Theme/Light-Status-Generic-Information-Stroke-2-Pressed': string;
  'Theme/Light-Status-Generic-Information-Foreground-Rest': string;
  'Theme/Light-Status-Generic-Information-Foreground-Hover': string;
  'Theme/Light-Status-Generic-Information-Foreground-Pressed': string;
  'Theme/Light-Status-Severe-Background-1-Rest': string;
  'Theme/Light-Status-Severe-Background-3-Rest': string;
  'Theme/Light-Status-Severe-Foreground-1-Rest': string;
  'Theme/Light-Status-Severe-Foreground-3-Rest': string;
  'Theme/Light-Status-Severe-Stroke-1-Rest': string;
  'Theme/Light-Status-Severe-Stroke-2-Rest': string;
  'Theme/Light-Shadow-ambient': string;
  'Theme/Light-Shadow-ambient-lighter': string;
  'Theme/Light-Shadow-ambient-darker': string;
  'Theme/Light-Shadow-brand-ambient': string;
  'Theme/Light-Shadow-key': string;
  'Theme/Light-Shadow-key-lighter': string;
  'Theme/Light-Shadow-key-darker': string;
  'Theme/Light-Shadow-brand-key': string;
  'Theme/Light-Data viz-Foreground-Labels-Categorical': string;
  'Theme/Light-Data viz-Foreground-Labels-Data': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Blue': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Gray': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Red': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Teal': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Ocean': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Green': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Yellow300': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Blue400': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Gray400': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Red400': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Teal300': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Red300': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Teal400': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Ocean400': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Green400': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Yellow400': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Green300': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Gray300': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Blue200': string;
  'Theme/Light-Data viz-Foreground-Labels-Color-Ocean200': string;
  'Theme/Light-Data viz-Foreground-Accessibility-Text dark bkgd': string;
  'Theme/Light-Data viz-Foreground-Accessibility-Text light bkgd': string;
  'Theme/Light-Data viz-Foreground-KPI Card-Text dark bkgd': string;
  'Theme/Light-Data viz-Foreground-KPI Card-Text light bkgd': string;
  'Theme/Light-Data viz-Stroke-Gridline': string;
  'Theme/Light-Data viz-Stroke-Axis-Target-Benchmark': string;
  'Theme/Light-Data viz-Stroke-Color-Blue': string;
  'Theme/Light-Data viz-Stroke-Color-Blue400': string;
  'Theme/Light-Data viz-Stroke-Color-Gray': string;
  'Theme/Light-Data viz-Stroke-Color-Gray400': string;
  'Theme/Light-Data viz-Stroke-Color-Red': string;
  'Theme/Light-Data viz-Stroke-Color-Red300': string;
  'Theme/Light-Data viz-Stroke-Color-Red400': string;
  'Theme/Light-Data viz-Stroke-Color-Teal': string;
  'Theme/Light-Data viz-Stroke-Color-Teal300': string;
  'Theme/Light-Data viz-Stroke-Color-Teal400': string;
  'Theme/Light-Data viz-Stroke-Color-Ocean': string;
  'Theme/Light-Data viz-Stroke-Color-Ocean400': string;
  'Theme/Light-Data viz-Stroke-Color-Green': string;
  'Theme/Light-Data viz-Stroke-Color-Green300': string;
  'Theme/Light-Data viz-Stroke-Color-Green400': string;
  'Theme/Light-Data viz-Stroke-Color-Yellow300': string;
  'Theme/Light-Data viz-Stroke-Color-Yellow400': string;
  'Theme/Light-Data viz-Stroke-Color-Gray300': string;
  'Theme/Light-Data viz-Stroke-Color-Blue200': string;
  'Theme/Light-Data viz-Stroke-Color-Ocean200': string;
  'Theme/Light-Data viz-Stroke-Color-Yellow': string;
  'Theme/Light-Data viz-Stroke-Trend-Average': string;
  'Theme/Light-Data viz-Stroke-Accessible outline': string;
  'Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Positive': string;
  'Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Negative': string;
  'Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Notice': string;
  'Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Positive': string;
  'Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Negative': string;
  'Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Notice': string;
  'Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Positive': string;
  'Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Negative': string;
  'Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Notice': string;
  'Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Positive': string;
  'Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Negative': string;
  'Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Notice': string;
  'Theme/Light-Data viz-Semantic-Background-Positive': string;
  'Theme/Light-Data viz-Semantic-Background-Negative': string;
  'Theme/Light-Data viz-Semantic-Background-Notice': string;
  'Theme/Light-Data viz-Background-Core-Blue': string;
  'Theme/Light-Data viz-Background-Core-Gray': string;
  'Theme/Light-Data viz-Background-Core-Red': string;
  'Theme/Light-Data viz-Background-Core-Teal': string;
  'Theme/Light-Data viz-Background-Core-Ocean': string;
  'Theme/Light-Data viz-Background-Core-Green': string;
  'Theme/Light-Data viz-Background-Core-Yellow': string;
  'Theme/Light-Data viz-Background-Sequential-Blue400': string;
  'Theme/Light-Data viz-Background-Sequential-Gray400': string;
  'Theme/Light-Data viz-Background-Sequential-Red300': string;
  'Theme/Light-Data viz-Background-Sequential-Red400': string;
  'Theme/Light-Data viz-Background-Sequential-Teal300': string;
  'Theme/Light-Data viz-Background-Sequential-Teal400': string;
  'Theme/Light-Data viz-Background-Sequential-Ocean400': string;
  'Theme/Light-Data viz-Background-Sequential-Green300': string;
  'Theme/Light-Data viz-Background-Sequential-Green400': string;
  'Theme/Light-Data viz-Background-Sequential-Yellow300': string;
  'Theme/Light-Data viz-Background-Sequential-Yellow400': string;
  'Theme/Light-Data viz-Background-Sequential-Blue300': string;
  'Theme/Light-Data viz-Background-Sequential-Blue200': string;
  'Theme/Light-Data viz-Background-Sequential-Blue100': string;
  'Theme/Light-Data viz-Background-Sequential-Gray300': string;
  'Theme/Light-Data viz-Background-Sequential-Gray200': string;
  'Theme/Light-Data viz-Background-Sequential-Gray100': string;
  'Theme/Light-Data viz-Background-Sequential-Red200': string;
  'Theme/Light-Data viz-Background-Sequential-Red100': string;
  'Theme/Light-Data viz-Background-Sequential-Teal200': string;
  'Theme/Light-Data viz-Background-Sequential-Teal100': string;
  'Theme/Light-Data viz-Background-Sequential-Ocean300': string;
  'Theme/Light-Data viz-Background-Sequential-Ocean200': string;
  'Theme/Light-Data viz-Background-Sequential-Ocean100': string;
  'Theme/Light-Data viz-Background-Sequential-Green200': string;
  'Theme/Light-Data viz-Background-Sequential-Green100': string;
  'Theme/Light-Data viz-Background-Sequential-Yellow200': string;
  'Theme/Light-Data viz-Background-Sequential-Yellow100': string;
  'Theme/Light-Data viz-Background-Neutral-Black': string;
  'Theme/Light-Control logic-Theme switch': string;

  // Theme/Dark tokens
  'Theme/Dark-Neutral-Background-1-Rest': string;
  'Theme/Dark-Neutral-Background-1-Hover': string;
  'Theme/Dark-Neutral-Background-1-Pressed': string;
  'Theme/Dark-Neutral-Background-1-Selected': string;
  'Theme/Dark-Neutral-Background-2-Rest': string;
  'Theme/Dark-Neutral-Background-3-Rest': string;
  'Theme/Dark-Neutral-Background-3-Hover': string;
  'Theme/Dark-Neutral-Background-3-Pressed': string;
  'Theme/Dark-Neutral-Background-4-Rest': string;
  'Theme/Dark-Neutral-Background-4-Hover': string;
  'Theme/Dark-Neutral-Background-4-Pressed': string;
  'Theme/Dark-Neutral-Background-5-Rest': string;
  'Theme/Dark-Neutral-Background-6-Rest': string;
  'Theme/Dark-Neutral-Background-Inverted-Rest': string;
  'Theme/Dark-Neutral-Background-Inverted-Disabled-Rest': string;
  'Theme/Dark-Neutral-Background-Alpha-1-Rest': string;
  'Theme/Dark-Neutral-Background-Alpha-2-Rest': string;
  'Theme/Dark-Neutral-Background-Static-Rest': string;
  'Theme/Dark-Neutral-Background-Subtle-Rest': string;
  'Theme/Dark-Neutral-Background-Subtle-Hover': string;
  'Theme/Dark-Neutral-Background-Subtle-Pressed': string;
  'Theme/Dark-Neutral-Background-Subtle-Selected': string;
  'Theme/Dark-Neutral-Background-Subtle-Light alpha-Hover': string;
  'Theme/Dark-Neutral-Background-Subtle-Light alpha-Pressed': string;
  'Theme/Dark-Neutral-Background-Subtle-Light alpha-Selected': string;
  'Theme/Dark-Neutral-Background-Subtle-Inverted-Rest': string;
  'Theme/Dark-Neutral-Background-Subtle-Inverted-Hover': string;
  'Theme/Dark-Neutral-Background-Subtle-Inverted-Pressed': string;
  'Theme/Dark-Neutral-Background-Subtle-Inverted-Selected': string;
  'Theme/Dark-Neutral-Background-Transparent-Rest': string;
  'Theme/Dark-Neutral-Background-Transparent-Hover': string;
  'Theme/Dark-Neutral-Background-Transparent-Pressed': string;
  'Theme/Dark-Neutral-Background-Transparent-Selected': string;
  'Theme/Dark-Neutral-Background-Disabled-Rest': string;
  'Theme/Dark-Neutral-Background-Stencil-1-Rest': string;
  'Theme/Dark-Neutral-Background-Stencil-2-Rest': string;
  'Theme/Dark-Neutral-Background-Overlay-Rest': string;
  'Theme/Dark-Neutral-Background-Overlay-Scrollbar-Rest': string;
  'Theme/Dark-Neutral-Foreground-1-Rest primary text': string;
  'Theme/Dark-Neutral-Foreground-1-Hover': string;
  'Theme/Dark-Neutral-Foreground-1-Pressed': string;
  'Theme/Dark-Neutral-Foreground-1-Selected': string;
  'Theme/Dark-Neutral-Foreground-2-Rest secondary text': string;
  'Theme/Dark-Neutral-Foreground-2-Hover': string;
  'Theme/Dark-Neutral-Foreground-2-Pressed': string;
  'Theme/Dark-Neutral-Foreground-2-Selected': string;
  'Theme/Dark-Neutral-Foreground-2-Brand-Hover': string;
  'Theme/Dark-Neutral-Foreground-2-Brand-Pressed': string;
  'Theme/Dark-Neutral-Foreground-2-Brand-Selected': string;
  'Theme/Dark-Neutral-Foreground-2-Brand-Rest': string;
  'Theme/Dark-Neutral-Foreground-2-Link-Rest': string;
  'Theme/Dark-Neutral-Foreground-2-Link-Hover': string;
  'Theme/Dark-Neutral-Foreground-2-Link-Pressed': string;
  'Theme/Dark-Neutral-Foreground-2-Link-Selected': string;
  'Theme/Dark-Neutral-Foreground-4-Rest': string;
  'Theme/Dark-Neutral-Foreground-Disabled-2-Rest': string;
  'Theme/Dark-Neutral-Foreground-Disabled-Rest': string;
  'Theme/Dark-Neutral-Foreground-Static-Inverted-Rest': string;
  'Theme/Dark-Neutral-Foreground-Inverted-1-Rest': string;
  'Theme/Dark-Neutral-Foreground-Inverted-1-Hover': string;
  'Theme/Dark-Neutral-Foreground-Inverted-1-Pressed': string;
  'Theme/Dark-Neutral-Foreground-Inverted-1-Selected': string;
  'Theme/Dark-Neutral-Foreground-Inverted-2-Rest': string;
  'Theme/Dark-Neutral-Foreground-Inverted-Disabled-Rest': string;
  'Theme/Dark-Neutral-Foreground-Inverted-Link-Rest': string;
  'Theme/Dark-Neutral-Foreground-Inverted-Link-Hover': string;
  'Theme/Dark-Neutral-Foreground-Inverted-Link-Pressed': string;
  'Theme/Dark-Neutral-Foreground-Inverted-Link-Selected': string;
  'Theme/Dark-Neutral-Foreground-On Brand-Rest': string;
  'Theme/Dark-Neutral-Stroke-1-Rest': string;
  'Theme/Dark-Neutral-Stroke-1-Hover': string;
  'Theme/Dark-Neutral-Stroke-1-Pressed': string;
  'Theme/Dark-Neutral-Stroke-1-Selected': string;
  'Theme/Dark-Neutral-Stroke-2-Rest': string;
  'Theme/Dark-Neutral-Stroke-3-Rest': string;
  'Theme/Dark-Neutral-Stroke-Alpha-1-Rest': string;
  'Theme/Dark-Neutral-Stroke-Alpha-2-Rest': string;
  'Theme/Dark-Neutral-Stroke-Subtle-Rest': string;
  'Theme/Dark-Neutral-Stroke-on Brand-1-Rest': string;
  'Theme/Dark-Neutral-Stroke-on Brand-2-Rest': string;
  'Theme/Dark-Neutral-Stroke-Accessible-Rest': string;
  'Theme/Dark-Neutral-Stroke-Accessible-Hover': string;
  'Theme/Dark-Neutral-Stroke-Accessible-Pressed': string;
  'Theme/Dark-Neutral-Stroke-Accessible-Selected': string;
  'Theme/Dark-Neutral-Stroke-Focus-1-Rest': string;
  'Theme/Dark-Neutral-Stroke-Focus-2-Rest': string;
  'Theme/Dark-Neutral-Stroke-Transparent-Interactive-Rest': string;
  'Theme/Dark-Neutral-Stroke-Transparent-Disabled-Rest': string;
  'Theme/Dark-Neutral-Stroke-Transparent-Rest': string;
  'Theme/Dark-Neutral-Stroke-Disabled-Rest': string;
  'Theme/Dark-Neutral-Stroke-Disabled-Inverted-Rest': string;
  'Theme/Dark-Brand-Background-1-Rest': string;
  'Theme/Dark-Brand-Background-1-Hover': string;
  'Theme/Dark-Brand-Background-1-Pressed': string;
  'Theme/Dark-Brand-Background-1-Selected': string;
  'Theme/Dark-Brand-Background-2-Rest': string;
  'Theme/Dark-Brand-Background-2-Hover': string;
  'Theme/Dark-Brand-Background-2-Pressed': string;
  'Theme/Dark-Brand-Background-3-Rest': string;
  'Theme/Dark-Brand-Background-Inverted-Rest': string;
  'Theme/Dark-Brand-Background-Inverted-Hover': string;
  'Theme/Dark-Brand-Background-Inverted-Pressed': string;
  'Theme/Dark-Brand-Background-Inverted-Selected': string;
  'Theme/Dark-Brand-Background-Static-Rest': string;
  'Theme/Dark-Brand-Background-Compound-Rest': string;
  'Theme/Dark-Brand-Background-Compound-Hover': string;
  'Theme/Dark-Brand-Background-Compound-Pressed': string;
  'Theme/Dark-Brand-Foreground-1-Rest': string;
  'Theme/Dark-Brand-Foreground-1-Hover': string;
  'Theme/Dark-Brand-Foreground-1-Pressed': string;
  'Theme/Dark-Brand-Foreground-1-Selected': string;
  'Theme/Dark-Brand-Foreground-2-Rest': string;
  'Theme/Dark-Brand-Foreground-2-Hover': string;
  'Theme/Dark-Brand-Foreground-2-Pressed': string;
  'Theme/Dark-Brand-Foreground-Link-Rest': string;
  'Theme/Dark-Brand-Foreground-Link-Hover': string;
  'Theme/Dark-Brand-Foreground-Link-Pressed': string;
  'Theme/Dark-Brand-Foreground-Link-Selected': string;
  'Theme/Dark-Brand-Foreground-Inverted-Rest': string;
  'Theme/Dark-Brand-Foreground-Inverted-Hover': string;
  'Theme/Dark-Brand-Foreground-Inverted-Pressed': string;
  'Theme/Dark-Brand-Foreground-On Light-Rest': string;
  'Theme/Dark-Brand-Foreground-On Light-Hover': string;
  'Theme/Dark-Brand-Foreground-On Light-Pressed': string;
  'Theme/Dark-Brand-Foreground-On Light-Selected': string;
  'Theme/Dark-Brand-Foreground-Compound-Rest': string;
  'Theme/Dark-Brand-Foreground-Compound-Hover': string;
  'Theme/Dark-Brand-Foreground-Compound-Pressed': string;
  'Theme/Dark-Brand-Stroke-1-Rest': string;
  'Theme/Dark-Brand-Stroke-1-Hover': string;
  'Theme/Dark-Brand-Stroke-1-Pressed': string;
  'Theme/Dark-Brand-Stroke-1-Selected': string;
  'Theme/Dark-Brand-Stroke-2-Rest': string;
  'Theme/Dark-Brand-Stroke-2-Contrast-Rest': string;
  'Theme/Dark-Brand-Stroke-3-Rest': string;
  'Theme/Dark-Brand-Stroke-Compound-Rest': string;
  'Theme/Dark-Brand-Stroke-Compound-Hover': string;
  'Theme/Dark-Brand-Stroke-Compound-Pressed': string;
  'Theme/Dark-Status-Danger-Background-1-Rest': string;
  'Theme/Dark-Status-Danger-Background-3-Rest': string;
  'Theme/Dark-Status-Danger-Foreground-1-Rest': string;
  'Theme/Dark-Status-Danger-Foreground-3-Rest': string;
  'Theme/Dark-Status-Danger-Stroke-1-Rest': string;
  'Theme/Dark-Status-Danger-Stroke-2-Rest': string;
  'Theme/Dark-Status-Success-Background-1-Rest': string;
  'Theme/Dark-Status-Success-Background-3-Rest': string;
  'Theme/Dark-Status-Success-Foreground-1-Rest': string;
  'Theme/Dark-Status-Success-Foreground-3-Rest': string;
  'Theme/Dark-Status-Success-Stroke-1-Rest': string;
  'Theme/Dark-Status-Success-Stroke-2-Rest': string;
  'Theme/Dark-Status-Warning-Background-1-Rest': string;
  'Theme/Dark-Status-Warning-Background-3-Rest': string;
  'Theme/Dark-Status-Warning-Foreground-1-Rest': string;
  'Theme/Dark-Status-Warning-Foreground-3-Rest': string;
  'Theme/Dark-Status-Warning-Stroke-1-Rest': string;
  'Theme/Dark-Status-Warning-Stroke-2-Rest': string;
  'Theme/Dark-Status-Oof-Foreground-3-Rest': string;
  'Theme/Dark-Status-Away-Background-3-Rest': string;
  'Theme/Dark-Status-Available-Foreground-3-Rest': string;
  'Theme/Dark-Status-Generic-Anchor-Background-2-Rest': string;
  'Theme/Dark-Status-Generic-Anchor-Foreground-2-Rest': string;
  'Theme/Dark-Status-Generic-Anchor-Stroke-Active-Rest': string;
  'Theme/Dark-Status-Generic-Information-Background-1-Rest': string;
  'Theme/Dark-Status-Generic-Information-Background-1-Hover': string;
  'Theme/Dark-Status-Generic-Information-Background-1-Pressed': string;
  'Theme/Dark-Status-Generic-Information-Stroke-1-Rest': string;
  'Theme/Dark-Status-Generic-Information-Stroke-2-Rest': string;
  'Theme/Dark-Status-Generic-Information-Stroke-2-Hover': string;
  'Theme/Dark-Status-Generic-Information-Stroke-2-Pressed': string;
  'Theme/Dark-Status-Generic-Information-Foreground-Rest': string;
  'Theme/Dark-Status-Generic-Information-Foreground-Hover': string;
  'Theme/Dark-Status-Generic-Information-Foreground-Pressed': string;
  'Theme/Dark-Status-Severe-Background-1-Rest': string;
  'Theme/Dark-Status-Severe-Background-3-Rest': string;
  'Theme/Dark-Status-Severe-Foreground-1-Rest': string;
  'Theme/Dark-Status-Severe-Foreground-3-Rest': string;
  'Theme/Dark-Status-Severe-Stroke-1-Rest': string;
  'Theme/Dark-Status-Severe-Stroke-2-Rest': string;
  'Theme/Dark-Shadow-ambient': string;
  'Theme/Dark-Shadow-ambient-lighter': string;
  'Theme/Dark-Shadow-ambient-darker': string;
  'Theme/Dark-Shadow-brand-ambient': string;
  'Theme/Dark-Shadow-key': string;
  'Theme/Dark-Shadow-key-lighter': string;
  'Theme/Dark-Shadow-key-darker': string;
  'Theme/Dark-Shadow-brand-key': string;
  'Theme/Dark-Data viz-Foreground-Labels-Categorical': string;
  'Theme/Dark-Data viz-Foreground-Labels-Data': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Blue': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Gray': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Red': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Teal': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Ocean': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Green': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Yellow300': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Blue400': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Gray400': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Red400': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Teal300': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Red300': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Teal400': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Ocean400': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Green400': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Yellow400': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Green300': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Gray300': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Blue200': string;
  'Theme/Dark-Data viz-Foreground-Labels-Color-Ocean200': string;
  'Theme/Dark-Data viz-Foreground-Accessibility-Text dark bkgd': string;
  'Theme/Dark-Data viz-Foreground-Accessibility-Text light bkgd': string;
  'Theme/Dark-Data viz-Foreground-KPI Card-Text dark bkgd': string;
  'Theme/Dark-Data viz-Foreground-KPI Card-Text light bkgd': string;
  'Theme/Dark-Data viz-Stroke-Gridline': string;
  'Theme/Dark-Data viz-Stroke-Axis-Target-Benchmark': string;
  'Theme/Dark-Data viz-Stroke-Color-Blue': string;
  'Theme/Dark-Data viz-Stroke-Color-Blue400': string;
  'Theme/Dark-Data viz-Stroke-Color-Gray': string;
  'Theme/Dark-Data viz-Stroke-Color-Gray400': string;
  'Theme/Dark-Data viz-Stroke-Color-Red': string;
  'Theme/Dark-Data viz-Stroke-Color-Red300': string;
  'Theme/Dark-Data viz-Stroke-Color-Red400': string;
  'Theme/Dark-Data viz-Stroke-Color-Teal': string;
  'Theme/Dark-Data viz-Stroke-Color-Teal300': string;
  'Theme/Dark-Data viz-Stroke-Color-Teal400': string;
  'Theme/Dark-Data viz-Stroke-Color-Ocean': string;
  'Theme/Dark-Data viz-Stroke-Color-Ocean400': string;
  'Theme/Dark-Data viz-Stroke-Color-Green': string;
  'Theme/Dark-Data viz-Stroke-Color-Green300': string;
  'Theme/Dark-Data viz-Stroke-Color-Green400': string;
  'Theme/Dark-Data viz-Stroke-Color-Yellow300': string;
  'Theme/Dark-Data viz-Stroke-Color-Yellow400': string;
  'Theme/Dark-Data viz-Stroke-Color-Gray300': string;
  'Theme/Dark-Data viz-Stroke-Color-Blue200': string;
  'Theme/Dark-Data viz-Stroke-Color-Ocean200': string;
  'Theme/Dark-Data viz-Stroke-Color-Yellow': string;
  'Theme/Dark-Data viz-Stroke-Trend-Average': string;
  'Theme/Dark-Data viz-Stroke-Accessible outline': string;
  'Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Positive': string;
  'Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Negative': string;
  'Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Notice': string;
  'Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Positive': string;
  'Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Negative': string;
  'Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Notice': string;
  'Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Positive': string;
  'Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Negative': string;
  'Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Notice': string;
  'Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Positive': string;
  'Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Negative': string;
  'Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Notice': string;
  'Theme/Dark-Data viz-Semantic-Background-Positive': string;
  'Theme/Dark-Data viz-Semantic-Background-Negative': string;
  'Theme/Dark-Data viz-Semantic-Background-Notice': string;
  'Theme/Dark-Data viz-Background-Core-Blue': string;
  'Theme/Dark-Data viz-Background-Core-Gray': string;
  'Theme/Dark-Data viz-Background-Core-Red': string;
  'Theme/Dark-Data viz-Background-Core-Teal': string;
  'Theme/Dark-Data viz-Background-Core-Ocean': string;
  'Theme/Dark-Data viz-Background-Core-Green': string;
  'Theme/Dark-Data viz-Background-Core-Yellow': string;
  'Theme/Dark-Data viz-Background-Sequential-Blue400': string;
  'Theme/Dark-Data viz-Background-Sequential-Gray400': string;
  'Theme/Dark-Data viz-Background-Sequential-Red300': string;
  'Theme/Dark-Data viz-Background-Sequential-Red400': string;
  'Theme/Dark-Data viz-Background-Sequential-Teal300': string;
  'Theme/Dark-Data viz-Background-Sequential-Teal400': string;
  'Theme/Dark-Data viz-Background-Sequential-Ocean400': string;
  'Theme/Dark-Data viz-Background-Sequential-Green300': string;
  'Theme/Dark-Data viz-Background-Sequential-Green400': string;
  'Theme/Dark-Data viz-Background-Sequential-Yellow300': string;
  'Theme/Dark-Data viz-Background-Sequential-Yellow400': string;
  'Theme/Dark-Data viz-Background-Sequential-Blue300': string;
  'Theme/Dark-Data viz-Background-Sequential-Blue200': string;
  'Theme/Dark-Data viz-Background-Sequential-Blue100': string;
  'Theme/Dark-Data viz-Background-Sequential-Gray300': string;
  'Theme/Dark-Data viz-Background-Sequential-Gray200': string;
  'Theme/Dark-Data viz-Background-Sequential-Gray100': string;
  'Theme/Dark-Data viz-Background-Sequential-Red200': string;
  'Theme/Dark-Data viz-Background-Sequential-Red100': string;
  'Theme/Dark-Data viz-Background-Sequential-Teal200': string;
  'Theme/Dark-Data viz-Background-Sequential-Teal100': string;
  'Theme/Dark-Data viz-Background-Sequential-Ocean300': string;
  'Theme/Dark-Data viz-Background-Sequential-Ocean200': string;
  'Theme/Dark-Data viz-Background-Sequential-Ocean100': string;
  'Theme/Dark-Data viz-Background-Sequential-Green200': string;
  'Theme/Dark-Data viz-Background-Sequential-Green100': string;
  'Theme/Dark-Data viz-Background-Sequential-Yellow200': string;
  'Theme/Dark-Data viz-Background-Sequential-Yellow100': string;
  'Theme/Dark-Data viz-Background-Neutral-Black': string;
  'Theme/Dark-Control logic-Theme switch': string;

  // Global/Value tokens
  'Global/Value-Colors-Neutral-Black': string;
  'Global/Value-Colors-Neutral-Grey-6': string;
  'Global/Value-Colors-Neutral-Grey-8': string;
  'Global/Value-Colors-Neutral-Grey-10': string;
  'Global/Value-Colors-Neutral-Grey-12': string;
  'Global/Value-Colors-Neutral-Grey-20': string;
  'Global/Value-Colors-Neutral-Grey-30': string;
  'Global/Value-Colors-Neutral-Grey-40': string;
  'Global/Value-Colors-Neutral-Grey-50': string;
  'Global/Value-Colors-Neutral-Grey-60': string;
  'Global/Value-Colors-Neutral-Grey-70': string;
  'Global/Value-Colors-Neutral-Grey-80': string;
  'Global/Value-Colors-Neutral-Grey-90': string;
  'Global/Value-Colors-Neutral-White': string;
  'Global/Value-Colors-Shared-Burgundy-Shade 50': string;
  'Global/Value-Colors-Shared-Burgundy-Shade 40': string;
  'Global/Value-Colors-Shared-Burgundy-Shade 30': string;
  'Global/Value-Colors-Shared-Burgundy-Shade 20': string;
  'Global/Value-Colors-Shared-Burgundy-Shade 10': string;
  'Global/Value-Colors-Shared-Burgundy-Primary': string;
  'Global/Value-Colors-Shared-Burgundy-Tint 10': string;
  'Global/Value-Colors-Shared-Burgundy-Tint 20': string;
  'Global/Value-Colors-Shared-Burgundy-Tint 30': string;
  'Global/Value-Colors-Shared-Burgundy-Tint 40': string;
  'Global/Value-Colors-Shared-Burgundy-Tint 50': string;
  'Global/Value-Colors-Shared-Burgundy-Tint 60': string;
  'Global/Value-Colors-Shared-Cranberry-Primary': string;
  'Global/Value-Colors-Shared-Cranberry-Tint 30': string;
  'Global/Value-Colors-Shared-Cranberry-Tint 60': string;
  'Global/Value-Colors-Shared-Red-Shade 50': string;
  'Global/Value-Colors-Shared-Red-Shade 40': string;
  'Global/Value-Colors-Shared-Red-Shade 30': string;
  'Global/Value-Colors-Shared-Red-Shade 20': string;
  'Global/Value-Colors-Shared-Red-Shade 10': string;
  'Global/Value-Colors-Shared-Red-Primary': string;
  'Global/Value-Colors-Shared-Red-Tint 10': string;
  'Global/Value-Colors-Shared-Red-Tint 20': string;
  'Global/Value-Colors-Shared-Red-Tint 30': string;
  'Global/Value-Colors-Shared-Red-Tint 40': string;
  'Global/Value-Colors-Shared-Red-Tint 50': string;
  'Global/Value-Colors-Shared-Red-Tint 60': string;
  'Global/Value-Colors-Shared-Dark Orange-Primary': string;
  'Global/Value-Colors-Shared-Dark Orange-Tint 30': string;
  'Global/Value-Colors-Shared-Dark Orange-Tint 60': string;
  'Global/Value-Colors-Shared-Bronze-Shade 50': string;
  'Global/Value-Colors-Shared-Bronze-Shade 40': string;
  'Global/Value-Colors-Shared-Bronze-Shade 30': string;
  'Global/Value-Colors-Shared-Bronze-Shade 20': string;
  'Global/Value-Colors-Shared-Bronze-Shade 10': string;
  'Global/Value-Colors-Shared-Bronze-Primary': string;
  'Global/Value-Colors-Shared-Bronze-Tint 10': string;
  'Global/Value-Colors-Shared-Bronze-Tint 20': string;
  'Global/Value-Colors-Shared-Bronze-Tint 30': string;
  'Global/Value-Colors-Shared-Bronze-Tint 40': string;
  'Global/Value-Colors-Shared-Bronze-Tint 50': string;
  'Global/Value-Colors-Shared-Bronze-Tint 60': string;
  'Global/Value-Colors-Shared-Orange-Primary': string;
  'Global/Value-Colors-Shared-Orange-Tint 30': string;
  'Global/Value-Colors-Shared-Orange-Tint 60': string;
  'Global/Value-Colors-Shared-Peach-Shade 50': string;
  'Global/Value-Colors-Shared-Peach-Shade 40': string;
  'Global/Value-Colors-Shared-Peach-Shade 30': string;
  'Global/Value-Colors-Shared-Peach-Shade 20': string;
  'Global/Value-Colors-Shared-Peach-Shade 10': string;
  'Global/Value-Colors-Shared-Peach-Primary': string;
  'Global/Value-Colors-Shared-Peach-Tint 10': string;
  'Global/Value-Colors-Shared-Peach-Tint 20': string;
  'Global/Value-Colors-Shared-Peach-Tint 30': string;
  'Global/Value-Colors-Shared-Peach-Tint 40': string;
  'Global/Value-Colors-Shared-Peach-Tint 50': string;
  'Global/Value-Colors-Shared-Peach-Tint 60': string;
  'Global/Value-Colors-Shared-Marigold-Shade 50': string;
  'Global/Value-Colors-Shared-Marigold-Shade 40': string;
  'Global/Value-Colors-Shared-Marigold-Shade 30': string;
  'Global/Value-Colors-Shared-Marigold-Shade 20': string;
  'Global/Value-Colors-Shared-Marigold-Shade 10': string;
  'Global/Value-Colors-Shared-Marigold-Primary': string;
  'Global/Value-Colors-Shared-Marigold-Tint 10': string;
  'Global/Value-Colors-Shared-Marigold-Tint 20': string;
  'Global/Value-Colors-Shared-Marigold-Tint 30': string;
  'Global/Value-Colors-Shared-Marigold-Tint 40': string;
  'Global/Value-Colors-Shared-Marigold-Tint 50': string;
  'Global/Value-Colors-Shared-Marigold-Tint 60': string;
  'Global/Value-Colors-Shared-Yellow-Shade 50': string;
  'Global/Value-Colors-Shared-Yellow-Shade 40': string;
  'Global/Value-Colors-Shared-Yellow-Shade 30': string;
  'Global/Value-Colors-Shared-Yellow-Shade 20': string;
  'Global/Value-Colors-Shared-Yellow-Shade 10': string;
  'Global/Value-Colors-Shared-Yellow-Primary': string;
  'Global/Value-Colors-Shared-Yellow-Tint 10': string;
  'Global/Value-Colors-Shared-Yellow-Tint 20': string;
  'Global/Value-Colors-Shared-Yellow-Tint 30': string;
  'Global/Value-Colors-Shared-Yellow-Tint 40': string;
  'Global/Value-Colors-Shared-Yellow-Tint 50': string;
  'Global/Value-Colors-Shared-Yellow-Tint 60': string;
  'Global/Value-Colors-Shared-Gold-Shade 50': string;
  'Global/Value-Colors-Shared-Gold-Shade 40': string;
  'Global/Value-Colors-Shared-Gold-Shade 30': string;
  'Global/Value-Colors-Shared-Gold-Shade 20': string;
  'Global/Value-Colors-Shared-Gold-Shade 10': string;
  'Global/Value-Colors-Shared-Gold-Primary': string;
  'Global/Value-Colors-Shared-Gold-Tint 10': string;
  'Global/Value-Colors-Shared-Gold-Tint 20': string;
  'Global/Value-Colors-Shared-Gold-Tint 30': string;
  'Global/Value-Colors-Shared-Gold-Tint 40': string;
  'Global/Value-Colors-Shared-Gold-Tint 50': string;
  'Global/Value-Colors-Shared-Gold-Tint 60': string;
  'Global/Value-Colors-Shared-Brass-Shade 50': string;
  'Global/Value-Colors-Shared-Brass-Shade 40': string;
  'Global/Value-Colors-Shared-Brass-Shade 30': string;
  'Global/Value-Colors-Shared-Brass-Shade 20': string;
  'Global/Value-Colors-Shared-Brass-Shade 10': string;
  'Global/Value-Colors-Shared-Brass-Primary': string;
  'Global/Value-Colors-Shared-Brass-Tint 10': string;
  'Global/Value-Colors-Shared-Brass-Tint 20': string;
  'Global/Value-Colors-Shared-Brass-Tint 30': string;
  'Global/Value-Colors-Shared-Brass-Tint 40': string;
  'Global/Value-Colors-Shared-Brass-Tint 50': string;
  'Global/Value-Colors-Shared-Brass-Tint 60': string;
  'Global/Value-Colors-Shared-Brown-Shade 50': string;
  'Global/Value-Colors-Shared-Brown-Shade 40': string;
  'Global/Value-Colors-Shared-Brown-Shade 30': string;
  'Global/Value-Colors-Shared-Brown-Shade 20': string;
  'Global/Value-Colors-Shared-Brown-Shade 10': string;
  'Global/Value-Colors-Shared-Brown-Primary': string;
  'Global/Value-Colors-Shared-Brown-Tint 10': string;
  'Global/Value-Colors-Shared-Brown-Tint 20': string;
  'Global/Value-Colors-Shared-Brown-Tint 30': string;
  'Global/Value-Colors-Shared-Brown-Tint 40': string;
  'Global/Value-Colors-Shared-Brown-Tint 50': string;
  'Global/Value-Colors-Shared-Brown-Tint 60': string;
  'Global/Value-Colors-Shared-Dark brown-Shade 50': string;
  'Global/Value-Colors-Shared-Dark brown-Shade 40': string;
  'Global/Value-Colors-Shared-Dark brown-Shade 30': string;
  'Global/Value-Colors-Shared-Dark brown-Shade 20': string;
  'Global/Value-Colors-Shared-Dark brown-Shade 10': string;
  'Global/Value-Colors-Shared-Dark brown-Primary': string;
  'Global/Value-Colors-Shared-Dark brown-Tint 10': string;
  'Global/Value-Colors-Shared-Dark brown-Tint 20': string;
  'Global/Value-Colors-Shared-Dark brown-Tint 30': string;
  'Global/Value-Colors-Shared-Dark brown-Tint 40': string;
  'Global/Value-Colors-Shared-Dark brown-Tint 50': string;
  'Global/Value-Colors-Shared-Dark brown-Tint 60': string;
  'Global/Value-Colors-Shared-Lime-Shade 50': string;
  'Global/Value-Colors-Shared-Lime-Shade 40': string;
  'Global/Value-Colors-Shared-Lime-Shade 30': string;
  'Global/Value-Colors-Shared-Lime-Shade 20': string;
  'Global/Value-Colors-Shared-Lime-Shade 10': string;
  'Global/Value-Colors-Shared-Lime-Primary': string;
  'Global/Value-Colors-Shared-Lime-Tint 10': string;
  'Global/Value-Colors-Shared-Lime-Tint 20': string;
  'Global/Value-Colors-Shared-Lime-Tint 30': string;
  'Global/Value-Colors-Shared-Lime-Tint 40': string;
  'Global/Value-Colors-Shared-Lime-Tint 50': string;
  'Global/Value-Colors-Shared-Lime-Tint 60': string;
  'Global/Value-Colors-Shared-Forest-Shade 50': string;
  'Global/Value-Colors-Shared-Forest-Shade 40': string;
  'Global/Value-Colors-Shared-Forest-Shade 30': string;
  'Global/Value-Colors-Shared-Forest-Shade 20': string;
  'Global/Value-Colors-Shared-Forest-Shade 10': string;
  'Global/Value-Colors-Shared-Forest-Primary': string;
  'Global/Value-Colors-Shared-Forest-Tint 10': string;
  'Global/Value-Colors-Shared-Forest-Tint 20': string;
  'Global/Value-Colors-Shared-Forest-Tint 30': string;
  'Global/Value-Colors-Shared-Forest-Tint 40': string;
  'Global/Value-Colors-Shared-Forest-Tint 50': string;
  'Global/Value-Colors-Shared-Forest-Tint 60': string;
  'Global/Value-Colors-Shared-Seafoam-Shade 50': string;
  'Global/Value-Colors-Shared-Seafoam-Shade 40': string;
  'Global/Value-Colors-Shared-Seafoam-Shade 30': string;
  'Global/Value-Colors-Shared-Seafoam-Shade 20': string;
  'Global/Value-Colors-Shared-Seafoam-Shade 10': string;
  'Global/Value-Colors-Shared-Seafoam-Primary': string;
  'Global/Value-Colors-Shared-Seafoam-Tint 10': string;
  'Global/Value-Colors-Shared-Seafoam-Tint 20': string;
  'Global/Value-Colors-Shared-Seafoam-Tint 30': string;
  'Global/Value-Colors-Shared-Seafoam-Tint 40': string;
  'Global/Value-Colors-Shared-Seafoam-Tint 50': string;
  'Global/Value-Colors-Shared-Seafoam-Tint 60': string;
  'Global/Value-Colors-Shared-Light green-Shade 50': string;
  'Global/Value-Colors-Shared-Light green-Shade 40': string;
  'Global/Value-Colors-Shared-Light green-Shade 30': string;
  'Global/Value-Colors-Shared-Light green-Shade 20': string;
  'Global/Value-Colors-Shared-Light green-Shade 10': string;
  'Global/Value-Colors-Shared-Light green-Primary': string;
  'Global/Value-Colors-Shared-Light green-Tint 10': string;
  'Global/Value-Colors-Shared-Light green-Tint 20': string;
  'Global/Value-Colors-Shared-Light green-Tint 30': string;
  'Global/Value-Colors-Shared-Light green-Tint 40': string;
  'Global/Value-Colors-Shared-Light green-Tint 50': string;
  'Global/Value-Colors-Shared-Light green-Tint 60': string;
  'Global/Value-Colors-Shared-Green-Primary': string;
  'Global/Value-Colors-Shared-Green-Tint 30': string;
  'Global/Value-Colors-Shared-Green-Tint 60': string;
  'Global/Value-Colors-Shared-Dark green-Shade 50': string;
  'Global/Value-Colors-Shared-Dark green-Shade 40': string;
  'Global/Value-Colors-Shared-Dark green-Shade 30': string;
  'Global/Value-Colors-Shared-Dark green-Shade 20': string;
  'Global/Value-Colors-Shared-Dark green-Shade 10': string;
  'Global/Value-Colors-Shared-Dark green-Primary': string;
  'Global/Value-Colors-Shared-Dark green-Tint 10': string;
  'Global/Value-Colors-Shared-Dark green-Tint 20': string;
  'Global/Value-Colors-Shared-Dark green-Tint 30': string;
  'Global/Value-Colors-Shared-Dark green-Tint 40': string;
  'Global/Value-Colors-Shared-Dark green-Tint 50': string;
  'Global/Value-Colors-Shared-Dark green-Tint 60': string;
  'Global/Value-Colors-Shared-Light teal-Shade 50': string;
  'Global/Value-Colors-Shared-Light teal-Shade 40': string;
  'Global/Value-Colors-Shared-Light teal-Shade 30': string;
  'Global/Value-Colors-Shared-Light teal-Shade 20': string;
  'Global/Value-Colors-Shared-Light teal-Shade 10': string;
  'Global/Value-Colors-Shared-Light teal-Primary': string;
  'Global/Value-Colors-Shared-Light teal-Tint 10': string;
  'Global/Value-Colors-Shared-Light teal-Tint 20': string;
  'Global/Value-Colors-Shared-Light teal-Tint 30': string;
  'Global/Value-Colors-Shared-Light teal-Tint 40': string;
  'Global/Value-Colors-Shared-Light teal-Tint 50': string;
  'Global/Value-Colors-Shared-Light teal-Tint 60': string;
  'Global/Value-Colors-Shared-Teal-Shade 50': string;
  'Global/Value-Colors-Shared-Teal-Shade 40': string;
  'Global/Value-Colors-Shared-Teal-Shade 30': string;
  'Global/Value-Colors-Shared-Teal-Shade 20': string;
  'Global/Value-Colors-Shared-Teal-Shade 10': string;
  'Global/Value-Colors-Shared-Teal-Primary': string;
  'Global/Value-Colors-Shared-Teal-Tint 10': string;
  'Global/Value-Colors-Shared-Teal-Tint 20': string;
  'Global/Value-Colors-Shared-Teal-Tint 30': string;
  'Global/Value-Colors-Shared-Teal-Tint 40': string;
  'Global/Value-Colors-Shared-Teal-Tint 50': string;
  'Global/Value-Colors-Shared-Teal-Tint 60': string;
  'Global/Value-Colors-Shared-Dark teal-Shade 50': string;
  'Global/Value-Colors-Shared-Dark teal-Shade 40': string;
  'Global/Value-Colors-Shared-Dark teal-Shade 30': string;
  'Global/Value-Colors-Shared-Dark teal-Shade 20': string;
  'Global/Value-Colors-Shared-Dark teal-Shade 10': string;
  'Global/Value-Colors-Shared-Dark teal-Primary': string;
  'Global/Value-Colors-Shared-Dark teal-Tint 10': string;
  'Global/Value-Colors-Shared-Dark teal-Tint 20': string;
  'Global/Value-Colors-Shared-Dark teal-Tint 30': string;
  'Global/Value-Colors-Shared-Dark teal-Tint 40': string;
  'Global/Value-Colors-Shared-Dark teal-Tint 50': string;
  'Global/Value-Colors-Shared-Dark teal-Tint 60': string;
  'Global/Value-Colors-Shared-Cyan-Shade 50': string;
  'Global/Value-Colors-Shared-Cyan-Shade 40': string;
  'Global/Value-Colors-Shared-Cyan-Shade 30': string;
  'Global/Value-Colors-Shared-Cyan-Shade 20': string;
  'Global/Value-Colors-Shared-Cyan-Shade 10': string;
  'Global/Value-Colors-Shared-Cyan-Primary': string;
  'Global/Value-Colors-Shared-Cyan-Tint 10': string;
  'Global/Value-Colors-Shared-Cyan-Tint 20': string;
  'Global/Value-Colors-Shared-Cyan-Tint 30': string;
  'Global/Value-Colors-Shared-Cyan-Tint 40': string;
  'Global/Value-Colors-Shared-Cyan-Tint 50': string;
  'Global/Value-Colors-Shared-Cyan-Tint 60': string;
  'Global/Value-Colors-Shared-Steel-Shade 50': string;
  'Global/Value-Colors-Shared-Steel-Shade 40': string;
  'Global/Value-Colors-Shared-Steel-Shade 30': string;
  'Global/Value-Colors-Shared-Steel-Shade 20': string;
  'Global/Value-Colors-Shared-Steel-Shade 10': string;
  'Global/Value-Colors-Shared-Steel-Primary': string;
  'Global/Value-Colors-Shared-Steel-Tint 10': string;
  'Global/Value-Colors-Shared-Steel-Tint 20': string;
  'Global/Value-Colors-Shared-Steel-Tint 30': string;
  'Global/Value-Colors-Shared-Steel-Tint 40': string;
  'Global/Value-Colors-Shared-Steel-Tint 50': string;
  'Global/Value-Colors-Shared-Steel-Tint 60': string;
  'Global/Value-Colors-Shared-Light blue-Shade 50': string;
  'Global/Value-Colors-Shared-Light blue-Shade 40': string;
  'Global/Value-Colors-Shared-Light blue-Shade 30': string;
  'Global/Value-Colors-Shared-Light blue-Shade 20': string;
  'Global/Value-Colors-Shared-Light blue-Shade 10': string;
  'Global/Value-Colors-Shared-Light blue-Primary': string;
  'Global/Value-Colors-Shared-Light blue-Tint 10': string;
  'Global/Value-Colors-Shared-Light blue-Tint 20': string;
  'Global/Value-Colors-Shared-Light blue-Tint 30': string;
  'Global/Value-Colors-Shared-Light blue-Tint 40': string;
  'Global/Value-Colors-Shared-Light blue-Tint 50': string;
  'Global/Value-Colors-Shared-Light blue-Tint 60': string;
  'Global/Value-Colors-Shared-Blue-Shade 50': string;
  'Global/Value-Colors-Shared-Blue-Shade 40': string;
  'Global/Value-Colors-Shared-Blue-Shade 30': string;
  'Global/Value-Colors-Shared-Blue-Shade 20': string;
  'Global/Value-Colors-Shared-Blue-Shade 10': string;
  'Global/Value-Colors-Shared-Blue-Primary': string;
  'Global/Value-Colors-Shared-Blue-Tint 10': string;
  'Global/Value-Colors-Shared-Blue-Tint 20': string;
  'Global/Value-Colors-Shared-Blue-Tint 30': string;
  'Global/Value-Colors-Shared-Blue-Tint 40': string;
  'Global/Value-Colors-Shared-Blue-Tint 50': string;
  'Global/Value-Colors-Shared-Blue-Tint 60': string;
  'Global/Value-Colors-Shared-Royal blue-Shade 50': string;
  'Global/Value-Colors-Shared-Royal blue-Shade 40': string;
  'Global/Value-Colors-Shared-Royal blue-Shade 30': string;
  'Global/Value-Colors-Shared-Royal blue-Shade 20': string;
  'Global/Value-Colors-Shared-Royal blue-Shade 10': string;
  'Global/Value-Colors-Shared-Royal blue-Primary': string;
  'Global/Value-Colors-Shared-Royal blue-Tint 10': string;
  'Global/Value-Colors-Shared-Royal blue-Tint 20': string;
  'Global/Value-Colors-Shared-Royal blue-Tint 30': string;
  'Global/Value-Colors-Shared-Royal blue-Tint 40': string;
  'Global/Value-Colors-Shared-Royal blue-Tint 50': string;
  'Global/Value-Colors-Shared-Royal blue-Tint 60': string;
  'Global/Value-Colors-Shared-Dark blue-Shade 50': string;
  'Global/Value-Colors-Shared-Dark blue-Shade 40': string;
  'Global/Value-Colors-Shared-Dark blue-Shade 30': string;
  'Global/Value-Colors-Shared-Dark blue-Shade 20': string;
  'Global/Value-Colors-Shared-Dark blue-Shade 10': string;
  'Global/Value-Colors-Shared-Dark blue-Primary': string;
  'Global/Value-Colors-Shared-Dark blue-Tint 10': string;
  'Global/Value-Colors-Shared-Dark blue-Tint 20': string;
  'Global/Value-Colors-Shared-Dark blue-Tint 30': string;
  'Global/Value-Colors-Shared-Dark blue-Tint 40': string;
  'Global/Value-Colors-Shared-Dark blue-Tint 50': string;
  'Global/Value-Colors-Shared-Dark blue-Tint 60': string;
  'Global/Value-Colors-Shared-Cornflower-Shade 50': string;
  'Global/Value-Colors-Shared-Cornflower-Shade 40': string;
  'Global/Value-Colors-Shared-Cornflower-Shade 30': string;
  'Global/Value-Colors-Shared-Cornflower-Shade 20': string;
  'Global/Value-Colors-Shared-Cornflower-Shade 10': string;
  'Global/Value-Colors-Shared-Cornflower-Primary': string;
  'Global/Value-Colors-Shared-Cornflower-Tint 10': string;
  'Global/Value-Colors-Shared-Cornflower-Tint 20': string;
  'Global/Value-Colors-Shared-Cornflower-Tint 30': string;
  'Global/Value-Colors-Shared-Cornflower-Tint 40': string;
  'Global/Value-Colors-Shared-Cornflower-Tint 50': string;
  'Global/Value-Colors-Shared-Cornflower-Tint 60': string;
  'Global/Value-Colors-Shared-Navy-Shade 50': string;
  'Global/Value-Colors-Shared-Navy-Shade 40': string;
  'Global/Value-Colors-Shared-Navy-Shade 30': string;
  'Global/Value-Colors-Shared-Navy-Shade 20': string;
  'Global/Value-Colors-Shared-Navy-Shade 10': string;
  'Global/Value-Colors-Shared-Navy-Primary': string;
  'Global/Value-Colors-Shared-Navy-Tint 10': string;
  'Global/Value-Colors-Shared-Navy-Tint 20': string;
  'Global/Value-Colors-Shared-Navy-Tint 30': string;
  'Global/Value-Colors-Shared-Navy-Tint 40': string;
  'Global/Value-Colors-Shared-Navy-Tint 50': string;
  'Global/Value-Colors-Shared-Navy-Tint 60': string;
  'Global/Value-Colors-Shared-Lavender-Shade 50': string;
  'Global/Value-Colors-Shared-Lavender-Shade 40': string;
  'Global/Value-Colors-Shared-Lavender-Shade 30': string;
  'Global/Value-Colors-Shared-Lavender-Shade 20': string;
  'Global/Value-Colors-Shared-Lavender-Shade 10': string;
  'Global/Value-Colors-Shared-Lavender-Primary': string;
  'Global/Value-Colors-Shared-Lavender-Tint 10': string;
  'Global/Value-Colors-Shared-Lavender-Tint 20': string;
  'Global/Value-Colors-Shared-Lavender-Tint 30': string;
  'Global/Value-Colors-Shared-Lavender-Tint 40': string;
  'Global/Value-Colors-Shared-Lavender-Tint 50': string;
  'Global/Value-Colors-Shared-Lavender-Tint 60': string;
  'Global/Value-Colors-Shared-Purple-Shade 50': string;
  'Global/Value-Colors-Shared-Purple-Shade 40': string;
  'Global/Value-Colors-Shared-Purple-Shade 30': string;
  'Global/Value-Colors-Shared-Purple-Shade 20': string;
  'Global/Value-Colors-Shared-Purple-Shade 10': string;
  'Global/Value-Colors-Shared-Purple-Primary': string;
  'Global/Value-Colors-Shared-Purple-Tint 10': string;
  'Global/Value-Colors-Shared-Purple-Tint 20': string;
  'Global/Value-Colors-Shared-Purple-Tint 30': string;
  'Global/Value-Colors-Shared-Purple-Tint 40': string;
  'Global/Value-Colors-Shared-Purple-Tint 50': string;
  'Global/Value-Colors-Shared-Purple-Tint 60': string;
  'Global/Value-Colors-Shared-Dark purple-Shade 50': string;
  'Global/Value-Colors-Shared-Dark purple-Shade 40': string;
  'Global/Value-Colors-Shared-Dark purple-Shade 30': string;
  'Global/Value-Colors-Shared-Dark purple-Shade 20': string;
  'Global/Value-Colors-Shared-Dark purple-Shade 10': string;
  'Global/Value-Colors-Shared-Dark purple-Primary': string;
  'Global/Value-Colors-Shared-Dark purple-Tint 10': string;
  'Global/Value-Colors-Shared-Dark purple-Tint 20': string;
  'Global/Value-Colors-Shared-Dark purple-Tint 30': string;
  'Global/Value-Colors-Shared-Dark purple-Tint 40': string;
  'Global/Value-Colors-Shared-Dark purple-Tint 50': string;
  'Global/Value-Colors-Shared-Dark purple-Tint 60': string;
  'Global/Value-Colors-Shared-Orchid-Shade 50': string;
  'Global/Value-Colors-Shared-Orchid-Shade 40': string;
  'Global/Value-Colors-Shared-Orchid-Shade 30': string;
  'Global/Value-Colors-Shared-Orchid-Shade 20': string;
  'Global/Value-Colors-Shared-Orchid-Shade 10': string;
  'Global/Value-Colors-Shared-Orchid-Primary': string;
  'Global/Value-Colors-Shared-Orchid-Tint 10': string;
  'Global/Value-Colors-Shared-Orchid-Tint 20': string;
  'Global/Value-Colors-Shared-Orchid-Tint 30': string;
  'Global/Value-Colors-Shared-Orchid-Tint 40': string;
  'Global/Value-Colors-Shared-Orchid-Tint 50': string;
  'Global/Value-Colors-Shared-Orchid-Tint 60': string;
  'Global/Value-Colors-Shared-Grape-Shade 50': string;
  'Global/Value-Colors-Shared-Grape-Shade 40': string;
  'Global/Value-Colors-Shared-Grape-Shade 30': string;
  'Global/Value-Colors-Shared-Grape-Shade 20': string;
  'Global/Value-Colors-Shared-Grape-Shade 10': string;
  'Global/Value-Colors-Shared-Grape-Primary': string;
  'Global/Value-Colors-Shared-Grape-Tint 10': string;
  'Global/Value-Colors-Shared-Grape-Tint 20': string;
  'Global/Value-Colors-Shared-Grape-Tint 30': string;
  'Global/Value-Colors-Shared-Grape-Tint 40': string;
  'Global/Value-Colors-Shared-Grape-Tint 50': string;
  'Global/Value-Colors-Shared-Grape-Tint 60': string;
  'Global/Value-Colors-Shared-Berry-Shade 50': string;
  'Global/Value-Colors-Shared-Berry-Shade 40': string;
  'Global/Value-Colors-Shared-Berry-Shade 30': string;
  'Global/Value-Colors-Shared-Berry-Shade 20': string;
  'Global/Value-Colors-Shared-Berry-Shade 10': string;
  'Global/Value-Colors-Shared-Berry-Primary': string;
  'Global/Value-Colors-Shared-Berry-Tint 10': string;
  'Global/Value-Colors-Shared-Berry-Tint 20': string;
  'Global/Value-Colors-Shared-Berry-Tint 30': string;
  'Global/Value-Colors-Shared-Berry-Tint 40': string;
  'Global/Value-Colors-Shared-Berry-Tint 50': string;
  'Global/Value-Colors-Shared-Berry-Tint 60': string;
  'Global/Value-Colors-Shared-Lilac-Shade 50': string;
  'Global/Value-Colors-Shared-Lilac-Shade 40': string;
  'Global/Value-Colors-Shared-Lilac-Shade 30': string;
  'Global/Value-Colors-Shared-Lilac-Shade 20': string;
  'Global/Value-Colors-Shared-Lilac-Shade 10': string;
  'Global/Value-Colors-Shared-Lilac-Primary': string;
  'Global/Value-Colors-Shared-Lilac-Tint 10': string;
  'Global/Value-Colors-Shared-Lilac-Tint 20': string;
  'Global/Value-Colors-Shared-Lilac-Tint 30': string;
  'Global/Value-Colors-Shared-Lilac-Tint 40': string;
  'Global/Value-Colors-Shared-Lilac-Tint 50': string;
  'Global/Value-Colors-Shared-Lilac-Tint 60': string;
  'Global/Value-Colors-Shared-Pink-Shade 50': string;
  'Global/Value-Colors-Shared-Pink-Shade 40': string;
  'Global/Value-Colors-Shared-Pink-Shade 30': string;
  'Global/Value-Colors-Shared-Pink-Shade 20': string;
  'Global/Value-Colors-Shared-Pink-Shade 10': string;
  'Global/Value-Colors-Shared-Pink-Primary': string;
  'Global/Value-Colors-Shared-Pink-Tint 10': string;
  'Global/Value-Colors-Shared-Pink-Tint 20': string;
  'Global/Value-Colors-Shared-Pink-Tint 30': string;
  'Global/Value-Colors-Shared-Pink-Tint 40': string;
  'Global/Value-Colors-Shared-Pink-Tint 50': string;
  'Global/Value-Colors-Shared-Pink-Tint 60': string;
  'Global/Value-Colors-Shared-Hot pink-Shade 50': string;
  'Global/Value-Colors-Shared-Hot pink-Shade 40': string;
  'Global/Value-Colors-Shared-Hot pink-Shade 30': string;
  'Global/Value-Colors-Shared-Hot pink-Shade 20': string;
  'Global/Value-Colors-Shared-Hot pink-Shade 10': string;
  'Global/Value-Colors-Shared-Hot pink-Primary': string;
  'Global/Value-Colors-Shared-Hot pink-Tint 10': string;
  'Global/Value-Colors-Shared-Hot pink-Tint 20': string;
  'Global/Value-Colors-Shared-Hot pink-Tint 30': string;
  'Global/Value-Colors-Shared-Hot pink-Tint 40': string;
  'Global/Value-Colors-Shared-Hot pink-Tint 50': string;
  'Global/Value-Colors-Shared-Hot pink-Tint 60': string;
  'Global/Value-Colors-Shared-Magenta-Shade 50': string;
  'Global/Value-Colors-Shared-Magenta-Shade 40': string;
  'Global/Value-Colors-Shared-Magenta-Shade 30': string;
  'Global/Value-Colors-Shared-Magenta-Shade 20': string;
  'Global/Value-Colors-Shared-Magenta-Shade 10': string;
  'Global/Value-Colors-Shared-Magenta-Primary': string;
  'Global/Value-Colors-Shared-Magenta-Tint 10': string;
  'Global/Value-Colors-Shared-Magenta-Tint 20': string;
  'Global/Value-Colors-Shared-Magenta-Tint 30': string;
  'Global/Value-Colors-Shared-Magenta-Tint 40': string;
  'Global/Value-Colors-Shared-Magenta-Tint 50': string;
  'Global/Value-Colors-Shared-Magenta-Tint 60': string;
  'Global/Value-Colors-Shared-Plum-Shade 50': string;
  'Global/Value-Colors-Shared-Plum-Shade 40': string;
  'Global/Value-Colors-Shared-Plum-Shade 30': string;
  'Global/Value-Colors-Shared-Plum-Shade 20': string;
  'Global/Value-Colors-Shared-Plum-Shade 10': string;
  'Global/Value-Colors-Shared-Plum-Primary': string;
  'Global/Value-Colors-Shared-Plum-Tint 10': string;
  'Global/Value-Colors-Shared-Plum-Tint 20': string;
  'Global/Value-Colors-Shared-Plum-Tint 30': string;
  'Global/Value-Colors-Shared-Plum-Tint 40': string;
  'Global/Value-Colors-Shared-Plum-Tint 50': string;
  'Global/Value-Colors-Shared-Plum-Tint 60': string;
  'Global/Value-Colors-Shared-Beige-Shade 50': string;
  'Global/Value-Colors-Shared-Beige-Shade 40': string;
  'Global/Value-Colors-Shared-Beige-Shade 30': string;
  'Global/Value-Colors-Shared-Beige-Shade 20': string;
  'Global/Value-Colors-Shared-Beige-Shade 10': string;
  'Global/Value-Colors-Shared-Beige-Primary': string;
  'Global/Value-Colors-Shared-Beige-Tint 10': string;
  'Global/Value-Colors-Shared-Beige-Tint 20': string;
  'Global/Value-Colors-Shared-Beige-Tint 30': string;
  'Global/Value-Colors-Shared-Beige-Tint 40': string;
  'Global/Value-Colors-Shared-Beige-Tint 50': string;
  'Global/Value-Colors-Shared-Beige-Tint 60': string;
  'Global/Value-Colors-Shared-Mink-Shade 50': string;
  'Global/Value-Colors-Shared-Mink-Shade 40': string;
  'Global/Value-Colors-Shared-Mink-Shade 30': string;
  'Global/Value-Colors-Shared-Mink-Shade 20': string;
  'Global/Value-Colors-Shared-Mink-Shade 10': string;
  'Global/Value-Colors-Shared-Mink-Primary': string;
  'Global/Value-Colors-Shared-Mink-Tint 10': string;
  'Global/Value-Colors-Shared-Mink-Tint 20': string;
  'Global/Value-Colors-Shared-Mink-Tint 30': string;
  'Global/Value-Colors-Shared-Mink-Tint 40': string;
  'Global/Value-Colors-Shared-Mink-Tint 50': string;
  'Global/Value-Colors-Shared-Mink-Tint 60': string;
  'Global/Value-Colors-Shared-Silver-Shade 50': string;
  'Global/Value-Colors-Shared-Silver-Shade 40': string;
  'Global/Value-Colors-Shared-Silver-Shade 30': string;
  'Global/Value-Colors-Shared-Silver-Shade 20': string;
  'Global/Value-Colors-Shared-Silver-Shade 10': string;
  'Global/Value-Colors-Shared-Silver-Primary': string;
  'Global/Value-Colors-Shared-Silver-Tint 10': string;
  'Global/Value-Colors-Shared-Silver-Tint 20': string;
  'Global/Value-Colors-Shared-Silver-Tint 30': string;
  'Global/Value-Colors-Shared-Silver-Tint 40': string;
  'Global/Value-Colors-Shared-Silver-Tint 50': string;
  'Global/Value-Colors-Shared-Silver-Tint 60': string;
  'Global/Value-Colors-Shared-Platinum-Shade 50': string;
  'Global/Value-Colors-Shared-Platinum-Shade 40': string;
  'Global/Value-Colors-Shared-Platinum-Shade 30': string;
  'Global/Value-Colors-Shared-Platinum-Shade 20': string;
  'Global/Value-Colors-Shared-Platinum-Shade 10': string;
  'Global/Value-Colors-Shared-Platinum-Primary': string;
  'Global/Value-Colors-Shared-Platinum-Tint 10': string;
  'Global/Value-Colors-Shared-Platinum-Tint 20': string;
  'Global/Value-Colors-Shared-Platinum-Tint 30': string;
  'Global/Value-Colors-Shared-Platinum-Tint 40': string;
  'Global/Value-Colors-Shared-Platinum-Tint 50': string;
  'Global/Value-Colors-Shared-Platinum-Tint 60': string;
  'Global/Value-Colors-Shared-Anchor-Shade 50': string;
  'Global/Value-Colors-Shared-Anchor-Shade 40': string;
  'Global/Value-Colors-Shared-Anchor-Shade 30': string;
  'Global/Value-Colors-Shared-Anchor-Shade 20': string;
  'Global/Value-Colors-Shared-Anchor-Shade 10': string;
  'Global/Value-Colors-Shared-Anchor-Primary': string;
  'Global/Value-Colors-Shared-Anchor-Tint 10': string;
  'Global/Value-Colors-Shared-Anchor-Tint 20': string;
  'Global/Value-Colors-Shared-Anchor-Tint 30': string;
  'Global/Value-Colors-Shared-Anchor-Tint 40': string;
  'Global/Value-Colors-Shared-Anchor-Tint 50': string;
  'Global/Value-Colors-Shared-Anchor-Tint 60': string;
  'Global/Value-Colors-Shared-Charcoal-Shade 50': string;
  'Global/Value-Colors-Shared-Charcoal-Shade 40': string;
  'Global/Value-Colors-Shared-Charcoal-Shade 30': string;
  'Global/Value-Colors-Shared-Charcoal-Shade 20': string;
  'Global/Value-Colors-Shared-Charcoal-Shade 10': string;
  'Global/Value-Colors-Shared-Charcoal-Primary': string;
  'Global/Value-Colors-Shared-Charcoal-Tint 10': string;
  'Global/Value-Colors-Shared-Charcoal-Tint 20': string;
  'Global/Value-Colors-Shared-Charcoal-Tint 30': string;
  'Global/Value-Colors-Shared-Charcoal-Tint 40': string;
  'Global/Value-Colors-Shared-Charcoal-Tint 50': string;
  'Global/Value-Colors-Shared-Charcoal-Tint 60': string;
  'Global/Value-Colors-Shared-Information-Primary': string;
  'Global/Value-Colors-Shared-Information-Tint 30': string;
  'Global/Value-Colors-Shared-Information-Tint 60': string;
  'Global/Value-Colors-Shared-Information-Tint 40': string;
  'Global/Value-Colors-Shared-Information-Tint 50': string;
  'Global/Value-Colors-Shared-Information-Tint 20': string;
  'Global/Value-Colors-Shared-Information-Tint 10': string;
  'Global/Value-Colors-Shared-Information-Shade 10': string;
  'Global/Value-Colors-Shared-Information-Shade 20': string;
  'Global/Value-Colors-Alpha-White-0': string;
  'Global/Value-Colors-Alpha-White-5': string;
  'Global/Value-Colors-Alpha-White-10': string;
  'Global/Value-Colors-Alpha-White-20': string;
  'Global/Value-Colors-Alpha-White-30': string;
  'Global/Value-Colors-Alpha-White-40': string;
  'Global/Value-Colors-Alpha-White-50': string;
  'Global/Value-Colors-Alpha-White-60': string;
  'Global/Value-Colors-Alpha-White-70': string;
  'Global/Value-Colors-Alpha-White-80': string;
  'Global/Value-Colors-Alpha-White-90': string;
  'Global/Value-Colors-Alpha-Black-0': string;
  'Global/Value-Colors-Alpha-Black-5': string;
  'Global/Value-Colors-Alpha-Black-10': string;
  'Global/Value-Colors-Alpha-Black-20': string;
  'Global/Value-Colors-Alpha-Black-30': string;
  'Global/Value-Colors-Alpha-Black-40': string;
  'Global/Value-Colors-Alpha-Black-50': string;
  'Global/Value-Colors-Alpha-Black-60': string;
  'Global/Value-Colors-Alpha-Black-70': string;
  'Global/Value-Colors-Alpha-Black-80': string;
  'Global/Value-Colors-Alpha-Black-90': string;
  'Global/Value-Colors-Alpha-Brand-10-5': string;
  'Global/Value-Colors-Alpha-Brand-10-10': string;
  'Global/Value-Colors-Alpha-Brand-10-20': string;
  'Global/Value-Colors-Alpha-Brand-10-30': string;
  'Global/Value-Colors-Alpha-Brand-10-40': string;
  'Global/Value-Colors-Alpha-Brand-10-50': string;
  'Global/Value-Colors-Alpha-Brand-10-60': string;
  'Global/Value-Colors-Alpha-Brand-10-70': string;
  'Global/Value-Colors-Alpha-Brand-10-80': string;
  'Global/Value-Colors-Alpha-Brand-10-90': string;
  'Global/Value-Colors-Data viz-Core-Blue': string;
  'Global/Value-Colors-Data viz-Core-Gray': string;
  'Global/Value-Colors-Data viz-Core-Red': string;
  'Global/Value-Colors-Data viz-Core-Teal': string;
  'Global/Value-Colors-Data viz-Core-Ocean': string;
  'Global/Value-Colors-Data viz-Core-Green': string;
  'Global/Value-Colors-Data viz-Core-Yellow': string;
  'Global/Value-Colors-Data viz-Semantic-Light bkgd-Positive': string;
  'Global/Value-Colors-Data viz-Semantic-Light bkgd-Notice': string;
  'Global/Value-Colors-Data viz-Semantic-Light bkgd-Negative': string;
  'Global/Value-Colors-Data viz-Semantic-Dark bkgd-Positive': string;
  'Global/Value-Colors-Data viz-Semantic-Dark bkgd-Negative': string;
  'Global/Value-Colors-Data viz-Semantic-Dark bkgd-Notice': string;
  'Global/Value-Colors-Data viz-Sequential-Blue400': string;
  'Global/Value-Colors-Data viz-Sequential-Blue300': string;
  'Global/Value-Colors-Data viz-Sequential-Blue200': string;
  'Global/Value-Colors-Data viz-Sequential-Blue100': string;
  'Global/Value-Colors-Data viz-Sequential-Gray400': string;
  'Global/Value-Colors-Data viz-Sequential-Gray300': string;
  'Global/Value-Colors-Data viz-Sequential-Gray200': string;
  'Global/Value-Colors-Data viz-Sequential-Gray100': string;
  'Global/Value-Colors-Data viz-Sequential-Red400': string;
  'Global/Value-Colors-Data viz-Sequential-Red300': string;
  'Global/Value-Colors-Data viz-Sequential-Red200': string;
  'Global/Value-Colors-Data viz-Sequential-Red100': string;
  'Global/Value-Colors-Data viz-Sequential-Teal400': string;
  'Global/Value-Colors-Data viz-Sequential-Teal300': string;
  'Global/Value-Colors-Data viz-Sequential-Teal200': string;
  'Global/Value-Colors-Data viz-Sequential-Teal100': string;
  'Global/Value-Colors-Data viz-Sequential-Ocean400': string;
  'Global/Value-Colors-Data viz-Sequential-Ocean300': string;
  'Global/Value-Colors-Data viz-Sequential-Ocean200': string;
  'Global/Value-Colors-Data viz-Sequential-Ocean100': string;
  'Global/Value-Colors-Data viz-Sequential-Green400': string;
  'Global/Value-Colors-Data viz-Sequential-Green300': string;
  'Global/Value-Colors-Data viz-Sequential-Green200': string;
  'Global/Value-Colors-Data viz-Sequential-Green100': string;
  'Global/Value-Colors-Data viz-Sequential-Yellow400': string;
  'Global/Value-Colors-Data viz-Sequential-Yellow300': string;
  'Global/Value-Colors-Data viz-Sequential-Yellow200': string;
  'Global/Value-Colors-Data viz-Sequential-Yellow100': string;
  'Global/Value-Colors-Brand-Brand-10': string;
  'Global/Value-Colors-Brand-Brand-20': string;
  'Global/Value-Colors-Brand-Brand-30': string;
  'Global/Value-Colors-Brand-Brand-40': string;
  'Global/Value-Colors-Brand-Brand-50': string;
  'Global/Value-Colors-Brand-Brand-60': string;
  'Global/Value-Colors-Brand-Brand-70': string;
  'Global/Value-Colors-Brand-Brand-80': string;
  'Global/Value-Colors-Brand-Brand-90': string;
  'Global/Value-Colors-Brand-Brand-100': string;
  'Global/Value-Colors-Brand-Brand-110': string;
  'Global/Value-Colors-Brand-Brand-120': string;
  'Global/Value-Colors-Brand-Brand-130': string;

  // Brand/Brand 1 tokens
  'Brand/Brand 1-Brand-10': string;
  'Brand/Brand 1-Brand-20': string;
  'Brand/Brand 1-Brand-30': string;
  'Brand/Brand 1-Brand-40': string;
  'Brand/Brand 1-Brand-50': string;
  'Brand/Brand 1-Brand-60': string;
  'Brand/Brand 1-Brand-70': string;
  'Brand/Brand 1-Brand-80': string;
  'Brand/Brand 1-Brand-90': string;
  'Brand/Brand 1-Brand-100': string;
  'Brand/Brand 1-Brand-110': string;
  'Brand/Brand 1-Brand-120': string;
  'Brand/Brand 1-Brand-130': string;

  // Arrow position/Above start tokens
  'Arrow position/Above start-Above-start': string;
  'Arrow position/Above start-Above-middle': string;
  'Arrow position/Above start-Above-end': string;
  'Arrow position/Above start-Before-top': string;
  'Arrow position/Above start-Before-center': string;
  'Arrow position/Above start-Before-bottom': string;
  'Arrow position/Above start-After-top': string;
  'Arrow position/Above start-After-center': string;
  'Arrow position/Above start-After-bottom': string;
  'Arrow position/Above start-Bottom-start': string;
  'Arrow position/Above start-Bottom-center': string;
  'Arrow position/Above start-Bottom-end': string;

  // Arrow position/Above middle tokens
  'Arrow position/Above middle-Above-start': string;
  'Arrow position/Above middle-Above-middle': string;
  'Arrow position/Above middle-Above-end': string;
  'Arrow position/Above middle-Before-top': string;
  'Arrow position/Above middle-Before-center': string;
  'Arrow position/Above middle-Before-bottom': string;
  'Arrow position/Above middle-After-top': string;
  'Arrow position/Above middle-After-center': string;
  'Arrow position/Above middle-After-bottom': string;
  'Arrow position/Above middle-Bottom-start': string;
  'Arrow position/Above middle-Bottom-center': string;
  'Arrow position/Above middle-Bottom-end': string;

  // Arrow position/Above end tokens
  'Arrow position/Above end-Above-start': string;
  'Arrow position/Above end-Above-middle': string;
  'Arrow position/Above end-Above-end': string;
  'Arrow position/Above end-Before-top': string;
  'Arrow position/Above end-Before-center': string;
  'Arrow position/Above end-Before-bottom': string;
  'Arrow position/Above end-After-top': string;
  'Arrow position/Above end-After-center': string;
  'Arrow position/Above end-After-bottom': string;
  'Arrow position/Above end-Bottom-start': string;
  'Arrow position/Above end-Bottom-center': string;
  'Arrow position/Above end-Bottom-end': string;

  // Arrow position/Before top tokens
  'Arrow position/Before top-Above-start': string;
  'Arrow position/Before top-Above-middle': string;
  'Arrow position/Before top-Above-end': string;
  'Arrow position/Before top-Before-top': string;
  'Arrow position/Before top-Before-center': string;
  'Arrow position/Before top-Before-bottom': string;
  'Arrow position/Before top-After-top': string;
  'Arrow position/Before top-After-center': string;
  'Arrow position/Before top-After-bottom': string;
  'Arrow position/Before top-Bottom-start': string;
  'Arrow position/Before top-Bottom-center': string;
  'Arrow position/Before top-Bottom-end': string;

  // Arrow position/Before middle tokens
  'Arrow position/Before middle-Above-start': string;
  'Arrow position/Before middle-Above-middle': string;
  'Arrow position/Before middle-Above-end': string;
  'Arrow position/Before middle-Before-top': string;
  'Arrow position/Before middle-Before-center': string;
  'Arrow position/Before middle-Before-bottom': string;
  'Arrow position/Before middle-After-top': string;
  'Arrow position/Before middle-After-center': string;
  'Arrow position/Before middle-After-bottom': string;
  'Arrow position/Before middle-Bottom-start': string;
  'Arrow position/Before middle-Bottom-center': string;
  'Arrow position/Before middle-Bottom-end': string;

  // Arrow position/Before bottom tokens
  'Arrow position/Before bottom-Above-start': string;
  'Arrow position/Before bottom-Above-middle': string;
  'Arrow position/Before bottom-Above-end': string;
  'Arrow position/Before bottom-Before-top': string;
  'Arrow position/Before bottom-Before-center': string;
  'Arrow position/Before bottom-Before-bottom': string;
  'Arrow position/Before bottom-After-top': string;
  'Arrow position/Before bottom-After-center': string;
  'Arrow position/Before bottom-After-bottom': string;
  'Arrow position/Before bottom-Bottom-start': string;
  'Arrow position/Before bottom-Bottom-center': string;
  'Arrow position/Before bottom-Bottom-end': string;

  // Arrow position/After top tokens
  'Arrow position/After top-Above-start': string;
  'Arrow position/After top-Above-middle': string;
  'Arrow position/After top-Above-end': string;
  'Arrow position/After top-Before-top': string;
  'Arrow position/After top-Before-center': string;
  'Arrow position/After top-Before-bottom': string;
  'Arrow position/After top-After-top': string;
  'Arrow position/After top-After-center': string;
  'Arrow position/After top-After-bottom': string;
  'Arrow position/After top-Bottom-start': string;
  'Arrow position/After top-Bottom-center': string;
  'Arrow position/After top-Bottom-end': string;

  // Arrow position/After middle tokens
  'Arrow position/After middle-Above-start': string;
  'Arrow position/After middle-Above-middle': string;
  'Arrow position/After middle-Above-end': string;
  'Arrow position/After middle-Before-top': string;
  'Arrow position/After middle-Before-center': string;
  'Arrow position/After middle-Before-bottom': string;
  'Arrow position/After middle-After-top': string;
  'Arrow position/After middle-After-center': string;
  'Arrow position/After middle-After-bottom': string;
  'Arrow position/After middle-Bottom-start': string;
  'Arrow position/After middle-Bottom-center': string;
  'Arrow position/After middle-Bottom-end': string;

  // Arrow position/After bottom tokens
  'Arrow position/After bottom-Above-start': string;
  'Arrow position/After bottom-Above-middle': string;
  'Arrow position/After bottom-Above-end': string;
  'Arrow position/After bottom-Before-top': string;
  'Arrow position/After bottom-Before-center': string;
  'Arrow position/After bottom-Before-bottom': string;
  'Arrow position/After bottom-After-top': string;
  'Arrow position/After bottom-After-center': string;
  'Arrow position/After bottom-After-bottom': string;
  'Arrow position/After bottom-Bottom-start': string;
  'Arrow position/After bottom-Bottom-center': string;
  'Arrow position/After bottom-Bottom-end': string;

  // Arrow position/Bottom start tokens
  'Arrow position/Bottom start-Above-start': string;
  'Arrow position/Bottom start-Above-middle': string;
  'Arrow position/Bottom start-Above-end': string;
  'Arrow position/Bottom start-Before-top': string;
  'Arrow position/Bottom start-Before-center': string;
  'Arrow position/Bottom start-Before-bottom': string;
  'Arrow position/Bottom start-After-top': string;
  'Arrow position/Bottom start-After-center': string;
  'Arrow position/Bottom start-After-bottom': string;
  'Arrow position/Bottom start-Bottom-start': string;
  'Arrow position/Bottom start-Bottom-center': string;
  'Arrow position/Bottom start-Bottom-end': string;

  // Arrow position/Bottom middle tokens
  'Arrow position/Bottom middle-Above-start': string;
  'Arrow position/Bottom middle-Above-middle': string;
  'Arrow position/Bottom middle-Above-end': string;
  'Arrow position/Bottom middle-Before-top': string;
  'Arrow position/Bottom middle-Before-center': string;
  'Arrow position/Bottom middle-Before-bottom': string;
  'Arrow position/Bottom middle-After-top': string;
  'Arrow position/Bottom middle-After-center': string;
  'Arrow position/Bottom middle-After-bottom': string;
  'Arrow position/Bottom middle-Bottom-start': string;
  'Arrow position/Bottom middle-Bottom-center': string;
  'Arrow position/Bottom middle-Bottom-end': string;

  // Arrow position/Bottom end tokens
  'Arrow position/Bottom end-Above-start': string;
  'Arrow position/Bottom end-Above-middle': string;
  'Arrow position/Bottom end-Above-end': string;
  'Arrow position/Bottom end-Before-top': string;
  'Arrow position/Bottom end-Before-center': string;
  'Arrow position/Bottom end-Before-bottom': string;
  'Arrow position/Bottom end-After-top': string;
  'Arrow position/Bottom end-After-center': string;
  'Arrow position/Bottom end-After-bottom': string;
  'Arrow position/Bottom end-Bottom-start': string;
  'Arrow position/Bottom end-Bottom-center': string;
  'Arrow position/Bottom end-Bottom-end': string;

  // Arrow position/None tokens
  'Arrow position/None-Above-start': string;
  'Arrow position/None-Above-middle': string;
  'Arrow position/None-Above-end': string;
  'Arrow position/None-Before-top': string;
  'Arrow position/None-Before-center': string;
  'Arrow position/None-Before-bottom': string;
  'Arrow position/None-After-top': string;
  'Arrow position/None-After-center': string;
  'Arrow position/None-After-bottom': string;
  'Arrow position/None-Bottom-start': string;
  'Arrow position/None-Bottom-center': string;
  'Arrow position/None-Bottom-end': string;

  // Typography/Base tokens
  'Typography/Base-fontFamily-Base': string;
  'Typography/Base-fontWeight-Regular': string;
  'Typography/Base-fontWeight-Semibold': string;
  'Typography/Base-fontWeight-Bold': string;
  'Typography/Base-fontWeight-Semilight': string;
  'Typography/Base-fontWeight-Light': string;

  // Popover size/Medium tokens
  'Popover size/Medium-popover-padding-vertical': string;
  'Popover size/Medium-popover-padding-horizontal': string;

  // Popover size/Small tokens
  'Popover size/Small-popover-padding-vertical': string;
  'Popover size/Small-popover-padding-horizontal': string;

  // Popover size/Large tokens
  'Popover size/Large-popover-padding-vertical': string;
  'Popover size/Large-popover-padding-horizontal': string;

  // Card padding/Medium tokens
  'Card padding/Medium-card-horizontal': string;
  'Card padding/Medium-card-vertical': string;
  'Card padding/Medium-card-gap': string;
  'Card padding/Medium-card-corner-radius': string;

  // Card padding/Small tokens
  'Card padding/Small-card-horizontal': string;
  'Card padding/Small-card-vertical': string;
  'Card padding/Small-card-gap': string;
  'Card padding/Small-card-corner-radius': string;

  // Card padding/Large tokens
  'Card padding/Large-card-horizontal': string;
  'Card padding/Large-card-vertical': string;
  'Card padding/Large-card-gap': string;
  'Card padding/Large-card-corner-radius': string;

  // Button shape/Rounded (Default) tokens
  'Button shape/Rounded (Default)-button-corner-radius': string;
  'Button shape/Rounded (Default)-button-image-corner-radius': string;

  // Badge shape/Circular tokens
  'Badge shape/Circular-badge-corner-radius': string;

  // Theme/Light/Theme/Light tokens
  'Theme/Light/Theme/Light-Neutral-Background-1-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-1-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Background-1-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Background-1-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Background-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-3-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-3-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Background-3-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Background-4-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-4-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Background-4-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Background-5-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-6-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Inverted-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Inverted-Disabled-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Alpha-1-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Alpha-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Static-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Background-Transparent-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Transparent-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Background-Transparent-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Background-Transparent-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Background-Disabled-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Stencil-1-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Stencil-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Overlay-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Background-Overlay-Scrollbar-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-1-Rest primary text': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-1-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-1-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-1-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Rest secondary text': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Brand-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Brand-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Brand-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Brand-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Link-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Link-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Link-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Link-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-4-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Disabled-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Disabled-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Static-Inverted-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Disabled-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Foreground-On Brand-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-1-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-1-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-1-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-1-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-3-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Alpha-1-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Alpha-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Subtle-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-on Brand-1-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-on Brand-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Accessible-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Accessible-Hover': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Accessible-Pressed': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Accessible-Selected': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Focus-1-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Focus-2-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Transparent-Interactive-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Transparent-Disabled-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Transparent-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Disabled-Rest': string;
  'Theme/Light/Theme/Light-Neutral-Stroke-Disabled-Inverted-Rest': string;
  'Theme/Light/Theme/Light-Brand-Background-1-Rest': string;
  'Theme/Light/Theme/Light-Brand-Background-1-Hover': string;
  'Theme/Light/Theme/Light-Brand-Background-1-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Background-1-Selected': string;
  'Theme/Light/Theme/Light-Brand-Background-2-Rest': string;
  'Theme/Light/Theme/Light-Brand-Background-2-Hover': string;
  'Theme/Light/Theme/Light-Brand-Background-2-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Background-3-Rest': string;
  'Theme/Light/Theme/Light-Brand-Background-Inverted-Rest': string;
  'Theme/Light/Theme/Light-Brand-Background-Inverted-Hover': string;
  'Theme/Light/Theme/Light-Brand-Background-Inverted-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Background-Inverted-Selected': string;
  'Theme/Light/Theme/Light-Brand-Background-Static-Rest': string;
  'Theme/Light/Theme/Light-Brand-Background-Compound-Rest': string;
  'Theme/Light/Theme/Light-Brand-Background-Compound-Hover': string;
  'Theme/Light/Theme/Light-Brand-Background-Compound-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Foreground-1-Rest': string;
  'Theme/Light/Theme/Light-Brand-Foreground-1-Hover': string;
  'Theme/Light/Theme/Light-Brand-Foreground-1-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Foreground-1-Selected': string;
  'Theme/Light/Theme/Light-Brand-Foreground-2-Rest': string;
  'Theme/Light/Theme/Light-Brand-Foreground-2-Hover': string;
  'Theme/Light/Theme/Light-Brand-Foreground-2-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Link-Rest': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Link-Hover': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Link-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Link-Selected': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Inverted-Rest': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Inverted-Hover': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Inverted-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Foreground-On Light-Rest': string;
  'Theme/Light/Theme/Light-Brand-Foreground-On Light-Hover': string;
  'Theme/Light/Theme/Light-Brand-Foreground-On Light-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Foreground-On Light-Selected': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Compound-Rest': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Compound-Hover': string;
  'Theme/Light/Theme/Light-Brand-Foreground-Compound-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Stroke-1-Rest': string;
  'Theme/Light/Theme/Light-Brand-Stroke-1-Hover': string;
  'Theme/Light/Theme/Light-Brand-Stroke-1-Pressed': string;
  'Theme/Light/Theme/Light-Brand-Stroke-1-Selected': string;
  'Theme/Light/Theme/Light-Brand-Stroke-2-Rest': string;
  'Theme/Light/Theme/Light-Brand-Stroke-2-Contrast-Rest': string;
  'Theme/Light/Theme/Light-Brand-Stroke-3-Rest': string;
  'Theme/Light/Theme/Light-Brand-Stroke-Compound-Rest': string;
  'Theme/Light/Theme/Light-Brand-Stroke-Compound-Hover': string;
  'Theme/Light/Theme/Light-Brand-Stroke-Compound-Pressed': string;
  'Theme/Light/Theme/Light-Status-Danger-Background-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Danger-Background-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Danger-Foreground-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Danger-Foreground-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Danger-Stroke-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Danger-Stroke-2-Rest': string;
  'Theme/Light/Theme/Light-Status-Success-Background-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Success-Background-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Success-Foreground-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Success-Foreground-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Success-Stroke-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Success-Stroke-2-Rest': string;
  'Theme/Light/Theme/Light-Status-Warning-Background-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Warning-Background-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Warning-Foreground-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Warning-Foreground-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Warning-Stroke-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Warning-Stroke-2-Rest': string;
  'Theme/Light/Theme/Light-Status-Oof-Foreground-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Away-Background-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Available-Foreground-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Generic-Anchor-Background-2-Rest': string;
  'Theme/Light/Theme/Light-Status-Generic-Anchor-Foreground-2-Rest': string;
  'Theme/Light/Theme/Light-Status-Generic-Anchor-Stroke-Active-Rest': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Background-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Background-1-Hover': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Background-1-Pressed': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Stroke-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Rest': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Hover': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Pressed': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Foreground-Rest': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Foreground-Hover': string;
  'Theme/Light/Theme/Light-Status-Generic-Information-Foreground-Pressed': string;
  'Theme/Light/Theme/Light-Status-Severe-Background-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Severe-Background-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Severe-Foreground-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Severe-Foreground-3-Rest': string;
  'Theme/Light/Theme/Light-Status-Severe-Stroke-1-Rest': string;
  'Theme/Light/Theme/Light-Status-Severe-Stroke-2-Rest': string;
  'Theme/Light/Theme/Light-Shadow-ambient': string;
  'Theme/Light/Theme/Light-Shadow-ambient-lighter': string;
  'Theme/Light/Theme/Light-Shadow-ambient-darker': string;
  'Theme/Light/Theme/Light-Shadow-brand-ambient': string;
  'Theme/Light/Theme/Light-Shadow-key': string;
  'Theme/Light/Theme/Light-Shadow-key-lighter': string;
  'Theme/Light/Theme/Light-Shadow-key-darker': string;
  'Theme/Light/Theme/Light-Shadow-brand-key': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Categorical': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Data': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Yellow300': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue400': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray400': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red400': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal300': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red300': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal400': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean400': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green400': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Yellow400': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green300': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray300': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue200': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean200': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Accessibility-Text dark bkgd': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-Accessibility-Text light bkgd': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-KPI Card-Text dark bkgd': string;
  'Theme/Light/Theme/Light-Data viz-Foreground-KPI Card-Text light bkgd': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Gridline': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Axis-Target-Benchmark': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Blue': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Blue400': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Gray': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Gray400': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Red': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Red300': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Red400': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Teal': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Teal300': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Teal400': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Ocean': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Ocean400': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Green': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Green300': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Green400': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Yellow300': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Yellow400': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Gray300': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Blue200': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Ocean200': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Yellow': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Trend-Average': string;
  'Theme/Light/Theme/Light-Data viz-Stroke-Accessible outline': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Positive': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Negative': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Notice': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Positive': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Negative': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Notice': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Positive': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Negative': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Notice': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Positive': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Negative': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Notice': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Background-Positive': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Background-Negative': string;
  'Theme/Light/Theme/Light-Data viz-Semantic-Background-Notice': string;
  'Theme/Light/Theme/Light-Data viz-Background-Core-Blue': string;
  'Theme/Light/Theme/Light-Data viz-Background-Core-Gray': string;
  'Theme/Light/Theme/Light-Data viz-Background-Core-Red': string;
  'Theme/Light/Theme/Light-Data viz-Background-Core-Teal': string;
  'Theme/Light/Theme/Light-Data viz-Background-Core-Ocean': string;
  'Theme/Light/Theme/Light-Data viz-Background-Core-Green': string;
  'Theme/Light/Theme/Light-Data viz-Background-Core-Yellow': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Blue400': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Gray400': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Red300': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Red400': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Teal300': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Teal400': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Ocean400': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Green300': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Green400': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Yellow300': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Yellow400': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Blue300': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Blue200': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Blue100': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Gray300': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Gray200': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Gray100': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Red200': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Red100': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Teal200': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Teal100': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Ocean300': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Ocean200': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Ocean100': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Green200': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Green100': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Yellow200': string;
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Yellow100': string;
  'Theme/Light/Theme/Light-Data viz-Background-Neutral-Black': string;
  'Theme/Light/Theme/Light-Control logic-Theme switch': string;

  // Theme/Dark/Theme/Dark tokens
  'Theme/Dark/Theme/Dark-Neutral-Background-1-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-1-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-1-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-1-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-3-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-3-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-3-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-4-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-4-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-4-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-5-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-6-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Inverted-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Inverted-Disabled-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Alpha-1-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Alpha-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Static-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Transparent-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Transparent-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Transparent-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Transparent-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Disabled-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Stencil-1-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Stencil-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Overlay-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Background-Overlay-Scrollbar-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-1-Rest primary text': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-1-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-1-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-1-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Rest secondary text': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-4-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Disabled-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Disabled-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Static-Inverted-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Disabled-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Foreground-On Brand-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-1-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-1-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-1-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-1-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-3-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Alpha-1-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Alpha-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Subtle-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-on Brand-1-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-on Brand-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Hover': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Pressed': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Selected': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Focus-1-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Focus-2-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Interactive-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Disabled-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Disabled-Rest': string;
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Disabled-Inverted-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Background-1-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Background-1-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Background-1-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Background-1-Selected': string;
  'Theme/Dark/Theme/Dark-Brand-Background-2-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Background-2-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Background-2-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Background-3-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Background-Inverted-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Background-Inverted-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Background-Inverted-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Background-Inverted-Selected': string;
  'Theme/Dark/Theme/Dark-Brand-Background-Static-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Background-Compound-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Background-Compound-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Background-Compound-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-1-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-1-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-1-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-1-Selected': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-2-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-2-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-2-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Link-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Link-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Link-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Link-Selected': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Inverted-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Inverted-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Inverted-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-On Light-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-On Light-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-On Light-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-On Light-Selected': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Compound-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Compound-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Foreground-Compound-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-1-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-1-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-1-Pressed': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-1-Selected': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-2-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-2-Contrast-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-3-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-Compound-Rest': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-Compound-Hover': string;
  'Theme/Dark/Theme/Dark-Brand-Stroke-Compound-Pressed': string;
  'Theme/Dark/Theme/Dark-Status-Danger-Background-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Danger-Background-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Danger-Foreground-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Danger-Foreground-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Danger-Stroke-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Danger-Stroke-2-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Success-Background-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Success-Background-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Success-Foreground-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Success-Foreground-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Success-Stroke-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Success-Stroke-2-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Warning-Background-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Warning-Background-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Warning-Foreground-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Warning-Foreground-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Warning-Stroke-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Warning-Stroke-2-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Oof-Foreground-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Away-Background-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Available-Foreground-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Anchor-Background-2-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Anchor-Foreground-2-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Anchor-Stroke-Active-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Hover': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Pressed': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Stroke-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Hover': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Pressed': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Hover': string;
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Pressed': string;
  'Theme/Dark/Theme/Dark-Status-Severe-Background-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Severe-Background-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Severe-Foreground-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Severe-Foreground-3-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Severe-Stroke-1-Rest': string;
  'Theme/Dark/Theme/Dark-Status-Severe-Stroke-2-Rest': string;
  'Theme/Dark/Theme/Dark-Shadow-ambient': string;
  'Theme/Dark/Theme/Dark-Shadow-ambient-lighter': string;
  'Theme/Dark/Theme/Dark-Shadow-ambient-darker': string;
  'Theme/Dark/Theme/Dark-Shadow-brand-ambient': string;
  'Theme/Dark/Theme/Dark-Shadow-key': string;
  'Theme/Dark/Theme/Dark-Shadow-key-lighter': string;
  'Theme/Dark/Theme/Dark-Shadow-key-darker': string;
  'Theme/Dark/Theme/Dark-Shadow-brand-key': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Categorical': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Data': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Yellow300': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue400': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray400': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red400': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal300': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red300': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal400': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean400': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green400': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Yellow400': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green300': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray300': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue200': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean200': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Accessibility-Text dark bkgd': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Accessibility-Text light bkgd': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-KPI Card-Text dark bkgd': string;
  'Theme/Dark/Theme/Dark-Data viz-Foreground-KPI Card-Text light bkgd': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Gridline': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Axis-Target-Benchmark': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue400': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray400': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Red': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Red300': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Red400': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal300': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal400': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean400': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Green': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Green300': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Green400': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow300': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow400': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray300': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue200': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean200': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Trend-Average': string;
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Accessible outline': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Positive': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Negative': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Notice': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Positive': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Negative': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Notice': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Positive': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Negative': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Notice': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Positive': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Negative': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Notice': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Background-Positive': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Background-Negative': string;
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Background-Notice': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Blue': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Gray': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Red': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Teal': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Ocean': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Green': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Yellow': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue400': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray400': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Red300': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Red400': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal300': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal400': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean400': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Green300': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Green400': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow300': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow400': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue300': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue200': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue100': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray300': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray200': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray100': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Red200': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Red100': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal200': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal100': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean300': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean200': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean100': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Green200': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Green100': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow200': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow100': string;
  'Theme/Dark/Theme/Dark-Data viz-Background-Neutral-Black': string;
  'Theme/Dark/Theme/Dark-Control logic-Theme switch': string;

  // Global/Value/Global/Value tokens
  'Global/Value/Global/Value-Colors-Neutral-Black': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-6': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-8': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-10': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-12': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-20': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-30': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-40': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-50': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-60': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-70': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-80': string;
  'Global/Value/Global/Value-Colors-Neutral-Grey-90': string;
  'Global/Value/Global/Value-Colors-Neutral-White': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Cranberry-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Cranberry-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Cranberry-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Dark Orange-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Dark Orange-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark Orange-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Orange-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Orange-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Orange-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Green-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Green-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Green-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 50': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 40': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 30': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 20': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Primary': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 30': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 60': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 40': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 50': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 20': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 10': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Shade 10': string;
  'Global/Value/Global/Value-Colors-Shared-Information-Shade 20': string;
  'Global/Value/Global/Value-Colors-Alpha-White-0': string;
  'Global/Value/Global/Value-Colors-Alpha-White-5': string;
  'Global/Value/Global/Value-Colors-Alpha-White-10': string;
  'Global/Value/Global/Value-Colors-Alpha-White-20': string;
  'Global/Value/Global/Value-Colors-Alpha-White-30': string;
  'Global/Value/Global/Value-Colors-Alpha-White-40': string;
  'Global/Value/Global/Value-Colors-Alpha-White-50': string;
  'Global/Value/Global/Value-Colors-Alpha-White-60': string;
  'Global/Value/Global/Value-Colors-Alpha-White-70': string;
  'Global/Value/Global/Value-Colors-Alpha-White-80': string;
  'Global/Value/Global/Value-Colors-Alpha-White-90': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-0': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-5': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-10': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-20': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-30': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-40': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-50': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-60': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-70': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-80': string;
  'Global/Value/Global/Value-Colors-Alpha-Black-90': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-5': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-10': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-20': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-30': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-40': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-50': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-60': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-70': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-80': string;
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-90': string;
  'Global/Value/Global/Value-Colors-Data viz-Core-Blue': string;
  'Global/Value/Global/Value-Colors-Data viz-Core-Gray': string;
  'Global/Value/Global/Value-Colors-Data viz-Core-Red': string;
  'Global/Value/Global/Value-Colors-Data viz-Core-Teal': string;
  'Global/Value/Global/Value-Colors-Data viz-Core-Ocean': string;
  'Global/Value/Global/Value-Colors-Data viz-Core-Green': string;
  'Global/Value/Global/Value-Colors-Data viz-Core-Yellow': string;
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Light bkgd-Positive': string;
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Light bkgd-Notice': string;
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Light bkgd-Negative': string;
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Dark bkgd-Positive': string;
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Dark bkgd-Negative': string;
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Dark bkgd-Notice': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Blue400': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Blue300': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Blue200': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Blue100': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Gray400': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Gray300': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Gray200': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Gray100': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Red400': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Red300': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Red200': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Red100': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Teal400': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Teal300': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Teal200': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Teal100': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Ocean400': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Ocean300': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Ocean200': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Ocean100': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Green400': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Green300': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Green200': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Green100': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Yellow400': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Yellow300': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Yellow200': string;
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Yellow100': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-10': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-20': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-30': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-40': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-50': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-60': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-70': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-80': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-90': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-100': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-110': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-120': string;
  'Global/Value/Global/Value-Colors-Brand-Brand-130': string;

  // Brand/Brand 1/Brand/Brand 1 tokens
  'Brand/Brand 1/Brand/Brand 1-Brand-10': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-20': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-30': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-40': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-50': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-60': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-70': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-80': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-90': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-100': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-110': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-120': string;
  'Brand/Brand 1/Brand/Brand 1-Brand-130': string;

  // Arrow position/Above start/Arrow position/Above start tokens
  'Arrow position/Above start/Arrow position/Above start-Above-start': string;
  'Arrow position/Above start/Arrow position/Above start-Above-middle': string;
  'Arrow position/Above start/Arrow position/Above start-Above-end': string;
  'Arrow position/Above start/Arrow position/Above start-Before-top': string;
  'Arrow position/Above start/Arrow position/Above start-Before-center': string;
  'Arrow position/Above start/Arrow position/Above start-Before-bottom': string;
  'Arrow position/Above start/Arrow position/Above start-After-top': string;
  'Arrow position/Above start/Arrow position/Above start-After-center': string;
  'Arrow position/Above start/Arrow position/Above start-After-bottom': string;
  'Arrow position/Above start/Arrow position/Above start-Bottom-start': string;
  'Arrow position/Above start/Arrow position/Above start-Bottom-center': string;
  'Arrow position/Above start/Arrow position/Above start-Bottom-end': string;

  // Arrow position/Above middle/Arrow position/Above middle tokens
  'Arrow position/Above middle/Arrow position/Above middle-Above-start': string;
  'Arrow position/Above middle/Arrow position/Above middle-Above-middle': string;
  'Arrow position/Above middle/Arrow position/Above middle-Above-end': string;
  'Arrow position/Above middle/Arrow position/Above middle-Before-top': string;
  'Arrow position/Above middle/Arrow position/Above middle-Before-center': string;
  'Arrow position/Above middle/Arrow position/Above middle-Before-bottom': string;
  'Arrow position/Above middle/Arrow position/Above middle-After-top': string;
  'Arrow position/Above middle/Arrow position/Above middle-After-center': string;
  'Arrow position/Above middle/Arrow position/Above middle-After-bottom': string;
  'Arrow position/Above middle/Arrow position/Above middle-Bottom-start': string;
  'Arrow position/Above middle/Arrow position/Above middle-Bottom-center': string;
  'Arrow position/Above middle/Arrow position/Above middle-Bottom-end': string;

  // Arrow position/Above end/Arrow position/Above end tokens
  'Arrow position/Above end/Arrow position/Above end-Above-start': string;
  'Arrow position/Above end/Arrow position/Above end-Above-middle': string;
  'Arrow position/Above end/Arrow position/Above end-Above-end': string;
  'Arrow position/Above end/Arrow position/Above end-Before-top': string;
  'Arrow position/Above end/Arrow position/Above end-Before-center': string;
  'Arrow position/Above end/Arrow position/Above end-Before-bottom': string;
  'Arrow position/Above end/Arrow position/Above end-After-top': string;
  'Arrow position/Above end/Arrow position/Above end-After-center': string;
  'Arrow position/Above end/Arrow position/Above end-After-bottom': string;
  'Arrow position/Above end/Arrow position/Above end-Bottom-start': string;
  'Arrow position/Above end/Arrow position/Above end-Bottom-center': string;
  'Arrow position/Above end/Arrow position/Above end-Bottom-end': string;

  // Arrow position/Before top/Arrow position/Before top tokens
  'Arrow position/Before top/Arrow position/Before top-Above-start': string;
  'Arrow position/Before top/Arrow position/Before top-Above-middle': string;
  'Arrow position/Before top/Arrow position/Before top-Above-end': string;
  'Arrow position/Before top/Arrow position/Before top-Before-top': string;
  'Arrow position/Before top/Arrow position/Before top-Before-center': string;
  'Arrow position/Before top/Arrow position/Before top-Before-bottom': string;
  'Arrow position/Before top/Arrow position/Before top-After-top': string;
  'Arrow position/Before top/Arrow position/Before top-After-center': string;
  'Arrow position/Before top/Arrow position/Before top-After-bottom': string;
  'Arrow position/Before top/Arrow position/Before top-Bottom-start': string;
  'Arrow position/Before top/Arrow position/Before top-Bottom-center': string;
  'Arrow position/Before top/Arrow position/Before top-Bottom-end': string;

  // Arrow position/Before middle/Arrow position/Before middle tokens
  'Arrow position/Before middle/Arrow position/Before middle-Above-start': string;
  'Arrow position/Before middle/Arrow position/Before middle-Above-middle': string;
  'Arrow position/Before middle/Arrow position/Before middle-Above-end': string;
  'Arrow position/Before middle/Arrow position/Before middle-Before-top': string;
  'Arrow position/Before middle/Arrow position/Before middle-Before-center': string;
  'Arrow position/Before middle/Arrow position/Before middle-Before-bottom': string;
  'Arrow position/Before middle/Arrow position/Before middle-After-top': string;
  'Arrow position/Before middle/Arrow position/Before middle-After-center': string;
  'Arrow position/Before middle/Arrow position/Before middle-After-bottom': string;
  'Arrow position/Before middle/Arrow position/Before middle-Bottom-start': string;
  'Arrow position/Before middle/Arrow position/Before middle-Bottom-center': string;
  'Arrow position/Before middle/Arrow position/Before middle-Bottom-end': string;

  // Arrow position/Before bottom/Arrow position/Before bottom tokens
  'Arrow position/Before bottom/Arrow position/Before bottom-Above-start': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-Above-middle': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-Above-end': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-Before-top': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-Before-center': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-Before-bottom': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-After-top': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-After-center': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-After-bottom': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-Bottom-start': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-Bottom-center': string;
  'Arrow position/Before bottom/Arrow position/Before bottom-Bottom-end': string;

  // Arrow position/After top/Arrow position/After top tokens
  'Arrow position/After top/Arrow position/After top-Above-start': string;
  'Arrow position/After top/Arrow position/After top-Above-middle': string;
  'Arrow position/After top/Arrow position/After top-Above-end': string;
  'Arrow position/After top/Arrow position/After top-Before-top': string;
  'Arrow position/After top/Arrow position/After top-Before-center': string;
  'Arrow position/After top/Arrow position/After top-Before-bottom': string;
  'Arrow position/After top/Arrow position/After top-After-top': string;
  'Arrow position/After top/Arrow position/After top-After-center': string;
  'Arrow position/After top/Arrow position/After top-After-bottom': string;
  'Arrow position/After top/Arrow position/After top-Bottom-start': string;
  'Arrow position/After top/Arrow position/After top-Bottom-center': string;
  'Arrow position/After top/Arrow position/After top-Bottom-end': string;

  // Arrow position/After middle/Arrow position/After middle tokens
  'Arrow position/After middle/Arrow position/After middle-Above-start': string;
  'Arrow position/After middle/Arrow position/After middle-Above-middle': string;
  'Arrow position/After middle/Arrow position/After middle-Above-end': string;
  'Arrow position/After middle/Arrow position/After middle-Before-top': string;
  'Arrow position/After middle/Arrow position/After middle-Before-center': string;
  'Arrow position/After middle/Arrow position/After middle-Before-bottom': string;
  'Arrow position/After middle/Arrow position/After middle-After-top': string;
  'Arrow position/After middle/Arrow position/After middle-After-center': string;
  'Arrow position/After middle/Arrow position/After middle-After-bottom': string;
  'Arrow position/After middle/Arrow position/After middle-Bottom-start': string;
  'Arrow position/After middle/Arrow position/After middle-Bottom-center': string;
  'Arrow position/After middle/Arrow position/After middle-Bottom-end': string;

  // Arrow position/After bottom/Arrow position/After bottom tokens
  'Arrow position/After bottom/Arrow position/After bottom-Above-start': string;
  'Arrow position/After bottom/Arrow position/After bottom-Above-middle': string;
  'Arrow position/After bottom/Arrow position/After bottom-Above-end': string;
  'Arrow position/After bottom/Arrow position/After bottom-Before-top': string;
  'Arrow position/After bottom/Arrow position/After bottom-Before-center': string;
  'Arrow position/After bottom/Arrow position/After bottom-Before-bottom': string;
  'Arrow position/After bottom/Arrow position/After bottom-After-top': string;
  'Arrow position/After bottom/Arrow position/After bottom-After-center': string;
  'Arrow position/After bottom/Arrow position/After bottom-After-bottom': string;
  'Arrow position/After bottom/Arrow position/After bottom-Bottom-start': string;
  'Arrow position/After bottom/Arrow position/After bottom-Bottom-center': string;
  'Arrow position/After bottom/Arrow position/After bottom-Bottom-end': string;

  // Arrow position/Bottom start/Arrow position/Bottom start tokens
  'Arrow position/Bottom start/Arrow position/Bottom start-Above-start': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-Above-middle': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-Above-end': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-Before-top': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-Before-center': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-Before-bottom': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-After-top': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-After-center': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-After-bottom': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-Bottom-start': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-Bottom-center': string;
  'Arrow position/Bottom start/Arrow position/Bottom start-Bottom-end': string;

  // Arrow position/Bottom middle/Arrow position/Bottom middle tokens
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Above-start': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Above-middle': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Above-end': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Before-top': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Before-center': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Before-bottom': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-After-top': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-After-center': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-After-bottom': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Bottom-start': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Bottom-center': string;
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Bottom-end': string;

  // Arrow position/Bottom end/Arrow position/Bottom end tokens
  'Arrow position/Bottom end/Arrow position/Bottom end-Above-start': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-Above-middle': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-Above-end': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-Before-top': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-Before-center': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-Before-bottom': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-After-top': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-After-center': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-After-bottom': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-Bottom-start': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-Bottom-center': string;
  'Arrow position/Bottom end/Arrow position/Bottom end-Bottom-end': string;

  // Arrow position/None/Arrow position/None tokens
  'Arrow position/None/Arrow position/None-Above-start': string;
  'Arrow position/None/Arrow position/None-Above-middle': string;
  'Arrow position/None/Arrow position/None-Above-end': string;
  'Arrow position/None/Arrow position/None-Before-top': string;
  'Arrow position/None/Arrow position/None-Before-center': string;
  'Arrow position/None/Arrow position/None-Before-bottom': string;
  'Arrow position/None/Arrow position/None-After-top': string;
  'Arrow position/None/Arrow position/None-After-center': string;
  'Arrow position/None/Arrow position/None-After-bottom': string;
  'Arrow position/None/Arrow position/None-Bottom-start': string;
  'Arrow position/None/Arrow position/None-Bottom-center': string;
  'Arrow position/None/Arrow position/None-Bottom-end': string;

  // Typography/Base/Typography/Base tokens
  'Typography/Base/Typography/Base-fontFamily-Base': string;
  'Typography/Base/Typography/Base-fontWeight-Regular': string;
  'Typography/Base/Typography/Base-fontWeight-Semibold': string;
  'Typography/Base/Typography/Base-fontWeight-Bold': string;
  'Typography/Base/Typography/Base-fontWeight-Semilight': string;
  'Typography/Base/Typography/Base-fontWeight-Light': string;

  // Popover size/Medium/Popover size/Medium tokens
  'Popover size/Medium/Popover size/Medium-popover-padding-vertical': string;
  'Popover size/Medium/Popover size/Medium-popover-padding-horizontal': string;

  // Popover size/Small/Popover size/Small tokens
  'Popover size/Small/Popover size/Small-popover-padding-vertical': string;
  'Popover size/Small/Popover size/Small-popover-padding-horizontal': string;

  // Popover size/Large/Popover size/Large tokens
  'Popover size/Large/Popover size/Large-popover-padding-vertical': string;
  'Popover size/Large/Popover size/Large-popover-padding-horizontal': string;

  // Card padding/Medium/Card padding/Medium tokens
  'Card padding/Medium/Card padding/Medium-card-horizontal': string;
  'Card padding/Medium/Card padding/Medium-card-vertical': string;
  'Card padding/Medium/Card padding/Medium-card-gap': string;
  'Card padding/Medium/Card padding/Medium-card-corner-radius': string;

  // Card padding/Small/Card padding/Small tokens
  'Card padding/Small/Card padding/Small-card-horizontal': string;
  'Card padding/Small/Card padding/Small-card-vertical': string;
  'Card padding/Small/Card padding/Small-card-gap': string;
  'Card padding/Small/Card padding/Small-card-corner-radius': string;

  // Card padding/Large/Card padding/Large tokens
  'Card padding/Large/Card padding/Large-card-horizontal': string;
  'Card padding/Large/Card padding/Large-card-vertical': string;
  'Card padding/Large/Card padding/Large-card-gap': string;
  'Card padding/Large/Card padding/Large-card-corner-radius': string;

  // Button shape/Rounded (Default)/Button shape/Rounded (Default) tokens
  'Button shape/Rounded (Default)/Button shape/Rounded (Default)-button-corner-radius': string;
  'Button shape/Rounded (Default)/Button shape/Rounded (Default)-button-image-corner-radius': string;

  // Badge shape/Circular/Badge shape/Circular tokens
  'Badge shape/Circular/Badge shape/Circular-badge-corner-radius': string;
}

export const brandTheme: Theme & BrandThemeExtension = {
  'global-Linear': 'linear-gradient(-90deg, #0063ff 4%, #ac3ad5 24%, #ff1919 55%, #fa15e3 100%)',
  'global-fontFamilies-segoe-ui': 'Segoe UI',
  'global-lineHeights-0': '14',
  'global-lineHeights-1': '16',
  'global-lineHeights-2': '22',
  'global-lineHeights-3': '24',
  'global-lineHeights-4': '28',
  'global-lineHeights-5': '34',
  'global-lineHeights-6': '36',
  'global-lineHeights-7': '48',
  'global-lineHeights-8': '52',
  'global-lineHeights-9': '64',
  'global-lineHeights-10': '70',
  'global-fontWeights-segoe-ui-0': 'Regular',
  'global-fontWeights-segoe-ui-1': 'Semibold',
  'global-fontWeights-segoe-ui-2': 'Bold',
  'global-fontWeights-segoe-ui-3': 'Semilight',
  'global-fontWeights-segoe-ui-4': 'Light',
  'global-fontSize-0': '10',
  'global-fontSize-1': '12',
  'global-fontSize-2': '14',
  'global-fontSize-3': '16',
  'global-fontSize-4': '20',
  'global-fontSize-5': '24',
  'global-fontSize-6': '28',
  'global-fontSize-7': '32',
  'global-fontSize-8': '40',
  'global-fontSize-9': '48',
  'global-fontSize-10': '52',
  'global-letterSpacing-0': '0%',
  'global-letterSpacing-1': '0',
  'global-paragraphSpacing-0': '0',
  'global-textCase-none': 'none',
  'global-textDecoration-none': 'none',
  'global-paragraphIndent-0': '0rem',
  'global/global-fontFamilies-segoe-ui': 'Segoe UI',
  'global/global-fontWeights-segoe-ui-0': 'Regular',
  'global/global-fontWeights-segoe-ui-1': 'Semibold',
  'global/global-fontWeights-segoe-ui-2': 'Bold',
  'global/global-fontWeights-segoe-ui-3': 'Semilight',
  'global/global-fontWeights-segoe-ui-4': 'Light',
  'Theme/Light-Neutral-Background-1-Rest': '{colors.neutral.white}',
  'Theme/Light-Neutral-Background-1-Hover': '{colors.neutral.grey-80}',
  'Theme/Light-Neutral-Background-1-Pressed': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Background-1-Selected': '{colors.neutral.grey-90}',
  'Theme/Light-Neutral-Background-2-Rest': '#f5f4f2',
  'Theme/Light-Neutral-Background-3-Rest': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Background-3-Hover': '{colors.neutral.grey-80}',
  'Theme/Light-Neutral-Background-3-Pressed': '{colors.neutral.grey-80}',
  'Theme/Light-Neutral-Background-4-Rest': '{colors.neutral.grey-90}',
  'Theme/Light-Neutral-Background-4-Hover': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Background-4-Pressed': '{colors.neutral.grey-60}',
  'Theme/Light-Neutral-Background-5-Rest': '{colors.neutral.grey-80}',
  'Theme/Light-Neutral-Background-6-Rest': '{colors.neutral.grey-90}',
  'Theme/Light-Neutral-Background-Inverted-Rest': '{brand-10}',
  'Theme/Light-Neutral-Background-Inverted-Disabled-Rest': '{colors.alpha.white.10}',
  'Theme/Light-Neutral-Background-Alpha-1-Rest': '{colors.alpha.white.50}',
  'Theme/Light-Neutral-Background-Alpha-2-Rest': '{colors.alpha.white.80}',
  'Theme/Light-Neutral-Background-Static-Rest': '{colors.neutral.white}',
  'Theme/Light-Neutral-Background-Subtle-Rest': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Background-Subtle-Hover': '{colors.neutral.grey-80}',
  'Theme/Light-Neutral-Background-Subtle-Pressed': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Background-Subtle-Selected': '{colors.neutral.grey-90}',
  'Theme/Light-Neutral-Background-Subtle-Light alpha-Hover': '{colors.alpha.white.70}',
  'Theme/Light-Neutral-Background-Subtle-Light alpha-Pressed': '{colors.alpha.white.50}',
  'Theme/Light-Neutral-Background-Subtle-Light alpha-Selected': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Background-Subtle-Inverted-Rest': '{colors.alpha.black.0}',
  'Theme/Light-Neutral-Background-Subtle-Inverted-Hover': '{colors.alpha.black.10}',
  'Theme/Light-Neutral-Background-Subtle-Inverted-Pressed': '{colors.alpha.black.30}',
  'Theme/Light-Neutral-Background-Subtle-Inverted-Selected': '{colors.alpha.black.20}',
  'Theme/Light-Neutral-Background-Transparent-Rest': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Background-Transparent-Hover': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Background-Transparent-Pressed': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Background-Transparent-Selected': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Background-Disabled-Rest': '{colors.neutral.grey-80}',
  'Theme/Light-Neutral-Background-Stencil-1-Rest': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Background-Stencil-2-Rest': '{colors.neutral.grey-90}',
  'Theme/Light-Neutral-Background-Overlay-Rest': '{colors.alpha.black.40}',
  'Theme/Light-Neutral-Background-Overlay-Scrollbar-Rest': '{colors.alpha.black.50}',
  'Theme/Light-Neutral-Foreground-1-Rest primary text': '{brand-10}',
  'Theme/Light-Neutral-Foreground-1-Hover': '{brand-30}',
  'Theme/Light-Neutral-Foreground-1-Pressed': '{brand-30}',
  'Theme/Light-Neutral-Foreground-1-Selected': '{brand-30}',
  'Theme/Light-Neutral-Foreground-2-Rest secondary text': '{colors.neutral.grey-12}',
  'Theme/Light-Neutral-Foreground-2-Hover': '{colors.neutral.grey-6}',
  'Theme/Light-Neutral-Foreground-2-Pressed': '{colors.neutral.grey-6}',
  'Theme/Light-Neutral-Foreground-2-Selected': '{colors.neutral.grey-6}',
  'Theme/Light-Neutral-Foreground-2-Brand-Hover': '{brand-50}',
  'Theme/Light-Neutral-Foreground-2-Brand-Pressed': '{brand-40}',
  'Theme/Light-Neutral-Foreground-2-Brand-Selected': '{brand-30}',
  'Theme/Light-Neutral-Foreground-2-Brand-Rest': '{brand-60}',
  'Theme/Light-Neutral-Foreground-2-Link-Rest': '{brand-60}',
  'Theme/Light-Neutral-Foreground-2-Link-Hover': '{brand-50}',
  'Theme/Light-Neutral-Foreground-2-Link-Pressed': '{brand-40}',
  'Theme/Light-Neutral-Foreground-2-Link-Selected': '{brand-30}',
  'Theme/Light-Neutral-Foreground-4-Rest': '{colors.neutral.grey-30}',
  'Theme/Light-Neutral-Foreground-Disabled-2-Rest': '{colors.neutral.grey-60}',
  'Theme/Light-Neutral-Foreground-Disabled-Rest': '{colors.neutral.grey-50}',
  'Theme/Light-Neutral-Foreground-Static-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Light-Neutral-Foreground-Inverted-1-Rest': '{colors.neutral.white}',
  'Theme/Light-Neutral-Foreground-Inverted-1-Hover': '{colors.neutral.grey-80}',
  'Theme/Light-Neutral-Foreground-Inverted-1-Pressed': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Foreground-Inverted-1-Selected': '{colors.neutral.grey-60}',
  'Theme/Light-Neutral-Foreground-Inverted-2-Rest': '{colors.neutral.white}',
  'Theme/Light-Neutral-Foreground-Inverted-Disabled-Rest': '{colors.alpha.white.40}',
  'Theme/Light-Neutral-Foreground-Inverted-Link-Rest': '{colors.neutral.white}',
  'Theme/Light-Neutral-Foreground-Inverted-Link-Hover': '{colors.neutral.grey-90}',
  'Theme/Light-Neutral-Foreground-Inverted-Link-Pressed': '{colors.neutral.grey-80}',
  'Theme/Light-Neutral-Foreground-Inverted-Link-Selected': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Foreground-On Brand-Rest': '{colors.neutral.white}',
  'Theme/Light-Neutral-Stroke-1-Rest': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Stroke-1-Hover': '{colors.neutral.grey-60}',
  'Theme/Light-Neutral-Stroke-1-Pressed': '{colors.neutral.grey-50}',
  'Theme/Light-Neutral-Stroke-1-Selected': '{colors.neutral.grey-40}',
  'Theme/Light-Neutral-Stroke-2-Rest': '{colors.grey.white}',
  'Theme/Light-Neutral-Stroke-3-Rest': '{colors.neutral.grey-50}',
  'Theme/Light-Neutral-Stroke-Alpha-1-Rest': '{colors.alpha.black.5}',
  'Theme/Light-Neutral-Stroke-Alpha-2-Rest': '{colors.alpha.white.20}',
  'Theme/Light-Neutral-Stroke-Subtle-Rest': '#f5f4f2',
  'Theme/Light-Neutral-Stroke-on Brand-1-Rest': '{brand-60}',
  'Theme/Light-Neutral-Stroke-on Brand-2-Rest': '{colors.neutral.white}',
  'Theme/Light-Neutral-Stroke-Accessible-Rest': '{brand-60}',
  'Theme/Light-Neutral-Stroke-Accessible-Hover': '{brand-50}',
  'Theme/Light-Neutral-Stroke-Accessible-Pressed': '{brand-40}',
  'Theme/Light-Neutral-Stroke-Accessible-Selected': '{brand-30}',
  'Theme/Light-Neutral-Stroke-Focus-1-Rest': '{brand-60}',
  'Theme/Light-Neutral-Stroke-Focus-2-Rest': '{colors.grey.white}',
  'Theme/Light-Neutral-Stroke-Transparent-Interactive-Rest': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Stroke-Transparent-Disabled-Rest': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Stroke-Transparent-Rest': '{colors.alpha.white.0}',
  'Theme/Light-Neutral-Stroke-Disabled-Rest': '{colors.neutral.grey-70}',
  'Theme/Light-Neutral-Stroke-Disabled-Inverted-Rest': '{colors.alpha.white.40}',
  'Theme/Light-Brand-Background-1-Rest': '{brand-60}',
  'Theme/Light-Brand-Background-1-Hover': '{brand-50}',
  'Theme/Light-Brand-Background-1-Pressed': '{brand-40}',
  'Theme/Light-Brand-Background-1-Selected': '{brand-30}',
  'Theme/Light-Brand-Background-2-Rest': '{brand-10}',
  'Theme/Light-Brand-Background-2-Hover': '{brand-110}',
  'Theme/Light-Brand-Background-2-Pressed': '{brand-100}',
  'Theme/Light-Brand-Background-3-Rest': '{brand-120}',
  'Theme/Light-Brand-Background-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Light-Brand-Background-Inverted-Hover': '{brand-120}',
  'Theme/Light-Brand-Background-Inverted-Pressed': '{brand-130}',
  'Theme/Light-Brand-Background-Inverted-Selected': '{brand-100}',
  'Theme/Light-Brand-Background-Static-Rest': '{brand-60}',
  'Theme/Light-Brand-Background-Compound-Rest': '{brand-60}',
  'Theme/Light-Brand-Background-Compound-Hover': '{brand-50}',
  'Theme/Light-Brand-Background-Compound-Pressed': '{brand-40}',
  'Theme/Light-Brand-Foreground-1-Rest': '{brand-60}',
  'Theme/Light-Brand-Foreground-1-Hover': '{brand-50}',
  'Theme/Light-Brand-Foreground-1-Pressed': '{brand-40}',
  'Theme/Light-Brand-Foreground-1-Selected': '{brand-30}',
  'Theme/Light-Brand-Foreground-2-Rest': '{brand-80}',
  'Theme/Light-Brand-Foreground-2-Hover': '{brand-60}',
  'Theme/Light-Brand-Foreground-2-Pressed': '{brand-30}',
  'Theme/Light-Brand-Foreground-Link-Rest': '{brand-60}',
  'Theme/Light-Brand-Foreground-Link-Hover': '{brand-50}',
  'Theme/Light-Brand-Foreground-Link-Pressed': '{brand-40}',
  'Theme/Light-Brand-Foreground-Link-Selected': '{brand-30}',
  'Theme/Light-Brand-Foreground-Inverted-Rest': '{brand-100}',
  'Theme/Light-Brand-Foreground-Inverted-Hover': '{brand-110}',
  'Theme/Light-Brand-Foreground-Inverted-Pressed': '{brand-100}',
  'Theme/Light-Brand-Foreground-On Light-Rest': '{brand-80}',
  'Theme/Light-Brand-Foreground-On Light-Hover': '{brand-70}',
  'Theme/Light-Brand-Foreground-On Light-Pressed': '{brand-50}',
  'Theme/Light-Brand-Foreground-On Light-Selected': '{brand-60}',
  'Theme/Light-Brand-Foreground-Compound-Rest': '{brand-60}',
  'Theme/Light-Brand-Foreground-Compound-Hover': '{brand-50}',
  'Theme/Light-Brand-Foreground-Compound-Pressed': '{brand-40}',
  'Theme/Light-Brand-Stroke-1-Rest': '{brand-60}',
  'Theme/Light-Brand-Stroke-1-Hover': '{brand-50}',
  'Theme/Light-Brand-Stroke-1-Pressed': '{brand-40}',
  'Theme/Light-Brand-Stroke-1-Selected': '{brand-30}',
  'Theme/Light-Brand-Stroke-2-Rest': '{brand-10}',
  'Theme/Light-Brand-Stroke-2-Contrast-Rest': '{brand-110}',
  'Theme/Light-Brand-Stroke-3-Rest': '{brand-90}',
  'Theme/Light-Brand-Stroke-Compound-Rest': '{brand-60}',
  'Theme/Light-Brand-Stroke-Compound-Hover': '{brand-50}',
  'Theme/Light-Brand-Stroke-Compound-Pressed': '{brand-40}',
  'Theme/Light-Status-Danger-Background-1-Rest': '{colors.shared.cranberry.tint 60}',
  'Theme/Light-Status-Danger-Background-3-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light-Status-Danger-Foreground-1-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light-Status-Danger-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Light-Status-Danger-Stroke-1-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light-Status-Danger-Stroke-2-Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Light-Status-Success-Background-1-Rest': '{colors.shared.green.tint 60}',
  'Theme/Light-Status-Success-Background-3-Rest': '{colors.shared.green.primary}',
  'Theme/Light-Status-Success-Foreground-1-Rest': '{colors.shared.green.primary}',
  'Theme/Light-Status-Success-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Light-Status-Success-Stroke-1-Rest': '{colors.shared.green.primary}',
  'Theme/Light-Status-Success-Stroke-2-Rest': '{colors.shared.green.tint 30}',
  'Theme/Light-Status-Warning-Background-1-Rest': '{colors.shared.orange.tint 60}',
  'Theme/Light-Status-Warning-Background-3-Rest': '{colors.shared.orange.primary}',
  'Theme/Light-Status-Warning-Foreground-1-Rest': '{colors.shared.orange.primary}',
  'Theme/Light-Status-Warning-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Light-Status-Warning-Stroke-1-Rest': '{colors.shared.orange.primary}',
  'Theme/Light-Status-Warning-Stroke-2-Rest': '{colors.shared.orange.tint 30}',
  'Theme/Light-Status-Oof-Foreground-3-Rest': '{colors.shared.berry.primary}',
  'Theme/Light-Status-Away-Background-3-Rest': '{colors.shared.marigold.primary}',
  'Theme/Light-Status-Available-Foreground-3-Rest': '{colors.shared.light green.primary}',
  'Theme/Light-Status-Generic-Anchor-Background-2-Rest': '{colors.shared.anchor.tint 40}',
  'Theme/Light-Status-Generic-Anchor-Foreground-2-Rest': '{colors.shared.anchor.shade 30}',
  'Theme/Light-Status-Generic-Anchor-Stroke-Active-Rest': '{colors.shared.anchor.primary}',
  'Theme/Light-Status-Generic-Information-Background-1-Rest': '{colors.shared.information.tint 60}',
  'Theme/Light-Status-Generic-Information-Background-1-Hover': '{colors.shared.information.tint 50}',
  'Theme/Light-Status-Generic-Information-Background-1-Pressed': '{colors.shared.information.tint 40}',
  'Theme/Light-Status-Generic-Information-Stroke-1-Rest': '{colors.shared.information.primary}',
  'Theme/Light-Status-Generic-Information-Stroke-2-Rest': '{colors.shared.information.tint 30}',
  'Theme/Light-Status-Generic-Information-Stroke-2-Hover': '{colors.shared.information.tint 20}',
  'Theme/Light-Status-Generic-Information-Stroke-2-Pressed': '{colors.shared.information.tint 10}',
  'Theme/Light-Status-Generic-Information-Foreground-Rest': '{colors.shared.information.primary}',
  'Theme/Light-Status-Generic-Information-Foreground-Hover': '{colors.shared.information.shade 10}',
  'Theme/Light-Status-Generic-Information-Foreground-Pressed': '{colors.shared.information.shade 20}',
  'Theme/Light-Status-Severe-Background-1-Rest': '{colors.shared.dark orange.tint 60}',
  'Theme/Light-Status-Severe-Background-3-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light-Status-Severe-Foreground-1-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light-Status-Severe-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Light-Status-Severe-Stroke-1-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light-Status-Severe-Stroke-2-Rest': '{colors.shared.dark orange.tint 30}',
  'Theme/Light-Shadow-ambient': '#0000001f',
  'Theme/Light-Shadow-ambient-lighter': '#0000000f',
  'Theme/Light-Shadow-ambient-darker': '#00000033',
  'Theme/Light-Shadow-brand-ambient': '#00000040',
  'Theme/Light-Shadow-key': '#00000024',
  'Theme/Light-Shadow-key-lighter': '#00000012',
  'Theme/Light-Shadow-key-darker': '#0000003d',
  'Theme/Light-Shadow-brand-key': '#0000004d',
  'Theme/Light-Data viz-Foreground-Labels-Categorical': '{colors.brand.brand-10}',
  'Theme/Light-Data viz-Foreground-Labels-Data': '{colors.neutral.grey-12}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Blue': '{colors.data viz.core.blue}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Gray': '{colors.data viz.core.gray}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Red': '{colors.data viz.core.red}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Teal': '{colors.data viz.core.teal}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Ocean': '{colors.data viz.core.ocean}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Green': '{colors.data viz.core.green}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Yellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Blue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Gray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Red400': '{colors.data viz.sequential.red400}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Teal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Red300': '{colors.data viz.sequential.red300}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Teal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Ocean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Green400': '{colors.data viz.sequential.green400}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Yellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Green300': '{colors.data viz.sequential.green300}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Gray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Blue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light-Data viz-Foreground-Labels-Color-Ocean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light-Data viz-Foreground-Accessibility-Text dark bkgd': '{colors.neutral.white}',
  'Theme/Light-Data viz-Foreground-Accessibility-Text light bkgd': '{colors.neutral.black}',
  'Theme/Light-Data viz-Foreground-KPI Card-Text dark bkgd': '{colors.neutral.white}',
  'Theme/Light-Data viz-Foreground-KPI Card-Text light bkgd': '{colors.neutral.grey-40}',
  'Theme/Light-Data viz-Stroke-Gridline': '{colors.neutral.grey-70}',
  'Theme/Light-Data viz-Stroke-Axis-Target-Benchmark': '{colors.neutral.black}',
  'Theme/Light-Data viz-Stroke-Color-Blue': '{colors.data viz.core.blue}',
  'Theme/Light-Data viz-Stroke-Color-Blue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light-Data viz-Stroke-Color-Gray': '{colors.data viz.core.gray}',
  'Theme/Light-Data viz-Stroke-Color-Gray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light-Data viz-Stroke-Color-Red': '{colors.data viz.core.red}',
  'Theme/Light-Data viz-Stroke-Color-Red300': '{colors.data viz.sequential.red300}',
  'Theme/Light-Data viz-Stroke-Color-Red400': '{colors.data viz.sequential.red400}',
  'Theme/Light-Data viz-Stroke-Color-Teal': '{colors.data viz.core.teal}',
  'Theme/Light-Data viz-Stroke-Color-Teal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light-Data viz-Stroke-Color-Teal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light-Data viz-Stroke-Color-Ocean': '{colors.data viz.core.ocean}',
  'Theme/Light-Data viz-Stroke-Color-Ocean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light-Data viz-Stroke-Color-Green': '{colors.data viz.core.green}',
  'Theme/Light-Data viz-Stroke-Color-Green300': '{colors.data viz.sequential.green300}',
  'Theme/Light-Data viz-Stroke-Color-Green400': '{colors.data viz.sequential.green400}',
  'Theme/Light-Data viz-Stroke-Color-Yellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light-Data viz-Stroke-Color-Yellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light-Data viz-Stroke-Color-Gray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light-Data viz-Stroke-Color-Blue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light-Data viz-Stroke-Color-Ocean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light-Data viz-Stroke-Color-Yellow': '{colors.data viz.core.yellow}',
  'Theme/Light-Data viz-Stroke-Trend-Average': '{colors.data viz.sequential.gray300}',
  'Theme/Light-Data viz-Stroke-Accessible outline': '{colors.neutral.white}',
  'Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Positive': '{colors.data viz.core.green}',
  'Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Negative': '{colors.data viz.core.red}',
  'Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Positive': '#37bb65',
  'Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Negative': '#cc2e48',
  'Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Positive': '{colors.data viz.core.green}',
  'Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Negative': '{colors.data viz.core.red}',
  'Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Positive': '#37bb65',
  'Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Negative': '#cc2e48',
  'Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light-Data viz-Semantic-Background-Positive': '{colors.data viz.core.green}',
  'Theme/Light-Data viz-Semantic-Background-Negative': '{colors.data viz.core.red}',
  'Theme/Light-Data viz-Semantic-Background-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light-Data viz-Background-Core-Blue': '{colors.data viz.core.blue}',
  'Theme/Light-Data viz-Background-Core-Gray': '{colors.data viz.core.gray}',
  'Theme/Light-Data viz-Background-Core-Red': '{colors.data viz.core.red}',
  'Theme/Light-Data viz-Background-Core-Teal': '{colors.data viz.core.teal}',
  'Theme/Light-Data viz-Background-Core-Ocean': '{colors.data viz.core.ocean}',
  'Theme/Light-Data viz-Background-Core-Green': '{colors.data viz.core.green}',
  'Theme/Light-Data viz-Background-Core-Yellow': '{colors.data viz.core.yellow}',
  'Theme/Light-Data viz-Background-Sequential-Blue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light-Data viz-Background-Sequential-Gray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light-Data viz-Background-Sequential-Red300': '{colors.data viz.sequential.red300}',
  'Theme/Light-Data viz-Background-Sequential-Red400': '{colors.data viz.sequential.red400}',
  'Theme/Light-Data viz-Background-Sequential-Teal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light-Data viz-Background-Sequential-Teal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light-Data viz-Background-Sequential-Ocean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light-Data viz-Background-Sequential-Green300': '{colors.data viz.sequential.green300}',
  'Theme/Light-Data viz-Background-Sequential-Green400': '{colors.data viz.sequential.green400}',
  'Theme/Light-Data viz-Background-Sequential-Yellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light-Data viz-Background-Sequential-Yellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light-Data viz-Background-Sequential-Blue300': '{colors.data viz.sequential.blue300}',
  'Theme/Light-Data viz-Background-Sequential-Blue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light-Data viz-Background-Sequential-Blue100': '{colors.data viz.sequential.blue100}',
  'Theme/Light-Data viz-Background-Sequential-Gray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light-Data viz-Background-Sequential-Gray200': '{colors.data viz.sequential.gray200}',
  'Theme/Light-Data viz-Background-Sequential-Gray100': '{colors.data viz.sequential.gray100}',
  'Theme/Light-Data viz-Background-Sequential-Red200': '{colors.data viz.sequential.red200}',
  'Theme/Light-Data viz-Background-Sequential-Red100': '{colors.data viz.sequential.red100}',
  'Theme/Light-Data viz-Background-Sequential-Teal200': '{colors.data viz.sequential.teal200}',
  'Theme/Light-Data viz-Background-Sequential-Teal100': '{colors.data viz.sequential.teal100}',
  'Theme/Light-Data viz-Background-Sequential-Ocean300': '{colors.data viz.sequential.ocean300}',
  'Theme/Light-Data viz-Background-Sequential-Ocean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light-Data viz-Background-Sequential-Ocean100': '{colors.data viz.sequential.ocean100}',
  'Theme/Light-Data viz-Background-Sequential-Green200': '{colors.data viz.sequential.green200}',
  'Theme/Light-Data viz-Background-Sequential-Green100': '{colors.data viz.sequential.green100}',
  'Theme/Light-Data viz-Background-Sequential-Yellow200': '{colors.data viz.sequential.yellow200}',
  'Theme/Light-Data viz-Background-Sequential-Yellow100': '{colors.data viz.sequential.yellow100}',
  'Theme/Light-Data viz-Background-Neutral-Black': '{colors.neutral.black}',
  'Theme/Light-Control logic-Theme switch': 'Light',
  'Theme/Dark-Neutral-Background-1-Rest': '{colors.neutral.black}',
  'Theme/Dark-Neutral-Background-1-Hover': '{colors.neutral.grey-10}',
  'Theme/Dark-Neutral-Background-1-Pressed': '{colors.neutral.grey-12}',
  'Theme/Dark-Neutral-Background-1-Selected': '{colors.neutral.grey-8}',
  'Theme/Dark-Neutral-Background-2-Rest': '{colors.neutral.grey-6}',
  'Theme/Dark-Neutral-Background-3-Rest': '{colors.neutral.grey-12}',
  'Theme/Dark-Neutral-Background-3-Hover': '{colors.neutral.grey-10}',
  'Theme/Dark-Neutral-Background-3-Pressed': '{colors.neutral.grey-10}',
  'Theme/Dark-Neutral-Background-4-Rest': '{colors.neutral.grey-90}',
  'Theme/Dark-Neutral-Background-4-Hover': '{colors.neutral.grey-70}',
  'Theme/Dark-Neutral-Background-4-Pressed': '{colors.neutral.grey-60}',
  'Theme/Dark-Neutral-Background-5-Rest': '{colors.neutral.grey-90}',
  'Theme/Dark-Neutral-Background-6-Rest': '{colors.neutral.grey-20}',
  'Theme/Dark-Neutral-Background-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Background-Inverted-Disabled-Rest': '{colors.alpha.white.10}',
  'Theme/Dark-Neutral-Background-Alpha-1-Rest': '{colors.alpha.brand-10.50}',
  'Theme/Dark-Neutral-Background-Alpha-2-Rest': '{colors.alpha.black.70}',
  'Theme/Dark-Neutral-Background-Static-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Background-Subtle-Rest': '{colors.alpha.black.0}',
  'Theme/Dark-Neutral-Background-Subtle-Hover': '{colors.neutral.grey-80}',
  'Theme/Dark-Neutral-Background-Subtle-Pressed': '{colors.neutral.grey-70}',
  'Theme/Dark-Neutral-Background-Subtle-Selected': '{colors.neutral.grey-90}',
  'Theme/Dark-Neutral-Background-Subtle-Light alpha-Hover': '#242424cc',
  'Theme/Dark-Neutral-Background-Subtle-Light alpha-Pressed': '#24242480',
  'Theme/Dark-Neutral-Background-Subtle-Light alpha-Selected': '{colors.alpha.black.0}',
  'Theme/Dark-Neutral-Background-Subtle-Inverted-Rest': '{colors.alpha.black.0}',
  'Theme/Dark-Neutral-Background-Subtle-Inverted-Hover': '{colors.alpha.black.10}',
  'Theme/Dark-Neutral-Background-Subtle-Inverted-Pressed': '{colors.alpha.black.30}',
  'Theme/Dark-Neutral-Background-Subtle-Inverted-Selected': '{colors.alpha.black.20}',
  'Theme/Dark-Neutral-Background-Transparent-Rest': '{colors.alpha.black.0}',
  'Theme/Dark-Neutral-Background-Transparent-Hover': '{colors.alpha.black.0}',
  'Theme/Dark-Neutral-Background-Transparent-Pressed': '{colors.alpha.black.0}',
  'Theme/Dark-Neutral-Background-Transparent-Selected': '{colors.alpha.black.0}',
  'Theme/Dark-Neutral-Background-Disabled-Rest': '{colors.neutral.grey-8}',
  'Theme/Dark-Neutral-Background-Stencil-1-Rest': '#575757',
  'Theme/Dark-Neutral-Background-Stencil-2-Rest': '{colors.neutral.grey-20}',
  'Theme/Dark-Neutral-Background-Overlay-Rest': '{colors.alpha.black.50}',
  'Theme/Dark-Neutral-Background-Overlay-Scrollbar-Rest': '{colors.alpha.white.60}',
  'Theme/Dark-Neutral-Foreground-1-Rest primary text': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-1-Hover': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-1-Pressed': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-1-Selected': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-2-Rest secondary text': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-2-Hover': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-2-Pressed': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-2-Selected': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-2-Brand-Hover': '{brand-100}',
  'Theme/Dark-Neutral-Foreground-2-Brand-Pressed': '{brand-90}',
  'Theme/Dark-Neutral-Foreground-2-Brand-Selected': '{brand-100}',
  'Theme/Dark-Neutral-Foreground-2-Brand-Rest': '{brand-100}',
  'Theme/Dark-Neutral-Foreground-2-Link-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-2-Link-Hover': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-2-Link-Pressed': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-2-Link-Selected': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-4-Rest': '{colors.neutral.grey-60}',
  'Theme/Dark-Neutral-Foreground-Disabled-2-Rest': '{colors.neutral.grey-60}',
  'Theme/Dark-Neutral-Foreground-Disabled-Rest': '{colors.neutral.grey-50}',
  'Theme/Dark-Neutral-Foreground-Static-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-Inverted-1-Rest': '#242424',
  'Theme/Dark-Neutral-Foreground-Inverted-1-Hover': '#242424',
  'Theme/Dark-Neutral-Foreground-Inverted-1-Pressed': '#242424',
  'Theme/Dark-Neutral-Foreground-Inverted-1-Selected': '#242424',
  'Theme/Dark-Neutral-Foreground-Inverted-2-Rest': '#242424',
  'Theme/Dark-Neutral-Foreground-Inverted-Disabled-Rest': '{colors.alpha.white.40}',
  'Theme/Dark-Neutral-Foreground-Inverted-Link-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-Inverted-Link-Hover': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-Inverted-Link-Pressed': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-Inverted-Link-Selected': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Foreground-On Brand-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Stroke-1-Rest': '{colors.neutral.grey-40}',
  'Theme/Dark-Neutral-Stroke-1-Hover': '{colors.neutral.grey-40}',
  'Theme/Dark-Neutral-Stroke-1-Pressed': '{colors.neutral.grey-40}',
  'Theme/Dark-Neutral-Stroke-1-Selected': '{colors.neutral.grey-40}',
  'Theme/Dark-Neutral-Stroke-2-Rest': '{colors.grey.white}',
  'Theme/Dark-Neutral-Stroke-3-Rest': '{colors.neutral.grey-50}',
  'Theme/Dark-Neutral-Stroke-Alpha-1-Rest': '{colors.alpha.white.10}',
  'Theme/Dark-Neutral-Stroke-Alpha-2-Rest': '{colors.alpha.white.20}',
  'Theme/Dark-Neutral-Stroke-Subtle-Rest': '#f5f4f2',
  'Theme/Dark-Neutral-Stroke-on Brand-1-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Stroke-on Brand-2-Rest': '{colors.grey.white}',
  'Theme/Dark-Neutral-Stroke-Accessible-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Stroke-Accessible-Hover': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Stroke-Accessible-Pressed': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Stroke-Accessible-Selected': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Stroke-Focus-1-Rest': '{colors.neutral.black}',
  'Theme/Dark-Neutral-Stroke-Focus-2-Rest': '{colors.neutral.white}',
  'Theme/Dark-Neutral-Stroke-Transparent-Interactive-Rest': '{colors.alpha.white.0}',
  'Theme/Dark-Neutral-Stroke-Transparent-Disabled-Rest': '{colors.alpha.white.0}',
  'Theme/Dark-Neutral-Stroke-Transparent-Rest': '{colors.alpha.white.0}',
  'Theme/Dark-Neutral-Stroke-Disabled-Rest': '{colors.neutral.grey-70}',
  'Theme/Dark-Neutral-Stroke-Disabled-Inverted-Rest': '{colors.alpha.white.40}',
  'Theme/Dark-Brand-Background-1-Rest': '{brand-60}',
  'Theme/Dark-Brand-Background-1-Hover': '{brand-40}',
  'Theme/Dark-Brand-Background-1-Pressed': '{brand-30}',
  'Theme/Dark-Brand-Background-1-Selected': '{brand-20}',
  'Theme/Dark-Brand-Background-2-Rest': '{brand-20}',
  'Theme/Dark-Brand-Background-2-Hover': '{brand-40}',
  'Theme/Dark-Brand-Background-2-Pressed': '{brand-10}',
  'Theme/Dark-Brand-Background-3-Rest': '#ffffff',
  'Theme/Dark-Brand-Background-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Dark-Brand-Background-Inverted-Hover': '{brand-120}',
  'Theme/Dark-Brand-Background-Inverted-Pressed': '{brand-130}',
  'Theme/Dark-Brand-Background-Inverted-Selected': '{brand-100}',
  'Theme/Dark-Brand-Background-Static-Rest': '{brand-80}',
  'Theme/Dark-Brand-Background-Compound-Rest': '{brand-100}',
  'Theme/Dark-Brand-Background-Compound-Hover': '{brand-110}',
  'Theme/Dark-Brand-Background-Compound-Pressed': '{brand-90}',
  'Theme/Dark-Brand-Foreground-1-Rest': '{brand-100}',
  'Theme/Dark-Brand-Foreground-1-Hover': '{brand-100}',
  'Theme/Dark-Brand-Foreground-1-Pressed': '{brand-100}',
  'Theme/Dark-Brand-Foreground-1-Selected': '{brand-100}',
  'Theme/Dark-Brand-Foreground-2-Rest': '{brand-110}',
  'Theme/Dark-Brand-Foreground-2-Hover': '{brand-130}',
  'Theme/Dark-Brand-Foreground-2-Pressed': '{brand-100}',
  'Theme/Dark-Brand-Foreground-Link-Rest': '{brand-100}',
  'Theme/Dark-Brand-Foreground-Link-Hover': '{brand-110}',
  'Theme/Dark-Brand-Foreground-Link-Pressed': '{brand-90}',
  'Theme/Dark-Brand-Foreground-Link-Selected': '{brand-100}',
  'Theme/Dark-Brand-Foreground-Inverted-Rest': '{brand-80}',
  'Theme/Dark-Brand-Foreground-Inverted-Hover': '{brand-70}',
  'Theme/Dark-Brand-Foreground-Inverted-Pressed': '{brand-60}',
  'Theme/Dark-Brand-Foreground-On Light-Rest': '{brand-70}',
  'Theme/Dark-Brand-Foreground-On Light-Hover': '{brand-70}',
  'Theme/Dark-Brand-Foreground-On Light-Pressed': '{brand-50}',
  'Theme/Dark-Brand-Foreground-On Light-Selected': '{brand-60}',
  'Theme/Dark-Brand-Foreground-Compound-Rest': '{brand-100}',
  'Theme/Dark-Brand-Foreground-Compound-Hover': '{brand-110}',
  'Theme/Dark-Brand-Foreground-Compound-Pressed': '{brand-90}',
  'Theme/Dark-Brand-Stroke-1-Rest': '{brand-100}',
  'Theme/Dark-Brand-Stroke-1-Hover': '#2886de',
  'Theme/Dark-Brand-Stroke-1-Pressed': '{brand-70}',
  'Theme/Dark-Brand-Stroke-1-Selected': '{brand-70}',
  'Theme/Dark-Brand-Stroke-2-Rest': '{brand-50}',
  'Theme/Dark-Brand-Stroke-2-Contrast-Rest': '{brand-60}',
  'Theme/Dark-Brand-Stroke-3-Rest': '#ffffff',
  'Theme/Dark-Brand-Stroke-Compound-Rest': '{brand-100}',
  'Theme/Dark-Brand-Stroke-Compound-Hover': '{brand-110}',
  'Theme/Dark-Brand-Stroke-Compound-Pressed': '{brand-90}',
  'Theme/Dark-Status-Danger-Background-1-Rest': '{colors.neutral.white}',
  'Theme/Dark-Status-Danger-Background-3-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Dark-Status-Danger-Foreground-1-Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Dark-Status-Danger-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Dark-Status-Danger-Stroke-1-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Dark-Status-Danger-Stroke-2-Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Dark-Status-Success-Background-1-Rest': '{colors.shared.green.tint 60}',
  'Theme/Dark-Status-Success-Background-3-Rest': '{colors.shared.green.primary}',
  'Theme/Dark-Status-Success-Foreground-1-Rest': '{colors.shared.green.primary}',
  'Theme/Dark-Status-Success-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Dark-Status-Success-Stroke-1-Rest': '{colors.shared.green.primary}',
  'Theme/Dark-Status-Success-Stroke-2-Rest': '{colors.shared.green.tint 30}',
  'Theme/Dark-Status-Warning-Background-1-Rest': '{colors.shared.orange.tint 60}',
  'Theme/Dark-Status-Warning-Background-3-Rest': '{colors.shared.orange.primary}',
  'Theme/Dark-Status-Warning-Foreground-1-Rest': '{colors.shared.orange.primary}',
  'Theme/Dark-Status-Warning-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Dark-Status-Warning-Stroke-1-Rest': '{colors.shared.orange.primary}',
  'Theme/Dark-Status-Warning-Stroke-2-Rest': '{colors.shared.orange.tint 30}',
  'Theme/Dark-Status-Oof-Foreground-3-Rest': '{colors.shared.berry.tint 20}',
  'Theme/Dark-Status-Away-Background-3-Rest': '{colors.shared.marigold.primary}',
  'Theme/Dark-Status-Available-Foreground-3-Rest': '{colors.shared.light green.primary}',
  'Theme/Dark-Status-Generic-Anchor-Background-2-Rest': '{colors.shared.anchor.shade 30}',
  'Theme/Dark-Status-Generic-Anchor-Foreground-2-Rest': '{colors.shared.anchor.tint 40}',
  'Theme/Dark-Status-Generic-Anchor-Stroke-Active-Rest': '{colors.shared.anchor.tint 30}',
  'Theme/Dark-Status-Generic-Information-Background-1-Rest': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Background-1-Hover': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Background-1-Pressed': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Stroke-1-Rest': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Stroke-2-Rest': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Stroke-2-Hover': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Stroke-2-Pressed': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Foreground-Rest': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Foreground-Hover': '#ffffff',
  'Theme/Dark-Status-Generic-Information-Foreground-Pressed': '#ffffff',
  'Theme/Dark-Status-Severe-Background-1-Rest': '{colors.shared.dark orange.tint 60}',
  'Theme/Dark-Status-Severe-Background-3-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark-Status-Severe-Foreground-1-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark-Status-Severe-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Dark-Status-Severe-Stroke-1-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark-Status-Severe-Stroke-2-Rest': '{colors.shared.dark orange.tint 30}',
  'Theme/Dark-Shadow-ambient': '#00000033',
  'Theme/Dark-Shadow-ambient-lighter': '#0000001f',
  'Theme/Dark-Shadow-ambient-darker': '#00000066',
  'Theme/Dark-Shadow-brand-ambient': '#00000040',
  'Theme/Dark-Shadow-key': '#00000047',
  'Theme/Dark-Shadow-key-lighter': '#00000024',
  'Theme/Dark-Shadow-key-darker': '#0000007a',
  'Theme/Dark-Shadow-brand-key': '#0000004d',
  'Theme/Dark-Data viz-Foreground-Labels-Categorical': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Data': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Blue': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Gray': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Red': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Teal': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Ocean': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Green': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Yellow300': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Blue400': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Gray400': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Red400': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Teal300': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Red300': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Teal400': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Ocean400': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Green400': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Yellow400': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Green300': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Gray300': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Blue200': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Labels-Color-Ocean200': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Accessibility-Text dark bkgd': '#ffffff',
  'Theme/Dark-Data viz-Foreground-Accessibility-Text light bkgd': '#ffffff',
  'Theme/Dark-Data viz-Foreground-KPI Card-Text dark bkgd': '#ffffff',
  'Theme/Dark-Data viz-Foreground-KPI Card-Text light bkgd': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Gridline': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Axis-Target-Benchmark': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Blue': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Blue400': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Gray': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Gray400': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Red': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Red300': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Red400': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Teal': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Teal300': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Teal400': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Ocean': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Ocean400': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Green': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Green300': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Green400': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Yellow300': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Yellow400': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Gray300': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Blue200': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Ocean200': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Color-Yellow': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Trend-Average': '#ffffff',
  'Theme/Dark-Data viz-Stroke-Accessible outline': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Positive': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Negative': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Notice': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Positive': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Negative': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Notice': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Positive': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Negative': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Notice': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Positive': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Negative': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Notice': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Background-Positive': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Background-Negative': '#ffffff',
  'Theme/Dark-Data viz-Semantic-Background-Notice': '#ffffff',
  'Theme/Dark-Data viz-Background-Core-Blue': '#ffffff',
  'Theme/Dark-Data viz-Background-Core-Gray': '#ffffff',
  'Theme/Dark-Data viz-Background-Core-Red': '#ffffff',
  'Theme/Dark-Data viz-Background-Core-Teal': '#ffffff',
  'Theme/Dark-Data viz-Background-Core-Ocean': '#ffffff',
  'Theme/Dark-Data viz-Background-Core-Green': '#ffffff',
  'Theme/Dark-Data viz-Background-Core-Yellow': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Blue400': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Gray400': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Red300': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Red400': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Teal300': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Teal400': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Ocean400': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Green300': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Green400': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Yellow300': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Yellow400': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Blue300': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Blue200': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Blue100': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Gray300': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Gray200': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Gray100': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Red200': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Red100': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Teal200': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Teal100': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Ocean300': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Ocean200': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Ocean100': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Green200': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Green100': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Yellow200': '#ffffff',
  'Theme/Dark-Data viz-Background-Sequential-Yellow100': '#ffffff',
  'Theme/Dark-Data viz-Background-Neutral-Black': '#ffffff',
  'Theme/Dark-Control logic-Theme switch': 'Dark',
  'Global/Value-Colors-Neutral-Black': '#000000',
  'Global/Value-Colors-Neutral-Grey-6': '#111111',
  'Global/Value-Colors-Neutral-Grey-8': '#2c2c2c',
  'Global/Value-Colors-Neutral-Grey-10': '#3a3a3a',
  'Global/Value-Colors-Neutral-Grey-12': '#595959',
  'Global/Value-Colors-Neutral-Grey-20': '#626a6a',
  'Global/Value-Colors-Neutral-Grey-30': '#788383',
  'Global/Value-Colors-Neutral-Grey-40': '#959d9d',
  'Global/Value-Colors-Neutral-Grey-50': '#afb6b6',
  'Global/Value-Colors-Neutral-Grey-60': '#cacece',
  'Global/Value-Colors-Neutral-Grey-70': '#e4e7e7',
  'Global/Value-Colors-Neutral-Grey-80': '#f2f3f3',
  'Global/Value-Colors-Neutral-Grey-90': '#f8f8f8',
  'Global/Value-Colors-Neutral-White': '#ffffff',
  'Global/Value-Colors-Shared-Burgundy-Shade 50': '#1a0607',
  'Global/Value-Colors-Shared-Burgundy-Shade 40': '#310b0d',
  'Global/Value-Colors-Shared-Burgundy-Shade 30': '#5c1519',
  'Global/Value-Colors-Shared-Burgundy-Shade 20': '#7d1d21',
  'Global/Value-Colors-Shared-Burgundy-Shade 10': '#942228',
  'Global/Value-Colors-Shared-Burgundy-Primary': '#a4262c',
  'Global/Value-Colors-Shared-Burgundy-Tint 10': '#af393e',
  'Global/Value-Colors-Shared-Burgundy-Tint 20': '#ba4d52',
  'Global/Value-Colors-Shared-Burgundy-Tint 30': '#c86c70',
  'Global/Value-Colors-Shared-Burgundy-Tint 40': '#e4afb2',
  'Global/Value-Colors-Shared-Burgundy-Tint 50': '#f0d3d4',
  'Global/Value-Colors-Shared-Burgundy-Tint 60': '#fbf4f4',
  'Global/Value-Colors-Shared-Cranberry-Primary': '#ad0000',
  'Global/Value-Colors-Shared-Cranberry-Tint 30': '#dd9090',
  'Global/Value-Colors-Shared-Cranberry-Tint 60': '#fcdfdf',
  'Global/Value-Colors-Shared-Red-Shade 50': '#210809',
  'Global/Value-Colors-Shared-Red-Shade 40': '#3f1011',
  'Global/Value-Colors-Shared-Red-Shade 30': '#751d1f',
  'Global/Value-Colors-Shared-Red-Shade 20': '#9f282b',
  'Global/Value-Colors-Shared-Red-Shade 10': '#bc2f32',
  'Global/Value-Colors-Shared-Red-Primary': '#d13438',
  'Global/Value-Colors-Shared-Red-Tint 10': '#d7494c',
  'Global/Value-Colors-Shared-Red-Tint 20': '#dc5e62',
  'Global/Value-Colors-Shared-Red-Tint 30': '#e37d80',
  'Global/Value-Colors-Shared-Red-Tint 40': '#f1bbbc',
  'Global/Value-Colors-Shared-Red-Tint 50': '#f8dadb',
  'Global/Value-Colors-Shared-Red-Tint 60': '#fdf6f6',
  'Global/Value-Colors-Shared-Dark Orange-Primary': '#da3b01',
  'Global/Value-Colors-Shared-Dark Orange-Tint 30': '#f5c0ac',
  'Global/Value-Colors-Shared-Dark Orange-Tint 60': '#f8e8e1',
  'Global/Value-Colors-Shared-Bronze-Shade 50': '#1b0a01',
  'Global/Value-Colors-Shared-Bronze-Shade 40': '#321303',
  'Global/Value-Colors-Shared-Bronze-Shade 30': '#5e2405',
  'Global/Value-Colors-Shared-Bronze-Shade 20': '#7f3107',
  'Global/Value-Colors-Shared-Bronze-Shade 10': '#963a08',
  'Global/Value-Colors-Shared-Bronze-Primary': '#a74109',
  'Global/Value-Colors-Shared-Bronze-Tint 10': '#b2521e',
  'Global/Value-Colors-Shared-Bronze-Tint 20': '#bc6535',
  'Global/Value-Colors-Shared-Bronze-Tint 30': '#ca8057',
  'Global/Value-Colors-Shared-Bronze-Tint 40': '#e5bba4',
  'Global/Value-Colors-Shared-Bronze-Tint 50': '#f1d9cc',
  'Global/Value-Colors-Shared-Bronze-Tint 60': '#fbf5f2',
  'Global/Value-Colors-Shared-Orange-Primary': '#c9601c',
  'Global/Value-Colors-Shared-Orange-Tint 30': '#f0a371',
  'Global/Value-Colors-Shared-Orange-Tint 60': '#fbeee6',
  'Global/Value-Colors-Shared-Peach-Shade 50': '#291600',
  'Global/Value-Colors-Shared-Peach-Shade 40': '#4d2a00',
  'Global/Value-Colors-Shared-Peach-Shade 30': '#8f4e00',
  'Global/Value-Colors-Shared-Peach-Shade 20': '#c26a00',
  'Global/Value-Colors-Shared-Peach-Shade 10': '#e67e00',
  'Global/Value-Colors-Shared-Peach-Primary': '#ff8c00',
  'Global/Value-Colors-Shared-Peach-Tint 10': '#ff9a1f',
  'Global/Value-Colors-Shared-Peach-Tint 20': '#ffa83d',
  'Global/Value-Colors-Shared-Peach-Tint 30': '#ffba66',
  'Global/Value-Colors-Shared-Peach-Tint 40': '#ffddb3',
  'Global/Value-Colors-Shared-Peach-Tint 50': '#ffedd6',
  'Global/Value-Colors-Shared-Peach-Tint 60': '#fffaf5',
  'Global/Value-Colors-Shared-Marigold-Shade 50': '#251a00',
  'Global/Value-Colors-Shared-Marigold-Shade 40': '#463100',
  'Global/Value-Colors-Shared-Marigold-Shade 30': '#835b00',
  'Global/Value-Colors-Shared-Marigold-Shade 20': '#b27c00',
  'Global/Value-Colors-Shared-Marigold-Shade 10': '#d39300',
  'Global/Value-Colors-Shared-Marigold-Primary': '#eaa300',
  'Global/Value-Colors-Shared-Marigold-Tint 10': '#edad1c',
  'Global/Value-Colors-Shared-Marigold-Tint 20': '#efb839',
  'Global/Value-Colors-Shared-Marigold-Tint 30': '#f2c661',
  'Global/Value-Colors-Shared-Marigold-Tint 40': '#f9e2ae',
  'Global/Value-Colors-Shared-Marigold-Tint 50': '#fcefd3',
  'Global/Value-Colors-Shared-Marigold-Tint 60': '#fefbf4',
  'Global/Value-Colors-Shared-Yellow-Shade 50': '#282400',
  'Global/Value-Colors-Shared-Yellow-Shade 40': '#4c4400',
  'Global/Value-Colors-Shared-Yellow-Shade 30': '#817400',
  'Global/Value-Colors-Shared-Yellow-Shade 20': '#c0ad00',
  'Global/Value-Colors-Shared-Yellow-Shade 10': '#e4cc00',
  'Global/Value-Colors-Shared-Yellow-Primary': '#fde300',
  'Global/Value-Colors-Shared-Yellow-Tint 10': '#fde61e',
  'Global/Value-Colors-Shared-Yellow-Tint 20': '#fdea3d',
  'Global/Value-Colors-Shared-Yellow-Tint 30': '#feee66',
  'Global/Value-Colors-Shared-Yellow-Tint 40': '#fef7b2',
  'Global/Value-Colors-Shared-Yellow-Tint 50': '#fffad6',
  'Global/Value-Colors-Shared-Yellow-Tint 60': '#fffef5',
  'Global/Value-Colors-Shared-Gold-Shade 50': '#1f1900',
  'Global/Value-Colors-Shared-Gold-Shade 40': '#3a2f00',
  'Global/Value-Colors-Shared-Gold-Shade 30': '#6c5700',
  'Global/Value-Colors-Shared-Gold-Shade 20': '#937700',
  'Global/Value-Colors-Shared-Gold-Shade 10': '#ae8c00',
  'Global/Value-Colors-Shared-Gold-Primary': '#c19c00',
  'Global/Value-Colors-Shared-Gold-Tint 10': '#c8a718',
  'Global/Value-Colors-Shared-Gold-Tint 20': '#d0b232',
  'Global/Value-Colors-Shared-Gold-Tint 30': '#dac157',
  'Global/Value-Colors-Shared-Gold-Tint 40': '#ecdfa5',
  'Global/Value-Colors-Shared-Gold-Tint 50': '#f5eece',
  'Global/Value-Colors-Shared-Gold-Tint 60': '#fdfbf2',
  'Global/Value-Colors-Shared-Brass-Shade 50': '#181202',
  'Global/Value-Colors-Shared-Brass-Shade 40': '#2e2103',
  'Global/Value-Colors-Shared-Brass-Shade 30': '#553e06',
  'Global/Value-Colors-Shared-Brass-Shade 20': '#745408',
  'Global/Value-Colors-Shared-Brass-Shade 10': '#89640a',
  'Global/Value-Colors-Shared-Brass-Primary': '#986f0b',
  'Global/Value-Colors-Shared-Brass-Tint 10': '#a47d1e',
  'Global/Value-Colors-Shared-Brass-Tint 20': '#b18c34',
  'Global/Value-Colors-Shared-Brass-Tint 30': '#c1a256',
  'Global/Value-Colors-Shared-Brass-Tint 40': '#e0cea2',
  'Global/Value-Colors-Shared-Brass-Tint 50': '#efe4cb',
  'Global/Value-Colors-Shared-Brass-Tint 60': '#fbf8f2',
  'Global/Value-Colors-Shared-Brown-Shade 50': '#170e07',
  'Global/Value-Colors-Shared-Brown-Shade 40': '#2b1a0e',
  'Global/Value-Colors-Shared-Brown-Shade 30': '#50301a',
  'Global/Value-Colors-Shared-Brown-Shade 20': '#6c4123',
  'Global/Value-Colors-Shared-Brown-Shade 10': '#804d29',
  'Global/Value-Colors-Shared-Brown-Primary': '#8e562e',
  'Global/Value-Colors-Shared-Brown-Tint 10': '#9c663f',
  'Global/Value-Colors-Shared-Brown-Tint 20': '#a97652',
  'Global/Value-Colors-Shared-Brown-Tint 30': '#bb8f6f',
  'Global/Value-Colors-Shared-Brown-Tint 40': '#ddc3b0',
  'Global/Value-Colors-Shared-Brown-Tint 50': '#edded3',
  'Global/Value-Colors-Shared-Brown-Tint 60': '#faf7f4',
  'Global/Value-Colors-Shared-Dark brown-Shade 50': '#0c0704',
  'Global/Value-Colors-Shared-Dark brown-Shade 40': '#170c08',
  'Global/Value-Colors-Shared-Dark brown-Shade 30': '#2b1710',
  'Global/Value-Colors-Shared-Dark brown-Shade 20': '#3a1f15',
  'Global/Value-Colors-Shared-Dark brown-Shade 10': '#452519',
  'Global/Value-Colors-Shared-Dark brown-Primary': '#4d291c',
  'Global/Value-Colors-Shared-Dark brown-Tint 10': '#623a2b',
  'Global/Value-Colors-Shared-Dark brown-Tint 20': '#784d3e',
  'Global/Value-Colors-Shared-Dark brown-Tint 30': '#946b5c',
  'Global/Value-Colors-Shared-Dark brown-Tint 40': '#caada3',
  'Global/Value-Colors-Shared-Dark brown-Tint 50': '#e3d2cb',
  'Global/Value-Colors-Shared-Dark brown-Tint 60': '#f8f3f2',
  'Global/Value-Colors-Shared-Lime-Shade 50': '#121b06',
  'Global/Value-Colors-Shared-Lime-Shade 40': '#23330b',
  'Global/Value-Colors-Shared-Lime-Shade 30': '#405f14',
  'Global/Value-Colors-Shared-Lime-Shade 20': '#57811b',
  'Global/Value-Colors-Shared-Lime-Shade 10': '#689920',
  'Global/Value-Colors-Shared-Lime-Primary': '#73aa24',
  'Global/Value-Colors-Shared-Lime-Tint 10': '#81b437',
  'Global/Value-Colors-Shared-Lime-Tint 20': '#90be4c',
  'Global/Value-Colors-Shared-Lime-Tint 30': '#a4cc6c',
  'Global/Value-Colors-Shared-Lime-Tint 40': '#cfe5af',
  'Global/Value-Colors-Shared-Lime-Tint 50': '#e5f1d3',
  'Global/Value-Colors-Shared-Lime-Tint 60': '#f8fcf4',
  'Global/Value-Colors-Shared-Forest-Shade 50': '#0c1501',
  'Global/Value-Colors-Shared-Forest-Shade 40': '#162702',
  'Global/Value-Colors-Shared-Forest-Shade 30': '#294903',
  'Global/Value-Colors-Shared-Forest-Shade 20': '#376304',
  'Global/Value-Colors-Shared-Forest-Shade 10': '#427505',
  'Global/Value-Colors-Shared-Forest-Primary': '#498205',
  'Global/Value-Colors-Shared-Forest-Tint 10': '#599116',
  'Global/Value-Colors-Shared-Forest-Tint 20': '#6ba02b',
  'Global/Value-Colors-Shared-Forest-Tint 30': '#85b44c',
  'Global/Value-Colors-Shared-Forest-Tint 40': '#bdd99b',
  'Global/Value-Colors-Shared-Forest-Tint 50': '#dbebc7',
  'Global/Value-Colors-Shared-Forest-Tint 60': '#f6faf0',
  'Global/Value-Colors-Shared-Seafoam-Shade 50': '#002111',
  'Global/Value-Colors-Shared-Seafoam-Shade 40': '#003d20',
  'Global/Value-Colors-Shared-Seafoam-Shade 30': '#00723b',
  'Global/Value-Colors-Shared-Seafoam-Shade 20': '#009b51',
  'Global/Value-Colors-Shared-Seafoam-Shade 10': '#00b85f',
  'Global/Value-Colors-Shared-Seafoam-Primary': '#00cc6a',
  'Global/Value-Colors-Shared-Seafoam-Tint 10': '#19d279',
  'Global/Value-Colors-Shared-Seafoam-Tint 20': '#34d889',
  'Global/Value-Colors-Shared-Seafoam-Tint 30': '#5ae0a0',
  'Global/Value-Colors-Shared-Seafoam-Tint 40': '#a8f0cd',
  'Global/Value-Colors-Shared-Seafoam-Tint 50': '#cff7e4',
  'Global/Value-Colors-Shared-Seafoam-Tint 60': '#f3fdf8',
  'Global/Value-Colors-Shared-Light green-Shade 50': '#031a02',
  'Global/Value-Colors-Shared-Light green-Shade 40': '#063004',
  'Global/Value-Colors-Shared-Light green-Shade 30': '#0b5a08',
  'Global/Value-Colors-Shared-Light green-Shade 20': '#0e7a0b',
  'Global/Value-Colors-Shared-Light green-Shade 10': '#11910d',
  'Global/Value-Colors-Shared-Light green-Primary': '#13a10e',
  'Global/Value-Colors-Shared-Light green-Tint 10': '#27ac22',
  'Global/Value-Colors-Shared-Light green-Tint 20': '#3db838',
  'Global/Value-Colors-Shared-Light green-Tint 30': '#5ec75a',
  'Global/Value-Colors-Shared-Light green-Tint 40': '#a7e3a5',
  'Global/Value-Colors-Shared-Light green-Tint 50': '#cef0cd',
  'Global/Value-Colors-Shared-Light green-Tint 60': '#f2fbf2',
  'Global/Value-Colors-Shared-Green-Primary': '#0a7f00',
  'Global/Value-Colors-Shared-Green-Tint 30': '#8dc881',
  'Global/Value-Colors-Shared-Green-Tint 60': '#e2f5e0',
  'Global/Value-Colors-Shared-Dark green-Shade 50': '#021102',
  'Global/Value-Colors-Shared-Dark green-Shade 40': '#032003',
  'Global/Value-Colors-Shared-Dark green-Shade 30': '#063b06',
  'Global/Value-Colors-Shared-Dark green-Shade 20': '#085108',
  'Global/Value-Colors-Shared-Dark green-Shade 10': '#0a5f0a',
  'Global/Value-Colors-Shared-Dark green-Primary': '#0b6a0b',
  'Global/Value-Colors-Shared-Dark green-Tint 10': '#1a7c1a',
  'Global/Value-Colors-Shared-Dark green-Tint 20': '#2d8e2d',
  'Global/Value-Colors-Shared-Dark green-Tint 30': '#4da64d',
  'Global/Value-Colors-Shared-Dark green-Tint 40': '#9ad29a',
  'Global/Value-Colors-Shared-Dark green-Tint 50': '#c6e7c6',
  'Global/Value-Colors-Shared-Dark green-Tint 60': '#f0f9f0',
  'Global/Value-Colors-Shared-Light teal-Shade 50': '#001d1f',
  'Global/Value-Colors-Shared-Light teal-Shade 40': '#00373a',
  'Global/Value-Colors-Shared-Light teal-Shade 30': '#00666d',
  'Global/Value-Colors-Shared-Light teal-Shade 20': '#008b94',
  'Global/Value-Colors-Shared-Light teal-Shade 10': '#00a5af',
  'Global/Value-Colors-Shared-Light teal-Primary': '#00b7c3',
  'Global/Value-Colors-Shared-Light teal-Tint 10': '#18bfca',
  'Global/Value-Colors-Shared-Light teal-Tint 20': '#32c8d1',
  'Global/Value-Colors-Shared-Light teal-Tint 30': '#58d3db',
  'Global/Value-Colors-Shared-Light teal-Tint 40': '#a6e9ed',
  'Global/Value-Colors-Shared-Light teal-Tint 50': '#cef3f5',
  'Global/Value-Colors-Shared-Light teal-Tint 60': '#f2fcfd',
  'Global/Value-Colors-Shared-Teal-Shade 50': '#001516',
  'Global/Value-Colors-Shared-Teal-Shade 40': '#012728',
  'Global/Value-Colors-Shared-Teal-Shade 30': '#02494c',
  'Global/Value-Colors-Shared-Teal-Shade 20': '#026467',
  'Global/Value-Colors-Shared-Teal-Shade 10': '#037679',
  'Global/Value-Colors-Shared-Teal-Primary': '#038387',
  'Global/Value-Colors-Shared-Teal-Tint 10': '#159195',
  'Global/Value-Colors-Shared-Teal-Tint 20': '#2aa0a4',
  'Global/Value-Colors-Shared-Teal-Tint 30': '#4cb4b7',
  'Global/Value-Colors-Shared-Teal-Tint 40': '#9bd9db',
  'Global/Value-Colors-Shared-Teal-Tint 50': '#c7ebec',
  'Global/Value-Colors-Shared-Teal-Tint 60': '#f0fafa',
  'Global/Value-Colors-Shared-Dark teal-Shade 50': '#001010',
  'Global/Value-Colors-Shared-Dark teal-Shade 40': '#001f1f',
  'Global/Value-Colors-Shared-Dark teal-Shade 30': '#003939',
  'Global/Value-Colors-Shared-Dark teal-Shade 20': '#004e4e',
  'Global/Value-Colors-Shared-Dark teal-Shade 10': '#005c5c',
  'Global/Value-Colors-Shared-Dark teal-Primary': '#006666',
  'Global/Value-Colors-Shared-Dark teal-Tint 10': '#0e7878',
  'Global/Value-Colors-Shared-Dark teal-Tint 20': '#218b8b',
  'Global/Value-Colors-Shared-Dark teal-Tint 30': '#41a3a3',
  'Global/Value-Colors-Shared-Dark teal-Tint 40': '#92d1d1',
  'Global/Value-Colors-Shared-Dark teal-Tint 50': '#c2e7e7',
  'Global/Value-Colors-Shared-Dark teal-Tint 60': '#eff9f9',
  'Global/Value-Colors-Shared-Cyan-Shade 50': '#00181e',
  'Global/Value-Colors-Shared-Cyan-Shade 40': '#002e38',
  'Global/Value-Colors-Shared-Cyan-Shade 30': '#005669',
  'Global/Value-Colors-Shared-Cyan-Shade 20': '#00748f',
  'Global/Value-Colors-Shared-Cyan-Shade 10': '#008aa9',
  'Global/Value-Colors-Shared-Cyan-Primary': '#0099bc',
  'Global/Value-Colors-Shared-Cyan-Tint 10': '#18a4c4',
  'Global/Value-Colors-Shared-Cyan-Tint 20': '#31afcc',
  'Global/Value-Colors-Shared-Cyan-Tint 30': '#56bfd7',
  'Global/Value-Colors-Shared-Cyan-Tint 40': '#a4deeb',
  'Global/Value-Colors-Shared-Cyan-Tint 50': '#cdedf4',
  'Global/Value-Colors-Shared-Cyan-Tint 60': '#f2fafc',
  'Global/Value-Colors-Shared-Steel-Shade 50': '#000f12',
  'Global/Value-Colors-Shared-Steel-Shade 40': '#001b22',
  'Global/Value-Colors-Shared-Steel-Shade 30': '#00333f',
  'Global/Value-Colors-Shared-Steel-Shade 20': '#004555',
  'Global/Value-Colors-Shared-Steel-Shade 10': '#005265',
  'Global/Value-Colors-Shared-Steel-Primary': '#005b70',
  'Global/Value-Colors-Shared-Steel-Tint 10': '#0f6c81',
  'Global/Value-Colors-Shared-Steel-Tint 20': '#237d92',
  'Global/Value-Colors-Shared-Steel-Tint 30': '#4496a9',
  'Global/Value-Colors-Shared-Steel-Tint 40': '#94c8d4',
  'Global/Value-Colors-Shared-Steel-Tint 50': '#c3e1e8',
  'Global/Value-Colors-Shared-Steel-Tint 60': '#eff7f9',
  'Global/Value-Colors-Shared-Light blue-Shade 50': '#091823',
  'Global/Value-Colors-Shared-Light blue-Shade 40': '#112d42',
  'Global/Value-Colors-Shared-Light blue-Shade 30': '#20547c',
  'Global/Value-Colors-Shared-Light blue-Shade 20': '#2c72a8',
  'Global/Value-Colors-Shared-Light blue-Shade 10': '#3487c7',
  'Global/Value-Colors-Shared-Light blue-Primary': '#3a96dd',
  'Global/Value-Colors-Shared-Light blue-Tint 10': '#4fa1e1',
  'Global/Value-Colors-Shared-Light blue-Tint 20': '#65ade5',
  'Global/Value-Colors-Shared-Light blue-Tint 30': '#83bdeb',
  'Global/Value-Colors-Shared-Light blue-Tint 40': '#bfddf5',
  'Global/Value-Colors-Shared-Light blue-Tint 50': '#dcedfa',
  'Global/Value-Colors-Shared-Light blue-Tint 60': '#f6fafe',
  'Global/Value-Colors-Shared-Blue-Shade 50': '#001322',
  'Global/Value-Colors-Shared-Blue-Shade 40': '#002440',
  'Global/Value-Colors-Shared-Blue-Shade 30': '#004377',
  'Global/Value-Colors-Shared-Blue-Shade 20': '#005ba1',
  'Global/Value-Colors-Shared-Blue-Shade 10': '#006cbf',
  'Global/Value-Colors-Shared-Blue-Primary': '#0078d4',
  'Global/Value-Colors-Shared-Blue-Tint 10': '#1a86d9',
  'Global/Value-Colors-Shared-Blue-Tint 20': '#3595de',
  'Global/Value-Colors-Shared-Blue-Tint 30': '#5caae5',
  'Global/Value-Colors-Shared-Blue-Tint 40': '#a9d3f2',
  'Global/Value-Colors-Shared-Blue-Tint 50': '#d0e7f8',
  'Global/Value-Colors-Shared-Blue-Tint 60': '#f3f9fd',
  'Global/Value-Colors-Shared-Royal blue-Shade 50': '#000c16',
  'Global/Value-Colors-Shared-Royal blue-Shade 40': '#00172a',
  'Global/Value-Colors-Shared-Royal blue-Shade 30': '#002c4e',
  'Global/Value-Colors-Shared-Royal blue-Shade 20': '#003b6a',
  'Global/Value-Colors-Shared-Royal blue-Shade 10': '#00467e',
  'Global/Value-Colors-Shared-Royal blue-Primary': '#004e8c',
  'Global/Value-Colors-Shared-Royal blue-Tint 10': '#125e9a',
  'Global/Value-Colors-Shared-Royal blue-Tint 20': '#286fa8',
  'Global/Value-Colors-Shared-Royal blue-Tint 30': '#4a89ba',
  'Global/Value-Colors-Shared-Royal blue-Tint 40': '#9abfdc',
  'Global/Value-Colors-Shared-Royal blue-Tint 50': '#c7dced',
  'Global/Value-Colors-Shared-Royal blue-Tint 60': '#f0f6fa',
  'Global/Value-Colors-Shared-Dark blue-Shade 50': '#000910',
  'Global/Value-Colors-Shared-Dark blue-Shade 40': '#00111f',
  'Global/Value-Colors-Shared-Dark blue-Shade 30': '#002039',
  'Global/Value-Colors-Shared-Dark blue-Shade 20': '#002b4e',
  'Global/Value-Colors-Shared-Dark blue-Shade 10': '#00335c',
  'Global/Value-Colors-Shared-Dark blue-Primary': '#003966',
  'Global/Value-Colors-Shared-Dark blue-Tint 10': '#0e4a78',
  'Global/Value-Colors-Shared-Dark blue-Tint 20': '#215c8b',
  'Global/Value-Colors-Shared-Dark blue-Tint 30': '#4178a3',
  'Global/Value-Colors-Shared-Dark blue-Tint 40': '#92b5d1',
  'Global/Value-Colors-Shared-Dark blue-Tint 50': '#c2d6e7',
  'Global/Value-Colors-Shared-Dark blue-Tint 60': '#eff4f9',
  'Global/Value-Colors-Shared-Cornflower-Shade 50': '#0d1126',
  'Global/Value-Colors-Shared-Cornflower-Shade 40': '#182047',
  'Global/Value-Colors-Shared-Cornflower-Shade 30': '#2c3c85',
  'Global/Value-Colors-Shared-Cornflower-Shade 20': '#3c51b4',
  'Global/Value-Colors-Shared-Cornflower-Shade 10': '#4760d5',
  'Global/Value-Colors-Shared-Cornflower-Primary': '#4f6bed',
  'Global/Value-Colors-Shared-Cornflower-Tint 10': '#637cef',
  'Global/Value-Colors-Shared-Cornflower-Tint 20': '#778df1',
  'Global/Value-Colors-Shared-Cornflower-Tint 30': '#93a4f4',
  'Global/Value-Colors-Shared-Cornflower-Tint 40': '#c8d1fa',
  'Global/Value-Colors-Shared-Cornflower-Tint 50': '#e1e6fc',
  'Global/Value-Colors-Shared-Cornflower-Tint 60': '#f7f9fe',
  'Global/Value-Colors-Shared-Navy-Shade 50': '#00061d',
  'Global/Value-Colors-Shared-Navy-Shade 40': '#000c36',
  'Global/Value-Colors-Shared-Navy-Shade 30': '#001665',
  'Global/Value-Colors-Shared-Navy-Shade 20': '#001e89',
  'Global/Value-Colors-Shared-Navy-Shade 10': '#0023a2',
  'Global/Value-Colors-Shared-Navy-Primary': '#0027b4',
  'Global/Value-Colors-Shared-Navy-Tint 10': '#173bbd',
  'Global/Value-Colors-Shared-Navy-Tint 20': '#3050c6',
  'Global/Value-Colors-Shared-Navy-Tint 30': '#546fd2',
  'Global/Value-Colors-Shared-Navy-Tint 40': '#a3b2e8',
  'Global/Value-Colors-Shared-Navy-Tint 50': '#ccd5f3',
  'Global/Value-Colors-Shared-Navy-Tint 60': '#f2f4fc',
  'Global/Value-Colors-Shared-Lavender-Shade 50': '#120f25',
  'Global/Value-Colors-Shared-Lavender-Shade 40': '#221d46',
  'Global/Value-Colors-Shared-Lavender-Shade 30': '#3f3682',
  'Global/Value-Colors-Shared-Lavender-Shade 20': '#5649b0',
  'Global/Value-Colors-Shared-Lavender-Shade 10': '#6656d1',
  'Global/Value-Colors-Shared-Lavender-Primary': '#7160e8',
  'Global/Value-Colors-Shared-Lavender-Tint 10': '#8172eb',
  'Global/Value-Colors-Shared-Lavender-Tint 20': '#9184ee',
  'Global/Value-Colors-Shared-Lavender-Tint 30': '#a79cf1',
  'Global/Value-Colors-Shared-Lavender-Tint 40': '#d2ccf8',
  'Global/Value-Colors-Shared-Lavender-Tint 50': '#e7e4fb',
  'Global/Value-Colors-Shared-Lavender-Tint 60': '#f9f8fe',
  'Global/Value-Colors-Shared-Purple-Shade 50': '#0f0717',
  'Global/Value-Colors-Shared-Purple-Shade 40': '#1c0e2b',
  'Global/Value-Colors-Shared-Purple-Shade 30': '#341a51',
  'Global/Value-Colors-Shared-Purple-Shade 20': '#46236e',
  'Global/Value-Colors-Shared-Purple-Shade 10': '#532982',
  'Global/Value-Colors-Shared-Purple-Primary': '#5c2e91',
  'Global/Value-Colors-Shared-Purple-Tint 10': '#6b3f9e',
  'Global/Value-Colors-Shared-Purple-Tint 20': '#7c52ab',
  'Global/Value-Colors-Shared-Purple-Tint 30': '#9470bd',
  'Global/Value-Colors-Shared-Purple-Tint 40': '#c6b1de',
  'Global/Value-Colors-Shared-Purple-Tint 50': '#e0d3ed',
  'Global/Value-Colors-Shared-Purple-Tint 60': '#f7f4fb',
  'Global/Value-Colors-Shared-Dark purple-Shade 50': '#0a0411',
  'Global/Value-Colors-Shared-Dark purple-Shade 40': '#130820',
  'Global/Value-Colors-Shared-Dark purple-Shade 30': '#240f3c',
  'Global/Value-Colors-Shared-Dark purple-Shade 20': '#311552',
  'Global/Value-Colors-Shared-Dark purple-Shade 10': '#3a1861',
  'Global/Value-Colors-Shared-Dark purple-Primary': '#401b6c',
  'Global/Value-Colors-Shared-Dark purple-Tint 10': '#512b7e',
  'Global/Value-Colors-Shared-Dark purple-Tint 20': '#633e8f',
  'Global/Value-Colors-Shared-Dark purple-Tint 30': '#7e5ca7',
  'Global/Value-Colors-Shared-Dark purple-Tint 40': '#b9a3d3',
  'Global/Value-Colors-Shared-Dark purple-Tint 50': '#d8cce7',
  'Global/Value-Colors-Shared-Dark purple-Tint 60': '#f5f2f9',
  'Global/Value-Colors-Shared-Orchid-Shade 50': '#16101d',
  'Global/Value-Colors-Shared-Orchid-Shade 40': '#281e37',
  'Global/Value-Colors-Shared-Orchid-Shade 30': '#4c3867',
  'Global/Value-Colors-Shared-Orchid-Shade 20': '#674c8c',
  'Global/Value-Colors-Shared-Orchid-Shade 10': '#795aa6',
  'Global/Value-Colors-Shared-Orchid-Primary': '#8764b8',
  'Global/Value-Colors-Shared-Orchid-Tint 10': '#9373c0',
  'Global/Value-Colors-Shared-Orchid-Tint 20': '#a083c9',
  'Global/Value-Colors-Shared-Orchid-Tint 30': '#b29ad4',
  'Global/Value-Colors-Shared-Orchid-Tint 40': '#d7caea',
  'Global/Value-Colors-Shared-Orchid-Tint 50': '#e9e2f4',
  'Global/Value-Colors-Shared-Orchid-Tint 60': '#f9f8fc',
  'Global/Value-Colors-Shared-Grape-Shade 50': '#160418',
  'Global/Value-Colors-Shared-Grape-Shade 40': '#29072e',
  'Global/Value-Colors-Shared-Grape-Shade 30': '#4c0d55',
  'Global/Value-Colors-Shared-Grape-Shade 20': '#671174',
  'Global/Value-Colors-Shared-Grape-Shade 10': '#7a1589',
  'Global/Value-Colors-Shared-Grape-Primary': '#881798',
  'Global/Value-Colors-Shared-Grape-Tint 10': '#952aa4',
  'Global/Value-Colors-Shared-Grape-Tint 20': '#a33fb1',
  'Global/Value-Colors-Shared-Grape-Tint 30': '#b55fc1',
  'Global/Value-Colors-Shared-Grape-Tint 40': '#d9a7e0',
  'Global/Value-Colors-Shared-Grape-Tint 50': '#eaceef',
  'Global/Value-Colors-Shared-Grape-Tint 60': '#faf2fb',
  'Global/Value-Colors-Shared-Berry-Shade 50': '#1f091d',
  'Global/Value-Colors-Shared-Berry-Shade 40': '#3a1136',
  'Global/Value-Colors-Shared-Berry-Shade 30': '#6d2064',
  'Global/Value-Colors-Shared-Berry-Shade 20': '#932b88',
  'Global/Value-Colors-Shared-Berry-Shade 10': '#af33a1',
  'Global/Value-Colors-Shared-Berry-Primary': '#c239b3',
  'Global/Value-Colors-Shared-Berry-Tint 10': '#c94cbc',
  'Global/Value-Colors-Shared-Berry-Tint 20': '#d161c4',
  'Global/Value-Colors-Shared-Berry-Tint 30': '#da7ed0',
  'Global/Value-Colors-Shared-Berry-Tint 40': '#edbbe7',
  'Global/Value-Colors-Shared-Berry-Tint 50': '#f5daf2',
  'Global/Value-Colors-Shared-Berry-Tint 60': '#fdf5fc',
  'Global/Value-Colors-Shared-Lilac-Shade 50': '#1c0b1f',
  'Global/Value-Colors-Shared-Lilac-Shade 40': '#35153a',
  'Global/Value-Colors-Shared-Lilac-Shade 30': '#63276d',
  'Global/Value-Colors-Shared-Lilac-Shade 20': '#863593',
  'Global/Value-Colors-Shared-Lilac-Shade 10': '#9f3faf',
  'Global/Value-Colors-Shared-Lilac-Primary': '#b146c2',
  'Global/Value-Colors-Shared-Lilac-Tint 10': '#ba58c9',
  'Global/Value-Colors-Shared-Lilac-Tint 20': '#c36bd1',
  'Global/Value-Colors-Shared-Lilac-Tint 30': '#cf87da',
  'Global/Value-Colors-Shared-Lilac-Tint 40': '#e6bfed',
  'Global/Value-Colors-Shared-Lilac-Tint 50': '#f2dcf5',
  'Global/Value-Colors-Shared-Lilac-Tint 60': '#fcf6fd',
  'Global/Value-Colors-Shared-Pink-Shade 50': '#24091b',
  'Global/Value-Colors-Shared-Pink-Shade 40': '#441232',
  'Global/Value-Colors-Shared-Pink-Shade 30': '#80215d',
  'Global/Value-Colors-Shared-Pink-Shade 20': '#ad2d7e',
  'Global/Value-Colors-Shared-Pink-Shade 10': '#cd3595',
  'Global/Value-Colors-Shared-Pink-Primary': '#e43ba6',
  'Global/Value-Colors-Shared-Pink-Tint 10': '#e750b0',
  'Global/Value-Colors-Shared-Pink-Tint 20': '#ea66ba',
  'Global/Value-Colors-Shared-Pink-Tint 30': '#ef85c8',
  'Global/Value-Colors-Shared-Pink-Tint 40': '#f7c0e3',
  'Global/Value-Colors-Shared-Pink-Tint 50': '#fbddf0',
  'Global/Value-Colors-Shared-Pink-Tint 60': '#fef6fb',
  'Global/Value-Colors-Shared-Hot pink-Shade 50': '#240016',
  'Global/Value-Colors-Shared-Hot pink-Shade 40': '#44002a',
  'Global/Value-Colors-Shared-Hot pink-Shade 30': '#7f004e',
  'Global/Value-Colors-Shared-Hot pink-Shade 20': '#ad006a',
  'Global/Value-Colors-Shared-Hot pink-Shade 10': '#cc007e',
  'Global/Value-Colors-Shared-Hot pink-Primary': '#e3008c',
  'Global/Value-Colors-Shared-Hot pink-Tint 10': '#e61c99',
  'Global/Value-Colors-Shared-Hot pink-Tint 20': '#ea38a6',
  'Global/Value-Colors-Shared-Hot pink-Tint 30': '#ee5fb7',
  'Global/Value-Colors-Shared-Hot pink-Tint 40': '#f7adda',
  'Global/Value-Colors-Shared-Hot pink-Tint 50': '#fbd2eb',
  'Global/Value-Colors-Shared-Hot pink-Tint 60': '#fef4fa',
  'Global/Value-Colors-Shared-Magenta-Shade 50': '#1f0013',
  'Global/Value-Colors-Shared-Magenta-Shade 40': '#390024',
  'Global/Value-Colors-Shared-Magenta-Shade 30': '#6b0043',
  'Global/Value-Colors-Shared-Magenta-Shade 20': '#91005a',
  'Global/Value-Colors-Shared-Magenta-Shade 10': '#ac006b',
  'Global/Value-Colors-Shared-Magenta-Primary': '#bf0077',
  'Global/Value-Colors-Shared-Magenta-Tint 10': '#c71885',
  'Global/Value-Colors-Shared-Magenta-Tint 20': '#ce3293',
  'Global/Value-Colors-Shared-Magenta-Tint 30': '#d957a8',
  'Global/Value-Colors-Shared-Magenta-Tint 40': '#eca5d1',
  'Global/Value-Colors-Shared-Magenta-Tint 50': '#f5cee6',
  'Global/Value-Colors-Shared-Magenta-Tint 60': '#fcf2f9',
  'Global/Value-Colors-Shared-Plum-Shade 50': '#13000c',
  'Global/Value-Colors-Shared-Plum-Shade 40': '#240017',
  'Global/Value-Colors-Shared-Plum-Shade 30': '#43002b',
  'Global/Value-Colors-Shared-Plum-Shade 20': '#5a003b',
  'Global/Value-Colors-Shared-Plum-Shade 10': '#6b0045',
  'Global/Value-Colors-Shared-Plum-Primary': '#77004d',
  'Global/Value-Colors-Shared-Plum-Tint 10': '#87105d',
  'Global/Value-Colors-Shared-Plum-Tint 20': '#98246f',
  'Global/Value-Colors-Shared-Plum-Tint 30': '#ad4589',
  'Global/Value-Colors-Shared-Plum-Tint 40': '#d696c0',
  'Global/Value-Colors-Shared-Plum-Tint 50': '#e9c4dc',
  'Global/Value-Colors-Shared-Plum-Tint 60': '#faf0f6',
  'Global/Value-Colors-Shared-Beige-Shade 50': '#141313',
  'Global/Value-Colors-Shared-Beige-Shade 40': '#252323',
  'Global/Value-Colors-Shared-Beige-Shade 30': '#444241',
  'Global/Value-Colors-Shared-Beige-Shade 20': '#5d5958',
  'Global/Value-Colors-Shared-Beige-Shade 10': '#6e6968',
  'Global/Value-Colors-Shared-Beige-Primary': '#7a7574',
  'Global/Value-Colors-Shared-Beige-Tint 10': '#8a8584',
  'Global/Value-Colors-Shared-Beige-Tint 20': '#9a9594',
  'Global/Value-Colors-Shared-Beige-Tint 30': '#afabaa',
  'Global/Value-Colors-Shared-Beige-Tint 40': '#d7d4d4',
  'Global/Value-Colors-Shared-Beige-Tint 50': '#eae8e8',
  'Global/Value-Colors-Shared-Beige-Tint 60': '#faf9f9',
  'Global/Value-Colors-Shared-Mink-Shade 50': '#0f0e0e',
  'Global/Value-Colors-Shared-Mink-Shade 40': '#1c1b1a',
  'Global/Value-Colors-Shared-Mink-Shade 30': '#343231',
  'Global/Value-Colors-Shared-Mink-Shade 20': '#474443',
  'Global/Value-Colors-Shared-Mink-Shade 10': '#54514f',
  'Global/Value-Colors-Shared-Mink-Primary': '#5d5a58',
  'Global/Value-Colors-Shared-Mink-Tint 10': '#706d6b',
  'Global/Value-Colors-Shared-Mink-Tint 20': '#84817e',
  'Global/Value-Colors-Shared-Mink-Tint 30': '#9e9b99',
  'Global/Value-Colors-Shared-Mink-Tint 40': '#cecccb',
  'Global/Value-Colors-Shared-Mink-Tint 50': '#e5e4e3',
  'Global/Value-Colors-Shared-Mink-Tint 60': '#f8f8f8',
  'Global/Value-Colors-Shared-Silver-Shade 50': '#151818',
  'Global/Value-Colors-Shared-Silver-Shade 40': '#282d2e',
  'Global/Value-Colors-Shared-Silver-Shade 30': '#4a5356',
  'Global/Value-Colors-Shared-Silver-Shade 20': '#657174',
  'Global/Value-Colors-Shared-Silver-Shade 10': '#78868a',
  'Global/Value-Colors-Shared-Silver-Primary': '#859599',
  'Global/Value-Colors-Shared-Silver-Tint 10': '#92a1a5',
  'Global/Value-Colors-Shared-Silver-Tint 20': '#a0aeb1',
  'Global/Value-Colors-Shared-Silver-Tint 30': '#b3bfc2',
  'Global/Value-Colors-Shared-Silver-Tint 40': '#d8dfe0',
  'Global/Value-Colors-Shared-Silver-Tint 50': '#eaeeef',
  'Global/Value-Colors-Shared-Silver-Tint 60': '#fafbfb',
  'Global/Value-Colors-Shared-Platinum-Shade 50': '#111314',
  'Global/Value-Colors-Shared-Platinum-Shade 40': '#1f2426',
  'Global/Value-Colors-Shared-Platinum-Shade 30': '#3b4447',
  'Global/Value-Colors-Shared-Platinum-Shade 20': '#505c60',
  'Global/Value-Colors-Shared-Platinum-Shade 10': '#5f6d71',
  'Global/Value-Colors-Shared-Platinum-Primary': '#69797e',
  'Global/Value-Colors-Shared-Platinum-Tint 10': '#79898d',
  'Global/Value-Colors-Shared-Platinum-Tint 20': '#89989d',
  'Global/Value-Colors-Shared-Platinum-Tint 30': '#a0adb2',
  'Global/Value-Colors-Shared-Platinum-Tint 40': '#cdd6d8',
  'Global/Value-Colors-Shared-Platinum-Tint 50': '#e4e9ea',
  'Global/Value-Colors-Shared-Platinum-Tint 60': '#f8f9fa',
  'Global/Value-Colors-Shared-Anchor-Shade 50': '#090a0b',
  'Global/Value-Colors-Shared-Anchor-Shade 40': '#111315',
  'Global/Value-Colors-Shared-Anchor-Shade 30': '#202427',
  'Global/Value-Colors-Shared-Anchor-Shade 20': '#2b3135',
  'Global/Value-Colors-Shared-Anchor-Shade 10': '#333a3f',
  'Global/Value-Colors-Shared-Anchor-Primary': '#394146',
  'Global/Value-Colors-Shared-Anchor-Tint 10': '#4d565c',
  'Global/Value-Colors-Shared-Anchor-Tint 20': '#626c72',
  'Global/Value-Colors-Shared-Anchor-Tint 30': '#808a90',
  'Global/Value-Colors-Shared-Anchor-Tint 40': '#bcc3c7',
  'Global/Value-Colors-Shared-Anchor-Tint 50': '#dbdfe1',
  'Global/Value-Colors-Shared-Anchor-Tint 60': '#f6f7f8',
  'Global/Value-Colors-Shared-Charcoal-Shade 50': '#090909',
  'Global/Value-Colors-Shared-Charcoal-Shade 40': '#111111',
  'Global/Value-Colors-Shared-Charcoal-Shade 30': '#202020',
  'Global/Value-Colors-Shared-Charcoal-Shade 20': '#2b2b2b',
  'Global/Value-Colors-Shared-Charcoal-Shade 10': '#333333',
  'Global/Value-Colors-Shared-Charcoal-Primary': '#393939',
  'Global/Value-Colors-Shared-Charcoal-Tint 10': '#515151',
  'Global/Value-Colors-Shared-Charcoal-Tint 20': '#686868',
  'Global/Value-Colors-Shared-Charcoal-Tint 30': '#888888',
  'Global/Value-Colors-Shared-Charcoal-Tint 40': '#c4c4c4',
  'Global/Value-Colors-Shared-Charcoal-Tint 50': '#dfdfdf',
  'Global/Value-Colors-Shared-Charcoal-Tint 60': '#f7f7f7',
  'Global/Value-Colors-Shared-Information-Primary': '#007e73',
  'Global/Value-Colors-Shared-Information-Tint 30': '#8ad0ca',
  'Global/Value-Colors-Shared-Information-Tint 60': '#e8f8f7',
  'Global/Value-Colors-Shared-Information-Tint 40': '#abe6e1',
  'Global/Value-Colors-Shared-Information-Tint 50': '#caedea',
  'Global/Value-Colors-Shared-Information-Tint 20': '#59b9b1',
  'Global/Value-Colors-Shared-Information-Tint 10': '#029b8d',
  'Global/Value-Colors-Shared-Information-Shade 10': '#00554e',
  'Global/Value-Colors-Shared-Information-Shade 20': '#003e39',
  'Global/Value-Colors-Alpha-White-0': '#ffffff00',
  'Global/Value-Colors-Alpha-White-5': '#ffffff0d',
  'Global/Value-Colors-Alpha-White-10': '#ffffff1a',
  'Global/Value-Colors-Alpha-White-20': '#ffffff33',
  'Global/Value-Colors-Alpha-White-30': '#ffffff4d',
  'Global/Value-Colors-Alpha-White-40': '#ffffff66',
  'Global/Value-Colors-Alpha-White-50': '#ffffff80',
  'Global/Value-Colors-Alpha-White-60': '#ffffff99',
  'Global/Value-Colors-Alpha-White-70': '#ffffffb3',
  'Global/Value-Colors-Alpha-White-80': '#ffffffcc',
  'Global/Value-Colors-Alpha-White-90': '#ffffffe6',
  'Global/Value-Colors-Alpha-Black-0': '#00000000',
  'Global/Value-Colors-Alpha-Black-5': '#0000000d',
  'Global/Value-Colors-Alpha-Black-10': '#0000001a',
  'Global/Value-Colors-Alpha-Black-20': '#00000033',
  'Global/Value-Colors-Alpha-Black-30': '#0000004d',
  'Global/Value-Colors-Alpha-Black-40': '#00000066',
  'Global/Value-Colors-Alpha-Black-50': '#00000080',
  'Global/Value-Colors-Alpha-Black-60': '#00000099',
  'Global/Value-Colors-Alpha-Black-70': '#000000b3',
  'Global/Value-Colors-Alpha-Black-80': '#000000cc',
  'Global/Value-Colors-Alpha-Black-90': '#000000e6',
  'Global/Value-Colors-Alpha-Brand-10-5': '#0f1a380d',
  'Global/Value-Colors-Alpha-Brand-10-10': '#0f1a381a',
  'Global/Value-Colors-Alpha-Brand-10-20': '#0f1a3833',
  'Global/Value-Colors-Alpha-Brand-10-30': '#0f1a384d',
  'Global/Value-Colors-Alpha-Brand-10-40': '#0f1a3866',
  'Global/Value-Colors-Alpha-Brand-10-50': '#0f1a3880',
  'Global/Value-Colors-Alpha-Brand-10-60': '#0f1a3899',
  'Global/Value-Colors-Alpha-Brand-10-70': '#0f1a38b3',
  'Global/Value-Colors-Alpha-Brand-10-80': '#0f1a38cc',
  'Global/Value-Colors-Alpha-Brand-10-90': '#0f1a38e6',
  'Global/Value-Colors-Data viz-Core-Blue': '{brand-60}',
  'Global/Value-Colors-Data viz-Core-Gray': '#a2aeb5',
  'Global/Value-Colors-Data viz-Core-Red': '#b94431',
  'Global/Value-Colors-Data viz-Core-Teal': '#05a3b1',
  'Global/Value-Colors-Data viz-Core-Ocean': '#0b3873',
  'Global/Value-Colors-Data viz-Core-Green': '#529c74',
  'Global/Value-Colors-Data viz-Core-Yellow': '#df9f37',
  'Global/Value-Colors-Data viz-Semantic-Light bkgd-Positive': '#529c74',
  'Global/Value-Colors-Data viz-Semantic-Light bkgd-Notice': '#df9f37',
  'Global/Value-Colors-Data viz-Semantic-Light bkgd-Negative': '#b94431',
  'Global/Value-Colors-Data viz-Semantic-Dark bkgd-Positive': '#37bb65',
  'Global/Value-Colors-Data viz-Semantic-Dark bkgd-Negative': '#cc2e48',
  'Global/Value-Colors-Data viz-Semantic-Dark bkgd-Notice': '#df9f37',
  'Global/Value-Colors-Data viz-Sequential-Blue400': '#133a77',
  'Global/Value-Colors-Data viz-Sequential-Blue300': '{brand-60}',
  'Global/Value-Colors-Data viz-Sequential-Blue200': '#6f94ce',
  'Global/Value-Colors-Data viz-Sequential-Blue100': '#9ebbe6',
  'Global/Value-Colors-Data viz-Sequential-Gray400': '#36383a',
  'Global/Value-Colors-Data viz-Sequential-Gray300': '#646b6f',
  'Global/Value-Colors-Data viz-Sequential-Gray200': '#a2aeb5',
  'Global/Value-Colors-Data viz-Sequential-Gray100': '#d1dbe2',
  'Global/Value-Colors-Data viz-Sequential-Red400': '#460f05',
  'Global/Value-Colors-Data viz-Sequential-Red300': '#8c2e20',
  'Global/Value-Colors-Data viz-Sequential-Red200': '#b94431',
  'Global/Value-Colors-Data viz-Sequential-Red100': '#cf8a7e',
  'Global/Value-Colors-Data viz-Sequential-Teal400': '#063f44',
  'Global/Value-Colors-Data viz-Sequential-Teal300': '#136a73',
  'Global/Value-Colors-Data viz-Sequential-Teal200': '#05a3b1',
  'Global/Value-Colors-Data viz-Sequential-Teal100': '#80d0d7',
  'Global/Value-Colors-Data viz-Sequential-Ocean400': '#071e39',
  'Global/Value-Colors-Data viz-Sequential-Ocean300': '#0b3873',
  'Global/Value-Colors-Data viz-Sequential-Ocean200': '#5a74cb',
  'Global/Value-Colors-Data viz-Sequential-Ocean100': '#9ab2ff',
  'Global/Value-Colors-Data viz-Sequential-Green400': '#08362a',
  'Global/Value-Colors-Data viz-Sequential-Green300': '#1d6953',
  'Global/Value-Colors-Data viz-Sequential-Green200': '#529c74',
  'Global/Value-Colors-Data viz-Sequential-Green100': '#87c3a9',
  'Global/Value-Colors-Data viz-Sequential-Yellow400': '#563b10',
  'Global/Value-Colors-Data viz-Sequential-Yellow300': '#a06a14',
  'Global/Value-Colors-Data viz-Sequential-Yellow200': '#df9f37',
  'Global/Value-Colors-Data viz-Sequential-Yellow100': '#ffd592',
  'Global/Value-Colors-Brand-Brand-10': '#0f1a38',
  'Global/Value-Colors-Brand-Brand-20': '#041e47',
  'Global/Value-Colors-Brand-Brand-30': '#052c69',
  'Global/Value-Colors-Brand-Brand-40': '#0c3069',
  'Global/Value-Colors-Brand-Brand-50': '#19458b',
  'Global/Value-Colors-Brand-Brand-60': '#295cad',
  'Global/Value-Colors-Brand-Brand-70': '#3e76cf',
  'Global/Value-Colors-Brand-Brand-80': '#5692f1',
  'Global/Value-Colors-Brand-Brand-90': '#80b1ff',
  'Global/Value-Colors-Brand-Brand-100': '#a5c8ff',
  'Global/Value-Colors-Brand-Brand-110': '#a5c8ff',
  'Global/Value-Colors-Brand-Brand-120': '#eef5ff',
  'Global/Value-Colors-Brand-Brand-130': '#f5f9ff',
  'Brand/Brand 1-Brand-10': '#0f1a38',
  'Brand/Brand 1-Brand-20': '#041e47',
  'Brand/Brand 1-Brand-30': '#052c69',
  'Brand/Brand 1-Brand-40': '#0c3069',
  'Brand/Brand 1-Brand-50': '#19458b',
  'Brand/Brand 1-Brand-60': '#295cad',
  'Brand/Brand 1-Brand-70': '#3e76cf',
  'Brand/Brand 1-Brand-80': '#5692f1',
  'Brand/Brand 1-Brand-90': '#80b1ff',
  'Brand/Brand 1-Brand-100': '#a5c8ff',
  'Brand/Brand 1-Brand-110': '#cadeff',
  'Brand/Brand 1-Brand-120': '#eef5ff',
  'Brand/Brand 1-Brand-130': '#f5f9ff',
  'Arrow position/Above start-Above-start': 'true',
  'Arrow position/Above start-Above-middle': 'false',
  'Arrow position/Above start-Above-end': 'false',
  'Arrow position/Above start-Before-top': 'false',
  'Arrow position/Above start-Before-center': 'false',
  'Arrow position/Above start-Before-bottom': 'false',
  'Arrow position/Above start-After-top': 'false',
  'Arrow position/Above start-After-center': 'false',
  'Arrow position/Above start-After-bottom': 'false',
  'Arrow position/Above start-Bottom-start': 'false',
  'Arrow position/Above start-Bottom-center': 'false',
  'Arrow position/Above start-Bottom-end': 'false',
  'Arrow position/Above middle-Above-start': 'false',
  'Arrow position/Above middle-Above-middle': 'true',
  'Arrow position/Above middle-Above-end': 'false',
  'Arrow position/Above middle-Before-top': 'false',
  'Arrow position/Above middle-Before-center': 'false',
  'Arrow position/Above middle-Before-bottom': 'false',
  'Arrow position/Above middle-After-top': 'false',
  'Arrow position/Above middle-After-center': 'false',
  'Arrow position/Above middle-After-bottom': 'false',
  'Arrow position/Above middle-Bottom-start': 'false',
  'Arrow position/Above middle-Bottom-center': 'false',
  'Arrow position/Above middle-Bottom-end': 'false',
  'Arrow position/Above end-Above-start': 'false',
  'Arrow position/Above end-Above-middle': 'false',
  'Arrow position/Above end-Above-end': 'true',
  'Arrow position/Above end-Before-top': 'false',
  'Arrow position/Above end-Before-center': 'false',
  'Arrow position/Above end-Before-bottom': 'false',
  'Arrow position/Above end-After-top': 'false',
  'Arrow position/Above end-After-center': 'false',
  'Arrow position/Above end-After-bottom': 'false',
  'Arrow position/Above end-Bottom-start': 'false',
  'Arrow position/Above end-Bottom-center': 'false',
  'Arrow position/Above end-Bottom-end': 'false',
  'Arrow position/Before top-Above-start': 'false',
  'Arrow position/Before top-Above-middle': 'false',
  'Arrow position/Before top-Above-end': 'false',
  'Arrow position/Before top-Before-top': 'true',
  'Arrow position/Before top-Before-center': 'false',
  'Arrow position/Before top-Before-bottom': 'false',
  'Arrow position/Before top-After-top': 'false',
  'Arrow position/Before top-After-center': 'false',
  'Arrow position/Before top-After-bottom': 'false',
  'Arrow position/Before top-Bottom-start': 'false',
  'Arrow position/Before top-Bottom-center': 'false',
  'Arrow position/Before top-Bottom-end': 'false',
  'Arrow position/Before middle-Above-start': 'false',
  'Arrow position/Before middle-Above-middle': 'false',
  'Arrow position/Before middle-Above-end': 'false',
  'Arrow position/Before middle-Before-top': 'false',
  'Arrow position/Before middle-Before-center': 'true',
  'Arrow position/Before middle-Before-bottom': 'false',
  'Arrow position/Before middle-After-top': 'false',
  'Arrow position/Before middle-After-center': 'false',
  'Arrow position/Before middle-After-bottom': 'false',
  'Arrow position/Before middle-Bottom-start': 'false',
  'Arrow position/Before middle-Bottom-center': 'false',
  'Arrow position/Before middle-Bottom-end': 'false',
  'Arrow position/Before bottom-Above-start': 'false',
  'Arrow position/Before bottom-Above-middle': 'false',
  'Arrow position/Before bottom-Above-end': 'false',
  'Arrow position/Before bottom-Before-top': 'false',
  'Arrow position/Before bottom-Before-center': 'false',
  'Arrow position/Before bottom-Before-bottom': 'true',
  'Arrow position/Before bottom-After-top': 'false',
  'Arrow position/Before bottom-After-center': 'false',
  'Arrow position/Before bottom-After-bottom': 'false',
  'Arrow position/Before bottom-Bottom-start': 'false',
  'Arrow position/Before bottom-Bottom-center': 'false',
  'Arrow position/Before bottom-Bottom-end': 'false',
  'Arrow position/After top-Above-start': 'false',
  'Arrow position/After top-Above-middle': 'false',
  'Arrow position/After top-Above-end': 'false',
  'Arrow position/After top-Before-top': 'false',
  'Arrow position/After top-Before-center': 'false',
  'Arrow position/After top-Before-bottom': 'false',
  'Arrow position/After top-After-top': 'true',
  'Arrow position/After top-After-center': 'false',
  'Arrow position/After top-After-bottom': 'false',
  'Arrow position/After top-Bottom-start': 'false',
  'Arrow position/After top-Bottom-center': 'false',
  'Arrow position/After top-Bottom-end': 'false',
  'Arrow position/After middle-Above-start': 'false',
  'Arrow position/After middle-Above-middle': 'false',
  'Arrow position/After middle-Above-end': 'false',
  'Arrow position/After middle-Before-top': 'false',
  'Arrow position/After middle-Before-center': 'false',
  'Arrow position/After middle-Before-bottom': 'false',
  'Arrow position/After middle-After-top': 'false',
  'Arrow position/After middle-After-center': 'true',
  'Arrow position/After middle-After-bottom': 'false',
  'Arrow position/After middle-Bottom-start': 'false',
  'Arrow position/After middle-Bottom-center': 'false',
  'Arrow position/After middle-Bottom-end': 'false',
  'Arrow position/After bottom-Above-start': 'false',
  'Arrow position/After bottom-Above-middle': 'false',
  'Arrow position/After bottom-Above-end': 'false',
  'Arrow position/After bottom-Before-top': 'false',
  'Arrow position/After bottom-Before-center': 'false',
  'Arrow position/After bottom-Before-bottom': 'false',
  'Arrow position/After bottom-After-top': 'false',
  'Arrow position/After bottom-After-center': 'false',
  'Arrow position/After bottom-After-bottom': 'true',
  'Arrow position/After bottom-Bottom-start': 'false',
  'Arrow position/After bottom-Bottom-center': 'false',
  'Arrow position/After bottom-Bottom-end': 'false',
  'Arrow position/Bottom start-Above-start': 'false',
  'Arrow position/Bottom start-Above-middle': 'false',
  'Arrow position/Bottom start-Above-end': 'false',
  'Arrow position/Bottom start-Before-top': 'false',
  'Arrow position/Bottom start-Before-center': 'false',
  'Arrow position/Bottom start-Before-bottom': 'false',
  'Arrow position/Bottom start-After-top': 'false',
  'Arrow position/Bottom start-After-center': 'false',
  'Arrow position/Bottom start-After-bottom': 'false',
  'Arrow position/Bottom start-Bottom-start': 'true',
  'Arrow position/Bottom start-Bottom-center': 'false',
  'Arrow position/Bottom start-Bottom-end': 'false',
  'Arrow position/Bottom middle-Above-start': 'false',
  'Arrow position/Bottom middle-Above-middle': 'false',
  'Arrow position/Bottom middle-Above-end': 'false',
  'Arrow position/Bottom middle-Before-top': 'false',
  'Arrow position/Bottom middle-Before-center': 'false',
  'Arrow position/Bottom middle-Before-bottom': 'false',
  'Arrow position/Bottom middle-After-top': 'false',
  'Arrow position/Bottom middle-After-center': 'false',
  'Arrow position/Bottom middle-After-bottom': 'false',
  'Arrow position/Bottom middle-Bottom-start': 'false',
  'Arrow position/Bottom middle-Bottom-center': 'true',
  'Arrow position/Bottom middle-Bottom-end': 'false',
  'Arrow position/Bottom end-Above-start': 'false',
  'Arrow position/Bottom end-Above-middle': 'false',
  'Arrow position/Bottom end-Above-end': 'false',
  'Arrow position/Bottom end-Before-top': 'false',
  'Arrow position/Bottom end-Before-center': 'false',
  'Arrow position/Bottom end-Before-bottom': 'false',
  'Arrow position/Bottom end-After-top': 'false',
  'Arrow position/Bottom end-After-center': 'false',
  'Arrow position/Bottom end-After-bottom': 'false',
  'Arrow position/Bottom end-Bottom-start': 'false',
  'Arrow position/Bottom end-Bottom-center': 'false',
  'Arrow position/Bottom end-Bottom-end': 'true',
  'Arrow position/None-Above-start': 'false',
  'Arrow position/None-Above-middle': 'false',
  'Arrow position/None-Above-end': 'false',
  'Arrow position/None-Before-top': 'false',
  'Arrow position/None-Before-center': 'false',
  'Arrow position/None-Before-bottom': 'false',
  'Arrow position/None-After-top': 'false',
  'Arrow position/None-After-center': 'false',
  'Arrow position/None-After-bottom': 'false',
  'Arrow position/None-Bottom-start': 'false',
  'Arrow position/None-Bottom-center': 'false',
  'Arrow position/None-Bottom-end': 'false',
  'Typography/Base-fontFamily-Base': 'Segoe UI',
  'Typography/Base-fontWeight-Regular': 'Regular',
  'Typography/Base-fontWeight-Semibold': 'Semibold',
  'Typography/Base-fontWeight-Bold': 'Bold',
  'Typography/Base-fontWeight-Semilight': 'Semilight',
  'Typography/Base-fontWeight-Light': 'Light',
  'Popover size/Medium-popover-padding-vertical': '{spacingVertical.LNudge}',
  'Popover size/Medium-popover-padding-horizontal': '{spacingHorizontal.LNudge}',
  'Popover size/Small-popover-padding-vertical': '{spacingVertical.M}',
  'Popover size/Small-popover-padding-horizontal': '{spacingHorizontal.M}',
  'Popover size/Large-popover-padding-vertical': '{spacingVertical.XL}',
  'Popover size/Large-popover-padding-horizontal': '{spacingHorizontal.XL}',
  'Card padding/Medium-card-horizontal': '{spacingHorizontal.M}',
  'Card padding/Medium-card-vertical': '{spacingVertical.M}',
  'Card padding/Medium-card-gap': '{spacingHorizontal.MNudge}',
  'Card padding/Medium-card-corner-radius': '{borderRadius.Medium}',
  'Card padding/Small-card-horizontal': '{spacingHorizontal.S}',
  'Card padding/Small-card-vertical': '{spacingVertical.MNudge}',
  'Card padding/Small-card-gap': '{spacingHorizontal.MNudge}',
  'Card padding/Small-card-corner-radius': '{borderRadius.Medium}',
  'Card padding/Large-card-horizontal': '{spacingHorizontal.L}',
  'Card padding/Large-card-vertical': '{spacingVertical.L}',
  'Card padding/Large-card-gap': '{spacingHorizontal.M}',
  'Card padding/Large-card-corner-radius': '{borderRadius.Medium}',
  'Button shape/Rounded (Default)-button-corner-radius': '{borderRadius.Small}',
  'Button shape/Rounded (Default)-button-image-corner-radius': '{borderRadius.Small}',
  'Badge shape/Circular-badge-corner-radius': '{borderRadius.Circular}',
  'Theme/Light/Theme/Light-Neutral-Background-1-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Neutral-Background-1-Hover': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/Light-Neutral-Background-1-Pressed': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Background-1-Selected': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/Light-Neutral-Background-2-Rest': '#f5f4f2',
  'Theme/Light/Theme/Light-Neutral-Background-3-Rest': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Background-3-Hover': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/Light-Neutral-Background-3-Pressed': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/Light-Neutral-Background-4-Rest': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/Light-Neutral-Background-4-Hover': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Background-4-Pressed': '{colors.neutral.grey-60}',
  'Theme/Light/Theme/Light-Neutral-Background-5-Rest': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/Light-Neutral-Background-6-Rest': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/Light-Neutral-Background-Inverted-Rest': '{brand-10}',
  'Theme/Light/Theme/Light-Neutral-Background-Inverted-Disabled-Rest': '{colors.alpha.white.10}',
  'Theme/Light/Theme/Light-Neutral-Background-Alpha-1-Rest': '{colors.alpha.white.50}',
  'Theme/Light/Theme/Light-Neutral-Background-Alpha-2-Rest': '{colors.alpha.white.80}',
  'Theme/Light/Theme/Light-Neutral-Background-Static-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Rest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Hover': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Pressed': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Selected': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Hover': '{colors.alpha.white.70}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Pressed': '{colors.alpha.white.50}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Selected': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Rest': '{colors.alpha.black.0}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Hover': '{colors.alpha.black.10}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Pressed': '{colors.alpha.black.30}',
  'Theme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Selected': '{colors.alpha.black.20}',
  'Theme/Light/Theme/Light-Neutral-Background-Transparent-Rest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Background-Transparent-Hover': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Background-Transparent-Pressed': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Background-Transparent-Selected': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Background-Disabled-Rest': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/Light-Neutral-Background-Stencil-1-Rest': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Background-Stencil-2-Rest': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/Light-Neutral-Background-Overlay-Rest': '{colors.alpha.black.40}',
  'Theme/Light/Theme/Light-Neutral-Background-Overlay-Scrollbar-Rest': '{colors.alpha.black.50}',
  'Theme/Light/Theme/Light-Neutral-Foreground-1-Rest primary text': '{brand-10}',
  'Theme/Light/Theme/Light-Neutral-Foreground-1-Hover': '{brand-30}',
  'Theme/Light/Theme/Light-Neutral-Foreground-1-Pressed': '{brand-30}',
  'Theme/Light/Theme/Light-Neutral-Foreground-1-Selected': '{brand-30}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Rest secondary text': '{colors.neutral.grey-12}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Hover': '{colors.neutral.grey-6}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Pressed': '{colors.neutral.grey-6}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Selected': '{colors.neutral.grey-6}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Brand-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Brand-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Brand-Selected': '{brand-30}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Brand-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Link-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Link-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Link-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Neutral-Foreground-2-Link-Selected': '{brand-30}',
  'Theme/Light/Theme/Light-Neutral-Foreground-4-Rest': '{colors.neutral.grey-30}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Disabled-2-Rest': '{colors.neutral.grey-60}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Disabled-Rest': '{colors.neutral.grey-50}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Static-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Hover': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Pressed': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Selected': '{colors.neutral.grey-60}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-2-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Disabled-Rest': '{colors.alpha.white.40}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Hover': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Pressed': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Selected': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Foreground-On Brand-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Neutral-Stroke-1-Rest': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Stroke-1-Hover': '{colors.neutral.grey-60}',
  'Theme/Light/Theme/Light-Neutral-Stroke-1-Pressed': '{colors.neutral.grey-50}',
  'Theme/Light/Theme/Light-Neutral-Stroke-1-Selected': '{colors.neutral.grey-40}',
  'Theme/Light/Theme/Light-Neutral-Stroke-2-Rest': '#ffffff',
  'Theme/Light/Theme/Light-Neutral-Stroke-3-Rest': '{colors.neutral.grey-50}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Alpha-1-Rest': '{colors.alpha.black.5}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Alpha-2-Rest': '{colors.alpha.white.20}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Subtle-Rest': '#f5f4f2',
  'Theme/Light/Theme/Light-Neutral-Stroke-on Brand-1-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Neutral-Stroke-on Brand-2-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Accessible-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Accessible-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Accessible-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Accessible-Selected': '{brand-30}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Focus-1-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Focus-2-Rest': '#ffffff',
  'Theme/Light/Theme/Light-Neutral-Stroke-Transparent-Interactive-Rest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Transparent-Disabled-Rest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Transparent-Rest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Disabled-Rest': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Neutral-Stroke-Disabled-Inverted-Rest': '{colors.alpha.white.40}',
  'Theme/Light/Theme/Light-Brand-Background-1-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Background-1-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Brand-Background-1-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Brand-Background-1-Selected': '{brand-30}',
  'Theme/Light/Theme/Light-Brand-Background-2-Rest': '{brand-10}',
  'Theme/Light/Theme/Light-Brand-Background-2-Hover': '{brand-110}',
  'Theme/Light/Theme/Light-Brand-Background-2-Pressed': '{brand-100}',
  'Theme/Light/Theme/Light-Brand-Background-3-Rest': '{brand-120}',
  'Theme/Light/Theme/Light-Brand-Background-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Brand-Background-Inverted-Hover': '{brand-120}',
  'Theme/Light/Theme/Light-Brand-Background-Inverted-Pressed': '{brand-130}',
  'Theme/Light/Theme/Light-Brand-Background-Inverted-Selected': '{brand-100}',
  'Theme/Light/Theme/Light-Brand-Background-Static-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Background-Compound-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Background-Compound-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Brand-Background-Compound-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Brand-Foreground-1-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Foreground-1-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Brand-Foreground-1-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Brand-Foreground-1-Selected': '{brand-30}',
  'Theme/Light/Theme/Light-Brand-Foreground-2-Rest': '{brand-80}',
  'Theme/Light/Theme/Light-Brand-Foreground-2-Hover': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Foreground-2-Pressed': '{brand-30}',
  'Theme/Light/Theme/Light-Brand-Foreground-Link-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Foreground-Link-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Brand-Foreground-Link-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Brand-Foreground-Link-Selected': '{brand-30}',
  'Theme/Light/Theme/Light-Brand-Foreground-Inverted-Rest': '{brand-100}',
  'Theme/Light/Theme/Light-Brand-Foreground-Inverted-Hover': '{brand-110}',
  'Theme/Light/Theme/Light-Brand-Foreground-Inverted-Pressed': '{brand-100}',
  'Theme/Light/Theme/Light-Brand-Foreground-On Light-Rest': '{brand-80}',
  'Theme/Light/Theme/Light-Brand-Foreground-On Light-Hover': '{brand-70}',
  'Theme/Light/Theme/Light-Brand-Foreground-On Light-Pressed': '{brand-50}',
  'Theme/Light/Theme/Light-Brand-Foreground-On Light-Selected': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Foreground-Compound-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Foreground-Compound-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Brand-Foreground-Compound-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Brand-Stroke-1-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Stroke-1-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Brand-Stroke-1-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Brand-Stroke-1-Selected': '{brand-30}',
  'Theme/Light/Theme/Light-Brand-Stroke-2-Rest': '{brand-10}',
  'Theme/Light/Theme/Light-Brand-Stroke-2-Contrast-Rest': '{brand-110}',
  'Theme/Light/Theme/Light-Brand-Stroke-3-Rest': '{brand-90}',
  'Theme/Light/Theme/Light-Brand-Stroke-Compound-Rest': '{brand-60}',
  'Theme/Light/Theme/Light-Brand-Stroke-Compound-Hover': '{brand-50}',
  'Theme/Light/Theme/Light-Brand-Stroke-Compound-Pressed': '{brand-40}',
  'Theme/Light/Theme/Light-Status-Danger-Background-1-Rest': '{colors.shared.cranberry.tint 60}',
  'Theme/Light/Theme/Light-Status-Danger-Background-3-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light/Theme/Light-Status-Danger-Foreground-1-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light/Theme/Light-Status-Danger-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Status-Danger-Stroke-1-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light/Theme/Light-Status-Danger-Stroke-2-Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Light/Theme/Light-Status-Success-Background-1-Rest': '{colors.shared.green.tint 60}',
  'Theme/Light/Theme/Light-Status-Success-Background-3-Rest': '{colors.shared.green.primary}',
  'Theme/Light/Theme/Light-Status-Success-Foreground-1-Rest': '{colors.shared.green.primary}',
  'Theme/Light/Theme/Light-Status-Success-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Status-Success-Stroke-1-Rest': '{colors.shared.green.primary}',
  'Theme/Light/Theme/Light-Status-Success-Stroke-2-Rest': '{colors.shared.green.tint 30}',
  'Theme/Light/Theme/Light-Status-Warning-Background-1-Rest': '{colors.shared.orange.tint 60}',
  'Theme/Light/Theme/Light-Status-Warning-Background-3-Rest': '{colors.shared.orange.primary}',
  'Theme/Light/Theme/Light-Status-Warning-Foreground-1-Rest': '{colors.shared.orange.primary}',
  'Theme/Light/Theme/Light-Status-Warning-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Status-Warning-Stroke-1-Rest': '{colors.shared.orange.primary}',
  'Theme/Light/Theme/Light-Status-Warning-Stroke-2-Rest': '{colors.shared.orange.tint 30}',
  'Theme/Light/Theme/Light-Status-Oof-Foreground-3-Rest': '{colors.shared.berry.primary}',
  'Theme/Light/Theme/Light-Status-Away-Background-3-Rest': '{colors.shared.marigold.primary}',
  'Theme/Light/Theme/Light-Status-Available-Foreground-3-Rest': '{colors.shared.light green.primary}',
  'Theme/Light/Theme/Light-Status-Generic-Anchor-Background-2-Rest': '{colors.shared.anchor.tint 40}',
  'Theme/Light/Theme/Light-Status-Generic-Anchor-Foreground-2-Rest': '{colors.shared.anchor.shade 30}',
  'Theme/Light/Theme/Light-Status-Generic-Anchor-Stroke-Active-Rest': '{colors.shared.anchor.primary}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Background-1-Rest': '{colors.shared.information.tint 60}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Background-1-Hover': '{colors.shared.information.tint 50}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Background-1-Pressed': '{colors.shared.information.tint 40}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Stroke-1-Rest': '{colors.shared.information.primary}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Rest': '{colors.shared.information.tint 30}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Hover': '{colors.shared.information.tint 20}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Pressed': '{colors.shared.information.tint 10}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Foreground-Rest': '{colors.shared.information.primary}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Foreground-Hover': '{colors.shared.information.shade 10}',
  'Theme/Light/Theme/Light-Status-Generic-Information-Foreground-Pressed': '{colors.shared.information.shade 20}',
  'Theme/Light/Theme/Light-Status-Severe-Background-1-Rest': '{colors.shared.dark orange.tint 60}',
  'Theme/Light/Theme/Light-Status-Severe-Background-3-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light/Theme/Light-Status-Severe-Foreground-1-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light/Theme/Light-Status-Severe-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Status-Severe-Stroke-1-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light/Theme/Light-Status-Severe-Stroke-2-Rest': '{colors.shared.dark orange.tint 30}',
  'Theme/Light/Theme/Light-Shadow-ambient': '#0000001f',
  'Theme/Light/Theme/Light-Shadow-ambient-lighter': '#0000000f',
  'Theme/Light/Theme/Light-Shadow-ambient-darker': '#00000033',
  'Theme/Light/Theme/Light-Shadow-brand-ambient': '#00000040',
  'Theme/Light/Theme/Light-Shadow-key': '#00000024',
  'Theme/Light/Theme/Light-Shadow-key-lighter': '#00000012',
  'Theme/Light/Theme/Light-Shadow-key-darker': '#0000003d',
  'Theme/Light/Theme/Light-Shadow-brand-key': '#0000004d',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Categorical': '{colors.brand.brand-10}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Data': '{colors.neutral.grey-12}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue': '{colors.data viz.core.blue}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray': '{colors.data viz.core.gray}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red': '{colors.data viz.core.red}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal': '{colors.data viz.core.teal}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean': '{colors.data viz.core.ocean}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green': '{colors.data viz.core.green}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Yellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red400': '{colors.data viz.sequential.red400}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red300': '{colors.data viz.sequential.red300}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green400': '{colors.data viz.sequential.green400}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Yellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green300': '{colors.data viz.sequential.green300}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Accessibility-Text dark bkgd': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Data viz-Foreground-Accessibility-Text light bkgd': '{colors.neutral.black}',
  'Theme/Light/Theme/Light-Data viz-Foreground-KPI Card-Text dark bkgd': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Data viz-Foreground-KPI Card-Text light bkgd': '{colors.neutral.grey-40}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Gridline': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Axis-Target-Benchmark': '{colors.neutral.black}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Blue': '{colors.data viz.core.blue}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Blue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Gray': '{colors.data viz.core.gray}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Gray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Red': '{colors.data viz.core.red}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Red300': '{colors.data viz.sequential.red300}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Red400': '{colors.data viz.sequential.red400}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Teal': '{colors.data viz.core.teal}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Teal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Teal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Ocean': '{colors.data viz.core.ocean}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Ocean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Green': '{colors.data viz.core.green}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Green300': '{colors.data viz.sequential.green300}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Green400': '{colors.data viz.sequential.green400}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Yellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Yellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Gray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Blue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Ocean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Color-Yellow': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Trend-Average': '{colors.data viz.sequential.gray300}',
  'Theme/Light/Theme/Light-Data viz-Stroke-Accessible outline': '{colors.neutral.white}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Positive': '{colors.data viz.core.green}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Negative': '{colors.data viz.core.red}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Positive': '#37bb65',
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Negative': '#cc2e48',
  'Theme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Positive': '{colors.data viz.core.green}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Negative': '{colors.data viz.core.red}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Positive': '#37bb65',
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Negative': '#cc2e48',
  'Theme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Background-Positive': '{colors.data viz.core.green}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Background-Negative': '{colors.data viz.core.red}',
  'Theme/Light/Theme/Light-Data viz-Semantic-Background-Notice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/Light-Data viz-Background-Core-Blue': '{colors.data viz.core.blue}',
  'Theme/Light/Theme/Light-Data viz-Background-Core-Gray': '{colors.data viz.core.gray}',
  'Theme/Light/Theme/Light-Data viz-Background-Core-Red': '{colors.data viz.core.red}',
  'Theme/Light/Theme/Light-Data viz-Background-Core-Teal': '{colors.data viz.core.teal}',
  'Theme/Light/Theme/Light-Data viz-Background-Core-Ocean': '{colors.data viz.core.ocean}',
  'Theme/Light/Theme/Light-Data viz-Background-Core-Green': '{colors.data viz.core.green}',
  'Theme/Light/Theme/Light-Data viz-Background-Core-Yellow': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Blue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Gray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Red300': '{colors.data viz.sequential.red300}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Red400': '{colors.data viz.sequential.red400}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Teal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Teal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Ocean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Green300': '{colors.data viz.sequential.green300}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Green400': '{colors.data viz.sequential.green400}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Yellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Yellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Blue300': '{colors.data viz.sequential.blue300}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Blue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Blue100': '{colors.data viz.sequential.blue100}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Gray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Gray200': '{colors.data viz.sequential.gray200}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Gray100': '{colors.data viz.sequential.gray100}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Red200': '{colors.data viz.sequential.red200}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Red100': '{colors.data viz.sequential.red100}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Teal200': '{colors.data viz.sequential.teal200}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Teal100': '{colors.data viz.sequential.teal100}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Ocean300': '{colors.data viz.sequential.ocean300}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Ocean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Ocean100': '{colors.data viz.sequential.ocean100}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Green200': '{colors.data viz.sequential.green200}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Green100': '{colors.data viz.sequential.green100}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Yellow200': '{colors.data viz.sequential.yellow200}',
  'Theme/Light/Theme/Light-Data viz-Background-Sequential-Yellow100': '{colors.data viz.sequential.yellow100}',
  'Theme/Light/Theme/Light-Data viz-Background-Neutral-Black': '{colors.neutral.black}',
  'Theme/Light/Theme/Light-Control logic-Theme switch': 'Light',
  'Theme/Dark/Theme/Dark-Neutral-Background-1-Rest': '{colors.neutral.black}',
  'Theme/Dark/Theme/Dark-Neutral-Background-1-Hover': '{colors.neutral.grey-10}',
  'Theme/Dark/Theme/Dark-Neutral-Background-1-Pressed': '{colors.neutral.grey-12}',
  'Theme/Dark/Theme/Dark-Neutral-Background-1-Selected': '{colors.neutral.grey-8}',
  'Theme/Dark/Theme/Dark-Neutral-Background-2-Rest': '{colors.neutral.grey-6}',
  'Theme/Dark/Theme/Dark-Neutral-Background-3-Rest': '{colors.neutral.grey-12}',
  'Theme/Dark/Theme/Dark-Neutral-Background-3-Hover': '{colors.neutral.grey-10}',
  'Theme/Dark/Theme/Dark-Neutral-Background-3-Pressed': '{colors.neutral.grey-10}',
  'Theme/Dark/Theme/Dark-Neutral-Background-4-Rest': '{colors.neutral.grey-90}',
  'Theme/Dark/Theme/Dark-Neutral-Background-4-Hover': '{colors.neutral.grey-70}',
  'Theme/Dark/Theme/Dark-Neutral-Background-4-Pressed': '{colors.neutral.grey-60}',
  'Theme/Dark/Theme/Dark-Neutral-Background-5-Rest': '{colors.neutral.grey-90}',
  'Theme/Dark/Theme/Dark-Neutral-Background-6-Rest': '{colors.neutral.grey-20}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Inverted-Disabled-Rest': '{colors.alpha.white.10}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Alpha-1-Rest': '{colors.alpha.brand-10.50}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Alpha-2-Rest': '{colors.alpha.black.70}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Static-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Rest': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Hover': '{colors.neutral.grey-80}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Pressed': '{colors.neutral.grey-70}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Selected': '{colors.neutral.grey-90}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Hover': '#242424cc',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Pressed': '#24242480',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Selected': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Rest': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Hover': '{colors.alpha.black.10}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Pressed': '{colors.alpha.black.30}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Selected': '{colors.alpha.black.20}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Transparent-Rest': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Transparent-Hover': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Transparent-Pressed': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Transparent-Selected': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Disabled-Rest': '{colors.neutral.grey-8}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Stencil-1-Rest': '#575757',
  'Theme/Dark/Theme/Dark-Neutral-Background-Stencil-2-Rest': '{colors.neutral.grey-20}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Overlay-Rest': '{colors.alpha.black.50}',
  'Theme/Dark/Theme/Dark-Neutral-Background-Overlay-Scrollbar-Rest': '{colors.alpha.white.60}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-1-Rest primary text': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-1-Hover': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-1-Pressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-1-Selected': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Rest secondary text': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Hover': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Pressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Selected': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Hover': '{brand-100}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Pressed': '{brand-90}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Selected': '{brand-100}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Rest': '{brand-100}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Hover': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Pressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Selected': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-4-Rest': '{colors.neutral.grey-60}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Disabled-2-Rest': '{colors.neutral.grey-60}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Disabled-Rest': '{colors.neutral.grey-50}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Static-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Rest': '#242424',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Hover': '#242424',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Pressed': '#242424',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Selected': '#242424',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-2-Rest': '#242424',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Disabled-Rest': '{colors.alpha.white.40}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Hover': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Pressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Selected': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Foreground-On Brand-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-1-Rest': '{colors.neutral.grey-40}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-1-Hover': '{colors.neutral.grey-40}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-1-Pressed': '{colors.neutral.grey-40}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-1-Selected': '{colors.neutral.grey-40}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-2-Rest': '#ffffff',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-3-Rest': '{colors.neutral.grey-50}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Alpha-1-Rest': '{colors.alpha.white.10}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Alpha-2-Rest': '{colors.alpha.white.20}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Subtle-Rest': '#f5f4f2',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-on Brand-1-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-on Brand-2-Rest': '#ffffff',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Hover': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Pressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Selected': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Focus-1-Rest': '{colors.neutral.black}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Focus-2-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Interactive-Rest': '{colors.alpha.white.0}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Disabled-Rest': '{colors.alpha.white.0}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Rest': '{colors.alpha.white.0}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Disabled-Rest': '{colors.neutral.grey-70}',
  'Theme/Dark/Theme/Dark-Neutral-Stroke-Disabled-Inverted-Rest': '{colors.alpha.white.40}',
  'Theme/Dark/Theme/Dark-Brand-Background-1-Rest': '{brand-60}',
  'Theme/Dark/Theme/Dark-Brand-Background-1-Hover': '{brand-40}',
  'Theme/Dark/Theme/Dark-Brand-Background-1-Pressed': '{brand-30}',
  'Theme/Dark/Theme/Dark-Brand-Background-1-Selected': '{brand-20}',
  'Theme/Dark/Theme/Dark-Brand-Background-2-Rest': '{brand-20}',
  'Theme/Dark/Theme/Dark-Brand-Background-2-Hover': '{brand-40}',
  'Theme/Dark/Theme/Dark-Brand-Background-2-Pressed': '{brand-10}',
  'Theme/Dark/Theme/Dark-Brand-Background-3-Rest': '#ffffff',
  'Theme/Dark/Theme/Dark-Brand-Background-Inverted-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Brand-Background-Inverted-Hover': '{brand-120}',
  'Theme/Dark/Theme/Dark-Brand-Background-Inverted-Pressed': '{brand-130}',
  'Theme/Dark/Theme/Dark-Brand-Background-Inverted-Selected': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Background-Static-Rest': '{brand-80}',
  'Theme/Dark/Theme/Dark-Brand-Background-Compound-Rest': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Background-Compound-Hover': '{brand-110}',
  'Theme/Dark/Theme/Dark-Brand-Background-Compound-Pressed': '{brand-90}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-1-Rest': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-1-Hover': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-1-Pressed': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-1-Selected': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-2-Rest': '{brand-110}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-2-Hover': '{brand-130}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-2-Pressed': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Link-Rest': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Link-Hover': '{brand-110}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Link-Pressed': '{brand-90}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Link-Selected': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Inverted-Rest': '{brand-80}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Inverted-Hover': '{brand-70}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Inverted-Pressed': '{brand-60}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-On Light-Rest': '{brand-70}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-On Light-Hover': '{brand-70}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-On Light-Pressed': '{brand-50}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-On Light-Selected': '{brand-60}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Compound-Rest': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Compound-Hover': '{brand-110}',
  'Theme/Dark/Theme/Dark-Brand-Foreground-Compound-Pressed': '{brand-90}',
  'Theme/Dark/Theme/Dark-Brand-Stroke-1-Rest': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Stroke-1-Hover': '#2886de',
  'Theme/Dark/Theme/Dark-Brand-Stroke-1-Pressed': '{brand-70}',
  'Theme/Dark/Theme/Dark-Brand-Stroke-1-Selected': '{brand-70}',
  'Theme/Dark/Theme/Dark-Brand-Stroke-2-Rest': '{brand-50}',
  'Theme/Dark/Theme/Dark-Brand-Stroke-2-Contrast-Rest': '{brand-60}',
  'Theme/Dark/Theme/Dark-Brand-Stroke-3-Rest': '#ffffff',
  'Theme/Dark/Theme/Dark-Brand-Stroke-Compound-Rest': '{brand-100}',
  'Theme/Dark/Theme/Dark-Brand-Stroke-Compound-Hover': '{brand-110}',
  'Theme/Dark/Theme/Dark-Brand-Stroke-Compound-Pressed': '{brand-90}',
  'Theme/Dark/Theme/Dark-Status-Danger-Background-1-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Status-Danger-Background-3-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Dark/Theme/Dark-Status-Danger-Foreground-1-Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Dark/Theme/Dark-Status-Danger-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Status-Danger-Stroke-1-Rest': '{colors.shared.cranberry.primary}',
  'Theme/Dark/Theme/Dark-Status-Danger-Stroke-2-Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Dark/Theme/Dark-Status-Success-Background-1-Rest': '{colors.shared.green.tint 60}',
  'Theme/Dark/Theme/Dark-Status-Success-Background-3-Rest': '{colors.shared.green.primary}',
  'Theme/Dark/Theme/Dark-Status-Success-Foreground-1-Rest': '{colors.shared.green.primary}',
  'Theme/Dark/Theme/Dark-Status-Success-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Status-Success-Stroke-1-Rest': '{colors.shared.green.primary}',
  'Theme/Dark/Theme/Dark-Status-Success-Stroke-2-Rest': '{colors.shared.green.tint 30}',
  'Theme/Dark/Theme/Dark-Status-Warning-Background-1-Rest': '{colors.shared.orange.tint 60}',
  'Theme/Dark/Theme/Dark-Status-Warning-Background-3-Rest': '{colors.shared.orange.primary}',
  'Theme/Dark/Theme/Dark-Status-Warning-Foreground-1-Rest': '{colors.shared.orange.primary}',
  'Theme/Dark/Theme/Dark-Status-Warning-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Status-Warning-Stroke-1-Rest': '{colors.shared.orange.primary}',
  'Theme/Dark/Theme/Dark-Status-Warning-Stroke-2-Rest': '{colors.shared.orange.tint 30}',
  'Theme/Dark/Theme/Dark-Status-Oof-Foreground-3-Rest': '{colors.shared.berry.tint 20}',
  'Theme/Dark/Theme/Dark-Status-Away-Background-3-Rest': '{colors.shared.marigold.primary}',
  'Theme/Dark/Theme/Dark-Status-Available-Foreground-3-Rest': '{colors.shared.light green.primary}',
  'Theme/Dark/Theme/Dark-Status-Generic-Anchor-Background-2-Rest': '{colors.shared.anchor.shade 30}',
  'Theme/Dark/Theme/Dark-Status-Generic-Anchor-Foreground-2-Rest': '{colors.shared.anchor.tint 40}',
  'Theme/Dark/Theme/Dark-Status-Generic-Anchor-Stroke-Active-Rest': '{colors.shared.anchor.tint 30}',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Rest': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Hover': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Pressed': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Stroke-1-Rest': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Rest': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Hover': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Pressed': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Rest': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Hover': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Pressed': '#ffffff',
  'Theme/Dark/Theme/Dark-Status-Severe-Background-1-Rest': '{colors.shared.dark orange.tint 60}',
  'Theme/Dark/Theme/Dark-Status-Severe-Background-3-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark/Theme/Dark-Status-Severe-Foreground-1-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark/Theme/Dark-Status-Severe-Foreground-3-Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/Dark-Status-Severe-Stroke-1-Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark/Theme/Dark-Status-Severe-Stroke-2-Rest': '{colors.shared.dark orange.tint 30}',
  'Theme/Dark/Theme/Dark-Shadow-ambient': '#00000033',
  'Theme/Dark/Theme/Dark-Shadow-ambient-lighter': '#0000001f',
  'Theme/Dark/Theme/Dark-Shadow-ambient-darker': '#00000066',
  'Theme/Dark/Theme/Dark-Shadow-brand-ambient': '#00000040',
  'Theme/Dark/Theme/Dark-Shadow-key': '#00000047',
  'Theme/Dark/Theme/Dark-Shadow-key-lighter': '#00000024',
  'Theme/Dark/Theme/Dark-Shadow-key-darker': '#0000007a',
  'Theme/Dark/Theme/Dark-Shadow-brand-key': '#0000004d',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Categorical': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Data': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Yellow300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Yellow400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Accessibility-Text dark bkgd': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-Accessibility-Text light bkgd': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-KPI Card-Text dark bkgd': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Foreground-KPI Card-Text light bkgd': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Gridline': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Axis-Target-Benchmark': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Red': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Red300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Red400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Green': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Green300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Green400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Trend-Average': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Stroke-Accessible outline': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Positive': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Negative': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Notice': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Positive': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Negative': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Notice': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Positive': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Negative': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Notice': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Positive': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Negative': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Notice': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Background-Positive': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Background-Negative': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Semantic-Background-Notice': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Blue': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Gray': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Red': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Teal': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Ocean': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Green': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Core-Yellow': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Red300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Red400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Green300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Green400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow400': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue100': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray100': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Red200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Red100': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal100': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean300': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean100': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Green200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Green100': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow200': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow100': '#ffffff',
  'Theme/Dark/Theme/Dark-Data viz-Background-Neutral-Black': '#ffffff',
  'Theme/Dark/Theme/Dark-Control logic-Theme switch': 'Dark',
  'Global/Value/Global/Value-Colors-Neutral-Black': '#000000',
  'Global/Value/Global/Value-Colors-Neutral-Grey-6': '#111111',
  'Global/Value/Global/Value-Colors-Neutral-Grey-8': '#2c2c2c',
  'Global/Value/Global/Value-Colors-Neutral-Grey-10': '#3a3a3a',
  'Global/Value/Global/Value-Colors-Neutral-Grey-12': '#595959',
  'Global/Value/Global/Value-Colors-Neutral-Grey-20': '#626a6a',
  'Global/Value/Global/Value-Colors-Neutral-Grey-30': '#788383',
  'Global/Value/Global/Value-Colors-Neutral-Grey-40': '#959d9d',
  'Global/Value/Global/Value-Colors-Neutral-Grey-50': '#afb6b6',
  'Global/Value/Global/Value-Colors-Neutral-Grey-60': '#cacece',
  'Global/Value/Global/Value-Colors-Neutral-Grey-70': '#e4e7e7',
  'Global/Value/Global/Value-Colors-Neutral-Grey-80': '#f2f3f3',
  'Global/Value/Global/Value-Colors-Neutral-Grey-90': '#f8f8f8',
  'Global/Value/Global/Value-Colors-Neutral-White': '#ffffff',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 50': '#1a0607',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 40': '#310b0d',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 30': '#5c1519',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 20': '#7d1d21',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Shade 10': '#942228',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Primary': '#a4262c',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 10': '#af393e',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 20': '#ba4d52',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 30': '#c86c70',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 40': '#e4afb2',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 50': '#f0d3d4',
  'Global/Value/Global/Value-Colors-Shared-Burgundy-Tint 60': '#fbf4f4',
  'Global/Value/Global/Value-Colors-Shared-Cranberry-Primary': '#ad0000',
  'Global/Value/Global/Value-Colors-Shared-Cranberry-Tint 30': '#dd9090',
  'Global/Value/Global/Value-Colors-Shared-Cranberry-Tint 60': '#fcdfdf',
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 50': '#210809',
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 40': '#3f1011',
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 30': '#751d1f',
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 20': '#9f282b',
  'Global/Value/Global/Value-Colors-Shared-Red-Shade 10': '#bc2f32',
  'Global/Value/Global/Value-Colors-Shared-Red-Primary': '#d13438',
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 10': '#d7494c',
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 20': '#dc5e62',
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 30': '#e37d80',
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 40': '#f1bbbc',
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 50': '#f8dadb',
  'Global/Value/Global/Value-Colors-Shared-Red-Tint 60': '#fdf6f6',
  'Global/Value/Global/Value-Colors-Shared-Dark Orange-Primary': '#da3b01',
  'Global/Value/Global/Value-Colors-Shared-Dark Orange-Tint 30': '#f5c0ac',
  'Global/Value/Global/Value-Colors-Shared-Dark Orange-Tint 60': '#f8e8e1',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 50': '#1b0a01',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 40': '#321303',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 30': '#5e2405',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 20': '#7f3107',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Shade 10': '#963a08',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Primary': '#a74109',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 10': '#b2521e',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 20': '#bc6535',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 30': '#ca8057',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 40': '#e5bba4',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 50': '#f1d9cc',
  'Global/Value/Global/Value-Colors-Shared-Bronze-Tint 60': '#fbf5f2',
  'Global/Value/Global/Value-Colors-Shared-Orange-Primary': '#c9601c',
  'Global/Value/Global/Value-Colors-Shared-Orange-Tint 30': '#f0a371',
  'Global/Value/Global/Value-Colors-Shared-Orange-Tint 60': '#fbeee6',
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 50': '#291600',
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 40': '#4d2a00',
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 30': '#8f4e00',
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 20': '#c26a00',
  'Global/Value/Global/Value-Colors-Shared-Peach-Shade 10': '#e67e00',
  'Global/Value/Global/Value-Colors-Shared-Peach-Primary': '#ff8c00',
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 10': '#ff9a1f',
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 20': '#ffa83d',
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 30': '#ffba66',
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 40': '#ffddb3',
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 50': '#ffedd6',
  'Global/Value/Global/Value-Colors-Shared-Peach-Tint 60': '#fffaf5',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 50': '#251a00',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 40': '#463100',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 30': '#835b00',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 20': '#b27c00',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Shade 10': '#d39300',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Primary': '#eaa300',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 10': '#edad1c',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 20': '#efb839',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 30': '#f2c661',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 40': '#f9e2ae',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 50': '#fcefd3',
  'Global/Value/Global/Value-Colors-Shared-Marigold-Tint 60': '#fefbf4',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 50': '#282400',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 40': '#4c4400',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 30': '#817400',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 20': '#c0ad00',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Shade 10': '#e4cc00',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Primary': '#fde300',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 10': '#fde61e',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 20': '#fdea3d',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 30': '#feee66',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 40': '#fef7b2',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 50': '#fffad6',
  'Global/Value/Global/Value-Colors-Shared-Yellow-Tint 60': '#fffef5',
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 50': '#1f1900',
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 40': '#3a2f00',
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 30': '#6c5700',
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 20': '#937700',
  'Global/Value/Global/Value-Colors-Shared-Gold-Shade 10': '#ae8c00',
  'Global/Value/Global/Value-Colors-Shared-Gold-Primary': '#c19c00',
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 10': '#c8a718',
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 20': '#d0b232',
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 30': '#dac157',
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 40': '#ecdfa5',
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 50': '#f5eece',
  'Global/Value/Global/Value-Colors-Shared-Gold-Tint 60': '#fdfbf2',
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 50': '#181202',
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 40': '#2e2103',
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 30': '#553e06',
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 20': '#745408',
  'Global/Value/Global/Value-Colors-Shared-Brass-Shade 10': '#89640a',
  'Global/Value/Global/Value-Colors-Shared-Brass-Primary': '#986f0b',
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 10': '#a47d1e',
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 20': '#b18c34',
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 30': '#c1a256',
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 40': '#e0cea2',
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 50': '#efe4cb',
  'Global/Value/Global/Value-Colors-Shared-Brass-Tint 60': '#fbf8f2',
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 50': '#170e07',
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 40': '#2b1a0e',
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 30': '#50301a',
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 20': '#6c4123',
  'Global/Value/Global/Value-Colors-Shared-Brown-Shade 10': '#804d29',
  'Global/Value/Global/Value-Colors-Shared-Brown-Primary': '#8e562e',
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 10': '#9c663f',
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 20': '#a97652',
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 30': '#bb8f6f',
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 40': '#ddc3b0',
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 50': '#edded3',
  'Global/Value/Global/Value-Colors-Shared-Brown-Tint 60': '#faf7f4',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 50': '#0c0704',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 40': '#170c08',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 30': '#2b1710',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 20': '#3a1f15',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Shade 10': '#452519',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Primary': '#4d291c',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 10': '#623a2b',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 20': '#784d3e',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 30': '#946b5c',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 40': '#caada3',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 50': '#e3d2cb',
  'Global/Value/Global/Value-Colors-Shared-Dark brown-Tint 60': '#f8f3f2',
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 50': '#121b06',
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 40': '#23330b',
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 30': '#405f14',
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 20': '#57811b',
  'Global/Value/Global/Value-Colors-Shared-Lime-Shade 10': '#689920',
  'Global/Value/Global/Value-Colors-Shared-Lime-Primary': '#73aa24',
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 10': '#81b437',
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 20': '#90be4c',
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 30': '#a4cc6c',
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 40': '#cfe5af',
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 50': '#e5f1d3',
  'Global/Value/Global/Value-Colors-Shared-Lime-Tint 60': '#f8fcf4',
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 50': '#0c1501',
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 40': '#162702',
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 30': '#294903',
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 20': '#376304',
  'Global/Value/Global/Value-Colors-Shared-Forest-Shade 10': '#427505',
  'Global/Value/Global/Value-Colors-Shared-Forest-Primary': '#498205',
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 10': '#599116',
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 20': '#6ba02b',
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 30': '#85b44c',
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 40': '#bdd99b',
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 50': '#dbebc7',
  'Global/Value/Global/Value-Colors-Shared-Forest-Tint 60': '#f6faf0',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 50': '#002111',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 40': '#003d20',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 30': '#00723b',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 20': '#009b51',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Shade 10': '#00b85f',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Primary': '#00cc6a',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 10': '#19d279',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 20': '#34d889',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 30': '#5ae0a0',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 40': '#a8f0cd',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 50': '#cff7e4',
  'Global/Value/Global/Value-Colors-Shared-Seafoam-Tint 60': '#f3fdf8',
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 50': '#031a02',
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 40': '#063004',
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 30': '#0b5a08',
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 20': '#0e7a0b',
  'Global/Value/Global/Value-Colors-Shared-Light green-Shade 10': '#11910d',
  'Global/Value/Global/Value-Colors-Shared-Light green-Primary': '#13a10e',
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 10': '#27ac22',
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 20': '#3db838',
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 30': '#5ec75a',
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 40': '#a7e3a5',
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 50': '#cef0cd',
  'Global/Value/Global/Value-Colors-Shared-Light green-Tint 60': '#f2fbf2',
  'Global/Value/Global/Value-Colors-Shared-Green-Primary': '#0a7f00',
  'Global/Value/Global/Value-Colors-Shared-Green-Tint 30': '#8dc881',
  'Global/Value/Global/Value-Colors-Shared-Green-Tint 60': '#e2f5e0',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 50': '#021102',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 40': '#032003',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 30': '#063b06',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 20': '#085108',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Shade 10': '#0a5f0a',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Primary': '#0b6a0b',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 10': '#1a7c1a',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 20': '#2d8e2d',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 30': '#4da64d',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 40': '#9ad29a',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 50': '#c6e7c6',
  'Global/Value/Global/Value-Colors-Shared-Dark green-Tint 60': '#f0f9f0',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 50': '#001d1f',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 40': '#00373a',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 30': '#00666d',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 20': '#008b94',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Shade 10': '#00a5af',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Primary': '#00b7c3',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 10': '#18bfca',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 20': '#32c8d1',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 30': '#58d3db',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 40': '#a6e9ed',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 50': '#cef3f5',
  'Global/Value/Global/Value-Colors-Shared-Light teal-Tint 60': '#f2fcfd',
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 50': '#001516',
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 40': '#012728',
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 30': '#02494c',
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 20': '#026467',
  'Global/Value/Global/Value-Colors-Shared-Teal-Shade 10': '#037679',
  'Global/Value/Global/Value-Colors-Shared-Teal-Primary': '#038387',
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 10': '#159195',
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 20': '#2aa0a4',
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 30': '#4cb4b7',
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 40': '#9bd9db',
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 50': '#c7ebec',
  'Global/Value/Global/Value-Colors-Shared-Teal-Tint 60': '#f0fafa',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 50': '#001010',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 40': '#001f1f',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 30': '#003939',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 20': '#004e4e',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Shade 10': '#005c5c',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Primary': '#006666',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 10': '#0e7878',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 20': '#218b8b',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 30': '#41a3a3',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 40': '#92d1d1',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 50': '#c2e7e7',
  'Global/Value/Global/Value-Colors-Shared-Dark teal-Tint 60': '#eff9f9',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 50': '#00181e',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 40': '#002e38',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 30': '#005669',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 20': '#00748f',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Shade 10': '#008aa9',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Primary': '#0099bc',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 10': '#18a4c4',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 20': '#31afcc',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 30': '#56bfd7',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 40': '#a4deeb',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 50': '#cdedf4',
  'Global/Value/Global/Value-Colors-Shared-Cyan-Tint 60': '#f2fafc',
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 50': '#000f12',
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 40': '#001b22',
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 30': '#00333f',
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 20': '#004555',
  'Global/Value/Global/Value-Colors-Shared-Steel-Shade 10': '#005265',
  'Global/Value/Global/Value-Colors-Shared-Steel-Primary': '#005b70',
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 10': '#0f6c81',
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 20': '#237d92',
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 30': '#4496a9',
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 40': '#94c8d4',
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 50': '#c3e1e8',
  'Global/Value/Global/Value-Colors-Shared-Steel-Tint 60': '#eff7f9',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 50': '#091823',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 40': '#112d42',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 30': '#20547c',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 20': '#2c72a8',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Shade 10': '#3487c7',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Primary': '#3a96dd',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 10': '#4fa1e1',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 20': '#65ade5',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 30': '#83bdeb',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 40': '#bfddf5',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 50': '#dcedfa',
  'Global/Value/Global/Value-Colors-Shared-Light blue-Tint 60': '#f6fafe',
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 50': '#001322',
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 40': '#002440',
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 30': '#004377',
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 20': '#005ba1',
  'Global/Value/Global/Value-Colors-Shared-Blue-Shade 10': '#006cbf',
  'Global/Value/Global/Value-Colors-Shared-Blue-Primary': '#0078d4',
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 10': '#1a86d9',
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 20': '#3595de',
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 30': '#5caae5',
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 40': '#a9d3f2',
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 50': '#d0e7f8',
  'Global/Value/Global/Value-Colors-Shared-Blue-Tint 60': '#f3f9fd',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 50': '#000c16',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 40': '#00172a',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 30': '#002c4e',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 20': '#003b6a',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Shade 10': '#00467e',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Primary': '#004e8c',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 10': '#125e9a',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 20': '#286fa8',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 30': '#4a89ba',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 40': '#9abfdc',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 50': '#c7dced',
  'Global/Value/Global/Value-Colors-Shared-Royal blue-Tint 60': '#f0f6fa',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 50': '#000910',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 40': '#00111f',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 30': '#002039',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 20': '#002b4e',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Shade 10': '#00335c',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Primary': '#003966',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 10': '#0e4a78',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 20': '#215c8b',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 30': '#4178a3',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 40': '#92b5d1',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 50': '#c2d6e7',
  'Global/Value/Global/Value-Colors-Shared-Dark blue-Tint 60': '#eff4f9',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 50': '#0d1126',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 40': '#182047',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 30': '#2c3c85',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 20': '#3c51b4',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Shade 10': '#4760d5',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Primary': '#4f6bed',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 10': '#637cef',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 20': '#778df1',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 30': '#93a4f4',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 40': '#c8d1fa',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 50': '#e1e6fc',
  'Global/Value/Global/Value-Colors-Shared-Cornflower-Tint 60': '#f7f9fe',
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 50': '#00061d',
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 40': '#000c36',
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 30': '#001665',
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 20': '#001e89',
  'Global/Value/Global/Value-Colors-Shared-Navy-Shade 10': '#0023a2',
  'Global/Value/Global/Value-Colors-Shared-Navy-Primary': '#0027b4',
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 10': '#173bbd',
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 20': '#3050c6',
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 30': '#546fd2',
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 40': '#a3b2e8',
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 50': '#ccd5f3',
  'Global/Value/Global/Value-Colors-Shared-Navy-Tint 60': '#f2f4fc',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 50': '#120f25',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 40': '#221d46',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 30': '#3f3682',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 20': '#5649b0',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Shade 10': '#6656d1',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Primary': '#7160e8',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 10': '#8172eb',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 20': '#9184ee',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 30': '#a79cf1',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 40': '#d2ccf8',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 50': '#e7e4fb',
  'Global/Value/Global/Value-Colors-Shared-Lavender-Tint 60': '#f9f8fe',
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 50': '#0f0717',
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 40': '#1c0e2b',
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 30': '#341a51',
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 20': '#46236e',
  'Global/Value/Global/Value-Colors-Shared-Purple-Shade 10': '#532982',
  'Global/Value/Global/Value-Colors-Shared-Purple-Primary': '#5c2e91',
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 10': '#6b3f9e',
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 20': '#7c52ab',
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 30': '#9470bd',
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 40': '#c6b1de',
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 50': '#e0d3ed',
  'Global/Value/Global/Value-Colors-Shared-Purple-Tint 60': '#f7f4fb',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 50': '#0a0411',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 40': '#130820',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 30': '#240f3c',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 20': '#311552',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Shade 10': '#3a1861',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Primary': '#401b6c',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 10': '#512b7e',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 20': '#633e8f',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 30': '#7e5ca7',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 40': '#b9a3d3',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 50': '#d8cce7',
  'Global/Value/Global/Value-Colors-Shared-Dark purple-Tint 60': '#f5f2f9',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 50': '#16101d',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 40': '#281e37',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 30': '#4c3867',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 20': '#674c8c',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Shade 10': '#795aa6',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Primary': '#8764b8',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 10': '#9373c0',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 20': '#a083c9',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 30': '#b29ad4',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 40': '#d7caea',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 50': '#e9e2f4',
  'Global/Value/Global/Value-Colors-Shared-Orchid-Tint 60': '#f9f8fc',
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 50': '#160418',
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 40': '#29072e',
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 30': '#4c0d55',
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 20': '#671174',
  'Global/Value/Global/Value-Colors-Shared-Grape-Shade 10': '#7a1589',
  'Global/Value/Global/Value-Colors-Shared-Grape-Primary': '#881798',
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 10': '#952aa4',
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 20': '#a33fb1',
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 30': '#b55fc1',
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 40': '#d9a7e0',
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 50': '#eaceef',
  'Global/Value/Global/Value-Colors-Shared-Grape-Tint 60': '#faf2fb',
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 50': '#1f091d',
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 40': '#3a1136',
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 30': '#6d2064',
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 20': '#932b88',
  'Global/Value/Global/Value-Colors-Shared-Berry-Shade 10': '#af33a1',
  'Global/Value/Global/Value-Colors-Shared-Berry-Primary': '#c239b3',
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 10': '#c94cbc',
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 20': '#d161c4',
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 30': '#da7ed0',
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 40': '#edbbe7',
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 50': '#f5daf2',
  'Global/Value/Global/Value-Colors-Shared-Berry-Tint 60': '#fdf5fc',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 50': '#1c0b1f',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 40': '#35153a',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 30': '#63276d',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 20': '#863593',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Shade 10': '#9f3faf',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Primary': '#b146c2',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 10': '#ba58c9',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 20': '#c36bd1',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 30': '#cf87da',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 40': '#e6bfed',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 50': '#f2dcf5',
  'Global/Value/Global/Value-Colors-Shared-Lilac-Tint 60': '#fcf6fd',
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 50': '#24091b',
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 40': '#441232',
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 30': '#80215d',
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 20': '#ad2d7e',
  'Global/Value/Global/Value-Colors-Shared-Pink-Shade 10': '#cd3595',
  'Global/Value/Global/Value-Colors-Shared-Pink-Primary': '#e43ba6',
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 10': '#e750b0',
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 20': '#ea66ba',
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 30': '#ef85c8',
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 40': '#f7c0e3',
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 50': '#fbddf0',
  'Global/Value/Global/Value-Colors-Shared-Pink-Tint 60': '#fef6fb',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 50': '#240016',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 40': '#44002a',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 30': '#7f004e',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 20': '#ad006a',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Shade 10': '#cc007e',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Primary': '#e3008c',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 10': '#e61c99',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 20': '#ea38a6',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 30': '#ee5fb7',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 40': '#f7adda',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 50': '#fbd2eb',
  'Global/Value/Global/Value-Colors-Shared-Hot pink-Tint 60': '#fef4fa',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 50': '#1f0013',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 40': '#390024',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 30': '#6b0043',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 20': '#91005a',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Shade 10': '#ac006b',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Primary': '#bf0077',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 10': '#c71885',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 20': '#ce3293',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 30': '#d957a8',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 40': '#eca5d1',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 50': '#f5cee6',
  'Global/Value/Global/Value-Colors-Shared-Magenta-Tint 60': '#fcf2f9',
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 50': '#13000c',
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 40': '#240017',
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 30': '#43002b',
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 20': '#5a003b',
  'Global/Value/Global/Value-Colors-Shared-Plum-Shade 10': '#6b0045',
  'Global/Value/Global/Value-Colors-Shared-Plum-Primary': '#77004d',
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 10': '#87105d',
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 20': '#98246f',
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 30': '#ad4589',
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 40': '#d696c0',
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 50': '#e9c4dc',
  'Global/Value/Global/Value-Colors-Shared-Plum-Tint 60': '#faf0f6',
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 50': '#141313',
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 40': '#252323',
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 30': '#444241',
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 20': '#5d5958',
  'Global/Value/Global/Value-Colors-Shared-Beige-Shade 10': '#6e6968',
  'Global/Value/Global/Value-Colors-Shared-Beige-Primary': '#7a7574',
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 10': '#8a8584',
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 20': '#9a9594',
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 30': '#afabaa',
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 40': '#d7d4d4',
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 50': '#eae8e8',
  'Global/Value/Global/Value-Colors-Shared-Beige-Tint 60': '#faf9f9',
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 50': '#0f0e0e',
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 40': '#1c1b1a',
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 30': '#343231',
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 20': '#474443',
  'Global/Value/Global/Value-Colors-Shared-Mink-Shade 10': '#54514f',
  'Global/Value/Global/Value-Colors-Shared-Mink-Primary': '#5d5a58',
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 10': '#706d6b',
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 20': '#84817e',
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 30': '#9e9b99',
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 40': '#cecccb',
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 50': '#e5e4e3',
  'Global/Value/Global/Value-Colors-Shared-Mink-Tint 60': '#f8f8f8',
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 50': '#151818',
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 40': '#282d2e',
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 30': '#4a5356',
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 20': '#657174',
  'Global/Value/Global/Value-Colors-Shared-Silver-Shade 10': '#78868a',
  'Global/Value/Global/Value-Colors-Shared-Silver-Primary': '#859599',
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 10': '#92a1a5',
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 20': '#a0aeb1',
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 30': '#b3bfc2',
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 40': '#d8dfe0',
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 50': '#eaeeef',
  'Global/Value/Global/Value-Colors-Shared-Silver-Tint 60': '#fafbfb',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 50': '#111314',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 40': '#1f2426',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 30': '#3b4447',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 20': '#505c60',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Shade 10': '#5f6d71',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Primary': '#69797e',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 10': '#79898d',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 20': '#89989d',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 30': '#a0adb2',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 40': '#cdd6d8',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 50': '#e4e9ea',
  'Global/Value/Global/Value-Colors-Shared-Platinum-Tint 60': '#f8f9fa',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 50': '#090a0b',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 40': '#111315',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 30': '#202427',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 20': '#2b3135',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Shade 10': '#333a3f',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Primary': '#394146',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 10': '#4d565c',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 20': '#626c72',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 30': '#808a90',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 40': '#bcc3c7',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 50': '#dbdfe1',
  'Global/Value/Global/Value-Colors-Shared-Anchor-Tint 60': '#f6f7f8',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 50': '#090909',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 40': '#111111',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 30': '#202020',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 20': '#2b2b2b',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Shade 10': '#333333',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Primary': '#393939',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 10': '#515151',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 20': '#686868',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 30': '#888888',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 40': '#c4c4c4',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 50': '#dfdfdf',
  'Global/Value/Global/Value-Colors-Shared-Charcoal-Tint 60': '#f7f7f7',
  'Global/Value/Global/Value-Colors-Shared-Information-Primary': '#007e73',
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 30': '#8ad0ca',
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 60': '#e8f8f7',
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 40': '#abe6e1',
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 50': '#caedea',
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 20': '#59b9b1',
  'Global/Value/Global/Value-Colors-Shared-Information-Tint 10': '#029b8d',
  'Global/Value/Global/Value-Colors-Shared-Information-Shade 10': '#00554e',
  'Global/Value/Global/Value-Colors-Shared-Information-Shade 20': '#003e39',
  'Global/Value/Global/Value-Colors-Alpha-White-0': '#ffffff00',
  'Global/Value/Global/Value-Colors-Alpha-White-5': '#ffffff0d',
  'Global/Value/Global/Value-Colors-Alpha-White-10': '#ffffff1a',
  'Global/Value/Global/Value-Colors-Alpha-White-20': '#ffffff33',
  'Global/Value/Global/Value-Colors-Alpha-White-30': '#ffffff4d',
  'Global/Value/Global/Value-Colors-Alpha-White-40': '#ffffff66',
  'Global/Value/Global/Value-Colors-Alpha-White-50': '#ffffff80',
  'Global/Value/Global/Value-Colors-Alpha-White-60': '#ffffff99',
  'Global/Value/Global/Value-Colors-Alpha-White-70': '#ffffffb3',
  'Global/Value/Global/Value-Colors-Alpha-White-80': '#ffffffcc',
  'Global/Value/Global/Value-Colors-Alpha-White-90': '#ffffffe6',
  'Global/Value/Global/Value-Colors-Alpha-Black-0': '#00000000',
  'Global/Value/Global/Value-Colors-Alpha-Black-5': '#0000000d',
  'Global/Value/Global/Value-Colors-Alpha-Black-10': '#0000001a',
  'Global/Value/Global/Value-Colors-Alpha-Black-20': '#00000033',
  'Global/Value/Global/Value-Colors-Alpha-Black-30': '#0000004d',
  'Global/Value/Global/Value-Colors-Alpha-Black-40': '#00000066',
  'Global/Value/Global/Value-Colors-Alpha-Black-50': '#00000080',
  'Global/Value/Global/Value-Colors-Alpha-Black-60': '#00000099',
  'Global/Value/Global/Value-Colors-Alpha-Black-70': '#000000b3',
  'Global/Value/Global/Value-Colors-Alpha-Black-80': '#000000cc',
  'Global/Value/Global/Value-Colors-Alpha-Black-90': '#000000e6',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-5': '#0f1a380d',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-10': '#0f1a381a',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-20': '#0f1a3833',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-30': '#0f1a384d',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-40': '#0f1a3866',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-50': '#0f1a3880',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-60': '#0f1a3899',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-70': '#0f1a38b3',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-80': '#0f1a38cc',
  'Global/Value/Global/Value-Colors-Alpha-Brand-10-90': '#0f1a38e6',
  'Global/Value/Global/Value-Colors-Data viz-Core-Blue': '{brand-60}',
  'Global/Value/Global/Value-Colors-Data viz-Core-Gray': '#a2aeb5',
  'Global/Value/Global/Value-Colors-Data viz-Core-Red': '#b94431',
  'Global/Value/Global/Value-Colors-Data viz-Core-Teal': '#05a3b1',
  'Global/Value/Global/Value-Colors-Data viz-Core-Ocean': '#0b3873',
  'Global/Value/Global/Value-Colors-Data viz-Core-Green': '#529c74',
  'Global/Value/Global/Value-Colors-Data viz-Core-Yellow': '#df9f37',
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Light bkgd-Positive': '#529c74',
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Light bkgd-Notice': '#df9f37',
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Light bkgd-Negative': '#b94431',
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Dark bkgd-Positive': '#37bb65',
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Dark bkgd-Negative': '#cc2e48',
  'Global/Value/Global/Value-Colors-Data viz-Semantic-Dark bkgd-Notice': '#df9f37',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Blue400': '#133a77',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Blue300': '{brand-60}',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Blue200': '#6f94ce',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Blue100': '#9ebbe6',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Gray400': '#36383a',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Gray300': '#646b6f',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Gray200': '#a2aeb5',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Gray100': '#d1dbe2',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Red400': '#460f05',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Red300': '#8c2e20',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Red200': '#b94431',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Red100': '#cf8a7e',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Teal400': '#063f44',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Teal300': '#136a73',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Teal200': '#05a3b1',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Teal100': '#80d0d7',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Ocean400': '#071e39',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Ocean300': '#0b3873',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Ocean200': '#5a74cb',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Ocean100': '#9ab2ff',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Green400': '#08362a',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Green300': '#1d6953',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Green200': '#529c74',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Green100': '#87c3a9',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Yellow400': '#563b10',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Yellow300': '#a06a14',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Yellow200': '#df9f37',
  'Global/Value/Global/Value-Colors-Data viz-Sequential-Yellow100': '#ffd592',
  'Global/Value/Global/Value-Colors-Brand-Brand-10': '#0f1a38',
  'Global/Value/Global/Value-Colors-Brand-Brand-20': '#041e47',
  'Global/Value/Global/Value-Colors-Brand-Brand-30': '#052c69',
  'Global/Value/Global/Value-Colors-Brand-Brand-40': '#0c3069',
  'Global/Value/Global/Value-Colors-Brand-Brand-50': '#19458b',
  'Global/Value/Global/Value-Colors-Brand-Brand-60': '#295cad',
  'Global/Value/Global/Value-Colors-Brand-Brand-70': '#3e76cf',
  'Global/Value/Global/Value-Colors-Brand-Brand-80': '#5692f1',
  'Global/Value/Global/Value-Colors-Brand-Brand-90': '#80b1ff',
  'Global/Value/Global/Value-Colors-Brand-Brand-100': '#a5c8ff',
  'Global/Value/Global/Value-Colors-Brand-Brand-110': '#a5c8ff',
  'Global/Value/Global/Value-Colors-Brand-Brand-120': '#eef5ff',
  'Global/Value/Global/Value-Colors-Brand-Brand-130': '#f5f9ff',
  'Brand/Brand 1/Brand/Brand 1-Brand-10': '#0f1a38',
  'Brand/Brand 1/Brand/Brand 1-Brand-20': '#041e47',
  'Brand/Brand 1/Brand/Brand 1-Brand-30': '#052c69',
  'Brand/Brand 1/Brand/Brand 1-Brand-40': '#0c3069',
  'Brand/Brand 1/Brand/Brand 1-Brand-50': '#19458b',
  'Brand/Brand 1/Brand/Brand 1-Brand-60': '#295cad',
  'Brand/Brand 1/Brand/Brand 1-Brand-70': '#3e76cf',
  'Brand/Brand 1/Brand/Brand 1-Brand-80': '#5692f1',
  'Brand/Brand 1/Brand/Brand 1-Brand-90': '#80b1ff',
  'Brand/Brand 1/Brand/Brand 1-Brand-100': '#a5c8ff',
  'Brand/Brand 1/Brand/Brand 1-Brand-110': '#cadeff',
  'Brand/Brand 1/Brand/Brand 1-Brand-120': '#eef5ff',
  'Brand/Brand 1/Brand/Brand 1-Brand-130': '#f5f9ff',
  'Arrow position/Above start/Arrow position/Above start-Above-start': 'true',
  'Arrow position/Above start/Arrow position/Above start-Above-middle': 'false',
  'Arrow position/Above start/Arrow position/Above start-Above-end': 'false',
  'Arrow position/Above start/Arrow position/Above start-Before-top': 'false',
  'Arrow position/Above start/Arrow position/Above start-Before-center': 'false',
  'Arrow position/Above start/Arrow position/Above start-Before-bottom': 'false',
  'Arrow position/Above start/Arrow position/Above start-After-top': 'false',
  'Arrow position/Above start/Arrow position/Above start-After-center': 'false',
  'Arrow position/Above start/Arrow position/Above start-After-bottom': 'false',
  'Arrow position/Above start/Arrow position/Above start-Bottom-start': 'false',
  'Arrow position/Above start/Arrow position/Above start-Bottom-center': 'false',
  'Arrow position/Above start/Arrow position/Above start-Bottom-end': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-Above-start': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-Above-middle': 'true',
  'Arrow position/Above middle/Arrow position/Above middle-Above-end': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-Before-top': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-Before-center': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-Before-bottom': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-After-top': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-After-center': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-After-bottom': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-Bottom-start': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-Bottom-center': 'false',
  'Arrow position/Above middle/Arrow position/Above middle-Bottom-end': 'false',
  'Arrow position/Above end/Arrow position/Above end-Above-start': 'false',
  'Arrow position/Above end/Arrow position/Above end-Above-middle': 'false',
  'Arrow position/Above end/Arrow position/Above end-Above-end': 'true',
  'Arrow position/Above end/Arrow position/Above end-Before-top': 'false',
  'Arrow position/Above end/Arrow position/Above end-Before-center': 'false',
  'Arrow position/Above end/Arrow position/Above end-Before-bottom': 'false',
  'Arrow position/Above end/Arrow position/Above end-After-top': 'false',
  'Arrow position/Above end/Arrow position/Above end-After-center': 'false',
  'Arrow position/Above end/Arrow position/Above end-After-bottom': 'false',
  'Arrow position/Above end/Arrow position/Above end-Bottom-start': 'false',
  'Arrow position/Above end/Arrow position/Above end-Bottom-center': 'false',
  'Arrow position/Above end/Arrow position/Above end-Bottom-end': 'false',
  'Arrow position/Before top/Arrow position/Before top-Above-start': 'false',
  'Arrow position/Before top/Arrow position/Before top-Above-middle': 'false',
  'Arrow position/Before top/Arrow position/Before top-Above-end': 'false',
  'Arrow position/Before top/Arrow position/Before top-Before-top': 'true',
  'Arrow position/Before top/Arrow position/Before top-Before-center': 'false',
  'Arrow position/Before top/Arrow position/Before top-Before-bottom': 'false',
  'Arrow position/Before top/Arrow position/Before top-After-top': 'false',
  'Arrow position/Before top/Arrow position/Before top-After-center': 'false',
  'Arrow position/Before top/Arrow position/Before top-After-bottom': 'false',
  'Arrow position/Before top/Arrow position/Before top-Bottom-start': 'false',
  'Arrow position/Before top/Arrow position/Before top-Bottom-center': 'false',
  'Arrow position/Before top/Arrow position/Before top-Bottom-end': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-Above-start': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-Above-middle': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-Above-end': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-Before-top': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-Before-center': 'true',
  'Arrow position/Before middle/Arrow position/Before middle-Before-bottom': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-After-top': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-After-center': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-After-bottom': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-Bottom-start': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-Bottom-center': 'false',
  'Arrow position/Before middle/Arrow position/Before middle-Bottom-end': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Above-start': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Above-middle': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Above-end': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Before-top': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Before-center': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Before-bottom': 'true',
  'Arrow position/Before bottom/Arrow position/Before bottom-After-top': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-After-center': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-After-bottom': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Bottom-start': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Bottom-center': 'false',
  'Arrow position/Before bottom/Arrow position/Before bottom-Bottom-end': 'false',
  'Arrow position/After top/Arrow position/After top-Above-start': 'false',
  'Arrow position/After top/Arrow position/After top-Above-middle': 'false',
  'Arrow position/After top/Arrow position/After top-Above-end': 'false',
  'Arrow position/After top/Arrow position/After top-Before-top': 'false',
  'Arrow position/After top/Arrow position/After top-Before-center': 'false',
  'Arrow position/After top/Arrow position/After top-Before-bottom': 'false',
  'Arrow position/After top/Arrow position/After top-After-top': 'true',
  'Arrow position/After top/Arrow position/After top-After-center': 'false',
  'Arrow position/After top/Arrow position/After top-After-bottom': 'false',
  'Arrow position/After top/Arrow position/After top-Bottom-start': 'false',
  'Arrow position/After top/Arrow position/After top-Bottom-center': 'false',
  'Arrow position/After top/Arrow position/After top-Bottom-end': 'false',
  'Arrow position/After middle/Arrow position/After middle-Above-start': 'false',
  'Arrow position/After middle/Arrow position/After middle-Above-middle': 'false',
  'Arrow position/After middle/Arrow position/After middle-Above-end': 'false',
  'Arrow position/After middle/Arrow position/After middle-Before-top': 'false',
  'Arrow position/After middle/Arrow position/After middle-Before-center': 'false',
  'Arrow position/After middle/Arrow position/After middle-Before-bottom': 'false',
  'Arrow position/After middle/Arrow position/After middle-After-top': 'false',
  'Arrow position/After middle/Arrow position/After middle-After-center': 'true',
  'Arrow position/After middle/Arrow position/After middle-After-bottom': 'false',
  'Arrow position/After middle/Arrow position/After middle-Bottom-start': 'false',
  'Arrow position/After middle/Arrow position/After middle-Bottom-center': 'false',
  'Arrow position/After middle/Arrow position/After middle-Bottom-end': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-Above-start': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-Above-middle': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-Above-end': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-Before-top': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-Before-center': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-Before-bottom': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-After-top': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-After-center': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-After-bottom': 'true',
  'Arrow position/After bottom/Arrow position/After bottom-Bottom-start': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-Bottom-center': 'false',
  'Arrow position/After bottom/Arrow position/After bottom-Bottom-end': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-Above-start': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-Above-middle': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-Above-end': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-Before-top': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-Before-center': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-Before-bottom': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-After-top': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-After-center': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-After-bottom': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-Bottom-start': 'true',
  'Arrow position/Bottom start/Arrow position/Bottom start-Bottom-center': 'false',
  'Arrow position/Bottom start/Arrow position/Bottom start-Bottom-end': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Above-start': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Above-middle': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Above-end': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Before-top': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Before-center': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Before-bottom': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-After-top': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-After-center': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-After-bottom': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Bottom-start': 'false',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Bottom-center': 'true',
  'Arrow position/Bottom middle/Arrow position/Bottom middle-Bottom-end': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Above-start': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Above-middle': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Above-end': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Before-top': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Before-center': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Before-bottom': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-After-top': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-After-center': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-After-bottom': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Bottom-start': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Bottom-center': 'false',
  'Arrow position/Bottom end/Arrow position/Bottom end-Bottom-end': 'true',
  'Arrow position/None/Arrow position/None-Above-start': 'false',
  'Arrow position/None/Arrow position/None-Above-middle': 'false',
  'Arrow position/None/Arrow position/None-Above-end': 'false',
  'Arrow position/None/Arrow position/None-Before-top': 'false',
  'Arrow position/None/Arrow position/None-Before-center': 'false',
  'Arrow position/None/Arrow position/None-Before-bottom': 'false',
  'Arrow position/None/Arrow position/None-After-top': 'false',
  'Arrow position/None/Arrow position/None-After-center': 'false',
  'Arrow position/None/Arrow position/None-After-bottom': 'false',
  'Arrow position/None/Arrow position/None-Bottom-start': 'false',
  'Arrow position/None/Arrow position/None-Bottom-center': 'false',
  'Arrow position/None/Arrow position/None-Bottom-end': 'false',
  'Typography/Base/Typography/Base-fontFamily-Base': 'Segoe UI',
  'Typography/Base/Typography/Base-fontWeight-Regular': 'Regular',
  'Typography/Base/Typography/Base-fontWeight-Semibold': 'Semibold',
  'Typography/Base/Typography/Base-fontWeight-Bold': 'Bold',
  'Typography/Base/Typography/Base-fontWeight-Semilight': 'Semilight',
  'Typography/Base/Typography/Base-fontWeight-Light': 'Light',
  'Popover size/Medium/Popover size/Medium-popover-padding-vertical': '{spacingVertical.LNudge}',
  'Popover size/Medium/Popover size/Medium-popover-padding-horizontal': '{spacingHorizontal.LNudge}',
  'Popover size/Small/Popover size/Small-popover-padding-vertical': '{spacingVertical.M}',
  'Popover size/Small/Popover size/Small-popover-padding-horizontal': '{spacingHorizontal.M}',
  'Popover size/Large/Popover size/Large-popover-padding-vertical': '{spacingVertical.XL}',
  'Popover size/Large/Popover size/Large-popover-padding-horizontal': '{spacingHorizontal.XL}',
  'Card padding/Medium/Card padding/Medium-card-horizontal': '{spacingHorizontal.M}',
  'Card padding/Medium/Card padding/Medium-card-vertical': '{spacingVertical.M}',
  'Card padding/Medium/Card padding/Medium-card-gap': '{spacingHorizontal.MNudge}',
  'Card padding/Medium/Card padding/Medium-card-corner-radius': '{borderRadius.Medium}',
  'Card padding/Small/Card padding/Small-card-horizontal': '{spacingHorizontal.S}',
  'Card padding/Small/Card padding/Small-card-vertical': '{spacingVertical.MNudge}',
  'Card padding/Small/Card padding/Small-card-gap': '{spacingHorizontal.MNudge}',
  'Card padding/Small/Card padding/Small-card-corner-radius': '{borderRadius.Medium}',
  'Card padding/Large/Card padding/Large-card-horizontal': '{spacingHorizontal.L}',
  'Card padding/Large/Card padding/Large-card-vertical': '{spacingVertical.L}',
  'Card padding/Large/Card padding/Large-card-gap': '{spacingHorizontal.M}',
  'Card padding/Large/Card padding/Large-card-corner-radius': '{borderRadius.Medium}',
  'Button shape/Rounded (Default)/Button shape/Rounded (Default)-button-corner-radius': '{borderRadius.Small}',
  'Button shape/Rounded (Default)/Button shape/Rounded (Default)-button-image-corner-radius': '{borderRadius.Small}',
  'Badge shape/Circular/Badge shape/Circular-badge-corner-radius': '{borderRadius.Circular}'
};

// Utility functions
export const convertHexToRgba = (hex: string): string => {
  if (hex === 'transparent') return 'rgba(0, 0, 0, 0)';
  if (hex.startsWith('rgba')) return hex;
  
  const hexColor = hex.replace('#', '');
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  const a = hexColor.length === 8 ? parseInt(hexColor.substring(6, 8), 16) / 255 : 1;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// Theme tokens object
export const brandThemeTokens = Object.entries(brandTheme).reduce((acc, [key, value]) => {
  if (value.startsWith('#')) {
    acc[key] = convertHexToRgba(value);
  } else {
    acc[key] = value;
  }
  return acc;
}, {} as Record<string, string>);
