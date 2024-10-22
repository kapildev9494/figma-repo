import { Theme } from '@fluentui/react-components';

interface BrandThemeExtension {
  // colorGlobal tokens
  'colorGlobal-Linear': string;

  // global tokens
  'global-Elevation-shadow2': string;
  'global-Elevation-shadow4': string;
  'global-Elevation-shadow8': string;
  'global-Elevation-shadow16': string;
  'global-Elevation-shadow28': string;
  'global-Elevation-shadow64': string;
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
  'global-caption2': string;
  'global-caption2Strong': string;
  'global-caption1': string;
  'global-caption1Strong': string;
  'global-caption1Stronger': string;
  'global-body1': string;
  'global-body1Strong': string;
  'global-body1Stronger': string;
  'global-body2Semilight': string;
  'global-body2': string;
  'global-body2Strong': string;
  'global-body2Stronger': string;
  'global-title4Light': string;
  'global-title4Semilight': string;
  'global-title4': string;
  'global-title4Strong': string;
  'global-title4Stronger': string;
  'global-title3Light': string;
  'global-title3Semilight': string;
  'global-title3': string;
  'global-title3Strong': string;
  'global-title3Stronger': string;
  'global-title2Light': string;
  'global-title2Semilight': string;
  'global-title2': string;
  'global-Title 2 Strong': string;
  'global-Title 2 Stronger': string;
  'global-Title 1': string;
  'global-title1Strong': string;
  'global-title1Stronger': string;
  'global-title1Light': string;
  'global-title1Semilight': string;
  'global-display3Strong': string;
  'global-display2Light': string;
  'global-display2Semilight': string;
  'global-display2': string;
  'global-display2Strong': string;
  'global-display2Stronger': string;
  'global-display1Light': string;
  'global-display1Semilight': string;
  'global-display1': string;
  'global-display1Strong': string;
  'global-display1Stronger': string;
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
  'global/global-lineHeights-0': string;
  'global/global-lineHeights-1': string;
  'global/global-lineHeights-2': string;
  'global/global-lineHeights-3': string;
  'global/global-lineHeights-4': string;
  'global/global-lineHeights-5': string;
  'global/global-lineHeights-6': string;
  'global/global-lineHeights-7': string;
  'global/global-lineHeights-8': string;
  'global/global-lineHeights-9': string;
  'global/global-lineHeights-10': string;
  'global/global-fontSize-0': string;
  'global/global-fontSize-1': string;
  'global/global-fontSize-2': string;
  'global/global-fontSize-3': string;
  'global/global-fontSize-4': string;
  'global/global-fontSize-5': string;
  'global/global-fontSize-6': string;
  'global/global-fontSize-7': string;
  'global/global-fontSize-8': string;
  'global/global-fontSize-9': string;
  'global/global-fontSize-10': string;
  'global/global-letterSpacing-1': string;
  'global/global-paragraphSpacing-0': string;
  'global/global-paragraphIndent-0': string;

  // colorTheme/Light tokens
  'colorTheme/Light-Neutral-Background-1-Rest': string;
  'colorTheme/Light-Neutral-Background-1-Hover': string;
  'colorTheme/Light-Neutral-Background-1-Pressed': string;
  'colorTheme/Light-Neutral-Background-1-Selected': string;
  'colorTheme/Light-Neutral-Background-2-Rest': string;
  'colorTheme/Light-Neutral-Background-3-Rest': string;
  'colorTheme/Light-Neutral-Background-3-Hover': string;
  'colorTheme/Light-Neutral-Background-3-Pressed': string;
  'colorTheme/Light-Neutral-Background-4-Rest': string;
  'colorTheme/Light-Neutral-Background-4-Hover': string;
  'colorTheme/Light-Neutral-Background-4-Pressed': string;
  'colorTheme/Light-Neutral-Background-5-Rest': string;
  'colorTheme/Light-Neutral-Background-6-Rest': string;
  'colorTheme/Light-Neutral-Background-Inverted-Rest': string;
  'colorTheme/Light-Neutral-Background-Inverted-Disabled-Rest': string;
  'colorTheme/Light-Neutral-Background-Alpha-1-Rest': string;
  'colorTheme/Light-Neutral-Background-Alpha-2-Rest': string;
  'colorTheme/Light-Neutral-Background-Static-Rest': string;
  'colorTheme/Light-Neutral-Background-Subtle-Rest': string;
  'colorTheme/Light-Neutral-Background-Subtle-Hover': string;
  'colorTheme/Light-Neutral-Background-Subtle-Pressed': string;
  'colorTheme/Light-Neutral-Background-Subtle-Selected': string;
  'colorTheme/Light-Neutral-Background-Subtle-Light alpha-Hover': string;
  'colorTheme/Light-Neutral-Background-Subtle-Light alpha-Pressed': string;
  'colorTheme/Light-Neutral-Background-Subtle-Light alpha-Selected': string;
  'colorTheme/Light-Neutral-Background-Subtle-Inverted-Rest': string;
  'colorTheme/Light-Neutral-Background-Subtle-Inverted-Hover': string;
  'colorTheme/Light-Neutral-Background-Subtle-Inverted-Pressed': string;
  'colorTheme/Light-Neutral-Background-Subtle-Inverted-Selected': string;
  'colorTheme/Light-Neutral-Background-Transparent-Rest': string;
  'colorTheme/Light-Neutral-Background-Transparent-Hover': string;
  'colorTheme/Light-Neutral-Background-Transparent-Pressed': string;
  'colorTheme/Light-Neutral-Background-Transparent-Selected': string;
  'colorTheme/Light-Neutral-Background-Disabled-Rest': string;
  'colorTheme/Light-Neutral-Background-Stencil-1-Rest': string;
  'colorTheme/Light-Neutral-Background-Stencil-2-Rest': string;
  'colorTheme/Light-Neutral-Background-Overlay-Rest': string;
  'colorTheme/Light-Neutral-Background-Overlay-Scrollbar-Rest': string;
  'colorTheme/Light-Neutral-Foreground-1-Rest primary text': string;
  'colorTheme/Light-Neutral-Foreground-1-Hover': string;
  'colorTheme/Light-Neutral-Foreground-1-Pressed': string;
  'colorTheme/Light-Neutral-Foreground-1-Selected': string;
  'colorTheme/Light-Neutral-Foreground-2-Rest secondary text': string;
  'colorTheme/Light-Neutral-Foreground-2-Hover': string;
  'colorTheme/Light-Neutral-Foreground-2-Pressed': string;
  'colorTheme/Light-Neutral-Foreground-2-Selected': string;
  'colorTheme/Light-Neutral-Foreground-2-Brand-Hover': string;
  'colorTheme/Light-Neutral-Foreground-2-Brand-Pressed': string;
  'colorTheme/Light-Neutral-Foreground-2-Brand-Selected': string;
  'colorTheme/Light-Neutral-Foreground-2-Brand-Rest': string;
  'colorTheme/Light-Neutral-Foreground-2-Link-Rest': string;
  'colorTheme/Light-Neutral-Foreground-2-Link-Hover': string;
  'colorTheme/Light-Neutral-Foreground-2-Link-Pressed': string;
  'colorTheme/Light-Neutral-Foreground-2-Link-Selected': string;
  'colorTheme/Light-Neutral-Foreground-4-Rest': string;
  'colorTheme/Light-Neutral-Foreground-Disabled-2-Rest': string;
  'colorTheme/Light-Neutral-Foreground-Disabled-Rest': string;
  'colorTheme/Light-Neutral-Foreground-Static-Inverted-Rest': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-1-Rest': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-1-Hover': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-1-Pressed': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-1-Selected': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-2-Rest': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-Disabled-Rest': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-Link-Rest': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-Link-Hover': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-Link-Pressed': string;
  'colorTheme/Light-Neutral-Foreground-Inverted-Link-Selected': string;
  'colorTheme/Light-Neutral-Foreground-On Brand-Rest': string;
  'colorTheme/Light-Neutral-Stroke-1-Rest': string;
  'colorTheme/Light-Neutral-Stroke-1-Hover': string;
  'colorTheme/Light-Neutral-Stroke-1-Pressed': string;
  'colorTheme/Light-Neutral-Stroke-1-Selected': string;
  'colorTheme/Light-Neutral-Stroke-2-Rest': string;
  'colorTheme/Light-Neutral-Stroke-3-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Alpha-1-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Alpha-2-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Subtle-Rest': string;
  'colorTheme/Light-Neutral-Stroke-on Brand-1-Rest': string;
  'colorTheme/Light-Neutral-Stroke-on Brand-2-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Accessible-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Accessible-Hover': string;
  'colorTheme/Light-Neutral-Stroke-Accessible-Pressed': string;
  'colorTheme/Light-Neutral-Stroke-Accessible-Selected': string;
  'colorTheme/Light-Neutral-Stroke-Focus-1-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Focus-2-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Transparent-Interactive-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Transparent-Disabled-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Transparent-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Disabled-Rest': string;
  'colorTheme/Light-Neutral-Stroke-Disabled-Inverted-Rest': string;
  'colorTheme/Light-Brand-Background-1-Rest': string;
  'colorTheme/Light-Brand-Background-1-Hover': string;
  'colorTheme/Light-Brand-Background-1-Pressed': string;
  'colorTheme/Light-Brand-Background-1-Selected': string;
  'colorTheme/Light-Brand-Background-2-Rest': string;
  'colorTheme/Light-Brand-Background-2-Hover': string;
  'colorTheme/Light-Brand-Background-2-Pressed': string;
  'colorTheme/Light-Brand-Background-3-Rest': string;
  'colorTheme/Light-Brand-Background-Inverted-Rest': string;
  'colorTheme/Light-Brand-Background-Inverted-Hover': string;
  'colorTheme/Light-Brand-Background-Inverted-Pressed': string;
  'colorTheme/Light-Brand-Background-Inverted-Selected': string;
  'colorTheme/Light-Brand-Background-Static-Rest': string;
  'colorTheme/Light-Brand-Background-Compound-Rest': string;
  'colorTheme/Light-Brand-Background-Compound-Hover': string;
  'colorTheme/Light-Brand-Background-Compound-Pressed': string;
  'colorTheme/Light-Brand-Foreground-1-Rest': string;
  'colorTheme/Light-Brand-Foreground-1-Hover': string;
  'colorTheme/Light-Brand-Foreground-1-Pressed': string;
  'colorTheme/Light-Brand-Foreground-1-Selected': string;
  'colorTheme/Light-Brand-Foreground-2-Rest': string;
  'colorTheme/Light-Brand-Foreground-2-Hover': string;
  'colorTheme/Light-Brand-Foreground-2-Pressed': string;
  'colorTheme/Light-Brand-Foreground-Link-Rest': string;
  'colorTheme/Light-Brand-Foreground-Link-Hover': string;
  'colorTheme/Light-Brand-Foreground-Link-Pressed': string;
  'colorTheme/Light-Brand-Foreground-Link-Selected': string;
  'colorTheme/Light-Brand-Foreground-Inverted-Rest': string;
  'colorTheme/Light-Brand-Foreground-Inverted-Hover': string;
  'colorTheme/Light-Brand-Foreground-Inverted-Pressed': string;
  'colorTheme/Light-Brand-Foreground-On Light-Rest': string;
  'colorTheme/Light-Brand-Foreground-On Light-Hover': string;
  'colorTheme/Light-Brand-Foreground-On Light-Pressed': string;
  'colorTheme/Light-Brand-Foreground-On Light-Selected': string;
  'colorTheme/Light-Brand-Foreground-Compound-Rest': string;
  'colorTheme/Light-Brand-Foreground-Compound-Hover': string;
  'colorTheme/Light-Brand-Foreground-Compound-Pressed': string;
  'colorTheme/Light-Brand-Stroke-1-Rest': string;
  'colorTheme/Light-Brand-Stroke-1-Hover': string;
  'colorTheme/Light-Brand-Stroke-1-Pressed': string;
  'colorTheme/Light-Brand-Stroke-1-Selected': string;
  'colorTheme/Light-Brand-Stroke-2-Rest': string;
  'colorTheme/Light-Brand-Stroke-2-Contrast-Rest': string;
  'colorTheme/Light-Brand-Stroke-3-Rest': string;
  'colorTheme/Light-Brand-Stroke-Compound-Rest': string;
  'colorTheme/Light-Brand-Stroke-Compound-Hover': string;
  'colorTheme/Light-Brand-Stroke-Compound-Pressed': string;
  'colorTheme/Light-Status-Danger-Background-1-Rest': string;
  'colorTheme/Light-Status-Danger-Background-3-Rest': string;
  'colorTheme/Light-Status-Danger-Foreground-1-Rest': string;
  'colorTheme/Light-Status-Danger-Foreground-3-Rest': string;
  'colorTheme/Light-Status-Danger-Stroke-1-Rest': string;
  'colorTheme/Light-Status-Danger-Stroke-2-Rest': string;
  'colorTheme/Light-Status-Success-Background-1-Rest': string;
  'colorTheme/Light-Status-Success-Background-3-Rest': string;
  'colorTheme/Light-Status-Success-Foreground-1-Rest': string;
  'colorTheme/Light-Status-Success-Foreground-3-Rest': string;
  'colorTheme/Light-Status-Success-Stroke-1-Rest': string;
  'colorTheme/Light-Status-Success-Stroke-2-Rest': string;
  'colorTheme/Light-Status-Warning-Background-1-Rest': string;
  'colorTheme/Light-Status-Warning-Background-3-Rest': string;
  'colorTheme/Light-Status-Warning-Foreground-1-Rest': string;
  'colorTheme/Light-Status-Warning-Foreground-3-Rest': string;
  'colorTheme/Light-Status-Warning-Stroke-1-Rest': string;
  'colorTheme/Light-Status-Warning-Stroke-2-Rest': string;
  'colorTheme/Light-Status-Oof-Foreground-3-Rest': string;
  'colorTheme/Light-Status-Away-Background-3-Rest': string;
  'colorTheme/Light-Status-Available-Foreground-3-Rest': string;
  'colorTheme/Light-Status-Generic-Anchor-Background-2-Rest': string;
  'colorTheme/Light-Status-Generic-Anchor-Foreground-2-Rest': string;
  'colorTheme/Light-Status-Generic-Anchor-Stroke-Active-Rest': string;
  'colorTheme/Light-Status-Generic-Information-Background-1-Rest': string;
  'colorTheme/Light-Status-Generic-Information-Background-1-Hover': string;
  'colorTheme/Light-Status-Generic-Information-Background-1-Pressed': string;
  'colorTheme/Light-Status-Generic-Information-Stroke-1-Rest': string;
  'colorTheme/Light-Status-Generic-Information-Stroke-2-Rest': string;
  'colorTheme/Light-Status-Generic-Information-Stroke-2-Hover': string;
  'colorTheme/Light-Status-Generic-Information-Stroke-2-Pressed': string;
  'colorTheme/Light-Status-Generic-Information-Foreground-Rest': string;
  'colorTheme/Light-Status-Generic-Information-Foreground-Hover': string;
  'colorTheme/Light-Status-Generic-Information-Foreground-Pressed': string;
  'colorTheme/Light-Status-Severe-Background-1-Rest': string;
  'colorTheme/Light-Status-Severe-Background-3-Rest': string;
  'colorTheme/Light-Status-Severe-Foreground-1-Rest': string;
  'colorTheme/Light-Status-Severe-Foreground-3-Rest': string;
  'colorTheme/Light-Status-Severe-Stroke-1-Rest': string;
  'colorTheme/Light-Status-Severe-Stroke-2-Rest': string;
  'colorTheme/Light-Shadow-ambient': string;
  'colorTheme/Light-Shadow-ambient-lighter': string;
  'colorTheme/Light-Shadow-ambient-darker': string;
  'colorTheme/Light-Shadow-brand-ambient': string;
  'colorTheme/Light-Shadow-key': string;
  'colorTheme/Light-Shadow-key-lighter': string;
  'colorTheme/Light-Shadow-key-darker': string;
  'colorTheme/Light-Shadow-brand-key': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Categorical': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Data': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Blue': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Gray': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Red': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Teal': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Ocean': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Green': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Yellow300': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Blue400': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Gray400': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Red400': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Teal300': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Red300': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Teal400': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Ocean400': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Green400': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Yellow400': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Green300': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Gray300': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Blue200': string;
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Ocean200': string;
  'colorTheme/Light-Data viz-Foreground-Accessibility-Text dark bkgd': string;
  'colorTheme/Light-Data viz-Foreground-Accessibility-Text light bkgd': string;
  'colorTheme/Light-Data viz-Foreground-KPI Card-Text dark bkgd': string;
  'colorTheme/Light-Data viz-Foreground-KPI Card-Text light bkgd': string;
  'colorTheme/Light-Data viz-Stroke-Gridline': string;
  'colorTheme/Light-Data viz-Stroke-Axis-Target-Benchmark': string;
  'colorTheme/Light-Data viz-Stroke-Color-Blue': string;
  'colorTheme/Light-Data viz-Stroke-Color-Blue400': string;
  'colorTheme/Light-Data viz-Stroke-Color-Gray': string;
  'colorTheme/Light-Data viz-Stroke-Color-Gray400': string;
  'colorTheme/Light-Data viz-Stroke-Color-Red': string;
  'colorTheme/Light-Data viz-Stroke-Color-Red300': string;
  'colorTheme/Light-Data viz-Stroke-Color-Red400': string;
  'colorTheme/Light-Data viz-Stroke-Color-Teal': string;
  'colorTheme/Light-Data viz-Stroke-Color-Teal300': string;
  'colorTheme/Light-Data viz-Stroke-Color-Teal400': string;
  'colorTheme/Light-Data viz-Stroke-Color-Ocean': string;
  'colorTheme/Light-Data viz-Stroke-Color-Ocean400': string;
  'colorTheme/Light-Data viz-Stroke-Color-Green': string;
  'colorTheme/Light-Data viz-Stroke-Color-Green300': string;
  'colorTheme/Light-Data viz-Stroke-Color-Green400': string;
  'colorTheme/Light-Data viz-Stroke-Color-Yellow300': string;
  'colorTheme/Light-Data viz-Stroke-Color-Yellow400': string;
  'colorTheme/Light-Data viz-Stroke-Color-Gray300': string;
  'colorTheme/Light-Data viz-Stroke-Color-Blue200': string;
  'colorTheme/Light-Data viz-Stroke-Color-Ocean200': string;
  'colorTheme/Light-Data viz-Stroke-Color-Yellow': string;
  'colorTheme/Light-Data viz-Stroke-Trend-Average': string;
  'colorTheme/Light-Data viz-Stroke-Accessible outline': string;
  'colorTheme/Light-Data viz-Semantic-Foreground-Light bkgd-Positive': string;
  'colorTheme/Light-Data viz-Semantic-Foreground-Light bkgd-Negative': string;
  'colorTheme/Light-Data viz-Semantic-Foreground-Light bkgd-Notice': string;
  'colorTheme/Light-Data viz-Semantic-Foreground-Dark bkgd-Positive': string;
  'colorTheme/Light-Data viz-Semantic-Foreground-Dark bkgd-Negative': string;
  'colorTheme/Light-Data viz-Semantic-Foreground-Dark bkgd-Notice': string;
  'colorTheme/Light-Data viz-Semantic-Stroke-Light bkgd-Positive': string;
  'colorTheme/Light-Data viz-Semantic-Stroke-Light bkgd-Negative': string;
  'colorTheme/Light-Data viz-Semantic-Stroke-Light bkgd-Notice': string;
  'colorTheme/Light-Data viz-Semantic-Stroke-Dark bkgd-Positive': string;
  'colorTheme/Light-Data viz-Semantic-Stroke-Dark bkgd-Negative': string;
  'colorTheme/Light-Data viz-Semantic-Stroke-Dark bkgd-Notice': string;
  'colorTheme/Light-Data viz-Semantic-Background-Positive': string;
  'colorTheme/Light-Data viz-Semantic-Background-Negative': string;
  'colorTheme/Light-Data viz-Semantic-Background-Notice': string;
  'colorTheme/Light-Data viz-Background-Core-Blue': string;
  'colorTheme/Light-Data viz-Background-Core-Gray': string;
  'colorTheme/Light-Data viz-Background-Core-Red': string;
  'colorTheme/Light-Data viz-Background-Core-Teal': string;
  'colorTheme/Light-Data viz-Background-Core-Ocean': string;
  'colorTheme/Light-Data viz-Background-Core-Green': string;
  'colorTheme/Light-Data viz-Background-Core-Yellow': string;
  'colorTheme/Light-Data viz-Background-Sequential-Blue400': string;
  'colorTheme/Light-Data viz-Background-Sequential-Gray400': string;
  'colorTheme/Light-Data viz-Background-Sequential-Red300': string;
  'colorTheme/Light-Data viz-Background-Sequential-Red400': string;
  'colorTheme/Light-Data viz-Background-Sequential-Teal300': string;
  'colorTheme/Light-Data viz-Background-Sequential-Teal400': string;
  'colorTheme/Light-Data viz-Background-Sequential-Ocean400': string;
  'colorTheme/Light-Data viz-Background-Sequential-Green300': string;
  'colorTheme/Light-Data viz-Background-Sequential-Green400': string;
  'colorTheme/Light-Data viz-Background-Sequential-Yellow300': string;
  'colorTheme/Light-Data viz-Background-Sequential-Yellow400': string;
  'colorTheme/Light-Data viz-Background-Sequential-Blue300': string;
  'colorTheme/Light-Data viz-Background-Sequential-Blue200': string;
  'colorTheme/Light-Data viz-Background-Sequential-Blue100': string;
  'colorTheme/Light-Data viz-Background-Sequential-Gray300': string;
  'colorTheme/Light-Data viz-Background-Sequential-Gray200': string;
  'colorTheme/Light-Data viz-Background-Sequential-Gray100': string;
  'colorTheme/Light-Data viz-Background-Sequential-Red200': string;
  'colorTheme/Light-Data viz-Background-Sequential-Red100': string;
  'colorTheme/Light-Data viz-Background-Sequential-Teal200': string;
  'colorTheme/Light-Data viz-Background-Sequential-Teal100': string;
  'colorTheme/Light-Data viz-Background-Sequential-Ocean300': string;
  'colorTheme/Light-Data viz-Background-Sequential-Ocean200': string;
  'colorTheme/Light-Data viz-Background-Sequential-Ocean100': string;
  'colorTheme/Light-Data viz-Background-Sequential-Green200': string;
  'colorTheme/Light-Data viz-Background-Sequential-Green100': string;
  'colorTheme/Light-Data viz-Background-Sequential-Yellow200': string;
  'colorTheme/Light-Data viz-Background-Sequential-Yellow100': string;
  'colorTheme/Light-Data viz-Background-Neutral-Black': string;

  // Theme/Light tokens
  'Theme/Light-Control logic-Theme switch': string;

