import { Theme } from '@fluentui/react-components';

interface BrandThemeExtension {
  // global tokens
  'globalLinear': string;
  'globalFontFamiliesSegoe-ui': string;
  'globalLineHeights0': string;
  'globalLineHeights1': string;
  'globalLineHeights2': string;
  'globalLineHeights3': string;
  'globalLineHeights4': string;
  'globalLineHeights5': string;
  'globalLineHeights6': string;
  'globalLineHeights7': string;
  'globalLineHeights8': string;
  'globalLineHeights9': string;
  'globalLineHeights10': string;
  'globalFontWeightsSegoe-ui-0': string;
  'globalFontWeightsSegoe-ui-1': string;
  'globalFontWeightsSegoe-ui-2': string;
  'globalFontWeightsSegoe-ui-3': string;
  'globalFontWeightsSegoe-ui-4': string;
  'globalFontSize0': string;
  'globalFontSize1': string;
  'globalFontSize2': string;
  'globalFontSize3': string;
  'globalFontSize4': string;
  'globalFontSize5': string;
  'globalFontSize6': string;
  'globalFontSize7': string;
  'globalFontSize8': string;
  'globalFontSize9': string;
  'globalFontSize10': string;
  'globalLetterSpacing0': string;
  'globalLetterSpacing1': string;
  'globalParagraphSpacing0': string;
  'globalTextCaseNone': string;
  'globalTextDecorationNone': string;
  'globalParagraphIndent0': string;

  // global/global tokens
  'global/globalFontFamiliesSegoe-ui': string;
  'global/globalFontWeightsSegoe-ui-0': string;
  'global/globalFontWeightsSegoe-ui-1': string;
  'global/globalFontWeightsSegoe-ui-2': string;
  'global/globalFontWeightsSegoe-ui-3': string;
  'global/globalFontWeightsSegoe-ui-4': string;

