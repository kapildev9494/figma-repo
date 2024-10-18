import { Theme, themeToTokensObject } from '@fluentui/react-components';

export const brandTheme: Theme & {
  'color-grey-12': string;
  'color-brand-10': string;
  'color-brand-60': string;
  'color-white': string;
  'color-grey-90': string;
  'color-grey-80': string;
  'color-grey-70': string;
  'color-grey-60': string;
  'color-grey-50': string;
  'color-grey-40': string;
  'color-grey-30': string;
  'color-grey-20': string;
  'color-grey-10': string;
  'color-grey-8': string;
  'color-grey-6': string;
  'color-black': string;
  'color-success-10': string;
  'color-success-20': string;
  'color-success-30': string;
  'color-warning-10': string;
  'color-warning-20': string;
  'color-warning-30': string;
  'color-danger-10': string;
  'color-danger-20': string;
  'color-danger-30': string;
  'color-generic-10': string;
  'color-generic-20': string;
  'color-generic-30': string;
  'tooltip-max-width': string;
} = {
  // -------------- Custom brand color palatte -------------- //
  'color-grey-12': '#595959',
  'color-brand-10': '#0f1a38',
  'color-brand-60': '#295cad',
  'color-white': '#ffffff',
  'color-grey-90': '#f8f8f8',
  'color-grey-80': '#f2f3f3',
  'color-grey-70': '#e4e7e7',
  'color-grey-60': '#cacece',
  'color-grey-50': '#afb6b6',
  'color-grey-40': '#959d9d',
  'color-grey-30': '#788383',
  'color-grey-20': '#626a6a',
  'color-grey-10': '#3a3a3a',
  'color-grey-8': '#2c2c2c', 
  'color-grey-6': '#111111', // NeutralForeground2Hover , NeutralForeground2Pressed , NeutralForeground2Selected
  'color-black': '#000000',
  'color-success-10': '#0a7f00',
  'color-success-20': '#8dc881',
  'color-success-30': '#e2f5e0',
  'color-warning-10': '#c9601c',
  'color-warning-20': '#f0a371',
  'color-warning-30': '#fbeee6',
  'color-danger-10': '#ad0000',
  'color-danger-20': '#dd9090',
  'color-danger-30': '#fcdfdf',
  'color-generic-10': '#007e73', //InfoBorder1, InfoForeground1
  'color-generic-20': '#8ad0ca',
  'color-generic-30': '#e8f8f7', // InfoBackground1
  'tooltip-max-width': '240px',
  // -------------- Custom brand color palatte -------------- //
  //font-size,fontStretch,fontStyle,fontWeight,letterSpacing,paragraphIndent,paragraphspacing,testCase,textDecoration - Need to add
   //button shape and badge shape//
  borderRadiusNone: '0',
  borderRadiusSmall: '2px',
  borderRadiusMedium: '4px',
  borderRadiusLarge: '6px',
  borderRadiusXLarge: '8px',
  borderRadiusCircular: '10000px',
  //font size
  fontSizeBase100: '10px',
  fontSizeBase200: '12px',
  fontSizeBase300: '14px',
  fontSizeBase400: '16px',
  fontSizeBase500: '20px',
  fontSizeBase600: '24px',
  fontSizeHero700: '28px',
  fontSizeHero800: '32px',
  fontSizeHero900: '40px',
  fontSizeHero1000: '68px',
  //line height
  lineHeightBase100: '14px',
  lineHeightBase200: '16px',
  lineHeightBase300: '20px',//body 1, body 1, strong body 1 stronger - Updated Form Length 22px
  lineHeightBase400: '22px',//body 2, body 2 strong, body 2 stronger - Updated Form Length 24px
  lineHeightBase500: '28px',
  lineHeightBase600: '32px',//title 3  - Updated Form Length 34px
  lineHeightHero700: '36px',
  lineHeightHero800: '40px',//title 1 - Updated Form Length 48px
  lineHeightHero900: '52px',
  lineHeightHero1000: '92px',
  fontFamilyBase:
    "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
  fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
  fontFamilyNumeric:
    "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
  strokeWidthThin: '1px',
  strokeWidthThick: '2px',
  strokeWidthThicker: '3px',
  strokeWidthThickest: '4px',
  //pop over size and card padding
  spacingHorizontalNone: '0',
  spacingHorizontalXXS: '2px',
  spacingHorizontalXS: '4px',
  spacingHorizontalSNudge: '6px',
  spacingHorizontalS: '8px',
  spacingHorizontalMNudge: '10px', //Updated - 12px
  spacingHorizontalM: '12px',//Updated - 16px
  spacingHorizontalL: '16px',
  spacingHorizontalXL: '20px',
  spacingHorizontalXXL: '24px',
  spacingHorizontalXXXL: '32px',
  spacingVerticalNone: '0',
  spacingVerticalXXS: '2px',
  spacingVerticalXS: '4px',
  spacingVerticalSNudge: '6px',
  spacingVerticalS: '8px',
  spacingVerticalMNudge: '10px',//Updated - 12px
  spacingVerticalM: '12px', // Updated - 16px
  spacingVerticalL: '16px',
  spacingVerticalXL: '20px',
  spacingVerticalXXL: '24px',
  spacingVerticalXXXL: '32px',//pop over size and card padding
  durationUltraFast: '50ms',
  durationFaster: '100ms',
  durationFast: '150ms',
  durationNormal: '200ms',
  durationGentle: '250ms',
  durationSlow: '300ms',
  durationSlower: '400ms',
  durationUltraSlow: '500ms',
  curveAccelerateMax: 'cubic-bezier(0.9,0.1,1,0.2)',
  curveAccelerateMid: 'cubic-bezier(1,0,1,1)',
  curveAccelerateMin: 'cubic-bezier(0.8,0,0.78,1)',
  curveDecelerateMax: 'cubic-bezier(0.1,0.9,0.2,1)',
  curveDecelerateMid: 'cubic-bezier(0,0,0,1)',
  curveDecelerateMin: 'cubic-bezier(0.33,0,0.1,1)',
  curveEasyEaseMax: 'cubic-bezier(0.8,0,0.2,1)',
  curveEasyEase: 'cubic-bezier(0.33,0,0.67,1)',
  curveLinear: 'cubic-bezier(0,0,1,1)',
  colorNeutralForeground1: '#0f1a38', //tabs text
  colorNeutralForeground1Hover: '#041E47',
  colorNeutralForeground1Pressed: '#242424', // updated - #041E47
  colorNeutralForeground1Selected: '#242424',
  colorNeutralForeground2: '#595959', //switch - enabled label, radio - label, input- entered text
  colorNeutralForeground2Hover: '#1F2525', //Unselected Tab Text // Updated - #111111
  colorNeutralForeground2Pressed: '#1F2525', //tab pressed text // // Updated - #111111
  colorNeutralForeground2Selected: '#242424',
  colorNeutralForeground2BrandHover: '#295cad', // Updated - #19458B
  colorNeutralForeground2BrandPressed: '#19458B', // Updated - #0C3069
  colorNeutralForeground2BrandSelected: '#295cad', // Updated - #041E47
  colorNeutralForeground3: '#616161',
  colorNeutralForeground3Hover: '#424242',
  colorNeutralForeground3Pressed: '#424242',
  colorNeutralForeground3Selected: '#424242',
  colorNeutralForeground3BrandHover: '#295cad',
  colorNeutralForeground3BrandPressed: '#19458B',
  colorNeutralForeground3BrandSelected: '#295cad',
  colorNeutralForeground4: '#788383', //input placeholder text // updated - #778888
  colorNeutralForegroundDisabled: '#afb6b6',
  colorNeutralForegroundInvertedDisabled: 'rgba(255, 255, 255, 0.4)',
  colorBrandForegroundLink: '#19458B', //  Updated - #295CAD
  colorBrandForegroundLinkHover: '#295cad', // Updated - #19458B
  colorBrandForegroundLinkPressed: '#041e47', // Updated - #0C3069
  colorBrandForegroundLinkSelected: '#19458B',
  colorNeutralForeground2Link: '#424242',
  colorNeutralForeground2LinkHover: '#242424',
  colorNeutralForeground2LinkPressed: '#242424',
  colorNeutralForeground2LinkSelected: '#242424',
  colorCompoundBrandForeground1: '#295cad',
  colorCompoundBrandForeground1Hover: '#19458B',
  colorCompoundBrandForeground1Pressed: '#295cad', // updated - #0C3069
  colorBrandForeground1: '#295cad', //accordian open/close button
  colorBrandForeground2: '#19458B',
  colorBrandForeground2Hover: '#295cad',
  colorBrandForeground2Pressed: '#1a243f',
  colorNeutralForeground1Static: '#242424',
  colorNeutralForegroundStaticInverted: '#ffffff',
  colorNeutralForegroundInverted: '#ffffff',
  colorNeutralForegroundInvertedHover: '#ffffff', // updated(checkbox-checked container) - #F2F3F3 
  colorNeutralForegroundInvertedPressed: '#ffffff', // updated(checkbox-checked container) - #E4E7E7
  colorNeutralForegroundInvertedSelected: '#ffffff',
  colorNeutralForegroundInverted2: '#ffffff',
  colorNeutralForegroundOnBrand: '#ffffff',
  colorNeutralForegroundInvertedLink: '#ffffff',
  colorNeutralForegroundInvertedLinkHover: '#ffffff',
  colorNeutralForegroundInvertedLinkPressed: '#ffffff',
  colorNeutralForegroundInvertedLinkSelected: '#ffffff',
  colorBrandForegroundInverted: '#647ec0',
  colorBrandForegroundInvertedHover: '#778cc8',
  colorBrandForegroundInvertedPressed: '#647ec0',
  colorBrandForegroundOnLight: '#295cad',
  colorBrandForegroundOnLightHover: '#19458B',
  colorBrandForegroundOnLightPressed: '#223c6e',
  colorBrandForegroundOnLightSelected: '#295cad',
  colorNeutralBackground1: '#ffffff',
  colorNeutralBackground1Hover: '#f2f3f3', //unselected tab hover
  colorNeutralBackground1Pressed: '#E4E7E7', //tab pressed
  colorNeutralBackground1Selected: '#f2f3f3',
  colorNeutralBackground2: '#F5F4F2', //tooltip background, accordian header
  colorNeutralBackground2Hover: '#f2f3f3',
  colorNeutralBackground2Pressed: '#dbdbdb',
  colorNeutralBackground2Selected: '#e6e6e6',
  colorNeutralBackground3: '#F8F8F8', //input - filled background
  colorNeutralBackground3Hover: '#F2F3F3', // input - filled hover
  colorNeutralBackground3Pressed: '#F2F3F3', // input - filled pressed
  colorNeutralBackground3Selected: '#e0e0e0',
  colorNeutralBackground4: '#f2f3f3',
  colorNeutralBackground4Hover: '#fafafa',
  colorNeutralBackground4Pressed: '#f5f5f5',
  colorNeutralBackground4Selected: '#ffffff',
  colorNeutralBackground5: '#ebebeb', // updated -#F2F3F3
  colorNeutralBackground5Hover: '#f5f5f5',
  colorNeutralBackground5Pressed: '#f2f3f3',
  colorNeutralBackground5Selected: '#fafafa',
  colorNeutralBackground6: '#e6e6e6',
  colorNeutralBackgroundInverted: '#0F1A38', //tooltip - inverted background
  colorNeutralBackgroundStatic: '#333333',
  colorNeutralBackgroundAlpha: 'rgba(255, 255, 255, 0.5)',
  colorNeutralBackgroundAlpha2: 'rgba(255, 255, 255, 0.8)',
  colorSubtleBackground: 'transparent', // Updated - #FFFFFF - 0%
  colorSubtleBackgroundHover: '#F2F3F3', //breadcrumb-Hover
  colorSubtleBackgroundPressed: '#E4E7E7', //breadcrumb - pressed
  colorSubtleBackgroundSelected: '#ebebeb',
  colorSubtleBackgroundLightAlphaHover: 'rgba(255, 255, 255, 0.7)',
  colorSubtleBackgroundLightAlphaPressed: 'rgba(255, 255, 255, 0.5)',
  colorSubtleBackgroundLightAlphaSelected: 'transparent',
  colorSubtleBackgroundInverted: 'transparent',
  colorSubtleBackgroundInvertedHover: 'rgba(0, 0, 0, 0.1)',
  colorSubtleBackgroundInvertedPressed: 'rgba(0, 0, 0, 0.3)',
  colorSubtleBackgroundInvertedSelected: 'rgba(0, 0, 0, 0.2)',
  colorTransparentBackground: 'transparent',
  colorTransparentBackgroundHover: 'transparent',
  colorTransparentBackgroundPressed: 'transparent',
  colorTransparentBackgroundSelected: 'transparent',
  colorNeutralBackgroundDisabled: '#f0f0f0', // switch - checked disabled
  colorNeutralBackgroundInvertedDisabled: 'rgba(255, 255, 255, 0.1)',
  colorNeutralStencil1: '#e6e6e6',
  colorNeutralStencil2: '#fafafa',
  colorNeutralStencil1Alpha: 'rgba(0, 0, 0, 0.1)',
  colorNeutralStencil2Alpha: 'rgba(0, 0, 0, 0.05)',
  colorBackgroundOverlay: 'rgba(0, 0, 0, 0.4)',
  colorScrollbarOverlay: 'rgba(0, 0, 0, 0.5)',
  colorBrandBackground: '#295cad',
  colorBrandBackgroundHover: '#19458B',
  colorBrandBackgroundPressed: '#041e47',
  colorBrandBackgroundSelected: '#295cad',
  colorCompoundBrandBackground: '#295cad',
  colorCompoundBrandBackgroundHover: '#19458B',
  colorCompoundBrandBackgroundPressed: '#041E47', // switch - checked/pressed , breadcrumb pressed
  colorBrandBackgroundStatic: '#295cad',
  colorBrandBackground2: '#ffffff', // updated - #0F1A38
  colorBrandBackground2Hover: '#bfc7e5',
  colorBrandBackground2Pressed: '#9ba9d6',
  colorBrandBackground3Static: '#295cad', // updated - #EEF5FF
  colorBrandBackground4Static: '#041e47',
  colorBrandBackgroundInverted: '#ffffff',
  colorBrandBackgroundInvertedHover: '#d1d6ec',
  colorBrandBackgroundInvertedPressed: '#adb8de',
  colorBrandBackgroundInvertedSelected: '#bfc7e5',
  colorNeutralCardBackground: '#fafafa',
  colorNeutralCardBackgroundHover: '#ffffff',
  colorNeutralCardBackgroundPressed: '#f5f5f5',
  colorNeutralCardBackgroundSelected: '#ebebeb',
  colorNeutralCardBackgroundDisabled: '#f2f3f3',
  colorNeutralStrokeAccessible: '#295CAD', //border for switch - unchecked rest // Updated(slider) - #626A6A
  colorNeutralStrokeAccessibleHover: '#19458B', //border for switch - unchecked hover, input - hover
  colorNeutralStrokeAccessiblePressed: '#0C3069', //border for switch - unchecked pressed , input - pressed
  colorNeutralStrokeAccessibleSelected: '#295cad',
  colorNeutralStroke1: '#E4E7E7', // input - borders
  colorNeutralStroke1Hover: '#CACECE', // input - hover borders, unselected tab hover
  colorNeutralStroke1Pressed: '#AFB6B6', // input- pressed
  colorNeutralStroke1Selected: '#295cad', // Updated - #959D9D
  colorNeutralStroke2: '#e0e0e0',
  colorNeutralStroke3: '#AFB6B6', //tabs border
  colorNeutralStrokeSubtle: '#F5F4F2', //accordian border
  colorNeutralStrokeOnBrand: '#ffffff',
  colorNeutralStrokeOnBrand2: '#ffffff',
  colorNeutralStrokeOnBrand2Hover: '#ffffff',
  colorNeutralStrokeOnBrand2Pressed: '#ffffff',
  colorNeutralStrokeOnBrand2Selected: '#ffffff',
  colorBrandStroke1: '#295cad',
  colorBrandStroke2: '#adb8de', // updated - #0F1A38
  colorBrandStroke2Hover: '#899acf',
  colorBrandStroke2Pressed: '#295cad',
  colorBrandStroke2Contrast: '#adb8de',
  colorCompoundBrandStroke: '#295cad',
  colorCompoundBrandStrokeHover: '#19458B', // radio - selected hover
  colorCompoundBrandStrokePressed: '#0C3069', // radio - pressed , input - filled pressed , spin button - pressed
  colorNeutralStrokeDisabled: '#AFB6B6', //radio - disabled // updated - #E4E7E7 , #F2F3F3
  colorNeutralStrokeInvertedDisabled: 'rgba(255, 255, 255, 0.4)',
  colorTransparentStroke: 'transparent',
  colorTransparentStrokeInteractive: 'transparent',
  colorTransparentStrokeDisabled: 'transparent',
  colorNeutralStrokeAlpha: 'rgba(0, 0, 0, 0.05)',
  colorNeutralStrokeAlpha2: 'rgba(255, 255, 255, 0.2)',
  colorStrokeFocus1: '#295CAD', //tab focus
  colorStrokeFocus2: '#fff',
  colorNeutralShadowAmbient: 'rgba(0,0,0,0.12)',
  colorNeutralShadowKey: 'rgba(0,0,0,0.14)',
  colorNeutralShadowAmbientLighter: 'rgba(0,0,0,0.06)',
  colorNeutralShadowKeyLighter: 'rgba(0,0,0,0.07)',
  colorNeutralShadowAmbientDarker: 'rgba(0,0,0,0.20)',
  colorNeutralShadowKeyDarker: 'rgba(0,0,0,0.24)',
  colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
  colorBrandShadowKey: 'rgba(0,0,0,0.25)',
  colorPaletteAnchorBackground2: '#bcc3c7',
  colorPaletteAnchorForeground2: '#202427',
  colorPaletteAnchorBorderActive: '#394146',
  colorStatusSuccessBackground1: '#f1faf1', // updated - #E2F5E0
  colorStatusSuccessBackground2: '#9fd89f',
  colorStatusSuccessBackground3: '#107c10', // updated - #0A7F00
  colorStatusSuccessForeground1: '#0a7f00',
  colorStatusSuccessForeground2: '#094509',
  colorStatusSuccessForeground3: '#107c10', // updated - #FFFFFF
  colorStatusSuccessForegroundInverted: '#54b054',
  colorStatusSuccessBorderActive: '#107c10',
  colorStatusSuccessBorder1: '#9fd89f', // updated - #0A7F00
  colorStatusSuccessBorder2: '#107c10',
  colorStatusWarningBackground1: '#fff9f5', //update - #FBEEE6
  colorStatusWarningBackground2: '#fdcfb4',
  colorStatusWarningBackground3: '#f7630c', // updated - #C9601C
  colorStatusWarningForeground1: '#bc4b09', // updated - #C9601C
  colorStatusWarningForeground2: '#8a3707',
  colorStatusWarningForeground3: '#bc4b09', //  updated - #FFFFFF
  colorStatusWarningForegroundInverted: '#faa06b',
  colorStatusWarningBorderActive: '#f7630c',
  colorStatusWarningBorder1: '#fdcfb4', // - #C9601C
  colorStatusWarningBorder2: '#bc4b09',
  colorStatusDangerBackground1: '#fdf3f4', // updated - #FCDFDF
  colorStatusDangerBackground2: '#eeacb2',
  colorStatusDangerBackground3: '#c50f1f',// Updated - #AD0000
  colorStatusDangerForeground1: '#b10e1c',// Updated - #AD0000
  colorStatusDangerForeground2: '#6e0811',
  colorStatusDangerForeground3: '#c50f1f',// Updated - #FFFFFF
  colorStatusDangerForegroundInverted: '#dc626d',
  colorStatusDangerBorderActive: '#c50f1f',
  colorStatusDangerBorder1: '#eeacb2', // updated - #AD0000
  colorStatusDangerBorder2: '#c50f1f',
  colorStatusDangerBackground3Hover: '#b10e1c',
  colorStatusDangerBackground3Pressed: '#960b18',
  //effect
  shadow2: '0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)',  
  shadow4: '0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)',
  shadow8: '0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)',
  shadow16: '0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)',
  shadow28: '0 0 8px rgba(0,0,0,0.12), 0 14px 28px rgba(0,0,0,0.14)',
  shadow64: '0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14)',//effect
  shadow2Brand: '0 0 2px rgba(0,0,0,0.30), 0 1px 2px rgba(0,0,0,0.25)',
  shadow4Brand: '0 0 2px rgba(0,0,0,0.30), 0 2px 4px rgba(0,0,0,0.25)',
  shadow8Brand: '0 0 2px rgba(0,0,0,0.30), 0 4px 8px rgba(0,0,0,0.25)',
  shadow16Brand: '0 0 2px rgba(0,0,0,0.30), 0 8px 16px rgba(0,0,0,0.25)',
  shadow28Brand: '0 0 8px rgba(0,0,0,0.30), 0 14px 28px rgba(0,0,0,0.25)',
  shadow64Brand: '0 0 8px rgba(0,0,0,0.30), 0 32px 64px rgba(0,0,0,0.25)',
  colorPaletteRedBackground1: '#fdf6f6',
  colorPaletteRedBackground2: '#f1bbbc',
  colorPaletteRedBackground3: '#d13438',
  colorPaletteRedForeground1: '#bc2f32',
  colorPaletteRedForeground2: '#751d1f',
  colorPaletteRedForeground3: '#d13438',
  colorPaletteRedBorderActive: '#d13438',
  colorPaletteRedBorder1: '#f1bbbc',
  colorPaletteRedBorder2: '#d13438',
  colorPaletteGreenBackground1: '#f1faf1',
  colorPaletteGreenBackground2: '#9fd89f',
  colorPaletteGreenBackground3: '#107c10',
  colorPaletteGreenForeground1: '#0e700e',
  colorPaletteGreenForeground2: '#094509',
  colorPaletteGreenForeground3: '#107c10',
  colorPaletteGreenBorderActive: '#107c10',
  colorPaletteGreenBorder1: '#9fd89f',
  colorPaletteGreenBorder2: '#107c10',
  colorPaletteDarkOrangeBackground1: '#fdf6f3',
  colorPaletteDarkOrangeBackground2: '#f4bfab',
  colorPaletteDarkOrangeBackground3: '#da3b01',
  colorPaletteDarkOrangeForeground1: '#c43501',
  colorPaletteDarkOrangeForeground2: '#7a2101',
  colorPaletteDarkOrangeForeground3: '#da3b01',
  colorPaletteDarkOrangeBorderActive: '#da3b01',
  colorPaletteDarkOrangeBorder1: '#f4bfab',
  colorPaletteDarkOrangeBorder2: '#da3b01',
  colorPaletteYellowBackground1: '#fffef5',
  colorPaletteYellowBackground2: '#fef7b2',
  colorPaletteYellowBackground3: '#fde300',
  colorPaletteYellowForeground1: '#817400',
  colorPaletteYellowForeground2: '#817400',
  colorPaletteYellowForeground3: '#fde300',
  colorPaletteYellowBorderActive: '#fde300',
  colorPaletteYellowBorder1: '#fef7b2',
  colorPaletteYellowBorder2: '#fde300',
  colorPaletteBerryBackground1: '#fdf5fc',
  colorPaletteBerryBackground2: '#edbbe7',
  colorPaletteBerryBackground3: '#c239b3',
  colorPaletteBerryForeground1: '#af33a1',
  colorPaletteBerryForeground2: '#6d2064',
  colorPaletteBerryForeground3: '#c239b3',
  colorPaletteBerryBorderActive: '#c239b3',
  colorPaletteBerryBorder1: '#edbbe7',
  colorPaletteBerryBorder2: '#c239b3',
  colorPaletteLightGreenBackground1: '#f2fbf2',
  colorPaletteLightGreenBackground2: '#a7e3a5',
  colorPaletteLightGreenBackground3: '#13a10e',
  colorPaletteLightGreenForeground1: '#11910d',
  colorPaletteLightGreenForeground2: '#0b5a08',
  colorPaletteLightGreenForeground3: '#13a10e',
  colorPaletteLightGreenBorderActive: '#13a10e',
  colorPaletteLightGreenBorder1: '#a7e3a5',
  colorPaletteLightGreenBorder2: '#13a10e',
  colorPaletteMarigoldBackground1: '#fefbf4',
  colorPaletteMarigoldBackground2: '#f9e2ae',
  colorPaletteMarigoldBackground3: '#eaa300',
  colorPaletteMarigoldForeground1: '#d39300',
  colorPaletteMarigoldForeground2: '#835b00',
  colorPaletteMarigoldForeground3: '#eaa300',
  colorPaletteMarigoldBorderActive: '#eaa300',
  colorPaletteMarigoldBorder1: '#f9e2ae',
  colorPaletteMarigoldBorder2: '#eaa300',
  colorPaletteRedForegroundInverted: '#dc5e62',
  colorPaletteGreenForegroundInverted: '#359b35',
  colorPaletteYellowForegroundInverted: '#fef7b2',
  colorPaletteDarkRedBackground2: '#d69ca5',
  colorPaletteDarkRedForeground2: '#420610',
  colorPaletteDarkRedBorderActive: '#750b1c',
  colorPaletteCranberryBackground2: '#eeacb2',
  colorPaletteCranberryForeground2: '#6e0811',
  colorPaletteCranberryBorderActive: '#c50f1f',
  colorPalettePumpkinBackground2: '#efc4ad',
  colorPalettePumpkinForeground2: '#712d09',
  colorPalettePumpkinBorderActive: '#ca5010',
  colorPalettePeachBackground2: '#ffddb3',
  colorPalettePeachForeground2: '#8f4e00',
  colorPalettePeachBorderActive: '#ff8c00',
  colorPaletteGoldBackground2: '#ecdfa5',
  colorPaletteGoldForeground2: '#6c5700',
  colorPaletteGoldBorderActive: '#c19c00',
  colorPaletteBrassBackground2: '#e0cea2',
  colorPaletteBrassForeground2: '#553e06',
  colorPaletteBrassBorderActive: '#986f0b',
  colorPaletteBrownBackground2: '#ddc3b0',
  colorPaletteBrownForeground2: '#50301a',
  colorPaletteBrownBorderActive: '#8e562e',
  colorPaletteForestBackground2: '#bdd99b',
  colorPaletteForestForeground2: '#294903',
  colorPaletteForestBorderActive: '#498205',
  colorPaletteSeafoamBackground2: '#a8f0cd',
  colorPaletteSeafoamForeground2: '#00723b',
  colorPaletteSeafoamBorderActive: '#00cc6a',
  colorPaletteDarkGreenBackground2: '#9ad29a',
  colorPaletteDarkGreenForeground2: '#063b06',
  colorPaletteDarkGreenBorderActive: '#0b6a0b',
  colorPaletteLightTealBackground2: '#a6e9ed',
  colorPaletteLightTealForeground2: '#00666d',
  colorPaletteLightTealBorderActive: '#00b7c3',
  colorPaletteTealBackground2: '#9bd9db',
  colorPaletteTealForeground2: '#02494c',
  colorPaletteTealBorderActive: '#038387',
  colorPaletteSteelBackground2: '#94c8d4',
  colorPaletteSteelForeground2: '#00333f',
  colorPaletteSteelBorderActive: '#005b70',
  colorPaletteBlueBackground2: '#a9d3f2',
  colorPaletteBlueForeground2: '#004377',
  colorPaletteBlueBorderActive: '#0078d4',
  colorPaletteRoyalBlueBackground2: '#9abfdc',
  colorPaletteRoyalBlueForeground2: '#002c4e',
  colorPaletteRoyalBlueBorderActive: '#004e8c',
  colorPaletteCornflowerBackground2: '#c8d1fa',
  colorPaletteCornflowerForeground2: '#2c3c85',
  colorPaletteCornflowerBorderActive: '#4f6bed',
  colorPaletteNavyBackground2: '#a3b2e8',
  colorPaletteNavyForeground2: '#001665',
  colorPaletteNavyBorderActive: '#0027b4',
  colorPaletteLavenderBackground2: '#d2ccf8',
  colorPaletteLavenderForeground2: '#3f3682',
  colorPaletteLavenderBorderActive: '#7160e8',
  colorPalettePurpleBackground2: '#c6b1de',
  colorPalettePurpleForeground2: '#341a51',
  colorPalettePurpleBorderActive: '#5c2e91',
  colorPaletteGrapeBackground2: '#d9a7e0',
  colorPaletteGrapeForeground2: '#4c0d55',
  colorPaletteGrapeBorderActive: '#881798',
  colorPaletteLilacBackground2: '#e6bfed',
  colorPaletteLilacForeground2: '#63276d',
  colorPaletteLilacBorderActive: '#b146c2',
  colorPalettePinkBackground2: '#f7c0e3',
  colorPalettePinkForeground2: '#80215d',
  colorPalettePinkBorderActive: '#e43ba6',
  colorPaletteMagentaBackground2: '#eca5d1',
  colorPaletteMagentaForeground2: '#6b0043',
  colorPaletteMagentaBorderActive: '#bf0077',
  colorPalettePlumBackground2: '#d696c0',
  colorPalettePlumForeground2: '#43002b',
  colorPalettePlumBorderActive: '#77004d',
  colorPaletteBeigeBackground2: '#d7d4d4',
  colorPaletteBeigeForeground2: '#444241',
  colorPaletteBeigeBorderActive: '#7a7574',
  colorPaletteMinkBackground2: '#cecccb',
  colorPaletteMinkForeground2: '#343231',
  colorPaletteMinkBorderActive: '#5d5a58',
  colorPalettePlatinumBackground2: '#cdd6d8',
  colorPalettePlatinumForeground2: '#3b4447',
  colorPalettePlatinumBorderActive: '#69797e',
};

export const brandThemeTokens = themeToTokensObject(brandTheme);

export const convertHexToRgba = (hex: string) => {
  if (hex === 'transparent') {
    return 'rgba(0, 0, 0, 0)';
  }
  const hexColor = hex.replace('#', '');
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b})`;
};