  // colorTheme/Dark tokens
  'colorTheme/Dark-Neutral-Background-1-Rest': string;
  'colorTheme/Dark-Neutral-Background-1-Hover': string;
  'colorTheme/Dark-Neutral-Background-1-Pressed': string;
  'colorTheme/Dark-Neutral-Background-1-Selected': string;
  'colorTheme/Dark-Neutral-Background-2-Rest': string;
  'colorTheme/Dark-Neutral-Background-3-Rest': string;
  'colorTheme/Dark-Neutral-Background-3-Hover': string;
  'colorTheme/Dark-Neutral-Background-3-Pressed': string;
  'colorTheme/Dark-Neutral-Background-4-Rest': string;
  'colorTheme/Dark-Neutral-Background-4-Hover': string;
  'colorTheme/Dark-Neutral-Background-4-Pressed': string;
  'colorTheme/Dark-Neutral-Background-5-Rest': string;
  'colorTheme/Dark-Neutral-Background-6-Rest': string;
  'colorTheme/Dark-Neutral-Background-Inverted-Rest': string;
  'colorTheme/Dark-Neutral-Background-Inverted-Disabled-Rest': string;
  'colorTheme/Dark-Neutral-Background-Alpha-1-Rest': string;
  'colorTheme/Dark-Neutral-Background-Alpha-2-Rest': string;
  'colorTheme/Dark-Neutral-Background-Static-Rest': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Rest': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Hover': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Pressed': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Selected': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Light alpha-Hover': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Light alpha-Pressed': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Light alpha-Selected': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Inverted-Rest': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Inverted-Hover': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Inverted-Pressed': string;
  'colorTheme/Dark-Neutral-Background-Subtle-Inverted-Selected': string;
  'colorTheme/Dark-Neutral-Background-Transparent-Rest': string;
  'colorTheme/Dark-Neutral-Background-Transparent-Hover': string;
  'colorTheme/Dark-Neutral-Background-Transparent-Pressed': string;
  'colorTheme/Dark-Neutral-Background-Transparent-Selected': string;
  'colorTheme/Dark-Neutral-Background-Disabled-Rest': string;
  'colorTheme/Dark-Neutral-Background-Stencil-1-Rest': string;
  'colorTheme/Dark-Neutral-Background-Stencil-2-Rest': string;
  'colorTheme/Dark-Neutral-Background-Overlay-Rest': string;
  'colorTheme/Dark-Neutral-Background-Overlay-Scrollbar-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-1-Rest primary text': string;
  'colorTheme/Dark-Neutral-Foreground-1-Hover': string;
  'colorTheme/Dark-Neutral-Foreground-1-Pressed': string;
  'colorTheme/Dark-Neutral-Foreground-1-Selected': string;
  'colorTheme/Dark-Neutral-Foreground-2-Rest secondary text': string;
  'colorTheme/Dark-Neutral-Foreground-2-Hover': string;
  'colorTheme/Dark-Neutral-Foreground-2-Pressed': string;
  'colorTheme/Dark-Neutral-Foreground-2-Selected': string;
  'colorTheme/Dark-Neutral-Foreground-2-Brand-Hover': string;
  'colorTheme/Dark-Neutral-Foreground-2-Brand-Pressed': string;
  'colorTheme/Dark-Neutral-Foreground-2-Brand-Selected': string;
  'colorTheme/Dark-Neutral-Foreground-2-Brand-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-2-Link-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-2-Link-Hover': string;
  'colorTheme/Dark-Neutral-Foreground-2-Link-Pressed': string;
  'colorTheme/Dark-Neutral-Foreground-2-Link-Selected': string;
  'colorTheme/Dark-Neutral-Foreground-4-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-Disabled-2-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-Disabled-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-Static-Inverted-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-1-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-1-Hover': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-1-Pressed': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-1-Selected': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-2-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-Disabled-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-Link-Rest': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-Link-Hover': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-Link-Pressed': string;
  'colorTheme/Dark-Neutral-Foreground-Inverted-Link-Selected': string;
  'colorTheme/Dark-Neutral-Foreground-On Brand-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-1-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-1-Hover': string;
  'colorTheme/Dark-Neutral-Stroke-1-Pressed': string;
  'colorTheme/Dark-Neutral-Stroke-1-Selected': string;
  'colorTheme/Dark-Neutral-Stroke-2-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-3-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Alpha-1-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Alpha-2-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Subtle-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-on Brand-1-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-on Brand-2-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Accessible-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Accessible-Hover': string;
  'colorTheme/Dark-Neutral-Stroke-Accessible-Pressed': string;
  'colorTheme/Dark-Neutral-Stroke-Accessible-Selected': string;
  'colorTheme/Dark-Neutral-Stroke-Focus-1-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Focus-2-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Transparent-Interactive-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Transparent-Disabled-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Transparent-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Disabled-Rest': string;
  'colorTheme/Dark-Neutral-Stroke-Disabled-Inverted-Rest': string;
  'colorTheme/Dark-Brand-Background-1-Rest': string;
  'colorTheme/Dark-Brand-Background-1-Hover': string;
  'colorTheme/Dark-Brand-Background-1-Pressed': string;
  'colorTheme/Dark-Brand-Background-1-Selected': string;
  'colorTheme/Dark-Brand-Background-2-Rest': string;
  'colorTheme/Dark-Brand-Background-2-Hover': string;
  'colorTheme/Dark-Brand-Background-2-Pressed': string;
  'colorTheme/Dark-Brand-Background-3-Rest': string;
  'colorTheme/Dark-Brand-Background-Inverted-Rest': string;
  'colorTheme/Dark-Brand-Background-Inverted-Hover': string;
  'colorTheme/Dark-Brand-Background-Inverted-Pressed': string;
  'colorTheme/Dark-Brand-Background-Inverted-Selected': string;
  'colorTheme/Dark-Brand-Background-Static-Rest': string;
  'colorTheme/Dark-Brand-Background-Compound-Rest': string;
  'colorTheme/Dark-Brand-Background-Compound-Hover': string;
  'colorTheme/Dark-Brand-Background-Compound-Pressed': string;
  'colorTheme/Dark-Brand-Foreground-1-Rest': string;
  'colorTheme/Dark-Brand-Foreground-1-Hover': string;
  'colorTheme/Dark-Brand-Foreground-1-Pressed': string;
  'colorTheme/Dark-Brand-Foreground-1-Selected': string;
  'colorTheme/Dark-Brand-Foreground-2-Rest': string;
  'colorTheme/Dark-Brand-Foreground-2-Hover': string;
  'colorTheme/Dark-Brand-Foreground-2-Pressed': string;
  'colorTheme/Dark-Brand-Foreground-Link-Rest': string;
  'colorTheme/Dark-Brand-Foreground-Link-Hover': string;
  'colorTheme/Dark-Brand-Foreground-Link-Pressed': string;
  'colorTheme/Dark-Brand-Foreground-Link-Selected': string;
  'colorTheme/Dark-Brand-Foreground-Inverted-Rest': string;
  'colorTheme/Dark-Brand-Foreground-Inverted-Hover': string;
  'colorTheme/Dark-Brand-Foreground-Inverted-Pressed': string;
  'colorTheme/Dark-Brand-Foreground-On Light-Rest': string;
  'colorTheme/Dark-Brand-Foreground-On Light-Hover': string;
  'colorTheme/Dark-Brand-Foreground-On Light-Pressed': string;
  'colorTheme/Dark-Brand-Foreground-On Light-Selected': string;
  'colorTheme/Dark-Brand-Foreground-Compound-Rest': string;
  'colorTheme/Dark-Brand-Foreground-Compound-Hover': string;
  'colorTheme/Dark-Brand-Foreground-Compound-Pressed': string;
  'colorTheme/Dark-Brand-Stroke-1-Rest': string;
  'colorTheme/Dark-Brand-Stroke-1-Hover': string;
  'colorTheme/Dark-Brand-Stroke-1-Pressed': string;
  'colorTheme/Dark-Brand-Stroke-1-Selected': string;
  'colorTheme/Dark-Brand-Stroke-2-Rest': string;
  'colorTheme/Dark-Brand-Stroke-2-Contrast-Rest': string;
  'colorTheme/Dark-Brand-Stroke-3-Rest': string;
  'colorTheme/Dark-Brand-Stroke-Compound-Rest': string;
  'colorTheme/Dark-Brand-Stroke-Compound-Hover': string;
  'colorTheme/Dark-Brand-Stroke-Compound-Pressed': string;
  'colorTheme/Dark-Status-Danger-Background-1-Rest': string;
  'colorTheme/Dark-Status-Danger-Background-3-Rest': string;
  'colorTheme/Dark-Status-Danger-Foreground-1-Rest': string;
  'colorTheme/Dark-Status-Danger-Foreground-3-Rest': string;
  'colorTheme/Dark-Status-Danger-Stroke-1-Rest': string;
  'colorTheme/Dark-Status-Danger-Stroke-2-Rest': string;
  'colorTheme/Dark-Status-Success-Background-1-Rest': string;
  'colorTheme/Dark-Status-Success-Background-3-Rest': string;
  'colorTheme/Dark-Status-Success-Foreground-1-Rest': string;
  'colorTheme/Dark-Status-Success-Foreground-3-Rest': string;
  'colorTheme/Dark-Status-Success-Stroke-1-Rest': string;
  'colorTheme/Dark-Status-Success-Stroke-2-Rest': string;
  'colorTheme/Dark-Status-Warning-Background-1-Rest': string;
  'colorTheme/Dark-Status-Warning-Background-3-Rest': string;
  'colorTheme/Dark-Status-Warning-Foreground-1-Rest': string;
  'colorTheme/Dark-Status-Warning-Foreground-3-Rest': string;
  'colorTheme/Dark-Status-Warning-Stroke-1-Rest': string;
  'colorTheme/Dark-Status-Warning-Stroke-2-Rest': string;
  'colorTheme/Dark-Status-Oof-Foreground-3-Rest': string;
  'colorTheme/Dark-Status-Away-Background-3-Rest': string;
  'colorTheme/Dark-Status-Available-Foreground-3-Rest': string;
  'colorTheme/Dark-Status-Generic-Anchor-Background-2-Rest': string;
  'colorTheme/Dark-Status-Generic-Anchor-Foreground-2-Rest': string;
  'colorTheme/Dark-Status-Generic-Anchor-Stroke-Active-Rest': string;
  'colorTheme/Dark-Status-Generic-Information-Background-1-Rest': string;
  'colorTheme/Dark-Status-Generic-Information-Background-1-Hover': string;
  'colorTheme/Dark-Status-Generic-Information-Background-1-Pressed': string;
  'colorTheme/Dark-Status-Generic-Information-Stroke-1-Rest': string;
  'colorTheme/Dark-Status-Generic-Information-Stroke-2-Rest': string;
  'colorTheme/Dark-Status-Generic-Information-Stroke-2-Hover': string;
  'colorTheme/Dark-Status-Generic-Information-Stroke-2-Pressed': string;
  'colorTheme/Dark-Status-Generic-Information-Foreground-Rest': string;
  'colorTheme/Dark-Status-Generic-Information-Foreground-Hover': string;
  'colorTheme/Dark-Status-Generic-Information-Foreground-Pressed': string;
  'colorTheme/Dark-Status-Severe-Background-1-Rest': string;
  'colorTheme/Dark-Status-Severe-Background-3-Rest': string;
  'colorTheme/Dark-Status-Severe-Foreground-1-Rest': string;
  'colorTheme/Dark-Status-Severe-Foreground-3-Rest': string;
  'colorTheme/Dark-Status-Severe-Stroke-1-Rest': string;
  'colorTheme/Dark-Status-Severe-Stroke-2-Rest': string;
  'colorTheme/Dark-Shadow-ambient': string;
  'colorTheme/Dark-Shadow-ambient-lighter': string;
  'colorTheme/Dark-Shadow-ambient-darker': string;
  'colorTheme/Dark-Shadow-brand-ambient': string;
  'colorTheme/Dark-Shadow-key': string;
  'colorTheme/Dark-Shadow-key-lighter': string;
  'colorTheme/Dark-Shadow-key-darker': string;
  'colorTheme/Dark-Shadow-brand-key': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Categorical': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Data': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Blue': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Gray': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Red': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Teal': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Ocean': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Green': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Yellow300': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Blue400': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Gray400': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Red400': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Teal300': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Red300': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Teal400': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Ocean400': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Green400': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Yellow400': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Green300': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Gray300': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Blue200': string;
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Ocean200': string;
  'colorTheme/Dark-Data viz-Foreground-Accessibility-Text dark bkgd': string;
  'colorTheme/Dark-Data viz-Foreground-Accessibility-Text light bkgd': string;
  'colorTheme/Dark-Data viz-Foreground-KPI Card-Text dark bkgd': string;
  'colorTheme/Dark-Data viz-Foreground-KPI Card-Text light bkgd': string;
  'colorTheme/Dark-Data viz-Stroke-Gridline': string;
  'colorTheme/Dark-Data viz-Stroke-Axis-Target-Benchmark': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Blue': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Blue400': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Gray': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Gray400': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Red': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Red300': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Red400': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Teal': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Teal300': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Teal400': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Ocean': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Ocean400': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Green': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Green300': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Green400': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Yellow300': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Yellow400': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Gray300': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Blue200': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Ocean200': string;
  'colorTheme/Dark-Data viz-Stroke-Color-Yellow': string;
  'colorTheme/Dark-Data viz-Stroke-Trend-Average': string;
  'colorTheme/Dark-Data viz-Stroke-Accessible outline': string;
  'colorTheme/Dark-Data viz-Semantic-Foreground-Light bkgd-Positive': string;
  'colorTheme/Dark-Data viz-Semantic-Foreground-Light bkgd-Negative': string;
  'colorTheme/Dark-Data viz-Semantic-Foreground-Light bkgd-Notice': string;
  'colorTheme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Positive': string;
  'colorTheme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Negative': string;
  'colorTheme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Notice': string;
  'colorTheme/Dark-Data viz-Semantic-Stroke-Light bkgd-Positive': string;
  'colorTheme/Dark-Data viz-Semantic-Stroke-Light bkgd-Negative': string;
  'colorTheme/Dark-Data viz-Semantic-Stroke-Light bkgd-Notice': string;
  'colorTheme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Positive': string;
  'colorTheme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Negative': string;
  'colorTheme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Notice': string;
  'colorTheme/Dark-Data viz-Semantic-Background-Positive': string;
  'colorTheme/Dark-Data viz-Semantic-Background-Negative': string;
  'colorTheme/Dark-Data viz-Semantic-Background-Notice': string;
  'colorTheme/Dark-Data viz-Background-Core-Blue': string;
  'colorTheme/Dark-Data viz-Background-Core-Gray': string;
  'colorTheme/Dark-Data viz-Background-Core-Red': string;
  'colorTheme/Dark-Data viz-Background-Core-Teal': string;
  'colorTheme/Dark-Data viz-Background-Core-Ocean': string;
  'colorTheme/Dark-Data viz-Background-Core-Green': string;
  'colorTheme/Dark-Data viz-Background-Core-Yellow': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Blue400': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Gray400': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Red300': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Red400': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Teal300': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Teal400': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Ocean400': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Green300': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Green400': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Yellow300': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Yellow400': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Blue300': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Blue200': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Blue100': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Gray300': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Gray200': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Gray100': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Red200': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Red100': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Teal200': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Teal100': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Ocean300': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Ocean200': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Ocean100': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Green200': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Green100': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Yellow200': string;
  'colorTheme/Dark-Data viz-Background-Sequential-Yellow100': string;
  'colorTheme/Dark-Data viz-Background-Neutral-Black': string;

  // Theme/Dark tokens
  'Theme/Dark-Control logic-Theme switch': string;

  // colorGlobal/Value tokens
  'colorGlobal/Value-Colors-Neutral-Black': string;
  'colorGlobal/Value-Colors-Neutral-Grey-6': string;
  'colorGlobal/Value-Colors-Neutral-Grey-8': string;
  'colorGlobal/Value-Colors-Neutral-Grey-10': string;
  'colorGlobal/Value-Colors-Neutral-Grey-12': string;
  'colorGlobal/Value-Colors-Neutral-Grey-20': string;
  'colorGlobal/Value-Colors-Neutral-Grey-30': string;
  'colorGlobal/Value-Colors-Neutral-Grey-40': string;
  'colorGlobal/Value-Colors-Neutral-Grey-50': string;
  'colorGlobal/Value-Colors-Neutral-Grey-60': string;
  'colorGlobal/Value-Colors-Neutral-Grey-70': string;
  'colorGlobal/Value-Colors-Neutral-Grey-80': string;
  'colorGlobal/Value-Colors-Neutral-Grey-90': string;
  'colorGlobal/Value-Colors-Neutral-White': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Primary': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Cranberry-Primary': string;
  'colorGlobal/Value-Colors-Shared-Cranberry-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Cranberry-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Red-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Red-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Red-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Red-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Red-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Red-Primary': string;
  'colorGlobal/Value-Colors-Shared-Red-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Red-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Red-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Red-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Red-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Red-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Dark Orange-Primary': string;
  'colorGlobal/Value-Colors-Shared-Dark Orange-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Dark Orange-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Primary': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Orange-Primary': string;
  'colorGlobal/Value-Colors-Shared-Orange-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Orange-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Peach-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Peach-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Peach-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Peach-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Peach-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Peach-Primary': string;
  'colorGlobal/Value-Colors-Shared-Peach-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Peach-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Peach-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Peach-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Peach-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Peach-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Primary': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Primary': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Gold-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Gold-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Gold-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Gold-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Gold-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Gold-Primary': string;
  'colorGlobal/Value-Colors-Shared-Gold-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Gold-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Gold-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Gold-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Gold-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Gold-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Brass-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Brass-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Brass-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Brass-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Brass-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Brass-Primary': string;
  'colorGlobal/Value-Colors-Shared-Brass-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Brass-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Brass-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Brass-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Brass-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Brass-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Brown-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Brown-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Brown-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Brown-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Brown-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Brown-Primary': string;
  'colorGlobal/Value-Colors-Shared-Brown-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Brown-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Brown-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Brown-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Brown-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Brown-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Primary': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Lime-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Lime-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Lime-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Lime-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Lime-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Lime-Primary': string;
  'colorGlobal/Value-Colors-Shared-Lime-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Lime-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Lime-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Lime-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Lime-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Lime-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Forest-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Forest-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Forest-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Forest-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Forest-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Forest-Primary': string;
  'colorGlobal/Value-Colors-Shared-Forest-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Forest-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Forest-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Forest-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Forest-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Forest-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Primary': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Light green-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Light green-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Light green-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Light green-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Light green-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Light green-Primary': string;
  'colorGlobal/Value-Colors-Shared-Light green-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Light green-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Light green-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Light green-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Light green-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Light green-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Green-Primary': string;
  'colorGlobal/Value-Colors-Shared-Green-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Green-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Primary': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Primary': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Teal-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Teal-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Teal-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Teal-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Teal-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Teal-Primary': string;
  'colorGlobal/Value-Colors-Shared-Teal-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Teal-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Teal-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Teal-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Teal-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Teal-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Primary': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Primary': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Steel-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Steel-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Steel-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Steel-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Steel-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Steel-Primary': string;
  'colorGlobal/Value-Colors-Shared-Steel-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Steel-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Steel-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Steel-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Steel-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Steel-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Primary': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Blue-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Blue-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Blue-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Blue-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Blue-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Blue-Primary': string;
  'colorGlobal/Value-Colors-Shared-Blue-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Blue-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Blue-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Blue-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Blue-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Blue-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Primary': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Primary': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Primary': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Navy-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Navy-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Navy-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Navy-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Navy-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Navy-Primary': string;
  'colorGlobal/Value-Colors-Shared-Navy-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Navy-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Navy-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Navy-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Navy-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Navy-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Primary': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Purple-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Purple-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Purple-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Purple-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Purple-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Purple-Primary': string;
  'colorGlobal/Value-Colors-Shared-Purple-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Purple-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Purple-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Purple-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Purple-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Purple-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Primary': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Primary': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Grape-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Grape-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Grape-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Grape-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Grape-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Grape-Primary': string;
  'colorGlobal/Value-Colors-Shared-Grape-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Grape-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Grape-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Grape-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Grape-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Grape-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Berry-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Berry-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Berry-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Berry-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Berry-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Berry-Primary': string;
  'colorGlobal/Value-Colors-Shared-Berry-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Berry-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Berry-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Berry-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Berry-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Berry-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Primary': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Pink-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Pink-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Pink-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Pink-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Pink-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Pink-Primary': string;
  'colorGlobal/Value-Colors-Shared-Pink-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Pink-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Pink-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Pink-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Pink-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Pink-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Primary': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Primary': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Plum-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Plum-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Plum-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Plum-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Plum-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Plum-Primary': string;
  'colorGlobal/Value-Colors-Shared-Plum-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Plum-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Plum-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Plum-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Plum-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Plum-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Beige-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Beige-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Beige-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Beige-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Beige-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Beige-Primary': string;
  'colorGlobal/Value-Colors-Shared-Beige-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Beige-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Beige-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Beige-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Beige-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Beige-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Mink-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Mink-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Mink-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Mink-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Mink-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Mink-Primary': string;
  'colorGlobal/Value-Colors-Shared-Mink-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Mink-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Mink-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Mink-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Mink-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Mink-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Silver-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Silver-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Silver-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Silver-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Silver-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Silver-Primary': string;
  'colorGlobal/Value-Colors-Shared-Silver-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Silver-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Silver-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Silver-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Silver-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Silver-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Primary': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Primary': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 50': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 40': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 30': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 20': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Primary': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Information-Primary': string;
  'colorGlobal/Value-Colors-Shared-Information-Tint 30': string;
  'colorGlobal/Value-Colors-Shared-Information-Tint 60': string;
  'colorGlobal/Value-Colors-Shared-Information-Tint 40': string;
  'colorGlobal/Value-Colors-Shared-Information-Tint 50': string;
  'colorGlobal/Value-Colors-Shared-Information-Tint 20': string;
  'colorGlobal/Value-Colors-Shared-Information-Tint 10': string;
  'colorGlobal/Value-Colors-Shared-Information-Shade 10': string;
  'colorGlobal/Value-Colors-Shared-Information-Shade 20': string;
  'colorGlobal/Value-Colors-Alpha-White-0': string;
  'colorGlobal/Value-Colors-Alpha-White-5': string;
  'colorGlobal/Value-Colors-Alpha-White-10': string;
  'colorGlobal/Value-Colors-Alpha-White-20': string;
  'colorGlobal/Value-Colors-Alpha-White-30': string;
  'colorGlobal/Value-Colors-Alpha-White-40': string;
  'colorGlobal/Value-Colors-Alpha-White-50': string;
  'colorGlobal/Value-Colors-Alpha-White-60': string;
  'colorGlobal/Value-Colors-Alpha-White-70': string;
  'colorGlobal/Value-Colors-Alpha-White-80': string;
  'colorGlobal/Value-Colors-Alpha-White-90': string;
  'colorGlobal/Value-Colors-Alpha-Black-0': string;
  'colorGlobal/Value-Colors-Alpha-Black-5': string;
  'colorGlobal/Value-Colors-Alpha-Black-10': string;
  'colorGlobal/Value-Colors-Alpha-Black-20': string;
  'colorGlobal/Value-Colors-Alpha-Black-30': string;
  'colorGlobal/Value-Colors-Alpha-Black-40': string;
  'colorGlobal/Value-Colors-Alpha-Black-50': string;
  'colorGlobal/Value-Colors-Alpha-Black-60': string;
  'colorGlobal/Value-Colors-Alpha-Black-70': string;
  'colorGlobal/Value-Colors-Alpha-Black-80': string;
  'colorGlobal/Value-Colors-Alpha-Black-90': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-5': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-10': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-20': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-30': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-40': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-50': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-60': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-70': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-80': string;
  'colorGlobal/Value-Colors-Alpha-Brand-10-90': string;
  'colorGlobal/Value-Colors-Data viz-Core-Blue': string;
  'colorGlobal/Value-Colors-Data viz-Core-Gray': string;
  'colorGlobal/Value-Colors-Data viz-Core-Red': string;
  'colorGlobal/Value-Colors-Data viz-Core-Teal': string;
  'colorGlobal/Value-Colors-Data viz-Core-Ocean': string;
  'colorGlobal/Value-Colors-Data viz-Core-Green': string;
  'colorGlobal/Value-Colors-Data viz-Core-Yellow': string;
  'colorGlobal/Value-Colors-Data viz-Semantic-Light bkgd-Positive': string;
  'colorGlobal/Value-Colors-Data viz-Semantic-Light bkgd-Notice': string;
  'colorGlobal/Value-Colors-Data viz-Semantic-Light bkgd-Negative': string;
  'colorGlobal/Value-Colors-Data viz-Semantic-Dark bkgd-Positive': string;
  'colorGlobal/Value-Colors-Data viz-Semantic-Dark bkgd-Negative': string;
  'colorGlobal/Value-Colors-Data viz-Semantic-Dark bkgd-Notice': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Blue400': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Blue300': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Blue200': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Blue100': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Gray400': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Gray300': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Gray200': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Gray100': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Red400': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Red300': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Red200': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Red100': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Teal400': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Teal300': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Teal200': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Teal100': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Ocean400': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Ocean300': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Ocean200': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Ocean100': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Green400': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Green300': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Green200': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Green100': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Yellow400': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Yellow300': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Yellow200': string;
  'colorGlobal/Value-Colors-Data viz-Sequential-Yellow100': string;
  'colorGlobal/Value-Colors-Brand-Brand-10': string;
  'colorGlobal/Value-Colors-Brand-Brand-20': string;
  'colorGlobal/Value-Colors-Brand-Brand-30': string;
  'colorGlobal/Value-Colors-Brand-Brand-40': string;
  'colorGlobal/Value-Colors-Brand-Brand-50': string;
  'colorGlobal/Value-Colors-Brand-Brand-60': string;
  'colorGlobal/Value-Colors-Brand-Brand-70': string;
  'colorGlobal/Value-Colors-Brand-Brand-80': string;
  'colorGlobal/Value-Colors-Brand-Brand-90': string;
  'colorGlobal/Value-Colors-Brand-Brand-100': string;
  'colorGlobal/Value-Colors-Brand-Brand-110': string;
  'colorGlobal/Value-Colors-Brand-Brand-120': string;
  'colorGlobal/Value-Colors-Brand-Brand-130': string;