  // Theme/ tokens
  'Theme/LightNeutralBackground1Rest': string;
  'Theme/LightNeutralBackground1Hover': string;
  'Theme/LightNeutralBackground1Pressed': string;
  'Theme/LightNeutralBackground1Selected': string;
  'Theme/LightNeutralBackground2Rest': string;
  'Theme/LightNeutralBackground3Rest': string;
  'Theme/LightNeutralBackground3Hover': string;
  'Theme/LightNeutralBackground3Pressed': string;
  'Theme/LightNeutralBackground4Rest': string;
  'Theme/LightNeutralBackground4Hover': string;
  'Theme/LightNeutralBackground4Pressed': string;
  'Theme/LightNeutralBackground5Rest': string;
  'Theme/LightNeutralBackground6Rest': string;
  'Theme/LightNeutralBackgroundInvertedRest': string;
  'Theme/LightNeutralBackgroundInvertedDisabledRest': string;
  'Theme/LightNeutralBackgroundAlpha1Rest': string;
  'Theme/LightNeutralBackgroundAlpha2Rest': string;
  'Theme/LightNeutralBackgroundStaticRest': string;
  'Theme/LightNeutralBackgroundSubtleRest': string;
  'Theme/LightNeutralBackgroundSubtleHover': string;
  'Theme/LightNeutralBackgroundSubtlePressed': string;
  'Theme/LightNeutralBackgroundSubtleSelected': string;
  'Theme/LightNeutralBackgroundSubtleLight alphaHover': string;
  'Theme/LightNeutralBackgroundSubtleLight alphaPressed': string;
  'Theme/LightNeutralBackgroundSubtleLight alphaSelected': string;
  'Theme/LightNeutralBackgroundSubtleInvertedRest': string;
  'Theme/LightNeutralBackgroundSubtleInvertedHover': string;
  'Theme/LightNeutralBackgroundSubtleInvertedPressed': string;
  'Theme/LightNeutralBackgroundSubtleInvertedSelected': string;
  'Theme/LightNeutralBackgroundTransparentRest': string;
  'Theme/LightNeutralBackgroundTransparentHover': string;
  'Theme/LightNeutralBackgroundTransparentPressed': string;
  'Theme/LightNeutralBackgroundTransparentSelected': string;
  'Theme/LightNeutralBackgroundDisabledRest': string;
  'Theme/LightNeutralBackgroundStencil1Rest': string;
  'Theme/LightNeutralBackgroundStencil2Rest': string;
  'Theme/LightNeutralBackgroundOverlayRest': string;
  'Theme/LightNeutralBackgroundOverlayScrollbarRest': string;
  'Theme/LightNeutralForeground1Rest primary text': string;
  'Theme/LightNeutralForeground1Hover': string;
  'Theme/LightNeutralForeground1Pressed': string;
  'Theme/LightNeutralForeground1Selected': string;
  'Theme/LightNeutralForeground2Rest secondary text': string;
  'Theme/LightNeutralForeground2Hover': string;
  'Theme/LightNeutralForeground2Pressed': string;
  'Theme/LightNeutralForeground2Selected': string;
  'Theme/LightNeutralForeground2BrandHover': string;
  'Theme/LightNeutralForeground2BrandPressed': string;
  'Theme/LightNeutralForeground2BrandSelected': string;
  'Theme/LightNeutralForeground2BrandRest': string;
  'Theme/LightNeutralForeground2LinkRest': string;
  'Theme/LightNeutralForeground2LinkHover': string;
  'Theme/LightNeutralForeground2LinkPressed': string;
  'Theme/LightNeutralForeground2LinkSelected': string;
  'Theme/LightNeutralForeground4Rest': string;
  'Theme/LightNeutralForegroundDisabled2Rest': string;
  'Theme/LightNeutralForegroundDisabledRest': string;
  'Theme/LightNeutralForegroundStaticInvertedRest': string;
  'Theme/LightNeutralForegroundInverted1Rest': string;
  'Theme/LightNeutralForegroundInverted1Hover': string;
  'Theme/LightNeutralForegroundInverted1Pressed': string;
  'Theme/LightNeutralForegroundInverted1Selected': string;
  'Theme/LightNeutralForegroundInverted2Rest': string;
  'Theme/LightNeutralForegroundInvertedDisabledRest': string;
  'Theme/LightNeutralForegroundInvertedLinkRest': string;
  'Theme/LightNeutralForegroundInvertedLinkHover': string;
  'Theme/LightNeutralForegroundInvertedLinkPressed': string;
  'Theme/LightNeutralForegroundInvertedLinkSelected': string;
  'Theme/LightNeutralForegroundOn BrandRest': string;
  'Theme/LightNeutralStroke1Rest': string;
  'Theme/LightNeutralStroke1Hover': string;
  'Theme/LightNeutralStroke1Pressed': string;
  'Theme/LightNeutralStroke1Selected': string;
  'Theme/LightNeutralStroke2Rest': string;
  'Theme/LightNeutralStroke3Rest': string;
  'Theme/LightNeutralStrokeAlpha1Rest': string;
  'Theme/LightNeutralStrokeAlpha2Rest': string;
  'Theme/LightNeutralStrokeSubtleRest': string;
  'Theme/LightNeutralStrokeOn Brand1Rest': string;
  'Theme/LightNeutralStrokeOn Brand2Rest': string;
  'Theme/LightNeutralStrokeAccessibleRest': string;
  'Theme/LightNeutralStrokeAccessibleHover': string;
  'Theme/LightNeutralStrokeAccessiblePressed': string;
  'Theme/LightNeutralStrokeAccessibleSelected': string;
  'Theme/LightNeutralStrokeFocus1Rest': string;
  'Theme/LightNeutralStrokeFocus2Rest': string;
  'Theme/LightNeutralStrokeTransparentInteractiveRest': string;
  'Theme/LightNeutralStrokeTransparentDisabledRest': string;
  'Theme/LightNeutralStrokeTransparentRest': string;
  'Theme/LightNeutralStrokeDisabledRest': string;
  'Theme/LightNeutralStrokeDisabledInvertedRest': string;
  'Theme/LightBrandBackground1Rest': string;
  'Theme/LightBrandBackground1Hover': string;
  'Theme/LightBrandBackground1Pressed': string;
  'Theme/LightBrandBackground1Selected': string;
  'Theme/LightBrandBackground2Rest': string;
  'Theme/LightBrandBackground2Hover': string;
  'Theme/LightBrandBackground2Pressed': string;
  'Theme/LightBrandBackground3Rest': string;
  'Theme/LightBrandBackgroundInvertedRest': string;
  'Theme/LightBrandBackgroundInvertedHover': string;
  'Theme/LightBrandBackgroundInvertedPressed': string;
  'Theme/LightBrandBackgroundInvertedSelected': string;
  'Theme/LightBrandBackgroundStaticRest': string;
  'Theme/LightBrandBackgroundCompoundRest': string;
  'Theme/LightBrandBackgroundCompoundHover': string;
  'Theme/LightBrandBackgroundCompoundPressed': string;
  'Theme/LightBrandForeground1Rest': string;
  'Theme/LightBrandForeground1Hover': string;
  'Theme/LightBrandForeground1Pressed': string;
  'Theme/LightBrandForeground1Selected': string;
  'Theme/LightBrandForeground2Rest': string;
  'Theme/LightBrandForeground2Hover': string;
  'Theme/LightBrandForeground2Pressed': string;
  'Theme/LightBrandForegroundLinkRest': string;
  'Theme/LightBrandForegroundLinkHover': string;
  'Theme/LightBrandForegroundLinkPressed': string;
  'Theme/LightBrandForegroundLinkSelected': string;
  'Theme/LightBrandForegroundInvertedRest': string;
  'Theme/LightBrandForegroundInvertedHover': string;
  'Theme/LightBrandForegroundInvertedPressed': string;
  'Theme/LightBrandForegroundOn LightRest': string;
  'Theme/LightBrandForegroundOn LightHover': string;
  'Theme/LightBrandForegroundOn LightPressed': string;
  'Theme/LightBrandForegroundOn LightSelected': string;
  'Theme/LightBrandForegroundCompoundRest': string;
  'Theme/LightBrandForegroundCompoundHover': string;
  'Theme/LightBrandForegroundCompoundPressed': string;
  'Theme/LightBrandStroke1Rest': string;
  'Theme/LightBrandStroke1Hover': string;
  'Theme/LightBrandStroke1Pressed': string;
  'Theme/LightBrandStroke1Selected': string;
  'Theme/LightBrandStroke2Rest': string;
  'Theme/LightBrandStroke2ContrastRest': string;
  'Theme/LightBrandStroke3Rest': string;
  'Theme/LightBrandStrokeCompoundRest': string;
  'Theme/LightBrandStrokeCompoundHover': string;
  'Theme/LightBrandStrokeCompoundPressed': string;
  'Theme/LightStatusDangerBackground1Rest': string;
  'Theme/LightStatusDangerBackground3Rest': string;
  'Theme/LightStatusDangerForeground1Rest': string;
  'Theme/LightStatusDangerForeground3Rest': string;
  'Theme/LightStatusDangerStroke1Rest': string;
  'Theme/LightStatusDangerStroke2Rest': string;
  'Theme/LightStatusSuccessBackground1Rest': string;
  'Theme/LightStatusSuccessBackground3Rest': string;
  'Theme/LightStatusSuccessForeground1Rest': string;
  'Theme/LightStatusSuccessForeground3Rest': string;
  'Theme/LightStatusSuccessStroke1Rest': string;
  'Theme/LightStatusSuccessStroke2Rest': string;
  'Theme/LightStatusWarningBackground1Rest': string;
  'Theme/LightStatusWarningBackground3Rest': string;
  'Theme/LightStatusWarningForeground1Rest': string;
  'Theme/LightStatusWarningForeground3Rest': string;
  'Theme/LightStatusWarningStroke1Rest': string;
  'Theme/LightStatusWarningStroke2Rest': string;
  'Theme/LightStatusOofForeground3Rest': string;
  'Theme/LightStatusAwayBackground3Rest': string;
  'Theme/LightStatusAvailableForeground3Rest': string;
  'Theme/LightStatusGenericAnchorBackground2Rest': string;
  'Theme/LightStatusGenericAnchorForeground2Rest': string;
  'Theme/LightStatusGenericAnchorStrokeActiveRest': string;
  'Theme/LightStatusGenericInformationBackground1Rest': string;
  'Theme/LightStatusGenericInformationBackground1Hover': string;
  'Theme/LightStatusGenericInformationBackground1Pressed': string;
  'Theme/LightStatusGenericInformationStroke1Rest': string;
  'Theme/LightStatusGenericInformationStroke2Rest': string;
  'Theme/LightStatusGenericInformationStroke2Hover': string;
  'Theme/LightStatusGenericInformationStroke2Pressed': string;
  'Theme/LightStatusGenericInformationForegroundRest': string;
  'Theme/LightStatusGenericInformationForegroundHover': string;
  'Theme/LightStatusGenericInformationForegroundPressed': string;
  'Theme/LightStatusSevereBackground1Rest': string;
  'Theme/LightStatusSevereBackground3Rest': string;
  'Theme/LightStatusSevereForeground1Rest': string;
  'Theme/LightStatusSevereForeground3Rest': string;
  'Theme/LightStatusSevereStroke1Rest': string;
  'Theme/LightStatusSevereStroke2Rest': string;
  'Theme/LightShadowAmbient': string;
  'Theme/LightShadowAmbient-lighter': string;
  'Theme/LightShadowAmbient-darker': string;
  'Theme/LightShadowBrand-ambient': string;
  'Theme/LightShadowKey': string;
  'Theme/LightShadowKey-lighter': string;
  'Theme/LightShadowKey-darker': string;
  'Theme/LightShadowBrand-key': string;
  'Theme/LightData vizForegroundLabelsCategorical': string;
  'Theme/LightData vizForegroundLabelsData': string;
  'Theme/LightData vizForegroundLabelsColorBlue': string;
  'Theme/LightData vizForegroundLabelsColorGray': string;
  'Theme/LightData vizForegroundLabelsColorRed': string;
  'Theme/LightData vizForegroundLabelsColorTeal': string;
  'Theme/LightData vizForegroundLabelsColorOcean': string;
  'Theme/LightData vizForegroundLabelsColorGreen': string;
  'Theme/LightData vizForegroundLabelsColorYellow300': string;
  'Theme/LightData vizForegroundLabelsColorBlue400': string;
  'Theme/LightData vizForegroundLabelsColorGray400': string;
  'Theme/LightData vizForegroundLabelsColorRed400': string;
  'Theme/LightData vizForegroundLabelsColorTeal300': string;
  'Theme/LightData vizForegroundLabelsColorRed300': string;
  'Theme/LightData vizForegroundLabelsColorTeal400': string;
  'Theme/LightData vizForegroundLabelsColorOcean400': string;
  'Theme/LightData vizForegroundLabelsColorGreen400': string;
  'Theme/LightData vizForegroundLabelsColorYellow400': string;
  'Theme/LightData vizForegroundLabelsColorGreen300': string;
  'Theme/LightData vizForegroundLabelsColorGray300': string;
  'Theme/LightData vizForegroundLabelsColorBlue200': string;
  'Theme/LightData vizForegroundLabelsColorOcean200': string;
  'Theme/LightData vizForegroundAccessibilityText dark bkgd': string;
  'Theme/LightData vizForegroundAccessibilityText light bkgd': string;
  'Theme/LightData vizForegroundKPI CardText dark bkgd': string;
  'Theme/LightData vizForegroundKPI CardText light bkgd': string;
  'Theme/LightData vizStrokeGridline': string;
  'Theme/LightData vizStrokeAxis-Target-Benchmark': string;
  'Theme/LightData vizStrokeColorBlue': string;
  'Theme/LightData vizStrokeColorBlue400': string;
  'Theme/LightData vizStrokeColorGray': string;
  'Theme/LightData vizStrokeColorGray400': string;
  'Theme/LightData vizStrokeColorRed': string;
  'Theme/LightData vizStrokeColorRed300': string;
  'Theme/LightData vizStrokeColorRed400': string;
  'Theme/LightData vizStrokeColorTeal': string;
  'Theme/LightData vizStrokeColorTeal300': string;
  'Theme/LightData vizStrokeColorTeal400': string;
  'Theme/LightData vizStrokeColorOcean': string;
  'Theme/LightData vizStrokeColorOcean400': string;
  'Theme/LightData vizStrokeColorGreen': string;
  'Theme/LightData vizStrokeColorGreen300': string;
  'Theme/LightData vizStrokeColorGreen400': string;
  'Theme/LightData vizStrokeColorYellow300': string;
  'Theme/LightData vizStrokeColorYellow400': string;
  'Theme/LightData vizStrokeColorGray300': string;
  'Theme/LightData vizStrokeColorBlue200': string;
  'Theme/LightData vizStrokeColorOcean200': string;
  'Theme/LightData vizStrokeColorYellow': string;
  'Theme/LightData vizStrokeTrend-Average': string;
  'Theme/LightData vizStrokeAccessible outline': string;
  'Theme/LightData vizSemanticForegroundLight bkgdPositive': string;
  'Theme/LightData vizSemanticForegroundLight bkgdNegative': string;
  'Theme/LightData vizSemanticForegroundLight bkgdNotice': string;
  'Theme/LightData vizSemanticForegroundDark bkgdPositive': string;
  'Theme/LightData vizSemanticForegroundDark bkgdNegative': string;
  'Theme/LightData vizSemanticForegroundDark bkgdNotice': string;
  'Theme/LightData vizSemanticStrokeLight bkgdPositive': string;
  'Theme/LightData vizSemanticStrokeLight bkgdNegative': string;
  'Theme/LightData vizSemanticStrokeLight bkgdNotice': string;
  'Theme/LightData vizSemanticStrokeDark bkgdPositive': string;
  'Theme/LightData vizSemanticStrokeDark bkgdNegative': string;
  'Theme/LightData vizSemanticStrokeDark bkgdNotice': string;
  'Theme/LightData vizSemanticBackgroundPositive': string;
  'Theme/LightData vizSemanticBackgroundNegative': string;
  'Theme/LightData vizSemanticBackgroundNotice': string;
  'Theme/LightData vizBackgroundCoreBlue': string;
  'Theme/LightData vizBackgroundCoreGray': string;
  'Theme/LightData vizBackgroundCoreRed': string;
  'Theme/LightData vizBackgroundCoreTeal': string;
  'Theme/LightData vizBackgroundCoreOcean': string;
  'Theme/LightData vizBackgroundCoreGreen': string;
  'Theme/LightData vizBackgroundCoreYellow': string;
  'Theme/LightData vizBackgroundSequentialBlue400': string;
  'Theme/LightData vizBackgroundSequentialGray400': string;
  'Theme/LightData vizBackgroundSequentialRed300': string;
  'Theme/LightData vizBackgroundSequentialRed400': string;
  'Theme/LightData vizBackgroundSequentialTeal300': string;
  'Theme/LightData vizBackgroundSequentialTeal400': string;
  'Theme/LightData vizBackgroundSequentialOcean400': string;
  'Theme/LightData vizBackgroundSequentialGreen300': string;
  'Theme/LightData vizBackgroundSequentialGreen400': string;
  'Theme/LightData vizBackgroundSequentialYellow300': string;
  'Theme/LightData vizBackgroundSequentialYellow400': string;
  'Theme/LightData vizBackgroundSequentialBlue300': string;
  'Theme/LightData vizBackgroundSequentialBlue200': string;
  'Theme/LightData vizBackgroundSequentialBlue100': string;
  'Theme/LightData vizBackgroundSequentialGray300': string;
  'Theme/LightData vizBackgroundSequentialGray200': string;
  'Theme/LightData vizBackgroundSequentialGray100': string;
  'Theme/LightData vizBackgroundSequentialRed200': string;
  'Theme/LightData vizBackgroundSequentialRed100': string;
  'Theme/LightData vizBackgroundSequentialTeal200': string;
  'Theme/LightData vizBackgroundSequentialTeal100': string;
  'Theme/LightData vizBackgroundSequentialOcean300': string;
  'Theme/LightData vizBackgroundSequentialOcean200': string;
  'Theme/LightData vizBackgroundSequentialOcean100': string;
  'Theme/LightData vizBackgroundSequentialGreen200': string;
  'Theme/LightData vizBackgroundSequentialGreen100': string;
  'Theme/LightData vizBackgroundSequentialYellow200': string;
  'Theme/LightData vizBackgroundSequentialYellow100': string;
  'Theme/LightData vizBackgroundNeutralBlack': string;
  'Theme/LightControl logicTheme switch': string;
  'Theme/DarkNeutralBackground1Rest': string;
  'Theme/DarkNeutralBackground1Hover': string;
  'Theme/DarkNeutralBackground1Pressed': string;
  'Theme/DarkNeutralBackground1Selected': string;
  'Theme/DarkNeutralBackground2Rest': string;
  'Theme/DarkNeutralBackground3Rest': string;
  'Theme/DarkNeutralBackground3Hover': string;
  'Theme/DarkNeutralBackground3Pressed': string;
  'Theme/DarkNeutralBackground4Rest': string;
  'Theme/DarkNeutralBackground4Hover': string;
  'Theme/DarkNeutralBackground4Pressed': string;
  'Theme/DarkNeutralBackground5Rest': string;
  'Theme/DarkNeutralBackground6Rest': string;
  'Theme/DarkNeutralBackgroundInvertedRest': string;
  'Theme/DarkNeutralBackgroundInvertedDisabledRest': string;
  'Theme/DarkNeutralBackgroundAlpha1Rest': string;
  'Theme/DarkNeutralBackgroundAlpha2Rest': string;
  'Theme/DarkNeutralBackgroundStaticRest': string;
  'Theme/DarkNeutralBackgroundSubtleRest': string;
  'Theme/DarkNeutralBackgroundSubtleHover': string;
  'Theme/DarkNeutralBackgroundSubtlePressed': string;
  'Theme/DarkNeutralBackgroundSubtleSelected': string;
  'Theme/DarkNeutralBackgroundSubtleLight alphaHover': string;
  'Theme/DarkNeutralBackgroundSubtleLight alphaPressed': string;
  'Theme/DarkNeutralBackgroundSubtleLight alphaSelected': string;
  'Theme/DarkNeutralBackgroundSubtleInvertedRest': string;
  'Theme/DarkNeutralBackgroundSubtleInvertedHover': string;
  'Theme/DarkNeutralBackgroundSubtleInvertedPressed': string;
  'Theme/DarkNeutralBackgroundSubtleInvertedSelected': string;
  'Theme/DarkNeutralBackgroundTransparentRest': string;
  'Theme/DarkNeutralBackgroundTransparentHover': string;
  'Theme/DarkNeutralBackgroundTransparentPressed': string;
  'Theme/DarkNeutralBackgroundTransparentSelected': string;
  'Theme/DarkNeutralBackgroundDisabledRest': string;
  'Theme/DarkNeutralBackgroundStencil1Rest': string;
  'Theme/DarkNeutralBackgroundStencil2Rest': string;
  'Theme/DarkNeutralBackgroundOverlayRest': string;
  'Theme/DarkNeutralBackgroundOverlayScrollbarRest': string;
  'Theme/DarkNeutralForeground1Rest primary text': string;
  'Theme/DarkNeutralForeground1Hover': string;
  'Theme/DarkNeutralForeground1Pressed': string;
  'Theme/DarkNeutralForeground1Selected': string;
  'Theme/DarkNeutralForeground2Rest secondary text': string;
  'Theme/DarkNeutralForeground2Hover': string;
  'Theme/DarkNeutralForeground2Pressed': string;
  'Theme/DarkNeutralForeground2Selected': string;
  'Theme/DarkNeutralForeground2BrandHover': string;
  'Theme/DarkNeutralForeground2BrandPressed': string;
  'Theme/DarkNeutralForeground2BrandSelected': string;
  'Theme/DarkNeutralForeground2BrandRest': string;
  'Theme/DarkNeutralForeground2LinkRest': string;
  'Theme/DarkNeutralForeground2LinkHover': string;
  'Theme/DarkNeutralForeground2LinkPressed': string;
  'Theme/DarkNeutralForeground2LinkSelected': string;
  'Theme/DarkNeutralForeground4Rest': string;
  'Theme/DarkNeutralForegroundDisabled2Rest': string;
  'Theme/DarkNeutralForegroundDisabledRest': string;
  'Theme/DarkNeutralForegroundStaticInvertedRest': string;
  'Theme/DarkNeutralForegroundInverted1Rest': string;
  'Theme/DarkNeutralForegroundInverted1Hover': string;
  'Theme/DarkNeutralForegroundInverted1Pressed': string;
  'Theme/DarkNeutralForegroundInverted1Selected': string;
  'Theme/DarkNeutralForegroundInverted2Rest': string;
  'Theme/DarkNeutralForegroundInvertedDisabledRest': string;
  'Theme/DarkNeutralForegroundInvertedLinkRest': string;
  'Theme/DarkNeutralForegroundInvertedLinkHover': string;
  'Theme/DarkNeutralForegroundInvertedLinkPressed': string;
  'Theme/DarkNeutralForegroundInvertedLinkSelected': string;
  'Theme/DarkNeutralForegroundOn BrandRest': string;
  'Theme/DarkNeutralStroke1Rest': string;
  'Theme/DarkNeutralStroke1Hover': string;
  'Theme/DarkNeutralStroke1Pressed': string;
  'Theme/DarkNeutralStroke1Selected': string;
  'Theme/DarkNeutralStroke2Rest': string;
  'Theme/DarkNeutralStroke3Rest': string;
  'Theme/DarkNeutralStrokeAlpha1Rest': string;
  'Theme/DarkNeutralStrokeAlpha2Rest': string;
  'Theme/DarkNeutralStrokeSubtleRest': string;
  'Theme/DarkNeutralStrokeOn Brand1Rest': string;
  'Theme/DarkNeutralStrokeOn Brand2Rest': string;
  'Theme/DarkNeutralStrokeAccessibleRest': string;
  'Theme/DarkNeutralStrokeAccessibleHover': string;
  'Theme/DarkNeutralStrokeAccessiblePressed': string;
  'Theme/DarkNeutralStrokeAccessibleSelected': string;
  'Theme/DarkNeutralStrokeFocus1Rest': string;
  'Theme/DarkNeutralStrokeFocus2Rest': string;
  'Theme/DarkNeutralStrokeTransparentInteractiveRest': string;
  'Theme/DarkNeutralStrokeTransparentDisabledRest': string;
  'Theme/DarkNeutralStrokeTransparentRest': string;
  'Theme/DarkNeutralStrokeDisabledRest': string;
  'Theme/DarkNeutralStrokeDisabledInvertedRest': string;
  'Theme/DarkBrandBackground1Rest': string;
  'Theme/DarkBrandBackground1Hover': string;
  'Theme/DarkBrandBackground1Pressed': string;
  'Theme/DarkBrandBackground1Selected': string;
  'Theme/DarkBrandBackground2Rest': string;
  'Theme/DarkBrandBackground2Hover': string;
  'Theme/DarkBrandBackground2Pressed': string;
  'Theme/DarkBrandBackground3Rest': string;
  'Theme/DarkBrandBackgroundInvertedRest': string;
  'Theme/DarkBrandBackgroundInvertedHover': string;
  'Theme/DarkBrandBackgroundInvertedPressed': string;
  'Theme/DarkBrandBackgroundInvertedSelected': string;
  'Theme/DarkBrandBackgroundStaticRest': string;
  'Theme/DarkBrandBackgroundCompoundRest': string;
  'Theme/DarkBrandBackgroundCompoundHover': string;
  'Theme/DarkBrandBackgroundCompoundPressed': string;
  'Theme/DarkBrandForeground1Rest': string;
  'Theme/DarkBrandForeground1Hover': string;
  'Theme/DarkBrandForeground1Pressed': string;
  'Theme/DarkBrandForeground1Selected': string;
  'Theme/DarkBrandForeground2Rest': string;
  'Theme/DarkBrandForeground2Hover': string;
  'Theme/DarkBrandForeground2Pressed': string;
  'Theme/DarkBrandForegroundLinkRest': string;
  'Theme/DarkBrandForegroundLinkHover': string;
  'Theme/DarkBrandForegroundLinkPressed': string;
  'Theme/DarkBrandForegroundLinkSelected': string;
  'Theme/DarkBrandForegroundInvertedRest': string;
  'Theme/DarkBrandForegroundInvertedHover': string;
  'Theme/DarkBrandForegroundInvertedPressed': string;
  'Theme/DarkBrandForegroundOn LightRest': string;
  'Theme/DarkBrandForegroundOn LightHover': string;
  'Theme/DarkBrandForegroundOn LightPressed': string;
  'Theme/DarkBrandForegroundOn LightSelected': string;
  'Theme/DarkBrandForegroundCompoundRest': string;
  'Theme/DarkBrandForegroundCompoundHover': string;
  'Theme/DarkBrandForegroundCompoundPressed': string;
  'Theme/DarkBrandStroke1Rest': string;
  'Theme/DarkBrandStroke1Hover': string;
  'Theme/DarkBrandStroke1Pressed': string;
  'Theme/DarkBrandStroke1Selected': string;
  'Theme/DarkBrandStroke2Rest': string;
  'Theme/DarkBrandStroke2ContrastRest': string;
  'Theme/DarkBrandStroke3Rest': string;
  'Theme/DarkBrandStrokeCompoundRest': string;
  'Theme/DarkBrandStrokeCompoundHover': string;
  'Theme/DarkBrandStrokeCompoundPressed': string;
  'Theme/DarkStatusDangerBackground1Rest': string;
  'Theme/DarkStatusDangerBackground3Rest': string;
  'Theme/DarkStatusDangerForeground1Rest': string;
  'Theme/DarkStatusDangerForeground3Rest': string;
  'Theme/DarkStatusDangerStroke1Rest': string;
  'Theme/DarkStatusDangerStroke2Rest': string;
  'Theme/DarkStatusSuccessBackground1Rest': string;
  'Theme/DarkStatusSuccessBackground3Rest': string;
  'Theme/DarkStatusSuccessForeground1Rest': string;
  'Theme/DarkStatusSuccessForeground3Rest': string;
  'Theme/DarkStatusSuccessStroke1Rest': string;
  'Theme/DarkStatusSuccessStroke2Rest': string;
  'Theme/DarkStatusWarningBackground1Rest': string;
  'Theme/DarkStatusWarningBackground3Rest': string;
  'Theme/DarkStatusWarningForeground1Rest': string;
  'Theme/DarkStatusWarningForeground3Rest': string;
  'Theme/DarkStatusWarningStroke1Rest': string;
  'Theme/DarkStatusWarningStroke2Rest': string;
  'Theme/DarkStatusOofForeground3Rest': string;
  'Theme/DarkStatusAwayBackground3Rest': string;
  'Theme/DarkStatusAvailableForeground3Rest': string;
  'Theme/DarkStatusGenericAnchorBackground2Rest': string;
  'Theme/DarkStatusGenericAnchorForeground2Rest': string;
  'Theme/DarkStatusGenericAnchorStrokeActiveRest': string;
  'Theme/DarkStatusGenericInformationBackground1Rest': string;
  'Theme/DarkStatusGenericInformationBackground1Hover': string;
  'Theme/DarkStatusGenericInformationBackground1Pressed': string;
  'Theme/DarkStatusGenericInformationStroke1Rest': string;
  'Theme/DarkStatusGenericInformationStroke2Rest': string;
  'Theme/DarkStatusGenericInformationStroke2Hover': string;
  'Theme/DarkStatusGenericInformationStroke2Pressed': string;
  'Theme/DarkStatusGenericInformationForegroundRest': string;
  'Theme/DarkStatusGenericInformationForegroundHover': string;
  'Theme/DarkStatusGenericInformationForegroundPressed': string;
  'Theme/DarkStatusSevereBackground1Rest': string;
  'Theme/DarkStatusSevereBackground3Rest': string;
  'Theme/DarkStatusSevereForeground1Rest': string;
  'Theme/DarkStatusSevereForeground3Rest': string;
  'Theme/DarkStatusSevereStroke1Rest': string;
  'Theme/DarkStatusSevereStroke2Rest': string;
  'Theme/DarkShadowAmbient': string;
  'Theme/DarkShadowAmbient-lighter': string;
  'Theme/DarkShadowAmbient-darker': string;
  'Theme/DarkShadowBrand-ambient': string;
  'Theme/DarkShadowKey': string;
  'Theme/DarkShadowKey-lighter': string;
  'Theme/DarkShadowKey-darker': string;
  'Theme/DarkShadowBrand-key': string;
  'Theme/DarkData vizForegroundLabelsCategorical': string;
  'Theme/DarkData vizForegroundLabelsData': string;
  'Theme/DarkData vizForegroundLabelsColorBlue': string;
  'Theme/DarkData vizForegroundLabelsColorGray': string;
  'Theme/DarkData vizForegroundLabelsColorRed': string;
  'Theme/DarkData vizForegroundLabelsColorTeal': string;
  'Theme/DarkData vizForegroundLabelsColorOcean': string;
  'Theme/DarkData vizForegroundLabelsColorGreen': string;
  'Theme/DarkData vizForegroundLabelsColorYellow300': string;
  'Theme/DarkData vizForegroundLabelsColorBlue400': string;
  'Theme/DarkData vizForegroundLabelsColorGray400': string;
  'Theme/DarkData vizForegroundLabelsColorRed400': string;
  'Theme/DarkData vizForegroundLabelsColorTeal300': string;
  'Theme/DarkData vizForegroundLabelsColorRed300': string;
  'Theme/DarkData vizForegroundLabelsColorTeal400': string;
  'Theme/DarkData vizForegroundLabelsColorOcean400': string;
  'Theme/DarkData vizForegroundLabelsColorGreen400': string;
  'Theme/DarkData vizForegroundLabelsColorYellow400': string;
  'Theme/DarkData vizForegroundLabelsColorGreen300': string;
  'Theme/DarkData vizForegroundLabelsColorGray300': string;
  'Theme/DarkData vizForegroundLabelsColorBlue200': string;
  'Theme/DarkData vizForegroundLabelsColorOcean200': string;
  'Theme/DarkData vizForegroundAccessibilityText dark bkgd': string;
  'Theme/DarkData vizForegroundAccessibilityText light bkgd': string;
  'Theme/DarkData vizForegroundKPI CardText dark bkgd': string;
  'Theme/DarkData vizForegroundKPI CardText light bkgd': string;
  'Theme/DarkData vizStrokeGridline': string;
  'Theme/DarkData vizStrokeAxis-Target-Benchmark': string;
  'Theme/DarkData vizStrokeColorBlue': string;
  'Theme/DarkData vizStrokeColorBlue400': string;
  'Theme/DarkData vizStrokeColorGray': string;
  'Theme/DarkData vizStrokeColorGray400': string;
  'Theme/DarkData vizStrokeColorRed': string;
  'Theme/DarkData vizStrokeColorRed300': string;
  'Theme/DarkData vizStrokeColorRed400': string;
  'Theme/DarkData vizStrokeColorTeal': string;
  'Theme/DarkData vizStrokeColorTeal300': string;
  'Theme/DarkData vizStrokeColorTeal400': string;
  'Theme/DarkData vizStrokeColorOcean': string;
  'Theme/DarkData vizStrokeColorOcean400': string;
  'Theme/DarkData vizStrokeColorGreen': string;
  'Theme/DarkData vizStrokeColorGreen300': string;
  'Theme/DarkData vizStrokeColorGreen400': string;
  'Theme/DarkData vizStrokeColorYellow300': string;
  'Theme/DarkData vizStrokeColorYellow400': string;
  'Theme/DarkData vizStrokeColorGray300': string;
  'Theme/DarkData vizStrokeColorBlue200': string;
  'Theme/DarkData vizStrokeColorOcean200': string;
  'Theme/DarkData vizStrokeColorYellow': string;
  'Theme/DarkData vizStrokeTrend-Average': string;
  'Theme/DarkData vizStrokeAccessible outline': string;
  'Theme/DarkData vizSemanticForegroundLight bkgdPositive': string;
  'Theme/DarkData vizSemanticForegroundLight bkgdNegative': string;
  'Theme/DarkData vizSemanticForegroundLight bkgdNotice': string;
  'Theme/DarkData vizSemanticForegroundDark bkgdPositive': string;
  'Theme/DarkData vizSemanticForegroundDark bkgdNegative': string;
  'Theme/DarkData vizSemanticForegroundDark bkgdNotice': string;
  'Theme/DarkData vizSemanticStrokeLight bkgdPositive': string;
  'Theme/DarkData vizSemanticStrokeLight bkgdNegative': string;
  'Theme/DarkData vizSemanticStrokeLight bkgdNotice': string;
  'Theme/DarkData vizSemanticStrokeDark bkgdPositive': string;
  'Theme/DarkData vizSemanticStrokeDark bkgdNegative': string;
  'Theme/DarkData vizSemanticStrokeDark bkgdNotice': string;
  'Theme/DarkData vizSemanticBackgroundPositive': string;
  'Theme/DarkData vizSemanticBackgroundNegative': string;
  'Theme/DarkData vizSemanticBackgroundNotice': string;
  'Theme/DarkData vizBackgroundCoreBlue': string;
  'Theme/DarkData vizBackgroundCoreGray': string;
  'Theme/DarkData vizBackgroundCoreRed': string;
  'Theme/DarkData vizBackgroundCoreTeal': string;
  'Theme/DarkData vizBackgroundCoreOcean': string;
  'Theme/DarkData vizBackgroundCoreGreen': string;
  'Theme/DarkData vizBackgroundCoreYellow': string;
  'Theme/DarkData vizBackgroundSequentialBlue400': string;
  'Theme/DarkData vizBackgroundSequentialGray400': string;
  'Theme/DarkData vizBackgroundSequentialRed300': string;
  'Theme/DarkData vizBackgroundSequentialRed400': string;
  'Theme/DarkData vizBackgroundSequentialTeal300': string;
  'Theme/DarkData vizBackgroundSequentialTeal400': string;
  'Theme/DarkData vizBackgroundSequentialOcean400': string;
  'Theme/DarkData vizBackgroundSequentialGreen300': string;
  'Theme/DarkData vizBackgroundSequentialGreen400': string;
  'Theme/DarkData vizBackgroundSequentialYellow300': string;
  'Theme/DarkData vizBackgroundSequentialYellow400': string;
  'Theme/DarkData vizBackgroundSequentialBlue300': string;
  'Theme/DarkData vizBackgroundSequentialBlue200': string;
  'Theme/DarkData vizBackgroundSequentialBlue100': string;
  'Theme/DarkData vizBackgroundSequentialGray300': string;
  'Theme/DarkData vizBackgroundSequentialGray200': string;
  'Theme/DarkData vizBackgroundSequentialGray100': string;
  'Theme/DarkData vizBackgroundSequentialRed200': string;
  'Theme/DarkData vizBackgroundSequentialRed100': string;
  'Theme/DarkData vizBackgroundSequentialTeal200': string;
  'Theme/DarkData vizBackgroundSequentialTeal100': string;
  'Theme/DarkData vizBackgroundSequentialOcean300': string;
  'Theme/DarkData vizBackgroundSequentialOcean200': string;
  'Theme/DarkData vizBackgroundSequentialOcean100': string;
  'Theme/DarkData vizBackgroundSequentialGreen200': string;
  'Theme/DarkData vizBackgroundSequentialGreen100': string;
  'Theme/DarkData vizBackgroundSequentialYellow200': string;
  'Theme/DarkData vizBackgroundSequentialYellow100': string;
  'Theme/DarkData vizBackgroundNeutralBlack': string;
  'Theme/DarkControl logicTheme switch': string;
  'Theme/Light/Theme/LightNeutralBackground1Rest': string;
  'Theme/Light/Theme/LightNeutralBackground1Hover': string;
  'Theme/Light/Theme/LightNeutralBackground1Pressed': string;
  'Theme/Light/Theme/LightNeutralBackground1Selected': string;
  'Theme/Light/Theme/LightNeutralBackground2Rest': string;
  'Theme/Light/Theme/LightNeutralBackground3Rest': string;
  'Theme/Light/Theme/LightNeutralBackground3Hover': string;
  'Theme/Light/Theme/LightNeutralBackground3Pressed': string;
  'Theme/Light/Theme/LightNeutralBackground4Rest': string;
  'Theme/Light/Theme/LightNeutralBackground4Hover': string;
  'Theme/Light/Theme/LightNeutralBackground4Pressed': string;
  'Theme/Light/Theme/LightNeutralBackground5Rest': string;
  'Theme/Light/Theme/LightNeutralBackground6Rest': string;
  'Theme/Light/Theme/LightNeutralBackgroundInvertedRest': string;
  'Theme/Light/Theme/LightNeutralBackgroundInvertedDisabledRest': string;
  'Theme/Light/Theme/LightNeutralBackgroundAlpha1Rest': string;
  'Theme/Light/Theme/LightNeutralBackgroundAlpha2Rest': string;
  'Theme/Light/Theme/LightNeutralBackgroundStaticRest': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleRest': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleHover': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtlePressed': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleSelected': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleLight alphaHover': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleLight alphaPressed': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleLight alphaSelected': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleInvertedRest': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleInvertedHover': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleInvertedPressed': string;
  'Theme/Light/Theme/LightNeutralBackgroundSubtleInvertedSelected': string;
  'Theme/Light/Theme/LightNeutralBackgroundTransparentRest': string;
  'Theme/Light/Theme/LightNeutralBackgroundTransparentHover': string;
  'Theme/Light/Theme/LightNeutralBackgroundTransparentPressed': string;
  'Theme/Light/Theme/LightNeutralBackgroundTransparentSelected': string;
  'Theme/Light/Theme/LightNeutralBackgroundDisabledRest': string;
  'Theme/Light/Theme/LightNeutralBackgroundStencil1Rest': string;
  'Theme/Light/Theme/LightNeutralBackgroundStencil2Rest': string;
  'Theme/Light/Theme/LightNeutralBackgroundOverlayRest': string;
  'Theme/Light/Theme/LightNeutralBackgroundOverlayScrollbarRest': string;
  'Theme/Light/Theme/LightNeutralForeground1Rest primary text': string;
  'Theme/Light/Theme/LightNeutralForeground1Hover': string;
  'Theme/Light/Theme/LightNeutralForeground1Pressed': string;
  'Theme/Light/Theme/LightNeutralForeground1Selected': string;
  'Theme/Light/Theme/LightNeutralForeground2Rest secondary text': string;
  'Theme/Light/Theme/LightNeutralForeground2Hover': string;
  'Theme/Light/Theme/LightNeutralForeground2Pressed': string;
  'Theme/Light/Theme/LightNeutralForeground2Selected': string;
  'Theme/Light/Theme/LightNeutralForeground2BrandHover': string;
  'Theme/Light/Theme/LightNeutralForeground2BrandPressed': string;
  'Theme/Light/Theme/LightNeutralForeground2BrandSelected': string;
  'Theme/Light/Theme/LightNeutralForeground2BrandRest': string;
  'Theme/Light/Theme/LightNeutralForeground2LinkRest': string;
  'Theme/Light/Theme/LightNeutralForeground2LinkHover': string;
  'Theme/Light/Theme/LightNeutralForeground2LinkPressed': string;
  'Theme/Light/Theme/LightNeutralForeground2LinkSelected': string;
  'Theme/Light/Theme/LightNeutralForeground4Rest': string;
  'Theme/Light/Theme/LightNeutralForegroundDisabled2Rest': string;
  'Theme/Light/Theme/LightNeutralForegroundDisabledRest': string;
  'Theme/Light/Theme/LightNeutralForegroundStaticInvertedRest': string;
  'Theme/Light/Theme/LightNeutralForegroundInverted1Rest': string;
  'Theme/Light/Theme/LightNeutralForegroundInverted1Hover': string;
  'Theme/Light/Theme/LightNeutralForegroundInverted1Pressed': string;
  'Theme/Light/Theme/LightNeutralForegroundInverted1Selected': string;
  'Theme/Light/Theme/LightNeutralForegroundInverted2Rest': string;
  'Theme/Light/Theme/LightNeutralForegroundInvertedDisabledRest': string;
  'Theme/Light/Theme/LightNeutralForegroundInvertedLinkRest': string;
  'Theme/Light/Theme/LightNeutralForegroundInvertedLinkHover': string;
  'Theme/Light/Theme/LightNeutralForegroundInvertedLinkPressed': string;
  'Theme/Light/Theme/LightNeutralForegroundInvertedLinkSelected': string;
  'Theme/Light/Theme/LightNeutralForegroundOn BrandRest': string;
  'Theme/Light/Theme/LightNeutralStroke1Rest': string;
  'Theme/Light/Theme/LightNeutralStroke1Hover': string;
  'Theme/Light/Theme/LightNeutralStroke1Pressed': string;
  'Theme/Light/Theme/LightNeutralStroke1Selected': string;
  'Theme/Light/Theme/LightNeutralStroke2Rest': string;
  'Theme/Light/Theme/LightNeutralStroke3Rest': string;
  'Theme/Light/Theme/LightNeutralStrokeAlpha1Rest': string;
  'Theme/Light/Theme/LightNeutralStrokeAlpha2Rest': string;
  'Theme/Light/Theme/LightNeutralStrokeSubtleRest': string;
  'Theme/Light/Theme/LightNeutralStrokeOn Brand1Rest': string;
  'Theme/Light/Theme/LightNeutralStrokeOn Brand2Rest': string;
  'Theme/Light/Theme/LightNeutralStrokeAccessibleRest': string;
  'Theme/Light/Theme/LightNeutralStrokeAccessibleHover': string;
  'Theme/Light/Theme/LightNeutralStrokeAccessiblePressed': string;
  'Theme/Light/Theme/LightNeutralStrokeAccessibleSelected': string;
  'Theme/Light/Theme/LightNeutralStrokeFocus1Rest': string;
  'Theme/Light/Theme/LightNeutralStrokeFocus2Rest': string;
  'Theme/Light/Theme/LightNeutralStrokeTransparentInteractiveRest': string;
  'Theme/Light/Theme/LightNeutralStrokeTransparentDisabledRest': string;
  'Theme/Light/Theme/LightNeutralStrokeTransparentRest': string;
  'Theme/Light/Theme/LightNeutralStrokeDisabledRest': string;
  'Theme/Light/Theme/LightNeutralStrokeDisabledInvertedRest': string;
  'Theme/Light/Theme/LightBrandBackground1Rest': string;
  'Theme/Light/Theme/LightBrandBackground1Hover': string;
  'Theme/Light/Theme/LightBrandBackground1Pressed': string;
  'Theme/Light/Theme/LightBrandBackground1Selected': string;
  'Theme/Light/Theme/LightBrandBackground2Rest': string;
  'Theme/Light/Theme/LightBrandBackground2Hover': string;
  'Theme/Light/Theme/LightBrandBackground2Pressed': string;
  'Theme/Light/Theme/LightBrandBackground3Rest': string;
  'Theme/Light/Theme/LightBrandBackgroundInvertedRest': string;
  'Theme/Light/Theme/LightBrandBackgroundInvertedHover': string;
  'Theme/Light/Theme/LightBrandBackgroundInvertedPressed': string;
  'Theme/Light/Theme/LightBrandBackgroundInvertedSelected': string;
  'Theme/Light/Theme/LightBrandBackgroundStaticRest': string;
  'Theme/Light/Theme/LightBrandBackgroundCompoundRest': string;
  'Theme/Light/Theme/LightBrandBackgroundCompoundHover': string;
  'Theme/Light/Theme/LightBrandBackgroundCompoundPressed': string;
  'Theme/Light/Theme/LightBrandForeground1Rest': string;
  'Theme/Light/Theme/LightBrandForeground1Hover': string;
  'Theme/Light/Theme/LightBrandForeground1Pressed': string;
  'Theme/Light/Theme/LightBrandForeground1Selected': string;
  'Theme/Light/Theme/LightBrandForeground2Rest': string;
  'Theme/Light/Theme/LightBrandForeground2Hover': string;
  'Theme/Light/Theme/LightBrandForeground2Pressed': string;
  'Theme/Light/Theme/LightBrandForegroundLinkRest': string;
  'Theme/Light/Theme/LightBrandForegroundLinkHover': string;
  'Theme/Light/Theme/LightBrandForegroundLinkPressed': string;
  'Theme/Light/Theme/LightBrandForegroundLinkSelected': string;
  'Theme/Light/Theme/LightBrandForegroundInvertedRest': string;
  'Theme/Light/Theme/LightBrandForegroundInvertedHover': string;
  'Theme/Light/Theme/LightBrandForegroundInvertedPressed': string;
  'Theme/Light/Theme/LightBrandForegroundOn LightRest': string;
  'Theme/Light/Theme/LightBrandForegroundOn LightHover': string;
  'Theme/Light/Theme/LightBrandForegroundOn LightPressed': string;
  'Theme/Light/Theme/LightBrandForegroundOn LightSelected': string;
  'Theme/Light/Theme/LightBrandForegroundCompoundRest': string;
  'Theme/Light/Theme/LightBrandForegroundCompoundHover': string;
  'Theme/Light/Theme/LightBrandForegroundCompoundPressed': string;
  'Theme/Light/Theme/LightBrandStroke1Rest': string;
  'Theme/Light/Theme/LightBrandStroke1Hover': string;
  'Theme/Light/Theme/LightBrandStroke1Pressed': string;
  'Theme/Light/Theme/LightBrandStroke1Selected': string;
  'Theme/Light/Theme/LightBrandStroke2Rest': string;
  'Theme/Light/Theme/LightBrandStroke2ContrastRest': string;
  'Theme/Light/Theme/LightBrandStroke3Rest': string;
  'Theme/Light/Theme/LightBrandStrokeCompoundRest': string;
  'Theme/Light/Theme/LightBrandStrokeCompoundHover': string;
  'Theme/Light/Theme/LightBrandStrokeCompoundPressed': string;
  'Theme/Light/Theme/LightStatusDangerBackground1Rest': string;
  'Theme/Light/Theme/LightStatusDangerBackground3Rest': string;
  'Theme/Light/Theme/LightStatusDangerForeground1Rest': string;
  'Theme/Light/Theme/LightStatusDangerForeground3Rest': string;
  'Theme/Light/Theme/LightStatusDangerStroke1Rest': string;
  'Theme/Light/Theme/LightStatusDangerStroke2Rest': string;
  'Theme/Light/Theme/LightStatusSuccessBackground1Rest': string;
  'Theme/Light/Theme/LightStatusSuccessBackground3Rest': string;
  'Theme/Light/Theme/LightStatusSuccessForeground1Rest': string;
  'Theme/Light/Theme/LightStatusSuccessForeground3Rest': string;
  'Theme/Light/Theme/LightStatusSuccessStroke1Rest': string;
  'Theme/Light/Theme/LightStatusSuccessStroke2Rest': string;
  'Theme/Light/Theme/LightStatusWarningBackground1Rest': string;
  'Theme/Light/Theme/LightStatusWarningBackground3Rest': string;
  'Theme/Light/Theme/LightStatusWarningForeground1Rest': string;
  'Theme/Light/Theme/LightStatusWarningForeground3Rest': string;
  'Theme/Light/Theme/LightStatusWarningStroke1Rest': string;
  'Theme/Light/Theme/LightStatusWarningStroke2Rest': string;
  'Theme/Light/Theme/LightStatusOofForeground3Rest': string;
  'Theme/Light/Theme/LightStatusAwayBackground3Rest': string;
  'Theme/Light/Theme/LightStatusAvailableForeground3Rest': string;
  'Theme/Light/Theme/LightStatusGenericAnchorBackground2Rest': string;
  'Theme/Light/Theme/LightStatusGenericAnchorForeground2Rest': string;
  'Theme/Light/Theme/LightStatusGenericAnchorStrokeActiveRest': string;
  'Theme/Light/Theme/LightStatusGenericInformationBackground1Rest': string;
  'Theme/Light/Theme/LightStatusGenericInformationBackground1Hover': string;
  'Theme/Light/Theme/LightStatusGenericInformationBackground1Pressed': string;
  'Theme/Light/Theme/LightStatusGenericInformationStroke1Rest': string;
  'Theme/Light/Theme/LightStatusGenericInformationStroke2Rest': string;
  'Theme/Light/Theme/LightStatusGenericInformationStroke2Hover': string;
  'Theme/Light/Theme/LightStatusGenericInformationStroke2Pressed': string;
  'Theme/Light/Theme/LightStatusGenericInformationForegroundRest': string;
  'Theme/Light/Theme/LightStatusGenericInformationForegroundHover': string;
  'Theme/Light/Theme/LightStatusGenericInformationForegroundPressed': string;
  'Theme/Light/Theme/LightStatusSevereBackground1Rest': string;
  'Theme/Light/Theme/LightStatusSevereBackground3Rest': string;
  'Theme/Light/Theme/LightStatusSevereForeground1Rest': string;
  'Theme/Light/Theme/LightStatusSevereForeground3Rest': string;
  'Theme/Light/Theme/LightStatusSevereStroke1Rest': string;
  'Theme/Light/Theme/LightStatusSevereStroke2Rest': string;
  'Theme/Light/Theme/LightShadowAmbient': string;
  'Theme/Light/Theme/LightShadowAmbient-lighter': string;
  'Theme/Light/Theme/LightShadowAmbient-darker': string;
  'Theme/Light/Theme/LightShadowBrand-ambient': string;
  'Theme/Light/Theme/LightShadowKey': string;
  'Theme/Light/Theme/LightShadowKey-lighter': string;
  'Theme/Light/Theme/LightShadowKey-darker': string;
  'Theme/Light/Theme/LightShadowBrand-key': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsCategorical': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsData': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorBlue': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGray': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorRed': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorTeal': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorOcean': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGreen': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorYellow300': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorBlue400': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGray400': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorRed400': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorTeal300': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorRed300': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorTeal400': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorOcean400': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGreen400': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorYellow400': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGreen300': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGray300': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorBlue200': string;
  'Theme/Light/Theme/LightData vizForegroundLabelsColorOcean200': string;
  'Theme/Light/Theme/LightData vizForegroundAccessibilityText dark bkgd': string;
  'Theme/Light/Theme/LightData vizForegroundAccessibilityText light bkgd': string;
  'Theme/Light/Theme/LightData vizForegroundKPI CardText dark bkgd': string;
  'Theme/Light/Theme/LightData vizForegroundKPI CardText light bkgd': string;
  'Theme/Light/Theme/LightData vizStrokeGridline': string;
  'Theme/Light/Theme/LightData vizStrokeAxis-Target-Benchmark': string;
  'Theme/Light/Theme/LightData vizStrokeColorBlue': string;
  'Theme/Light/Theme/LightData vizStrokeColorBlue400': string;
  'Theme/Light/Theme/LightData vizStrokeColorGray': string;
  'Theme/Light/Theme/LightData vizStrokeColorGray400': string;
  'Theme/Light/Theme/LightData vizStrokeColorRed': string;
  'Theme/Light/Theme/LightData vizStrokeColorRed300': string;
  'Theme/Light/Theme/LightData vizStrokeColorRed400': string;
  'Theme/Light/Theme/LightData vizStrokeColorTeal': string;
  'Theme/Light/Theme/LightData vizStrokeColorTeal300': string;
  'Theme/Light/Theme/LightData vizStrokeColorTeal400': string;
  'Theme/Light/Theme/LightData vizStrokeColorOcean': string;
  'Theme/Light/Theme/LightData vizStrokeColorOcean400': string;
  'Theme/Light/Theme/LightData vizStrokeColorGreen': string;
  'Theme/Light/Theme/LightData vizStrokeColorGreen300': string;
  'Theme/Light/Theme/LightData vizStrokeColorGreen400': string;
  'Theme/Light/Theme/LightData vizStrokeColorYellow300': string;
  'Theme/Light/Theme/LightData vizStrokeColorYellow400': string;
  'Theme/Light/Theme/LightData vizStrokeColorGray300': string;
  'Theme/Light/Theme/LightData vizStrokeColorBlue200': string;
  'Theme/Light/Theme/LightData vizStrokeColorOcean200': string;
  'Theme/Light/Theme/LightData vizStrokeColorYellow': string;
  'Theme/Light/Theme/LightData vizStrokeTrend-Average': string;
  'Theme/Light/Theme/LightData vizStrokeAccessible outline': string;
  'Theme/Light/Theme/LightData vizSemanticForegroundLight bkgdPositive': string;
  'Theme/Light/Theme/LightData vizSemanticForegroundLight bkgdNegative': string;
  'Theme/Light/Theme/LightData vizSemanticForegroundLight bkgdNotice': string;
  'Theme/Light/Theme/LightData vizSemanticForegroundDark bkgdPositive': string;
  'Theme/Light/Theme/LightData vizSemanticForegroundDark bkgdNegative': string;
  'Theme/Light/Theme/LightData vizSemanticForegroundDark bkgdNotice': string;
  'Theme/Light/Theme/LightData vizSemanticStrokeLight bkgdPositive': string;
  'Theme/Light/Theme/LightData vizSemanticStrokeLight bkgdNegative': string;
  'Theme/Light/Theme/LightData vizSemanticStrokeLight bkgdNotice': string;
  'Theme/Light/Theme/LightData vizSemanticStrokeDark bkgdPositive': string;
  'Theme/Light/Theme/LightData vizSemanticStrokeDark bkgdNegative': string;
  'Theme/Light/Theme/LightData vizSemanticStrokeDark bkgdNotice': string;
  'Theme/Light/Theme/LightData vizSemanticBackgroundPositive': string;
  'Theme/Light/Theme/LightData vizSemanticBackgroundNegative': string;
  'Theme/Light/Theme/LightData vizSemanticBackgroundNotice': string;
  'Theme/Light/Theme/LightData vizBackgroundCoreBlue': string;
  'Theme/Light/Theme/LightData vizBackgroundCoreGray': string;
  'Theme/Light/Theme/LightData vizBackgroundCoreRed': string;
  'Theme/Light/Theme/LightData vizBackgroundCoreTeal': string;
  'Theme/Light/Theme/LightData vizBackgroundCoreOcean': string;
  'Theme/Light/Theme/LightData vizBackgroundCoreGreen': string;
  'Theme/Light/Theme/LightData vizBackgroundCoreYellow': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialBlue400': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialGray400': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialRed300': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialRed400': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialTeal300': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialTeal400': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialOcean400': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialGreen300': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialGreen400': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialYellow300': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialYellow400': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialBlue300': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialBlue200': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialBlue100': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialGray300': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialGray200': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialGray100': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialRed200': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialRed100': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialTeal200': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialTeal100': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialOcean300': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialOcean200': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialOcean100': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialGreen200': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialGreen100': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialYellow200': string;
  'Theme/Light/Theme/LightData vizBackgroundSequentialYellow100': string;
  'Theme/Light/Theme/LightData vizBackgroundNeutralBlack': string;
  'Theme/Light/Theme/LightControl logicTheme switch': string;
  'Theme/Dark/Theme/DarkNeutralBackground1Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackground1Hover': string;
  'Theme/Dark/Theme/DarkNeutralBackground1Pressed': string;
  'Theme/Dark/Theme/DarkNeutralBackground1Selected': string;
  'Theme/Dark/Theme/DarkNeutralBackground2Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackground3Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackground3Hover': string;
  'Theme/Dark/Theme/DarkNeutralBackground3Pressed': string;
  'Theme/Dark/Theme/DarkNeutralBackground4Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackground4Hover': string;
  'Theme/Dark/Theme/DarkNeutralBackground4Pressed': string;
  'Theme/Dark/Theme/DarkNeutralBackground5Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackground6Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundInvertedRest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundInvertedDisabledRest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundAlpha1Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundAlpha2Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundStaticRest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleRest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleHover': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtlePressed': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleSelected': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleLight alphaHover': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleLight alphaPressed': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleLight alphaSelected': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleInvertedRest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleInvertedHover': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleInvertedPressed': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleInvertedSelected': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundTransparentRest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundTransparentHover': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundTransparentPressed': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundTransparentSelected': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundDisabledRest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundStencil1Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundStencil2Rest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundOverlayRest': string;
  'Theme/Dark/Theme/DarkNeutralBackgroundOverlayScrollbarRest': string;
  'Theme/Dark/Theme/DarkNeutralForeground1Rest primary text': string;
  'Theme/Dark/Theme/DarkNeutralForeground1Hover': string;
  'Theme/Dark/Theme/DarkNeutralForeground1Pressed': string;
  'Theme/Dark/Theme/DarkNeutralForeground1Selected': string;
  'Theme/Dark/Theme/DarkNeutralForeground2Rest secondary text': string;
  'Theme/Dark/Theme/DarkNeutralForeground2Hover': string;
  'Theme/Dark/Theme/DarkNeutralForeground2Pressed': string;
  'Theme/Dark/Theme/DarkNeutralForeground2Selected': string;
  'Theme/Dark/Theme/DarkNeutralForeground2BrandHover': string;
  'Theme/Dark/Theme/DarkNeutralForeground2BrandPressed': string;
  'Theme/Dark/Theme/DarkNeutralForeground2BrandSelected': string;
  'Theme/Dark/Theme/DarkNeutralForeground2BrandRest': string;
  'Theme/Dark/Theme/DarkNeutralForeground2LinkRest': string;
  'Theme/Dark/Theme/DarkNeutralForeground2LinkHover': string;
  'Theme/Dark/Theme/DarkNeutralForeground2LinkPressed': string;
  'Theme/Dark/Theme/DarkNeutralForeground2LinkSelected': string;
  'Theme/Dark/Theme/DarkNeutralForeground4Rest': string;
  'Theme/Dark/Theme/DarkNeutralForegroundDisabled2Rest': string;
  'Theme/Dark/Theme/DarkNeutralForegroundDisabledRest': string;
  'Theme/Dark/Theme/DarkNeutralForegroundStaticInvertedRest': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInverted1Rest': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInverted1Hover': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInverted1Pressed': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInverted1Selected': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInverted2Rest': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedDisabledRest': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedLinkRest': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedLinkHover': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedLinkPressed': string;
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedLinkSelected': string;
  'Theme/Dark/Theme/DarkNeutralForegroundOn BrandRest': string;
  'Theme/Dark/Theme/DarkNeutralStroke1Rest': string;
  'Theme/Dark/Theme/DarkNeutralStroke1Hover': string;
  'Theme/Dark/Theme/DarkNeutralStroke1Pressed': string;
  'Theme/Dark/Theme/DarkNeutralStroke1Selected': string;
  'Theme/Dark/Theme/DarkNeutralStroke2Rest': string;
  'Theme/Dark/Theme/DarkNeutralStroke3Rest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeAlpha1Rest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeAlpha2Rest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeSubtleRest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeOn Brand1Rest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeOn Brand2Rest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeAccessibleRest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeAccessibleHover': string;
  'Theme/Dark/Theme/DarkNeutralStrokeAccessiblePressed': string;
  'Theme/Dark/Theme/DarkNeutralStrokeAccessibleSelected': string;
  'Theme/Dark/Theme/DarkNeutralStrokeFocus1Rest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeFocus2Rest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeTransparentInteractiveRest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeTransparentDisabledRest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeTransparentRest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeDisabledRest': string;
  'Theme/Dark/Theme/DarkNeutralStrokeDisabledInvertedRest': string;
  'Theme/Dark/Theme/DarkBrandBackground1Rest': string;
  'Theme/Dark/Theme/DarkBrandBackground1Hover': string;
  'Theme/Dark/Theme/DarkBrandBackground1Pressed': string;
  'Theme/Dark/Theme/DarkBrandBackground1Selected': string;
  'Theme/Dark/Theme/DarkBrandBackground2Rest': string;
  'Theme/Dark/Theme/DarkBrandBackground2Hover': string;
  'Theme/Dark/Theme/DarkBrandBackground2Pressed': string;
  'Theme/Dark/Theme/DarkBrandBackground3Rest': string;
  'Theme/Dark/Theme/DarkBrandBackgroundInvertedRest': string;
  'Theme/Dark/Theme/DarkBrandBackgroundInvertedHover': string;
  'Theme/Dark/Theme/DarkBrandBackgroundInvertedPressed': string;
  'Theme/Dark/Theme/DarkBrandBackgroundInvertedSelected': string;
  'Theme/Dark/Theme/DarkBrandBackgroundStaticRest': string;
  'Theme/Dark/Theme/DarkBrandBackgroundCompoundRest': string;
  'Theme/Dark/Theme/DarkBrandBackgroundCompoundHover': string;
  'Theme/Dark/Theme/DarkBrandBackgroundCompoundPressed': string;
  'Theme/Dark/Theme/DarkBrandForeground1Rest': string;
  'Theme/Dark/Theme/DarkBrandForeground1Hover': string;
  'Theme/Dark/Theme/DarkBrandForeground1Pressed': string;
  'Theme/Dark/Theme/DarkBrandForeground1Selected': string;
  'Theme/Dark/Theme/DarkBrandForeground2Rest': string;
  'Theme/Dark/Theme/DarkBrandForeground2Hover': string;
  'Theme/Dark/Theme/DarkBrandForeground2Pressed': string;
  'Theme/Dark/Theme/DarkBrandForegroundLinkRest': string;
  'Theme/Dark/Theme/DarkBrandForegroundLinkHover': string;
  'Theme/Dark/Theme/DarkBrandForegroundLinkPressed': string;
  'Theme/Dark/Theme/DarkBrandForegroundLinkSelected': string;
  'Theme/Dark/Theme/DarkBrandForegroundInvertedRest': string;
  'Theme/Dark/Theme/DarkBrandForegroundInvertedHover': string;
  'Theme/Dark/Theme/DarkBrandForegroundInvertedPressed': string;
  'Theme/Dark/Theme/DarkBrandForegroundOn LightRest': string;
  'Theme/Dark/Theme/DarkBrandForegroundOn LightHover': string;
  'Theme/Dark/Theme/DarkBrandForegroundOn LightPressed': string;
  'Theme/Dark/Theme/DarkBrandForegroundOn LightSelected': string;
  'Theme/Dark/Theme/DarkBrandForegroundCompoundRest': string;
  'Theme/Dark/Theme/DarkBrandForegroundCompoundHover': string;
  'Theme/Dark/Theme/DarkBrandForegroundCompoundPressed': string;
  'Theme/Dark/Theme/DarkBrandStroke1Rest': string;
  'Theme/Dark/Theme/DarkBrandStroke1Hover': string;
  'Theme/Dark/Theme/DarkBrandStroke1Pressed': string;
  'Theme/Dark/Theme/DarkBrandStroke1Selected': string;
  'Theme/Dark/Theme/DarkBrandStroke2Rest': string;
  'Theme/Dark/Theme/DarkBrandStroke2ContrastRest': string;
  'Theme/Dark/Theme/DarkBrandStroke3Rest': string;
  'Theme/Dark/Theme/DarkBrandStrokeCompoundRest': string;
  'Theme/Dark/Theme/DarkBrandStrokeCompoundHover': string;
  'Theme/Dark/Theme/DarkBrandStrokeCompoundPressed': string;
  'Theme/Dark/Theme/DarkStatusDangerBackground1Rest': string;
  'Theme/Dark/Theme/DarkStatusDangerBackground3Rest': string;
  'Theme/Dark/Theme/DarkStatusDangerForeground1Rest': string;
  'Theme/Dark/Theme/DarkStatusDangerForeground3Rest': string;
  'Theme/Dark/Theme/DarkStatusDangerStroke1Rest': string;
  'Theme/Dark/Theme/DarkStatusDangerStroke2Rest': string;
  'Theme/Dark/Theme/DarkStatusSuccessBackground1Rest': string;
  'Theme/Dark/Theme/DarkStatusSuccessBackground3Rest': string;
  'Theme/Dark/Theme/DarkStatusSuccessForeground1Rest': string;
  'Theme/Dark/Theme/DarkStatusSuccessForeground3Rest': string;
  'Theme/Dark/Theme/DarkStatusSuccessStroke1Rest': string;
  'Theme/Dark/Theme/DarkStatusSuccessStroke2Rest': string;
  'Theme/Dark/Theme/DarkStatusWarningBackground1Rest': string;
  'Theme/Dark/Theme/DarkStatusWarningBackground3Rest': string;
  'Theme/Dark/Theme/DarkStatusWarningForeground1Rest': string;
  'Theme/Dark/Theme/DarkStatusWarningForeground3Rest': string;
  'Theme/Dark/Theme/DarkStatusWarningStroke1Rest': string;
  'Theme/Dark/Theme/DarkStatusWarningStroke2Rest': string;
  'Theme/Dark/Theme/DarkStatusOofForeground3Rest': string;
  'Theme/Dark/Theme/DarkStatusAwayBackground3Rest': string;
  'Theme/Dark/Theme/DarkStatusAvailableForeground3Rest': string;
  'Theme/Dark/Theme/DarkStatusGenericAnchorBackground2Rest': string;
  'Theme/Dark/Theme/DarkStatusGenericAnchorForeground2Rest': string;
  'Theme/Dark/Theme/DarkStatusGenericAnchorStrokeActiveRest': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationBackground1Rest': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationBackground1Hover': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationBackground1Pressed': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationStroke1Rest': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationStroke2Rest': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationStroke2Hover': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationStroke2Pressed': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationForegroundRest': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationForegroundHover': string;
  'Theme/Dark/Theme/DarkStatusGenericInformationForegroundPressed': string;
  'Theme/Dark/Theme/DarkStatusSevereBackground1Rest': string;
  'Theme/Dark/Theme/DarkStatusSevereBackground3Rest': string;
  'Theme/Dark/Theme/DarkStatusSevereForeground1Rest': string;
  'Theme/Dark/Theme/DarkStatusSevereForeground3Rest': string;
  'Theme/Dark/Theme/DarkStatusSevereStroke1Rest': string;
  'Theme/Dark/Theme/DarkStatusSevereStroke2Rest': string;
  'Theme/Dark/Theme/DarkShadowAmbient': string;
  'Theme/Dark/Theme/DarkShadowAmbient-lighter': string;
  'Theme/Dark/Theme/DarkShadowAmbient-darker': string;
  'Theme/Dark/Theme/DarkShadowBrand-ambient': string;
  'Theme/Dark/Theme/DarkShadowKey': string;
  'Theme/Dark/Theme/DarkShadowKey-lighter': string;
  'Theme/Dark/Theme/DarkShadowKey-darker': string;
  'Theme/Dark/Theme/DarkShadowBrand-key': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsCategorical': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsData': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorBlue': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGray': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorRed': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorTeal': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorOcean': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGreen': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorYellow300': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorBlue400': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGray400': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorRed400': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorTeal300': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorRed300': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorTeal400': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorOcean400': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGreen400': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorYellow400': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGreen300': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGray300': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorBlue200': string;
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorOcean200': string;
  'Theme/Dark/Theme/DarkData vizForegroundAccessibilityText dark bkgd': string;
  'Theme/Dark/Theme/DarkData vizForegroundAccessibilityText light bkgd': string;
  'Theme/Dark/Theme/DarkData vizForegroundKPI CardText dark bkgd': string;
  'Theme/Dark/Theme/DarkData vizForegroundKPI CardText light bkgd': string;
  'Theme/Dark/Theme/DarkData vizStrokeGridline': string;
  'Theme/Dark/Theme/DarkData vizStrokeAxis-Target-Benchmark': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorBlue': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorBlue400': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorGray': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorGray400': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorRed': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorRed300': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorRed400': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorTeal': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorTeal300': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorTeal400': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorOcean': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorOcean400': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorGreen': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorGreen300': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorGreen400': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorYellow300': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorYellow400': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorGray300': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorBlue200': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorOcean200': string;
  'Theme/Dark/Theme/DarkData vizStrokeColorYellow': string;
  'Theme/Dark/Theme/DarkData vizStrokeTrend-Average': string;
  'Theme/Dark/Theme/DarkData vizStrokeAccessible outline': string;
  'Theme/Dark/Theme/DarkData vizSemanticForegroundLight bkgdPositive': string;
  'Theme/Dark/Theme/DarkData vizSemanticForegroundLight bkgdNegative': string;
  'Theme/Dark/Theme/DarkData vizSemanticForegroundLight bkgdNotice': string;
  'Theme/Dark/Theme/DarkData vizSemanticForegroundDark bkgdPositive': string;
  'Theme/Dark/Theme/DarkData vizSemanticForegroundDark bkgdNegative': string;
  'Theme/Dark/Theme/DarkData vizSemanticForegroundDark bkgdNotice': string;
  'Theme/Dark/Theme/DarkData vizSemanticStrokeLight bkgdPositive': string;
  'Theme/Dark/Theme/DarkData vizSemanticStrokeLight bkgdNegative': string;
  'Theme/Dark/Theme/DarkData vizSemanticStrokeLight bkgdNotice': string;
  'Theme/Dark/Theme/DarkData vizSemanticStrokeDark bkgdPositive': string;
  'Theme/Dark/Theme/DarkData vizSemanticStrokeDark bkgdNegative': string;
  'Theme/Dark/Theme/DarkData vizSemanticStrokeDark bkgdNotice': string;
  'Theme/Dark/Theme/DarkData vizSemanticBackgroundPositive': string;
  'Theme/Dark/Theme/DarkData vizSemanticBackgroundNegative': string;
  'Theme/Dark/Theme/DarkData vizSemanticBackgroundNotice': string;
  'Theme/Dark/Theme/DarkData vizBackgroundCoreBlue': string;
  'Theme/Dark/Theme/DarkData vizBackgroundCoreGray': string;
  'Theme/Dark/Theme/DarkData vizBackgroundCoreRed': string;
  'Theme/Dark/Theme/DarkData vizBackgroundCoreTeal': string;
  'Theme/Dark/Theme/DarkData vizBackgroundCoreOcean': string;
  'Theme/Dark/Theme/DarkData vizBackgroundCoreGreen': string;
  'Theme/Dark/Theme/DarkData vizBackgroundCoreYellow': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialBlue400': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGray400': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialRed300': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialRed400': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialTeal300': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialTeal400': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialOcean400': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGreen300': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGreen400': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialYellow300': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialYellow400': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialBlue300': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialBlue200': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialBlue100': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGray300': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGray200': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGray100': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialRed200': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialRed100': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialTeal200': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialTeal100': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialOcean300': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialOcean200': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialOcean100': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGreen200': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGreen100': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialYellow200': string;
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialYellow100': string;
  'Theme/Dark/Theme/DarkData vizBackgroundNeutralBlack': string;
  'Theme/Dark/Theme/DarkControl logicTheme switch': string;