  // Global/Value tokens
  'Global/Value-Corner-radius-None': string;
  'Global/Value-Corner-radius-Small': string;
  'Global/Value-Corner-radius-Medium': string;
  'Global/Value-Corner-radius-Large': string;
  'Global/Value-Corner-radius-X-Large': string;
  'Global/Value-Corner-radius-Circular': string;
  'Global/Value-Spacing-Horizontal-None': string;
  'Global/Value-Spacing-Horizontal-XXS': string;
  'Global/Value-Spacing-Horizontal-XS': string;
  'Global/Value-Spacing-Horizontal-SNudge': string;
  'Global/Value-Spacing-Horizontal-S': string;
  'Global/Value-Spacing-Horizontal-MNudge': string;
  'Global/Value-Spacing-Horizontal-M': string;
  'Global/Value-Spacing-Horizontal-L': string;
  'Global/Value-Spacing-Horizontal-XL': string;
  'Global/Value-Spacing-Horizontal-XXL': string;
  'Global/Value-Spacing-Horizontal-XXXL': string;
  'Global/Value-Spacing-Horizontal-LNudge': string;
  'Global/Value-Spacing-Horizontal-XXXXL': string;
  'Global/Value-Spacing-Vertical-None': string;
  'Global/Value-Spacing-Vertical-XXS': string;
  'Global/Value-Spacing-Vertical-XS': string;
  'Global/Value-Spacing-Vertical-SNudge': string;
  'Global/Value-Spacing-Vertical-S': string;
  'Global/Value-Spacing-Vertical-MNudge': string;
  'Global/Value-Spacing-Vertical-M': string;
  'Global/Value-Spacing-Vertical-L': string;
  'Global/Value-Spacing-Vertical-XL': string;
  'Global/Value-Spacing-Vertical-XXL': string;
  'Global/Value-Spacing-Vertical-XXXL': string;
  'Global/Value-Spacing-Vertical-LNudge': string;
  'Global/Value-Spacing-Vertical-XXXXL': string;
  'Global/Value-Stroke-width-None': string;
  'Global/Value-Stroke-width-Thin': string;
  'Global/Value-Stroke-width-Thick': string;
  'Global/Value-Stroke-width-Thicker': string;
  'Global/Value-Stroke-width-Thickest': string;
  'Global/Value-borderRadius-None': string;
  'Global/Value-borderRadius-Small': string;
  'Global/Value-borderRadius-Medium': string;
  'Global/Value-borderRadius-Large': string;
  'Global/Value-borderRadius-X-Large': string;
  'Global/Value-borderRadius-Circular': string;
  'Global/Value-spacingHorizontal-None': string;
  'Global/Value-spacingHorizontal-XXS': string;
  'Global/Value-spacingHorizontal-XS': string;
  'Global/Value-spacingHorizontal-SNudge': string;
  'Global/Value-spacingHorizontal-S': string;
  'Global/Value-spacingHorizontal-MNudge': string;
  'Global/Value-spacingHorizontal-M': string;
  'Global/Value-spacingHorizontal-L': string;
  'Global/Value-spacingHorizontal-XL': string;
  'Global/Value-spacingHorizontal-XXL': string;
  'Global/Value-spacingHorizontal-XXXL': string;
  'Global/Value-spacingHorizontal-LNudge': string;
  'Global/Value-spacingHorizontal-XXXXL': string;
  'Global/Value-strokeWidth-None': string;
  'Global/Value-strokeWidth-Thin': string;
  'Global/Value-strokeWidth-Thick': string;
  'Global/Value-strokeWidth-Thicker': string;
  'Global/Value-strokeWidth-Thickest': string;
  'Global/Value-spacingVertical-None': string;
  'Global/Value-spacingVertical-XXS': string;
  'Global/Value-spacingVertical-XS': string;
  'Global/Value-spacingVertical-SNudge': string;
  'Global/Value-spacingVertical-S': string;
  'Global/Value-spacingVertical-MNudge': string;
  'Global/Value-spacingVertical-M': string;
  'Global/Value-spacingVertical-L': string;
  'Global/Value-spacingVertical-XL': string;
  'Global/Value-spacingVertical-XXL': string;
  'Global/Value-spacingVertical-XXXL': string;
  'Global/Value-spacingVertical-LNudge': string;
  'Global/Value-spacingVertical-XXXXL': string;

  // colorBrand/Brand 1 tokens
  'colorBrand/Brand 1-Brand-10': string;
  'colorBrand/Brand 1-Brand-20': string;
  'colorBrand/Brand 1-Brand-30': string;
  'colorBrand/Brand 1-Brand-40': string;
  'colorBrand/Brand 1-Brand-50': string;
  'colorBrand/Brand 1-Brand-60': string;
  'colorBrand/Brand 1-Brand-70': string;
  'colorBrand/Brand 1-Brand-80': string;
  'colorBrand/Brand 1-Brand-90': string;
  'colorBrand/Brand 1-Brand-100': string;
  'colorBrand/Brand 1-Brand-110': string;
  'colorBrand/Brand 1-Brand-120': string;
  'colorBrand/Brand 1-Brand-130': string;

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
  'Typography/Base-Font-family-Base': string;
  'Typography/Base-Weight-fontWeightRegular': string;
  'Typography/Base-Weight-fontWeightMedium': string;
  'Typography/Base-Weight-fontWeightSemibold': string;
  'Typography/Base-Weight-fontWeightBold': string;
  'Typography/Base-Weight-fontWeightSemilight': string;
  'Typography/Base-Weight-fontWeightLight': string;
  'Typography/Base-Line-height-100': string;
  'Typography/Base-Line-height-200': string;
  'Typography/Base-Line-height-300': string;
  'Typography/Base-Line-height-400': string;
  'Typography/Base-Line-height-500': string;
  'Typography/Base-Line-height-600': string;
  'Typography/Base-Line-height-700': string;
  'Typography/Base-Line-height-800': string;
  'Typography/Base-Line-height-900': string;
  'Typography/Base-Line-height-920': string;
  'Typography/Base-Line-height-980': string;
  'Typography/Base-Line-height-1000': string;
  'Typography/Base-Font-size-100': string;
  'Typography/Base-Font-size-200': string;
  'Typography/Base-Font-size-300': string;
  'Typography/Base-Font-size-400': string;
  'Typography/Base-Font-size-500': string;
  'Typography/Base-Font-size-600': string;
  'Typography/Base-Font-size-700': string;
  'Typography/Base-Font-size-800': string;
  'Typography/Base-Font-size-900': string;
  'Typography/Base-Font-size-920': string;
  'Typography/Base-Font-size-980': string;
  'Typography/Base-Font-size-1000': string;
  'Typography/Base-fontFamily-Base': string;
  'Typography/Base-fontWeight-Regular': string;
  'Typography/Base-fontWeight-Semibold': string;
  'Typography/Base-fontWeight-Bold': string;
  'Typography/Base-fontWeight-Semilight': string;
  'Typography/Base-fontWeight-Light': string;
  'Typography/Base-lineHeight-Base100': string;
  'Typography/Base-lineHeight-Base200': string;
  'Typography/Base-lineHeight-Base300': string;
  'Typography/Base-lineHeight-Base400': string;
  'Typography/Base-lineHeight-Base500': string;
  'Typography/Base-lineHeight-Base600': string;
  'Typography/Base-lineHeight-Base700': string;
  'Typography/Base-lineHeight-Base800': string;
  'Typography/Base-lineHeight-Base900': string;
  'Typography/Base-lineHeight-base1000': string;
  'Typography/Base-lineHeight-Base920': string;
  'Typography/Base-lineHeight-Base980': string;
  'Typography/Base-fontSize-1000': string;
  'Typography/Base-fontSize-Base100': string;
  'Typography/Base-fontSize-Base200': string;
  'Typography/Base-fontSize-Base300': string;
  'Typography/Base-fontSize-Base400': string;
  'Typography/Base-fontSize-Base500': string;
  'Typography/Base-fontSize-Base600': string;
  'Typography/Base-fontSize-Base700': string;
  'Typography/Base-fontSize-Base800': string;
  'Typography/Base-fontSize-Base900': string;
  'Typography/Base-fontSize-Base980': string;
  'Typography/Base-fontSize-Base920': string;

  // Tree indentation/None tokens
  'Tree indentation/None-tree-padding-left': string;
  'Tree indentation/None-treeleaf-padding-left': string;

  // Tree indentation/Level 1 tokens
  'Tree indentation/Level 1-tree-padding-left': string;
  'Tree indentation/Level 1-treeleaf-padding-left': string;

  // Tree indentation/Level 2 tokens
  'Tree indentation/Level 2-tree-padding-left': string;
  'Tree indentation/Level 2-treeleaf-padding-left': string;

  // Tree indentation/Level 3 tokens
  'Tree indentation/Level 3-tree-padding-left': string;
  'Tree indentation/Level 3-treeleaf-padding-left': string;

  // Tree indentation/Level 4 tokens
  'Tree indentation/Level 4-tree-padding-left': string;
  'Tree indentation/Level 4-treeleaf-padding-left': string;

  // Tree indentation/Level 5 tokens
  'Tree indentation/Level 5-tree-padding-left': string;
  'Tree indentation/Level 5-treeleaf-padding-left': string;

  // Tree indentation/Level 6 tokens
  'Tree indentation/Level 6-tree-padding-left': string;
  'Tree indentation/Level 6-treeleaf-padding-left': string;

  // Tree indentation/Level 7 tokens
  'Tree indentation/Level 7-tree-padding-left': string;
  'Tree indentation/Level 7-treeleaf-padding-left': string;

  // Tree indentation/Level 8 tokens
  'Tree indentation/Level 8-tree-padding-left': string;
  'Tree indentation/Level 8-treeleaf-padding-left': string;

  // Tree indentation/Level 9 tokens
  'Tree indentation/Level 9-tree-padding-left': string;
  'Tree indentation/Level 9-treeleaf-padding-left': string;

  // Tree indentation/Level 10 tokens
  'Tree indentation/Level 10-tree-padding-left': string;
  'Tree indentation/Level 10-treeleaf-padding-left': string;

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

  // colorTheme/Light/Theme/Light tokens
  'colorTheme/Light/Theme/Light-Neutral-Background-1-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-1-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-1-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-1-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-3-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-3-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-3-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-4-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-4-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-4-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-5-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-6-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Inverted-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Inverted-Disabled-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Alpha-1-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Alpha-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Static-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Transparent-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Transparent-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Transparent-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Transparent-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Disabled-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Stencil-1-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Stencil-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Overlay-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Background-Overlay-Scrollbar-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-1-Rest primary text': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-1-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-1-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-1-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Rest secondary text': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Brand-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Brand-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Brand-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Brand-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Link-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Link-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Link-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Link-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-4-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Disabled-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Disabled-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Static-Inverted-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Disabled-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Foreground-On Brand-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-1-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-1-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-1-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-1-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-3-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Alpha-1-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Alpha-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Subtle-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-on Brand-1-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-on Brand-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Accessible-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Accessible-Hover': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Accessible-Pressed': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Accessible-Selected': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Focus-1-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Focus-2-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Transparent-Interactive-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Transparent-Disabled-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Transparent-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Disabled-Rest': string;
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Disabled-Inverted-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Background-1-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Background-1-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Background-1-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Background-1-Selected': string;
  'colorTheme/Light/Theme/Light-Brand-Background-2-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Background-2-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Background-2-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Background-3-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Background-Inverted-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Background-Inverted-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Background-Inverted-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Background-Inverted-Selected': string;
  'colorTheme/Light/Theme/Light-Brand-Background-Static-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Background-Compound-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Background-Compound-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Background-Compound-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-1-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-1-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-1-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-1-Selected': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-2-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-2-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-2-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Link-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Link-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Link-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Link-Selected': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Inverted-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Inverted-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Inverted-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-On Light-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-On Light-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-On Light-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-On Light-Selected': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Compound-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Compound-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Foreground-Compound-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-1-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-1-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-1-Pressed': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-1-Selected': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-2-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-2-Contrast-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-3-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-Compound-Rest': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-Compound-Hover': string;
  'colorTheme/Light/Theme/Light-Brand-Stroke-Compound-Pressed': string;
  'colorTheme/Light/Theme/Light-Status-Danger-Background-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Danger-Background-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Danger-Foreground-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Danger-Foreground-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Danger-Stroke-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Danger-Stroke-2-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Success-Background-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Success-Background-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Success-Foreground-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Success-Foreground-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Success-Stroke-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Success-Stroke-2-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Warning-Background-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Warning-Background-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Warning-Foreground-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Warning-Foreground-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Warning-Stroke-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Warning-Stroke-2-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Oof-Foreground-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Away-Background-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Available-Foreground-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Anchor-Background-2-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Anchor-Foreground-2-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Anchor-Stroke-Active-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Background-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Background-1-Hover': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Background-1-Pressed': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Stroke-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Hover': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Pressed': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Foreground-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Foreground-Hover': string;
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Foreground-Pressed': string;
  'colorTheme/Light/Theme/Light-Status-Severe-Background-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Severe-Background-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Severe-Foreground-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Severe-Foreground-3-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Severe-Stroke-1-Rest': string;
  'colorTheme/Light/Theme/Light-Status-Severe-Stroke-2-Rest': string;
  'colorTheme/Light/Theme/Light-Shadow-ambient': string;
  'colorTheme/Light/Theme/Light-Shadow-ambient-lighter': string;
  'colorTheme/Light/Theme/Light-Shadow-ambient-darker': string;
  'colorTheme/Light/Theme/Light-Shadow-brand-ambient': string;
  'colorTheme/Light/Theme/Light-Shadow-key': string;
  'colorTheme/Light/Theme/Light-Shadow-key-lighter': string;
  'colorTheme/Light/Theme/Light-Shadow-key-darker': string;
  'colorTheme/Light/Theme/Light-Shadow-brand-key': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Categorical': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Data': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Yellow300': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue400': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray400': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red400': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal300': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red300': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal400': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean400': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green400': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Yellow400': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green300': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray300': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue200': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean200': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Accessibility-Text dark bkgd': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Accessibility-Text light bkgd': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-KPI Card-Text dark bkgd': string;
  'colorTheme/Light/Theme/Light-Data viz-Foreground-KPI Card-Text light bkgd': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Gridline': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Axis-Target-Benchmark': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Blue': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Blue400': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Gray': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Gray400': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Red': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Red300': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Red400': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Teal': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Teal300': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Teal400': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Ocean': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Ocean400': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Green': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Green300': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Green400': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Yellow300': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Yellow400': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Gray300': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Blue200': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Ocean200': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Yellow': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Trend-Average': string;
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Accessible outline': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Positive': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Negative': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Notice': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Positive': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Negative': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Notice': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Positive': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Negative': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Notice': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Positive': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Negative': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Notice': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Background-Positive': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Background-Negative': string;
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Background-Notice': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Blue': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Gray': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Red': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Teal': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Ocean': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Green': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Yellow': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Blue400': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Gray400': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Red300': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Red400': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Teal300': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Teal400': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Ocean400': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Green300': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Green400': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Yellow300': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Yellow400': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Blue300': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Blue200': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Blue100': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Gray300': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Gray200': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Gray100': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Red200': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Red100': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Teal200': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Teal100': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Ocean300': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Ocean200': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Ocean100': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Green200': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Green100': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Yellow200': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Yellow100': string;
  'colorTheme/Light/Theme/Light-Data viz-Background-Neutral-Black': string;

  // Theme/Light/Theme/Light tokens
  'Theme/Light/Theme/Light-Control logic-Theme switch': string;

  // colorTheme/Dark/Theme/Dark tokens
  'colorTheme/Dark/Theme/Dark-Neutral-Background-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-1-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-1-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-1-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-3-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-3-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-4-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-4-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-4-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-5-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-6-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Inverted-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Inverted-Disabled-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Alpha-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Alpha-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Static-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Transparent-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Transparent-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Transparent-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Transparent-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Disabled-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Stencil-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Stencil-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Overlay-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Overlay-Scrollbar-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-1-Rest primary text': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-1-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-1-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-1-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Rest secondary text': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-4-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Disabled-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Disabled-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Static-Inverted-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Disabled-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-On Brand-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-1-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-1-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-1-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Alpha-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Alpha-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Subtle-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-on Brand-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-on Brand-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Hover': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Selected': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Focus-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Focus-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Interactive-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Disabled-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Disabled-Rest': string;
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Disabled-Inverted-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-1-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-1-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-1-Selected': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-2-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-2-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-Inverted-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-Inverted-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-Inverted-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-Inverted-Selected': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-Static-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-Compound-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-Compound-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Background-Compound-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-1-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-1-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-1-Selected': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-2-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-2-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Link-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Link-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Link-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Link-Selected': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Inverted-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Inverted-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Inverted-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-On Light-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-On Light-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-On Light-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-On Light-Selected': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Compound-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Compound-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Compound-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-1-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-1-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-1-Selected': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-2-Contrast-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-Compound-Rest': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-Compound-Hover': string;
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-Compound-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Status-Danger-Background-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Danger-Background-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Danger-Foreground-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Danger-Foreground-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Danger-Stroke-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Danger-Stroke-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Success-Background-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Success-Background-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Success-Foreground-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Success-Foreground-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Success-Stroke-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Success-Stroke-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Warning-Background-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Warning-Background-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Warning-Foreground-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Warning-Foreground-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Warning-Stroke-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Warning-Stroke-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Oof-Foreground-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Away-Background-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Available-Foreground-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Anchor-Background-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Anchor-Foreground-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Anchor-Stroke-Active-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Hover': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Stroke-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Hover': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Hover': string;
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Pressed': string;
  'colorTheme/Dark/Theme/Dark-Status-Severe-Background-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Severe-Background-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Severe-Foreground-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Severe-Foreground-3-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Severe-Stroke-1-Rest': string;
  'colorTheme/Dark/Theme/Dark-Status-Severe-Stroke-2-Rest': string;
  'colorTheme/Dark/Theme/Dark-Shadow-ambient': string;
  'colorTheme/Dark/Theme/Dark-Shadow-ambient-lighter': string;
  'colorTheme/Dark/Theme/Dark-Shadow-ambient-darker': string;
  'colorTheme/Dark/Theme/Dark-Shadow-brand-ambient': string;
  'colorTheme/Dark/Theme/Dark-Shadow-key': string;
  'colorTheme/Dark/Theme/Dark-Shadow-key-lighter': string;
  'colorTheme/Dark/Theme/Dark-Shadow-key-darker': string;
  'colorTheme/Dark/Theme/Dark-Shadow-brand-key': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Categorical': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Data': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Yellow300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Yellow400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Accessibility-Text dark bkgd': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Accessibility-Text light bkgd': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-KPI Card-Text dark bkgd': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-KPI Card-Text light bkgd': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Gridline': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Axis-Target-Benchmark': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Red': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Red300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Red400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Green': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Green300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Green400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Trend-Average': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Accessible outline': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Positive': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Negative': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Notice': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Positive': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Negative': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Notice': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Positive': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Negative': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Notice': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Positive': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Negative': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Notice': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Background-Positive': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Background-Negative': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Background-Notice': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Blue': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Gray': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Red': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Teal': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Ocean': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Green': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Yellow': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Red300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Red400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Green300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Green400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow400': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue100': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray100': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Red200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Red100': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal100': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean300': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean100': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Green200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Green100': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow200': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow100': string;
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Neutral-Black': string;

  // Theme/Dark/Theme/Dark tokens
  'Theme/Dark/Theme/Dark-Control logic-Theme switch': string;
}

export const brandTheme: Theme & BrandThemeExtension = {
  'colorGlobal-Linear': 'linear-gradient(-90deg, #0063ff 4%, #ac3ad5 24%, #ff1919 55%, #fa15e3 100%)',
  'global-Elevation-shadow2': '[object Object],[object Object]',
  'global-Elevation-shadow4': '[object Object],[object Object]',
  'global-Elevation-shadow8': '[object Object],[object Object]',
  'global-Elevation-shadow16': '[object Object],[object Object]',
  'global-Elevation-shadow28': '[object Object],[object Object]',
  'global-Elevation-shadow64': '[object Object],[object Object]',
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
  'global-caption2': '[object Object]',
  'global-caption2Strong': '[object Object]',
  'global-caption1': '[object Object]',
  'global-caption1Strong': '[object Object]',
  'global-caption1Stronger': '[object Object]',
  'global-body1': '[object Object]',
  'global-body1Strong': '[object Object]',
  'global-body1Stronger': '[object Object]',
  'global-body2Semilight': '[object Object]',
  'global-body2': '[object Object]',
  'global-body2Strong': '[object Object]',
  'global-body2Stronger': '[object Object]',
  'global-title4Light': '[object Object]',
  'global-title4Semilight': '[object Object]',
  'global-title4': '[object Object]',
  'global-title4Strong': '[object Object]',
  'global-title4Stronger': '[object Object]',
  'global-title3Light': '[object Object]',
  'global-title3Semilight': '[object Object]',
  'global-title3': '[object Object]',
  'global-title3Strong': '[object Object]',
  'global-title3Stronger': '[object Object]',
  'global-title2Light': '[object Object]',
  'global-title2Semilight': '[object Object]',
  'global-title2': '[object Object]',
  'global-Title 2 Strong': '[object Object]',
  'global-Title 2 Stronger': '[object Object]',
  'global-Title 1': '[object Object]',
  'global-title1Strong': '[object Object]',
  'global-title1Stronger': '[object Object]',
  'global-title1Light': '[object Object]',
  'global-title1Semilight': '[object Object]',
  'global-display3Strong': '[object Object]',
  'global-display2Light': '[object Object]',
  'global-display2Semilight': '[object Object]',
  'global-display2': '[object Object]',
  'global-display2Strong': '[object Object]',
  'global-display2Stronger': '[object Object]',
  'global-display1Light': '[object Object]',
  'global-display1Semilight': '[object Object]',
  'global-display1': '[object Object]',
  'global-display1Strong': '[object Object]',
  'global-display1Stronger': '[object Object]',
  'global-textCase-none': 'none',
  'global-textDecoration-none': 'none',
  'global-paragraphIndent-0': '0rem',
  'global/global-fontFamilies-segoe-ui': 'Segoe UI',
  'global/global-fontWeights-segoe-ui-0': 'Regular',
  'global/global-fontWeights-segoe-ui-1': 'Semibold',
  'global/global-fontWeights-segoe-ui-2': 'Bold',
  'global/global-fontWeights-segoe-ui-3': 'Semilight',
  'global/global-fontWeights-segoe-ui-4': 'Light',
  'global/global-lineHeights-0': '14',
  'global/global-lineHeights-1': '16',
  'global/global-lineHeights-2': '22',
  'global/global-lineHeights-3': '24',
  'global/global-lineHeights-4': '28',
  'global/global-lineHeights-5': '34',
  'global/global-lineHeights-6': '36',
  'global/global-lineHeights-7': '48',
  'global/global-lineHeights-8': '52',
  'global/global-lineHeights-9': '64',
  'global/global-lineHeights-10': '70',
  'global/global-fontSize-0': '10',
  'global/global-fontSize-1': '12',
  'global/global-fontSize-2': '14',
  'global/global-fontSize-3': '16',
  'global/global-fontSize-4': '20',
  'global/global-fontSize-5': '24',
  'global/global-fontSize-6': '28',
  'global/global-fontSize-7': '32',
  'global/global-fontSize-8': '40',
  'global/global-fontSize-9': '48',
  'global/global-fontSize-10': '52',
  'global/global-letterSpacing-1': '0',
  'global/global-paragraphSpacing-0': '0',
  'global/global-paragraphIndent-0': '0',
  'colorTheme/Light-Neutral-Background-1-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Neutral-Background-1-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Light-Neutral-Background-1-Pressed': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Background-1-Selected': '{colors.neutral.grey-90}',
  'colorTheme/Light-Neutral-Background-2-Rest': '#f5f4f2',
  'colorTheme/Light-Neutral-Background-3-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Background-3-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Light-Neutral-Background-3-Pressed': '{colors.neutral.grey-80}',
  'colorTheme/Light-Neutral-Background-4-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Light-Neutral-Background-4-Hover': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Background-4-Pressed': '{colors.neutral.grey-60}',
  'colorTheme/Light-Neutral-Background-5-Rest': '{colors.neutral.grey-80}',
  'colorTheme/Light-Neutral-Background-6-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Light-Neutral-Background-Inverted-Rest': '{brand-10}',
  'colorTheme/Light-Neutral-Background-Inverted-Disabled-Rest': '{colors.alpha.white.10}',
  'colorTheme/Light-Neutral-Background-Alpha-1-Rest': '{colors.alpha.white.50}',
  'colorTheme/Light-Neutral-Background-Alpha-2-Rest': '{colors.alpha.white.80}',
  'colorTheme/Light-Neutral-Background-Static-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Neutral-Background-Subtle-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Background-Subtle-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Light-Neutral-Background-Subtle-Pressed': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Background-Subtle-Selected': '{colors.neutral.grey-90}',
  'colorTheme/Light-Neutral-Background-Subtle-Light alpha-Hover': '{colors.alpha.white.70}',
  'colorTheme/Light-Neutral-Background-Subtle-Light alpha-Pressed': '{colors.alpha.white.50}',
  'colorTheme/Light-Neutral-Background-Subtle-Light alpha-Selected': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Background-Subtle-Inverted-Rest': '{colors.alpha.black.0}',
  'colorTheme/Light-Neutral-Background-Subtle-Inverted-Hover': '{colors.alpha.black.10}',
  'colorTheme/Light-Neutral-Background-Subtle-Inverted-Pressed': '{colors.alpha.black.30}',
  'colorTheme/Light-Neutral-Background-Subtle-Inverted-Selected': '{colors.alpha.black.20}',
  'colorTheme/Light-Neutral-Background-Transparent-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Background-Transparent-Hover': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Background-Transparent-Pressed': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Background-Transparent-Selected': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Background-Disabled-Rest': '{colors.neutral.grey-80}',
  'colorTheme/Light-Neutral-Background-Stencil-1-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Background-Stencil-2-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Light-Neutral-Background-Overlay-Rest': '{colors.alpha.black.40}',
  'colorTheme/Light-Neutral-Background-Overlay-Scrollbar-Rest': '{colors.alpha.black.50}',
  'colorTheme/Light-Neutral-Foreground-1-Rest primary text': '{brand-10}',
  'colorTheme/Light-Neutral-Foreground-1-Hover': '{brand-30}',
  'colorTheme/Light-Neutral-Foreground-1-Pressed': '{brand-30}',
  'colorTheme/Light-Neutral-Foreground-1-Selected': '{brand-30}',
  'colorTheme/Light-Neutral-Foreground-2-Rest secondary text': '{colors.neutral.grey-12}',
  'colorTheme/Light-Neutral-Foreground-2-Hover': '{colors.neutral.grey-6}',
  'colorTheme/Light-Neutral-Foreground-2-Pressed': '{colors.neutral.grey-6}',
  'colorTheme/Light-Neutral-Foreground-2-Selected': '{colors.neutral.grey-6}',
  'colorTheme/Light-Neutral-Foreground-2-Brand-Hover': '{brand-50}',
  'colorTheme/Light-Neutral-Foreground-2-Brand-Pressed': '{brand-40}',
  'colorTheme/Light-Neutral-Foreground-2-Brand-Selected': '{brand-30}',
  'colorTheme/Light-Neutral-Foreground-2-Brand-Rest': '{brand-60}',
  'colorTheme/Light-Neutral-Foreground-2-Link-Rest': '{brand-60}',
  'colorTheme/Light-Neutral-Foreground-2-Link-Hover': '{brand-50}',
  'colorTheme/Light-Neutral-Foreground-2-Link-Pressed': '{brand-40}',
  'colorTheme/Light-Neutral-Foreground-2-Link-Selected': '{brand-30}',
  'colorTheme/Light-Neutral-Foreground-4-Rest': '{colors.neutral.grey-30}',
  'colorTheme/Light-Neutral-Foreground-Disabled-2-Rest': '{colors.neutral.grey-60}',
  'colorTheme/Light-Neutral-Foreground-Disabled-Rest': '{colors.neutral.grey-50}',
  'colorTheme/Light-Neutral-Foreground-Static-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Neutral-Foreground-Inverted-1-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Neutral-Foreground-Inverted-1-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Light-Neutral-Foreground-Inverted-1-Pressed': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Foreground-Inverted-1-Selected': '{colors.neutral.grey-60}',
  'colorTheme/Light-Neutral-Foreground-Inverted-2-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Neutral-Foreground-Inverted-Disabled-Rest': '{colors.alpha.white.40}',
  'colorTheme/Light-Neutral-Foreground-Inverted-Link-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Neutral-Foreground-Inverted-Link-Hover': '{colors.neutral.grey-90}',
  'colorTheme/Light-Neutral-Foreground-Inverted-Link-Pressed': '{colors.neutral.grey-80}',
  'colorTheme/Light-Neutral-Foreground-Inverted-Link-Selected': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Foreground-On Brand-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Neutral-Stroke-1-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Stroke-1-Hover': '{colors.neutral.grey-60}',
  'colorTheme/Light-Neutral-Stroke-1-Pressed': '{colors.neutral.grey-50}',
  'colorTheme/Light-Neutral-Stroke-1-Selected': '{colors.neutral.grey-40}',
  'colorTheme/Light-Neutral-Stroke-2-Rest': '{colors.grey.white}',
  'colorTheme/Light-Neutral-Stroke-3-Rest': '{colors.neutral.grey-50}',
  'colorTheme/Light-Neutral-Stroke-Alpha-1-Rest': '{colors.alpha.black.5}',
  'colorTheme/Light-Neutral-Stroke-Alpha-2-Rest': '{colors.alpha.white.20}',
  'colorTheme/Light-Neutral-Stroke-Subtle-Rest': '#f5f4f2',
  'colorTheme/Light-Neutral-Stroke-on Brand-1-Rest': '{brand-60}',
  'colorTheme/Light-Neutral-Stroke-on Brand-2-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Neutral-Stroke-Accessible-Rest': '{brand-60}',
  'colorTheme/Light-Neutral-Stroke-Accessible-Hover': '{brand-50}',
  'colorTheme/Light-Neutral-Stroke-Accessible-Pressed': '{brand-40}',
  'colorTheme/Light-Neutral-Stroke-Accessible-Selected': '{brand-30}',
  'colorTheme/Light-Neutral-Stroke-Focus-1-Rest': '{brand-60}',
  'colorTheme/Light-Neutral-Stroke-Focus-2-Rest': '{colors.grey.white}',
  'colorTheme/Light-Neutral-Stroke-Transparent-Interactive-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Stroke-Transparent-Disabled-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Stroke-Transparent-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light-Neutral-Stroke-Disabled-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Light-Neutral-Stroke-Disabled-Inverted-Rest': '{colors.alpha.white.40}',
  'colorTheme/Light-Brand-Background-1-Rest': '{brand-60}',
  'colorTheme/Light-Brand-Background-1-Hover': '{brand-50}',
  'colorTheme/Light-Brand-Background-1-Pressed': '{brand-40}',
  'colorTheme/Light-Brand-Background-1-Selected': '{brand-30}',
  'colorTheme/Light-Brand-Background-2-Rest': '{brand-10}',
  'colorTheme/Light-Brand-Background-2-Hover': '{brand-110}',
  'colorTheme/Light-Brand-Background-2-Pressed': '{brand-100}',
  'colorTheme/Light-Brand-Background-3-Rest': '{brand-120}',
  'colorTheme/Light-Brand-Background-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Brand-Background-Inverted-Hover': '{brand-120}',
  'colorTheme/Light-Brand-Background-Inverted-Pressed': '{brand-130}',
  'colorTheme/Light-Brand-Background-Inverted-Selected': '{brand-100}',
  'colorTheme/Light-Brand-Background-Static-Rest': '{brand-60}',
  'colorTheme/Light-Brand-Background-Compound-Rest': '{brand-60}',
  'colorTheme/Light-Brand-Background-Compound-Hover': '{brand-50}',
  'colorTheme/Light-Brand-Background-Compound-Pressed': '{brand-40}',
  'colorTheme/Light-Brand-Foreground-1-Rest': '{brand-60}',
  'colorTheme/Light-Brand-Foreground-1-Hover': '{brand-50}',
  'colorTheme/Light-Brand-Foreground-1-Pressed': '{brand-40}',
  'colorTheme/Light-Brand-Foreground-1-Selected': '{brand-30}',
  'colorTheme/Light-Brand-Foreground-2-Rest': '{brand-80}',
  'colorTheme/Light-Brand-Foreground-2-Hover': '{brand-60}',
  'colorTheme/Light-Brand-Foreground-2-Pressed': '{brand-30}',
  'colorTheme/Light-Brand-Foreground-Link-Rest': '{brand-60}',
  'colorTheme/Light-Brand-Foreground-Link-Hover': '{brand-50}',
  'colorTheme/Light-Brand-Foreground-Link-Pressed': '{brand-40}',
  'colorTheme/Light-Brand-Foreground-Link-Selected': '{brand-30}',
  'colorTheme/Light-Brand-Foreground-Inverted-Rest': '{brand-100}',
  'colorTheme/Light-Brand-Foreground-Inverted-Hover': '{brand-110}',
  'colorTheme/Light-Brand-Foreground-Inverted-Pressed': '{brand-100}',
  'colorTheme/Light-Brand-Foreground-On Light-Rest': '{brand-80}',
  'colorTheme/Light-Brand-Foreground-On Light-Hover': '{brand-70}',
  'colorTheme/Light-Brand-Foreground-On Light-Pressed': '{brand-50}',
  'colorTheme/Light-Brand-Foreground-On Light-Selected': '{brand-60}',
  'colorTheme/Light-Brand-Foreground-Compound-Rest': '{brand-60}',
  'colorTheme/Light-Brand-Foreground-Compound-Hover': '{brand-50}',
  'colorTheme/Light-Brand-Foreground-Compound-Pressed': '{brand-40}',
  'colorTheme/Light-Brand-Stroke-1-Rest': '{brand-60}',
  'colorTheme/Light-Brand-Stroke-1-Hover': '{brand-50}',
  'colorTheme/Light-Brand-Stroke-1-Pressed': '{brand-40}',
  'colorTheme/Light-Brand-Stroke-1-Selected': '{brand-30}',
  'colorTheme/Light-Brand-Stroke-2-Rest': '{brand-10}',
  'colorTheme/Light-Brand-Stroke-2-Contrast-Rest': '{brand-110}',
  'colorTheme/Light-Brand-Stroke-3-Rest': '{brand-90}',
  'colorTheme/Light-Brand-Stroke-Compound-Rest': '{brand-60}',
  'colorTheme/Light-Brand-Stroke-Compound-Hover': '{brand-50}',
  'colorTheme/Light-Brand-Stroke-Compound-Pressed': '{brand-40}',
  'colorTheme/Light-Status-Danger-Background-1-Rest': '{colors.shared.cranberry.tint 60}',
  'colorTheme/Light-Status-Danger-Background-3-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Light-Status-Danger-Foreground-1-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Light-Status-Danger-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Status-Danger-Stroke-1-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Light-Status-Danger-Stroke-2-Rest': '{colors.shared.cranberry.tint 30}',
  'colorTheme/Light-Status-Success-Background-1-Rest': '{colors.shared.green.tint 60}',
  'colorTheme/Light-Status-Success-Background-3-Rest': '{colors.shared.green.primary}',
  'colorTheme/Light-Status-Success-Foreground-1-Rest': '{colors.shared.green.primary}',
  'colorTheme/Light-Status-Success-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Status-Success-Stroke-1-Rest': '{colors.shared.green.primary}',
  'colorTheme/Light-Status-Success-Stroke-2-Rest': '{colors.shared.green.tint 30}',
  'colorTheme/Light-Status-Warning-Background-1-Rest': '{colors.shared.orange.tint 60}',
  'colorTheme/Light-Status-Warning-Background-3-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Light-Status-Warning-Foreground-1-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Light-Status-Warning-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Status-Warning-Stroke-1-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Light-Status-Warning-Stroke-2-Rest': '{colors.shared.orange.tint 30}',
  'colorTheme/Light-Status-Oof-Foreground-3-Rest': '{colors.shared.berry.primary}',
  'colorTheme/Light-Status-Away-Background-3-Rest': '{colors.shared.marigold.primary}',
  'colorTheme/Light-Status-Available-Foreground-3-Rest': '{colors.shared.light green.primary}',
  'colorTheme/Light-Status-Generic-Anchor-Background-2-Rest': '{colors.shared.anchor.tint 40}',
  'colorTheme/Light-Status-Generic-Anchor-Foreground-2-Rest': '{colors.shared.anchor.shade 30}',
  'colorTheme/Light-Status-Generic-Anchor-Stroke-Active-Rest': '{colors.shared.anchor.primary}',
  'colorTheme/Light-Status-Generic-Information-Background-1-Rest': '{colors.shared.information.tint 60}',
  'colorTheme/Light-Status-Generic-Information-Background-1-Hover': '{colors.shared.information.tint 50}',
  'colorTheme/Light-Status-Generic-Information-Background-1-Pressed': '{colors.shared.information.tint 40}',
  'colorTheme/Light-Status-Generic-Information-Stroke-1-Rest': '{colors.shared.information.primary}',
  'colorTheme/Light-Status-Generic-Information-Stroke-2-Rest': '{colors.shared.information.tint 30}',
  'colorTheme/Light-Status-Generic-Information-Stroke-2-Hover': '{colors.shared.information.tint 20}',
  'colorTheme/Light-Status-Generic-Information-Stroke-2-Pressed': '{colors.shared.information.tint 10}',
  'colorTheme/Light-Status-Generic-Information-Foreground-Rest': '{colors.shared.information.primary}',
  'colorTheme/Light-Status-Generic-Information-Foreground-Hover': '{colors.shared.information.shade 10}',
  'colorTheme/Light-Status-Generic-Information-Foreground-Pressed': '{colors.shared.information.shade 20}',
  'colorTheme/Light-Status-Severe-Background-1-Rest': '{colors.shared.dark orange.tint 60}',
  'colorTheme/Light-Status-Severe-Background-3-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Light-Status-Severe-Foreground-1-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Light-Status-Severe-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Light-Status-Severe-Stroke-1-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Light-Status-Severe-Stroke-2-Rest': '{colors.shared.dark orange.tint 30}',
  'colorTheme/Light-Shadow-ambient': '#0000001f',
  'colorTheme/Light-Shadow-ambient-lighter': '#0000000f',
  'colorTheme/Light-Shadow-ambient-darker': '#00000033',
  'colorTheme/Light-Shadow-brand-ambient': '#00000040',
  'colorTheme/Light-Shadow-key': '#00000024',
  'colorTheme/Light-Shadow-key-lighter': '#00000012',
  'colorTheme/Light-Shadow-key-darker': '#0000003d',
  'colorTheme/Light-Shadow-brand-key': '#0000004d',
  'colorTheme/Light-Data viz-Foreground-Labels-Categorical': '{colors.brand.brand-10}',
  'colorTheme/Light-Data viz-Foreground-Labels-Data': '{colors.neutral.grey-12}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Blue': '{colors.data viz.core.blue}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Gray': '{colors.data viz.core.gray}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Red': '{colors.data viz.core.red}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Teal': '{colors.data viz.core.teal}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Ocean': '{colors.data viz.core.ocean}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Green': '{colors.data viz.core.green}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Yellow300': '{colors.data viz.sequential.yellow300}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Blue400': '{colors.data viz.sequential.blue400}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Gray400': '{colors.data viz.sequential.gray400}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Red400': '{colors.data viz.sequential.red400}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Teal300': '{colors.data viz.sequential.teal300}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Red300': '{colors.data viz.sequential.red300}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Teal400': '{colors.data viz.sequential.teal400}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Ocean400': '{colors.data viz.sequential.ocean400}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Green400': '{colors.data viz.sequential.green400}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Yellow400': '{colors.data viz.sequential.yellow400}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Green300': '{colors.data viz.sequential.green300}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Gray300': '{colors.data viz.sequential.gray300}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Blue200': '{colors.data viz.sequential.blue200}',
  'colorTheme/Light-Data viz-Foreground-Labels-Color-Ocean200': '{colors.data viz.sequential.ocean200}',
  'colorTheme/Light-Data viz-Foreground-Accessibility-Text dark bkgd': '{colors.neutral.white}',
  'colorTheme/Light-Data viz-Foreground-Accessibility-Text light bkgd': '{colors.neutral.black}',
  'colorTheme/Light-Data viz-Foreground-KPI Card-Text dark bkgd': '{colors.neutral.white}',
  'colorTheme/Light-Data viz-Foreground-KPI Card-Text light bkgd': '{colors.neutral.grey-40}',
  'colorTheme/Light-Data viz-Stroke-Gridline': '{colors.neutral.grey-70}',
  'colorTheme/Light-Data viz-Stroke-Axis-Target-Benchmark': '{colors.neutral.black}',
  'colorTheme/Light-Data viz-Stroke-Color-Blue': '{colors.data viz.core.blue}',
  'colorTheme/Light-Data viz-Stroke-Color-Blue400': '{colors.data viz.sequential.blue400}',
  'colorTheme/Light-Data viz-Stroke-Color-Gray': '{colors.data viz.core.gray}',
  'colorTheme/Light-Data viz-Stroke-Color-Gray400': '{colors.data viz.sequential.gray400}',
  'colorTheme/Light-Data viz-Stroke-Color-Red': '{colors.data viz.core.red}',
  'colorTheme/Light-Data viz-Stroke-Color-Red300': '{colors.data viz.sequential.red300}',
  'colorTheme/Light-Data viz-Stroke-Color-Red400': '{colors.data viz.sequential.red400}',
  'colorTheme/Light-Data viz-Stroke-Color-Teal': '{colors.data viz.core.teal}',
  'colorTheme/Light-Data viz-Stroke-Color-Teal300': '{colors.data viz.sequential.teal300}',
  'colorTheme/Light-Data viz-Stroke-Color-Teal400': '{colors.data viz.sequential.teal400}',
  'colorTheme/Light-Data viz-Stroke-Color-Ocean': '{colors.data viz.core.ocean}',
  'colorTheme/Light-Data viz-Stroke-Color-Ocean400': '{colors.data viz.sequential.ocean400}',
  'colorTheme/Light-Data viz-Stroke-Color-Green': '{colors.data viz.core.green}',
  'colorTheme/Light-Data viz-Stroke-Color-Green300': '{colors.data viz.sequential.green300}',
  'colorTheme/Light-Data viz-Stroke-Color-Green400': '{colors.data viz.sequential.green400}',
  'colorTheme/Light-Data viz-Stroke-Color-Yellow300': '{colors.data viz.sequential.yellow300}',
  'colorTheme/Light-Data viz-Stroke-Color-Yellow400': '{colors.data viz.sequential.yellow400}',
  'colorTheme/Light-Data viz-Stroke-Color-Gray300': '{colors.data viz.sequential.gray300}',
  'colorTheme/Light-Data viz-Stroke-Color-Blue200': '{colors.data viz.sequential.blue200}',
  'colorTheme/Light-Data viz-Stroke-Color-Ocean200': '{colors.data viz.sequential.ocean200}',
  'colorTheme/Light-Data viz-Stroke-Color-Yellow': '{colors.data viz.core.yellow}',
  'colorTheme/Light-Data viz-Stroke-Trend-Average': '{colors.data viz.sequential.gray300}',
  'colorTheme/Light-Data viz-Stroke-Accessible outline': '{colors.neutral.white}',
  'colorTheme/Light-Data viz-Semantic-Foreground-Light bkgd-Positive': '{colors.data viz.core.green}',
  'colorTheme/Light-Data viz-Semantic-Foreground-Light bkgd-Negative': '{colors.data viz.core.red}',
  'colorTheme/Light-Data viz-Semantic-Foreground-Light bkgd-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light-Data viz-Semantic-Foreground-Dark bkgd-Positive': '#37bb65',
  'colorTheme/Light-Data viz-Semantic-Foreground-Dark bkgd-Negative': '#cc2e48',
  'colorTheme/Light-Data viz-Semantic-Foreground-Dark bkgd-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light-Data viz-Semantic-Stroke-Light bkgd-Positive': '{colors.data viz.core.green}',
  'colorTheme/Light-Data viz-Semantic-Stroke-Light bkgd-Negative': '{colors.data viz.core.red}',
  'colorTheme/Light-Data viz-Semantic-Stroke-Light bkgd-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light-Data viz-Semantic-Stroke-Dark bkgd-Positive': '#37bb65',
  'colorTheme/Light-Data viz-Semantic-Stroke-Dark bkgd-Negative': '#cc2e48',
  'colorTheme/Light-Data viz-Semantic-Stroke-Dark bkgd-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light-Data viz-Semantic-Background-Positive': '{colors.data viz.core.green}',
  'colorTheme/Light-Data viz-Semantic-Background-Negative': '{colors.data viz.core.red}',
  'colorTheme/Light-Data viz-Semantic-Background-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light-Data viz-Background-Core-Blue': '{colors.data viz.core.blue}',
  'colorTheme/Light-Data viz-Background-Core-Gray': '{colors.data viz.core.gray}',
  'colorTheme/Light-Data viz-Background-Core-Red': '{colors.data viz.core.red}',
  'colorTheme/Light-Data viz-Background-Core-Teal': '{colors.data viz.core.teal}',
  'colorTheme/Light-Data viz-Background-Core-Ocean': '{colors.data viz.core.ocean}',
  'colorTheme/Light-Data viz-Background-Core-Green': '{colors.data viz.core.green}',
  'colorTheme/Light-Data viz-Background-Core-Yellow': '{colors.data viz.core.yellow}',
  'colorTheme/Light-Data viz-Background-Sequential-Blue400': '{colors.data viz.sequential.blue400}',
  'colorTheme/Light-Data viz-Background-Sequential-Gray400': '{colors.data viz.sequential.gray400}',
  'colorTheme/Light-Data viz-Background-Sequential-Red300': '{colors.data viz.sequential.red300}',
  'colorTheme/Light-Data viz-Background-Sequential-Red400': '{colors.data viz.sequential.red400}',
  'colorTheme/Light-Data viz-Background-Sequential-Teal300': '{colors.data viz.sequential.teal300}',
  'colorTheme/Light-Data viz-Background-Sequential-Teal400': '{colors.data viz.sequential.teal400}',
  'colorTheme/Light-Data viz-Background-Sequential-Ocean400': '{colors.data viz.sequential.ocean400}',
  'colorTheme/Light-Data viz-Background-Sequential-Green300': '{colors.data viz.sequential.green300}',
  'colorTheme/Light-Data viz-Background-Sequential-Green400': '{colors.data viz.sequential.green400}',
  'colorTheme/Light-Data viz-Background-Sequential-Yellow300': '{colors.data viz.sequential.yellow300}',
  'colorTheme/Light-Data viz-Background-Sequential-Yellow400': '{colors.data viz.sequential.yellow400}',
  'colorTheme/Light-Data viz-Background-Sequential-Blue300': '{colors.data viz.sequential.blue300}',
  'colorTheme/Light-Data viz-Background-Sequential-Blue200': '{colors.data viz.sequential.blue200}',
  'colorTheme/Light-Data viz-Background-Sequential-Blue100': '{colors.data viz.sequential.blue100}',
  'colorTheme/Light-Data viz-Background-Sequential-Gray300': '{colors.data viz.sequential.gray300}',
  'colorTheme/Light-Data viz-Background-Sequential-Gray200': '{colors.data viz.sequential.gray200}',
  'colorTheme/Light-Data viz-Background-Sequential-Gray100': '{colors.data viz.sequential.gray100}',
  'colorTheme/Light-Data viz-Background-Sequential-Red200': '{colors.data viz.sequential.red200}',
  'colorTheme/Light-Data viz-Background-Sequential-Red100': '{colors.data viz.sequential.red100}',
  'colorTheme/Light-Data viz-Background-Sequential-Teal200': '{colors.data viz.sequential.teal200}',
  'colorTheme/Light-Data viz-Background-Sequential-Teal100': '{colors.data viz.sequential.teal100}',
  'colorTheme/Light-Data viz-Background-Sequential-Ocean300': '{colors.data viz.sequential.ocean300}',
  'colorTheme/Light-Data viz-Background-Sequential-Ocean200': '{colors.data viz.sequential.ocean200}',
  'colorTheme/Light-Data viz-Background-Sequential-Ocean100': '{colors.data viz.sequential.ocean100}',
  'colorTheme/Light-Data viz-Background-Sequential-Green200': '{colors.data viz.sequential.green200}',
  'colorTheme/Light-Data viz-Background-Sequential-Green100': '{colors.data viz.sequential.green100}',
  'colorTheme/Light-Data viz-Background-Sequential-Yellow200': '{colors.data viz.sequential.yellow200}',
  'colorTheme/Light-Data viz-Background-Sequential-Yellow100': '{colors.data viz.sequential.yellow100}',
  'colorTheme/Light-Data viz-Background-Neutral-Black': '{colors.neutral.black}',
  'Theme/Light-Control logic-Theme switch': 'Light',
  'colorTheme/Dark-Neutral-Background-1-Rest': '{colors.neutral.black}',
  'colorTheme/Dark-Neutral-Background-1-Hover': '{colors.neutral.grey-10}',
  'colorTheme/Dark-Neutral-Background-1-Pressed': '{colors.neutral.grey-12}',
  'colorTheme/Dark-Neutral-Background-1-Selected': '{colors.neutral.grey-8}',
  'colorTheme/Dark-Neutral-Background-2-Rest': '{colors.neutral.grey-6}',
  'colorTheme/Dark-Neutral-Background-3-Rest': '{colors.neutral.grey-12}',
  'colorTheme/Dark-Neutral-Background-3-Hover': '{colors.neutral.grey-10}',
  'colorTheme/Dark-Neutral-Background-3-Pressed': '{colors.neutral.grey-10}',
  'colorTheme/Dark-Neutral-Background-4-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Dark-Neutral-Background-4-Hover': '{colors.neutral.grey-70}',
  'colorTheme/Dark-Neutral-Background-4-Pressed': '{colors.neutral.grey-60}',
  'colorTheme/Dark-Neutral-Background-5-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Dark-Neutral-Background-6-Rest': '{colors.neutral.grey-20}',
  'colorTheme/Dark-Neutral-Background-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Background-Inverted-Disabled-Rest': '{colors.alpha.white.10}',
  'colorTheme/Dark-Neutral-Background-Alpha-1-Rest': '{colors.alpha.brand-10.50}',
  'colorTheme/Dark-Neutral-Background-Alpha-2-Rest': '{colors.alpha.black.70}',
  'colorTheme/Dark-Neutral-Background-Static-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Background-Subtle-Rest': '{colors.alpha.black.0}',
  'colorTheme/Dark-Neutral-Background-Subtle-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Dark-Neutral-Background-Subtle-Pressed': '{colors.neutral.grey-70}',
  'colorTheme/Dark-Neutral-Background-Subtle-Selected': '{colors.neutral.grey-90}',
  'colorTheme/Dark-Neutral-Background-Subtle-Light alpha-Hover': '#242424cc',
  'colorTheme/Dark-Neutral-Background-Subtle-Light alpha-Pressed': '#24242480',
  'colorTheme/Dark-Neutral-Background-Subtle-Light alpha-Selected': '{colors.alpha.black.0}',
  'colorTheme/Dark-Neutral-Background-Subtle-Inverted-Rest': '{colors.alpha.black.0}',
  'colorTheme/Dark-Neutral-Background-Subtle-Inverted-Hover': '{colors.alpha.black.10}',
  'colorTheme/Dark-Neutral-Background-Subtle-Inverted-Pressed': '{colors.alpha.black.30}',
  'colorTheme/Dark-Neutral-Background-Subtle-Inverted-Selected': '{colors.alpha.black.20}',
  'colorTheme/Dark-Neutral-Background-Transparent-Rest': '{colors.alpha.black.0}',
  'colorTheme/Dark-Neutral-Background-Transparent-Hover': '{colors.alpha.black.0}',
  'colorTheme/Dark-Neutral-Background-Transparent-Pressed': '{colors.alpha.black.0}',
  'colorTheme/Dark-Neutral-Background-Transparent-Selected': '{colors.alpha.black.0}',
  'colorTheme/Dark-Neutral-Background-Disabled-Rest': '{colors.neutral.grey-8}',
  'colorTheme/Dark-Neutral-Background-Stencil-1-Rest': '#575757',
  'colorTheme/Dark-Neutral-Background-Stencil-2-Rest': '{colors.neutral.grey-20}',
  'colorTheme/Dark-Neutral-Background-Overlay-Rest': '{colors.alpha.black.50}',
  'colorTheme/Dark-Neutral-Background-Overlay-Scrollbar-Rest': '{colors.alpha.white.60}',
  'colorTheme/Dark-Neutral-Foreground-1-Rest primary text': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-1-Hover': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-1-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-1-Selected': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-2-Rest secondary text': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-2-Hover': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-2-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-2-Selected': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-2-Brand-Hover': '{brand-100}',
  'colorTheme/Dark-Neutral-Foreground-2-Brand-Pressed': '{brand-90}',
  'colorTheme/Dark-Neutral-Foreground-2-Brand-Selected': '{brand-100}',
  'colorTheme/Dark-Neutral-Foreground-2-Brand-Rest': '{brand-100}',
  'colorTheme/Dark-Neutral-Foreground-2-Link-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-2-Link-Hover': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-2-Link-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-2-Link-Selected': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-4-Rest': '{colors.neutral.grey-60}',
  'colorTheme/Dark-Neutral-Foreground-Disabled-2-Rest': '{colors.neutral.grey-60}',
  'colorTheme/Dark-Neutral-Foreground-Disabled-Rest': '{colors.neutral.grey-50}',
  'colorTheme/Dark-Neutral-Foreground-Static-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-Inverted-1-Rest': '#242424',
  'colorTheme/Dark-Neutral-Foreground-Inverted-1-Hover': '#242424',
  'colorTheme/Dark-Neutral-Foreground-Inverted-1-Pressed': '#242424',
  'colorTheme/Dark-Neutral-Foreground-Inverted-1-Selected': '#242424',
  'colorTheme/Dark-Neutral-Foreground-Inverted-2-Rest': '#242424',
  'colorTheme/Dark-Neutral-Foreground-Inverted-Disabled-Rest': '{colors.alpha.white.40}',
  'colorTheme/Dark-Neutral-Foreground-Inverted-Link-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-Inverted-Link-Hover': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-Inverted-Link-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-Inverted-Link-Selected': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Foreground-On Brand-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Stroke-1-Rest': '{colors.neutral.grey-40}',
  'colorTheme/Dark-Neutral-Stroke-1-Hover': '{colors.neutral.grey-40}',
  'colorTheme/Dark-Neutral-Stroke-1-Pressed': '{colors.neutral.grey-40}',
  'colorTheme/Dark-Neutral-Stroke-1-Selected': '{colors.neutral.grey-40}',
  'colorTheme/Dark-Neutral-Stroke-2-Rest': '{colors.grey.white}',
  'colorTheme/Dark-Neutral-Stroke-3-Rest': '{colors.neutral.grey-50}',
  'colorTheme/Dark-Neutral-Stroke-Alpha-1-Rest': '{colors.alpha.white.10}',
  'colorTheme/Dark-Neutral-Stroke-Alpha-2-Rest': '{colors.alpha.white.20}',
  'colorTheme/Dark-Neutral-Stroke-Subtle-Rest': '#f5f4f2',
  'colorTheme/Dark-Neutral-Stroke-on Brand-1-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Stroke-on Brand-2-Rest': '{colors.grey.white}',
  'colorTheme/Dark-Neutral-Stroke-Accessible-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Stroke-Accessible-Hover': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Stroke-Accessible-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Stroke-Accessible-Selected': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Stroke-Focus-1-Rest': '{colors.neutral.black}',
  'colorTheme/Dark-Neutral-Stroke-Focus-2-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Neutral-Stroke-Transparent-Interactive-Rest': '{colors.alpha.white.0}',
  'colorTheme/Dark-Neutral-Stroke-Transparent-Disabled-Rest': '{colors.alpha.white.0}',
  'colorTheme/Dark-Neutral-Stroke-Transparent-Rest': '{colors.alpha.white.0}',
  'colorTheme/Dark-Neutral-Stroke-Disabled-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Dark-Neutral-Stroke-Disabled-Inverted-Rest': '{colors.alpha.white.40}',
  'colorTheme/Dark-Brand-Background-1-Rest': '{brand-60}',
  'colorTheme/Dark-Brand-Background-1-Hover': '{brand-40}',
  'colorTheme/Dark-Brand-Background-1-Pressed': '{brand-30}',
  'colorTheme/Dark-Brand-Background-1-Selected': '{brand-20}',
  'colorTheme/Dark-Brand-Background-2-Rest': '{brand-20}',
  'colorTheme/Dark-Brand-Background-2-Hover': '{brand-40}',
  'colorTheme/Dark-Brand-Background-2-Pressed': '{brand-10}',
  'colorTheme/Dark-Brand-Background-3-Rest': '#ffffff',
  'colorTheme/Dark-Brand-Background-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Brand-Background-Inverted-Hover': '{brand-120}',
  'colorTheme/Dark-Brand-Background-Inverted-Pressed': '{brand-130}',
  'colorTheme/Dark-Brand-Background-Inverted-Selected': '{brand-100}',
  'colorTheme/Dark-Brand-Background-Static-Rest': '{brand-80}',
  'colorTheme/Dark-Brand-Background-Compound-Rest': '{brand-100}',
  'colorTheme/Dark-Brand-Background-Compound-Hover': '{brand-110}',
  'colorTheme/Dark-Brand-Background-Compound-Pressed': '{brand-90}',
  'colorTheme/Dark-Brand-Foreground-1-Rest': '{brand-100}',
  'colorTheme/Dark-Brand-Foreground-1-Hover': '{brand-100}',
  'colorTheme/Dark-Brand-Foreground-1-Pressed': '{brand-100}',
  'colorTheme/Dark-Brand-Foreground-1-Selected': '{brand-100}',
  'colorTheme/Dark-Brand-Foreground-2-Rest': '{brand-110}',
  'colorTheme/Dark-Brand-Foreground-2-Hover': '{brand-130}',
  'colorTheme/Dark-Brand-Foreground-2-Pressed': '{brand-100}',
  'colorTheme/Dark-Brand-Foreground-Link-Rest': '{brand-100}',
  'colorTheme/Dark-Brand-Foreground-Link-Hover': '{brand-110}',
  'colorTheme/Dark-Brand-Foreground-Link-Pressed': '{brand-90}',
  'colorTheme/Dark-Brand-Foreground-Link-Selected': '{brand-100}',
  'colorTheme/Dark-Brand-Foreground-Inverted-Rest': '{brand-80}',
  'colorTheme/Dark-Brand-Foreground-Inverted-Hover': '{brand-70}',
  'colorTheme/Dark-Brand-Foreground-Inverted-Pressed': '{brand-60}',
  'colorTheme/Dark-Brand-Foreground-On Light-Rest': '{brand-70}',
  'colorTheme/Dark-Brand-Foreground-On Light-Hover': '{brand-70}',
  'colorTheme/Dark-Brand-Foreground-On Light-Pressed': '{brand-50}',
  'colorTheme/Dark-Brand-Foreground-On Light-Selected': '{brand-60}',
  'colorTheme/Dark-Brand-Foreground-Compound-Rest': '{brand-100}',
  'colorTheme/Dark-Brand-Foreground-Compound-Hover': '{brand-110}',
  'colorTheme/Dark-Brand-Foreground-Compound-Pressed': '{brand-90}',
  'colorTheme/Dark-Brand-Stroke-1-Rest': '{brand-100}',
  'colorTheme/Dark-Brand-Stroke-1-Hover': '#2886de',
  'colorTheme/Dark-Brand-Stroke-1-Pressed': '{brand-70}',
  'colorTheme/Dark-Brand-Stroke-1-Selected': '{brand-70}',
  'colorTheme/Dark-Brand-Stroke-2-Rest': '{brand-50}',
  'colorTheme/Dark-Brand-Stroke-2-Contrast-Rest': '{brand-60}',
  'colorTheme/Dark-Brand-Stroke-3-Rest': '#ffffff',
  'colorTheme/Dark-Brand-Stroke-Compound-Rest': '{brand-100}',
  'colorTheme/Dark-Brand-Stroke-Compound-Hover': '{brand-110}',
  'colorTheme/Dark-Brand-Stroke-Compound-Pressed': '{brand-90}',
  'colorTheme/Dark-Status-Danger-Background-1-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Status-Danger-Background-3-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Dark-Status-Danger-Foreground-1-Rest': '{colors.shared.cranberry.tint 30}',
  'colorTheme/Dark-Status-Danger-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Status-Danger-Stroke-1-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Dark-Status-Danger-Stroke-2-Rest': '{colors.shared.cranberry.tint 30}',
  'colorTheme/Dark-Status-Success-Background-1-Rest': '{colors.shared.green.tint 60}',
  'colorTheme/Dark-Status-Success-Background-3-Rest': '{colors.shared.green.primary}',
  'colorTheme/Dark-Status-Success-Foreground-1-Rest': '{colors.shared.green.primary}',
  'colorTheme/Dark-Status-Success-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Status-Success-Stroke-1-Rest': '{colors.shared.green.primary}',
  'colorTheme/Dark-Status-Success-Stroke-2-Rest': '{colors.shared.green.tint 30}',
  'colorTheme/Dark-Status-Warning-Background-1-Rest': '{colors.shared.orange.tint 60}',
  'colorTheme/Dark-Status-Warning-Background-3-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Dark-Status-Warning-Foreground-1-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Dark-Status-Warning-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Status-Warning-Stroke-1-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Dark-Status-Warning-Stroke-2-Rest': '{colors.shared.orange.tint 30}',
  'colorTheme/Dark-Status-Oof-Foreground-3-Rest': '{colors.shared.berry.tint 20}',
  'colorTheme/Dark-Status-Away-Background-3-Rest': '{colors.shared.marigold.primary}',
  'colorTheme/Dark-Status-Available-Foreground-3-Rest': '{colors.shared.light green.primary}',
  'colorTheme/Dark-Status-Generic-Anchor-Background-2-Rest': '{colors.shared.anchor.shade 30}',
  'colorTheme/Dark-Status-Generic-Anchor-Foreground-2-Rest': '{colors.shared.anchor.tint 40}',
  'colorTheme/Dark-Status-Generic-Anchor-Stroke-Active-Rest': '{colors.shared.anchor.tint 30}',
  'colorTheme/Dark-Status-Generic-Information-Background-1-Rest': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Background-1-Hover': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Background-1-Pressed': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Stroke-1-Rest': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Stroke-2-Rest': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Stroke-2-Hover': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Stroke-2-Pressed': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Foreground-Rest': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Foreground-Hover': '#ffffff',
  'colorTheme/Dark-Status-Generic-Information-Foreground-Pressed': '#ffffff',
  'colorTheme/Dark-Status-Severe-Background-1-Rest': '{colors.shared.dark orange.tint 60}',
  'colorTheme/Dark-Status-Severe-Background-3-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Dark-Status-Severe-Foreground-1-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Dark-Status-Severe-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Dark-Status-Severe-Stroke-1-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Dark-Status-Severe-Stroke-2-Rest': '{colors.shared.dark orange.tint 30}',
  'colorTheme/Dark-Shadow-ambient': '#00000033',
  'colorTheme/Dark-Shadow-ambient-lighter': '#0000001f',
  'colorTheme/Dark-Shadow-ambient-darker': '#00000066',
  'colorTheme/Dark-Shadow-brand-ambient': '#00000040',
  'colorTheme/Dark-Shadow-key': '#00000047',
  'colorTheme/Dark-Shadow-key-lighter': '#00000024',
  'colorTheme/Dark-Shadow-key-darker': '#0000007a',
  'colorTheme/Dark-Shadow-brand-key': '#0000004d',
  'colorTheme/Dark-Data viz-Foreground-Labels-Categorical': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Data': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Blue': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Gray': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Red': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Teal': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Ocean': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Green': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Yellow300': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Blue400': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Gray400': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Red400': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Teal300': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Red300': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Teal400': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Ocean400': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Green400': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Yellow400': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Green300': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Gray300': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Blue200': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Labels-Color-Ocean200': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Accessibility-Text dark bkgd': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-Accessibility-Text light bkgd': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-KPI Card-Text dark bkgd': '#ffffff',
  'colorTheme/Dark-Data viz-Foreground-KPI Card-Text light bkgd': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Gridline': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Axis-Target-Benchmark': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Blue': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Blue400': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Gray': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Gray400': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Red': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Red300': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Red400': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Teal': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Teal300': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Teal400': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Ocean': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Ocean400': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Green': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Green300': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Green400': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Yellow300': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Yellow400': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Gray300': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Blue200': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Ocean200': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Color-Yellow': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Trend-Average': '#ffffff',
  'colorTheme/Dark-Data viz-Stroke-Accessible outline': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Foreground-Light bkgd-Positive': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Foreground-Light bkgd-Negative': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Foreground-Light bkgd-Notice': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Positive': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Negative': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Notice': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Stroke-Light bkgd-Positive': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Stroke-Light bkgd-Negative': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Stroke-Light bkgd-Notice': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Positive': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Negative': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Notice': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Background-Positive': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Background-Negative': '#ffffff',
  'colorTheme/Dark-Data viz-Semantic-Background-Notice': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Core-Blue': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Core-Gray': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Core-Red': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Core-Teal': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Core-Ocean': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Core-Green': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Core-Yellow': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Blue400': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Gray400': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Red300': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Red400': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Teal300': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Teal400': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Ocean400': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Green300': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Green400': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Yellow300': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Yellow400': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Blue300': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Blue200': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Blue100': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Gray300': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Gray200': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Gray100': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Red200': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Red100': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Teal200': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Teal100': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Ocean300': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Ocean200': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Ocean100': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Green200': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Green100': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Yellow200': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Sequential-Yellow100': '#ffffff',
  'colorTheme/Dark-Data viz-Background-Neutral-Black': '#ffffff',
  'Theme/Dark-Control logic-Theme switch': 'Dark',
  'colorGlobal/Value-Colors-Neutral-Black': '#000000',
  'colorGlobal/Value-Colors-Neutral-Grey-6': '#111111',
  'colorGlobal/Value-Colors-Neutral-Grey-8': '#2c2c2c',
  'colorGlobal/Value-Colors-Neutral-Grey-10': '#3a3a3a',
  'colorGlobal/Value-Colors-Neutral-Grey-12': '#595959',
  'colorGlobal/Value-Colors-Neutral-Grey-20': '#626a6a',
  'colorGlobal/Value-Colors-Neutral-Grey-30': '#788383',
  'colorGlobal/Value-Colors-Neutral-Grey-40': '#959d9d',
  'colorGlobal/Value-Colors-Neutral-Grey-50': '#afb6b6',
  'colorGlobal/Value-Colors-Neutral-Grey-60': '#cacece',
  'colorGlobal/Value-Colors-Neutral-Grey-70': '#e4e7e7',
  'colorGlobal/Value-Colors-Neutral-Grey-80': '#f2f3f3',
  'colorGlobal/Value-Colors-Neutral-Grey-90': '#f8f8f8',
  'colorGlobal/Value-Colors-Neutral-White': '#ffffff',
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 50': '#1a0607',
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 40': '#310b0d',
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 30': '#5c1519',
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 20': '#7d1d21',
  'colorGlobal/Value-Colors-Shared-Burgundy-Shade 10': '#942228',
  'colorGlobal/Value-Colors-Shared-Burgundy-Primary': '#a4262c',
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 10': '#af393e',
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 20': '#ba4d52',
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 30': '#c86c70',
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 40': '#e4afb2',
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 50': '#f0d3d4',
  'colorGlobal/Value-Colors-Shared-Burgundy-Tint 60': '#fbf4f4',
  'colorGlobal/Value-Colors-Shared-Cranberry-Primary': '#ad0000',
  'colorGlobal/Value-Colors-Shared-Cranberry-Tint 30': '#dd9090',
  'colorGlobal/Value-Colors-Shared-Cranberry-Tint 60': '#fcdfdf',
  'colorGlobal/Value-Colors-Shared-Red-Shade 50': '#210809',
  'colorGlobal/Value-Colors-Shared-Red-Shade 40': '#3f1011',
  'colorGlobal/Value-Colors-Shared-Red-Shade 30': '#751d1f',
  'colorGlobal/Value-Colors-Shared-Red-Shade 20': '#9f282b',
  'colorGlobal/Value-Colors-Shared-Red-Shade 10': '#bc2f32',
  'colorGlobal/Value-Colors-Shared-Red-Primary': '#d13438',
  'colorGlobal/Value-Colors-Shared-Red-Tint 10': '#d7494c',
  'colorGlobal/Value-Colors-Shared-Red-Tint 20': '#dc5e62',
  'colorGlobal/Value-Colors-Shared-Red-Tint 30': '#e37d80',
  'colorGlobal/Value-Colors-Shared-Red-Tint 40': '#f1bbbc',
  'colorGlobal/Value-Colors-Shared-Red-Tint 50': '#f8dadb',
  'colorGlobal/Value-Colors-Shared-Red-Tint 60': '#fdf6f6',
  'colorGlobal/Value-Colors-Shared-Dark Orange-Primary': '#da3b01',
  'colorGlobal/Value-Colors-Shared-Dark Orange-Tint 30': '#f5c0ac',
  'colorGlobal/Value-Colors-Shared-Dark Orange-Tint 60': '#f8e8e1',
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 50': '#1b0a01',
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 40': '#321303',
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 30': '#5e2405',
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 20': '#7f3107',
  'colorGlobal/Value-Colors-Shared-Bronze-Shade 10': '#963a08',
  'colorGlobal/Value-Colors-Shared-Bronze-Primary': '#a74109',
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 10': '#b2521e',
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 20': '#bc6535',
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 30': '#ca8057',
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 40': '#e5bba4',
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 50': '#f1d9cc',
  'colorGlobal/Value-Colors-Shared-Bronze-Tint 60': '#fbf5f2',
  'colorGlobal/Value-Colors-Shared-Orange-Primary': '#c9601c',
  'colorGlobal/Value-Colors-Shared-Orange-Tint 30': '#f0a371',
  'colorGlobal/Value-Colors-Shared-Orange-Tint 60': '#fbeee6',
  'colorGlobal/Value-Colors-Shared-Peach-Shade 50': '#291600',
  'colorGlobal/Value-Colors-Shared-Peach-Shade 40': '#4d2a00',
  'colorGlobal/Value-Colors-Shared-Peach-Shade 30': '#8f4e00',
  'colorGlobal/Value-Colors-Shared-Peach-Shade 20': '#c26a00',
  'colorGlobal/Value-Colors-Shared-Peach-Shade 10': '#e67e00',
  'colorGlobal/Value-Colors-Shared-Peach-Primary': '#ff8c00',
  'colorGlobal/Value-Colors-Shared-Peach-Tint 10': '#ff9a1f',
  'colorGlobal/Value-Colors-Shared-Peach-Tint 20': '#ffa83d',
  'colorGlobal/Value-Colors-Shared-Peach-Tint 30': '#ffba66',
  'colorGlobal/Value-Colors-Shared-Peach-Tint 40': '#ffddb3',
  'colorGlobal/Value-Colors-Shared-Peach-Tint 50': '#ffedd6',
  'colorGlobal/Value-Colors-Shared-Peach-Tint 60': '#fffaf5',
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 50': '#251a00',
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 40': '#463100',
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 30': '#835b00',
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 20': '#b27c00',
  'colorGlobal/Value-Colors-Shared-Marigold-Shade 10': '#d39300',
  'colorGlobal/Value-Colors-Shared-Marigold-Primary': '#eaa300',
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 10': '#edad1c',
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 20': '#efb839',
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 30': '#f2c661',
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 40': '#f9e2ae',
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 50': '#fcefd3',
  'colorGlobal/Value-Colors-Shared-Marigold-Tint 60': '#fefbf4',
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 50': '#282400',
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 40': '#4c4400',
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 30': '#817400',
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 20': '#c0ad00',
  'colorGlobal/Value-Colors-Shared-Yellow-Shade 10': '#e4cc00',
  'colorGlobal/Value-Colors-Shared-Yellow-Primary': '#fde300',
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 10': '#fde61e',
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 20': '#fdea3d',
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 30': '#feee66',
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 40': '#fef7b2',
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 50': '#fffad6',
  'colorGlobal/Value-Colors-Shared-Yellow-Tint 60': '#fffef5',
  'colorGlobal/Value-Colors-Shared-Gold-Shade 50': '#1f1900',
  'colorGlobal/Value-Colors-Shared-Gold-Shade 40': '#3a2f00',
  'colorGlobal/Value-Colors-Shared-Gold-Shade 30': '#6c5700',
  'colorGlobal/Value-Colors-Shared-Gold-Shade 20': '#937700',
  'colorGlobal/Value-Colors-Shared-Gold-Shade 10': '#ae8c00',
  'colorGlobal/Value-Colors-Shared-Gold-Primary': '#c19c00',
  'colorGlobal/Value-Colors-Shared-Gold-Tint 10': '#c8a718',
  'colorGlobal/Value-Colors-Shared-Gold-Tint 20': '#d0b232',
  'colorGlobal/Value-Colors-Shared-Gold-Tint 30': '#dac157',
  'colorGlobal/Value-Colors-Shared-Gold-Tint 40': '#ecdfa5',
  'colorGlobal/Value-Colors-Shared-Gold-Tint 50': '#f5eece',
  'colorGlobal/Value-Colors-Shared-Gold-Tint 60': '#fdfbf2',
  'colorGlobal/Value-Colors-Shared-Brass-Shade 50': '#181202',
  'colorGlobal/Value-Colors-Shared-Brass-Shade 40': '#2e2103',
  'colorGlobal/Value-Colors-Shared-Brass-Shade 30': '#553e06',
  'colorGlobal/Value-Colors-Shared-Brass-Shade 20': '#745408',
  'colorGlobal/Value-Colors-Shared-Brass-Shade 10': '#89640a',
  'colorGlobal/Value-Colors-Shared-Brass-Primary': '#986f0b',
  'colorGlobal/Value-Colors-Shared-Brass-Tint 10': '#a47d1e',
  'colorGlobal/Value-Colors-Shared-Brass-Tint 20': '#b18c34',
  'colorGlobal/Value-Colors-Shared-Brass-Tint 30': '#c1a256',
  'colorGlobal/Value-Colors-Shared-Brass-Tint 40': '#e0cea2',
  'colorGlobal/Value-Colors-Shared-Brass-Tint 50': '#efe4cb',
  'colorGlobal/Value-Colors-Shared-Brass-Tint 60': '#fbf8f2',
  'colorGlobal/Value-Colors-Shared-Brown-Shade 50': '#170e07',
  'colorGlobal/Value-Colors-Shared-Brown-Shade 40': '#2b1a0e',
  'colorGlobal/Value-Colors-Shared-Brown-Shade 30': '#50301a',
  'colorGlobal/Value-Colors-Shared-Brown-Shade 20': '#6c4123',
  'colorGlobal/Value-Colors-Shared-Brown-Shade 10': '#804d29',
  'colorGlobal/Value-Colors-Shared-Brown-Primary': '#8e562e',
  'colorGlobal/Value-Colors-Shared-Brown-Tint 10': '#9c663f',
  'colorGlobal/Value-Colors-Shared-Brown-Tint 20': '#a97652',
  'colorGlobal/Value-Colors-Shared-Brown-Tint 30': '#bb8f6f',
  'colorGlobal/Value-Colors-Shared-Brown-Tint 40': '#ddc3b0',
  'colorGlobal/Value-Colors-Shared-Brown-Tint 50': '#edded3',
  'colorGlobal/Value-Colors-Shared-Brown-Tint 60': '#faf7f4',
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 50': '#0c0704',
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 40': '#170c08',
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 30': '#2b1710',
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 20': '#3a1f15',
  'colorGlobal/Value-Colors-Shared-Dark brown-Shade 10': '#452519',
  'colorGlobal/Value-Colors-Shared-Dark brown-Primary': '#4d291c',
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 10': '#623a2b',
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 20': '#784d3e',
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 30': '#946b5c',
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 40': '#caada3',
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 50': '#e3d2cb',
  'colorGlobal/Value-Colors-Shared-Dark brown-Tint 60': '#f8f3f2',
  'colorGlobal/Value-Colors-Shared-Lime-Shade 50': '#121b06',
  'colorGlobal/Value-Colors-Shared-Lime-Shade 40': '#23330b',
  'colorGlobal/Value-Colors-Shared-Lime-Shade 30': '#405f14',
  'colorGlobal/Value-Colors-Shared-Lime-Shade 20': '#57811b',
  'colorGlobal/Value-Colors-Shared-Lime-Shade 10': '#689920',
  'colorGlobal/Value-Colors-Shared-Lime-Primary': '#73aa24',
  'colorGlobal/Value-Colors-Shared-Lime-Tint 10': '#81b437',
  'colorGlobal/Value-Colors-Shared-Lime-Tint 20': '#90be4c',
  'colorGlobal/Value-Colors-Shared-Lime-Tint 30': '#a4cc6c',
  'colorGlobal/Value-Colors-Shared-Lime-Tint 40': '#cfe5af',
  'colorGlobal/Value-Colors-Shared-Lime-Tint 50': '#e5f1d3',
  'colorGlobal/Value-Colors-Shared-Lime-Tint 60': '#f8fcf4',
  'colorGlobal/Value-Colors-Shared-Forest-Shade 50': '#0c1501',
  'colorGlobal/Value-Colors-Shared-Forest-Shade 40': '#162702',
  'colorGlobal/Value-Colors-Shared-Forest-Shade 30': '#294903',
  'colorGlobal/Value-Colors-Shared-Forest-Shade 20': '#376304',
  'colorGlobal/Value-Colors-Shared-Forest-Shade 10': '#427505',
  'colorGlobal/Value-Colors-Shared-Forest-Primary': '#498205',
  'colorGlobal/Value-Colors-Shared-Forest-Tint 10': '#599116',
  'colorGlobal/Value-Colors-Shared-Forest-Tint 20': '#6ba02b',
  'colorGlobal/Value-Colors-Shared-Forest-Tint 30': '#85b44c',
  'colorGlobal/Value-Colors-Shared-Forest-Tint 40': '#bdd99b',
  'colorGlobal/Value-Colors-Shared-Forest-Tint 50': '#dbebc7',
  'colorGlobal/Value-Colors-Shared-Forest-Tint 60': '#f6faf0',
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 50': '#002111',
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 40': '#003d20',
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 30': '#00723b',
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 20': '#009b51',
  'colorGlobal/Value-Colors-Shared-Seafoam-Shade 10': '#00b85f',
  'colorGlobal/Value-Colors-Shared-Seafoam-Primary': '#00cc6a',
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 10': '#19d279',
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 20': '#34d889',
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 30': '#5ae0a0',
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 40': '#a8f0cd',
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 50': '#cff7e4',
  'colorGlobal/Value-Colors-Shared-Seafoam-Tint 60': '#f3fdf8',
  'colorGlobal/Value-Colors-Shared-Light green-Shade 50': '#031a02',
  'colorGlobal/Value-Colors-Shared-Light green-Shade 40': '#063004',
  'colorGlobal/Value-Colors-Shared-Light green-Shade 30': '#0b5a08',
  'colorGlobal/Value-Colors-Shared-Light green-Shade 20': '#0e7a0b',
  'colorGlobal/Value-Colors-Shared-Light green-Shade 10': '#11910d',
  'colorGlobal/Value-Colors-Shared-Light green-Primary': '#13a10e',
  'colorGlobal/Value-Colors-Shared-Light green-Tint 10': '#27ac22',
  'colorGlobal/Value-Colors-Shared-Light green-Tint 20': '#3db838',
  'colorGlobal/Value-Colors-Shared-Light green-Tint 30': '#5ec75a',
  'colorGlobal/Value-Colors-Shared-Light green-Tint 40': '#a7e3a5',
  'colorGlobal/Value-Colors-Shared-Light green-Tint 50': '#cef0cd',
  'colorGlobal/Value-Colors-Shared-Light green-Tint 60': '#f2fbf2',
  'colorGlobal/Value-Colors-Shared-Green-Primary': '#0a7f00',
  'colorGlobal/Value-Colors-Shared-Green-Tint 30': '#8dc881',
  'colorGlobal/Value-Colors-Shared-Green-Tint 60': '#e2f5e0',
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 50': '#021102',
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 40': '#032003',
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 30': '#063b06',
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 20': '#085108',
  'colorGlobal/Value-Colors-Shared-Dark green-Shade 10': '#0a5f0a',
  'colorGlobal/Value-Colors-Shared-Dark green-Primary': '#0b6a0b',
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 10': '#1a7c1a',
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 20': '#2d8e2d',
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 30': '#4da64d',
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 40': '#9ad29a',
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 50': '#c6e7c6',
  'colorGlobal/Value-Colors-Shared-Dark green-Tint 60': '#f0f9f0',
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 50': '#001d1f',
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 40': '#00373a',
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 30': '#00666d',
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 20': '#008b94',
  'colorGlobal/Value-Colors-Shared-Light teal-Shade 10': '#00a5af',
  'colorGlobal/Value-Colors-Shared-Light teal-Primary': '#00b7c3',
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 10': '#18bfca',
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 20': '#32c8d1',
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 30': '#58d3db',
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 40': '#a6e9ed',
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 50': '#cef3f5',
  'colorGlobal/Value-Colors-Shared-Light teal-Tint 60': '#f2fcfd',
  'colorGlobal/Value-Colors-Shared-Teal-Shade 50': '#001516',
  'colorGlobal/Value-Colors-Shared-Teal-Shade 40': '#012728',
  'colorGlobal/Value-Colors-Shared-Teal-Shade 30': '#02494c',
  'colorGlobal/Value-Colors-Shared-Teal-Shade 20': '#026467',
  'colorGlobal/Value-Colors-Shared-Teal-Shade 10': '#037679',
  'colorGlobal/Value-Colors-Shared-Teal-Primary': '#038387',
  'colorGlobal/Value-Colors-Shared-Teal-Tint 10': '#159195',
  'colorGlobal/Value-Colors-Shared-Teal-Tint 20': '#2aa0a4',
  'colorGlobal/Value-Colors-Shared-Teal-Tint 30': '#4cb4b7',
  'colorGlobal/Value-Colors-Shared-Teal-Tint 40': '#9bd9db',
  'colorGlobal/Value-Colors-Shared-Teal-Tint 50': '#c7ebec',
  'colorGlobal/Value-Colors-Shared-Teal-Tint 60': '#f0fafa',
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 50': '#001010',
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 40': '#001f1f',
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 30': '#003939',
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 20': '#004e4e',
  'colorGlobal/Value-Colors-Shared-Dark teal-Shade 10': '#005c5c',
  'colorGlobal/Value-Colors-Shared-Dark teal-Primary': '#006666',
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 10': '#0e7878',
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 20': '#218b8b',
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 30': '#41a3a3',
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 40': '#92d1d1',
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 50': '#c2e7e7',
  'colorGlobal/Value-Colors-Shared-Dark teal-Tint 60': '#eff9f9',
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 50': '#00181e',
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 40': '#002e38',
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 30': '#005669',
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 20': '#00748f',
  'colorGlobal/Value-Colors-Shared-Cyan-Shade 10': '#008aa9',
  'colorGlobal/Value-Colors-Shared-Cyan-Primary': '#0099bc',
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 10': '#18a4c4',
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 20': '#31afcc',
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 30': '#56bfd7',
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 40': '#a4deeb',
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 50': '#cdedf4',
  'colorGlobal/Value-Colors-Shared-Cyan-Tint 60': '#f2fafc',
  'colorGlobal/Value-Colors-Shared-Steel-Shade 50': '#000f12',
  'colorGlobal/Value-Colors-Shared-Steel-Shade 40': '#001b22',
  'colorGlobal/Value-Colors-Shared-Steel-Shade 30': '#00333f',
  'colorGlobal/Value-Colors-Shared-Steel-Shade 20': '#004555',
  'colorGlobal/Value-Colors-Shared-Steel-Shade 10': '#005265',
  'colorGlobal/Value-Colors-Shared-Steel-Primary': '#005b70',
  'colorGlobal/Value-Colors-Shared-Steel-Tint 10': '#0f6c81',
  'colorGlobal/Value-Colors-Shared-Steel-Tint 20': '#237d92',
  'colorGlobal/Value-Colors-Shared-Steel-Tint 30': '#4496a9',
  'colorGlobal/Value-Colors-Shared-Steel-Tint 40': '#94c8d4',
  'colorGlobal/Value-Colors-Shared-Steel-Tint 50': '#c3e1e8',
  'colorGlobal/Value-Colors-Shared-Steel-Tint 60': '#eff7f9',
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 50': '#091823',
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 40': '#112d42',
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 30': '#20547c',
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 20': '#2c72a8',
  'colorGlobal/Value-Colors-Shared-Light blue-Shade 10': '#3487c7',
  'colorGlobal/Value-Colors-Shared-Light blue-Primary': '#3a96dd',
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 10': '#4fa1e1',
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 20': '#65ade5',
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 30': '#83bdeb',
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 40': '#bfddf5',
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 50': '#dcedfa',
  'colorGlobal/Value-Colors-Shared-Light blue-Tint 60': '#f6fafe',
  'colorGlobal/Value-Colors-Shared-Blue-Shade 50': '#001322',
  'colorGlobal/Value-Colors-Shared-Blue-Shade 40': '#002440',
  'colorGlobal/Value-Colors-Shared-Blue-Shade 30': '#004377',
  'colorGlobal/Value-Colors-Shared-Blue-Shade 20': '#005ba1',
  'colorGlobal/Value-Colors-Shared-Blue-Shade 10': '#006cbf',
  'colorGlobal/Value-Colors-Shared-Blue-Primary': '#0078d4',
  'colorGlobal/Value-Colors-Shared-Blue-Tint 10': '#1a86d9',
  'colorGlobal/Value-Colors-Shared-Blue-Tint 20': '#3595de',
  'colorGlobal/Value-Colors-Shared-Blue-Tint 30': '#5caae5',
  'colorGlobal/Value-Colors-Shared-Blue-Tint 40': '#a9d3f2',
  'colorGlobal/Value-Colors-Shared-Blue-Tint 50': '#d0e7f8',
  'colorGlobal/Value-Colors-Shared-Blue-Tint 60': '#f3f9fd',
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 50': '#000c16',
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 40': '#00172a',
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 30': '#002c4e',
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 20': '#003b6a',
  'colorGlobal/Value-Colors-Shared-Royal blue-Shade 10': '#00467e',
  'colorGlobal/Value-Colors-Shared-Royal blue-Primary': '#004e8c',
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 10': '#125e9a',
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 20': '#286fa8',
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 30': '#4a89ba',
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 40': '#9abfdc',
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 50': '#c7dced',
  'colorGlobal/Value-Colors-Shared-Royal blue-Tint 60': '#f0f6fa',
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 50': '#000910',
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 40': '#00111f',
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 30': '#002039',
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 20': '#002b4e',
  'colorGlobal/Value-Colors-Shared-Dark blue-Shade 10': '#00335c',
  'colorGlobal/Value-Colors-Shared-Dark blue-Primary': '#003966',
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 10': '#0e4a78',
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 20': '#215c8b',
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 30': '#4178a3',
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 40': '#92b5d1',
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 50': '#c2d6e7',
  'colorGlobal/Value-Colors-Shared-Dark blue-Tint 60': '#eff4f9',
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 50': '#0d1126',
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 40': '#182047',
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 30': '#2c3c85',
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 20': '#3c51b4',
  'colorGlobal/Value-Colors-Shared-Cornflower-Shade 10': '#4760d5',
  'colorGlobal/Value-Colors-Shared-Cornflower-Primary': '#4f6bed',
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 10': '#637cef',
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 20': '#778df1',
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 30': '#93a4f4',
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 40': '#c8d1fa',
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 50': '#e1e6fc',
  'colorGlobal/Value-Colors-Shared-Cornflower-Tint 60': '#f7f9fe',
  'colorGlobal/Value-Colors-Shared-Navy-Shade 50': '#00061d',
  'colorGlobal/Value-Colors-Shared-Navy-Shade 40': '#000c36',
  'colorGlobal/Value-Colors-Shared-Navy-Shade 30': '#001665',
  'colorGlobal/Value-Colors-Shared-Navy-Shade 20': '#001e89',
  'colorGlobal/Value-Colors-Shared-Navy-Shade 10': '#0023a2',
  'colorGlobal/Value-Colors-Shared-Navy-Primary': '#0027b4',
  'colorGlobal/Value-Colors-Shared-Navy-Tint 10': '#173bbd',
  'colorGlobal/Value-Colors-Shared-Navy-Tint 20': '#3050c6',
  'colorGlobal/Value-Colors-Shared-Navy-Tint 30': '#546fd2',
  'colorGlobal/Value-Colors-Shared-Navy-Tint 40': '#a3b2e8',
  'colorGlobal/Value-Colors-Shared-Navy-Tint 50': '#ccd5f3',
  'colorGlobal/Value-Colors-Shared-Navy-Tint 60': '#f2f4fc',
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 50': '#120f25',
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 40': '#221d46',
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 30': '#3f3682',
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 20': '#5649b0',
  'colorGlobal/Value-Colors-Shared-Lavender-Shade 10': '#6656d1',
  'colorGlobal/Value-Colors-Shared-Lavender-Primary': '#7160e8',
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 10': '#8172eb',
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 20': '#9184ee',
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 30': '#a79cf1',
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 40': '#d2ccf8',
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 50': '#e7e4fb',
  'colorGlobal/Value-Colors-Shared-Lavender-Tint 60': '#f9f8fe',
  'colorGlobal/Value-Colors-Shared-Purple-Shade 50': '#0f0717',
  'colorGlobal/Value-Colors-Shared-Purple-Shade 40': '#1c0e2b',
  'colorGlobal/Value-Colors-Shared-Purple-Shade 30': '#341a51',
  'colorGlobal/Value-Colors-Shared-Purple-Shade 20': '#46236e',
  'colorGlobal/Value-Colors-Shared-Purple-Shade 10': '#532982',
  'colorGlobal/Value-Colors-Shared-Purple-Primary': '#5c2e91',
  'colorGlobal/Value-Colors-Shared-Purple-Tint 10': '#6b3f9e',
  'colorGlobal/Value-Colors-Shared-Purple-Tint 20': '#7c52ab',
  'colorGlobal/Value-Colors-Shared-Purple-Tint 30': '#9470bd',
  'colorGlobal/Value-Colors-Shared-Purple-Tint 40': '#c6b1de',
  'colorGlobal/Value-Colors-Shared-Purple-Tint 50': '#e0d3ed',
  'colorGlobal/Value-Colors-Shared-Purple-Tint 60': '#f7f4fb',
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 50': '#0a0411',
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 40': '#130820',
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 30': '#240f3c',
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 20': '#311552',
  'colorGlobal/Value-Colors-Shared-Dark purple-Shade 10': '#3a1861',
  'colorGlobal/Value-Colors-Shared-Dark purple-Primary': '#401b6c',
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 10': '#512b7e',
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 20': '#633e8f',
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 30': '#7e5ca7',
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 40': '#b9a3d3',
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 50': '#d8cce7',
  'colorGlobal/Value-Colors-Shared-Dark purple-Tint 60': '#f5f2f9',
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 50': '#16101d',
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 40': '#281e37',
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 30': '#4c3867',
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 20': '#674c8c',
  'colorGlobal/Value-Colors-Shared-Orchid-Shade 10': '#795aa6',
  'colorGlobal/Value-Colors-Shared-Orchid-Primary': '#8764b8',
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 10': '#9373c0',
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 20': '#a083c9',
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 30': '#b29ad4',
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 40': '#d7caea',
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 50': '#e9e2f4',
  'colorGlobal/Value-Colors-Shared-Orchid-Tint 60': '#f9f8fc',
  'colorGlobal/Value-Colors-Shared-Grape-Shade 50': '#160418',
  'colorGlobal/Value-Colors-Shared-Grape-Shade 40': '#29072e',
  'colorGlobal/Value-Colors-Shared-Grape-Shade 30': '#4c0d55',
  'colorGlobal/Value-Colors-Shared-Grape-Shade 20': '#671174',
  'colorGlobal/Value-Colors-Shared-Grape-Shade 10': '#7a1589',
  'colorGlobal/Value-Colors-Shared-Grape-Primary': '#881798',
  'colorGlobal/Value-Colors-Shared-Grape-Tint 10': '#952aa4',
  'colorGlobal/Value-Colors-Shared-Grape-Tint 20': '#a33fb1',
  'colorGlobal/Value-Colors-Shared-Grape-Tint 30': '#b55fc1',
  'colorGlobal/Value-Colors-Shared-Grape-Tint 40': '#d9a7e0',
  'colorGlobal/Value-Colors-Shared-Grape-Tint 50': '#eaceef',
  'colorGlobal/Value-Colors-Shared-Grape-Tint 60': '#faf2fb',
  'colorGlobal/Value-Colors-Shared-Berry-Shade 50': '#1f091d',
  'colorGlobal/Value-Colors-Shared-Berry-Shade 40': '#3a1136',
  'colorGlobal/Value-Colors-Shared-Berry-Shade 30': '#6d2064',
  'colorGlobal/Value-Colors-Shared-Berry-Shade 20': '#932b88',
  'colorGlobal/Value-Colors-Shared-Berry-Shade 10': '#af33a1',
  'colorGlobal/Value-Colors-Shared-Berry-Primary': '#c239b3',
  'colorGlobal/Value-Colors-Shared-Berry-Tint 10': '#c94cbc',
  'colorGlobal/Value-Colors-Shared-Berry-Tint 20': '#d161c4',
  'colorGlobal/Value-Colors-Shared-Berry-Tint 30': '#da7ed0',
  'colorGlobal/Value-Colors-Shared-Berry-Tint 40': '#edbbe7',
  'colorGlobal/Value-Colors-Shared-Berry-Tint 50': '#f5daf2',
  'colorGlobal/Value-Colors-Shared-Berry-Tint 60': '#fdf5fc',
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 50': '#1c0b1f',
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 40': '#35153a',
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 30': '#63276d',
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 20': '#863593',
  'colorGlobal/Value-Colors-Shared-Lilac-Shade 10': '#9f3faf',
  'colorGlobal/Value-Colors-Shared-Lilac-Primary': '#b146c2',
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 10': '#ba58c9',
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 20': '#c36bd1',
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 30': '#cf87da',
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 40': '#e6bfed',
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 50': '#f2dcf5',
  'colorGlobal/Value-Colors-Shared-Lilac-Tint 60': '#fcf6fd',
  'colorGlobal/Value-Colors-Shared-Pink-Shade 50': '#24091b',
  'colorGlobal/Value-Colors-Shared-Pink-Shade 40': '#441232',
  'colorGlobal/Value-Colors-Shared-Pink-Shade 30': '#80215d',
  'colorGlobal/Value-Colors-Shared-Pink-Shade 20': '#ad2d7e',
  'colorGlobal/Value-Colors-Shared-Pink-Shade 10': '#cd3595',
  'colorGlobal/Value-Colors-Shared-Pink-Primary': '#e43ba6',
  'colorGlobal/Value-Colors-Shared-Pink-Tint 10': '#e750b0',
  'colorGlobal/Value-Colors-Shared-Pink-Tint 20': '#ea66ba',
  'colorGlobal/Value-Colors-Shared-Pink-Tint 30': '#ef85c8',
  'colorGlobal/Value-Colors-Shared-Pink-Tint 40': '#f7c0e3',
  'colorGlobal/Value-Colors-Shared-Pink-Tint 50': '#fbddf0',
  'colorGlobal/Value-Colors-Shared-Pink-Tint 60': '#fef6fb',
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 50': '#240016',
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 40': '#44002a',
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 30': '#7f004e',
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 20': '#ad006a',
  'colorGlobal/Value-Colors-Shared-Hot pink-Shade 10': '#cc007e',
  'colorGlobal/Value-Colors-Shared-Hot pink-Primary': '#e3008c',
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 10': '#e61c99',
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 20': '#ea38a6',
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 30': '#ee5fb7',
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 40': '#f7adda',
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 50': '#fbd2eb',
  'colorGlobal/Value-Colors-Shared-Hot pink-Tint 60': '#fef4fa',
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 50': '#1f0013',
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 40': '#390024',
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 30': '#6b0043',
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 20': '#91005a',
  'colorGlobal/Value-Colors-Shared-Magenta-Shade 10': '#ac006b',
  'colorGlobal/Value-Colors-Shared-Magenta-Primary': '#bf0077',
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 10': '#c71885',
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 20': '#ce3293',
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 30': '#d957a8',
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 40': '#eca5d1',
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 50': '#f5cee6',
  'colorGlobal/Value-Colors-Shared-Magenta-Tint 60': '#fcf2f9',
  'colorGlobal/Value-Colors-Shared-Plum-Shade 50': '#13000c',
  'colorGlobal/Value-Colors-Shared-Plum-Shade 40': '#240017',
  'colorGlobal/Value-Colors-Shared-Plum-Shade 30': '#43002b',
  'colorGlobal/Value-Colors-Shared-Plum-Shade 20': '#5a003b',
  'colorGlobal/Value-Colors-Shared-Plum-Shade 10': '#6b0045',
  'colorGlobal/Value-Colors-Shared-Plum-Primary': '#77004d',
  'colorGlobal/Value-Colors-Shared-Plum-Tint 10': '#87105d',
  'colorGlobal/Value-Colors-Shared-Plum-Tint 20': '#98246f',
  'colorGlobal/Value-Colors-Shared-Plum-Tint 30': '#ad4589',
  'colorGlobal/Value-Colors-Shared-Plum-Tint 40': '#d696c0',
  'colorGlobal/Value-Colors-Shared-Plum-Tint 50': '#e9c4dc',
  'colorGlobal/Value-Colors-Shared-Plum-Tint 60': '#faf0f6',
  'colorGlobal/Value-Colors-Shared-Beige-Shade 50': '#141313',
  'colorGlobal/Value-Colors-Shared-Beige-Shade 40': '#252323',
  'colorGlobal/Value-Colors-Shared-Beige-Shade 30': '#444241',
  'colorGlobal/Value-Colors-Shared-Beige-Shade 20': '#5d5958',
  'colorGlobal/Value-Colors-Shared-Beige-Shade 10': '#6e6968',
  'colorGlobal/Value-Colors-Shared-Beige-Primary': '#7a7574',
  'colorGlobal/Value-Colors-Shared-Beige-Tint 10': '#8a8584',
  'colorGlobal/Value-Colors-Shared-Beige-Tint 20': '#9a9594',
  'colorGlobal/Value-Colors-Shared-Beige-Tint 30': '#afabaa',
  'colorGlobal/Value-Colors-Shared-Beige-Tint 40': '#d7d4d4',
  'colorGlobal/Value-Colors-Shared-Beige-Tint 50': '#eae8e8',
  'colorGlobal/Value-Colors-Shared-Beige-Tint 60': '#faf9f9',
  'colorGlobal/Value-Colors-Shared-Mink-Shade 50': '#0f0e0e',
  'colorGlobal/Value-Colors-Shared-Mink-Shade 40': '#1c1b1a',
  'colorGlobal/Value-Colors-Shared-Mink-Shade 30': '#343231',
  'colorGlobal/Value-Colors-Shared-Mink-Shade 20': '#474443',
  'colorGlobal/Value-Colors-Shared-Mink-Shade 10': '#54514f',
  'colorGlobal/Value-Colors-Shared-Mink-Primary': '#5d5a58',
  'colorGlobal/Value-Colors-Shared-Mink-Tint 10': '#706d6b',
  'colorGlobal/Value-Colors-Shared-Mink-Tint 20': '#84817e',
  'colorGlobal/Value-Colors-Shared-Mink-Tint 30': '#9e9b99',
  'colorGlobal/Value-Colors-Shared-Mink-Tint 40': '#cecccb',
  'colorGlobal/Value-Colors-Shared-Mink-Tint 50': '#e5e4e3',
  'colorGlobal/Value-Colors-Shared-Mink-Tint 60': '#f8f8f8',
  'colorGlobal/Value-Colors-Shared-Silver-Shade 50': '#151818',
  'colorGlobal/Value-Colors-Shared-Silver-Shade 40': '#282d2e',
  'colorGlobal/Value-Colors-Shared-Silver-Shade 30': '#4a5356',
  'colorGlobal/Value-Colors-Shared-Silver-Shade 20': '#657174',
  'colorGlobal/Value-Colors-Shared-Silver-Shade 10': '#78868a',
  'colorGlobal/Value-Colors-Shared-Silver-Primary': '#859599',
  'colorGlobal/Value-Colors-Shared-Silver-Tint 10': '#92a1a5',
  'colorGlobal/Value-Colors-Shared-Silver-Tint 20': '#a0aeb1',
  'colorGlobal/Value-Colors-Shared-Silver-Tint 30': '#b3bfc2',
  'colorGlobal/Value-Colors-Shared-Silver-Tint 40': '#d8dfe0',
  'colorGlobal/Value-Colors-Shared-Silver-Tint 50': '#eaeeef',
  'colorGlobal/Value-Colors-Shared-Silver-Tint 60': '#fafbfb',
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 50': '#111314',
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 40': '#1f2426',
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 30': '#3b4447',
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 20': '#505c60',
  'colorGlobal/Value-Colors-Shared-Platinum-Shade 10': '#5f6d71',
  'colorGlobal/Value-Colors-Shared-Platinum-Primary': '#69797e',
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 10': '#79898d',
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 20': '#89989d',
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 30': '#a0adb2',
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 40': '#cdd6d8',
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 50': '#e4e9ea',
  'colorGlobal/Value-Colors-Shared-Platinum-Tint 60': '#f8f9fa',
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 50': '#090a0b',
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 40': '#111315',
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 30': '#202427',
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 20': '#2b3135',
  'colorGlobal/Value-Colors-Shared-Anchor-Shade 10': '#333a3f',
  'colorGlobal/Value-Colors-Shared-Anchor-Primary': '#394146',
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 10': '#4d565c',
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 20': '#626c72',
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 30': '#808a90',
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 40': '#bcc3c7',
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 50': '#dbdfe1',
  'colorGlobal/Value-Colors-Shared-Anchor-Tint 60': '#f6f7f8',
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 50': '#090909',
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 40': '#111111',
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 30': '#202020',
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 20': '#2b2b2b',
  'colorGlobal/Value-Colors-Shared-Charcoal-Shade 10': '#333333',
  'colorGlobal/Value-Colors-Shared-Charcoal-Primary': '#393939',
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 10': '#515151',
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 20': '#686868',
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 30': '#888888',
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 40': '#c4c4c4',
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 50': '#dfdfdf',
  'colorGlobal/Value-Colors-Shared-Charcoal-Tint 60': '#f7f7f7',
  'colorGlobal/Value-Colors-Shared-Information-Primary': '#007e73',
  'colorGlobal/Value-Colors-Shared-Information-Tint 30': '#8ad0ca',
  'colorGlobal/Value-Colors-Shared-Information-Tint 60': '#e8f8f7',
  'colorGlobal/Value-Colors-Shared-Information-Tint 40': '#abe6e1',
  'colorGlobal/Value-Colors-Shared-Information-Tint 50': '#caedea',
  'colorGlobal/Value-Colors-Shared-Information-Tint 20': '#59b9b1',
  'colorGlobal/Value-Colors-Shared-Information-Tint 10': '#029b8d',
  'colorGlobal/Value-Colors-Shared-Information-Shade 10': '#00554e',
  'colorGlobal/Value-Colors-Shared-Information-Shade 20': '#003e39',
  'colorGlobal/Value-Colors-Alpha-White-0': '#ffffff00',
  'colorGlobal/Value-Colors-Alpha-White-5': '#ffffff0d',
  'colorGlobal/Value-Colors-Alpha-White-10': '#ffffff1a',
  'colorGlobal/Value-Colors-Alpha-White-20': '#ffffff33',
  'colorGlobal/Value-Colors-Alpha-White-30': '#ffffff4d',
  'colorGlobal/Value-Colors-Alpha-White-40': '#ffffff66',
  'colorGlobal/Value-Colors-Alpha-White-50': '#ffffff80',
  'colorGlobal/Value-Colors-Alpha-White-60': '#ffffff99',
  'colorGlobal/Value-Colors-Alpha-White-70': '#ffffffb3',
  'colorGlobal/Value-Colors-Alpha-White-80': '#ffffffcc',
  'colorGlobal/Value-Colors-Alpha-White-90': '#ffffffe6',
  'colorGlobal/Value-Colors-Alpha-Black-0': '#00000000',
  'colorGlobal/Value-Colors-Alpha-Black-5': '#0000000d',
  'colorGlobal/Value-Colors-Alpha-Black-10': '#0000001a',
  'colorGlobal/Value-Colors-Alpha-Black-20': '#00000033',
  'colorGlobal/Value-Colors-Alpha-Black-30': '#0000004d',
  'colorGlobal/Value-Colors-Alpha-Black-40': '#00000066',
  'colorGlobal/Value-Colors-Alpha-Black-50': '#00000080',
  'colorGlobal/Value-Colors-Alpha-Black-60': '#00000099',
  'colorGlobal/Value-Colors-Alpha-Black-70': '#000000b3',
  'colorGlobal/Value-Colors-Alpha-Black-80': '#000000cc',
  'colorGlobal/Value-Colors-Alpha-Black-90': '#000000e6',
  'colorGlobal/Value-Colors-Alpha-Brand-10-5': '#0f1a380d',
  'colorGlobal/Value-Colors-Alpha-Brand-10-10': '#0f1a381a',
  'colorGlobal/Value-Colors-Alpha-Brand-10-20': '#0f1a3833',
  'colorGlobal/Value-Colors-Alpha-Brand-10-30': '#0f1a384d',
  'colorGlobal/Value-Colors-Alpha-Brand-10-40': '#0f1a3866',
  'colorGlobal/Value-Colors-Alpha-Brand-10-50': '#0f1a3880',
  'colorGlobal/Value-Colors-Alpha-Brand-10-60': '#0f1a3899',
  'colorGlobal/Value-Colors-Alpha-Brand-10-70': '#0f1a38b3',
  'colorGlobal/Value-Colors-Alpha-Brand-10-80': '#0f1a38cc',
  'colorGlobal/Value-Colors-Alpha-Brand-10-90': '#0f1a38e6',
  'colorGlobal/Value-Colors-Data viz-Core-Blue': '{brand-60}',
  'colorGlobal/Value-Colors-Data viz-Core-Gray': '#a2aeb5',
  'colorGlobal/Value-Colors-Data viz-Core-Red': '#b94431',
  'colorGlobal/Value-Colors-Data viz-Core-Teal': '#05a3b1',
  'colorGlobal/Value-Colors-Data viz-Core-Ocean': '#0b3873',
  'colorGlobal/Value-Colors-Data viz-Core-Green': '#529c74',
  'colorGlobal/Value-Colors-Data viz-Core-Yellow': '#df9f37',
  'colorGlobal/Value-Colors-Data viz-Semantic-Light bkgd-Positive': '#529c74',
  'colorGlobal/Value-Colors-Data viz-Semantic-Light bkgd-Notice': '#df9f37',
  'colorGlobal/Value-Colors-Data viz-Semantic-Light bkgd-Negative': '#b94431',
  'colorGlobal/Value-Colors-Data viz-Semantic-Dark bkgd-Positive': '#37bb65',
  'colorGlobal/Value-Colors-Data viz-Semantic-Dark bkgd-Negative': '#cc2e48',
  'colorGlobal/Value-Colors-Data viz-Semantic-Dark bkgd-Notice': '#df9f37',
  'colorGlobal/Value-Colors-Data viz-Sequential-Blue400': '#133a77',
  'colorGlobal/Value-Colors-Data viz-Sequential-Blue300': '{brand-60}',
  'colorGlobal/Value-Colors-Data viz-Sequential-Blue200': '#6f94ce',
  'colorGlobal/Value-Colors-Data viz-Sequential-Blue100': '#9ebbe6',
  'colorGlobal/Value-Colors-Data viz-Sequential-Gray400': '#36383a',
  'colorGlobal/Value-Colors-Data viz-Sequential-Gray300': '#646b6f',
  'colorGlobal/Value-Colors-Data viz-Sequential-Gray200': '#a2aeb5',
  'colorGlobal/Value-Colors-Data viz-Sequential-Gray100': '#d1dbe2',
  'colorGlobal/Value-Colors-Data viz-Sequential-Red400': '#460f05',
  'colorGlobal/Value-Colors-Data viz-Sequential-Red300': '#8c2e20',
  'colorGlobal/Value-Colors-Data viz-Sequential-Red200': '#b94431',
  'colorGlobal/Value-Colors-Data viz-Sequential-Red100': '#cf8a7e',
  'colorGlobal/Value-Colors-Data viz-Sequential-Teal400': '#063f44',
  'colorGlobal/Value-Colors-Data viz-Sequential-Teal300': '#136a73',
  'colorGlobal/Value-Colors-Data viz-Sequential-Teal200': '#05a3b1',
  'colorGlobal/Value-Colors-Data viz-Sequential-Teal100': '#80d0d7',
  'colorGlobal/Value-Colors-Data viz-Sequential-Ocean400': '#071e39',
  'colorGlobal/Value-Colors-Data viz-Sequential-Ocean300': '#0b3873',
  'colorGlobal/Value-Colors-Data viz-Sequential-Ocean200': '#5a74cb',
  'colorGlobal/Value-Colors-Data viz-Sequential-Ocean100': '#9ab2ff',
  'colorGlobal/Value-Colors-Data viz-Sequential-Green400': '#08362a',
  'colorGlobal/Value-Colors-Data viz-Sequential-Green300': '#1d6953',
  'colorGlobal/Value-Colors-Data viz-Sequential-Green200': '#529c74',
  'colorGlobal/Value-Colors-Data viz-Sequential-Green100': '#87c3a9',
  'colorGlobal/Value-Colors-Data viz-Sequential-Yellow400': '#563b10',
  'colorGlobal/Value-Colors-Data viz-Sequential-Yellow300': '#a06a14',
  'colorGlobal/Value-Colors-Data viz-Sequential-Yellow200': '#df9f37',
  'colorGlobal/Value-Colors-Data viz-Sequential-Yellow100': '#ffd592',
  'colorGlobal/Value-Colors-Brand-Brand-10': '#0f1a38',
  'colorGlobal/Value-Colors-Brand-Brand-20': '#041e47',
  'colorGlobal/Value-Colors-Brand-Brand-30': '#052c69',
  'colorGlobal/Value-Colors-Brand-Brand-40': '#0c3069',
  'colorGlobal/Value-Colors-Brand-Brand-50': '#19458b',
  'colorGlobal/Value-Colors-Brand-Brand-60': '#295cad',
  'colorGlobal/Value-Colors-Brand-Brand-70': '#3e76cf',
  'colorGlobal/Value-Colors-Brand-Brand-80': '#5692f1',
  'colorGlobal/Value-Colors-Brand-Brand-90': '#80b1ff',
  'colorGlobal/Value-Colors-Brand-Brand-100': '#a5c8ff',
  'colorGlobal/Value-Colors-Brand-Brand-110': '#a5c8ff',
  'colorGlobal/Value-Colors-Brand-Brand-120': '#eef5ff',
  'colorGlobal/Value-Colors-Brand-Brand-130': '#f5f9ff',
  'Global/Value-Corner-radius-None': '0',
  'Global/Value-Corner-radius-Small': '2',
  'Global/Value-Corner-radius-Medium': '4',
  'Global/Value-Corner-radius-Large': '6',
  'Global/Value-Corner-radius-X-Large': '8',
  'Global/Value-Corner-radius-Circular': '9999',
  'Global/Value-Spacing-Horizontal-None': '0',
  'Global/Value-Spacing-Horizontal-XXS': '2',
  'Global/Value-Spacing-Horizontal-XS': '4',
  'Global/Value-Spacing-Horizontal-SNudge': '6',
  'Global/Value-Spacing-Horizontal-S': '8',
  'Global/Value-Spacing-Horizontal-MNudge': '12',
  'Global/Value-Spacing-Horizontal-M': '16',
  'Global/Value-Spacing-Horizontal-L': '32',
  'Global/Value-Spacing-Horizontal-XL': '48',
  'Global/Value-Spacing-Horizontal-XXL': '52',
  'Global/Value-Spacing-Horizontal-XXXL': '56',
  'Global/Value-Spacing-Horizontal-LNudge': '24',
  'Global/Value-Spacing-Horizontal-XXXXL': '64',
  'Global/Value-Spacing-Vertical-None': '0',
  'Global/Value-Spacing-Vertical-XXS': '2',
  'Global/Value-Spacing-Vertical-XS': '4',
  'Global/Value-Spacing-Vertical-SNudge': '6',
  'Global/Value-Spacing-Vertical-S': '8',
  'Global/Value-Spacing-Vertical-MNudge': '12',
  'Global/Value-Spacing-Vertical-M': '16',
  'Global/Value-Spacing-Vertical-L': '32',
  'Global/Value-Spacing-Vertical-XL': '48',
  'Global/Value-Spacing-Vertical-XXL': '52',
  'Global/Value-Spacing-Vertical-XXXL': '56',
  'Global/Value-Spacing-Vertical-LNudge': '24',
  'Global/Value-Spacing-Vertical-XXXXL': '64',
  'Global/Value-Stroke-width-None': '0',
  'Global/Value-Stroke-width-Thin': '1',
  'Global/Value-Stroke-width-Thick': '2',
  'Global/Value-Stroke-width-Thicker': '4',
  'Global/Value-Stroke-width-Thickest': '6',
  'Global/Value-borderRadius-None': '0',
  'Global/Value-borderRadius-Small': '2',
  'Global/Value-borderRadius-Medium': '4',
  'Global/Value-borderRadius-Large': '6',
  'Global/Value-borderRadius-X-Large': '8',
  'Global/Value-borderRadius-Circular': '9999',
  'Global/Value-spacingHorizontal-None': '0',
  'Global/Value-spacingHorizontal-XXS': '2',
  'Global/Value-spacingHorizontal-XS': '4',
  'Global/Value-spacingHorizontal-SNudge': '6',
  'Global/Value-spacingHorizontal-S': '8',
  'Global/Value-spacingHorizontal-MNudge': '12',
  'Global/Value-spacingHorizontal-M': '16',
  'Global/Value-spacingHorizontal-L': '32',
  'Global/Value-spacingHorizontal-XL': '48',
  'Global/Value-spacingHorizontal-XXL': '52',
  'Global/Value-spacingHorizontal-XXXL': '56',
  'Global/Value-spacingHorizontal-LNudge': '24',
  'Global/Value-spacingHorizontal-XXXXL': '64',
  'Global/Value-strokeWidth-None': '0',
  'Global/Value-strokeWidth-Thin': '1',
  'Global/Value-strokeWidth-Thick': '2',
  'Global/Value-strokeWidth-Thicker': '4',
  'Global/Value-strokeWidth-Thickest': '6',
  'Global/Value-spacingVertical-None': '0',
  'Global/Value-spacingVertical-XXS': '2',
  'Global/Value-spacingVertical-XS': '4',
  'Global/Value-spacingVertical-SNudge': '6',
  'Global/Value-spacingVertical-S': '8',
  'Global/Value-spacingVertical-MNudge': '12',
  'Global/Value-spacingVertical-M': '16',
  'Global/Value-spacingVertical-L': '32',
  'Global/Value-spacingVertical-XL': '48',
  'Global/Value-spacingVertical-XXL': '52',
  'Global/Value-spacingVertical-XXXL': '56',
  'Global/Value-spacingVertical-LNudge': '24',
  'Global/Value-spacingVertical-XXXXL': '64',
  'colorBrand/Brand 1-Brand-10': '#0f1a38',
  'colorBrand/Brand 1-Brand-20': '#041e47',
  'colorBrand/Brand 1-Brand-30': '#052c69',
  'colorBrand/Brand 1-Brand-40': '#0c3069',
  'colorBrand/Brand 1-Brand-50': '#19458b',
  'colorBrand/Brand 1-Brand-60': '#295cad',
  'colorBrand/Brand 1-Brand-70': '#3e76cf',
  'colorBrand/Brand 1-Brand-80': '#5692f1',
  'colorBrand/Brand 1-Brand-90': '#80b1ff',
  'colorBrand/Brand 1-Brand-100': '#a5c8ff',
  'colorBrand/Brand 1-Brand-110': '#cadeff',
  'colorBrand/Brand 1-Brand-120': '#eef5ff',
  'colorBrand/Brand 1-Brand-130': '#f5f9ff',
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
  'Typography/Base-Font-family-Base': 'Segoe UI',
  'Typography/Base-Weight-fontWeightRegular': 'Regular',
  'Typography/Base-Weight-fontWeightMedium': 'Medium',
  'Typography/Base-Weight-fontWeightSemibold': 'Semibold',
  'Typography/Base-Weight-fontWeightBold': 'Bold',
  'Typography/Base-Weight-fontWeightSemilight': 'Semilight',
  'Typography/Base-Weight-fontWeightLight': 'Light',
  'Typography/Base-Line-height-100': '14',
  'Typography/Base-Line-height-200': '16',
  'Typography/Base-Line-height-300': '22',
  'Typography/Base-Line-height-400': '24',
  'Typography/Base-Line-height-500': '28',
  'Typography/Base-Line-height-600': '34',
  'Typography/Base-Line-height-700': '36',
  'Typography/Base-Line-height-800': '48',
  'Typography/Base-Line-height-900': '52',
  'Typography/Base-Line-height-920': '64',
  'Typography/Base-Line-height-980': '70',
  'Typography/Base-Line-height-1000': '92',
  'Typography/Base-Font-size-100': '10',
  'Typography/Base-Font-size-200': '12',
  'Typography/Base-Font-size-300': '14',
  'Typography/Base-Font-size-400': '16',
  'Typography/Base-Font-size-500': '20',
  'Typography/Base-Font-size-600': '24',
  'Typography/Base-Font-size-700': '28',
  'Typography/Base-Font-size-800': '32',
  'Typography/Base-Font-size-900': '40',
  'Typography/Base-Font-size-920': '48',
  'Typography/Base-Font-size-980': '52',
  'Typography/Base-Font-size-1000': '68',
  'Typography/Base-fontFamily-Base': 'Segoe UI',
  'Typography/Base-fontWeight-Regular': 'Regular',
  'Typography/Base-fontWeight-Semibold': 'Semibold',
  'Typography/Base-fontWeight-Bold': 'Bold',
  'Typography/Base-fontWeight-Semilight': 'Semilight',
  'Typography/Base-fontWeight-Light': 'Light',
  'Typography/Base-lineHeight-Base100': '14',
  'Typography/Base-lineHeight-Base200': '16',
  'Typography/Base-lineHeight-Base300': '22',
  'Typography/Base-lineHeight-Base400': '24',
  'Typography/Base-lineHeight-Base500': '28',
  'Typography/Base-lineHeight-Base600': '34',
  'Typography/Base-lineHeight-Base700': '36',
  'Typography/Base-lineHeight-Base800': '48',
  'Typography/Base-lineHeight-Base900': '52',
  'Typography/Base-lineHeight-base1000': '92',
  'Typography/Base-lineHeight-Base920': '64',
  'Typography/Base-lineHeight-Base980': '70',
  'Typography/Base-fontSize-1000': '68',
  'Typography/Base-fontSize-Base100': '10',
  'Typography/Base-fontSize-Base200': '12',
  'Typography/Base-fontSize-Base300': '14',
  'Typography/Base-fontSize-Base400': '16',
  'Typography/Base-fontSize-Base500': '20',
  'Typography/Base-fontSize-Base600': '24',
  'Typography/Base-fontSize-Base700': '28',
  'Typography/Base-fontSize-Base800': '32',
  'Typography/Base-fontSize-Base900': '40',
  'Typography/Base-fontSize-Base980': '52',
  'Typography/Base-fontSize-Base920': '48',
  'Tree indentation/None-tree-padding-left': '0',
  'Tree indentation/None-treeleaf-padding-left': '24',
  'Tree indentation/Level 1-tree-padding-left': '24',
  'Tree indentation/Level 1-treeleaf-padding-left': '48',
  'Tree indentation/Level 2-tree-padding-left': '48',
  'Tree indentation/Level 2-treeleaf-padding-left': '72',
  'Tree indentation/Level 3-tree-padding-left': '72',
  'Tree indentation/Level 3-treeleaf-padding-left': '96',
  'Tree indentation/Level 4-tree-padding-left': '96',
  'Tree indentation/Level 4-treeleaf-padding-left': '120',
  'Tree indentation/Level 5-tree-padding-left': '120',
  'Tree indentation/Level 5-treeleaf-padding-left': '144',
  'Tree indentation/Level 6-tree-padding-left': '144',
  'Tree indentation/Level 6-treeleaf-padding-left': '168',
  'Tree indentation/Level 7-tree-padding-left': '168',
  'Tree indentation/Level 7-treeleaf-padding-left': '192',
  'Tree indentation/Level 8-tree-padding-left': '192',
  'Tree indentation/Level 8-treeleaf-padding-left': '216',
  'Tree indentation/Level 9-tree-padding-left': '216',
  'Tree indentation/Level 9-treeleaf-padding-left': '240',
  'Tree indentation/Level 10-tree-padding-left': '240',
  'Tree indentation/Level 10-treeleaf-padding-left': '264',
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
  'colorTheme/Light/Theme/Light-Neutral-Background-1-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Neutral-Background-1-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Light/Theme/Light-Neutral-Background-1-Pressed': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Background-1-Selected': '{colors.neutral.grey-90}',
  'colorTheme/Light/Theme/Light-Neutral-Background-2-Rest': '#f5f4f2',
  'colorTheme/Light/Theme/Light-Neutral-Background-3-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Background-3-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Light/Theme/Light-Neutral-Background-3-Pressed': '{colors.neutral.grey-80}',
  'colorTheme/Light/Theme/Light-Neutral-Background-4-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Light/Theme/Light-Neutral-Background-4-Hover': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Background-4-Pressed': '{colors.neutral.grey-60}',
  'colorTheme/Light/Theme/Light-Neutral-Background-5-Rest': '{colors.neutral.grey-80}',
  'colorTheme/Light/Theme/Light-Neutral-Background-6-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Inverted-Rest': '{brand-10}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Inverted-Disabled-Rest': '{colors.alpha.white.10}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Alpha-1-Rest': '{colors.alpha.white.50}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Alpha-2-Rest': '{colors.alpha.white.80}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Static-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Pressed': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Selected': '{colors.neutral.grey-90}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Hover': '{colors.alpha.white.70}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Pressed': '{colors.alpha.white.50}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Light alpha-Selected': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Rest': '{colors.alpha.black.0}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Hover': '{colors.alpha.black.10}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Pressed': '{colors.alpha.black.30}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Subtle-Inverted-Selected': '{colors.alpha.black.20}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Transparent-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Transparent-Hover': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Transparent-Pressed': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Transparent-Selected': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Disabled-Rest': '{colors.neutral.grey-80}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Stencil-1-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Stencil-2-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Overlay-Rest': '{colors.alpha.black.40}',
  'colorTheme/Light/Theme/Light-Neutral-Background-Overlay-Scrollbar-Rest': '{colors.alpha.black.50}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-1-Rest primary text': '{brand-10}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-1-Hover': '{brand-30}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-1-Pressed': '{brand-30}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-1-Selected': '{brand-30}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Rest secondary text': '{colors.neutral.grey-12}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Hover': '{colors.neutral.grey-6}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Pressed': '{colors.neutral.grey-6}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Selected': '{colors.neutral.grey-6}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Brand-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Brand-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Brand-Selected': '{brand-30}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Brand-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Link-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Link-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Link-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-2-Link-Selected': '{brand-30}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-4-Rest': '{colors.neutral.grey-30}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Disabled-2-Rest': '{colors.neutral.grey-60}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Disabled-Rest': '{colors.neutral.grey-50}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Static-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Pressed': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-1-Selected': '{colors.neutral.grey-60}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-2-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Disabled-Rest': '{colors.alpha.white.40}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Hover': '{colors.neutral.grey-90}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Pressed': '{colors.neutral.grey-80}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-Inverted-Link-Selected': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Foreground-On Brand-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-1-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-1-Hover': '{colors.neutral.grey-60}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-1-Pressed': '{colors.neutral.grey-50}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-1-Selected': '{colors.neutral.grey-40}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-2-Rest': '#ffffff',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-3-Rest': '{colors.neutral.grey-50}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Alpha-1-Rest': '{colors.alpha.black.5}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Alpha-2-Rest': '{colors.alpha.white.20}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Subtle-Rest': '#f5f4f2',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-on Brand-1-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-on Brand-2-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Accessible-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Accessible-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Accessible-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Accessible-Selected': '{brand-30}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Focus-1-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Focus-2-Rest': '#ffffff',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Transparent-Interactive-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Transparent-Disabled-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Transparent-Rest': '{colors.alpha.white.0}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Disabled-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Neutral-Stroke-Disabled-Inverted-Rest': '{colors.alpha.white.40}',
  'colorTheme/Light/Theme/Light-Brand-Background-1-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Background-1-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Brand-Background-1-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Brand-Background-1-Selected': '{brand-30}',
  'colorTheme/Light/Theme/Light-Brand-Background-2-Rest': '{brand-10}',
  'colorTheme/Light/Theme/Light-Brand-Background-2-Hover': '{brand-110}',
  'colorTheme/Light/Theme/Light-Brand-Background-2-Pressed': '{brand-100}',
  'colorTheme/Light/Theme/Light-Brand-Background-3-Rest': '{brand-120}',
  'colorTheme/Light/Theme/Light-Brand-Background-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Brand-Background-Inverted-Hover': '{brand-120}',
  'colorTheme/Light/Theme/Light-Brand-Background-Inverted-Pressed': '{brand-130}',
  'colorTheme/Light/Theme/Light-Brand-Background-Inverted-Selected': '{brand-100}',
  'colorTheme/Light/Theme/Light-Brand-Background-Static-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Background-Compound-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Background-Compound-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Brand-Background-Compound-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-1-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-1-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-1-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-1-Selected': '{brand-30}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-2-Rest': '{brand-80}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-2-Hover': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-2-Pressed': '{brand-30}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Link-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Link-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Link-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Link-Selected': '{brand-30}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Inverted-Rest': '{brand-100}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Inverted-Hover': '{brand-110}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Inverted-Pressed': '{brand-100}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-On Light-Rest': '{brand-80}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-On Light-Hover': '{brand-70}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-On Light-Pressed': '{brand-50}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-On Light-Selected': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Compound-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Compound-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Brand-Foreground-Compound-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-1-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-1-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-1-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-1-Selected': '{brand-30}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-2-Rest': '{brand-10}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-2-Contrast-Rest': '{brand-110}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-3-Rest': '{brand-90}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-Compound-Rest': '{brand-60}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-Compound-Hover': '{brand-50}',
  'colorTheme/Light/Theme/Light-Brand-Stroke-Compound-Pressed': '{brand-40}',
  'colorTheme/Light/Theme/Light-Status-Danger-Background-1-Rest': '{colors.shared.cranberry.tint 60}',
  'colorTheme/Light/Theme/Light-Status-Danger-Background-3-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Light/Theme/Light-Status-Danger-Foreground-1-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Light/Theme/Light-Status-Danger-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Status-Danger-Stroke-1-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Light/Theme/Light-Status-Danger-Stroke-2-Rest': '{colors.shared.cranberry.tint 30}',
  'colorTheme/Light/Theme/Light-Status-Success-Background-1-Rest': '{colors.shared.green.tint 60}',
  'colorTheme/Light/Theme/Light-Status-Success-Background-3-Rest': '{colors.shared.green.primary}',
  'colorTheme/Light/Theme/Light-Status-Success-Foreground-1-Rest': '{colors.shared.green.primary}',
  'colorTheme/Light/Theme/Light-Status-Success-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Status-Success-Stroke-1-Rest': '{colors.shared.green.primary}',
  'colorTheme/Light/Theme/Light-Status-Success-Stroke-2-Rest': '{colors.shared.green.tint 30}',
  'colorTheme/Light/Theme/Light-Status-Warning-Background-1-Rest': '{colors.shared.orange.tint 60}',
  'colorTheme/Light/Theme/Light-Status-Warning-Background-3-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Light/Theme/Light-Status-Warning-Foreground-1-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Light/Theme/Light-Status-Warning-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Status-Warning-Stroke-1-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Light/Theme/Light-Status-Warning-Stroke-2-Rest': '{colors.shared.orange.tint 30}',
  'colorTheme/Light/Theme/Light-Status-Oof-Foreground-3-Rest': '{colors.shared.berry.primary}',
  'colorTheme/Light/Theme/Light-Status-Away-Background-3-Rest': '{colors.shared.marigold.primary}',
  'colorTheme/Light/Theme/Light-Status-Available-Foreground-3-Rest': '{colors.shared.light green.primary}',
  'colorTheme/Light/Theme/Light-Status-Generic-Anchor-Background-2-Rest': '{colors.shared.anchor.tint 40}',
  'colorTheme/Light/Theme/Light-Status-Generic-Anchor-Foreground-2-Rest': '{colors.shared.anchor.shade 30}',
  'colorTheme/Light/Theme/Light-Status-Generic-Anchor-Stroke-Active-Rest': '{colors.shared.anchor.primary}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Background-1-Rest': '{colors.shared.information.tint 60}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Background-1-Hover': '{colors.shared.information.tint 50}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Background-1-Pressed': '{colors.shared.information.tint 40}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Stroke-1-Rest': '{colors.shared.information.primary}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Rest': '{colors.shared.information.tint 30}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Hover': '{colors.shared.information.tint 20}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Stroke-2-Pressed': '{colors.shared.information.tint 10}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Foreground-Rest': '{colors.shared.information.primary}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Foreground-Hover': '{colors.shared.information.shade 10}',
  'colorTheme/Light/Theme/Light-Status-Generic-Information-Foreground-Pressed': '{colors.shared.information.shade 20}',
  'colorTheme/Light/Theme/Light-Status-Severe-Background-1-Rest': '{colors.shared.dark orange.tint 60}',
  'colorTheme/Light/Theme/Light-Status-Severe-Background-3-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Light/Theme/Light-Status-Severe-Foreground-1-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Light/Theme/Light-Status-Severe-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Status-Severe-Stroke-1-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Light/Theme/Light-Status-Severe-Stroke-2-Rest': '{colors.shared.dark orange.tint 30}',
  'colorTheme/Light/Theme/Light-Shadow-ambient': '#0000001f',
  'colorTheme/Light/Theme/Light-Shadow-ambient-lighter': '#0000000f',
  'colorTheme/Light/Theme/Light-Shadow-ambient-darker': '#00000033',
  'colorTheme/Light/Theme/Light-Shadow-brand-ambient': '#00000040',
  'colorTheme/Light/Theme/Light-Shadow-key': '#00000024',
  'colorTheme/Light/Theme/Light-Shadow-key-lighter': '#00000012',
  'colorTheme/Light/Theme/Light-Shadow-key-darker': '#0000003d',
  'colorTheme/Light/Theme/Light-Shadow-brand-key': '#0000004d',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Categorical': '{colors.brand.brand-10}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Data': '{colors.neutral.grey-12}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue': '{colors.data viz.core.blue}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray': '{colors.data viz.core.gray}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red': '{colors.data viz.core.red}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal': '{colors.data viz.core.teal}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean': '{colors.data viz.core.ocean}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green': '{colors.data viz.core.green}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Yellow300': '{colors.data viz.sequential.yellow300}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue400': '{colors.data viz.sequential.blue400}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray400': '{colors.data viz.sequential.gray400}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red400': '{colors.data viz.sequential.red400}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal300': '{colors.data viz.sequential.teal300}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Red300': '{colors.data viz.sequential.red300}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Teal400': '{colors.data viz.sequential.teal400}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean400': '{colors.data viz.sequential.ocean400}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green400': '{colors.data viz.sequential.green400}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Yellow400': '{colors.data viz.sequential.yellow400}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Green300': '{colors.data viz.sequential.green300}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Gray300': '{colors.data viz.sequential.gray300}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Blue200': '{colors.data viz.sequential.blue200}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Labels-Color-Ocean200': '{colors.data viz.sequential.ocean200}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Accessibility-Text dark bkgd': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-Accessibility-Text light bkgd': '{colors.neutral.black}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-KPI Card-Text dark bkgd': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Data viz-Foreground-KPI Card-Text light bkgd': '{colors.neutral.grey-40}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Gridline': '{colors.neutral.grey-70}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Axis-Target-Benchmark': '{colors.neutral.black}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Blue': '{colors.data viz.core.blue}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Blue400': '{colors.data viz.sequential.blue400}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Gray': '{colors.data viz.core.gray}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Gray400': '{colors.data viz.sequential.gray400}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Red': '{colors.data viz.core.red}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Red300': '{colors.data viz.sequential.red300}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Red400': '{colors.data viz.sequential.red400}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Teal': '{colors.data viz.core.teal}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Teal300': '{colors.data viz.sequential.teal300}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Teal400': '{colors.data viz.sequential.teal400}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Ocean': '{colors.data viz.core.ocean}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Ocean400': '{colors.data viz.sequential.ocean400}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Green': '{colors.data viz.core.green}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Green300': '{colors.data viz.sequential.green300}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Green400': '{colors.data viz.sequential.green400}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Yellow300': '{colors.data viz.sequential.yellow300}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Yellow400': '{colors.data viz.sequential.yellow400}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Gray300': '{colors.data viz.sequential.gray300}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Blue200': '{colors.data viz.sequential.blue200}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Ocean200': '{colors.data viz.sequential.ocean200}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Color-Yellow': '{colors.data viz.core.yellow}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Trend-Average': '{colors.data viz.sequential.gray300}',
  'colorTheme/Light/Theme/Light-Data viz-Stroke-Accessible outline': '{colors.neutral.white}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Positive': '{colors.data viz.core.green}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Negative': '{colors.data viz.core.red}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Light bkgd-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Positive': '#37bb65',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Negative': '#cc2e48',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Foreground-Dark bkgd-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Positive': '{colors.data viz.core.green}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Negative': '{colors.data viz.core.red}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Light bkgd-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Positive': '#37bb65',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Negative': '#cc2e48',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Stroke-Dark bkgd-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Background-Positive': '{colors.data viz.core.green}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Background-Negative': '{colors.data viz.core.red}',
  'colorTheme/Light/Theme/Light-Data viz-Semantic-Background-Notice': '{colors.data viz.core.yellow}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Blue': '{colors.data viz.core.blue}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Gray': '{colors.data viz.core.gray}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Red': '{colors.data viz.core.red}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Teal': '{colors.data viz.core.teal}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Ocean': '{colors.data viz.core.ocean}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Green': '{colors.data viz.core.green}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Core-Yellow': '{colors.data viz.core.yellow}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Blue400': '{colors.data viz.sequential.blue400}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Gray400': '{colors.data viz.sequential.gray400}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Red300': '{colors.data viz.sequential.red300}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Red400': '{colors.data viz.sequential.red400}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Teal300': '{colors.data viz.sequential.teal300}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Teal400': '{colors.data viz.sequential.teal400}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Ocean400': '{colors.data viz.sequential.ocean400}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Green300': '{colors.data viz.sequential.green300}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Green400': '{colors.data viz.sequential.green400}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Yellow300': '{colors.data viz.sequential.yellow300}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Yellow400': '{colors.data viz.sequential.yellow400}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Blue300': '{colors.data viz.sequential.blue300}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Blue200': '{colors.data viz.sequential.blue200}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Blue100': '{colors.data viz.sequential.blue100}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Gray300': '{colors.data viz.sequential.gray300}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Gray200': '{colors.data viz.sequential.gray200}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Gray100': '{colors.data viz.sequential.gray100}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Red200': '{colors.data viz.sequential.red200}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Red100': '{colors.data viz.sequential.red100}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Teal200': '{colors.data viz.sequential.teal200}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Teal100': '{colors.data viz.sequential.teal100}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Ocean300': '{colors.data viz.sequential.ocean300}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Ocean200': '{colors.data viz.sequential.ocean200}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Ocean100': '{colors.data viz.sequential.ocean100}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Green200': '{colors.data viz.sequential.green200}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Green100': '{colors.data viz.sequential.green100}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Yellow200': '{colors.data viz.sequential.yellow200}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Sequential-Yellow100': '{colors.data viz.sequential.yellow100}',
  'colorTheme/Light/Theme/Light-Data viz-Background-Neutral-Black': '{colors.neutral.black}',
  'Theme/Light/Theme/Light-Control logic-Theme switch': 'Light',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-1-Rest': '{colors.neutral.black}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-1-Hover': '{colors.neutral.grey-10}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-1-Pressed': '{colors.neutral.grey-12}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-1-Selected': '{colors.neutral.grey-8}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-2-Rest': '{colors.neutral.grey-6}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-3-Rest': '{colors.neutral.grey-12}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-3-Hover': '{colors.neutral.grey-10}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-3-Pressed': '{colors.neutral.grey-10}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-4-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-4-Hover': '{colors.neutral.grey-70}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-4-Pressed': '{colors.neutral.grey-60}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-5-Rest': '{colors.neutral.grey-90}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-6-Rest': '{colors.neutral.grey-20}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Inverted-Disabled-Rest': '{colors.alpha.white.10}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Alpha-1-Rest': '{colors.alpha.brand-10.50}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Alpha-2-Rest': '{colors.alpha.black.70}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Static-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Rest': '{colors.alpha.black.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Hover': '{colors.neutral.grey-80}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Pressed': '{colors.neutral.grey-70}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Selected': '{colors.neutral.grey-90}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Hover': '#242424cc',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Pressed': '#24242480',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Light alpha-Selected': '{colors.alpha.black.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Rest': '{colors.alpha.black.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Hover': '{colors.alpha.black.10}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Pressed': '{colors.alpha.black.30}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Subtle-Inverted-Selected': '{colors.alpha.black.20}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Transparent-Rest': '{colors.alpha.black.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Transparent-Hover': '{colors.alpha.black.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Transparent-Pressed': '{colors.alpha.black.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Transparent-Selected': '{colors.alpha.black.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Disabled-Rest': '{colors.neutral.grey-8}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Stencil-1-Rest': '#575757',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Stencil-2-Rest': '{colors.neutral.grey-20}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Overlay-Rest': '{colors.alpha.black.50}',
  'colorTheme/Dark/Theme/Dark-Neutral-Background-Overlay-Scrollbar-Rest': '{colors.alpha.white.60}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-1-Rest primary text': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-1-Hover': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-1-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-1-Selected': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Rest secondary text': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Hover': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Selected': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Hover': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Pressed': '{brand-90}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Selected': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Brand-Rest': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Hover': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-2-Link-Selected': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-4-Rest': '{colors.neutral.grey-60}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Disabled-2-Rest': '{colors.neutral.grey-60}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Disabled-Rest': '{colors.neutral.grey-50}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Static-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Rest': '#242424',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Hover': '#242424',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Pressed': '#242424',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-1-Selected': '#242424',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-2-Rest': '#242424',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Disabled-Rest': '{colors.alpha.white.40}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Hover': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-Inverted-Link-Selected': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Foreground-On Brand-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-1-Rest': '{colors.neutral.grey-40}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-1-Hover': '{colors.neutral.grey-40}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-1-Pressed': '{colors.neutral.grey-40}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-1-Selected': '{colors.neutral.grey-40}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-2-Rest': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-3-Rest': '{colors.neutral.grey-50}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Alpha-1-Rest': '{colors.alpha.white.10}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Alpha-2-Rest': '{colors.alpha.white.20}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Subtle-Rest': '#f5f4f2',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-on Brand-1-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-on Brand-2-Rest': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Hover': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Pressed': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Accessible-Selected': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Focus-1-Rest': '{colors.neutral.black}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Focus-2-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Interactive-Rest': '{colors.alpha.white.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Disabled-Rest': '{colors.alpha.white.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Transparent-Rest': '{colors.alpha.white.0}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Disabled-Rest': '{colors.neutral.grey-70}',
  'colorTheme/Dark/Theme/Dark-Neutral-Stroke-Disabled-Inverted-Rest': '{colors.alpha.white.40}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-1-Rest': '{brand-60}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-1-Hover': '{brand-40}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-1-Pressed': '{brand-30}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-1-Selected': '{brand-20}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-2-Rest': '{brand-20}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-2-Hover': '{brand-40}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-2-Pressed': '{brand-10}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-3-Rest': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Brand-Background-Inverted-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-Inverted-Hover': '{brand-120}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-Inverted-Pressed': '{brand-130}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-Inverted-Selected': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-Static-Rest': '{brand-80}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-Compound-Rest': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-Compound-Hover': '{brand-110}',
  'colorTheme/Dark/Theme/Dark-Brand-Background-Compound-Pressed': '{brand-90}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-1-Rest': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-1-Hover': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-1-Pressed': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-1-Selected': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-2-Rest': '{brand-110}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-2-Hover': '{brand-130}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-2-Pressed': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Link-Rest': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Link-Hover': '{brand-110}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Link-Pressed': '{brand-90}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Link-Selected': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Inverted-Rest': '{brand-80}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Inverted-Hover': '{brand-70}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Inverted-Pressed': '{brand-60}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-On Light-Rest': '{brand-70}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-On Light-Hover': '{brand-70}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-On Light-Pressed': '{brand-50}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-On Light-Selected': '{brand-60}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Compound-Rest': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Compound-Hover': '{brand-110}',
  'colorTheme/Dark/Theme/Dark-Brand-Foreground-Compound-Pressed': '{brand-90}',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-1-Rest': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-1-Hover': '#2886de',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-1-Pressed': '{brand-70}',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-1-Selected': '{brand-70}',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-2-Rest': '{brand-50}',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-2-Contrast-Rest': '{brand-60}',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-3-Rest': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-Compound-Rest': '{brand-100}',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-Compound-Hover': '{brand-110}',
  'colorTheme/Dark/Theme/Dark-Brand-Stroke-Compound-Pressed': '{brand-90}',
  'colorTheme/Dark/Theme/Dark-Status-Danger-Background-1-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Status-Danger-Background-3-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Danger-Foreground-1-Rest': '{colors.shared.cranberry.tint 30}',
  'colorTheme/Dark/Theme/Dark-Status-Danger-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Status-Danger-Stroke-1-Rest': '{colors.shared.cranberry.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Danger-Stroke-2-Rest': '{colors.shared.cranberry.tint 30}',
  'colorTheme/Dark/Theme/Dark-Status-Success-Background-1-Rest': '{colors.shared.green.tint 60}',
  'colorTheme/Dark/Theme/Dark-Status-Success-Background-3-Rest': '{colors.shared.green.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Success-Foreground-1-Rest': '{colors.shared.green.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Success-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Status-Success-Stroke-1-Rest': '{colors.shared.green.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Success-Stroke-2-Rest': '{colors.shared.green.tint 30}',
  'colorTheme/Dark/Theme/Dark-Status-Warning-Background-1-Rest': '{colors.shared.orange.tint 60}',
  'colorTheme/Dark/Theme/Dark-Status-Warning-Background-3-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Warning-Foreground-1-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Warning-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Status-Warning-Stroke-1-Rest': '{colors.shared.orange.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Warning-Stroke-2-Rest': '{colors.shared.orange.tint 30}',
  'colorTheme/Dark/Theme/Dark-Status-Oof-Foreground-3-Rest': '{colors.shared.berry.tint 20}',
  'colorTheme/Dark/Theme/Dark-Status-Away-Background-3-Rest': '{colors.shared.marigold.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Available-Foreground-3-Rest': '{colors.shared.light green.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Anchor-Background-2-Rest': '{colors.shared.anchor.shade 30}',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Anchor-Foreground-2-Rest': '{colors.shared.anchor.tint 40}',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Anchor-Stroke-Active-Rest': '{colors.shared.anchor.tint 30}',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Rest': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Hover': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Background-1-Pressed': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Stroke-1-Rest': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Rest': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Hover': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Stroke-2-Pressed': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Rest': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Hover': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Generic-Information-Foreground-Pressed': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Status-Severe-Background-1-Rest': '{colors.shared.dark orange.tint 60}',
  'colorTheme/Dark/Theme/Dark-Status-Severe-Background-3-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Severe-Foreground-1-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Severe-Foreground-3-Rest': '{colors.neutral.white}',
  'colorTheme/Dark/Theme/Dark-Status-Severe-Stroke-1-Rest': '{colors.shared.dark orange.primary}',
  'colorTheme/Dark/Theme/Dark-Status-Severe-Stroke-2-Rest': '{colors.shared.dark orange.tint 30}',
  'colorTheme/Dark/Theme/Dark-Shadow-ambient': '#00000033',
  'colorTheme/Dark/Theme/Dark-Shadow-ambient-lighter': '#0000001f',
  'colorTheme/Dark/Theme/Dark-Shadow-ambient-darker': '#00000066',
  'colorTheme/Dark/Theme/Dark-Shadow-brand-ambient': '#00000040',
  'colorTheme/Dark/Theme/Dark-Shadow-key': '#00000047',
  'colorTheme/Dark/Theme/Dark-Shadow-key-lighter': '#00000024',
  'colorTheme/Dark/Theme/Dark-Shadow-key-darker': '#0000007a',
  'colorTheme/Dark/Theme/Dark-Shadow-brand-key': '#0000004d',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Categorical': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Data': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Yellow300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Red300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Teal400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Yellow400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Green300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Gray300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Blue200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Labels-Color-Ocean200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Accessibility-Text dark bkgd': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-Accessibility-Text light bkgd': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-KPI Card-Text dark bkgd': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Foreground-KPI Card-Text light bkgd': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Gridline': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Axis-Target-Benchmark': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Red': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Red300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Red400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Teal400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Green': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Green300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Green400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Gray300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Blue200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Ocean200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Color-Yellow': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Trend-Average': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Stroke-Accessible outline': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Positive': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Negative': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Light bkgd-Notice': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Positive': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Negative': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Foreground-Dark bkgd-Notice': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Positive': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Negative': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Light bkgd-Notice': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Positive': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Negative': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Stroke-Dark bkgd-Notice': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Background-Positive': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Background-Negative': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Semantic-Background-Notice': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Blue': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Gray': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Red': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Teal': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Ocean': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Green': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Core-Yellow': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Red300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Red400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Green300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Green400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow400': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Blue100': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Gray100': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Red200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Red100': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Teal100': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean300': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Ocean100': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Green200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Green100': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow200': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Sequential-Yellow100': '#ffffff',
  'colorTheme/Dark/Theme/Dark-Data viz-Background-Neutral-Black': '#ffffff',
  'Theme/Dark/Theme/Dark-Control logic-Theme switch': 'Dark'
};

// Utility functions for color and shadow manipulation
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

// Theme tokens object with color conversion
export const brandThemeTokens = Object.entries(brandTheme).reduce((acc, [key, value]) => {
  if (value.startsWith('#')) {
    acc[key] = convertHexToRgba(value);
  } else {
    acc[key] = value;
  }
  return acc;
}, {} as Record<string, string>);