  // Global/ tokens
  'Global/ValueColorsNeutralBlack': string;
  'Global/ValueColorsNeutralGrey-6': string;
  'Global/ValueColorsNeutralGrey-8': string;
  'Global/ValueColorsNeutralGrey-10': string;
  'Global/ValueColorsNeutralGrey-12': string;
  'Global/ValueColorsNeutralGrey-20': string;
  'Global/ValueColorsNeutralGrey-30': string;
  'Global/ValueColorsNeutralGrey-40': string;
  'Global/ValueColorsNeutralGrey-50': string;
  'Global/ValueColorsNeutralGrey-60': string;
  'Global/ValueColorsNeutralGrey-70': string;
  'Global/ValueColorsNeutralGrey-80': string;
  'Global/ValueColorsNeutralGrey-90': string;
  'Global/ValueColorsNeutralWhite': string;
  'Global/ValueColorsSharedBurgundyShade 50': string;
  'Global/ValueColorsSharedBurgundyShade 40': string;
  'Global/ValueColorsSharedBurgundyShade 30': string;
  'Global/ValueColorsSharedBurgundyShade 20': string;
  'Global/ValueColorsSharedBurgundyShade 10': string;
  'Global/ValueColorsSharedBurgundyPrimary': string;
  'Global/ValueColorsSharedBurgundyTint 10': string;
  'Global/ValueColorsSharedBurgundyTint 20': string;
  'Global/ValueColorsSharedBurgundyTint 30': string;
  'Global/ValueColorsSharedBurgundyTint 40': string;
  'Global/ValueColorsSharedBurgundyTint 50': string;
  'Global/ValueColorsSharedBurgundyTint 60': string;
  'Global/ValueColorsSharedCranberryPrimary': string;
  'Global/ValueColorsSharedCranberryTint 30': string;
  'Global/ValueColorsSharedCranberryTint 60': string;
  'Global/ValueColorsSharedRedShade 50': string;
  'Global/ValueColorsSharedRedShade 40': string;
  'Global/ValueColorsSharedRedShade 30': string;
  'Global/ValueColorsSharedRedShade 20': string;
  'Global/ValueColorsSharedRedShade 10': string;
  'Global/ValueColorsSharedRedPrimary': string;
  'Global/ValueColorsSharedRedTint 10': string;
  'Global/ValueColorsSharedRedTint 20': string;
  'Global/ValueColorsSharedRedTint 30': string;
  'Global/ValueColorsSharedRedTint 40': string;
  'Global/ValueColorsSharedRedTint 50': string;
  'Global/ValueColorsSharedRedTint 60': string;
  'Global/ValueColorsSharedDark OrangePrimary': string;
  'Global/ValueColorsSharedDark OrangeTint 30': string;
  'Global/ValueColorsSharedDark OrangeTint 60': string;
  'Global/ValueColorsSharedBronzeShade 50': string;
  'Global/ValueColorsSharedBronzeShade 40': string;
  'Global/ValueColorsSharedBronzeShade 30': string;
  'Global/ValueColorsSharedBronzeShade 20': string;
  'Global/ValueColorsSharedBronzeShade 10': string;
  'Global/ValueColorsSharedBronzePrimary': string;
  'Global/ValueColorsSharedBronzeTint 10': string;
  'Global/ValueColorsSharedBronzeTint 20': string;
  'Global/ValueColorsSharedBronzeTint 30': string;
  'Global/ValueColorsSharedBronzeTint 40': string;
  'Global/ValueColorsSharedBronzeTint 50': string;
  'Global/ValueColorsSharedBronzeTint 60': string;
  'Global/ValueColorsSharedOrangePrimary': string;
  'Global/ValueColorsSharedOrangeTint 30': string;
  'Global/ValueColorsSharedOrangeTint 60': string;
  'Global/ValueColorsSharedPeachShade 50': string;
  'Global/ValueColorsSharedPeachShade 40': string;
  'Global/ValueColorsSharedPeachShade 30': string;
  'Global/ValueColorsSharedPeachShade 20': string;
  'Global/ValueColorsSharedPeachShade 10': string;
  'Global/ValueColorsSharedPeachPrimary': string;
  'Global/ValueColorsSharedPeachTint 10': string;
  'Global/ValueColorsSharedPeachTint 20': string;
  'Global/ValueColorsSharedPeachTint 30': string;
  'Global/ValueColorsSharedPeachTint 40': string;
  'Global/ValueColorsSharedPeachTint 50': string;
  'Global/ValueColorsSharedPeachTint 60': string;
  'Global/ValueColorsSharedMarigoldShade 50': string;
  'Global/ValueColorsSharedMarigoldShade 40': string;
  'Global/ValueColorsSharedMarigoldShade 30': string;
  'Global/ValueColorsSharedMarigoldShade 20': string;
  'Global/ValueColorsSharedMarigoldShade 10': string;
  'Global/ValueColorsSharedMarigoldPrimary': string;
  'Global/ValueColorsSharedMarigoldTint 10': string;
  'Global/ValueColorsSharedMarigoldTint 20': string;
  'Global/ValueColorsSharedMarigoldTint 30': string;
  'Global/ValueColorsSharedMarigoldTint 40': string;
  'Global/ValueColorsSharedMarigoldTint 50': string;
  'Global/ValueColorsSharedMarigoldTint 60': string;
  'Global/ValueColorsSharedYellowShade 50': string;
  'Global/ValueColorsSharedYellowShade 40': string;
  'Global/ValueColorsSharedYellowShade 30': string;
  'Global/ValueColorsSharedYellowShade 20': string;
  'Global/ValueColorsSharedYellowShade 10': string;
  'Global/ValueColorsSharedYellowPrimary': string;
  'Global/ValueColorsSharedYellowTint 10': string;
  'Global/ValueColorsSharedYellowTint 20': string;
  'Global/ValueColorsSharedYellowTint 30': string;
  'Global/ValueColorsSharedYellowTint 40': string;
  'Global/ValueColorsSharedYellowTint 50': string;
  'Global/ValueColorsSharedYellowTint 60': string;
  'Global/ValueColorsSharedGoldShade 50': string;
  'Global/ValueColorsSharedGoldShade 40': string;
  'Global/ValueColorsSharedGoldShade 30': string;
  'Global/ValueColorsSharedGoldShade 20': string;
  'Global/ValueColorsSharedGoldShade 10': string;
  'Global/ValueColorsSharedGoldPrimary': string;
  'Global/ValueColorsSharedGoldTint 10': string;
  'Global/ValueColorsSharedGoldTint 20': string;
  'Global/ValueColorsSharedGoldTint 30': string;
  'Global/ValueColorsSharedGoldTint 40': string;
  'Global/ValueColorsSharedGoldTint 50': string;
  'Global/ValueColorsSharedGoldTint 60': string;
  'Global/ValueColorsSharedBrassShade 50': string;
  'Global/ValueColorsSharedBrassShade 40': string;
  'Global/ValueColorsSharedBrassShade 30': string;
  'Global/ValueColorsSharedBrassShade 20': string;
  'Global/ValueColorsSharedBrassShade 10': string;
  'Global/ValueColorsSharedBrassPrimary': string;
  'Global/ValueColorsSharedBrassTint 10': string;
  'Global/ValueColorsSharedBrassTint 20': string;
  'Global/ValueColorsSharedBrassTint 30': string;
  'Global/ValueColorsSharedBrassTint 40': string;
  'Global/ValueColorsSharedBrassTint 50': string;
  'Global/ValueColorsSharedBrassTint 60': string;
  'Global/ValueColorsSharedBrownShade 50': string;
  'Global/ValueColorsSharedBrownShade 40': string;
  'Global/ValueColorsSharedBrownShade 30': string;
  'Global/ValueColorsSharedBrownShade 20': string;
  'Global/ValueColorsSharedBrownShade 10': string;
  'Global/ValueColorsSharedBrownPrimary': string;
  'Global/ValueColorsSharedBrownTint 10': string;
  'Global/ValueColorsSharedBrownTint 20': string;
  'Global/ValueColorsSharedBrownTint 30': string;
  'Global/ValueColorsSharedBrownTint 40': string;
  'Global/ValueColorsSharedBrownTint 50': string;
  'Global/ValueColorsSharedBrownTint 60': string;
  'Global/ValueColorsSharedDark brownShade 50': string;
  'Global/ValueColorsSharedDark brownShade 40': string;
  'Global/ValueColorsSharedDark brownShade 30': string;
  'Global/ValueColorsSharedDark brownShade 20': string;
  'Global/ValueColorsSharedDark brownShade 10': string;
  'Global/ValueColorsSharedDark brownPrimary': string;
  'Global/ValueColorsSharedDark brownTint 10': string;
  'Global/ValueColorsSharedDark brownTint 20': string;
  'Global/ValueColorsSharedDark brownTint 30': string;
  'Global/ValueColorsSharedDark brownTint 40': string;
  'Global/ValueColorsSharedDark brownTint 50': string;
  'Global/ValueColorsSharedDark brownTint 60': string;
  'Global/ValueColorsSharedLimeShade 50': string;
  'Global/ValueColorsSharedLimeShade 40': string;
  'Global/ValueColorsSharedLimeShade 30': string;
  'Global/ValueColorsSharedLimeShade 20': string;
  'Global/ValueColorsSharedLimeShade 10': string;
  'Global/ValueColorsSharedLimePrimary': string;
  'Global/ValueColorsSharedLimeTint 10': string;
  'Global/ValueColorsSharedLimeTint 20': string;
  'Global/ValueColorsSharedLimeTint 30': string;
  'Global/ValueColorsSharedLimeTint 40': string;
  'Global/ValueColorsSharedLimeTint 50': string;
  'Global/ValueColorsSharedLimeTint 60': string;
  'Global/ValueColorsSharedForestShade 50': string;
  'Global/ValueColorsSharedForestShade 40': string;
  'Global/ValueColorsSharedForestShade 30': string;
  'Global/ValueColorsSharedForestShade 20': string;
  'Global/ValueColorsSharedForestShade 10': string;
  'Global/ValueColorsSharedForestPrimary': string;
  'Global/ValueColorsSharedForestTint 10': string;
  'Global/ValueColorsSharedForestTint 20': string;
  'Global/ValueColorsSharedForestTint 30': string;
  'Global/ValueColorsSharedForestTint 40': string;
  'Global/ValueColorsSharedForestTint 50': string;
  'Global/ValueColorsSharedForestTint 60': string;
  'Global/ValueColorsSharedSeafoamShade 50': string;
  'Global/ValueColorsSharedSeafoamShade 40': string;
  'Global/ValueColorsSharedSeafoamShade 30': string;
  'Global/ValueColorsSharedSeafoamShade 20': string;
  'Global/ValueColorsSharedSeafoamShade 10': string;
  'Global/ValueColorsSharedSeafoamPrimary': string;
  'Global/ValueColorsSharedSeafoamTint 10': string;
  'Global/ValueColorsSharedSeafoamTint 20': string;
  'Global/ValueColorsSharedSeafoamTint 30': string;
  'Global/ValueColorsSharedSeafoamTint 40': string;
  'Global/ValueColorsSharedSeafoamTint 50': string;
  'Global/ValueColorsSharedSeafoamTint 60': string;
  'Global/ValueColorsSharedLight greenShade 50': string;
  'Global/ValueColorsSharedLight greenShade 40': string;
  'Global/ValueColorsSharedLight greenShade 30': string;
  'Global/ValueColorsSharedLight greenShade 20': string;
  'Global/ValueColorsSharedLight greenShade 10': string;
  'Global/ValueColorsSharedLight greenPrimary': string;
  'Global/ValueColorsSharedLight greenTint 10': string;
  'Global/ValueColorsSharedLight greenTint 20': string;
  'Global/ValueColorsSharedLight greenTint 30': string;
  'Global/ValueColorsSharedLight greenTint 40': string;
  'Global/ValueColorsSharedLight greenTint 50': string;
  'Global/ValueColorsSharedLight greenTint 60': string;
  'Global/ValueColorsSharedGreenPrimary': string;
  'Global/ValueColorsSharedGreenTint 30': string;
  'Global/ValueColorsSharedGreenTint 60': string;
  'Global/ValueColorsSharedDark greenShade 50': string;
  'Global/ValueColorsSharedDark greenShade 40': string;
  'Global/ValueColorsSharedDark greenShade 30': string;
  'Global/ValueColorsSharedDark greenShade 20': string;
  'Global/ValueColorsSharedDark greenShade 10': string;
  'Global/ValueColorsSharedDark greenPrimary': string;
  'Global/ValueColorsSharedDark greenTint 10': string;
  'Global/ValueColorsSharedDark greenTint 20': string;
  'Global/ValueColorsSharedDark greenTint 30': string;
  'Global/ValueColorsSharedDark greenTint 40': string;
  'Global/ValueColorsSharedDark greenTint 50': string;
  'Global/ValueColorsSharedDark greenTint 60': string;
  'Global/ValueColorsSharedLight tealShade 50': string;
  'Global/ValueColorsSharedLight tealShade 40': string;
  'Global/ValueColorsSharedLight tealShade 30': string;
  'Global/ValueColorsSharedLight tealShade 20': string;
  'Global/ValueColorsSharedLight tealShade 10': string;
  'Global/ValueColorsSharedLight tealPrimary': string;
  'Global/ValueColorsSharedLight tealTint 10': string;
  'Global/ValueColorsSharedLight tealTint 20': string;
  'Global/ValueColorsSharedLight tealTint 30': string;
  'Global/ValueColorsSharedLight tealTint 40': string;
  'Global/ValueColorsSharedLight tealTint 50': string;
  'Global/ValueColorsSharedLight tealTint 60': string;
  'Global/ValueColorsSharedTealShade 50': string;
  'Global/ValueColorsSharedTealShade 40': string;
  'Global/ValueColorsSharedTealShade 30': string;
  'Global/ValueColorsSharedTealShade 20': string;
  'Global/ValueColorsSharedTealShade 10': string;
  'Global/ValueColorsSharedTealPrimary': string;
  'Global/ValueColorsSharedTealTint 10': string;
  'Global/ValueColorsSharedTealTint 20': string;
  'Global/ValueColorsSharedTealTint 30': string;
  'Global/ValueColorsSharedTealTint 40': string;
  'Global/ValueColorsSharedTealTint 50': string;
  'Global/ValueColorsSharedTealTint 60': string;
  'Global/ValueColorsSharedDark tealShade 50': string;
  'Global/ValueColorsSharedDark tealShade 40': string;
  'Global/ValueColorsSharedDark tealShade 30': string;
  'Global/ValueColorsSharedDark tealShade 20': string;
  'Global/ValueColorsSharedDark tealShade 10': string;
  'Global/ValueColorsSharedDark tealPrimary': string;
  'Global/ValueColorsSharedDark tealTint 10': string;
  'Global/ValueColorsSharedDark tealTint 20': string;
  'Global/ValueColorsSharedDark tealTint 30': string;
  'Global/ValueColorsSharedDark tealTint 40': string;
  'Global/ValueColorsSharedDark tealTint 50': string;
  'Global/ValueColorsSharedDark tealTint 60': string;
  'Global/ValueColorsSharedCyanShade 50': string;
  'Global/ValueColorsSharedCyanShade 40': string;
  'Global/ValueColorsSharedCyanShade 30': string;
  'Global/ValueColorsSharedCyanShade 20': string;
  'Global/ValueColorsSharedCyanShade 10': string;
  'Global/ValueColorsSharedCyanPrimary': string;
  'Global/ValueColorsSharedCyanTint 10': string;
  'Global/ValueColorsSharedCyanTint 20': string;
  'Global/ValueColorsSharedCyanTint 30': string;
  'Global/ValueColorsSharedCyanTint 40': string;
  'Global/ValueColorsSharedCyanTint 50': string;
  'Global/ValueColorsSharedCyanTint 60': string;
  'Global/ValueColorsSharedSteelShade 50': string;
  'Global/ValueColorsSharedSteelShade 40': string;
  'Global/ValueColorsSharedSteelShade 30': string;
  'Global/ValueColorsSharedSteelShade 20': string;
  'Global/ValueColorsSharedSteelShade 10': string;
  'Global/ValueColorsSharedSteelPrimary': string;
  'Global/ValueColorsSharedSteelTint 10': string;
  'Global/ValueColorsSharedSteelTint 20': string;
  'Global/ValueColorsSharedSteelTint 30': string;
  'Global/ValueColorsSharedSteelTint 40': string;
  'Global/ValueColorsSharedSteelTint 50': string;
  'Global/ValueColorsSharedSteelTint 60': string;
  'Global/ValueColorsSharedLight blueShade 50': string;
  'Global/ValueColorsSharedLight blueShade 40': string;
  'Global/ValueColorsSharedLight blueShade 30': string;
  'Global/ValueColorsSharedLight blueShade 20': string;
  'Global/ValueColorsSharedLight blueShade 10': string;
  'Global/ValueColorsSharedLight bluePrimary': string;
  'Global/ValueColorsSharedLight blueTint 10': string;
  'Global/ValueColorsSharedLight blueTint 20': string;
  'Global/ValueColorsSharedLight blueTint 30': string;
  'Global/ValueColorsSharedLight blueTint 40': string;
  'Global/ValueColorsSharedLight blueTint 50': string;
  'Global/ValueColorsSharedLight blueTint 60': string;
  'Global/ValueColorsSharedBlueShade 50': string;
  'Global/ValueColorsSharedBlueShade 40': string;
  'Global/ValueColorsSharedBlueShade 30': string;
  'Global/ValueColorsSharedBlueShade 20': string;
  'Global/ValueColorsSharedBlueShade 10': string;
  'Global/ValueColorsSharedBluePrimary': string;
  'Global/ValueColorsSharedBlueTint 10': string;
  'Global/ValueColorsSharedBlueTint 20': string;
  'Global/ValueColorsSharedBlueTint 30': string;
  'Global/ValueColorsSharedBlueTint 40': string;
  'Global/ValueColorsSharedBlueTint 50': string;
  'Global/ValueColorsSharedBlueTint 60': string;
  'Global/ValueColorsSharedRoyal blueShade 50': string;
  'Global/ValueColorsSharedRoyal blueShade 40': string;
  'Global/ValueColorsSharedRoyal blueShade 30': string;
  'Global/ValueColorsSharedRoyal blueShade 20': string;
  'Global/ValueColorsSharedRoyal blueShade 10': string;
  'Global/ValueColorsSharedRoyal bluePrimary': string;
  'Global/ValueColorsSharedRoyal blueTint 10': string;
  'Global/ValueColorsSharedRoyal blueTint 20': string;
  'Global/ValueColorsSharedRoyal blueTint 30': string;
  'Global/ValueColorsSharedRoyal blueTint 40': string;
  'Global/ValueColorsSharedRoyal blueTint 50': string;
  'Global/ValueColorsSharedRoyal blueTint 60': string;
  'Global/ValueColorsSharedDark blueShade 50': string;
  'Global/ValueColorsSharedDark blueShade 40': string;
  'Global/ValueColorsSharedDark blueShade 30': string;
  'Global/ValueColorsSharedDark blueShade 20': string;
  'Global/ValueColorsSharedDark blueShade 10': string;
  'Global/ValueColorsSharedDark bluePrimary': string;
  'Global/ValueColorsSharedDark blueTint 10': string;
  'Global/ValueColorsSharedDark blueTint 20': string;
  'Global/ValueColorsSharedDark blueTint 30': string;
  'Global/ValueColorsSharedDark blueTint 40': string;
  'Global/ValueColorsSharedDark blueTint 50': string;
  'Global/ValueColorsSharedDark blueTint 60': string;
  'Global/ValueColorsSharedCornflowerShade 50': string;
  'Global/ValueColorsSharedCornflowerShade 40': string;
  'Global/ValueColorsSharedCornflowerShade 30': string;
  'Global/ValueColorsSharedCornflowerShade 20': string;
  'Global/ValueColorsSharedCornflowerShade 10': string;
  'Global/ValueColorsSharedCornflowerPrimary': string;
  'Global/ValueColorsSharedCornflowerTint 10': string;
  'Global/ValueColorsSharedCornflowerTint 20': string;
  'Global/ValueColorsSharedCornflowerTint 30': string;
  'Global/ValueColorsSharedCornflowerTint 40': string;
  'Global/ValueColorsSharedCornflowerTint 50': string;
  'Global/ValueColorsSharedCornflowerTint 60': string;
  'Global/ValueColorsSharedNavyShade 50': string;
  'Global/ValueColorsSharedNavyShade 40': string;
  'Global/ValueColorsSharedNavyShade 30': string;
  'Global/ValueColorsSharedNavyShade 20': string;
  'Global/ValueColorsSharedNavyShade 10': string;
  'Global/ValueColorsSharedNavyPrimary': string;
  'Global/ValueColorsSharedNavyTint 10': string;
  'Global/ValueColorsSharedNavyTint 20': string;
  'Global/ValueColorsSharedNavyTint 30': string;
  'Global/ValueColorsSharedNavyTint 40': string;
  'Global/ValueColorsSharedNavyTint 50': string;
  'Global/ValueColorsSharedNavyTint 60': string;
  'Global/ValueColorsSharedLavenderShade 50': string;
  'Global/ValueColorsSharedLavenderShade 40': string;
  'Global/ValueColorsSharedLavenderShade 30': string;
  'Global/ValueColorsSharedLavenderShade 20': string;
  'Global/ValueColorsSharedLavenderShade 10': string;
  'Global/ValueColorsSharedLavenderPrimary': string;
  'Global/ValueColorsSharedLavenderTint 10': string;
  'Global/ValueColorsSharedLavenderTint 20': string;
  'Global/ValueColorsSharedLavenderTint 30': string;
  'Global/ValueColorsSharedLavenderTint 40': string;
  'Global/ValueColorsSharedLavenderTint 50': string;
  'Global/ValueColorsSharedLavenderTint 60': string;
  'Global/ValueColorsSharedPurpleShade 50': string;
  'Global/ValueColorsSharedPurpleShade 40': string;
  'Global/ValueColorsSharedPurpleShade 30': string;
  'Global/ValueColorsSharedPurpleShade 20': string;
  'Global/ValueColorsSharedPurpleShade 10': string;
  'Global/ValueColorsSharedPurplePrimary': string;
  'Global/ValueColorsSharedPurpleTint 10': string;
  'Global/ValueColorsSharedPurpleTint 20': string;
  'Global/ValueColorsSharedPurpleTint 30': string;
  'Global/ValueColorsSharedPurpleTint 40': string;
  'Global/ValueColorsSharedPurpleTint 50': string;
  'Global/ValueColorsSharedPurpleTint 60': string;
  'Global/ValueColorsSharedDark purpleShade 50': string;
  'Global/ValueColorsSharedDark purpleShade 40': string;
  'Global/ValueColorsSharedDark purpleShade 30': string;
  'Global/ValueColorsSharedDark purpleShade 20': string;
  'Global/ValueColorsSharedDark purpleShade 10': string;
  'Global/ValueColorsSharedDark purplePrimary': string;
  'Global/ValueColorsSharedDark purpleTint 10': string;
  'Global/ValueColorsSharedDark purpleTint 20': string;
  'Global/ValueColorsSharedDark purpleTint 30': string;
  'Global/ValueColorsSharedDark purpleTint 40': string;
  'Global/ValueColorsSharedDark purpleTint 50': string;
  'Global/ValueColorsSharedDark purpleTint 60': string;
  'Global/ValueColorsSharedOrchidShade 50': string;
  'Global/ValueColorsSharedOrchidShade 40': string;
  'Global/ValueColorsSharedOrchidShade 30': string;
  'Global/ValueColorsSharedOrchidShade 20': string;
  'Global/ValueColorsSharedOrchidShade 10': string;
  'Global/ValueColorsSharedOrchidPrimary': string;
  'Global/ValueColorsSharedOrchidTint 10': string;
  'Global/ValueColorsSharedOrchidTint 20': string;
  'Global/ValueColorsSharedOrchidTint 30': string;
  'Global/ValueColorsSharedOrchidTint 40': string;
  'Global/ValueColorsSharedOrchidTint 50': string;
  'Global/ValueColorsSharedOrchidTint 60': string;
  'Global/ValueColorsSharedGrapeShade 50': string;
  'Global/ValueColorsSharedGrapeShade 40': string;
  'Global/ValueColorsSharedGrapeShade 30': string;
  'Global/ValueColorsSharedGrapeShade 20': string;
  'Global/ValueColorsSharedGrapeShade 10': string;
  'Global/ValueColorsSharedGrapePrimary': string;
  'Global/ValueColorsSharedGrapeTint 10': string;
  'Global/ValueColorsSharedGrapeTint 20': string;
  'Global/ValueColorsSharedGrapeTint 30': string;
  'Global/ValueColorsSharedGrapeTint 40': string;
  'Global/ValueColorsSharedGrapeTint 50': string;
  'Global/ValueColorsSharedGrapeTint 60': string;
  'Global/ValueColorsSharedBerryShade 50': string;
  'Global/ValueColorsSharedBerryShade 40': string;
  'Global/ValueColorsSharedBerryShade 30': string;
  'Global/ValueColorsSharedBerryShade 20': string;
  'Global/ValueColorsSharedBerryShade 10': string;
  'Global/ValueColorsSharedBerryPrimary': string;
  'Global/ValueColorsSharedBerryTint 10': string;
  'Global/ValueColorsSharedBerryTint 20': string;
  'Global/ValueColorsSharedBerryTint 30': string;
  'Global/ValueColorsSharedBerryTint 40': string;
  'Global/ValueColorsSharedBerryTint 50': string;
  'Global/ValueColorsSharedBerryTint 60': string;
  'Global/ValueColorsSharedLilacShade 50': string;
  'Global/ValueColorsSharedLilacShade 40': string;
  'Global/ValueColorsSharedLilacShade 30': string;
  'Global/ValueColorsSharedLilacShade 20': string;
  'Global/ValueColorsSharedLilacShade 10': string;
  'Global/ValueColorsSharedLilacPrimary': string;
  'Global/ValueColorsSharedLilacTint 10': string;
  'Global/ValueColorsSharedLilacTint 20': string;
  'Global/ValueColorsSharedLilacTint 30': string;
  'Global/ValueColorsSharedLilacTint 40': string;
  'Global/ValueColorsSharedLilacTint 50': string;
  'Global/ValueColorsSharedLilacTint 60': string;
  'Global/ValueColorsSharedPinkShade 50': string;
  'Global/ValueColorsSharedPinkShade 40': string;
  'Global/ValueColorsSharedPinkShade 30': string;
  'Global/ValueColorsSharedPinkShade 20': string;
  'Global/ValueColorsSharedPinkShade 10': string;
  'Global/ValueColorsSharedPinkPrimary': string;
  'Global/ValueColorsSharedPinkTint 10': string;
  'Global/ValueColorsSharedPinkTint 20': string;
  'Global/ValueColorsSharedPinkTint 30': string;
  'Global/ValueColorsSharedPinkTint 40': string;
  'Global/ValueColorsSharedPinkTint 50': string;
  'Global/ValueColorsSharedPinkTint 60': string;
  'Global/ValueColorsSharedHot pinkShade 50': string;
  'Global/ValueColorsSharedHot pinkShade 40': string;
  'Global/ValueColorsSharedHot pinkShade 30': string;
  'Global/ValueColorsSharedHot pinkShade 20': string;
  'Global/ValueColorsSharedHot pinkShade 10': string;
  'Global/ValueColorsSharedHot pinkPrimary': string;
  'Global/ValueColorsSharedHot pinkTint 10': string;
  'Global/ValueColorsSharedHot pinkTint 20': string;
  'Global/ValueColorsSharedHot pinkTint 30': string;
  'Global/ValueColorsSharedHot pinkTint 40': string;
  'Global/ValueColorsSharedHot pinkTint 50': string;
  'Global/ValueColorsSharedHot pinkTint 60': string;
  'Global/ValueColorsSharedMagentaShade 50': string;
  'Global/ValueColorsSharedMagentaShade 40': string;
  'Global/ValueColorsSharedMagentaShade 30': string;
  'Global/ValueColorsSharedMagentaShade 20': string;
  'Global/ValueColorsSharedMagentaShade 10': string;
  'Global/ValueColorsSharedMagentaPrimary': string;
  'Global/ValueColorsSharedMagentaTint 10': string;
  'Global/ValueColorsSharedMagentaTint 20': string;
  'Global/ValueColorsSharedMagentaTint 30': string;
  'Global/ValueColorsSharedMagentaTint 40': string;
  'Global/ValueColorsSharedMagentaTint 50': string;
  'Global/ValueColorsSharedMagentaTint 60': string;
  'Global/ValueColorsSharedPlumShade 50': string;
  'Global/ValueColorsSharedPlumShade 40': string;
  'Global/ValueColorsSharedPlumShade 30': string;
  'Global/ValueColorsSharedPlumShade 20': string;
  'Global/ValueColorsSharedPlumShade 10': string;
  'Global/ValueColorsSharedPlumPrimary': string;
  'Global/ValueColorsSharedPlumTint 10': string;
  'Global/ValueColorsSharedPlumTint 20': string;
  'Global/ValueColorsSharedPlumTint 30': string;
  'Global/ValueColorsSharedPlumTint 40': string;
  'Global/ValueColorsSharedPlumTint 50': string;
  'Global/ValueColorsSharedPlumTint 60': string;
  'Global/ValueColorsSharedBeigeShade 50': string;
  'Global/ValueColorsSharedBeigeShade 40': string;
  'Global/ValueColorsSharedBeigeShade 30': string;
  'Global/ValueColorsSharedBeigeShade 20': string;
  'Global/ValueColorsSharedBeigeShade 10': string;
  'Global/ValueColorsSharedBeigePrimary': string;
  'Global/ValueColorsSharedBeigeTint 10': string;
  'Global/ValueColorsSharedBeigeTint 20': string;
  'Global/ValueColorsSharedBeigeTint 30': string;
  'Global/ValueColorsSharedBeigeTint 40': string;
  'Global/ValueColorsSharedBeigeTint 50': string;
  'Global/ValueColorsSharedBeigeTint 60': string;
  'Global/ValueColorsSharedMinkShade 50': string;
  'Global/ValueColorsSharedMinkShade 40': string;
  'Global/ValueColorsSharedMinkShade 30': string;
  'Global/ValueColorsSharedMinkShade 20': string;
  'Global/ValueColorsSharedMinkShade 10': string;
  'Global/ValueColorsSharedMinkPrimary': string;
  'Global/ValueColorsSharedMinkTint 10': string;
  'Global/ValueColorsSharedMinkTint 20': string;
  'Global/ValueColorsSharedMinkTint 30': string;
  'Global/ValueColorsSharedMinkTint 40': string;
  'Global/ValueColorsSharedMinkTint 50': string;
  'Global/ValueColorsSharedMinkTint 60': string;
  'Global/ValueColorsSharedSilverShade 50': string;
  'Global/ValueColorsSharedSilverShade 40': string;
  'Global/ValueColorsSharedSilverShade 30': string;
  'Global/ValueColorsSharedSilverShade 20': string;
  'Global/ValueColorsSharedSilverShade 10': string;
  'Global/ValueColorsSharedSilverPrimary': string;
  'Global/ValueColorsSharedSilverTint 10': string;
  'Global/ValueColorsSharedSilverTint 20': string;
  'Global/ValueColorsSharedSilverTint 30': string;
  'Global/ValueColorsSharedSilverTint 40': string;
  'Global/ValueColorsSharedSilverTint 50': string;
  'Global/ValueColorsSharedSilverTint 60': string;
  'Global/ValueColorsSharedPlatinumShade 50': string;
  'Global/ValueColorsSharedPlatinumShade 40': string;
  'Global/ValueColorsSharedPlatinumShade 30': string;
  'Global/ValueColorsSharedPlatinumShade 20': string;
  'Global/ValueColorsSharedPlatinumShade 10': string;
  'Global/ValueColorsSharedPlatinumPrimary': string;
  'Global/ValueColorsSharedPlatinumTint 10': string;
  'Global/ValueColorsSharedPlatinumTint 20': string;
  'Global/ValueColorsSharedPlatinumTint 30': string;
  'Global/ValueColorsSharedPlatinumTint 40': string;
  'Global/ValueColorsSharedPlatinumTint 50': string;
  'Global/ValueColorsSharedPlatinumTint 60': string;
  'Global/ValueColorsSharedAnchorShade 50': string;
  'Global/ValueColorsSharedAnchorShade 40': string;
  'Global/ValueColorsSharedAnchorShade 30': string;
  'Global/ValueColorsSharedAnchorShade 20': string;
  'Global/ValueColorsSharedAnchorShade 10': string;
  'Global/ValueColorsSharedAnchorPrimary': string;
  'Global/ValueColorsSharedAnchorTint 10': string;
  'Global/ValueColorsSharedAnchorTint 20': string;
  'Global/ValueColorsSharedAnchorTint 30': string;
  'Global/ValueColorsSharedAnchorTint 40': string;
  'Global/ValueColorsSharedAnchorTint 50': string;
  'Global/ValueColorsSharedAnchorTint 60': string;
  'Global/ValueColorsSharedCharcoalShade 50': string;
  'Global/ValueColorsSharedCharcoalShade 40': string;
  'Global/ValueColorsSharedCharcoalShade 30': string;
  'Global/ValueColorsSharedCharcoalShade 20': string;
  'Global/ValueColorsSharedCharcoalShade 10': string;
  'Global/ValueColorsSharedCharcoalPrimary': string;
  'Global/ValueColorsSharedCharcoalTint 10': string;
  'Global/ValueColorsSharedCharcoalTint 20': string;
  'Global/ValueColorsSharedCharcoalTint 30': string;
  'Global/ValueColorsSharedCharcoalTint 40': string;
  'Global/ValueColorsSharedCharcoalTint 50': string;
  'Global/ValueColorsSharedCharcoalTint 60': string;
  'Global/ValueColorsSharedInformationPrimary': string;
  'Global/ValueColorsSharedInformationTint 30': string;
  'Global/ValueColorsSharedInformationTint 60': string;
  'Global/ValueColorsSharedInformationTint 40': string;
  'Global/ValueColorsSharedInformationTint 50': string;
  'Global/ValueColorsSharedInformationTint 20': string;
  'Global/ValueColorsSharedInformationTint 10': string;
  'Global/ValueColorsSharedInformationShade 10': string;
  'Global/ValueColorsSharedInformationShade 20': string;
  'Global/ValueColorsAlphaWhite0': string;
  'Global/ValueColorsAlphaWhite5': string;
  'Global/ValueColorsAlphaWhite10': string;
  'Global/ValueColorsAlphaWhite20': string;
  'Global/ValueColorsAlphaWhite30': string;
  'Global/ValueColorsAlphaWhite40': string;
  'Global/ValueColorsAlphaWhite50': string;
  'Global/ValueColorsAlphaWhite60': string;
  'Global/ValueColorsAlphaWhite70': string;
  'Global/ValueColorsAlphaWhite80': string;
  'Global/ValueColorsAlphaWhite90': string;
  'Global/ValueColorsAlphaBlack0': string;
  'Global/ValueColorsAlphaBlack5': string;
  'Global/ValueColorsAlphaBlack10': string;
  'Global/ValueColorsAlphaBlack20': string;
  'Global/ValueColorsAlphaBlack30': string;
  'Global/ValueColorsAlphaBlack40': string;
  'Global/ValueColorsAlphaBlack50': string;
  'Global/ValueColorsAlphaBlack60': string;
  'Global/ValueColorsAlphaBlack70': string;
  'Global/ValueColorsAlphaBlack80': string;
  'Global/ValueColorsAlphaBlack90': string;
  'Global/ValueColorsAlphaBrand-105': string;
  'Global/ValueColorsAlphaBrand-1010': string;
  'Global/ValueColorsAlphaBrand-1020': string;
  'Global/ValueColorsAlphaBrand-1030': string;
  'Global/ValueColorsAlphaBrand-1040': string;
  'Global/ValueColorsAlphaBrand-1050': string;
  'Global/ValueColorsAlphaBrand-1060': string;
  'Global/ValueColorsAlphaBrand-1070': string;
  'Global/ValueColorsAlphaBrand-1080': string;
  'Global/ValueColorsAlphaBrand-1090': string;
  'Global/ValueColorsData vizCoreBlue': string;
  'Global/ValueColorsData vizCoreGray': string;
  'Global/ValueColorsData vizCoreRed': string;
  'Global/ValueColorsData vizCoreTeal': string;
  'Global/ValueColorsData vizCoreOcean': string;
  'Global/ValueColorsData vizCoreGreen': string;
  'Global/ValueColorsData vizCoreYellow': string;
  'Global/ValueColorsData vizSemanticLight bkgdPositive': string;
  'Global/ValueColorsData vizSemanticLight bkgdNotice': string;
  'Global/ValueColorsData vizSemanticLight bkgdNegative': string;
  'Global/ValueColorsData vizSemanticDark bkgdPositive': string;
  'Global/ValueColorsData vizSemanticDark bkgdNegative': string;
  'Global/ValueColorsData vizSemanticDark bkgdNotice': string;
  'Global/ValueColorsData vizSequentialBlue400': string;
  'Global/ValueColorsData vizSequentialBlue300': string;
  'Global/ValueColorsData vizSequentialBlue200': string;
  'Global/ValueColorsData vizSequentialBlue100': string;
  'Global/ValueColorsData vizSequentialGray400': string;
  'Global/ValueColorsData vizSequentialGray300': string;
  'Global/ValueColorsData vizSequentialGray200': string;
  'Global/ValueColorsData vizSequentialGray100': string;
  'Global/ValueColorsData vizSequentialRed400': string;
  'Global/ValueColorsData vizSequentialRed300': string;
  'Global/ValueColorsData vizSequentialRed200': string;
  'Global/ValueColorsData vizSequentialRed100': string;
  'Global/ValueColorsData vizSequentialTeal400': string;
  'Global/ValueColorsData vizSequentialTeal300': string;
  'Global/ValueColorsData vizSequentialTeal200': string;
  'Global/ValueColorsData vizSequentialTeal100': string;
  'Global/ValueColorsData vizSequentialOcean400': string;
  'Global/ValueColorsData vizSequentialOcean300': string;
  'Global/ValueColorsData vizSequentialOcean200': string;
  'Global/ValueColorsData vizSequentialOcean100': string;
  'Global/ValueColorsData vizSequentialGreen400': string;
  'Global/ValueColorsData vizSequentialGreen300': string;
  'Global/ValueColorsData vizSequentialGreen200': string;
  'Global/ValueColorsData vizSequentialGreen100': string;
  'Global/ValueColorsData vizSequentialYellow400': string;
  'Global/ValueColorsData vizSequentialYellow300': string;
  'Global/ValueColorsData vizSequentialYellow200': string;
  'Global/ValueColorsData vizSequentialYellow100': string;
  'Global/ValueColorsBrandBrand-10': string;
  'Global/ValueColorsBrandBrand-20': string;
  'Global/ValueColorsBrandBrand-30': string;
  'Global/ValueColorsBrandBrand-40': string;
  'Global/ValueColorsBrandBrand-50': string;
  'Global/ValueColorsBrandBrand-60': string;
  'Global/ValueColorsBrandBrand-70': string;
  'Global/ValueColorsBrandBrand-80': string;
  'Global/ValueColorsBrandBrand-90': string;
  'Global/ValueColorsBrandBrand-100': string;
  'Global/ValueColorsBrandBrand-110': string;
  'Global/ValueColorsBrandBrand-120': string;
  'Global/ValueColorsBrandBrand-130': string;

  // Brand/ tokens
  'Brand/Brand 1Brand-10': string;
  'Brand/Brand 1Brand-20': string;
  'Brand/Brand 1Brand-30': string;
  'Brand/Brand 1Brand-40': string;
  'Brand/Brand 1Brand-50': string;
  'Brand/Brand 1Brand-60': string;
  'Brand/Brand 1Brand-70': string;
  'Brand/Brand 1Brand-80': string;
  'Brand/Brand 1Brand-90': string;
  'Brand/Brand 1Brand-100': string;
  'Brand/Brand 1Brand-110': string;
  'Brand/Brand 1Brand-120': string;
  'Brand/Brand 1Brand-130': string;

  // Arrow position/ tokens
  'Arrow position/Above startAbove-start': string;
  'Arrow position/Above startAbove-middle': string;
  'Arrow position/Above startAbove-end': string;
  'Arrow position/Above startBefore-top': string;
  'Arrow position/Above startBefore-center': string;
  'Arrow position/Above startBefore-bottom': string;
  'Arrow position/Above startAfter-top': string;
  'Arrow position/Above startAfter-center': string;
  'Arrow position/Above startAfter-bottom': string;
  'Arrow position/Above startBottom-start': string;
  'Arrow position/Above startBottom-center': string;
  'Arrow position/Above startBottom-end': string;
  'Arrow position/Above middleAbove-start': string;
  'Arrow position/Above middleAbove-middle': string;
  'Arrow position/Above middleAbove-end': string;
  'Arrow position/Above middleBefore-top': string;
  'Arrow position/Above middleBefore-center': string;
  'Arrow position/Above middleBefore-bottom': string;
  'Arrow position/Above middleAfter-top': string;
  'Arrow position/Above middleAfter-center': string;
  'Arrow position/Above middleAfter-bottom': string;
  'Arrow position/Above middleBottom-start': string;
  'Arrow position/Above middleBottom-center': string;
  'Arrow position/Above middleBottom-end': string;
  'Arrow position/Above endAbove-start': string;
  'Arrow position/Above endAbove-middle': string;
  'Arrow position/Above endAbove-end': string;
  'Arrow position/Above endBefore-top': string;
  'Arrow position/Above endBefore-center': string;
  'Arrow position/Above endBefore-bottom': string;
  'Arrow position/Above endAfter-top': string;
  'Arrow position/Above endAfter-center': string;
  'Arrow position/Above endAfter-bottom': string;
  'Arrow position/Above endBottom-start': string;
  'Arrow position/Above endBottom-center': string;
  'Arrow position/Above endBottom-end': string;
  'Arrow position/Before topAbove-start': string;
  'Arrow position/Before topAbove-middle': string;
  'Arrow position/Before topAbove-end': string;
  'Arrow position/Before topBefore-top': string;
  'Arrow position/Before topBefore-center': string;
  'Arrow position/Before topBefore-bottom': string;
  'Arrow position/Before topAfter-top': string;
  'Arrow position/Before topAfter-center': string;
  'Arrow position/Before topAfter-bottom': string;
  'Arrow position/Before topBottom-start': string;
  'Arrow position/Before topBottom-center': string;
  'Arrow position/Before topBottom-end': string;
  'Arrow position/Before middleAbove-start': string;
  'Arrow position/Before middleAbove-middle': string;
  'Arrow position/Before middleAbove-end': string;
  'Arrow position/Before middleBefore-top': string;
  'Arrow position/Before middleBefore-center': string;
  'Arrow position/Before middleBefore-bottom': string;
  'Arrow position/Before middleAfter-top': string;
  'Arrow position/Before middleAfter-center': string;
  'Arrow position/Before middleAfter-bottom': string;
  'Arrow position/Before middleBottom-start': string;
  'Arrow position/Before middleBottom-center': string;
  'Arrow position/Before middleBottom-end': string;
  'Arrow position/Before bottomAbove-start': string;
  'Arrow position/Before bottomAbove-middle': string;
  'Arrow position/Before bottomAbove-end': string;
  'Arrow position/Before bottomBefore-top': string;
  'Arrow position/Before bottomBefore-center': string;
  'Arrow position/Before bottomBefore-bottom': string;
  'Arrow position/Before bottomAfter-top': string;
  'Arrow position/Before bottomAfter-center': string;
  'Arrow position/Before bottomAfter-bottom': string;
  'Arrow position/Before bottomBottom-start': string;
  'Arrow position/Before bottomBottom-center': string;
  'Arrow position/Before bottomBottom-end': string;
  'Arrow position/After topAbove-start': string;
  'Arrow position/After topAbove-middle': string;
  'Arrow position/After topAbove-end': string;
  'Arrow position/After topBefore-top': string;
  'Arrow position/After topBefore-center': string;
  'Arrow position/After topBefore-bottom': string;
  'Arrow position/After topAfter-top': string;
  'Arrow position/After topAfter-center': string;
  'Arrow position/After topAfter-bottom': string;
  'Arrow position/After topBottom-start': string;
  'Arrow position/After topBottom-center': string;
  'Arrow position/After topBottom-end': string;
  'Arrow position/After middleAbove-start': string;
  'Arrow position/After middleAbove-middle': string;
  'Arrow position/After middleAbove-end': string;
  'Arrow position/After middleBefore-top': string;
  'Arrow position/After middleBefore-center': string;
  'Arrow position/After middleBefore-bottom': string;
  'Arrow position/After middleAfter-top': string;
  'Arrow position/After middleAfter-center': string;
  'Arrow position/After middleAfter-bottom': string;
  'Arrow position/After middleBottom-start': string;
  'Arrow position/After middleBottom-center': string;
  'Arrow position/After middleBottom-end': string;
  'Arrow position/After bottomAbove-start': string;
  'Arrow position/After bottomAbove-middle': string;
  'Arrow position/After bottomAbove-end': string;
  'Arrow position/After bottomBefore-top': string;
  'Arrow position/After bottomBefore-center': string;
  'Arrow position/After bottomBefore-bottom': string;
  'Arrow position/After bottomAfter-top': string;
  'Arrow position/After bottomAfter-center': string;
  'Arrow position/After bottomAfter-bottom': string;
  'Arrow position/After bottomBottom-start': string;
  'Arrow position/After bottomBottom-center': string;
  'Arrow position/After bottomBottom-end': string;
  'Arrow position/Bottom startAbove-start': string;
  'Arrow position/Bottom startAbove-middle': string;
  'Arrow position/Bottom startAbove-end': string;
  'Arrow position/Bottom startBefore-top': string;
  'Arrow position/Bottom startBefore-center': string;
  'Arrow position/Bottom startBefore-bottom': string;
  'Arrow position/Bottom startAfter-top': string;
  'Arrow position/Bottom startAfter-center': string;
  'Arrow position/Bottom startAfter-bottom': string;
  'Arrow position/Bottom startBottom-start': string;
  'Arrow position/Bottom startBottom-center': string;
  'Arrow position/Bottom startBottom-end': string;
  'Arrow position/Bottom middleAbove-start': string;
  'Arrow position/Bottom middleAbove-middle': string;
  'Arrow position/Bottom middleAbove-end': string;
  'Arrow position/Bottom middleBefore-top': string;
  'Arrow position/Bottom middleBefore-center': string;
  'Arrow position/Bottom middleBefore-bottom': string;
  'Arrow position/Bottom middleAfter-top': string;
  'Arrow position/Bottom middleAfter-center': string;
  'Arrow position/Bottom middleAfter-bottom': string;
  'Arrow position/Bottom middleBottom-start': string;
  'Arrow position/Bottom middleBottom-center': string;
  'Arrow position/Bottom middleBottom-end': string;
  'Arrow position/Bottom endAbove-start': string;
  'Arrow position/Bottom endAbove-middle': string;
  'Arrow position/Bottom endAbove-end': string;
  'Arrow position/Bottom endBefore-top': string;
  'Arrow position/Bottom endBefore-center': string;
  'Arrow position/Bottom endBefore-bottom': string;
  'Arrow position/Bottom endAfter-top': string;
  'Arrow position/Bottom endAfter-center': string;
  'Arrow position/Bottom endAfter-bottom': string;
  'Arrow position/Bottom endBottom-start': string;
  'Arrow position/Bottom endBottom-center': string;
  'Arrow position/Bottom endBottom-end': string;
  'Arrow position/NoneAbove-start': string;
  'Arrow position/NoneAbove-middle': string;
  'Arrow position/NoneAbove-end': string;
  'Arrow position/NoneBefore-top': string;
  'Arrow position/NoneBefore-center': string;
  'Arrow position/NoneBefore-bottom': string;
  'Arrow position/NoneAfter-top': string;
  'Arrow position/NoneAfter-center': string;
  'Arrow position/NoneAfter-bottom': string;
  'Arrow position/NoneBottom-start': string;
  'Arrow position/NoneBottom-center': string;
  'Arrow position/NoneBottom-end': string;

  // Typography/ tokens
  'Typography/BaseFont-familyBase': string;
  'Typography/BaseWeightFontWeightRegular': string;
  'Typography/BaseWeightFontWeightMedium': string;
  'Typography/BaseWeightFontWeightSemibold': string;
  'Typography/BaseWeightFontWeightBold': string;
  'Typography/BaseWeightFontWeightSemilight': string;
  'Typography/BaseWeightFontWeightLight': string;
  'Typography/BaseFontFamilyBase': string;
  'Typography/BaseFontWeightRegular': string;
  'Typography/BaseFontWeightSemibold': string;
  'Typography/BaseFontWeightBold': string;
  'Typography/BaseFontWeightSemilight': string;
  'Typography/BaseFontWeightLight': string;

  // Popover size/ tokens
  'Popover size/MediumPopover-padding-vertical': string;
  'Popover size/MediumPopover-padding-horizontal': string;
  'Popover size/SmallPopover-padding-vertical': string;
  'Popover size/SmallPopover-padding-horizontal': string;
  'Popover size/LargePopover-padding-vertical': string;
  'Popover size/LargePopover-padding-horizontal': string;

  // Card padding/ tokens
  'Card padding/MediumCard-horizontal': string;
  'Card padding/MediumCard-vertical': string;
  'Card padding/MediumCard-gap': string;
  'Card padding/MediumCard-corner-radius': string;
  'Card padding/SmallCard-horizontal': string;
  'Card padding/SmallCard-vertical': string;
  'Card padding/SmallCard-gap': string;
  'Card padding/SmallCard-corner-radius': string;
  'Card padding/LargeCard-horizontal': string;
  'Card padding/LargeCard-vertical': string;
  'Card padding/LargeCard-gap': string;
  'Card padding/LargeCard-corner-radius': string;

  // Button shape/ tokens
  'Button shape/Rounded (Default)Button-corner-radius': string;
  'Button shape/Rounded (Default)Button-image-corner-radius': string;

  // Badge shape/ tokens
  'Badge shape/CircularBadge-corner-radius': string;
}

export const brandTheme: Theme & BrandThemeExtension = {
  'globalLinear': 'linear-gradient(-90deg, #0063ff 4%, #ac3ad5 24%, #ff1919 55%, #fa15e3 100%)',
  'globalFontFamiliesSegoe-ui': 'Segoe UI',
  'globalLineHeights0': '14',
  'globalLineHeights1': '16',
  'globalLineHeights2': '22',
  'globalLineHeights3': '24',
  'globalLineHeights4': '28',
  'globalLineHeights5': '34',
  'globalLineHeights6': '36',
  'globalLineHeights7': '48',
  'globalLineHeights8': '52',
  'globalLineHeights9': '64',
  'globalLineHeights10': '70',
  'globalFontWeightsSegoe-ui-0': 'Regular',
  'globalFontWeightsSegoe-ui-1': 'Semibold',
  'globalFontWeightsSegoe-ui-2': 'Bold',
  'globalFontWeightsSegoe-ui-3': 'Semilight',
  'globalFontWeightsSegoe-ui-4': 'Light',
  'globalFontSize0': '10',
  'globalFontSize1': '12',
  'globalFontSize2': '14',
  'globalFontSize3': '16',
  'globalFontSize4': '20',
  'globalFontSize5': '24',
  'globalFontSize6': '28',
  'globalFontSize7': '32',
  'globalFontSize8': '40',
  'globalFontSize9': '48',
  'globalFontSize10': '52',
  'globalLetterSpacing0': '0%',
  'globalLetterSpacing1': '0',
  'globalParagraphSpacing0': '0',
  'globalTextCaseNone': 'none',
  'globalTextDecorationNone': 'none',
  'globalParagraphIndent0': '0rem',
  'global/globalFontFamiliesSegoe-ui': 'Segoe UI',
  'global/globalFontWeightsSegoe-ui-0': 'Regular',
  'global/globalFontWeightsSegoe-ui-1': 'Semibold',
  'global/globalFontWeightsSegoe-ui-2': 'Bold',
  'global/globalFontWeightsSegoe-ui-3': 'Semilight',
  'global/globalFontWeightsSegoe-ui-4': 'Light',
  'Theme/LightNeutralBackground1Rest': '{colors.neutral.white}',
  'Theme/LightNeutralBackground1Hover': '{colors.neutral.grey-80}',
  'Theme/LightNeutralBackground1Pressed': '{colors.neutral.grey-70}',
  'Theme/LightNeutralBackground1Selected': '{colors.neutral.grey-90}',
  'Theme/LightNeutralBackground2Rest': '#f5f4f2',
  'Theme/LightNeutralBackground3Rest': '{colors.neutral.grey-70}',
  'Theme/LightNeutralBackground3Hover': '{colors.neutral.grey-80}',
  'Theme/LightNeutralBackground3Pressed': '{colors.neutral.grey-80}',
  'Theme/LightNeutralBackground4Rest': '{colors.neutral.grey-90}',
  'Theme/LightNeutralBackground4Hover': '{colors.neutral.grey-70}',
  'Theme/LightNeutralBackground4Pressed': '{colors.neutral.grey-60}',
  'Theme/LightNeutralBackground5Rest': '{colors.neutral.grey-80}',
  'Theme/LightNeutralBackground6Rest': '{colors.neutral.grey-90}',
  'Theme/LightNeutralBackgroundInvertedRest': '{brand-10}',
  'Theme/LightNeutralBackgroundInvertedDisabledRest': '{colors.alpha.white.10}',
  'Theme/LightNeutralBackgroundAlpha1Rest': '{colors.alpha.white.50}',
  'Theme/LightNeutralBackgroundAlpha2Rest': '{colors.alpha.white.80}',
  'Theme/LightNeutralBackgroundStaticRest': '{colors.neutral.white}',
  'Theme/LightNeutralBackgroundSubtleRest': '{colors.alpha.white.0}',
  'Theme/LightNeutralBackgroundSubtleHover': '{colors.neutral.grey-80}',
  'Theme/LightNeutralBackgroundSubtlePressed': '{colors.neutral.grey-70}',
  'Theme/LightNeutralBackgroundSubtleSelected': '{colors.neutral.grey-90}',
  'Theme/LightNeutralBackgroundSubtleLight alphaHover': '{colors.alpha.white.70}',
  'Theme/LightNeutralBackgroundSubtleLight alphaPressed': '{colors.alpha.white.50}',
  'Theme/LightNeutralBackgroundSubtleLight alphaSelected': '{colors.alpha.white.0}',
  'Theme/LightNeutralBackgroundSubtleInvertedRest': '{colors.alpha.black.0}',
  'Theme/LightNeutralBackgroundSubtleInvertedHover': '{colors.alpha.black.10}',
  'Theme/LightNeutralBackgroundSubtleInvertedPressed': '{colors.alpha.black.30}',
  'Theme/LightNeutralBackgroundSubtleInvertedSelected': '{colors.alpha.black.20}',
  'Theme/LightNeutralBackgroundTransparentRest': '{colors.alpha.white.0}',
  'Theme/LightNeutralBackgroundTransparentHover': '{colors.alpha.white.0}',
  'Theme/LightNeutralBackgroundTransparentPressed': '{colors.alpha.white.0}',
  'Theme/LightNeutralBackgroundTransparentSelected': '{colors.alpha.white.0}',
  'Theme/LightNeutralBackgroundDisabledRest': '{colors.neutral.grey-80}',
  'Theme/LightNeutralBackgroundStencil1Rest': '{colors.neutral.grey-70}',
  'Theme/LightNeutralBackgroundStencil2Rest': '{colors.neutral.grey-90}',
  'Theme/LightNeutralBackgroundOverlayRest': '{colors.alpha.black.40}',
  'Theme/LightNeutralBackgroundOverlayScrollbarRest': '{colors.alpha.black.50}',
  'Theme/LightNeutralForeground1Rest primary text': '{brand-10}',
  'Theme/LightNeutralForeground1Hover': '{brand-30}',
  'Theme/LightNeutralForeground1Pressed': '{brand-30}',
  'Theme/LightNeutralForeground1Selected': '{brand-30}',
  'Theme/LightNeutralForeground2Rest secondary text': '{colors.neutral.grey-12}',
  'Theme/LightNeutralForeground2Hover': '{colors.neutral.grey-6}',
  'Theme/LightNeutralForeground2Pressed': '{colors.neutral.grey-6}',
  'Theme/LightNeutralForeground2Selected': '{colors.neutral.grey-6}',
  'Theme/LightNeutralForeground2BrandHover': '{brand-50}',
  'Theme/LightNeutralForeground2BrandPressed': '{brand-40}',
  'Theme/LightNeutralForeground2BrandSelected': '{brand-30}',
  'Theme/LightNeutralForeground2BrandRest': '{brand-60}',
  'Theme/LightNeutralForeground2LinkRest': '{brand-60}',
  'Theme/LightNeutralForeground2LinkHover': '{brand-50}',
  'Theme/LightNeutralForeground2LinkPressed': '{brand-40}',
  'Theme/LightNeutralForeground2LinkSelected': '{brand-30}',
  'Theme/LightNeutralForeground4Rest': '{colors.neutral.grey-30}',
  'Theme/LightNeutralForegroundDisabled2Rest': '{colors.neutral.grey-60}',
  'Theme/LightNeutralForegroundDisabledRest': '{colors.neutral.grey-50}',
  'Theme/LightNeutralForegroundStaticInvertedRest': '{colors.neutral.white}',
  'Theme/LightNeutralForegroundInverted1Rest': '{colors.neutral.white}',
  'Theme/LightNeutralForegroundInverted1Hover': '{colors.neutral.grey-80}',
  'Theme/LightNeutralForegroundInverted1Pressed': '{colors.neutral.grey-70}',
  'Theme/LightNeutralForegroundInverted1Selected': '{colors.neutral.grey-60}',
  'Theme/LightNeutralForegroundInverted2Rest': '{colors.neutral.white}',
  'Theme/LightNeutralForegroundInvertedDisabledRest': '{colors.alpha.white.40}',
  'Theme/LightNeutralForegroundInvertedLinkRest': '{colors.neutral.white}',
  'Theme/LightNeutralForegroundInvertedLinkHover': '{colors.neutral.grey-90}',
  'Theme/LightNeutralForegroundInvertedLinkPressed': '{colors.neutral.grey-80}',
  'Theme/LightNeutralForegroundInvertedLinkSelected': '{colors.neutral.grey-70}',
  'Theme/LightNeutralForegroundOn BrandRest': '{colors.neutral.white}',
  'Theme/LightNeutralStroke1Rest': '{colors.neutral.grey-70}',
  'Theme/LightNeutralStroke1Hover': '{colors.neutral.grey-60}',
  'Theme/LightNeutralStroke1Pressed': '{colors.neutral.grey-50}',
  'Theme/LightNeutralStroke1Selected': '{colors.neutral.grey-40}',
  'Theme/LightNeutralStroke2Rest': '{colors.grey.white}',
  'Theme/LightNeutralStroke3Rest': '{colors.neutral.grey-50}',
  'Theme/LightNeutralStrokeAlpha1Rest': '{colors.alpha.black.5}',
  'Theme/LightNeutralStrokeAlpha2Rest': '{colors.alpha.white.20}',
  'Theme/LightNeutralStrokeSubtleRest': '#f5f4f2',
  'Theme/LightNeutralStrokeOn Brand1Rest': '{brand-60}',
  'Theme/LightNeutralStrokeOn Brand2Rest': '{colors.neutral.white}',
  'Theme/LightNeutralStrokeAccessibleRest': '{brand-60}',
  'Theme/LightNeutralStrokeAccessibleHover': '{brand-50}',
  'Theme/LightNeutralStrokeAccessiblePressed': '{brand-40}',
  'Theme/LightNeutralStrokeAccessibleSelected': '{brand-30}',
  'Theme/LightNeutralStrokeFocus1Rest': '{brand-60}',
  'Theme/LightNeutralStrokeFocus2Rest': '{colors.grey.white}',
  'Theme/LightNeutralStrokeTransparentInteractiveRest': '{colors.alpha.white.0}',
  'Theme/LightNeutralStrokeTransparentDisabledRest': '{colors.alpha.white.0}',
  'Theme/LightNeutralStrokeTransparentRest': '{colors.alpha.white.0}',
  'Theme/LightNeutralStrokeDisabledRest': '{colors.neutral.grey-70}',
  'Theme/LightNeutralStrokeDisabledInvertedRest': '{colors.alpha.white.40}',
  'Theme/LightBrandBackground1Rest': '{brand-60}',
  'Theme/LightBrandBackground1Hover': '{brand-50}',
  'Theme/LightBrandBackground1Pressed': '{brand-40}',
  'Theme/LightBrandBackground1Selected': '{brand-30}',
  'Theme/LightBrandBackground2Rest': '{brand-10}',
  'Theme/LightBrandBackground2Hover': '{brand-110}',
  'Theme/LightBrandBackground2Pressed': '{brand-100}',
  'Theme/LightBrandBackground3Rest': '{brand-120}',
  'Theme/LightBrandBackgroundInvertedRest': '{colors.neutral.white}',
  'Theme/LightBrandBackgroundInvertedHover': '{brand-120}',
  'Theme/LightBrandBackgroundInvertedPressed': '{brand-130}',
  'Theme/LightBrandBackgroundInvertedSelected': '{brand-100}',
  'Theme/LightBrandBackgroundStaticRest': '{brand-60}',
  'Theme/LightBrandBackgroundCompoundRest': '{brand-60}',
  'Theme/LightBrandBackgroundCompoundHover': '{brand-50}',
  'Theme/LightBrandBackgroundCompoundPressed': '{brand-40}',
  'Theme/LightBrandForeground1Rest': '{brand-60}',
  'Theme/LightBrandForeground1Hover': '{brand-50}',
  'Theme/LightBrandForeground1Pressed': '{brand-40}',
  'Theme/LightBrandForeground1Selected': '{brand-30}',
  'Theme/LightBrandForeground2Rest': '{brand-80}',
  'Theme/LightBrandForeground2Hover': '{brand-60}',
  'Theme/LightBrandForeground2Pressed': '{brand-30}',
  'Theme/LightBrandForegroundLinkRest': '{brand-60}',
  'Theme/LightBrandForegroundLinkHover': '{brand-50}',
  'Theme/LightBrandForegroundLinkPressed': '{brand-40}',
  'Theme/LightBrandForegroundLinkSelected': '{brand-30}',
  'Theme/LightBrandForegroundInvertedRest': '{brand-100}',
  'Theme/LightBrandForegroundInvertedHover': '{brand-110}',
  'Theme/LightBrandForegroundInvertedPressed': '{brand-100}',
  'Theme/LightBrandForegroundOn LightRest': '{brand-80}',
  'Theme/LightBrandForegroundOn LightHover': '{brand-70}',
  'Theme/LightBrandForegroundOn LightPressed': '{brand-50}',
  'Theme/LightBrandForegroundOn LightSelected': '{brand-60}',
  'Theme/LightBrandForegroundCompoundRest': '{brand-60}',
  'Theme/LightBrandForegroundCompoundHover': '{brand-50}',
  'Theme/LightBrandForegroundCompoundPressed': '{brand-40}',
  'Theme/LightBrandStroke1Rest': '{brand-60}',
  'Theme/LightBrandStroke1Hover': '{brand-50}',
  'Theme/LightBrandStroke1Pressed': '{brand-40}',
  'Theme/LightBrandStroke1Selected': '{brand-30}',
  'Theme/LightBrandStroke2Rest': '{brand-10}',
  'Theme/LightBrandStroke2ContrastRest': '{brand-110}',
  'Theme/LightBrandStroke3Rest': '{brand-90}',
  'Theme/LightBrandStrokeCompoundRest': '{brand-60}',
  'Theme/LightBrandStrokeCompoundHover': '{brand-50}',
  'Theme/LightBrandStrokeCompoundPressed': '{brand-40}',
  'Theme/LightStatusDangerBackground1Rest': '{colors.shared.cranberry.tint 60}',
  'Theme/LightStatusDangerBackground3Rest': '{colors.shared.cranberry.primary}',
  'Theme/LightStatusDangerForeground1Rest': '{colors.shared.cranberry.primary}',
  'Theme/LightStatusDangerForeground3Rest': '{colors.neutral.white}',
  'Theme/LightStatusDangerStroke1Rest': '{colors.shared.cranberry.primary}',
  'Theme/LightStatusDangerStroke2Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/LightStatusSuccessBackground1Rest': '{colors.shared.green.tint 60}',
  'Theme/LightStatusSuccessBackground3Rest': '{colors.shared.green.primary}',
  'Theme/LightStatusSuccessForeground1Rest': '{colors.shared.green.primary}',
  'Theme/LightStatusSuccessForeground3Rest': '{colors.neutral.white}',
  'Theme/LightStatusSuccessStroke1Rest': '{colors.shared.green.primary}',
  'Theme/LightStatusSuccessStroke2Rest': '{colors.shared.green.tint 30}',
  'Theme/LightStatusWarningBackground1Rest': '{colors.shared.orange.tint 60}',
  'Theme/LightStatusWarningBackground3Rest': '{colors.shared.orange.primary}',
  'Theme/LightStatusWarningForeground1Rest': '{colors.shared.orange.primary}',
  'Theme/LightStatusWarningForeground3Rest': '{colors.neutral.white}',
  'Theme/LightStatusWarningStroke1Rest': '{colors.shared.orange.primary}',
  'Theme/LightStatusWarningStroke2Rest': '{colors.shared.orange.tint 30}',
  'Theme/LightStatusOofForeground3Rest': '{colors.shared.berry.primary}',
  'Theme/LightStatusAwayBackground3Rest': '{colors.shared.marigold.primary}',
  'Theme/LightStatusAvailableForeground3Rest': '{colors.shared.light green.primary}',
  'Theme/LightStatusGenericAnchorBackground2Rest': '{colors.shared.anchor.tint 40}',
  'Theme/LightStatusGenericAnchorForeground2Rest': '{colors.shared.anchor.shade 30}',
  'Theme/LightStatusGenericAnchorStrokeActiveRest': '{colors.shared.anchor.primary}',
  'Theme/LightStatusGenericInformationBackground1Rest': '{colors.shared.information.tint 60}',
  'Theme/LightStatusGenericInformationBackground1Hover': '{colors.shared.information.tint 50}',
  'Theme/LightStatusGenericInformationBackground1Pressed': '{colors.shared.information.tint 40}',
  'Theme/LightStatusGenericInformationStroke1Rest': '{colors.shared.information.primary}',
  'Theme/LightStatusGenericInformationStroke2Rest': '{colors.shared.information.tint 30}',
  'Theme/LightStatusGenericInformationStroke2Hover': '{colors.shared.information.tint 20}',
  'Theme/LightStatusGenericInformationStroke2Pressed': '{colors.shared.information.tint 10}',
  'Theme/LightStatusGenericInformationForegroundRest': '{colors.shared.information.primary}',
  'Theme/LightStatusGenericInformationForegroundHover': '{colors.shared.information.shade 10}',
  'Theme/LightStatusGenericInformationForegroundPressed': '{colors.shared.information.shade 20}',
  'Theme/LightStatusSevereBackground1Rest': '{colors.shared.dark orange.tint 60}',
  'Theme/LightStatusSevereBackground3Rest': '{colors.shared.dark orange.primary}',
  'Theme/LightStatusSevereForeground1Rest': '{colors.shared.dark orange.primary}',
  'Theme/LightStatusSevereForeground3Rest': '{colors.neutral.white}',
  'Theme/LightStatusSevereStroke1Rest': '{colors.shared.dark orange.primary}',
  'Theme/LightStatusSevereStroke2Rest': '{colors.shared.dark orange.tint 30}',
  'Theme/LightShadowAmbient': '#0000001f',
  'Theme/LightShadowAmbient-lighter': '#0000000f',
  'Theme/LightShadowAmbient-darker': '#00000033',
  'Theme/LightShadowBrand-ambient': '#00000040',
  'Theme/LightShadowKey': '#00000024',
  'Theme/LightShadowKey-lighter': '#00000012',
  'Theme/LightShadowKey-darker': '#0000003d',
  'Theme/LightShadowBrand-key': '#0000004d',
  'Theme/LightData vizForegroundLabelsCategorical': '{colors.brand.brand-10}',
  'Theme/LightData vizForegroundLabelsData': '{colors.neutral.grey-12}',
  'Theme/LightData vizForegroundLabelsColorBlue': '{colors.data viz.core.blue}',
  'Theme/LightData vizForegroundLabelsColorGray': '{colors.data viz.core.gray}',
  'Theme/LightData vizForegroundLabelsColorRed': '{colors.data viz.core.red}',
  'Theme/LightData vizForegroundLabelsColorTeal': '{colors.data viz.core.teal}',
  'Theme/LightData vizForegroundLabelsColorOcean': '{colors.data viz.core.ocean}',
  'Theme/LightData vizForegroundLabelsColorGreen': '{colors.data viz.core.green}',
  'Theme/LightData vizForegroundLabelsColorYellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/LightData vizForegroundLabelsColorBlue400': '{colors.data viz.sequential.blue400}',
  'Theme/LightData vizForegroundLabelsColorGray400': '{colors.data viz.sequential.gray400}',
  'Theme/LightData vizForegroundLabelsColorRed400': '{colors.data viz.sequential.red400}',
  'Theme/LightData vizForegroundLabelsColorTeal300': '{colors.data viz.sequential.teal300}',
  'Theme/LightData vizForegroundLabelsColorRed300': '{colors.data viz.sequential.red300}',
  'Theme/LightData vizForegroundLabelsColorTeal400': '{colors.data viz.sequential.teal400}',
  'Theme/LightData vizForegroundLabelsColorOcean400': '{colors.data viz.sequential.ocean400}',
  'Theme/LightData vizForegroundLabelsColorGreen400': '{colors.data viz.sequential.green400}',
  'Theme/LightData vizForegroundLabelsColorYellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/LightData vizForegroundLabelsColorGreen300': '{colors.data viz.sequential.green300}',
  'Theme/LightData vizForegroundLabelsColorGray300': '{colors.data viz.sequential.gray300}',
  'Theme/LightData vizForegroundLabelsColorBlue200': '{colors.data viz.sequential.blue200}',
  'Theme/LightData vizForegroundLabelsColorOcean200': '{colors.data viz.sequential.ocean200}',
  'Theme/LightData vizForegroundAccessibilityText dark bkgd': '{colors.neutral.white}',
  'Theme/LightData vizForegroundAccessibilityText light bkgd': '{colors.neutral.black}',
  'Theme/LightData vizForegroundKPI CardText dark bkgd': '{colors.neutral.white}',
  'Theme/LightData vizForegroundKPI CardText light bkgd': '{colors.neutral.grey-40}',
  'Theme/LightData vizStrokeGridline': '{colors.neutral.grey-70}',
  'Theme/LightData vizStrokeAxis-Target-Benchmark': '{colors.neutral.black}',
  'Theme/LightData vizStrokeColorBlue': '{colors.data viz.core.blue}',
  'Theme/LightData vizStrokeColorBlue400': '{colors.data viz.sequential.blue400}',
  'Theme/LightData vizStrokeColorGray': '{colors.data viz.core.gray}',
  'Theme/LightData vizStrokeColorGray400': '{colors.data viz.sequential.gray400}',
  'Theme/LightData vizStrokeColorRed': '{colors.data viz.core.red}',
  'Theme/LightData vizStrokeColorRed300': '{colors.data viz.sequential.red300}',
  'Theme/LightData vizStrokeColorRed400': '{colors.data viz.sequential.red400}',
  'Theme/LightData vizStrokeColorTeal': '{colors.data viz.core.teal}',
  'Theme/LightData vizStrokeColorTeal300': '{colors.data viz.sequential.teal300}',
  'Theme/LightData vizStrokeColorTeal400': '{colors.data viz.sequential.teal400}',
  'Theme/LightData vizStrokeColorOcean': '{colors.data viz.core.ocean}',
  'Theme/LightData vizStrokeColorOcean400': '{colors.data viz.sequential.ocean400}',
  'Theme/LightData vizStrokeColorGreen': '{colors.data viz.core.green}',
  'Theme/LightData vizStrokeColorGreen300': '{colors.data viz.sequential.green300}',
  'Theme/LightData vizStrokeColorGreen400': '{colors.data viz.sequential.green400}',
  'Theme/LightData vizStrokeColorYellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/LightData vizStrokeColorYellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/LightData vizStrokeColorGray300': '{colors.data viz.sequential.gray300}',
  'Theme/LightData vizStrokeColorBlue200': '{colors.data viz.sequential.blue200}',
  'Theme/LightData vizStrokeColorOcean200': '{colors.data viz.sequential.ocean200}',
  'Theme/LightData vizStrokeColorYellow': '{colors.data viz.core.yellow}',
  'Theme/LightData vizStrokeTrend-Average': '{colors.data viz.sequential.gray300}',
  'Theme/LightData vizStrokeAccessible outline': '{colors.neutral.white}',
  'Theme/LightData vizSemanticForegroundLight bkgdPositive': '{colors.data viz.core.green}',
  'Theme/LightData vizSemanticForegroundLight bkgdNegative': '{colors.data viz.core.red}',
  'Theme/LightData vizSemanticForegroundLight bkgdNotice': '{colors.data viz.core.yellow}',
  'Theme/LightData vizSemanticForegroundDark bkgdPositive': '#37bb65',
  'Theme/LightData vizSemanticForegroundDark bkgdNegative': '#cc2e48',
  'Theme/LightData vizSemanticForegroundDark bkgdNotice': '{colors.data viz.core.yellow}',
  'Theme/LightData vizSemanticStrokeLight bkgdPositive': '{colors.data viz.core.green}',
  'Theme/LightData vizSemanticStrokeLight bkgdNegative': '{colors.data viz.core.red}',
  'Theme/LightData vizSemanticStrokeLight bkgdNotice': '{colors.data viz.core.yellow}',
  'Theme/LightData vizSemanticStrokeDark bkgdPositive': '#37bb65',
  'Theme/LightData vizSemanticStrokeDark bkgdNegative': '#cc2e48',
  'Theme/LightData vizSemanticStrokeDark bkgdNotice': '{colors.data viz.core.yellow}',
  'Theme/LightData vizSemanticBackgroundPositive': '{colors.data viz.core.green}',
  'Theme/LightData vizSemanticBackgroundNegative': '{colors.data viz.core.red}',
  'Theme/LightData vizSemanticBackgroundNotice': '{colors.data viz.core.yellow}',
  'Theme/LightData vizBackgroundCoreBlue': '{colors.data viz.core.blue}',
  'Theme/LightData vizBackgroundCoreGray': '{colors.data viz.core.gray}',
  'Theme/LightData vizBackgroundCoreRed': '{colors.data viz.core.red}',
  'Theme/LightData vizBackgroundCoreTeal': '{colors.data viz.core.teal}',
  'Theme/LightData vizBackgroundCoreOcean': '{colors.data viz.core.ocean}',
  'Theme/LightData vizBackgroundCoreGreen': '{colors.data viz.core.green}',
  'Theme/LightData vizBackgroundCoreYellow': '{colors.data viz.core.yellow}',
  'Theme/LightData vizBackgroundSequentialBlue400': '{colors.data viz.sequential.blue400}',
  'Theme/LightData vizBackgroundSequentialGray400': '{colors.data viz.sequential.gray400}',
  'Theme/LightData vizBackgroundSequentialRed300': '{colors.data viz.sequential.red300}',
  'Theme/LightData vizBackgroundSequentialRed400': '{colors.data viz.sequential.red400}',
  'Theme/LightData vizBackgroundSequentialTeal300': '{colors.data viz.sequential.teal300}',
  'Theme/LightData vizBackgroundSequentialTeal400': '{colors.data viz.sequential.teal400}',
  'Theme/LightData vizBackgroundSequentialOcean400': '{colors.data viz.sequential.ocean400}',
  'Theme/LightData vizBackgroundSequentialGreen300': '{colors.data viz.sequential.green300}',
  'Theme/LightData vizBackgroundSequentialGreen400': '{colors.data viz.sequential.green400}',
  'Theme/LightData vizBackgroundSequentialYellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/LightData vizBackgroundSequentialYellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/LightData vizBackgroundSequentialBlue300': '{colors.data viz.sequential.blue300}',
  'Theme/LightData vizBackgroundSequentialBlue200': '{colors.data viz.sequential.blue200}',
  'Theme/LightData vizBackgroundSequentialBlue100': '{colors.data viz.sequential.blue100}',
  'Theme/LightData vizBackgroundSequentialGray300': '{colors.data viz.sequential.gray300}',
  'Theme/LightData vizBackgroundSequentialGray200': '{colors.data viz.sequential.gray200}',
  'Theme/LightData vizBackgroundSequentialGray100': '{colors.data viz.sequential.gray100}',
  'Theme/LightData vizBackgroundSequentialRed200': '{colors.data viz.sequential.red200}',
  'Theme/LightData vizBackgroundSequentialRed100': '{colors.data viz.sequential.red100}',
  'Theme/LightData vizBackgroundSequentialTeal200': '{colors.data viz.sequential.teal200}',
  'Theme/LightData vizBackgroundSequentialTeal100': '{colors.data viz.sequential.teal100}',
  'Theme/LightData vizBackgroundSequentialOcean300': '{colors.data viz.sequential.ocean300}',
  'Theme/LightData vizBackgroundSequentialOcean200': '{colors.data viz.sequential.ocean200}',
  'Theme/LightData vizBackgroundSequentialOcean100': '{colors.data viz.sequential.ocean100}',
  'Theme/LightData vizBackgroundSequentialGreen200': '{colors.data viz.sequential.green200}',
  'Theme/LightData vizBackgroundSequentialGreen100': '{colors.data viz.sequential.green100}',
  'Theme/LightData vizBackgroundSequentialYellow200': '{colors.data viz.sequential.yellow200}',
  'Theme/LightData vizBackgroundSequentialYellow100': '{colors.data viz.sequential.yellow100}',
  'Theme/LightData vizBackgroundNeutralBlack': '{colors.neutral.black}',
  'Theme/LightControl logicTheme switch': 'Light',
  'Theme/DarkNeutralBackground1Rest': '{colors.neutral.black}',
  'Theme/DarkNeutralBackground1Hover': '{colors.neutral.grey-10}',
  'Theme/DarkNeutralBackground1Pressed': '{colors.neutral.grey-12}',
  'Theme/DarkNeutralBackground1Selected': '{colors.neutral.grey-8}',
  'Theme/DarkNeutralBackground2Rest': '{colors.neutral.grey-6}',
  'Theme/DarkNeutralBackground3Rest': '{colors.neutral.grey-12}',
  'Theme/DarkNeutralBackground3Hover': '{colors.neutral.grey-10}',
  'Theme/DarkNeutralBackground3Pressed': '{colors.neutral.grey-10}',
  'Theme/DarkNeutralBackground4Rest': '{colors.neutral.grey-90}',
  'Theme/DarkNeutralBackground4Hover': '{colors.neutral.grey-70}',
  'Theme/DarkNeutralBackground4Pressed': '{colors.neutral.grey-60}',
  'Theme/DarkNeutralBackground5Rest': '{colors.neutral.grey-90}',
  'Theme/DarkNeutralBackground6Rest': '{colors.neutral.grey-20}',
  'Theme/DarkNeutralBackgroundInvertedRest': '{colors.neutral.white}',
  'Theme/DarkNeutralBackgroundInvertedDisabledRest': '{colors.alpha.white.10}',
  'Theme/DarkNeutralBackgroundAlpha1Rest': '{colors.alpha.brand-10.50}',
  'Theme/DarkNeutralBackgroundAlpha2Rest': '{colors.alpha.black.70}',
  'Theme/DarkNeutralBackgroundStaticRest': '{colors.neutral.white}',
  'Theme/DarkNeutralBackgroundSubtleRest': '{colors.alpha.black.0}',
  'Theme/DarkNeutralBackgroundSubtleHover': '{colors.neutral.grey-80}',
  'Theme/DarkNeutralBackgroundSubtlePressed': '{colors.neutral.grey-70}',
  'Theme/DarkNeutralBackgroundSubtleSelected': '{colors.neutral.grey-90}',
  'Theme/DarkNeutralBackgroundSubtleLight alphaHover': '#242424cc',
  'Theme/DarkNeutralBackgroundSubtleLight alphaPressed': '#24242480',
  'Theme/DarkNeutralBackgroundSubtleLight alphaSelected': '{colors.alpha.black.0}',
  'Theme/DarkNeutralBackgroundSubtleInvertedRest': '{colors.alpha.black.0}',
  'Theme/DarkNeutralBackgroundSubtleInvertedHover': '{colors.alpha.black.10}',
  'Theme/DarkNeutralBackgroundSubtleInvertedPressed': '{colors.alpha.black.30}',
  'Theme/DarkNeutralBackgroundSubtleInvertedSelected': '{colors.alpha.black.20}',
  'Theme/DarkNeutralBackgroundTransparentRest': '{colors.alpha.black.0}',
  'Theme/DarkNeutralBackgroundTransparentHover': '{colors.alpha.black.0}',
  'Theme/DarkNeutralBackgroundTransparentPressed': '{colors.alpha.black.0}',
  'Theme/DarkNeutralBackgroundTransparentSelected': '{colors.alpha.black.0}',
  'Theme/DarkNeutralBackgroundDisabledRest': '{colors.neutral.grey-8}',
  'Theme/DarkNeutralBackgroundStencil1Rest': '#575757',
  'Theme/DarkNeutralBackgroundStencil2Rest': '{colors.neutral.grey-20}',
  'Theme/DarkNeutralBackgroundOverlayRest': '{colors.alpha.black.50}',
  'Theme/DarkNeutralBackgroundOverlayScrollbarRest': '{colors.alpha.white.60}',
  'Theme/DarkNeutralForeground1Rest primary text': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground1Hover': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground1Pressed': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground1Selected': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground2Rest secondary text': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground2Hover': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground2Pressed': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground2Selected': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground2BrandHover': '{brand-100}',
  'Theme/DarkNeutralForeground2BrandPressed': '{brand-90}',
  'Theme/DarkNeutralForeground2BrandSelected': '{brand-100}',
  'Theme/DarkNeutralForeground2BrandRest': '{brand-100}',
  'Theme/DarkNeutralForeground2LinkRest': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground2LinkHover': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground2LinkPressed': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground2LinkSelected': '{colors.neutral.white}',
  'Theme/DarkNeutralForeground4Rest': '{colors.neutral.grey-60}',
  'Theme/DarkNeutralForegroundDisabled2Rest': '{colors.neutral.grey-60}',
  'Theme/DarkNeutralForegroundDisabledRest': '{colors.neutral.grey-50}',
  'Theme/DarkNeutralForegroundStaticInvertedRest': '{colors.neutral.white}',
  'Theme/DarkNeutralForegroundInverted1Rest': '#242424',
  'Theme/DarkNeutralForegroundInverted1Hover': '#242424',
  'Theme/DarkNeutralForegroundInverted1Pressed': '#242424',
  'Theme/DarkNeutralForegroundInverted1Selected': '#242424',
  'Theme/DarkNeutralForegroundInverted2Rest': '#242424',
  'Theme/DarkNeutralForegroundInvertedDisabledRest': '{colors.alpha.white.40}',
  'Theme/DarkNeutralForegroundInvertedLinkRest': '{colors.neutral.white}',
  'Theme/DarkNeutralForegroundInvertedLinkHover': '{colors.neutral.white}',
  'Theme/DarkNeutralForegroundInvertedLinkPressed': '{colors.neutral.white}',
  'Theme/DarkNeutralForegroundInvertedLinkSelected': '{colors.neutral.white}',
  'Theme/DarkNeutralForegroundOn BrandRest': '{colors.neutral.white}',
  'Theme/DarkNeutralStroke1Rest': '{colors.neutral.grey-40}',
  'Theme/DarkNeutralStroke1Hover': '{colors.neutral.grey-40}',
  'Theme/DarkNeutralStroke1Pressed': '{colors.neutral.grey-40}',
  'Theme/DarkNeutralStroke1Selected': '{colors.neutral.grey-40}',
  'Theme/DarkNeutralStroke2Rest': '{colors.grey.white}',
  'Theme/DarkNeutralStroke3Rest': '{colors.neutral.grey-50}',
  'Theme/DarkNeutralStrokeAlpha1Rest': '{colors.alpha.white.10}',
  'Theme/DarkNeutralStrokeAlpha2Rest': '{colors.alpha.white.20}',
  'Theme/DarkNeutralStrokeSubtleRest': '#f5f4f2',
  'Theme/DarkNeutralStrokeOn Brand1Rest': '{colors.neutral.white}',
  'Theme/DarkNeutralStrokeOn Brand2Rest': '{colors.grey.white}',
  'Theme/DarkNeutralStrokeAccessibleRest': '{colors.neutral.white}',
  'Theme/DarkNeutralStrokeAccessibleHover': '{colors.neutral.white}',
  'Theme/DarkNeutralStrokeAccessiblePressed': '{colors.neutral.white}',
  'Theme/DarkNeutralStrokeAccessibleSelected': '{colors.neutral.white}',
  'Theme/DarkNeutralStrokeFocus1Rest': '{colors.neutral.black}',
  'Theme/DarkNeutralStrokeFocus2Rest': '{colors.neutral.white}',
  'Theme/DarkNeutralStrokeTransparentInteractiveRest': '{colors.alpha.white.0}',
  'Theme/DarkNeutralStrokeTransparentDisabledRest': '{colors.alpha.white.0}',
  'Theme/DarkNeutralStrokeTransparentRest': '{colors.alpha.white.0}',
  'Theme/DarkNeutralStrokeDisabledRest': '{colors.neutral.grey-70}',
  'Theme/DarkNeutralStrokeDisabledInvertedRest': '{colors.alpha.white.40}',
  'Theme/DarkBrandBackground1Rest': '{brand-60}',
  'Theme/DarkBrandBackground1Hover': '{brand-40}',
  'Theme/DarkBrandBackground1Pressed': '{brand-30}',
  'Theme/DarkBrandBackground1Selected': '{brand-20}',
  'Theme/DarkBrandBackground2Rest': '{brand-20}',
  'Theme/DarkBrandBackground2Hover': '{brand-40}',
  'Theme/DarkBrandBackground2Pressed': '{brand-10}',
  'Theme/DarkBrandBackground3Rest': '#ffffff',
  'Theme/DarkBrandBackgroundInvertedRest': '{colors.neutral.white}',
  'Theme/DarkBrandBackgroundInvertedHover': '{brand-120}',
  'Theme/DarkBrandBackgroundInvertedPressed': '{brand-130}',
  'Theme/DarkBrandBackgroundInvertedSelected': '{brand-100}',
  'Theme/DarkBrandBackgroundStaticRest': '{brand-80}',
  'Theme/DarkBrandBackgroundCompoundRest': '{brand-100}',
  'Theme/DarkBrandBackgroundCompoundHover': '{brand-110}',
  'Theme/DarkBrandBackgroundCompoundPressed': '{brand-90}',
  'Theme/DarkBrandForeground1Rest': '{brand-100}',
  'Theme/DarkBrandForeground1Hover': '{brand-100}',
  'Theme/DarkBrandForeground1Pressed': '{brand-100}',
  'Theme/DarkBrandForeground1Selected': '{brand-100}',
  'Theme/DarkBrandForeground2Rest': '{brand-110}',
  'Theme/DarkBrandForeground2Hover': '{brand-130}',
  'Theme/DarkBrandForeground2Pressed': '{brand-100}',
  'Theme/DarkBrandForegroundLinkRest': '{brand-100}',
  'Theme/DarkBrandForegroundLinkHover': '{brand-110}',
  'Theme/DarkBrandForegroundLinkPressed': '{brand-90}',
  'Theme/DarkBrandForegroundLinkSelected': '{brand-100}',
  'Theme/DarkBrandForegroundInvertedRest': '{brand-80}',
  'Theme/DarkBrandForegroundInvertedHover': '{brand-70}',
  'Theme/DarkBrandForegroundInvertedPressed': '{brand-60}',
  'Theme/DarkBrandForegroundOn LightRest': '{brand-70}',
  'Theme/DarkBrandForegroundOn LightHover': '{brand-70}',
  'Theme/DarkBrandForegroundOn LightPressed': '{brand-50}',
  'Theme/DarkBrandForegroundOn LightSelected': '{brand-60}',
  'Theme/DarkBrandForegroundCompoundRest': '{brand-100}',
  'Theme/DarkBrandForegroundCompoundHover': '{brand-110}',
  'Theme/DarkBrandForegroundCompoundPressed': '{brand-90}',
  'Theme/DarkBrandStroke1Rest': '{brand-100}',
  'Theme/DarkBrandStroke1Hover': '#2886de',
  'Theme/DarkBrandStroke1Pressed': '{brand-70}',
  'Theme/DarkBrandStroke1Selected': '{brand-70}',
  'Theme/DarkBrandStroke2Rest': '{brand-50}',
  'Theme/DarkBrandStroke2ContrastRest': '{brand-60}',
  'Theme/DarkBrandStroke3Rest': '#ffffff',
  'Theme/DarkBrandStrokeCompoundRest': '{brand-100}',
  'Theme/DarkBrandStrokeCompoundHover': '{brand-110}',
  'Theme/DarkBrandStrokeCompoundPressed': '{brand-90}',
  'Theme/DarkStatusDangerBackground1Rest': '{colors.neutral.white}',
  'Theme/DarkStatusDangerBackground3Rest': '{colors.shared.cranberry.primary}',
  'Theme/DarkStatusDangerForeground1Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/DarkStatusDangerForeground3Rest': '{colors.neutral.white}',
  'Theme/DarkStatusDangerStroke1Rest': '{colors.shared.cranberry.primary}',
  'Theme/DarkStatusDangerStroke2Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/DarkStatusSuccessBackground1Rest': '{colors.shared.green.tint 60}',
  'Theme/DarkStatusSuccessBackground3Rest': '{colors.shared.green.primary}',
  'Theme/DarkStatusSuccessForeground1Rest': '{colors.shared.green.primary}',
  'Theme/DarkStatusSuccessForeground3Rest': '{colors.neutral.white}',
  'Theme/DarkStatusSuccessStroke1Rest': '{colors.shared.green.primary}',
  'Theme/DarkStatusSuccessStroke2Rest': '{colors.shared.green.tint 30}',
  'Theme/DarkStatusWarningBackground1Rest': '{colors.shared.orange.tint 60}',
  'Theme/DarkStatusWarningBackground3Rest': '{colors.shared.orange.primary}',
  'Theme/DarkStatusWarningForeground1Rest': '{colors.shared.orange.primary}',
  'Theme/DarkStatusWarningForeground3Rest': '{colors.neutral.white}',
  'Theme/DarkStatusWarningStroke1Rest': '{colors.shared.orange.primary}',
  'Theme/DarkStatusWarningStroke2Rest': '{colors.shared.orange.tint 30}',
  'Theme/DarkStatusOofForeground3Rest': '{colors.shared.berry.tint 20}',
  'Theme/DarkStatusAwayBackground3Rest': '{colors.shared.marigold.primary}',
  'Theme/DarkStatusAvailableForeground3Rest': '{colors.shared.light green.primary}',
  'Theme/DarkStatusGenericAnchorBackground2Rest': '{colors.shared.anchor.shade 30}',
  'Theme/DarkStatusGenericAnchorForeground2Rest': '{colors.shared.anchor.tint 40}',
  'Theme/DarkStatusGenericAnchorStrokeActiveRest': '{colors.shared.anchor.tint 30}',
  'Theme/DarkStatusGenericInformationBackground1Rest': '#ffffff',
  'Theme/DarkStatusGenericInformationBackground1Hover': '#ffffff',
  'Theme/DarkStatusGenericInformationBackground1Pressed': '#ffffff',
  'Theme/DarkStatusGenericInformationStroke1Rest': '#ffffff',
  'Theme/DarkStatusGenericInformationStroke2Rest': '#ffffff',
  'Theme/DarkStatusGenericInformationStroke2Hover': '#ffffff',
  'Theme/DarkStatusGenericInformationStroke2Pressed': '#ffffff',
  'Theme/DarkStatusGenericInformationForegroundRest': '#ffffff',
  'Theme/DarkStatusGenericInformationForegroundHover': '#ffffff',
  'Theme/DarkStatusGenericInformationForegroundPressed': '#ffffff',
  'Theme/DarkStatusSevereBackground1Rest': '{colors.shared.dark orange.tint 60}',
  'Theme/DarkStatusSevereBackground3Rest': '{colors.shared.dark orange.primary}',
  'Theme/DarkStatusSevereForeground1Rest': '{colors.shared.dark orange.primary}',
  'Theme/DarkStatusSevereForeground3Rest': '{colors.neutral.white}',
  'Theme/DarkStatusSevereStroke1Rest': '{colors.shared.dark orange.primary}',
  'Theme/DarkStatusSevereStroke2Rest': '{colors.shared.dark orange.tint 30}',
  'Theme/DarkShadowAmbient': '#00000033',
  'Theme/DarkShadowAmbient-lighter': '#0000001f',
  'Theme/DarkShadowAmbient-darker': '#00000066',
  'Theme/DarkShadowBrand-ambient': '#00000040',
  'Theme/DarkShadowKey': '#00000047',
  'Theme/DarkShadowKey-lighter': '#00000024',
  'Theme/DarkShadowKey-darker': '#0000007a',
  'Theme/DarkShadowBrand-key': '#0000004d',
  'Theme/DarkData vizForegroundLabelsCategorical': '#ffffff',
  'Theme/DarkData vizForegroundLabelsData': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorBlue': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorGray': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorRed': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorTeal': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorOcean': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorGreen': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorYellow300': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorBlue400': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorGray400': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorRed400': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorTeal300': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorRed300': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorTeal400': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorOcean400': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorGreen400': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorYellow400': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorGreen300': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorGray300': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorBlue200': '#ffffff',
  'Theme/DarkData vizForegroundLabelsColorOcean200': '#ffffff',
  'Theme/DarkData vizForegroundAccessibilityText dark bkgd': '#ffffff',
  'Theme/DarkData vizForegroundAccessibilityText light bkgd': '#ffffff',
  'Theme/DarkData vizForegroundKPI CardText dark bkgd': '#ffffff',
  'Theme/DarkData vizForegroundKPI CardText light bkgd': '#ffffff',
  'Theme/DarkData vizStrokeGridline': '#ffffff',
  'Theme/DarkData vizStrokeAxis-Target-Benchmark': '#ffffff',
  'Theme/DarkData vizStrokeColorBlue': '#ffffff',
  'Theme/DarkData vizStrokeColorBlue400': '#ffffff',
  'Theme/DarkData vizStrokeColorGray': '#ffffff',
  'Theme/DarkData vizStrokeColorGray400': '#ffffff',
  'Theme/DarkData vizStrokeColorRed': '#ffffff',
  'Theme/DarkData vizStrokeColorRed300': '#ffffff',
  'Theme/DarkData vizStrokeColorRed400': '#ffffff',
  'Theme/DarkData vizStrokeColorTeal': '#ffffff',
  'Theme/DarkData vizStrokeColorTeal300': '#ffffff',
  'Theme/DarkData vizStrokeColorTeal400': '#ffffff',
  'Theme/DarkData vizStrokeColorOcean': '#ffffff',
  'Theme/DarkData vizStrokeColorOcean400': '#ffffff',
  'Theme/DarkData vizStrokeColorGreen': '#ffffff',
  'Theme/DarkData vizStrokeColorGreen300': '#ffffff',
  'Theme/DarkData vizStrokeColorGreen400': '#ffffff',
  'Theme/DarkData vizStrokeColorYellow300': '#ffffff',
  'Theme/DarkData vizStrokeColorYellow400': '#ffffff',
  'Theme/DarkData vizStrokeColorGray300': '#ffffff',
  'Theme/DarkData vizStrokeColorBlue200': '#ffffff',
  'Theme/DarkData vizStrokeColorOcean200': '#ffffff',
  'Theme/DarkData vizStrokeColorYellow': '#ffffff',
  'Theme/DarkData vizStrokeTrend-Average': '#ffffff',
  'Theme/DarkData vizStrokeAccessible outline': '#ffffff',
  'Theme/DarkData vizSemanticForegroundLight bkgdPositive': '#ffffff',
  'Theme/DarkData vizSemanticForegroundLight bkgdNegative': '#ffffff',
  'Theme/DarkData vizSemanticForegroundLight bkgdNotice': '#ffffff',
  'Theme/DarkData vizSemanticForegroundDark bkgdPositive': '#ffffff',
  'Theme/DarkData vizSemanticForegroundDark bkgdNegative': '#ffffff',
  'Theme/DarkData vizSemanticForegroundDark bkgdNotice': '#ffffff',
  'Theme/DarkData vizSemanticStrokeLight bkgdPositive': '#ffffff',
  'Theme/DarkData vizSemanticStrokeLight bkgdNegative': '#ffffff',
  'Theme/DarkData vizSemanticStrokeLight bkgdNotice': '#ffffff',
  'Theme/DarkData vizSemanticStrokeDark bkgdPositive': '#ffffff',
  'Theme/DarkData vizSemanticStrokeDark bkgdNegative': '#ffffff',
  'Theme/DarkData vizSemanticStrokeDark bkgdNotice': '#ffffff',
  'Theme/DarkData vizSemanticBackgroundPositive': '#ffffff',
  'Theme/DarkData vizSemanticBackgroundNegative': '#ffffff',
  'Theme/DarkData vizSemanticBackgroundNotice': '#ffffff',
  'Theme/DarkData vizBackgroundCoreBlue': '#ffffff',
  'Theme/DarkData vizBackgroundCoreGray': '#ffffff',
  'Theme/DarkData vizBackgroundCoreRed': '#ffffff',
  'Theme/DarkData vizBackgroundCoreTeal': '#ffffff',
  'Theme/DarkData vizBackgroundCoreOcean': '#ffffff',
  'Theme/DarkData vizBackgroundCoreGreen': '#ffffff',
  'Theme/DarkData vizBackgroundCoreYellow': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialBlue400': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialGray400': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialRed300': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialRed400': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialTeal300': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialTeal400': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialOcean400': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialGreen300': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialGreen400': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialYellow300': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialYellow400': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialBlue300': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialBlue200': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialBlue100': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialGray300': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialGray200': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialGray100': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialRed200': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialRed100': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialTeal200': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialTeal100': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialOcean300': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialOcean200': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialOcean100': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialGreen200': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialGreen100': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialYellow200': '#ffffff',
  'Theme/DarkData vizBackgroundSequentialYellow100': '#ffffff',
  'Theme/DarkData vizBackgroundNeutralBlack': '#ffffff',
  'Theme/DarkControl logicTheme switch': 'Dark',
  'Global/ValueColorsNeutralBlack': '#000000',
  'Global/ValueColorsNeutralGrey-6': '#111111',
  'Global/ValueColorsNeutralGrey-8': '#2c2c2c',
  'Global/ValueColorsNeutralGrey-10': '#3a3a3a',
  'Global/ValueColorsNeutralGrey-12': '#595959',
  'Global/ValueColorsNeutralGrey-20': '#626a6a',
  'Global/ValueColorsNeutralGrey-30': '#788383',
  'Global/ValueColorsNeutralGrey-40': '#959d9d',
  'Global/ValueColorsNeutralGrey-50': '#afb6b6',
  'Global/ValueColorsNeutralGrey-60': '#cacece',
  'Global/ValueColorsNeutralGrey-70': '#e4e7e7',
  'Global/ValueColorsNeutralGrey-80': '#f2f3f3',
  'Global/ValueColorsNeutralGrey-90': '#f8f8f8',
  'Global/ValueColorsNeutralWhite': '#ffffff',
  'Global/ValueColorsSharedBurgundyShade 50': '#1a0607',
  'Global/ValueColorsSharedBurgundyShade 40': '#310b0d',
  'Global/ValueColorsSharedBurgundyShade 30': '#5c1519',
  'Global/ValueColorsSharedBurgundyShade 20': '#7d1d21',
  'Global/ValueColorsSharedBurgundyShade 10': '#942228',
  'Global/ValueColorsSharedBurgundyPrimary': '#a4262c',
  'Global/ValueColorsSharedBurgundyTint 10': '#af393e',
  'Global/ValueColorsSharedBurgundyTint 20': '#ba4d52',
  'Global/ValueColorsSharedBurgundyTint 30': '#c86c70',
  'Global/ValueColorsSharedBurgundyTint 40': '#e4afb2',
  'Global/ValueColorsSharedBurgundyTint 50': '#f0d3d4',
  'Global/ValueColorsSharedBurgundyTint 60': '#fbf4f4',
  'Global/ValueColorsSharedCranberryPrimary': '#ad0000',
  'Global/ValueColorsSharedCranberryTint 30': '#dd9090',
  'Global/ValueColorsSharedCranberryTint 60': '#fcdfdf',
  'Global/ValueColorsSharedRedShade 50': '#210809',
  'Global/ValueColorsSharedRedShade 40': '#3f1011',
  'Global/ValueColorsSharedRedShade 30': '#751d1f',
  'Global/ValueColorsSharedRedShade 20': '#9f282b',
  'Global/ValueColorsSharedRedShade 10': '#bc2f32',
  'Global/ValueColorsSharedRedPrimary': '#d13438',
  'Global/ValueColorsSharedRedTint 10': '#d7494c',
  'Global/ValueColorsSharedRedTint 20': '#dc5e62',
  'Global/ValueColorsSharedRedTint 30': '#e37d80',
  'Global/ValueColorsSharedRedTint 40': '#f1bbbc',
  'Global/ValueColorsSharedRedTint 50': '#f8dadb',
  'Global/ValueColorsSharedRedTint 60': '#fdf6f6',
  'Global/ValueColorsSharedDark OrangePrimary': '#da3b01',
  'Global/ValueColorsSharedDark OrangeTint 30': '#f5c0ac',
  'Global/ValueColorsSharedDark OrangeTint 60': '#f8e8e1',
  'Global/ValueColorsSharedBronzeShade 50': '#1b0a01',
  'Global/ValueColorsSharedBronzeShade 40': '#321303',
  'Global/ValueColorsSharedBronzeShade 30': '#5e2405',
  'Global/ValueColorsSharedBronzeShade 20': '#7f3107',
  'Global/ValueColorsSharedBronzeShade 10': '#963a08',
  'Global/ValueColorsSharedBronzePrimary': '#a74109',
  'Global/ValueColorsSharedBronzeTint 10': '#b2521e',
  'Global/ValueColorsSharedBronzeTint 20': '#bc6535',
  'Global/ValueColorsSharedBronzeTint 30': '#ca8057',
  'Global/ValueColorsSharedBronzeTint 40': '#e5bba4',
  'Global/ValueColorsSharedBronzeTint 50': '#f1d9cc',
  'Global/ValueColorsSharedBronzeTint 60': '#fbf5f2',
  'Global/ValueColorsSharedOrangePrimary': '#c9601c',
  'Global/ValueColorsSharedOrangeTint 30': '#f0a371',
  'Global/ValueColorsSharedOrangeTint 60': '#fbeee6',
  'Global/ValueColorsSharedPeachShade 50': '#291600',
  'Global/ValueColorsSharedPeachShade 40': '#4d2a00',
  'Global/ValueColorsSharedPeachShade 30': '#8f4e00',
  'Global/ValueColorsSharedPeachShade 20': '#c26a00',
  'Global/ValueColorsSharedPeachShade 10': '#e67e00',
  'Global/ValueColorsSharedPeachPrimary': '#ff8c00',
  'Global/ValueColorsSharedPeachTint 10': '#ff9a1f',
  'Global/ValueColorsSharedPeachTint 20': '#ffa83d',
  'Global/ValueColorsSharedPeachTint 30': '#ffba66',
  'Global/ValueColorsSharedPeachTint 40': '#ffddb3',
  'Global/ValueColorsSharedPeachTint 50': '#ffedd6',
  'Global/ValueColorsSharedPeachTint 60': '#fffaf5',
  'Global/ValueColorsSharedMarigoldShade 50': '#251a00',
  'Global/ValueColorsSharedMarigoldShade 40': '#463100',
  'Global/ValueColorsSharedMarigoldShade 30': '#835b00',
  'Global/ValueColorsSharedMarigoldShade 20': '#b27c00',
  'Global/ValueColorsSharedMarigoldShade 10': '#d39300',
  'Global/ValueColorsSharedMarigoldPrimary': '#eaa300',
  'Global/ValueColorsSharedMarigoldTint 10': '#edad1c',
  'Global/ValueColorsSharedMarigoldTint 20': '#efb839',
  'Global/ValueColorsSharedMarigoldTint 30': '#f2c661',
  'Global/ValueColorsSharedMarigoldTint 40': '#f9e2ae',
  'Global/ValueColorsSharedMarigoldTint 50': '#fcefd3',
  'Global/ValueColorsSharedMarigoldTint 60': '#fefbf4',
  'Global/ValueColorsSharedYellowShade 50': '#282400',
  'Global/ValueColorsSharedYellowShade 40': '#4c4400',
  'Global/ValueColorsSharedYellowShade 30': '#817400',
  'Global/ValueColorsSharedYellowShade 20': '#c0ad00',
  'Global/ValueColorsSharedYellowShade 10': '#e4cc00',
  'Global/ValueColorsSharedYellowPrimary': '#fde300',
  'Global/ValueColorsSharedYellowTint 10': '#fde61e',
  'Global/ValueColorsSharedYellowTint 20': '#fdea3d',
  'Global/ValueColorsSharedYellowTint 30': '#feee66',
  'Global/ValueColorsSharedYellowTint 40': '#fef7b2',
  'Global/ValueColorsSharedYellowTint 50': '#fffad6',
  'Global/ValueColorsSharedYellowTint 60': '#fffef5',
  'Global/ValueColorsSharedGoldShade 50': '#1f1900',
  'Global/ValueColorsSharedGoldShade 40': '#3a2f00',
  'Global/ValueColorsSharedGoldShade 30': '#6c5700',
  'Global/ValueColorsSharedGoldShade 20': '#937700',
  'Global/ValueColorsSharedGoldShade 10': '#ae8c00',
  'Global/ValueColorsSharedGoldPrimary': '#c19c00',
  'Global/ValueColorsSharedGoldTint 10': '#c8a718',
  'Global/ValueColorsSharedGoldTint 20': '#d0b232',
  'Global/ValueColorsSharedGoldTint 30': '#dac157',
  'Global/ValueColorsSharedGoldTint 40': '#ecdfa5',
  'Global/ValueColorsSharedGoldTint 50': '#f5eece',
  'Global/ValueColorsSharedGoldTint 60': '#fdfbf2',
  'Global/ValueColorsSharedBrassShade 50': '#181202',
  'Global/ValueColorsSharedBrassShade 40': '#2e2103',
  'Global/ValueColorsSharedBrassShade 30': '#553e06',
  'Global/ValueColorsSharedBrassShade 20': '#745408',
  'Global/ValueColorsSharedBrassShade 10': '#89640a',
  'Global/ValueColorsSharedBrassPrimary': '#986f0b',
  'Global/ValueColorsSharedBrassTint 10': '#a47d1e',
  'Global/ValueColorsSharedBrassTint 20': '#b18c34',
  'Global/ValueColorsSharedBrassTint 30': '#c1a256',
  'Global/ValueColorsSharedBrassTint 40': '#e0cea2',
  'Global/ValueColorsSharedBrassTint 50': '#efe4cb',
  'Global/ValueColorsSharedBrassTint 60': '#fbf8f2',
  'Global/ValueColorsSharedBrownShade 50': '#170e07',
  'Global/ValueColorsSharedBrownShade 40': '#2b1a0e',
  'Global/ValueColorsSharedBrownShade 30': '#50301a',
  'Global/ValueColorsSharedBrownShade 20': '#6c4123',
  'Global/ValueColorsSharedBrownShade 10': '#804d29',
  'Global/ValueColorsSharedBrownPrimary': '#8e562e',
  'Global/ValueColorsSharedBrownTint 10': '#9c663f',
  'Global/ValueColorsSharedBrownTint 20': '#a97652',
  'Global/ValueColorsSharedBrownTint 30': '#bb8f6f',
  'Global/ValueColorsSharedBrownTint 40': '#ddc3b0',
  'Global/ValueColorsSharedBrownTint 50': '#edded3',
  'Global/ValueColorsSharedBrownTint 60': '#faf7f4',
  'Global/ValueColorsSharedDark brownShade 50': '#0c0704',
  'Global/ValueColorsSharedDark brownShade 40': '#170c08',
  'Global/ValueColorsSharedDark brownShade 30': '#2b1710',
  'Global/ValueColorsSharedDark brownShade 20': '#3a1f15',
  'Global/ValueColorsSharedDark brownShade 10': '#452519',
  'Global/ValueColorsSharedDark brownPrimary': '#4d291c',
  'Global/ValueColorsSharedDark brownTint 10': '#623a2b',
  'Global/ValueColorsSharedDark brownTint 20': '#784d3e',
  'Global/ValueColorsSharedDark brownTint 30': '#946b5c',
  'Global/ValueColorsSharedDark brownTint 40': '#caada3',
  'Global/ValueColorsSharedDark brownTint 50': '#e3d2cb',
  'Global/ValueColorsSharedDark brownTint 60': '#f8f3f2',
  'Global/ValueColorsSharedLimeShade 50': '#121b06',
  'Global/ValueColorsSharedLimeShade 40': '#23330b',
  'Global/ValueColorsSharedLimeShade 30': '#405f14',
  'Global/ValueColorsSharedLimeShade 20': '#57811b',
  'Global/ValueColorsSharedLimeShade 10': '#689920',
  'Global/ValueColorsSharedLimePrimary': '#73aa24',
  'Global/ValueColorsSharedLimeTint 10': '#81b437',
  'Global/ValueColorsSharedLimeTint 20': '#90be4c',
  'Global/ValueColorsSharedLimeTint 30': '#a4cc6c',
  'Global/ValueColorsSharedLimeTint 40': '#cfe5af',
  'Global/ValueColorsSharedLimeTint 50': '#e5f1d3',
  'Global/ValueColorsSharedLimeTint 60': '#f8fcf4',
  'Global/ValueColorsSharedForestShade 50': '#0c1501',
  'Global/ValueColorsSharedForestShade 40': '#162702',
  'Global/ValueColorsSharedForestShade 30': '#294903',
  'Global/ValueColorsSharedForestShade 20': '#376304',
  'Global/ValueColorsSharedForestShade 10': '#427505',
  'Global/ValueColorsSharedForestPrimary': '#498205',
  'Global/ValueColorsSharedForestTint 10': '#599116',
  'Global/ValueColorsSharedForestTint 20': '#6ba02b',
  'Global/ValueColorsSharedForestTint 30': '#85b44c',
  'Global/ValueColorsSharedForestTint 40': '#bdd99b',
  'Global/ValueColorsSharedForestTint 50': '#dbebc7',
  'Global/ValueColorsSharedForestTint 60': '#f6faf0',
  'Global/ValueColorsSharedSeafoamShade 50': '#002111',
  'Global/ValueColorsSharedSeafoamShade 40': '#003d20',
  'Global/ValueColorsSharedSeafoamShade 30': '#00723b',
  'Global/ValueColorsSharedSeafoamShade 20': '#009b51',
  'Global/ValueColorsSharedSeafoamShade 10': '#00b85f',
  'Global/ValueColorsSharedSeafoamPrimary': '#00cc6a',
  'Global/ValueColorsSharedSeafoamTint 10': '#19d279',
  'Global/ValueColorsSharedSeafoamTint 20': '#34d889',
  'Global/ValueColorsSharedSeafoamTint 30': '#5ae0a0',
  'Global/ValueColorsSharedSeafoamTint 40': '#a8f0cd',
  'Global/ValueColorsSharedSeafoamTint 50': '#cff7e4',
  'Global/ValueColorsSharedSeafoamTint 60': '#f3fdf8',
  'Global/ValueColorsSharedLight greenShade 50': '#031a02',
  'Global/ValueColorsSharedLight greenShade 40': '#063004',
  'Global/ValueColorsSharedLight greenShade 30': '#0b5a08',
  'Global/ValueColorsSharedLight greenShade 20': '#0e7a0b',
  'Global/ValueColorsSharedLight greenShade 10': '#11910d',
  'Global/ValueColorsSharedLight greenPrimary': '#13a10e',
  'Global/ValueColorsSharedLight greenTint 10': '#27ac22',
  'Global/ValueColorsSharedLight greenTint 20': '#3db838',
  'Global/ValueColorsSharedLight greenTint 30': '#5ec75a',
  'Global/ValueColorsSharedLight greenTint 40': '#a7e3a5',
  'Global/ValueColorsSharedLight greenTint 50': '#cef0cd',
  'Global/ValueColorsSharedLight greenTint 60': '#f2fbf2',
  'Global/ValueColorsSharedGreenPrimary': '#0a7f00',
  'Global/ValueColorsSharedGreenTint 30': '#8dc881',
  'Global/ValueColorsSharedGreenTint 60': '#e2f5e0',
  'Global/ValueColorsSharedDark greenShade 50': '#021102',
  'Global/ValueColorsSharedDark greenShade 40': '#032003',
  'Global/ValueColorsSharedDark greenShade 30': '#063b06',
  'Global/ValueColorsSharedDark greenShade 20': '#085108',
  'Global/ValueColorsSharedDark greenShade 10': '#0a5f0a',
  'Global/ValueColorsSharedDark greenPrimary': '#0b6a0b',
  'Global/ValueColorsSharedDark greenTint 10': '#1a7c1a',
  'Global/ValueColorsSharedDark greenTint 20': '#2d8e2d',
  'Global/ValueColorsSharedDark greenTint 30': '#4da64d',
  'Global/ValueColorsSharedDark greenTint 40': '#9ad29a',
  'Global/ValueColorsSharedDark greenTint 50': '#c6e7c6',
  'Global/ValueColorsSharedDark greenTint 60': '#f0f9f0',
  'Global/ValueColorsSharedLight tealShade 50': '#001d1f',
  'Global/ValueColorsSharedLight tealShade 40': '#00373a',
  'Global/ValueColorsSharedLight tealShade 30': '#00666d',
  'Global/ValueColorsSharedLight tealShade 20': '#008b94',
  'Global/ValueColorsSharedLight tealShade 10': '#00a5af',
  'Global/ValueColorsSharedLight tealPrimary': '#00b7c3',
  'Global/ValueColorsSharedLight tealTint 10': '#18bfca',
  'Global/ValueColorsSharedLight tealTint 20': '#32c8d1',
  'Global/ValueColorsSharedLight tealTint 30': '#58d3db',
  'Global/ValueColorsSharedLight tealTint 40': '#a6e9ed',
  'Global/ValueColorsSharedLight tealTint 50': '#cef3f5',
  'Global/ValueColorsSharedLight tealTint 60': '#f2fcfd',
  'Global/ValueColorsSharedTealShade 50': '#001516',
  'Global/ValueColorsSharedTealShade 40': '#012728',
  'Global/ValueColorsSharedTealShade 30': '#02494c',
  'Global/ValueColorsSharedTealShade 20': '#026467',
  'Global/ValueColorsSharedTealShade 10': '#037679',
  'Global/ValueColorsSharedTealPrimary': '#038387',
  'Global/ValueColorsSharedTealTint 10': '#159195',
  'Global/ValueColorsSharedTealTint 20': '#2aa0a4',
  'Global/ValueColorsSharedTealTint 30': '#4cb4b7',
  'Global/ValueColorsSharedTealTint 40': '#9bd9db',
  'Global/ValueColorsSharedTealTint 50': '#c7ebec',
  'Global/ValueColorsSharedTealTint 60': '#f0fafa',
  'Global/ValueColorsSharedDark tealShade 50': '#001010',
  'Global/ValueColorsSharedDark tealShade 40': '#001f1f',
  'Global/ValueColorsSharedDark tealShade 30': '#003939',
  'Global/ValueColorsSharedDark tealShade 20': '#004e4e',
  'Global/ValueColorsSharedDark tealShade 10': '#005c5c',
  'Global/ValueColorsSharedDark tealPrimary': '#006666',
  'Global/ValueColorsSharedDark tealTint 10': '#0e7878',
  'Global/ValueColorsSharedDark tealTint 20': '#218b8b',
  'Global/ValueColorsSharedDark tealTint 30': '#41a3a3',
  'Global/ValueColorsSharedDark tealTint 40': '#92d1d1',
  'Global/ValueColorsSharedDark tealTint 50': '#c2e7e7',
  'Global/ValueColorsSharedDark tealTint 60': '#eff9f9',
  'Global/ValueColorsSharedCyanShade 50': '#00181e',
  'Global/ValueColorsSharedCyanShade 40': '#002e38',
  'Global/ValueColorsSharedCyanShade 30': '#005669',
  'Global/ValueColorsSharedCyanShade 20': '#00748f',
  'Global/ValueColorsSharedCyanShade 10': '#008aa9',
  'Global/ValueColorsSharedCyanPrimary': '#0099bc',
  'Global/ValueColorsSharedCyanTint 10': '#18a4c4',
  'Global/ValueColorsSharedCyanTint 20': '#31afcc',
  'Global/ValueColorsSharedCyanTint 30': '#56bfd7',
  'Global/ValueColorsSharedCyanTint 40': '#a4deeb',
  'Global/ValueColorsSharedCyanTint 50': '#cdedf4',
  'Global/ValueColorsSharedCyanTint 60': '#f2fafc',
  'Global/ValueColorsSharedSteelShade 50': '#000f12',
  'Global/ValueColorsSharedSteelShade 40': '#001b22',
  'Global/ValueColorsSharedSteelShade 30': '#00333f',
  'Global/ValueColorsSharedSteelShade 20': '#004555',
  'Global/ValueColorsSharedSteelShade 10': '#005265',
  'Global/ValueColorsSharedSteelPrimary': '#005b70',
  'Global/ValueColorsSharedSteelTint 10': '#0f6c81',
  'Global/ValueColorsSharedSteelTint 20': '#237d92',
  'Global/ValueColorsSharedSteelTint 30': '#4496a9',
  'Global/ValueColorsSharedSteelTint 40': '#94c8d4',
  'Global/ValueColorsSharedSteelTint 50': '#c3e1e8',
  'Global/ValueColorsSharedSteelTint 60': '#eff7f9',
  'Global/ValueColorsSharedLight blueShade 50': '#091823',
  'Global/ValueColorsSharedLight blueShade 40': '#112d42',
  'Global/ValueColorsSharedLight blueShade 30': '#20547c',
  'Global/ValueColorsSharedLight blueShade 20': '#2c72a8',
  'Global/ValueColorsSharedLight blueShade 10': '#3487c7',
  'Global/ValueColorsSharedLight bluePrimary': '#3a96dd',
  'Global/ValueColorsSharedLight blueTint 10': '#4fa1e1',
  'Global/ValueColorsSharedLight blueTint 20': '#65ade5',
  'Global/ValueColorsSharedLight blueTint 30': '#83bdeb',
  'Global/ValueColorsSharedLight blueTint 40': '#bfddf5',
  'Global/ValueColorsSharedLight blueTint 50': '#dcedfa',
  'Global/ValueColorsSharedLight blueTint 60': '#f6fafe',
  'Global/ValueColorsSharedBlueShade 50': '#001322',
  'Global/ValueColorsSharedBlueShade 40': '#002440',
  'Global/ValueColorsSharedBlueShade 30': '#004377',
  'Global/ValueColorsSharedBlueShade 20': '#005ba1',
  'Global/ValueColorsSharedBlueShade 10': '#006cbf',
  'Global/ValueColorsSharedBluePrimary': '#0078d4',
  'Global/ValueColorsSharedBlueTint 10': '#1a86d9',
  'Global/ValueColorsSharedBlueTint 20': '#3595de',
  'Global/ValueColorsSharedBlueTint 30': '#5caae5',
  'Global/ValueColorsSharedBlueTint 40': '#a9d3f2',
  'Global/ValueColorsSharedBlueTint 50': '#d0e7f8',
  'Global/ValueColorsSharedBlueTint 60': '#f3f9fd',
  'Global/ValueColorsSharedRoyal blueShade 50': '#000c16',
  'Global/ValueColorsSharedRoyal blueShade 40': '#00172a',
  'Global/ValueColorsSharedRoyal blueShade 30': '#002c4e',
  'Global/ValueColorsSharedRoyal blueShade 20': '#003b6a',
  'Global/ValueColorsSharedRoyal blueShade 10': '#00467e',
  'Global/ValueColorsSharedRoyal bluePrimary': '#004e8c',
  'Global/ValueColorsSharedRoyal blueTint 10': '#125e9a',
  'Global/ValueColorsSharedRoyal blueTint 20': '#286fa8',
  'Global/ValueColorsSharedRoyal blueTint 30': '#4a89ba',
  'Global/ValueColorsSharedRoyal blueTint 40': '#9abfdc',
  'Global/ValueColorsSharedRoyal blueTint 50': '#c7dced',
  'Global/ValueColorsSharedRoyal blueTint 60': '#f0f6fa',
  'Global/ValueColorsSharedDark blueShade 50': '#000910',
  'Global/ValueColorsSharedDark blueShade 40': '#00111f',
  'Global/ValueColorsSharedDark blueShade 30': '#002039',
  'Global/ValueColorsSharedDark blueShade 20': '#002b4e',
  'Global/ValueColorsSharedDark blueShade 10': '#00335c',
  'Global/ValueColorsSharedDark bluePrimary': '#003966',
  'Global/ValueColorsSharedDark blueTint 10': '#0e4a78',
  'Global/ValueColorsSharedDark blueTint 20': '#215c8b',
  'Global/ValueColorsSharedDark blueTint 30': '#4178a3',
  'Global/ValueColorsSharedDark blueTint 40': '#92b5d1',
  'Global/ValueColorsSharedDark blueTint 50': '#c2d6e7',
  'Global/ValueColorsSharedDark blueTint 60': '#eff4f9',
  'Global/ValueColorsSharedCornflowerShade 50': '#0d1126',
  'Global/ValueColorsSharedCornflowerShade 40': '#182047',
  'Global/ValueColorsSharedCornflowerShade 30': '#2c3c85',
  'Global/ValueColorsSharedCornflowerShade 20': '#3c51b4',
  'Global/ValueColorsSharedCornflowerShade 10': '#4760d5',
  'Global/ValueColorsSharedCornflowerPrimary': '#4f6bed',
  'Global/ValueColorsSharedCornflowerTint 10': '#637cef',
  'Global/ValueColorsSharedCornflowerTint 20': '#778df1',
  'Global/ValueColorsSharedCornflowerTint 30': '#93a4f4',
  'Global/ValueColorsSharedCornflowerTint 40': '#c8d1fa',
  'Global/ValueColorsSharedCornflowerTint 50': '#e1e6fc',
  'Global/ValueColorsSharedCornflowerTint 60': '#f7f9fe',
  'Global/ValueColorsSharedNavyShade 50': '#00061d',
  'Global/ValueColorsSharedNavyShade 40': '#000c36',
  'Global/ValueColorsSharedNavyShade 30': '#001665',
  'Global/ValueColorsSharedNavyShade 20': '#001e89',
  'Global/ValueColorsSharedNavyShade 10': '#0023a2',
  'Global/ValueColorsSharedNavyPrimary': '#0027b4',
  'Global/ValueColorsSharedNavyTint 10': '#173bbd',
  'Global/ValueColorsSharedNavyTint 20': '#3050c6',
  'Global/ValueColorsSharedNavyTint 30': '#546fd2',
  'Global/ValueColorsSharedNavyTint 40': '#a3b2e8',
  'Global/ValueColorsSharedNavyTint 50': '#ccd5f3',
  'Global/ValueColorsSharedNavyTint 60': '#f2f4fc',
  'Global/ValueColorsSharedLavenderShade 50': '#120f25',
  'Global/ValueColorsSharedLavenderShade 40': '#221d46',
  'Global/ValueColorsSharedLavenderShade 30': '#3f3682',
  'Global/ValueColorsSharedLavenderShade 20': '#5649b0',
  'Global/ValueColorsSharedLavenderShade 10': '#6656d1',
  'Global/ValueColorsSharedLavenderPrimary': '#7160e8',
  'Global/ValueColorsSharedLavenderTint 10': '#8172eb',
  'Global/ValueColorsSharedLavenderTint 20': '#9184ee',
  'Global/ValueColorsSharedLavenderTint 30': '#a79cf1',
  'Global/ValueColorsSharedLavenderTint 40': '#d2ccf8',
  'Global/ValueColorsSharedLavenderTint 50': '#e7e4fb',
  'Global/ValueColorsSharedLavenderTint 60': '#f9f8fe',
  'Global/ValueColorsSharedPurpleShade 50': '#0f0717',
  'Global/ValueColorsSharedPurpleShade 40': '#1c0e2b',
  'Global/ValueColorsSharedPurpleShade 30': '#341a51',
  'Global/ValueColorsSharedPurpleShade 20': '#46236e',
  'Global/ValueColorsSharedPurpleShade 10': '#532982',
  'Global/ValueColorsSharedPurplePrimary': '#5c2e91',
  'Global/ValueColorsSharedPurpleTint 10': '#6b3f9e',
  'Global/ValueColorsSharedPurpleTint 20': '#7c52ab',
  'Global/ValueColorsSharedPurpleTint 30': '#9470bd',
  'Global/ValueColorsSharedPurpleTint 40': '#c6b1de',
  'Global/ValueColorsSharedPurpleTint 50': '#e0d3ed',
  'Global/ValueColorsSharedPurpleTint 60': '#f7f4fb',
  'Global/ValueColorsSharedDark purpleShade 50': '#0a0411',
  'Global/ValueColorsSharedDark purpleShade 40': '#130820',
  'Global/ValueColorsSharedDark purpleShade 30': '#240f3c',
  'Global/ValueColorsSharedDark purpleShade 20': '#311552',
  'Global/ValueColorsSharedDark purpleShade 10': '#3a1861',
  'Global/ValueColorsSharedDark purplePrimary': '#401b6c',
  'Global/ValueColorsSharedDark purpleTint 10': '#512b7e',
  'Global/ValueColorsSharedDark purpleTint 20': '#633e8f',
  'Global/ValueColorsSharedDark purpleTint 30': '#7e5ca7',
  'Global/ValueColorsSharedDark purpleTint 40': '#b9a3d3',
  'Global/ValueColorsSharedDark purpleTint 50': '#d8cce7',
  'Global/ValueColorsSharedDark purpleTint 60': '#f5f2f9',
  'Global/ValueColorsSharedOrchidShade 50': '#16101d',
  'Global/ValueColorsSharedOrchidShade 40': '#281e37',
  'Global/ValueColorsSharedOrchidShade 30': '#4c3867',
  'Global/ValueColorsSharedOrchidShade 20': '#674c8c',
  'Global/ValueColorsSharedOrchidShade 10': '#795aa6',
  'Global/ValueColorsSharedOrchidPrimary': '#8764b8',
  'Global/ValueColorsSharedOrchidTint 10': '#9373c0',
  'Global/ValueColorsSharedOrchidTint 20': '#a083c9',
  'Global/ValueColorsSharedOrchidTint 30': '#b29ad4',
  'Global/ValueColorsSharedOrchidTint 40': '#d7caea',
  'Global/ValueColorsSharedOrchidTint 50': '#e9e2f4',
  'Global/ValueColorsSharedOrchidTint 60': '#f9f8fc',
  'Global/ValueColorsSharedGrapeShade 50': '#160418',
  'Global/ValueColorsSharedGrapeShade 40': '#29072e',
  'Global/ValueColorsSharedGrapeShade 30': '#4c0d55',
  'Global/ValueColorsSharedGrapeShade 20': '#671174',
  'Global/ValueColorsSharedGrapeShade 10': '#7a1589',
  'Global/ValueColorsSharedGrapePrimary': '#881798',
  'Global/ValueColorsSharedGrapeTint 10': '#952aa4',
  'Global/ValueColorsSharedGrapeTint 20': '#a33fb1',
  'Global/ValueColorsSharedGrapeTint 30': '#b55fc1',
  'Global/ValueColorsSharedGrapeTint 40': '#d9a7e0',
  'Global/ValueColorsSharedGrapeTint 50': '#eaceef',
  'Global/ValueColorsSharedGrapeTint 60': '#faf2fb',
  'Global/ValueColorsSharedBerryShade 50': '#1f091d',
  'Global/ValueColorsSharedBerryShade 40': '#3a1136',
  'Global/ValueColorsSharedBerryShade 30': '#6d2064',
  'Global/ValueColorsSharedBerryShade 20': '#932b88',
  'Global/ValueColorsSharedBerryShade 10': '#af33a1',
  'Global/ValueColorsSharedBerryPrimary': '#c239b3',
  'Global/ValueColorsSharedBerryTint 10': '#c94cbc',
  'Global/ValueColorsSharedBerryTint 20': '#d161c4',
  'Global/ValueColorsSharedBerryTint 30': '#da7ed0',
  'Global/ValueColorsSharedBerryTint 40': '#edbbe7',
  'Global/ValueColorsSharedBerryTint 50': '#f5daf2',
  'Global/ValueColorsSharedBerryTint 60': '#fdf5fc',
  'Global/ValueColorsSharedLilacShade 50': '#1c0b1f',
  'Global/ValueColorsSharedLilacShade 40': '#35153a',
  'Global/ValueColorsSharedLilacShade 30': '#63276d',
  'Global/ValueColorsSharedLilacShade 20': '#863593',
  'Global/ValueColorsSharedLilacShade 10': '#9f3faf',
  'Global/ValueColorsSharedLilacPrimary': '#b146c2',
  'Global/ValueColorsSharedLilacTint 10': '#ba58c9',
  'Global/ValueColorsSharedLilacTint 20': '#c36bd1',
  'Global/ValueColorsSharedLilacTint 30': '#cf87da',
  'Global/ValueColorsSharedLilacTint 40': '#e6bfed',
  'Global/ValueColorsSharedLilacTint 50': '#f2dcf5',
  'Global/ValueColorsSharedLilacTint 60': '#fcf6fd',
  'Global/ValueColorsSharedPinkShade 50': '#24091b',
  'Global/ValueColorsSharedPinkShade 40': '#441232',
  'Global/ValueColorsSharedPinkShade 30': '#80215d',
  'Global/ValueColorsSharedPinkShade 20': '#ad2d7e',
  'Global/ValueColorsSharedPinkShade 10': '#cd3595',
  'Global/ValueColorsSharedPinkPrimary': '#e43ba6',
  'Global/ValueColorsSharedPinkTint 10': '#e750b0',
  'Global/ValueColorsSharedPinkTint 20': '#ea66ba',
  'Global/ValueColorsSharedPinkTint 30': '#ef85c8',
  'Global/ValueColorsSharedPinkTint 40': '#f7c0e3',
  'Global/ValueColorsSharedPinkTint 50': '#fbddf0',
  'Global/ValueColorsSharedPinkTint 60': '#fef6fb',
  'Global/ValueColorsSharedHot pinkShade 50': '#240016',
  'Global/ValueColorsSharedHot pinkShade 40': '#44002a',
  'Global/ValueColorsSharedHot pinkShade 30': '#7f004e',
  'Global/ValueColorsSharedHot pinkShade 20': '#ad006a',
  'Global/ValueColorsSharedHot pinkShade 10': '#cc007e',
  'Global/ValueColorsSharedHot pinkPrimary': '#e3008c',
  'Global/ValueColorsSharedHot pinkTint 10': '#e61c99',
  'Global/ValueColorsSharedHot pinkTint 20': '#ea38a6',
  'Global/ValueColorsSharedHot pinkTint 30': '#ee5fb7',
  'Global/ValueColorsSharedHot pinkTint 40': '#f7adda',
  'Global/ValueColorsSharedHot pinkTint 50': '#fbd2eb',
  'Global/ValueColorsSharedHot pinkTint 60': '#fef4fa',
  'Global/ValueColorsSharedMagentaShade 50': '#1f0013',
  'Global/ValueColorsSharedMagentaShade 40': '#390024',
  'Global/ValueColorsSharedMagentaShade 30': '#6b0043',
  'Global/ValueColorsSharedMagentaShade 20': '#91005a',
  'Global/ValueColorsSharedMagentaShade 10': '#ac006b',
  'Global/ValueColorsSharedMagentaPrimary': '#bf0077',
  'Global/ValueColorsSharedMagentaTint 10': '#c71885',
  'Global/ValueColorsSharedMagentaTint 20': '#ce3293',
  'Global/ValueColorsSharedMagentaTint 30': '#d957a8',
  'Global/ValueColorsSharedMagentaTint 40': '#eca5d1',
  'Global/ValueColorsSharedMagentaTint 50': '#f5cee6',
  'Global/ValueColorsSharedMagentaTint 60': '#fcf2f9',
  'Global/ValueColorsSharedPlumShade 50': '#13000c',
  'Global/ValueColorsSharedPlumShade 40': '#240017',
  'Global/ValueColorsSharedPlumShade 30': '#43002b',
  'Global/ValueColorsSharedPlumShade 20': '#5a003b',
  'Global/ValueColorsSharedPlumShade 10': '#6b0045',
  'Global/ValueColorsSharedPlumPrimary': '#77004d',
  'Global/ValueColorsSharedPlumTint 10': '#87105d',
  'Global/ValueColorsSharedPlumTint 20': '#98246f',
  'Global/ValueColorsSharedPlumTint 30': '#ad4589',
  'Global/ValueColorsSharedPlumTint 40': '#d696c0',
  'Global/ValueColorsSharedPlumTint 50': '#e9c4dc',
  'Global/ValueColorsSharedPlumTint 60': '#faf0f6',
  'Global/ValueColorsSharedBeigeShade 50': '#141313',
  'Global/ValueColorsSharedBeigeShade 40': '#252323',
  'Global/ValueColorsSharedBeigeShade 30': '#444241',
  'Global/ValueColorsSharedBeigeShade 20': '#5d5958',
  'Global/ValueColorsSharedBeigeShade 10': '#6e6968',
  'Global/ValueColorsSharedBeigePrimary': '#7a7574',
  'Global/ValueColorsSharedBeigeTint 10': '#8a8584',
  'Global/ValueColorsSharedBeigeTint 20': '#9a9594',
  'Global/ValueColorsSharedBeigeTint 30': '#afabaa',
  'Global/ValueColorsSharedBeigeTint 40': '#d7d4d4',
  'Global/ValueColorsSharedBeigeTint 50': '#eae8e8',
  'Global/ValueColorsSharedBeigeTint 60': '#faf9f9',
  'Global/ValueColorsSharedMinkShade 50': '#0f0e0e',
  'Global/ValueColorsSharedMinkShade 40': '#1c1b1a',
  'Global/ValueColorsSharedMinkShade 30': '#343231',
  'Global/ValueColorsSharedMinkShade 20': '#474443',
  'Global/ValueColorsSharedMinkShade 10': '#54514f',
  'Global/ValueColorsSharedMinkPrimary': '#5d5a58',
  'Global/ValueColorsSharedMinkTint 10': '#706d6b',
  'Global/ValueColorsSharedMinkTint 20': '#84817e',
  'Global/ValueColorsSharedMinkTint 30': '#9e9b99',
  'Global/ValueColorsSharedMinkTint 40': '#cecccb',
  'Global/ValueColorsSharedMinkTint 50': '#e5e4e3',
  'Global/ValueColorsSharedMinkTint 60': '#f8f8f8',
  'Global/ValueColorsSharedSilverShade 50': '#151818',
  'Global/ValueColorsSharedSilverShade 40': '#282d2e',
  'Global/ValueColorsSharedSilverShade 30': '#4a5356',
  'Global/ValueColorsSharedSilverShade 20': '#657174',
  'Global/ValueColorsSharedSilverShade 10': '#78868a',
  'Global/ValueColorsSharedSilverPrimary': '#859599',
  'Global/ValueColorsSharedSilverTint 10': '#92a1a5',
  'Global/ValueColorsSharedSilverTint 20': '#a0aeb1',
  'Global/ValueColorsSharedSilverTint 30': '#b3bfc2',
  'Global/ValueColorsSharedSilverTint 40': '#d8dfe0',
  'Global/ValueColorsSharedSilverTint 50': '#eaeeef',
  'Global/ValueColorsSharedSilverTint 60': '#fafbfb',
  'Global/ValueColorsSharedPlatinumShade 50': '#111314',
  'Global/ValueColorsSharedPlatinumShade 40': '#1f2426',
  'Global/ValueColorsSharedPlatinumShade 30': '#3b4447',
  'Global/ValueColorsSharedPlatinumShade 20': '#505c60',
  'Global/ValueColorsSharedPlatinumShade 10': '#5f6d71',
  'Global/ValueColorsSharedPlatinumPrimary': '#69797e',
  'Global/ValueColorsSharedPlatinumTint 10': '#79898d',
  'Global/ValueColorsSharedPlatinumTint 20': '#89989d',
  'Global/ValueColorsSharedPlatinumTint 30': '#a0adb2',
  'Global/ValueColorsSharedPlatinumTint 40': '#cdd6d8',
  'Global/ValueColorsSharedPlatinumTint 50': '#e4e9ea',
  'Global/ValueColorsSharedPlatinumTint 60': '#f8f9fa',
  'Global/ValueColorsSharedAnchorShade 50': '#090a0b',
  'Global/ValueColorsSharedAnchorShade 40': '#111315',
  'Global/ValueColorsSharedAnchorShade 30': '#202427',
  'Global/ValueColorsSharedAnchorShade 20': '#2b3135',
  'Global/ValueColorsSharedAnchorShade 10': '#333a3f',
  'Global/ValueColorsSharedAnchorPrimary': '#394146',
  'Global/ValueColorsSharedAnchorTint 10': '#4d565c',
  'Global/ValueColorsSharedAnchorTint 20': '#626c72',
  'Global/ValueColorsSharedAnchorTint 30': '#808a90',
  'Global/ValueColorsSharedAnchorTint 40': '#bcc3c7',
  'Global/ValueColorsSharedAnchorTint 50': '#dbdfe1',
  'Global/ValueColorsSharedAnchorTint 60': '#f6f7f8',
  'Global/ValueColorsSharedCharcoalShade 50': '#090909',
  'Global/ValueColorsSharedCharcoalShade 40': '#111111',
  'Global/ValueColorsSharedCharcoalShade 30': '#202020',
  'Global/ValueColorsSharedCharcoalShade 20': '#2b2b2b',
  'Global/ValueColorsSharedCharcoalShade 10': '#333333',
  'Global/ValueColorsSharedCharcoalPrimary': '#393939',
  'Global/ValueColorsSharedCharcoalTint 10': '#515151',
  'Global/ValueColorsSharedCharcoalTint 20': '#686868',
  'Global/ValueColorsSharedCharcoalTint 30': '#888888',
  'Global/ValueColorsSharedCharcoalTint 40': '#c4c4c4',
  'Global/ValueColorsSharedCharcoalTint 50': '#dfdfdf',
  'Global/ValueColorsSharedCharcoalTint 60': '#f7f7f7',
  'Global/ValueColorsSharedInformationPrimary': '#007e73',
  'Global/ValueColorsSharedInformationTint 30': '#8ad0ca',
  'Global/ValueColorsSharedInformationTint 60': '#e8f8f7',
  'Global/ValueColorsSharedInformationTint 40': '#abe6e1',
  'Global/ValueColorsSharedInformationTint 50': '#caedea',
  'Global/ValueColorsSharedInformationTint 20': '#59b9b1',
  'Global/ValueColorsSharedInformationTint 10': '#029b8d',
  'Global/ValueColorsSharedInformationShade 10': '#00554e',
  'Global/ValueColorsSharedInformationShade 20': '#003e39',
  'Global/ValueColorsAlphaWhite0': '#ffffff00',
  'Global/ValueColorsAlphaWhite5': '#ffffff0d',
  'Global/ValueColorsAlphaWhite10': '#ffffff1a',
  'Global/ValueColorsAlphaWhite20': '#ffffff33',
  'Global/ValueColorsAlphaWhite30': '#ffffff4d',
  'Global/ValueColorsAlphaWhite40': '#ffffff66',
  'Global/ValueColorsAlphaWhite50': '#ffffff80',
  'Global/ValueColorsAlphaWhite60': '#ffffff99',
  'Global/ValueColorsAlphaWhite70': '#ffffffb3',
  'Global/ValueColorsAlphaWhite80': '#ffffffcc',
  'Global/ValueColorsAlphaWhite90': '#ffffffe6',
  'Global/ValueColorsAlphaBlack0': '#00000000',
  'Global/ValueColorsAlphaBlack5': '#0000000d',
  'Global/ValueColorsAlphaBlack10': '#0000001a',
  'Global/ValueColorsAlphaBlack20': '#00000033',
  'Global/ValueColorsAlphaBlack30': '#0000004d',
  'Global/ValueColorsAlphaBlack40': '#00000066',
  'Global/ValueColorsAlphaBlack50': '#00000080',
  'Global/ValueColorsAlphaBlack60': '#00000099',
  'Global/ValueColorsAlphaBlack70': '#000000b3',
  'Global/ValueColorsAlphaBlack80': '#000000cc',
  'Global/ValueColorsAlphaBlack90': '#000000e6',
  'Global/ValueColorsAlphaBrand-105': '#0f1a380d',
  'Global/ValueColorsAlphaBrand-1010': '#0f1a381a',
  'Global/ValueColorsAlphaBrand-1020': '#0f1a3833',
  'Global/ValueColorsAlphaBrand-1030': '#0f1a384d',
  'Global/ValueColorsAlphaBrand-1040': '#0f1a3866',
  'Global/ValueColorsAlphaBrand-1050': '#0f1a3880',
  'Global/ValueColorsAlphaBrand-1060': '#0f1a3899',
  'Global/ValueColorsAlphaBrand-1070': '#0f1a38b3',
  'Global/ValueColorsAlphaBrand-1080': '#0f1a38cc',
  'Global/ValueColorsAlphaBrand-1090': '#0f1a38e6',
  'Global/ValueColorsData vizCoreBlue': '{brand-60}',
  'Global/ValueColorsData vizCoreGray': '#a2aeb5',
  'Global/ValueColorsData vizCoreRed': '#b94431',
  'Global/ValueColorsData vizCoreTeal': '#05a3b1',
  'Global/ValueColorsData vizCoreOcean': '#0b3873',
  'Global/ValueColorsData vizCoreGreen': '#529c74',
  'Global/ValueColorsData vizCoreYellow': '#df9f37',
  'Global/ValueColorsData vizSemanticLight bkgdPositive': '#529c74',
  'Global/ValueColorsData vizSemanticLight bkgdNotice': '#df9f37',
  'Global/ValueColorsData vizSemanticLight bkgdNegative': '#b94431',
  'Global/ValueColorsData vizSemanticDark bkgdPositive': '#37bb65',
  'Global/ValueColorsData vizSemanticDark bkgdNegative': '#cc2e48',
  'Global/ValueColorsData vizSemanticDark bkgdNotice': '#df9f37',
  'Global/ValueColorsData vizSequentialBlue400': '#133a77',
  'Global/ValueColorsData vizSequentialBlue300': '{brand-60}',
  'Global/ValueColorsData vizSequentialBlue200': '#6f94ce',
  'Global/ValueColorsData vizSequentialBlue100': '#9ebbe6',
  'Global/ValueColorsData vizSequentialGray400': '#36383a',
  'Global/ValueColorsData vizSequentialGray300': '#646b6f',
  'Global/ValueColorsData vizSequentialGray200': '#a2aeb5',
  'Global/ValueColorsData vizSequentialGray100': '#d1dbe2',
  'Global/ValueColorsData vizSequentialRed400': '#460f05',
  'Global/ValueColorsData vizSequentialRed300': '#8c2e20',
  'Global/ValueColorsData vizSequentialRed200': '#b94431',
  'Global/ValueColorsData vizSequentialRed100': '#cf8a7e',
  'Global/ValueColorsData vizSequentialTeal400': '#063f44',
  'Global/ValueColorsData vizSequentialTeal300': '#136a73',
  'Global/ValueColorsData vizSequentialTeal200': '#05a3b1',
  'Global/ValueColorsData vizSequentialTeal100': '#80d0d7',
  'Global/ValueColorsData vizSequentialOcean400': '#071e39',
  'Global/ValueColorsData vizSequentialOcean300': '#0b3873',
  'Global/ValueColorsData vizSequentialOcean200': '#5a74cb',
  'Global/ValueColorsData vizSequentialOcean100': '#9ab2ff',
  'Global/ValueColorsData vizSequentialGreen400': '#08362a',
  'Global/ValueColorsData vizSequentialGreen300': '#1d6953',
  'Global/ValueColorsData vizSequentialGreen200': '#529c74',
  'Global/ValueColorsData vizSequentialGreen100': '#87c3a9',
  'Global/ValueColorsData vizSequentialYellow400': '#563b10',
  'Global/ValueColorsData vizSequentialYellow300': '#a06a14',
  'Global/ValueColorsData vizSequentialYellow200': '#df9f37',
  'Global/ValueColorsData vizSequentialYellow100': '#ffd592',
  'Global/ValueColorsBrandBrand-10': '#0f1a38',
  'Global/ValueColorsBrandBrand-20': '#041e47',
  'Global/ValueColorsBrandBrand-30': '#052c69',
  'Global/ValueColorsBrandBrand-40': '#0c3069',
  'Global/ValueColorsBrandBrand-50': '#19458b',
  'Global/ValueColorsBrandBrand-60': '#295cad',
  'Global/ValueColorsBrandBrand-70': '#3e76cf',
  'Global/ValueColorsBrandBrand-80': '#5692f1',
  'Global/ValueColorsBrandBrand-90': '#80b1ff',
  'Global/ValueColorsBrandBrand-100': '#a5c8ff',
  'Global/ValueColorsBrandBrand-110': '#a5c8ff',
  'Global/ValueColorsBrandBrand-120': '#eef5ff',
  'Global/ValueColorsBrandBrand-130': '#f5f9ff',
  'Brand/Brand 1Brand-10': '#0f1a38',
  'Brand/Brand 1Brand-20': '#041e47',
  'Brand/Brand 1Brand-30': '#052c69',
  'Brand/Brand 1Brand-40': '#0c3069',
  'Brand/Brand 1Brand-50': '#19458b',
  'Brand/Brand 1Brand-60': '#295cad',
  'Brand/Brand 1Brand-70': '#3e76cf',
  'Brand/Brand 1Brand-80': '#5692f1',
  'Brand/Brand 1Brand-90': '#80b1ff',
  'Brand/Brand 1Brand-100': '#a5c8ff',
  'Brand/Brand 1Brand-110': '#cadeff',
  'Brand/Brand 1Brand-120': '#eef5ff',
  'Brand/Brand 1Brand-130': '#f5f9ff',
  'Arrow position/Above startAbove-start': 'true',
  'Arrow position/Above startAbove-middle': 'false',
  'Arrow position/Above startAbove-end': 'false',
  'Arrow position/Above startBefore-top': 'false',
  'Arrow position/Above startBefore-center': 'false',
  'Arrow position/Above startBefore-bottom': 'false',
  'Arrow position/Above startAfter-top': 'false',
  'Arrow position/Above startAfter-center': 'false',
  'Arrow position/Above startAfter-bottom': 'false',
  'Arrow position/Above startBottom-start': 'false',
  'Arrow position/Above startBottom-center': 'false',
  'Arrow position/Above startBottom-end': 'false',
  'Arrow position/Above middleAbove-start': 'false',
  'Arrow position/Above middleAbove-middle': 'true',
  'Arrow position/Above middleAbove-end': 'false',
  'Arrow position/Above middleBefore-top': 'false',
  'Arrow position/Above middleBefore-center': 'false',
  'Arrow position/Above middleBefore-bottom': 'false',
  'Arrow position/Above middleAfter-top': 'false',
  'Arrow position/Above middleAfter-center': 'false',
  'Arrow position/Above middleAfter-bottom': 'false',
  'Arrow position/Above middleBottom-start': 'false',
  'Arrow position/Above middleBottom-center': 'false',
  'Arrow position/Above middleBottom-end': 'false',
  'Arrow position/Above endAbove-start': 'false',
  'Arrow position/Above endAbove-middle': 'false',
  'Arrow position/Above endAbove-end': 'true',
  'Arrow position/Above endBefore-top': 'false',
  'Arrow position/Above endBefore-center': 'false',
  'Arrow position/Above endBefore-bottom': 'false',
  'Arrow position/Above endAfter-top': 'false',
  'Arrow position/Above endAfter-center': 'false',
  'Arrow position/Above endAfter-bottom': 'false',
  'Arrow position/Above endBottom-start': 'false',
  'Arrow position/Above endBottom-center': 'false',
  'Arrow position/Above endBottom-end': 'false',
  'Arrow position/Before topAbove-start': 'false',
  'Arrow position/Before topAbove-middle': 'false',
  'Arrow position/Before topAbove-end': 'false',
  'Arrow position/Before topBefore-top': 'true',
  'Arrow position/Before topBefore-center': 'false',
  'Arrow position/Before topBefore-bottom': 'false',
  'Arrow position/Before topAfter-top': 'false',
  'Arrow position/Before topAfter-center': 'false',
  'Arrow position/Before topAfter-bottom': 'false',
  'Arrow position/Before topBottom-start': 'false',
  'Arrow position/Before topBottom-center': 'false',
  'Arrow position/Before topBottom-end': 'false',
  'Arrow position/Before middleAbove-start': 'false',
  'Arrow position/Before middleAbove-middle': 'false',
  'Arrow position/Before middleAbove-end': 'false',
  'Arrow position/Before middleBefore-top': 'false',
  'Arrow position/Before middleBefore-center': 'true',
  'Arrow position/Before middleBefore-bottom': 'false',
  'Arrow position/Before middleAfter-top': 'false',
  'Arrow position/Before middleAfter-center': 'false',
  'Arrow position/Before middleAfter-bottom': 'false',
  'Arrow position/Before middleBottom-start': 'false',
  'Arrow position/Before middleBottom-center': 'false',
  'Arrow position/Before middleBottom-end': 'false',
  'Arrow position/Before bottomAbove-start': 'false',
  'Arrow position/Before bottomAbove-middle': 'false',
  'Arrow position/Before bottomAbove-end': 'false',
  'Arrow position/Before bottomBefore-top': 'false',
  'Arrow position/Before bottomBefore-center': 'false',
  'Arrow position/Before bottomBefore-bottom': 'true',
  'Arrow position/Before bottomAfter-top': 'false',
  'Arrow position/Before bottomAfter-center': 'false',
  'Arrow position/Before bottomAfter-bottom': 'false',
  'Arrow position/Before bottomBottom-start': 'false',
  'Arrow position/Before bottomBottom-center': 'false',
  'Arrow position/Before bottomBottom-end': 'false',
  'Arrow position/After topAbove-start': 'false',
  'Arrow position/After topAbove-middle': 'false',
  'Arrow position/After topAbove-end': 'false',
  'Arrow position/After topBefore-top': 'false',
  'Arrow position/After topBefore-center': 'false',
  'Arrow position/After topBefore-bottom': 'false',
  'Arrow position/After topAfter-top': 'true',
  'Arrow position/After topAfter-center': 'false',
  'Arrow position/After topAfter-bottom': 'false',
  'Arrow position/After topBottom-start': 'false',
  'Arrow position/After topBottom-center': 'false',
  'Arrow position/After topBottom-end': 'false',
  'Arrow position/After middleAbove-start': 'false',
  'Arrow position/After middleAbove-middle': 'false',
  'Arrow position/After middleAbove-end': 'false',
  'Arrow position/After middleBefore-top': 'false',
  'Arrow position/After middleBefore-center': 'false',
  'Arrow position/After middleBefore-bottom': 'false',
  'Arrow position/After middleAfter-top': 'false',
  'Arrow position/After middleAfter-center': 'true',
  'Arrow position/After middleAfter-bottom': 'false',
  'Arrow position/After middleBottom-start': 'false',
  'Arrow position/After middleBottom-center': 'false',
  'Arrow position/After middleBottom-end': 'false',
  'Arrow position/After bottomAbove-start': 'false',
  'Arrow position/After bottomAbove-middle': 'false',
  'Arrow position/After bottomAbove-end': 'false',
  'Arrow position/After bottomBefore-top': 'false',
  'Arrow position/After bottomBefore-center': 'false',
  'Arrow position/After bottomBefore-bottom': 'false',
  'Arrow position/After bottomAfter-top': 'false',
  'Arrow position/After bottomAfter-center': 'false',
  'Arrow position/After bottomAfter-bottom': 'true',
  'Arrow position/After bottomBottom-start': 'false',
  'Arrow position/After bottomBottom-center': 'false',
  'Arrow position/After bottomBottom-end': 'false',
  'Arrow position/Bottom startAbove-start': 'false',
  'Arrow position/Bottom startAbove-middle': 'false',
  'Arrow position/Bottom startAbove-end': 'false',
  'Arrow position/Bottom startBefore-top': 'false',
  'Arrow position/Bottom startBefore-center': 'false',
  'Arrow position/Bottom startBefore-bottom': 'false',
  'Arrow position/Bottom startAfter-top': 'false',
  'Arrow position/Bottom startAfter-center': 'false',
  'Arrow position/Bottom startAfter-bottom': 'false',
  'Arrow position/Bottom startBottom-start': 'true',
  'Arrow position/Bottom startBottom-center': 'false',
  'Arrow position/Bottom startBottom-end': 'false',
  'Arrow position/Bottom middleAbove-start': 'false',
  'Arrow position/Bottom middleAbove-middle': 'false',
  'Arrow position/Bottom middleAbove-end': 'false',
  'Arrow position/Bottom middleBefore-top': 'false',
  'Arrow position/Bottom middleBefore-center': 'false',
  'Arrow position/Bottom middleBefore-bottom': 'false',
  'Arrow position/Bottom middleAfter-top': 'false',
  'Arrow position/Bottom middleAfter-center': 'false',
  'Arrow position/Bottom middleAfter-bottom': 'false',
  'Arrow position/Bottom middleBottom-start': 'false',
  'Arrow position/Bottom middleBottom-center': 'true',
  'Arrow position/Bottom middleBottom-end': 'false',
  'Arrow position/Bottom endAbove-start': 'false',
  'Arrow position/Bottom endAbove-middle': 'false',
  'Arrow position/Bottom endAbove-end': 'false',
  'Arrow position/Bottom endBefore-top': 'false',
  'Arrow position/Bottom endBefore-center': 'false',
  'Arrow position/Bottom endBefore-bottom': 'false',
  'Arrow position/Bottom endAfter-top': 'false',
  'Arrow position/Bottom endAfter-center': 'false',
  'Arrow position/Bottom endAfter-bottom': 'false',
  'Arrow position/Bottom endBottom-start': 'false',
  'Arrow position/Bottom endBottom-center': 'false',
  'Arrow position/Bottom endBottom-end': 'true',
  'Arrow position/NoneAbove-start': 'false',
  'Arrow position/NoneAbove-middle': 'false',
  'Arrow position/NoneAbove-end': 'false',
  'Arrow position/NoneBefore-top': 'false',
  'Arrow position/NoneBefore-center': 'false',
  'Arrow position/NoneBefore-bottom': 'false',
  'Arrow position/NoneAfter-top': 'false',
  'Arrow position/NoneAfter-center': 'false',
  'Arrow position/NoneAfter-bottom': 'false',
  'Arrow position/NoneBottom-start': 'false',
  'Arrow position/NoneBottom-center': 'false',
  'Arrow position/NoneBottom-end': 'false',
  'Typography/BaseFont-familyBase': 'Segoe UI',
  'Typography/BaseWeightFontWeightRegular': 'Regular',
  'Typography/BaseWeightFontWeightMedium': 'Medium',
  'Typography/BaseWeightFontWeightSemibold': 'Semibold',
  'Typography/BaseWeightFontWeightBold': 'Bold',
  'Typography/BaseWeightFontWeightSemilight': 'Semilight',
  'Typography/BaseWeightFontWeightLight': 'Light',
  'Typography/BaseFontFamilyBase': 'Segoe UI',
  'Typography/BaseFontWeightRegular': 'Regular',
  'Typography/BaseFontWeightSemibold': 'Semibold',
  'Typography/BaseFontWeightBold': 'Bold',
  'Typography/BaseFontWeightSemilight': 'Semilight',
  'Typography/BaseFontWeightLight': 'Light',
  'Popover size/MediumPopover-padding-vertical': '{spacingVertical.LNudge}',
  'Popover size/MediumPopover-padding-horizontal': '{spacingHorizontal.LNudge}',
  'Popover size/SmallPopover-padding-vertical': '{spacingVertical.M}',
  'Popover size/SmallPopover-padding-horizontal': '{spacingHorizontal.M}',
  'Popover size/LargePopover-padding-vertical': '{spacingVertical.XL}',
  'Popover size/LargePopover-padding-horizontal': '{spacingHorizontal.XL}',
  'Card padding/MediumCard-horizontal': '{spacingHorizontal.M}',
  'Card padding/MediumCard-vertical': '{spacingVertical.M}',
  'Card padding/MediumCard-gap': '{spacingHorizontal.MNudge}',
  'Card padding/MediumCard-corner-radius': '{borderRadius.Medium}',
  'Card padding/SmallCard-horizontal': '{spacingHorizontal.S}',
  'Card padding/SmallCard-vertical': '{spacingVertical.MNudge}',
  'Card padding/SmallCard-gap': '{spacingHorizontal.MNudge}',
  'Card padding/SmallCard-corner-radius': '{borderRadius.Medium}',
  'Card padding/LargeCard-horizontal': '{spacingHorizontal.L}',
  'Card padding/LargeCard-vertical': '{spacingVertical.L}',
  'Card padding/LargeCard-gap': '{spacingHorizontal.M}',
  'Card padding/LargeCard-corner-radius': '{borderRadius.Medium}',
  'Button shape/Rounded (Default)Button-corner-radius': '{borderRadius.Small}',
  'Button shape/Rounded (Default)Button-image-corner-radius': '{borderRadius.Small}',
  'Badge shape/CircularBadge-corner-radius': '{borderRadius.Circular}',
  'Theme/Light/Theme/LightNeutralBackground1Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightNeutralBackground1Hover': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/LightNeutralBackground1Pressed': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralBackground1Selected': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/LightNeutralBackground2Rest': '#f5f4f2',
  'Theme/Light/Theme/LightNeutralBackground3Rest': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralBackground3Hover': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/LightNeutralBackground3Pressed': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/LightNeutralBackground4Rest': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/LightNeutralBackground4Hover': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralBackground4Pressed': '{colors.neutral.grey-60}',
  'Theme/Light/Theme/LightNeutralBackground5Rest': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/LightNeutralBackground6Rest': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/LightNeutralBackgroundInvertedRest': '{brand-10}',
  'Theme/Light/Theme/LightNeutralBackgroundInvertedDisabledRest': '{colors.alpha.white.10}',
  'Theme/Light/Theme/LightNeutralBackgroundAlpha1Rest': '{colors.alpha.white.50}',
  'Theme/Light/Theme/LightNeutralBackgroundAlpha2Rest': '{colors.alpha.white.80}',
  'Theme/Light/Theme/LightNeutralBackgroundStaticRest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleRest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleHover': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtlePressed': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleSelected': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleLight alphaHover': '{colors.alpha.white.70}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleLight alphaPressed': '{colors.alpha.white.50}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleLight alphaSelected': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleInvertedRest': '{colors.alpha.black.0}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleInvertedHover': '{colors.alpha.black.10}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleInvertedPressed': '{colors.alpha.black.30}',
  'Theme/Light/Theme/LightNeutralBackgroundSubtleInvertedSelected': '{colors.alpha.black.20}',
  'Theme/Light/Theme/LightNeutralBackgroundTransparentRest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralBackgroundTransparentHover': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralBackgroundTransparentPressed': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralBackgroundTransparentSelected': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralBackgroundDisabledRest': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/LightNeutralBackgroundStencil1Rest': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralBackgroundStencil2Rest': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/LightNeutralBackgroundOverlayRest': '{colors.alpha.black.40}',
  'Theme/Light/Theme/LightNeutralBackgroundOverlayScrollbarRest': '{colors.alpha.black.50}',
  'Theme/Light/Theme/LightNeutralForeground1Rest primary text': '{brand-10}',
  'Theme/Light/Theme/LightNeutralForeground1Hover': '{brand-30}',
  'Theme/Light/Theme/LightNeutralForeground1Pressed': '{brand-30}',
  'Theme/Light/Theme/LightNeutralForeground1Selected': '{brand-30}',
  'Theme/Light/Theme/LightNeutralForeground2Rest secondary text': '{colors.neutral.grey-12}',
  'Theme/Light/Theme/LightNeutralForeground2Hover': '{colors.neutral.grey-6}',
  'Theme/Light/Theme/LightNeutralForeground2Pressed': '{colors.neutral.grey-6}',
  'Theme/Light/Theme/LightNeutralForeground2Selected': '{colors.neutral.grey-6}',
  'Theme/Light/Theme/LightNeutralForeground2BrandHover': '{brand-50}',
  'Theme/Light/Theme/LightNeutralForeground2BrandPressed': '{brand-40}',
  'Theme/Light/Theme/LightNeutralForeground2BrandSelected': '{brand-30}',
  'Theme/Light/Theme/LightNeutralForeground2BrandRest': '{brand-60}',
  'Theme/Light/Theme/LightNeutralForeground2LinkRest': '{brand-60}',
  'Theme/Light/Theme/LightNeutralForeground2LinkHover': '{brand-50}',
  'Theme/Light/Theme/LightNeutralForeground2LinkPressed': '{brand-40}',
  'Theme/Light/Theme/LightNeutralForeground2LinkSelected': '{brand-30}',
  'Theme/Light/Theme/LightNeutralForeground4Rest': '{colors.neutral.grey-30}',
  'Theme/Light/Theme/LightNeutralForegroundDisabled2Rest': '{colors.neutral.grey-60}',
  'Theme/Light/Theme/LightNeutralForegroundDisabledRest': '{colors.neutral.grey-50}',
  'Theme/Light/Theme/LightNeutralForegroundStaticInvertedRest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightNeutralForegroundInverted1Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightNeutralForegroundInverted1Hover': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/LightNeutralForegroundInverted1Pressed': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralForegroundInverted1Selected': '{colors.neutral.grey-60}',
  'Theme/Light/Theme/LightNeutralForegroundInverted2Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightNeutralForegroundInvertedDisabledRest': '{colors.alpha.white.40}',
  'Theme/Light/Theme/LightNeutralForegroundInvertedLinkRest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightNeutralForegroundInvertedLinkHover': '{colors.neutral.grey-90}',
  'Theme/Light/Theme/LightNeutralForegroundInvertedLinkPressed': '{colors.neutral.grey-80}',
  'Theme/Light/Theme/LightNeutralForegroundInvertedLinkSelected': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralForegroundOn BrandRest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightNeutralStroke1Rest': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralStroke1Hover': '{colors.neutral.grey-60}',
  'Theme/Light/Theme/LightNeutralStroke1Pressed': '{colors.neutral.grey-50}',
  'Theme/Light/Theme/LightNeutralStroke1Selected': '{colors.neutral.grey-40}',
  'Theme/Light/Theme/LightNeutralStroke2Rest': '#ffffff',
  'Theme/Light/Theme/LightNeutralStroke3Rest': '{colors.neutral.grey-50}',
  'Theme/Light/Theme/LightNeutralStrokeAlpha1Rest': '{colors.alpha.black.5}',
  'Theme/Light/Theme/LightNeutralStrokeAlpha2Rest': '{colors.alpha.white.20}',
  'Theme/Light/Theme/LightNeutralStrokeSubtleRest': '#f5f4f2',
  'Theme/Light/Theme/LightNeutralStrokeOn Brand1Rest': '{brand-60}',
  'Theme/Light/Theme/LightNeutralStrokeOn Brand2Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightNeutralStrokeAccessibleRest': '{brand-60}',
  'Theme/Light/Theme/LightNeutralStrokeAccessibleHover': '{brand-50}',
  'Theme/Light/Theme/LightNeutralStrokeAccessiblePressed': '{brand-40}',
  'Theme/Light/Theme/LightNeutralStrokeAccessibleSelected': '{brand-30}',
  'Theme/Light/Theme/LightNeutralStrokeFocus1Rest': '{brand-60}',
  'Theme/Light/Theme/LightNeutralStrokeFocus2Rest': '#ffffff',
  'Theme/Light/Theme/LightNeutralStrokeTransparentInteractiveRest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralStrokeTransparentDisabledRest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralStrokeTransparentRest': '{colors.alpha.white.0}',
  'Theme/Light/Theme/LightNeutralStrokeDisabledRest': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightNeutralStrokeDisabledInvertedRest': '{colors.alpha.white.40}',
  'Theme/Light/Theme/LightBrandBackground1Rest': '{brand-60}',
  'Theme/Light/Theme/LightBrandBackground1Hover': '{brand-50}',
  'Theme/Light/Theme/LightBrandBackground1Pressed': '{brand-40}',
  'Theme/Light/Theme/LightBrandBackground1Selected': '{brand-30}',
  'Theme/Light/Theme/LightBrandBackground2Rest': '{brand-10}',
  'Theme/Light/Theme/LightBrandBackground2Hover': '{brand-110}',
  'Theme/Light/Theme/LightBrandBackground2Pressed': '{brand-100}',
  'Theme/Light/Theme/LightBrandBackground3Rest': '{brand-120}',
  'Theme/Light/Theme/LightBrandBackgroundInvertedRest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightBrandBackgroundInvertedHover': '{brand-120}',
  'Theme/Light/Theme/LightBrandBackgroundInvertedPressed': '{brand-130}',
  'Theme/Light/Theme/LightBrandBackgroundInvertedSelected': '{brand-100}',
  'Theme/Light/Theme/LightBrandBackgroundStaticRest': '{brand-60}',
  'Theme/Light/Theme/LightBrandBackgroundCompoundRest': '{brand-60}',
  'Theme/Light/Theme/LightBrandBackgroundCompoundHover': '{brand-50}',
  'Theme/Light/Theme/LightBrandBackgroundCompoundPressed': '{brand-40}',
  'Theme/Light/Theme/LightBrandForeground1Rest': '{brand-60}',
  'Theme/Light/Theme/LightBrandForeground1Hover': '{brand-50}',
  'Theme/Light/Theme/LightBrandForeground1Pressed': '{brand-40}',
  'Theme/Light/Theme/LightBrandForeground1Selected': '{brand-30}',
  'Theme/Light/Theme/LightBrandForeground2Rest': '{brand-80}',
  'Theme/Light/Theme/LightBrandForeground2Hover': '{brand-60}',
  'Theme/Light/Theme/LightBrandForeground2Pressed': '{brand-30}',
  'Theme/Light/Theme/LightBrandForegroundLinkRest': '{brand-60}',
  'Theme/Light/Theme/LightBrandForegroundLinkHover': '{brand-50}',
  'Theme/Light/Theme/LightBrandForegroundLinkPressed': '{brand-40}',
  'Theme/Light/Theme/LightBrandForegroundLinkSelected': '{brand-30}',
  'Theme/Light/Theme/LightBrandForegroundInvertedRest': '{brand-100}',
  'Theme/Light/Theme/LightBrandForegroundInvertedHover': '{brand-110}',
  'Theme/Light/Theme/LightBrandForegroundInvertedPressed': '{brand-100}',
  'Theme/Light/Theme/LightBrandForegroundOn LightRest': '{brand-80}',
  'Theme/Light/Theme/LightBrandForegroundOn LightHover': '{brand-70}',
  'Theme/Light/Theme/LightBrandForegroundOn LightPressed': '{brand-50}',
  'Theme/Light/Theme/LightBrandForegroundOn LightSelected': '{brand-60}',
  'Theme/Light/Theme/LightBrandForegroundCompoundRest': '{brand-60}',
  'Theme/Light/Theme/LightBrandForegroundCompoundHover': '{brand-50}',
  'Theme/Light/Theme/LightBrandForegroundCompoundPressed': '{brand-40}',
  'Theme/Light/Theme/LightBrandStroke1Rest': '{brand-60}',
  'Theme/Light/Theme/LightBrandStroke1Hover': '{brand-50}',
  'Theme/Light/Theme/LightBrandStroke1Pressed': '{brand-40}',
  'Theme/Light/Theme/LightBrandStroke1Selected': '{brand-30}',
  'Theme/Light/Theme/LightBrandStroke2Rest': '{brand-10}',
  'Theme/Light/Theme/LightBrandStroke2ContrastRest': '{brand-110}',
  'Theme/Light/Theme/LightBrandStroke3Rest': '{brand-90}',
  'Theme/Light/Theme/LightBrandStrokeCompoundRest': '{brand-60}',
  'Theme/Light/Theme/LightBrandStrokeCompoundHover': '{brand-50}',
  'Theme/Light/Theme/LightBrandStrokeCompoundPressed': '{brand-40}',
  'Theme/Light/Theme/LightStatusDangerBackground1Rest': '{colors.shared.cranberry.tint 60}',
  'Theme/Light/Theme/LightStatusDangerBackground3Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light/Theme/LightStatusDangerForeground1Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light/Theme/LightStatusDangerForeground3Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightStatusDangerStroke1Rest': '{colors.shared.cranberry.primary}',
  'Theme/Light/Theme/LightStatusDangerStroke2Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Light/Theme/LightStatusSuccessBackground1Rest': '{colors.shared.green.tint 60}',
  'Theme/Light/Theme/LightStatusSuccessBackground3Rest': '{colors.shared.green.primary}',
  'Theme/Light/Theme/LightStatusSuccessForeground1Rest': '{colors.shared.green.primary}',
  'Theme/Light/Theme/LightStatusSuccessForeground3Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightStatusSuccessStroke1Rest': '{colors.shared.green.primary}',
  'Theme/Light/Theme/LightStatusSuccessStroke2Rest': '{colors.shared.green.tint 30}',
  'Theme/Light/Theme/LightStatusWarningBackground1Rest': '{colors.shared.orange.tint 60}',
  'Theme/Light/Theme/LightStatusWarningBackground3Rest': '{colors.shared.orange.primary}',
  'Theme/Light/Theme/LightStatusWarningForeground1Rest': '{colors.shared.orange.primary}',
  'Theme/Light/Theme/LightStatusWarningForeground3Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightStatusWarningStroke1Rest': '{colors.shared.orange.primary}',
  'Theme/Light/Theme/LightStatusWarningStroke2Rest': '{colors.shared.orange.tint 30}',
  'Theme/Light/Theme/LightStatusOofForeground3Rest': '{colors.shared.berry.primary}',
  'Theme/Light/Theme/LightStatusAwayBackground3Rest': '{colors.shared.marigold.primary}',
  'Theme/Light/Theme/LightStatusAvailableForeground3Rest': '{colors.shared.light green.primary}',
  'Theme/Light/Theme/LightStatusGenericAnchorBackground2Rest': '{colors.shared.anchor.tint 40}',
  'Theme/Light/Theme/LightStatusGenericAnchorForeground2Rest': '{colors.shared.anchor.shade 30}',
  'Theme/Light/Theme/LightStatusGenericAnchorStrokeActiveRest': '{colors.shared.anchor.primary}',
  'Theme/Light/Theme/LightStatusGenericInformationBackground1Rest': '{colors.shared.information.tint 60}',
  'Theme/Light/Theme/LightStatusGenericInformationBackground1Hover': '{colors.shared.information.tint 50}',
  'Theme/Light/Theme/LightStatusGenericInformationBackground1Pressed': '{colors.shared.information.tint 40}',
  'Theme/Light/Theme/LightStatusGenericInformationStroke1Rest': '{colors.shared.information.primary}',
  'Theme/Light/Theme/LightStatusGenericInformationStroke2Rest': '{colors.shared.information.tint 30}',
  'Theme/Light/Theme/LightStatusGenericInformationStroke2Hover': '{colors.shared.information.tint 20}',
  'Theme/Light/Theme/LightStatusGenericInformationStroke2Pressed': '{colors.shared.information.tint 10}',
  'Theme/Light/Theme/LightStatusGenericInformationForegroundRest': '{colors.shared.information.primary}',
  'Theme/Light/Theme/LightStatusGenericInformationForegroundHover': '{colors.shared.information.shade 10}',
  'Theme/Light/Theme/LightStatusGenericInformationForegroundPressed': '{colors.shared.information.shade 20}',
  'Theme/Light/Theme/LightStatusSevereBackground1Rest': '{colors.shared.dark orange.tint 60}',
  'Theme/Light/Theme/LightStatusSevereBackground3Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light/Theme/LightStatusSevereForeground1Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light/Theme/LightStatusSevereForeground3Rest': '{colors.neutral.white}',
  'Theme/Light/Theme/LightStatusSevereStroke1Rest': '{colors.shared.dark orange.primary}',
  'Theme/Light/Theme/LightStatusSevereStroke2Rest': '{colors.shared.dark orange.tint 30}',
  'Theme/Light/Theme/LightShadowAmbient': '#0000001f',
  'Theme/Light/Theme/LightShadowAmbient-lighter': '#0000000f',
  'Theme/Light/Theme/LightShadowAmbient-darker': '#00000033',
  'Theme/Light/Theme/LightShadowBrand-ambient': '#00000040',
  'Theme/Light/Theme/LightShadowKey': '#00000024',
  'Theme/Light/Theme/LightShadowKey-lighter': '#00000012',
  'Theme/Light/Theme/LightShadowKey-darker': '#0000003d',
  'Theme/Light/Theme/LightShadowBrand-key': '#0000004d',
  'Theme/Light/Theme/LightData vizForegroundLabelsCategorical': '{colors.brand.brand-10}',
  'Theme/Light/Theme/LightData vizForegroundLabelsData': '{colors.neutral.grey-12}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorBlue': '{colors.data viz.core.blue}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGray': '{colors.data viz.core.gray}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorRed': '{colors.data viz.core.red}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorTeal': '{colors.data viz.core.teal}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorOcean': '{colors.data viz.core.ocean}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGreen': '{colors.data viz.core.green}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorYellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorBlue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorRed400': '{colors.data viz.sequential.red400}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorTeal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorRed300': '{colors.data viz.sequential.red300}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorTeal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorOcean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGreen400': '{colors.data viz.sequential.green400}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorYellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGreen300': '{colors.data viz.sequential.green300}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorGray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorBlue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light/Theme/LightData vizForegroundLabelsColorOcean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light/Theme/LightData vizForegroundAccessibilityText dark bkgd': '{colors.neutral.white}',
  'Theme/Light/Theme/LightData vizForegroundAccessibilityText light bkgd': '{colors.neutral.black}',
  'Theme/Light/Theme/LightData vizForegroundKPI CardText dark bkgd': '{colors.neutral.white}',
  'Theme/Light/Theme/LightData vizForegroundKPI CardText light bkgd': '{colors.neutral.grey-40}',
  'Theme/Light/Theme/LightData vizStrokeGridline': '{colors.neutral.grey-70}',
  'Theme/Light/Theme/LightData vizStrokeAxis-Target-Benchmark': '{colors.neutral.black}',
  'Theme/Light/Theme/LightData vizStrokeColorBlue': '{colors.data viz.core.blue}',
  'Theme/Light/Theme/LightData vizStrokeColorBlue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light/Theme/LightData vizStrokeColorGray': '{colors.data viz.core.gray}',
  'Theme/Light/Theme/LightData vizStrokeColorGray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light/Theme/LightData vizStrokeColorRed': '{colors.data viz.core.red}',
  'Theme/Light/Theme/LightData vizStrokeColorRed300': '{colors.data viz.sequential.red300}',
  'Theme/Light/Theme/LightData vizStrokeColorRed400': '{colors.data viz.sequential.red400}',
  'Theme/Light/Theme/LightData vizStrokeColorTeal': '{colors.data viz.core.teal}',
  'Theme/Light/Theme/LightData vizStrokeColorTeal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light/Theme/LightData vizStrokeColorTeal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light/Theme/LightData vizStrokeColorOcean': '{colors.data viz.core.ocean}',
  'Theme/Light/Theme/LightData vizStrokeColorOcean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light/Theme/LightData vizStrokeColorGreen': '{colors.data viz.core.green}',
  'Theme/Light/Theme/LightData vizStrokeColorGreen300': '{colors.data viz.sequential.green300}',
  'Theme/Light/Theme/LightData vizStrokeColorGreen400': '{colors.data viz.sequential.green400}',
  'Theme/Light/Theme/LightData vizStrokeColorYellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light/Theme/LightData vizStrokeColorYellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light/Theme/LightData vizStrokeColorGray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light/Theme/LightData vizStrokeColorBlue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light/Theme/LightData vizStrokeColorOcean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light/Theme/LightData vizStrokeColorYellow': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/LightData vizStrokeTrend-Average': '{colors.data viz.sequential.gray300}',
  'Theme/Light/Theme/LightData vizStrokeAccessible outline': '{colors.neutral.white}',
  'Theme/Light/Theme/LightData vizSemanticForegroundLight bkgdPositive': '{colors.data viz.core.green}',
  'Theme/Light/Theme/LightData vizSemanticForegroundLight bkgdNegative': '{colors.data viz.core.red}',
  'Theme/Light/Theme/LightData vizSemanticForegroundLight bkgdNotice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/LightData vizSemanticForegroundDark bkgdPositive': '#37bb65',
  'Theme/Light/Theme/LightData vizSemanticForegroundDark bkgdNegative': '#cc2e48',
  'Theme/Light/Theme/LightData vizSemanticForegroundDark bkgdNotice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/LightData vizSemanticStrokeLight bkgdPositive': '{colors.data viz.core.green}',
  'Theme/Light/Theme/LightData vizSemanticStrokeLight bkgdNegative': '{colors.data viz.core.red}',
  'Theme/Light/Theme/LightData vizSemanticStrokeLight bkgdNotice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/LightData vizSemanticStrokeDark bkgdPositive': '#37bb65',
  'Theme/Light/Theme/LightData vizSemanticStrokeDark bkgdNegative': '#cc2e48',
  'Theme/Light/Theme/LightData vizSemanticStrokeDark bkgdNotice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/LightData vizSemanticBackgroundPositive': '{colors.data viz.core.green}',
  'Theme/Light/Theme/LightData vizSemanticBackgroundNegative': '{colors.data viz.core.red}',
  'Theme/Light/Theme/LightData vizSemanticBackgroundNotice': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/LightData vizBackgroundCoreBlue': '{colors.data viz.core.blue}',
  'Theme/Light/Theme/LightData vizBackgroundCoreGray': '{colors.data viz.core.gray}',
  'Theme/Light/Theme/LightData vizBackgroundCoreRed': '{colors.data viz.core.red}',
  'Theme/Light/Theme/LightData vizBackgroundCoreTeal': '{colors.data viz.core.teal}',
  'Theme/Light/Theme/LightData vizBackgroundCoreOcean': '{colors.data viz.core.ocean}',
  'Theme/Light/Theme/LightData vizBackgroundCoreGreen': '{colors.data viz.core.green}',
  'Theme/Light/Theme/LightData vizBackgroundCoreYellow': '{colors.data viz.core.yellow}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialBlue400': '{colors.data viz.sequential.blue400}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialGray400': '{colors.data viz.sequential.gray400}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialRed300': '{colors.data viz.sequential.red300}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialRed400': '{colors.data viz.sequential.red400}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialTeal300': '{colors.data viz.sequential.teal300}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialTeal400': '{colors.data viz.sequential.teal400}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialOcean400': '{colors.data viz.sequential.ocean400}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialGreen300': '{colors.data viz.sequential.green300}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialGreen400': '{colors.data viz.sequential.green400}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialYellow300': '{colors.data viz.sequential.yellow300}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialYellow400': '{colors.data viz.sequential.yellow400}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialBlue300': '{colors.data viz.sequential.blue300}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialBlue200': '{colors.data viz.sequential.blue200}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialBlue100': '{colors.data viz.sequential.blue100}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialGray300': '{colors.data viz.sequential.gray300}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialGray200': '{colors.data viz.sequential.gray200}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialGray100': '{colors.data viz.sequential.gray100}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialRed200': '{colors.data viz.sequential.red200}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialRed100': '{colors.data viz.sequential.red100}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialTeal200': '{colors.data viz.sequential.teal200}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialTeal100': '{colors.data viz.sequential.teal100}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialOcean300': '{colors.data viz.sequential.ocean300}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialOcean200': '{colors.data viz.sequential.ocean200}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialOcean100': '{colors.data viz.sequential.ocean100}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialGreen200': '{colors.data viz.sequential.green200}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialGreen100': '{colors.data viz.sequential.green100}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialYellow200': '{colors.data viz.sequential.yellow200}',
  'Theme/Light/Theme/LightData vizBackgroundSequentialYellow100': '{colors.data viz.sequential.yellow100}',
  'Theme/Light/Theme/LightData vizBackgroundNeutralBlack': '{colors.neutral.black}',
  'Theme/Light/Theme/LightControl logicTheme switch': 'Light',
  'Theme/Dark/Theme/DarkNeutralBackground1Rest': '{colors.neutral.black}',
  'Theme/Dark/Theme/DarkNeutralBackground1Hover': '{colors.neutral.grey-10}',
  'Theme/Dark/Theme/DarkNeutralBackground1Pressed': '{colors.neutral.grey-12}',
  'Theme/Dark/Theme/DarkNeutralBackground1Selected': '{colors.neutral.grey-8}',
  'Theme/Dark/Theme/DarkNeutralBackground2Rest': '{colors.neutral.grey-6}',
  'Theme/Dark/Theme/DarkNeutralBackground3Rest': '{colors.neutral.grey-12}',
  'Theme/Dark/Theme/DarkNeutralBackground3Hover': '{colors.neutral.grey-10}',
  'Theme/Dark/Theme/DarkNeutralBackground3Pressed': '{colors.neutral.grey-10}',
  'Theme/Dark/Theme/DarkNeutralBackground4Rest': '{colors.neutral.grey-90}',
  'Theme/Dark/Theme/DarkNeutralBackground4Hover': '{colors.neutral.grey-70}',
  'Theme/Dark/Theme/DarkNeutralBackground4Pressed': '{colors.neutral.grey-60}',
  'Theme/Dark/Theme/DarkNeutralBackground5Rest': '{colors.neutral.grey-90}',
  'Theme/Dark/Theme/DarkNeutralBackground6Rest': '{colors.neutral.grey-20}',
  'Theme/Dark/Theme/DarkNeutralBackgroundInvertedRest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralBackgroundInvertedDisabledRest': '{colors.alpha.white.10}',
  'Theme/Dark/Theme/DarkNeutralBackgroundAlpha1Rest': '{colors.alpha.brand-10.50}',
  'Theme/Dark/Theme/DarkNeutralBackgroundAlpha2Rest': '{colors.alpha.black.70}',
  'Theme/Dark/Theme/DarkNeutralBackgroundStaticRest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleRest': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleHover': '{colors.neutral.grey-80}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtlePressed': '{colors.neutral.grey-70}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleSelected': '{colors.neutral.grey-90}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleLight alphaHover': '#242424cc',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleLight alphaPressed': '#24242480',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleLight alphaSelected': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleInvertedRest': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleInvertedHover': '{colors.alpha.black.10}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleInvertedPressed': '{colors.alpha.black.30}',
  'Theme/Dark/Theme/DarkNeutralBackgroundSubtleInvertedSelected': '{colors.alpha.black.20}',
  'Theme/Dark/Theme/DarkNeutralBackgroundTransparentRest': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/DarkNeutralBackgroundTransparentHover': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/DarkNeutralBackgroundTransparentPressed': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/DarkNeutralBackgroundTransparentSelected': '{colors.alpha.black.0}',
  'Theme/Dark/Theme/DarkNeutralBackgroundDisabledRest': '{colors.neutral.grey-8}',
  'Theme/Dark/Theme/DarkNeutralBackgroundStencil1Rest': '#575757',
  'Theme/Dark/Theme/DarkNeutralBackgroundStencil2Rest': '{colors.neutral.grey-20}',
  'Theme/Dark/Theme/DarkNeutralBackgroundOverlayRest': '{colors.alpha.black.50}',
  'Theme/Dark/Theme/DarkNeutralBackgroundOverlayScrollbarRest': '{colors.alpha.white.60}',
  'Theme/Dark/Theme/DarkNeutralForeground1Rest primary text': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground1Hover': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground1Pressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground1Selected': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground2Rest secondary text': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground2Hover': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground2Pressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground2Selected': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground2BrandHover': '{brand-100}',
  'Theme/Dark/Theme/DarkNeutralForeground2BrandPressed': '{brand-90}',
  'Theme/Dark/Theme/DarkNeutralForeground2BrandSelected': '{brand-100}',
  'Theme/Dark/Theme/DarkNeutralForeground2BrandRest': '{brand-100}',
  'Theme/Dark/Theme/DarkNeutralForeground2LinkRest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground2LinkHover': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground2LinkPressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground2LinkSelected': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForeground4Rest': '{colors.neutral.grey-60}',
  'Theme/Dark/Theme/DarkNeutralForegroundDisabled2Rest': '{colors.neutral.grey-60}',
  'Theme/Dark/Theme/DarkNeutralForegroundDisabledRest': '{colors.neutral.grey-50}',
  'Theme/Dark/Theme/DarkNeutralForegroundStaticInvertedRest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForegroundInverted1Rest': '#242424',
  'Theme/Dark/Theme/DarkNeutralForegroundInverted1Hover': '#242424',
  'Theme/Dark/Theme/DarkNeutralForegroundInverted1Pressed': '#242424',
  'Theme/Dark/Theme/DarkNeutralForegroundInverted1Selected': '#242424',
  'Theme/Dark/Theme/DarkNeutralForegroundInverted2Rest': '#242424',
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedDisabledRest': '{colors.alpha.white.40}',
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedLinkRest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedLinkHover': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedLinkPressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForegroundInvertedLinkSelected': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralForegroundOn BrandRest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralStroke1Rest': '{colors.neutral.grey-40}',
  'Theme/Dark/Theme/DarkNeutralStroke1Hover': '{colors.neutral.grey-40}',
  'Theme/Dark/Theme/DarkNeutralStroke1Pressed': '{colors.neutral.grey-40}',
  'Theme/Dark/Theme/DarkNeutralStroke1Selected': '{colors.neutral.grey-40}',
  'Theme/Dark/Theme/DarkNeutralStroke2Rest': '#ffffff',
  'Theme/Dark/Theme/DarkNeutralStroke3Rest': '{colors.neutral.grey-50}',
  'Theme/Dark/Theme/DarkNeutralStrokeAlpha1Rest': '{colors.alpha.white.10}',
  'Theme/Dark/Theme/DarkNeutralStrokeAlpha2Rest': '{colors.alpha.white.20}',
  'Theme/Dark/Theme/DarkNeutralStrokeSubtleRest': '#f5f4f2',
  'Theme/Dark/Theme/DarkNeutralStrokeOn Brand1Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralStrokeOn Brand2Rest': '#ffffff',
  'Theme/Dark/Theme/DarkNeutralStrokeAccessibleRest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralStrokeAccessibleHover': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralStrokeAccessiblePressed': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralStrokeAccessibleSelected': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralStrokeFocus1Rest': '{colors.neutral.black}',
  'Theme/Dark/Theme/DarkNeutralStrokeFocus2Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkNeutralStrokeTransparentInteractiveRest': '{colors.alpha.white.0}',
  'Theme/Dark/Theme/DarkNeutralStrokeTransparentDisabledRest': '{colors.alpha.white.0}',
  'Theme/Dark/Theme/DarkNeutralStrokeTransparentRest': '{colors.alpha.white.0}',
  'Theme/Dark/Theme/DarkNeutralStrokeDisabledRest': '{colors.neutral.grey-70}',
  'Theme/Dark/Theme/DarkNeutralStrokeDisabledInvertedRest': '{colors.alpha.white.40}',
  'Theme/Dark/Theme/DarkBrandBackground1Rest': '{brand-60}',
  'Theme/Dark/Theme/DarkBrandBackground1Hover': '{brand-40}',
  'Theme/Dark/Theme/DarkBrandBackground1Pressed': '{brand-30}',
  'Theme/Dark/Theme/DarkBrandBackground1Selected': '{brand-20}',
  'Theme/Dark/Theme/DarkBrandBackground2Rest': '{brand-20}',
  'Theme/Dark/Theme/DarkBrandBackground2Hover': '{brand-40}',
  'Theme/Dark/Theme/DarkBrandBackground2Pressed': '{brand-10}',
  'Theme/Dark/Theme/DarkBrandBackground3Rest': '#ffffff',
  'Theme/Dark/Theme/DarkBrandBackgroundInvertedRest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkBrandBackgroundInvertedHover': '{brand-120}',
  'Theme/Dark/Theme/DarkBrandBackgroundInvertedPressed': '{brand-130}',
  'Theme/Dark/Theme/DarkBrandBackgroundInvertedSelected': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandBackgroundStaticRest': '{brand-80}',
  'Theme/Dark/Theme/DarkBrandBackgroundCompoundRest': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandBackgroundCompoundHover': '{brand-110}',
  'Theme/Dark/Theme/DarkBrandBackgroundCompoundPressed': '{brand-90}',
  'Theme/Dark/Theme/DarkBrandForeground1Rest': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandForeground1Hover': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandForeground1Pressed': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandForeground1Selected': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandForeground2Rest': '{brand-110}',
  'Theme/Dark/Theme/DarkBrandForeground2Hover': '{brand-130}',
  'Theme/Dark/Theme/DarkBrandForeground2Pressed': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandForegroundLinkRest': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandForegroundLinkHover': '{brand-110}',
  'Theme/Dark/Theme/DarkBrandForegroundLinkPressed': '{brand-90}',
  'Theme/Dark/Theme/DarkBrandForegroundLinkSelected': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandForegroundInvertedRest': '{brand-80}',
  'Theme/Dark/Theme/DarkBrandForegroundInvertedHover': '{brand-70}',
  'Theme/Dark/Theme/DarkBrandForegroundInvertedPressed': '{brand-60}',
  'Theme/Dark/Theme/DarkBrandForegroundOn LightRest': '{brand-70}',
  'Theme/Dark/Theme/DarkBrandForegroundOn LightHover': '{brand-70}',
  'Theme/Dark/Theme/DarkBrandForegroundOn LightPressed': '{brand-50}',
  'Theme/Dark/Theme/DarkBrandForegroundOn LightSelected': '{brand-60}',
  'Theme/Dark/Theme/DarkBrandForegroundCompoundRest': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandForegroundCompoundHover': '{brand-110}',
  'Theme/Dark/Theme/DarkBrandForegroundCompoundPressed': '{brand-90}',
  'Theme/Dark/Theme/DarkBrandStroke1Rest': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandStroke1Hover': '#2886de',
  'Theme/Dark/Theme/DarkBrandStroke1Pressed': '{brand-70}',
  'Theme/Dark/Theme/DarkBrandStroke1Selected': '{brand-70}',
  'Theme/Dark/Theme/DarkBrandStroke2Rest': '{brand-50}',
  'Theme/Dark/Theme/DarkBrandStroke2ContrastRest': '{brand-60}',
  'Theme/Dark/Theme/DarkBrandStroke3Rest': '#ffffff',
  'Theme/Dark/Theme/DarkBrandStrokeCompoundRest': '{brand-100}',
  'Theme/Dark/Theme/DarkBrandStrokeCompoundHover': '{brand-110}',
  'Theme/Dark/Theme/DarkBrandStrokeCompoundPressed': '{brand-90}',
  'Theme/Dark/Theme/DarkStatusDangerBackground1Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkStatusDangerBackground3Rest': '{colors.shared.cranberry.primary}',
  'Theme/Dark/Theme/DarkStatusDangerForeground1Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Dark/Theme/DarkStatusDangerForeground3Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkStatusDangerStroke1Rest': '{colors.shared.cranberry.primary}',
  'Theme/Dark/Theme/DarkStatusDangerStroke2Rest': '{colors.shared.cranberry.tint 30}',
  'Theme/Dark/Theme/DarkStatusSuccessBackground1Rest': '{colors.shared.green.tint 60}',
  'Theme/Dark/Theme/DarkStatusSuccessBackground3Rest': '{colors.shared.green.primary}',
  'Theme/Dark/Theme/DarkStatusSuccessForeground1Rest': '{colors.shared.green.primary}',
  'Theme/Dark/Theme/DarkStatusSuccessForeground3Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkStatusSuccessStroke1Rest': '{colors.shared.green.primary}',
  'Theme/Dark/Theme/DarkStatusSuccessStroke2Rest': '{colors.shared.green.tint 30}',
  'Theme/Dark/Theme/DarkStatusWarningBackground1Rest': '{colors.shared.orange.tint 60}',
  'Theme/Dark/Theme/DarkStatusWarningBackground3Rest': '{colors.shared.orange.primary}',
  'Theme/Dark/Theme/DarkStatusWarningForeground1Rest': '{colors.shared.orange.primary}',
  'Theme/Dark/Theme/DarkStatusWarningForeground3Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkStatusWarningStroke1Rest': '{colors.shared.orange.primary}',
  'Theme/Dark/Theme/DarkStatusWarningStroke2Rest': '{colors.shared.orange.tint 30}',
  'Theme/Dark/Theme/DarkStatusOofForeground3Rest': '{colors.shared.berry.tint 20}',
  'Theme/Dark/Theme/DarkStatusAwayBackground3Rest': '{colors.shared.marigold.primary}',
  'Theme/Dark/Theme/DarkStatusAvailableForeground3Rest': '{colors.shared.light green.primary}',
  'Theme/Dark/Theme/DarkStatusGenericAnchorBackground2Rest': '{colors.shared.anchor.shade 30}',
  'Theme/Dark/Theme/DarkStatusGenericAnchorForeground2Rest': '{colors.shared.anchor.tint 40}',
  'Theme/Dark/Theme/DarkStatusGenericAnchorStrokeActiveRest': '{colors.shared.anchor.tint 30}',
  'Theme/Dark/Theme/DarkStatusGenericInformationBackground1Rest': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationBackground1Hover': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationBackground1Pressed': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationStroke1Rest': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationStroke2Rest': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationStroke2Hover': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationStroke2Pressed': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationForegroundRest': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationForegroundHover': '#ffffff',
  'Theme/Dark/Theme/DarkStatusGenericInformationForegroundPressed': '#ffffff',
  'Theme/Dark/Theme/DarkStatusSevereBackground1Rest': '{colors.shared.dark orange.tint 60}',
  'Theme/Dark/Theme/DarkStatusSevereBackground3Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark/Theme/DarkStatusSevereForeground1Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark/Theme/DarkStatusSevereForeground3Rest': '{colors.neutral.white}',
  'Theme/Dark/Theme/DarkStatusSevereStroke1Rest': '{colors.shared.dark orange.primary}',
  'Theme/Dark/Theme/DarkStatusSevereStroke2Rest': '{colors.shared.dark orange.tint 30}',
  'Theme/Dark/Theme/DarkShadowAmbient': '#00000033',
  'Theme/Dark/Theme/DarkShadowAmbient-lighter': '#0000001f',
  'Theme/Dark/Theme/DarkShadowAmbient-darker': '#00000066',
  'Theme/Dark/Theme/DarkShadowBrand-ambient': '#00000040',
  'Theme/Dark/Theme/DarkShadowKey': '#00000047',
  'Theme/Dark/Theme/DarkShadowKey-lighter': '#00000024',
  'Theme/Dark/Theme/DarkShadowKey-darker': '#0000007a',
  'Theme/Dark/Theme/DarkShadowBrand-key': '#0000004d',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsCategorical': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsData': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorBlue': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGray': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorRed': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorTeal': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorOcean': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGreen': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorYellow300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorBlue400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGray400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorRed400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorTeal300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorRed300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorTeal400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorOcean400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGreen400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorYellow400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGreen300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorGray300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorBlue200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundLabelsColorOcean200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundAccessibilityText dark bkgd': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundAccessibilityText light bkgd': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundKPI CardText dark bkgd': '#ffffff',
  'Theme/Dark/Theme/DarkData vizForegroundKPI CardText light bkgd': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeGridline': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeAxis-Target-Benchmark': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorBlue': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorBlue400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorGray': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorGray400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorRed': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorRed300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorRed400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorTeal': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorTeal300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorTeal400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorOcean': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorOcean400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorGreen': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorGreen300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorGreen400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorYellow300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorYellow400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorGray300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorBlue200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorOcean200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeColorYellow': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeTrend-Average': '#ffffff',
  'Theme/Dark/Theme/DarkData vizStrokeAccessible outline': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticForegroundLight bkgdPositive': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticForegroundLight bkgdNegative': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticForegroundLight bkgdNotice': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticForegroundDark bkgdPositive': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticForegroundDark bkgdNegative': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticForegroundDark bkgdNotice': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticStrokeLight bkgdPositive': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticStrokeLight bkgdNegative': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticStrokeLight bkgdNotice': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticStrokeDark bkgdPositive': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticStrokeDark bkgdNegative': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticStrokeDark bkgdNotice': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticBackgroundPositive': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticBackgroundNegative': '#ffffff',
  'Theme/Dark/Theme/DarkData vizSemanticBackgroundNotice': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundCoreBlue': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundCoreGray': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundCoreRed': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundCoreTeal': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundCoreOcean': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundCoreGreen': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundCoreYellow': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialBlue400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGray400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialRed300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialRed400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialTeal300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialTeal400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialOcean400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGreen300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGreen400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialYellow300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialYellow400': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialBlue300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialBlue200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialBlue100': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGray300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGray200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGray100': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialRed200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialRed100': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialTeal200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialTeal100': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialOcean300': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialOcean200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialOcean100': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGreen200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialGreen100': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialYellow200': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundSequentialYellow100': '#ffffff',
  'Theme/Dark/Theme/DarkData vizBackgroundNeutralBlack': '#ffffff',
  'Theme/Dark/Theme/DarkControl logicTheme switch': 'Dark'
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
