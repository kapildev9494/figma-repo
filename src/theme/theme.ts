import { Theme } from '@fluentui/react-components';

interface FluentThemeTokens {
  'arrow positionAbove endAbove-end': string;
  'arrow positionAbove endAbove-middle': string;
  'arrow positionAbove endAbove-start': string;
  'arrow positionAbove endAfter-bottom': string;
  'arrow positionAbove endAfter-center': string;
  'arrow positionAbove endAfter-top': string;
  'arrow positionAbove endBefore-bottom': string;
  'arrow positionAbove endBefore-center': string;
  'arrow positionAbove endBefore-top': string;
  'arrow positionAbove endBottom-center': string;
  'arrow positionAbove endBottom-end': string;
  'arrow positionAbove endBottom-start': string;
  'arrow positionAbove middleAbove-end': string;
  'arrow positionAbove middleAbove-middle': string;
  'arrow positionAbove middleAbove-start': string;
  'arrow positionAbove middleAfter-bottom': string;
  'arrow positionAbove middleAfter-center': string;
  'arrow positionAbove middleAfter-top': string;
  'arrow positionAbove middleBefore-bottom': string;
  'arrow positionAbove middleBefore-center': string;
  'arrow positionAbove middleBefore-top': string;
  'arrow positionAbove middleBottom-center': string;
  'arrow positionAbove middleBottom-end': string;
  'arrow positionAbove middleBottom-start': string;
  'arrow positionAbove startAbove-end': string;
  'arrow positionAbove startAbove-middle': string;
  'arrow positionAbove startAbove-start': string;
  'arrow positionAbove startAfter-bottom': string;
  'arrow positionAbove startAfter-center': string;
  'arrow positionAbove startAfter-top': string;
  'arrow positionAbove startBefore-bottom': string;
  'arrow positionAbove startBefore-center': string;
  'arrow positionAbove startBefore-top': string;
  'arrow positionAbove startBottom-center': string;
  'arrow positionAbove startBottom-end': string;
  'arrow positionAbove startBottom-start': string;
  'arrow positionAfter bottomAbove-end': string;
  'arrow positionAfter bottomAbove-middle': string;
  'arrow positionAfter bottomAbove-start': string;
  'arrow positionAfter bottomAfter-bottom': string;
  'arrow positionAfter bottomAfter-center': string;
  'arrow positionAfter bottomAfter-top': string;
  'arrow positionAfter bottomBefore-bottom': string;
  'arrow positionAfter bottomBefore-center': string;
  'arrow positionAfter bottomBefore-top': string;
  'arrow positionAfter bottomBottom-center': string;
  'arrow positionAfter bottomBottom-end': string;
  'arrow positionAfter bottomBottom-start': string;
  'arrow positionAfter middleAbove-end': string;
  'arrow positionAfter middleAbove-middle': string;
  'arrow positionAfter middleAbove-start': string;
  'arrow positionAfter middleAfter-bottom': string;
  'arrow positionAfter middleAfter-center': string;
  'arrow positionAfter middleAfter-top': string;
  'arrow positionAfter middleBefore-bottom': string;
  'arrow positionAfter middleBefore-center': string;
  'arrow positionAfter middleBefore-top': string;
  'arrow positionAfter middleBottom-center': string;
  'arrow positionAfter middleBottom-end': string;
  'arrow positionAfter middleBottom-start': string;
  'arrow positionAfter topAbove-end': string;
  'arrow positionAfter topAbove-middle': string;
  'arrow positionAfter topAbove-start': string;
  'arrow positionAfter topAfter-bottom': string;
  'arrow positionAfter topAfter-center': string;
  'arrow positionAfter topAfter-top': string;
  'arrow positionAfter topBefore-bottom': string;
  'arrow positionAfter topBefore-center': string;
  'arrow positionAfter topBefore-top': string;
  'arrow positionAfter topBottom-center': string;
  'arrow positionAfter topBottom-end': string;
  'arrow positionAfter topBottom-start': string;
  'arrow positionBefore bottomAbove-end': string;
  'arrow positionBefore bottomAbove-middle': string;
  'arrow positionBefore bottomAbove-start': string;
  'arrow positionBefore bottomAfter-bottom': string;
  'arrow positionBefore bottomAfter-center': string;
  'arrow positionBefore bottomAfter-top': string;
  'arrow positionBefore bottomBefore-bottom': string;
  'arrow positionBefore bottomBefore-center': string;
  'arrow positionBefore bottomBefore-top': string;
  'arrow positionBefore bottomBottom-center': string;
  'arrow positionBefore bottomBottom-end': string;
  'arrow positionBefore bottomBottom-start': string;
  'arrow positionBefore middleAbove-end': string;
  'arrow positionBefore middleAbove-middle': string;
  'arrow positionBefore middleAbove-start': string;
  'arrow positionBefore middleAfter-bottom': string;
  'arrow positionBefore middleAfter-center': string;
  'arrow positionBefore middleAfter-top': string;
  'arrow positionBefore middleBefore-bottom': string;
  'arrow positionBefore middleBefore-center': string;
  'arrow positionBefore middleBefore-top': string;
  'arrow positionBefore middleBottom-center': string;
  'arrow positionBefore middleBottom-end': string;
  'arrow positionBefore middleBottom-start': string;
  'arrow positionBefore topAbove-end': string;
  'arrow positionBefore topAbove-middle': string;
  'arrow positionBefore topAbove-start': string;
  'arrow positionBefore topAfter-bottom': string;
  'arrow positionBefore topAfter-center': string;
  'arrow positionBefore topAfter-top': string;
  'arrow positionBefore topBefore-bottom': string;
  'arrow positionBefore topBefore-center': string;
  'arrow positionBefore topBefore-top': string;
  'arrow positionBefore topBottom-center': string;
  'arrow positionBefore topBottom-end': string;
  'arrow positionBefore topBottom-start': string;
  'arrow positionBottom endAbove-end': string;
  'arrow positionBottom endAbove-middle': string;
  'arrow positionBottom endAbove-start': string;
  'arrow positionBottom endAfter-bottom': string;
  'arrow positionBottom endAfter-center': string;
  'arrow positionBottom endAfter-top': string;
  'arrow positionBottom endBefore-bottom': string;
  'arrow positionBottom endBefore-center': string;
  'arrow positionBottom endBefore-top': string;
  'arrow positionBottom endBottom-center': string;
  'arrow positionBottom endBottom-end': string;
  'arrow positionBottom endBottom-start': string;
  'arrow positionBottom middleAbove-end': string;
  'arrow positionBottom middleAbove-middle': string;
  'arrow positionBottom middleAbove-start': string;
  'arrow positionBottom middleAfter-bottom': string;
  'arrow positionBottom middleAfter-center': string;
  'arrow positionBottom middleAfter-top': string;
  'arrow positionBottom middleBefore-bottom': string;
  'arrow positionBottom middleBefore-center': string;
  'arrow positionBottom middleBefore-top': string;
  'arrow positionBottom middleBottom-center': string;
  'arrow positionBottom middleBottom-end': string;
  'arrow positionBottom middleBottom-start': string;
  'arrow positionBottom startAbove-end': string;
  'arrow positionBottom startAbove-middle': string;
  'arrow positionBottom startAbove-start': string;
  'arrow positionBottom startAfter-bottom': string;
  'arrow positionBottom startAfter-center': string;
  'arrow positionBottom startAfter-top': string;
  'arrow positionBottom startBefore-bottom': string;
  'arrow positionBottom startBefore-center': string;
  'arrow positionBottom startBefore-top': string;
  'arrow positionBottom startBottom-center': string;
  'arrow positionBottom startBottom-end': string;
  'arrow positionBottom startBottom-start': string;
  'arrow positionNoneAbove-end': string;
  'arrow positionNoneAbove-middle': string;
  'arrow positionNoneAbove-start': string;
  'arrow positionNoneAfter-bottom': string;
  'arrow positionNoneAfter-center': string;
  'arrow positionNoneAfter-top': string;
  'arrow positionNoneBefore-bottom': string;
  'arrow positionNoneBefore-center': string;
  'arrow positionNoneBefore-top': string;
  'arrow positionNoneBottom-center': string;
  'arrow positionNoneBottom-end': string;
  'arrow positionNoneBottom-start': string;
  'badge shapeBadge-corner-radius': string;
  'brandBrand-10': string;
  'brandBrand-100': string;
  'brandBrand-110': string;
  'brandBrand-120': string;
  'brandBrand-130': string;
  'brandBrand-20': string;
  'brandBrand-30': string;
  'brandBrand-40': string;
  'brandBrand-50': string;
  'brandBrand-60': string;
  'brandBrand-70': string;
  'brandBrand-80': string;
  'brandBrand-90': string;
  'button shapeButton-corner-radius': string;
  'button shapeButton-image-corner-radius': string;
  'card paddingLargeCard-corner-radius': string;
  'card paddingLargeCard-gap': string;
  'card paddingLargeCard-horizontal': string;
  'card paddingLargeCard-vertical': string;
  'card paddingMediumCard-corner-radius': string;
  'card paddingMediumCard-gap': string;
  'card paddingMediumCard-horizontal': string;
  'card paddingMediumCard-vertical': string;
  'card paddingSmallCard-corner-radius': string;
  'card paddingSmallCard-gap': string;
  'card paddingSmallCard-horizontal': string;
  'card paddingSmallCard-vertical': string;
  'effectElevationShadow160': string;
  'effectElevationShadow161': string;
  'effectElevationShadow20': string;
  'effectElevationShadow21': string;
  'effectElevationShadow280': string;
  'effectElevationShadow281': string;
  'effectElevationShadow40': string;
  'effectElevationShadow41': string;
  'effectElevationShadow640': string;
  'effectElevationShadow641': string;
  'effectElevationShadow80': string;
  'effectElevationShadow81': string;
  'fontBody1FontFamily': string;
  'fontBody1FontSize': string;
  'fontBody1FontStretch': string;
  'fontBody1FontStyle': string;
  'fontBody1FontWeight': string;
  'fontBody1LetterSpacing': string;
  'fontBody1LineHeight': string;
  'fontBody1ParagraphIndent': string;
  'fontBody1ParagraphSpacing': string;
  'fontBody1TextCase': string;
  'fontBody1TextDecoration': string;
  'fontBody1strongFontFamily': string;
  'fontBody1strongFontSize': string;
  'fontBody1strongFontStretch': string;
  'fontBody1strongFontStyle': string;
  'fontBody1strongFontWeight': string;
  'fontBody1strongLetterSpacing': string;
  'fontBody1strongLineHeight': string;
  'fontBody1strongParagraphIndent': string;
  'fontBody1strongParagraphSpacing': string;
  'fontBody1strongTextCase': string;
  'fontBody1strongTextDecoration': string;
  'fontBody1strongerFontFamily': string;
  'fontBody1strongerFontSize': string;
  'fontBody1strongerFontStretch': string;
  'fontBody1strongerFontStyle': string;
  'fontBody1strongerFontWeight': string;
  'fontBody1strongerLetterSpacing': string;
  'fontBody1strongerLineHeight': string;
  'fontBody1strongerParagraphIndent': string;
  'fontBody1strongerParagraphSpacing': string;
  'fontBody1strongerTextCase': string;
  'fontBody1strongerTextDecoration': string;
  'fontBody2FontFamily': string;
  'fontBody2FontSize': string;
  'fontBody2FontStretch': string;
  'fontBody2FontStyle': string;
  'fontBody2FontWeight': string;
  'fontBody2LetterSpacing': string;
  'fontBody2LineHeight': string;
  'fontBody2ParagraphIndent': string;
  'fontBody2ParagraphSpacing': string;
  'fontBody2TextCase': string;
  'fontBody2TextDecoration': string;
  'fontBody2semilightFontFamily': string;
  'fontBody2semilightFontSize': string;
  'fontBody2semilightFontStretch': string;
  'fontBody2semilightFontStyle': string;
  'fontBody2semilightFontWeight': string;
  'fontBody2semilightLetterSpacing': string;
  'fontBody2semilightLineHeight': string;
  'fontBody2semilightParagraphIndent': string;
  'fontBody2semilightParagraphSpacing': string;
  'fontBody2semilightTextCase': string;
  'fontBody2semilightTextDecoration': string;
  'fontBody2strongFontFamily': string;
  'fontBody2strongFontSize': string;
  'fontBody2strongFontStretch': string;
  'fontBody2strongFontStyle': string;
  'fontBody2strongFontWeight': string;
  'fontBody2strongLetterSpacing': string;
  'fontBody2strongLineHeight': string;
  'fontBody2strongParagraphIndent': string;
  'fontBody2strongParagraphSpacing': string;
  'fontBody2strongTextCase': string;
  'fontBody2strongTextDecoration': string;
  'fontBody2strongerFontFamily': string;
  'fontBody2strongerFontSize': string;
  'fontBody2strongerFontStretch': string;
  'fontBody2strongerFontStyle': string;
  'fontBody2strongerFontWeight': string;
  'fontBody2strongerLetterSpacing': string;
  'fontBody2strongerLineHeight': string;
  'fontBody2strongerParagraphIndent': string;
  'fontBody2strongerParagraphSpacing': string;
  'fontBody2strongerTextCase': string;
  'fontBody2strongerTextDecoration': string;
  'fontCaption1FontFamily': string;
  'fontCaption1FontSize': string;
  'fontCaption1FontStretch': string;
  'fontCaption1FontStyle': string;
  'fontCaption1FontWeight': string;
  'fontCaption1LetterSpacing': string;
  'fontCaption1LineHeight': string;
  'fontCaption1ParagraphIndent': string;
  'fontCaption1ParagraphSpacing': string;
  'fontCaption1TextCase': string;
  'fontCaption1TextDecoration': string;
  'fontCaption1strongFontFamily': string;
  'fontCaption1strongFontSize': string;
  'fontCaption1strongFontStretch': string;
  'fontCaption1strongFontStyle': string;
  'fontCaption1strongFontWeight': string;
  'fontCaption1strongLetterSpacing': string;
  'fontCaption1strongLineHeight': string;
  'fontCaption1strongParagraphIndent': string;
  'fontCaption1strongParagraphSpacing': string;
  'fontCaption1strongTextCase': string;
  'fontCaption1strongTextDecoration': string;
  'fontCaption1strongerFontFamily': string;
  'fontCaption1strongerFontSize': string;
  'fontCaption1strongerFontStretch': string;
  'fontCaption1strongerFontStyle': string;
  'fontCaption1strongerFontWeight': string;
  'fontCaption1strongerLetterSpacing': string;
  'fontCaption1strongerLineHeight': string;
  'fontCaption1strongerParagraphIndent': string;
  'fontCaption1strongerParagraphSpacing': string;
  'fontCaption1strongerTextCase': string;
  'fontCaption1strongerTextDecoration': string;
  'fontCaption2FontFamily': string;
  'fontCaption2FontSize': string;
  'fontCaption2FontStretch': string;
  'fontCaption2FontStyle': string;
  'fontCaption2FontWeight': string;
  'fontCaption2LetterSpacing': string;
  'fontCaption2LineHeight': string;
  'fontCaption2ParagraphIndent': string;
  'fontCaption2ParagraphSpacing': string;
  'fontCaption2TextCase': string;
  'fontCaption2TextDecoration': string;
  'fontCaption2strongFontFamily': string;
  'fontCaption2strongFontSize': string;
  'fontCaption2strongFontStretch': string;
  'fontCaption2strongFontStyle': string;
  'fontCaption2strongFontWeight': string;
  'fontCaption2strongLetterSpacing': string;
  'fontCaption2strongLineHeight': string;
  'fontCaption2strongParagraphIndent': string;
  'fontCaption2strongParagraphSpacing': string;
  'fontCaption2strongTextCase': string;
  'fontCaption2strongTextDecoration': string;
  'fontDisplay1FontFamily': string;
  'fontDisplay1FontSize': string;
  'fontDisplay1FontStretch': string;
  'fontDisplay1FontStyle': string;
  'fontDisplay1FontWeight': string;
  'fontDisplay1LetterSpacing': string;
  'fontDisplay1LineHeight': string;
  'fontDisplay1ParagraphIndent': string;
  'fontDisplay1ParagraphSpacing': string;
  'fontDisplay1TextCase': string;
  'fontDisplay1TextDecoration': string;
  'fontDisplay1lightFontFamily': string;
  'fontDisplay1lightFontSize': string;
  'fontDisplay1lightFontStretch': string;
  'fontDisplay1lightFontStyle': string;
  'fontDisplay1lightFontWeight': string;
  'fontDisplay1lightLetterSpacing': string;
  'fontDisplay1lightLineHeight': string;
  'fontDisplay1lightParagraphIndent': string;
  'fontDisplay1lightParagraphSpacing': string;
  'fontDisplay1lightTextCase': string;
  'fontDisplay1lightTextDecoration': string;
  'fontDisplay1semilightFontFamily': string;
  'fontDisplay1semilightFontSize': string;
  'fontDisplay1semilightFontStretch': string;
  'fontDisplay1semilightFontStyle': string;
  'fontDisplay1semilightFontWeight': string;
  'fontDisplay1semilightLetterSpacing': string;
  'fontDisplay1semilightLineHeight': string;
  'fontDisplay1semilightParagraphIndent': string;
  'fontDisplay1semilightParagraphSpacing': string;
  'fontDisplay1semilightTextCase': string;
  'fontDisplay1semilightTextDecoration': string;
  'fontDisplay1strongFontFamily': string;
  'fontDisplay1strongFontSize': string;
  'fontDisplay1strongFontStretch': string;
  'fontDisplay1strongFontStyle': string;
  'fontDisplay1strongFontWeight': string;
  'fontDisplay1strongLetterSpacing': string;
  'fontDisplay1strongLineHeight': string;
  'fontDisplay1strongParagraphIndent': string;
  'fontDisplay1strongParagraphSpacing': string;
  'fontDisplay1strongTextCase': string;
  'fontDisplay1strongTextDecoration': string;
  'fontDisplay1strongerFontFamily': string;
  'fontDisplay1strongerFontSize': string;
  'fontDisplay1strongerFontStretch': string;
  'fontDisplay1strongerFontStyle': string;
  'fontDisplay1strongerFontWeight': string;
  'fontDisplay1strongerLetterSpacing': string;
  'fontDisplay1strongerLineHeight': string;
  'fontDisplay1strongerParagraphIndent': string;
  'fontDisplay1strongerParagraphSpacing': string;
  'fontDisplay1strongerTextCase': string;
  'fontDisplay1strongerTextDecoration': string;
  'fontDisplay2FontFamily': string;
  'fontDisplay2FontSize': string;
  'fontDisplay2FontStretch': string;
  'fontDisplay2FontStyle': string;
  'fontDisplay2FontWeight': string;
  'fontDisplay2LetterSpacing': string;
  'fontDisplay2LineHeight': string;
  'fontDisplay2ParagraphIndent': string;
  'fontDisplay2ParagraphSpacing': string;
  'fontDisplay2TextCase': string;
  'fontDisplay2TextDecoration': string;
  'fontDisplay2lightFontFamily': string;
  'fontDisplay2lightFontSize': string;
  'fontDisplay2lightFontStretch': string;
  'fontDisplay2lightFontStyle': string;
  'fontDisplay2lightFontWeight': string;
  'fontDisplay2lightLetterSpacing': string;
  'fontDisplay2lightLineHeight': string;
  'fontDisplay2lightParagraphIndent': string;
  'fontDisplay2lightParagraphSpacing': string;
  'fontDisplay2lightTextCase': string;
  'fontDisplay2lightTextDecoration': string;
  'fontDisplay2semilightFontFamily': string;
  'fontDisplay2semilightFontSize': string;
  'fontDisplay2semilightFontStretch': string;
  'fontDisplay2semilightFontStyle': string;
  'fontDisplay2semilightFontWeight': string;
  'fontDisplay2semilightLetterSpacing': string;
  'fontDisplay2semilightLineHeight': string;
  'fontDisplay2semilightParagraphIndent': string;
  'fontDisplay2semilightParagraphSpacing': string;
  'fontDisplay2semilightTextCase': string;
  'fontDisplay2semilightTextDecoration': string;
  'fontDisplay2strongFontFamily': string;
  'fontDisplay2strongFontSize': string;
  'fontDisplay2strongFontStretch': string;
  'fontDisplay2strongFontStyle': string;
  'fontDisplay2strongFontWeight': string;
  'fontDisplay2strongLetterSpacing': string;
  'fontDisplay2strongLineHeight': string;
  'fontDisplay2strongParagraphIndent': string;
  'fontDisplay2strongParagraphSpacing': string;
  'fontDisplay2strongTextCase': string;
  'fontDisplay2strongTextDecoration': string;
  'fontDisplay2strongerFontFamily': string;
  'fontDisplay2strongerFontSize': string;
  'fontDisplay2strongerFontStretch': string;
  'fontDisplay2strongerFontStyle': string;
  'fontDisplay2strongerFontWeight': string;
  'fontDisplay2strongerLetterSpacing': string;
  'fontDisplay2strongerLineHeight': string;
  'fontDisplay2strongerParagraphIndent': string;
  'fontDisplay2strongerParagraphSpacing': string;
  'fontDisplay2strongerTextCase': string;
  'fontDisplay2strongerTextDecoration': string;
  'fontDisplay3strongFontFamily': string;
  'fontDisplay3strongFontSize': string;
  'fontDisplay3strongFontStretch': string;
  'fontDisplay3strongFontStyle': string;
  'fontDisplay3strongFontWeight': string;
  'fontDisplay3strongLetterSpacing': string;
  'fontDisplay3strongLineHeight': string;
  'fontDisplay3strongParagraphIndent': string;
  'fontDisplay3strongParagraphSpacing': string;
  'fontDisplay3strongTextCase': string;
  'fontDisplay3strongTextDecoration': string;
  'fontTitle 1FontFamily': string;
  'fontTitle 1FontSize': string;
  'fontTitle 1FontStretch': string;
  'fontTitle 1FontStyle': string;
  'fontTitle 1FontWeight': string;
  'fontTitle 1LetterSpacing': string;
  'fontTitle 1LineHeight': string;
  'fontTitle 1ParagraphIndent': string;
  'fontTitle 1ParagraphSpacing': string;
  'fontTitle 1TextCase': string;
  'fontTitle 1TextDecoration': string;
  'fontTitle 2 strongFontFamily': string;
  'fontTitle 2 strongFontSize': string;
  'fontTitle 2 strongFontStretch': string;
  'fontTitle 2 strongFontStyle': string;
  'fontTitle 2 strongFontWeight': string;
  'fontTitle 2 strongLetterSpacing': string;
  'fontTitle 2 strongLineHeight': string;
  'fontTitle 2 strongParagraphIndent': string;
  'fontTitle 2 strongParagraphSpacing': string;
  'fontTitle 2 strongTextCase': string;
  'fontTitle 2 strongTextDecoration': string;
  'fontTitle 2 strongerFontFamily': string;
  'fontTitle 2 strongerFontSize': string;
  'fontTitle 2 strongerFontStretch': string;
  'fontTitle 2 strongerFontStyle': string;
  'fontTitle 2 strongerFontWeight': string;
  'fontTitle 2 strongerLetterSpacing': string;
  'fontTitle 2 strongerLineHeight': string;
  'fontTitle 2 strongerParagraphIndent': string;
  'fontTitle 2 strongerParagraphSpacing': string;
  'fontTitle 2 strongerTextCase': string;
  'fontTitle 2 strongerTextDecoration': string;
  'fontTitle1lightFontFamily': string;
  'fontTitle1lightFontSize': string;
  'fontTitle1lightFontStretch': string;
  'fontTitle1lightFontStyle': string;
  'fontTitle1lightFontWeight': string;
  'fontTitle1lightLetterSpacing': string;
  'fontTitle1lightLineHeight': string;
  'fontTitle1lightParagraphIndent': string;
  'fontTitle1lightParagraphSpacing': string;
  'fontTitle1lightTextCase': string;
  'fontTitle1lightTextDecoration': string;
  'fontTitle1semilightFontFamily': string;
  'fontTitle1semilightFontSize': string;
  'fontTitle1semilightFontStretch': string;
  'fontTitle1semilightFontStyle': string;
  'fontTitle1semilightFontWeight': string;
  'fontTitle1semilightLetterSpacing': string;
  'fontTitle1semilightLineHeight': string;
  'fontTitle1semilightParagraphIndent': string;
  'fontTitle1semilightParagraphSpacing': string;
  'fontTitle1semilightTextCase': string;
  'fontTitle1semilightTextDecoration': string;
  'fontTitle1strongFontFamily': string;
  'fontTitle1strongFontSize': string;
  'fontTitle1strongFontStretch': string;
  'fontTitle1strongFontStyle': string;
  'fontTitle1strongFontWeight': string;
  'fontTitle1strongLetterSpacing': string;
  'fontTitle1strongLineHeight': string;
  'fontTitle1strongParagraphIndent': string;
  'fontTitle1strongParagraphSpacing': string;
  'fontTitle1strongTextCase': string;
  'fontTitle1strongTextDecoration': string;
  'fontTitle1strongerFontFamily': string;
  'fontTitle1strongerFontSize': string;
  'fontTitle1strongerFontStretch': string;
  'fontTitle1strongerFontStyle': string;
  'fontTitle1strongerFontWeight': string;
  'fontTitle1strongerLetterSpacing': string;
  'fontTitle1strongerLineHeight': string;
  'fontTitle1strongerParagraphIndent': string;
  'fontTitle1strongerParagraphSpacing': string;
  'fontTitle1strongerTextCase': string;
  'fontTitle1strongerTextDecoration': string;
  'fontTitle2FontFamily': string;
  'fontTitle2FontSize': string;
  'fontTitle2FontStretch': string;
  'fontTitle2FontStyle': string;
  'fontTitle2FontWeight': string;
  'fontTitle2LetterSpacing': string;
  'fontTitle2LineHeight': string;
  'fontTitle2ParagraphIndent': string;
  'fontTitle2ParagraphSpacing': string;
  'fontTitle2TextCase': string;
  'fontTitle2TextDecoration': string;
  'fontTitle2lightFontFamily': string;
  'fontTitle2lightFontSize': string;
  'fontTitle2lightFontStretch': string;
  'fontTitle2lightFontStyle': string;
  'fontTitle2lightFontWeight': string;
  'fontTitle2lightLetterSpacing': string;
  'fontTitle2lightLineHeight': string;
  'fontTitle2lightParagraphIndent': string;
  'fontTitle2lightParagraphSpacing': string;
  'fontTitle2lightTextCase': string;
  'fontTitle2lightTextDecoration': string;
  'fontTitle2semilightFontFamily': string;
  'fontTitle2semilightFontSize': string;
  'fontTitle2semilightFontStretch': string;
  'fontTitle2semilightFontStyle': string;
  'fontTitle2semilightFontWeight': string;
  'fontTitle2semilightLetterSpacing': string;
  'fontTitle2semilightLineHeight': string;
  'fontTitle2semilightParagraphIndent': string;
  'fontTitle2semilightParagraphSpacing': string;
  'fontTitle2semilightTextCase': string;
  'fontTitle2semilightTextDecoration': string;
  'fontTitle3FontFamily': string;
  'fontTitle3FontSize': string;
  'fontTitle3FontStretch': string;
  'fontTitle3FontStyle': string;
  'fontTitle3FontWeight': string;
  'fontTitle3LetterSpacing': string;
  'fontTitle3LineHeight': string;
  'fontTitle3ParagraphIndent': string;
  'fontTitle3ParagraphSpacing': string;
  'fontTitle3TextCase': string;
  'fontTitle3TextDecoration': string;
  'fontTitle3lightFontFamily': string;
  'fontTitle3lightFontSize': string;
  'fontTitle3lightFontStretch': string;
  'fontTitle3lightFontStyle': string;
  'fontTitle3lightFontWeight': string;
  'fontTitle3lightLetterSpacing': string;
  'fontTitle3lightLineHeight': string;
  'fontTitle3lightParagraphIndent': string;
  'fontTitle3lightParagraphSpacing': string;
  'fontTitle3lightTextCase': string;
  'fontTitle3lightTextDecoration': string;
  'fontTitle3semilightFontFamily': string;
  'fontTitle3semilightFontSize': string;
  'fontTitle3semilightFontStretch': string;
  'fontTitle3semilightFontStyle': string;
  'fontTitle3semilightFontWeight': string;
  'fontTitle3semilightLetterSpacing': string;
  'fontTitle3semilightLineHeight': string;
  'fontTitle3semilightParagraphIndent': string;
  'fontTitle3semilightParagraphSpacing': string;
  'fontTitle3semilightTextCase': string;
  'fontTitle3semilightTextDecoration': string;
  'fontTitle3strongFontFamily': string;
  'fontTitle3strongFontSize': string;
  'fontTitle3strongFontStretch': string;
  'fontTitle3strongFontStyle': string;
  'fontTitle3strongFontWeight': string;
  'fontTitle3strongLetterSpacing': string;
  'fontTitle3strongLineHeight': string;
  'fontTitle3strongParagraphIndent': string;
  'fontTitle3strongParagraphSpacing': string;
  'fontTitle3strongTextCase': string;
  'fontTitle3strongTextDecoration': string;
  'fontTitle3strongerFontFamily': string;
  'fontTitle3strongerFontSize': string;
  'fontTitle3strongerFontStretch': string;
  'fontTitle3strongerFontStyle': string;
  'fontTitle3strongerFontWeight': string;
  'fontTitle3strongerLetterSpacing': string;
  'fontTitle3strongerLineHeight': string;
  'fontTitle3strongerParagraphIndent': string;
  'fontTitle3strongerParagraphSpacing': string;
  'fontTitle3strongerTextCase': string;
  'fontTitle3strongerTextDecoration': string;
  'fontTitle4FontFamily': string;
  'fontTitle4FontSize': string;
  'fontTitle4FontStretch': string;
  'fontTitle4FontStyle': string;
  'fontTitle4FontWeight': string;
  'fontTitle4LetterSpacing': string;
  'fontTitle4LineHeight': string;
  'fontTitle4ParagraphIndent': string;
  'fontTitle4ParagraphSpacing': string;
  'fontTitle4TextCase': string;
  'fontTitle4TextDecoration': string;
  'fontTitle4lightFontFamily': string;
  'fontTitle4lightFontSize': string;
  'fontTitle4lightFontStretch': string;
  'fontTitle4lightFontStyle': string;
  'fontTitle4lightFontWeight': string;
  'fontTitle4lightLetterSpacing': string;
  'fontTitle4lightLineHeight': string;
  'fontTitle4lightParagraphIndent': string;
  'fontTitle4lightParagraphSpacing': string;
  'fontTitle4lightTextCase': string;
  'fontTitle4lightTextDecoration': string;
  'fontTitle4semilightFontFamily': string;
  'fontTitle4semilightFontSize': string;
  'fontTitle4semilightFontStretch': string;
  'fontTitle4semilightFontStyle': string;
  'fontTitle4semilightFontWeight': string;
  'fontTitle4semilightLetterSpacing': string;
  'fontTitle4semilightLineHeight': string;
  'fontTitle4semilightParagraphIndent': string;
  'fontTitle4semilightParagraphSpacing': string;
  'fontTitle4semilightTextCase': string;
  'fontTitle4semilightTextDecoration': string;
  'fontTitle4strongFontFamily': string;
  'fontTitle4strongFontSize': string;
  'fontTitle4strongFontStretch': string;
  'fontTitle4strongFontStyle': string;
  'fontTitle4strongFontWeight': string;
  'fontTitle4strongLetterSpacing': string;
  'fontTitle4strongLineHeight': string;
  'fontTitle4strongParagraphIndent': string;
  'fontTitle4strongParagraphSpacing': string;
  'fontTitle4strongTextCase': string;
  'fontTitle4strongTextDecoration': string;
  'fontTitle4strongerFontFamily': string;
  'fontTitle4strongerFontSize': string;
  'fontTitle4strongerFontStretch': string;
  'fontTitle4strongerFontStyle': string;
  'fontTitle4strongerFontWeight': string;
  'fontTitle4strongerLetterSpacing': string;
  'fontTitle4strongerLineHeight': string;
  'fontTitle4strongerParagraphIndent': string;
  'fontTitle4strongerParagraphSpacing': string;
  'fontTitle4strongerTextCase': string;
  'fontTitle4strongerTextDecoration': string;
  'globalBorderradiusCircular': string;
  'globalBorderradiusLarge': string;
  'globalBorderradiusMedium': string;
  'globalBorderradiusNone': string;
  'globalBorderradiusSmall': string;
  'globalBorderradiusX-large': string;
  'globalColorsAlphaBlack0': string;
  'globalColorsAlphaBlack10': string;
  'globalColorsAlphaBlack20': string;
  'globalColorsAlphaBlack30': string;
  'globalColorsAlphaBlack40': string;
  'globalColorsAlphaBlack5': string;
  'globalColorsAlphaBlack50': string;
  'globalColorsAlphaBlack60': string;
  'globalColorsAlphaBlack70': string;
  'globalColorsAlphaBlack80': string;
  'globalColorsAlphaBlack90': string;
  'globalColorsAlphaBrand-1010': string;
  'globalColorsAlphaBrand-1020': string;
  'globalColorsAlphaBrand-1030': string;
  'globalColorsAlphaBrand-1040': string;
  'globalColorsAlphaBrand-105': string;
  'globalColorsAlphaBrand-1050': string;
  'globalColorsAlphaBrand-1060': string;
  'globalColorsAlphaBrand-1070': string;
  'globalColorsAlphaBrand-1080': string;
  'globalColorsAlphaBrand-1090': string;
  'globalColorsAlphaWhite0': string;
  'globalColorsAlphaWhite10': string;
  'globalColorsAlphaWhite20': string;
  'globalColorsAlphaWhite30': string;
  'globalColorsAlphaWhite40': string;
  'globalColorsAlphaWhite5': string;
  'globalColorsAlphaWhite50': string;
  'globalColorsAlphaWhite60': string;
  'globalColorsAlphaWhite70': string;
  'globalColorsAlphaWhite80': string;
  'globalColorsAlphaWhite90': string;
  'globalColorsBrandBrand-10': string;
  'globalColorsBrandBrand-100': string;
  'globalColorsBrandBrand-110': string;
  'globalColorsBrandBrand-120': string;
  'globalColorsBrandBrand-130': string;
  'globalColorsBrandBrand-20': string;
  'globalColorsBrandBrand-30': string;
  'globalColorsBrandBrand-40': string;
  'globalColorsBrandBrand-50': string;
  'globalColorsBrandBrand-60': string;
  'globalColorsBrandBrand-70': string;
  'globalColorsBrandBrand-80': string;
  'globalColorsBrandBrand-90': string;
  'globalColorsData vizCoreBlue': string;
  'globalColorsData vizCoreGray': string;
  'globalColorsData vizCoreGreen': string;
  'globalColorsData vizCoreOcean': string;
  'globalColorsData vizCoreRed': string;
  'globalColorsData vizCoreTeal': string;
  'globalColorsData vizCoreYellow': string;
  'globalColorsData vizSemanticDark bkgdNegative': string;
  'globalColorsData vizSemanticDark bkgdNotice': string;
  'globalColorsData vizSemanticDark bkgdPositive': string;
  'globalColorsData vizSemanticLight bkgdNegative': string;
  'globalColorsData vizSemanticLight bkgdNotice': string;
  'globalColorsData vizSemanticLight bkgdPositive': string;
  'globalColorsData vizSequentialBlue100': string;
  'globalColorsData vizSequentialBlue200': string;
  'globalColorsData vizSequentialBlue300': string;
  'globalColorsData vizSequentialBlue400': string;
  'globalColorsData vizSequentialGray100': string;
  'globalColorsData vizSequentialGray200': string;
  'globalColorsData vizSequentialGray300': string;
  'globalColorsData vizSequentialGray400': string;
  'globalColorsData vizSequentialGreen100': string;
  'globalColorsData vizSequentialGreen200': string;
  'globalColorsData vizSequentialGreen300': string;
  'globalColorsData vizSequentialGreen400': string;
  'globalColorsData vizSequentialOcean100': string;
  'globalColorsData vizSequentialOcean200': string;
  'globalColorsData vizSequentialOcean300': string;
  'globalColorsData vizSequentialOcean400': string;
  'globalColorsData vizSequentialRed100': string;
  'globalColorsData vizSequentialRed200': string;
  'globalColorsData vizSequentialRed300': string;
  'globalColorsData vizSequentialRed400': string;
  'globalColorsData vizSequentialTeal100': string;
  'globalColorsData vizSequentialTeal200': string;
  'globalColorsData vizSequentialTeal300': string;
  'globalColorsData vizSequentialTeal400': string;
  'globalColorsData vizSequentialYellow100': string;
  'globalColorsData vizSequentialYellow200': string;
  'globalColorsData vizSequentialYellow300': string;
  'globalColorsData vizSequentialYellow400': string;
  'globalColorsNeutralBlack': string;
  'globalColorsNeutralGrey-10': string;
  'globalColorsNeutralGrey-12': string;
  'globalColorsNeutralGrey-20': string;
  'globalColorsNeutralGrey-30': string;
  'globalColorsNeutralGrey-40': string;
  'globalColorsNeutralGrey-50': string;
  'globalColorsNeutralGrey-6': string;
  'globalColorsNeutralGrey-60': string;
  'globalColorsNeutralGrey-70': string;
  'globalColorsNeutralGrey-8': string;
  'globalColorsNeutralGrey-80': string;
  'globalColorsNeutralGrey-90': string;
  'globalColorsNeutralWhite': string;
  'globalColorsSharedAnchorPrimary': string;
  'globalColorsSharedAnchorShade 10': string;
  'globalColorsSharedAnchorShade 20': string;
  'globalColorsSharedAnchorShade 30': string;
  'globalColorsSharedAnchorShade 40': string;
  'globalColorsSharedAnchorShade 50': string;
  'globalColorsSharedAnchorTint 10': string;
  'globalColorsSharedAnchorTint 20': string;
  'globalColorsSharedAnchorTint 30': string;
  'globalColorsSharedAnchorTint 40': string;
  'globalColorsSharedAnchorTint 50': string;
  'globalColorsSharedAnchorTint 60': string;
  'globalColorsSharedBeigePrimary': string;
  'globalColorsSharedBeigeShade 10': string;
  'globalColorsSharedBeigeShade 20': string;
  'globalColorsSharedBeigeShade 30': string;
  'globalColorsSharedBeigeShade 40': string;
  'globalColorsSharedBeigeShade 50': string;
  'globalColorsSharedBeigeTint 10': string;
  'globalColorsSharedBeigeTint 20': string;
  'globalColorsSharedBeigeTint 30': string;
  'globalColorsSharedBeigeTint 40': string;
  'globalColorsSharedBeigeTint 50': string;
  'globalColorsSharedBeigeTint 60': string;
  'globalColorsSharedBerryPrimary': string;
  'globalColorsSharedBerryShade 10': string;
  'globalColorsSharedBerryShade 20': string;
  'globalColorsSharedBerryShade 30': string;
  'globalColorsSharedBerryShade 40': string;
  'globalColorsSharedBerryShade 50': string;
  'globalColorsSharedBerryTint 10': string;
  'globalColorsSharedBerryTint 20': string;
  'globalColorsSharedBerryTint 30': string;
  'globalColorsSharedBerryTint 40': string;
  'globalColorsSharedBerryTint 50': string;
  'globalColorsSharedBerryTint 60': string;
  'globalColorsSharedBluePrimary': string;
  'globalColorsSharedBlueShade 10': string;
  'globalColorsSharedBlueShade 20': string;
  'globalColorsSharedBlueShade 30': string;
  'globalColorsSharedBlueShade 40': string;
  'globalColorsSharedBlueShade 50': string;
  'globalColorsSharedBlueTint 10': string;
  'globalColorsSharedBlueTint 20': string;
  'globalColorsSharedBlueTint 30': string;
  'globalColorsSharedBlueTint 40': string;
  'globalColorsSharedBlueTint 50': string;
  'globalColorsSharedBlueTint 60': string;
  'globalColorsSharedBrassPrimary': string;
  'globalColorsSharedBrassShade 10': string;
  'globalColorsSharedBrassShade 20': string;
  'globalColorsSharedBrassShade 30': string;
  'globalColorsSharedBrassShade 40': string;
  'globalColorsSharedBrassShade 50': string;
  'globalColorsSharedBrassTint 10': string;
  'globalColorsSharedBrassTint 20': string;
  'globalColorsSharedBrassTint 30': string;
  'globalColorsSharedBrassTint 40': string;
  'globalColorsSharedBrassTint 50': string;
  'globalColorsSharedBrassTint 60': string;
  'globalColorsSharedBronzePrimary': string;
  'globalColorsSharedBronzeShade 10': string;
  'globalColorsSharedBronzeShade 20': string;
  'globalColorsSharedBronzeShade 30': string;
  'globalColorsSharedBronzeShade 40': string;
  'globalColorsSharedBronzeShade 50': string;
  'globalColorsSharedBronzeTint 10': string;
  'globalColorsSharedBronzeTint 20': string;
  'globalColorsSharedBronzeTint 30': string;
  'globalColorsSharedBronzeTint 40': string;
  'globalColorsSharedBronzeTint 50': string;
  'globalColorsSharedBronzeTint 60': string;
  'globalColorsSharedBrownPrimary': string;
  'globalColorsSharedBrownShade 10': string;
  'globalColorsSharedBrownShade 20': string;
  'globalColorsSharedBrownShade 30': string;
  'globalColorsSharedBrownShade 40': string;
  'globalColorsSharedBrownShade 50': string;
  'globalColorsSharedBrownTint 10': string;
  'globalColorsSharedBrownTint 20': string;
  'globalColorsSharedBrownTint 30': string;
  'globalColorsSharedBrownTint 40': string;
  'globalColorsSharedBrownTint 50': string;
  'globalColorsSharedBrownTint 60': string;
  'globalColorsSharedBurgundyPrimary': string;
  'globalColorsSharedBurgundyShade 10': string;
  'globalColorsSharedBurgundyShade 20': string;
  'globalColorsSharedBurgundyShade 30': string;
  'globalColorsSharedBurgundyShade 40': string;
  'globalColorsSharedBurgundyShade 50': string;
  'globalColorsSharedBurgundyTint 10': string;
  'globalColorsSharedBurgundyTint 20': string;
  'globalColorsSharedBurgundyTint 30': string;
  'globalColorsSharedBurgundyTint 40': string;
  'globalColorsSharedBurgundyTint 50': string;
  'globalColorsSharedBurgundyTint 60': string;
  'globalColorsSharedCharcoalPrimary': string;
  'globalColorsSharedCharcoalShade 10': string;
  'globalColorsSharedCharcoalShade 20': string;
  'globalColorsSharedCharcoalShade 30': string;
  'globalColorsSharedCharcoalShade 40': string;
  'globalColorsSharedCharcoalShade 50': string;
  'globalColorsSharedCharcoalTint 10': string;
  'globalColorsSharedCharcoalTint 20': string;
  'globalColorsSharedCharcoalTint 30': string;
  'globalColorsSharedCharcoalTint 40': string;
  'globalColorsSharedCharcoalTint 50': string;
  'globalColorsSharedCharcoalTint 60': string;
  'globalColorsSharedCornflowerPrimary': string;
  'globalColorsSharedCornflowerShade 10': string;
  'globalColorsSharedCornflowerShade 20': string;
  'globalColorsSharedCornflowerShade 30': string;
  'globalColorsSharedCornflowerShade 40': string;
  'globalColorsSharedCornflowerShade 50': string;
  'globalColorsSharedCornflowerTint 10': string;
  'globalColorsSharedCornflowerTint 20': string;
  'globalColorsSharedCornflowerTint 30': string;
  'globalColorsSharedCornflowerTint 40': string;
  'globalColorsSharedCornflowerTint 50': string;
  'globalColorsSharedCornflowerTint 60': string;
  'globalColorsSharedCranberryPrimary': string;
  'globalColorsSharedCranberryTint 30': string;
  'globalColorsSharedCranberryTint 60': string;
  'globalColorsSharedCyanPrimary': string;
  'globalColorsSharedCyanShade 10': string;
  'globalColorsSharedCyanShade 20': string;
  'globalColorsSharedCyanShade 30': string;
  'globalColorsSharedCyanShade 40': string;
  'globalColorsSharedCyanShade 50': string;
  'globalColorsSharedCyanTint 10': string;
  'globalColorsSharedCyanTint 20': string;
  'globalColorsSharedCyanTint 30': string;
  'globalColorsSharedCyanTint 40': string;
  'globalColorsSharedCyanTint 50': string;
  'globalColorsSharedCyanTint 60': string;
  'globalColorsSharedDark bluePrimary': string;
  'globalColorsSharedDark blueShade 10': string;
  'globalColorsSharedDark blueShade 20': string;
  'globalColorsSharedDark blueShade 30': string;
  'globalColorsSharedDark blueShade 40': string;
  'globalColorsSharedDark blueShade 50': string;
  'globalColorsSharedDark blueTint 10': string;
  'globalColorsSharedDark blueTint 20': string;
  'globalColorsSharedDark blueTint 30': string;
  'globalColorsSharedDark blueTint 40': string;
  'globalColorsSharedDark blueTint 50': string;
  'globalColorsSharedDark blueTint 60': string;
  'globalColorsSharedDark brownPrimary': string;
  'globalColorsSharedDark brownShade 10': string;
  'globalColorsSharedDark brownShade 20': string;
  'globalColorsSharedDark brownShade 30': string;
  'globalColorsSharedDark brownShade 40': string;
  'globalColorsSharedDark brownShade 50': string;
  'globalColorsSharedDark brownTint 10': string;
  'globalColorsSharedDark brownTint 20': string;
  'globalColorsSharedDark brownTint 30': string;
  'globalColorsSharedDark brownTint 40': string;
  'globalColorsSharedDark brownTint 50': string;
  'globalColorsSharedDark brownTint 60': string;
  'globalColorsSharedDark greenPrimary': string;
  'globalColorsSharedDark greenShade 10': string;
  'globalColorsSharedDark greenShade 20': string;
  'globalColorsSharedDark greenShade 30': string;
  'globalColorsSharedDark greenShade 40': string;
  'globalColorsSharedDark greenShade 50': string;
  'globalColorsSharedDark greenTint 10': string;
  'globalColorsSharedDark greenTint 20': string;
  'globalColorsSharedDark greenTint 30': string;
  'globalColorsSharedDark greenTint 40': string;
  'globalColorsSharedDark greenTint 50': string;
  'globalColorsSharedDark greenTint 60': string;
  'globalColorsSharedDark orangePrimary': string;
  'globalColorsSharedDark orangeTint 30': string;
  'globalColorsSharedDark orangeTint 60': string;
  'globalColorsSharedDark purplePrimary': string;
  'globalColorsSharedDark purpleShade 10': string;
  'globalColorsSharedDark purpleShade 20': string;
  'globalColorsSharedDark purpleShade 30': string;
  'globalColorsSharedDark purpleShade 40': string;
  'globalColorsSharedDark purpleShade 50': string;
  'globalColorsSharedDark purpleTint 10': string;
  'globalColorsSharedDark purpleTint 20': string;
  'globalColorsSharedDark purpleTint 30': string;
  'globalColorsSharedDark purpleTint 40': string;
  'globalColorsSharedDark purpleTint 50': string;
  'globalColorsSharedDark purpleTint 60': string;
  'globalColorsSharedDark tealPrimary': string;
  'globalColorsSharedDark tealShade 10': string;
  'globalColorsSharedDark tealShade 20': string;
  'globalColorsSharedDark tealShade 30': string;
  'globalColorsSharedDark tealShade 40': string;
  'globalColorsSharedDark tealShade 50': string;
  'globalColorsSharedDark tealTint 10': string;
  'globalColorsSharedDark tealTint 20': string;
  'globalColorsSharedDark tealTint 30': string;
  'globalColorsSharedDark tealTint 40': string;
  'globalColorsSharedDark tealTint 50': string;
  'globalColorsSharedDark tealTint 60': string;
  'globalColorsSharedForestPrimary': string;
  'globalColorsSharedForestShade 10': string;
  'globalColorsSharedForestShade 20': string;
  'globalColorsSharedForestShade 30': string;
  'globalColorsSharedForestShade 40': string;
  'globalColorsSharedForestShade 50': string;
  'globalColorsSharedForestTint 10': string;
  'globalColorsSharedForestTint 20': string;
  'globalColorsSharedForestTint 30': string;
  'globalColorsSharedForestTint 40': string;
  'globalColorsSharedForestTint 50': string;
  'globalColorsSharedForestTint 60': string;
  'globalColorsSharedGoldPrimary': string;
  'globalColorsSharedGoldShade 10': string;
  'globalColorsSharedGoldShade 20': string;
  'globalColorsSharedGoldShade 30': string;
  'globalColorsSharedGoldShade 40': string;
  'globalColorsSharedGoldShade 50': string;
  'globalColorsSharedGoldTint 10': string;
  'globalColorsSharedGoldTint 20': string;
  'globalColorsSharedGoldTint 30': string;
  'globalColorsSharedGoldTint 40': string;
  'globalColorsSharedGoldTint 50': string;
  'globalColorsSharedGoldTint 60': string;
  'globalColorsSharedGrapePrimary': string;
  'globalColorsSharedGrapeShade 10': string;
  'globalColorsSharedGrapeShade 20': string;
  'globalColorsSharedGrapeShade 30': string;
  'globalColorsSharedGrapeShade 40': string;
  'globalColorsSharedGrapeShade 50': string;
  'globalColorsSharedGrapeTint 10': string;
  'globalColorsSharedGrapeTint 20': string;
  'globalColorsSharedGrapeTint 30': string;
  'globalColorsSharedGrapeTint 40': string;
  'globalColorsSharedGrapeTint 50': string;
  'globalColorsSharedGrapeTint 60': string;
  'globalColorsSharedGreenPrimary': string;
  'globalColorsSharedGreenTint 30': string;
  'globalColorsSharedGreenTint 60': string;
  'globalColorsSharedHot pinkPrimary': string;
  'globalColorsSharedHot pinkShade 10': string;
  'globalColorsSharedHot pinkShade 20': string;
  'globalColorsSharedHot pinkShade 30': string;
  'globalColorsSharedHot pinkShade 40': string;
  'globalColorsSharedHot pinkShade 50': string;
  'globalColorsSharedHot pinkTint 10': string;
  'globalColorsSharedHot pinkTint 20': string;
  'globalColorsSharedHot pinkTint 30': string;
  'globalColorsSharedHot pinkTint 40': string;
  'globalColorsSharedHot pinkTint 50': string;
  'globalColorsSharedHot pinkTint 60': string;
  'globalColorsSharedInformationPrimary': string;
  'globalColorsSharedInformationShade 10': string;
  'globalColorsSharedInformationShade 20': string;
  'globalColorsSharedInformationTint 10': string;
  'globalColorsSharedInformationTint 20': string;
  'globalColorsSharedInformationTint 30': string;
  'globalColorsSharedInformationTint 40': string;
  'globalColorsSharedInformationTint 50': string;
  'globalColorsSharedInformationTint 60': string;
  'globalColorsSharedLavenderPrimary': string;
  'globalColorsSharedLavenderShade 10': string;
  'globalColorsSharedLavenderShade 20': string;
  'globalColorsSharedLavenderShade 30': string;
  'globalColorsSharedLavenderShade 40': string;
  'globalColorsSharedLavenderShade 50': string;
  'globalColorsSharedLavenderTint 10': string;
  'globalColorsSharedLavenderTint 20': string;
  'globalColorsSharedLavenderTint 30': string;
  'globalColorsSharedLavenderTint 40': string;
  'globalColorsSharedLavenderTint 50': string;
  'globalColorsSharedLavenderTint 60': string;
  'globalColorsSharedLight bluePrimary': string;
  'globalColorsSharedLight blueShade 10': string;
  'globalColorsSharedLight blueShade 20': string;
  'globalColorsSharedLight blueShade 30': string;
  'globalColorsSharedLight blueShade 40': string;
  'globalColorsSharedLight blueShade 50': string;
  'globalColorsSharedLight blueTint 10': string;
  'globalColorsSharedLight blueTint 20': string;
  'globalColorsSharedLight blueTint 30': string;
  'globalColorsSharedLight blueTint 40': string;
  'globalColorsSharedLight blueTint 50': string;
  'globalColorsSharedLight blueTint 60': string;
  'globalColorsSharedLight greenPrimary': string;
  'globalColorsSharedLight greenShade 10': string;
  'globalColorsSharedLight greenShade 20': string;
  'globalColorsSharedLight greenShade 30': string;
  'globalColorsSharedLight greenShade 40': string;
  'globalColorsSharedLight greenShade 50': string;
  'globalColorsSharedLight greenTint 10': string;
  'globalColorsSharedLight greenTint 20': string;
  'globalColorsSharedLight greenTint 30': string;
  'globalColorsSharedLight greenTint 40': string;
  'globalColorsSharedLight greenTint 50': string;
  'globalColorsSharedLight greenTint 60': string;
  'globalColorsSharedLight tealPrimary': string;
  'globalColorsSharedLight tealShade 10': string;
  'globalColorsSharedLight tealShade 20': string;
  'globalColorsSharedLight tealShade 30': string;
  'globalColorsSharedLight tealShade 40': string;
  'globalColorsSharedLight tealShade 50': string;
  'globalColorsSharedLight tealTint 10': string;
  'globalColorsSharedLight tealTint 20': string;
  'globalColorsSharedLight tealTint 30': string;
  'globalColorsSharedLight tealTint 40': string;
  'globalColorsSharedLight tealTint 50': string;
  'globalColorsSharedLight tealTint 60': string;
  'globalColorsSharedLilacPrimary': string;
  'globalColorsSharedLilacShade 10': string;
  'globalColorsSharedLilacShade 20': string;
  'globalColorsSharedLilacShade 30': string;
  'globalColorsSharedLilacShade 40': string;
  'globalColorsSharedLilacShade 50': string;
  'globalColorsSharedLilacTint 10': string;
  'globalColorsSharedLilacTint 20': string;
  'globalColorsSharedLilacTint 30': string;
  'globalColorsSharedLilacTint 40': string;
  'globalColorsSharedLilacTint 50': string;
  'globalColorsSharedLilacTint 60': string;
  'globalColorsSharedLimePrimary': string;
  'globalColorsSharedLimeShade 10': string;
  'globalColorsSharedLimeShade 20': string;
  'globalColorsSharedLimeShade 30': string;
  'globalColorsSharedLimeShade 40': string;
  'globalColorsSharedLimeShade 50': string;
  'globalColorsSharedLimeTint 10': string;
  'globalColorsSharedLimeTint 20': string;
  'globalColorsSharedLimeTint 30': string;
  'globalColorsSharedLimeTint 40': string;
  'globalColorsSharedLimeTint 50': string;
  'globalColorsSharedLimeTint 60': string;
  'globalColorsSharedMagentaPrimary': string;
  'globalColorsSharedMagentaShade 10': string;
  'globalColorsSharedMagentaShade 20': string;
  'globalColorsSharedMagentaShade 30': string;
  'globalColorsSharedMagentaShade 40': string;
  'globalColorsSharedMagentaShade 50': string;
  'globalColorsSharedMagentaTint 10': string;
  'globalColorsSharedMagentaTint 20': string;
  'globalColorsSharedMagentaTint 30': string;
  'globalColorsSharedMagentaTint 40': string;
  'globalColorsSharedMagentaTint 50': string;
  'globalColorsSharedMagentaTint 60': string;
  'globalColorsSharedMarigoldPrimary': string;
  'globalColorsSharedMarigoldShade 10': string;
  'globalColorsSharedMarigoldShade 20': string;
  'globalColorsSharedMarigoldShade 30': string;
  'globalColorsSharedMarigoldShade 40': string;
  'globalColorsSharedMarigoldShade 50': string;
  'globalColorsSharedMarigoldTint 10': string;
  'globalColorsSharedMarigoldTint 20': string;
  'globalColorsSharedMarigoldTint 30': string;
  'globalColorsSharedMarigoldTint 40': string;
  'globalColorsSharedMarigoldTint 50': string;
  'globalColorsSharedMarigoldTint 60': string;
  'globalColorsSharedMinkPrimary': string;
  'globalColorsSharedMinkShade 10': string;
  'globalColorsSharedMinkShade 20': string;
  'globalColorsSharedMinkShade 30': string;
  'globalColorsSharedMinkShade 40': string;
  'globalColorsSharedMinkShade 50': string;
  'globalColorsSharedMinkTint 10': string;
  'globalColorsSharedMinkTint 20': string;
  'globalColorsSharedMinkTint 30': string;
  'globalColorsSharedMinkTint 40': string;
  'globalColorsSharedMinkTint 50': string;
  'globalColorsSharedMinkTint 60': string;
  'globalColorsSharedNavyPrimary': string;
  'globalColorsSharedNavyShade 10': string;
  'globalColorsSharedNavyShade 20': string;
  'globalColorsSharedNavyShade 30': string;
  'globalColorsSharedNavyShade 40': string;
  'globalColorsSharedNavyShade 50': string;
  'globalColorsSharedNavyTint 10': string;
  'globalColorsSharedNavyTint 20': string;
  'globalColorsSharedNavyTint 30': string;
  'globalColorsSharedNavyTint 40': string;
  'globalColorsSharedNavyTint 50': string;
  'globalColorsSharedNavyTint 60': string;
  'globalColorsSharedOrangePrimary': string;
  'globalColorsSharedOrangeTint 30': string;
  'globalColorsSharedOrangeTint 60': string;
  'globalColorsSharedOrchidPrimary': string;
  'globalColorsSharedOrchidShade 10': string;
  'globalColorsSharedOrchidShade 20': string;
  'globalColorsSharedOrchidShade 30': string;
  'globalColorsSharedOrchidShade 40': string;
  'globalColorsSharedOrchidShade 50': string;
  'globalColorsSharedOrchidTint 10': string;
  'globalColorsSharedOrchidTint 20': string;
  'globalColorsSharedOrchidTint 30': string;
  'globalColorsSharedOrchidTint 40': string;
  'globalColorsSharedOrchidTint 50': string;
  'globalColorsSharedOrchidTint 60': string;
  'globalColorsSharedPeachPrimary': string;
  'globalColorsSharedPeachShade 10': string;
  'globalColorsSharedPeachShade 20': string;
  'globalColorsSharedPeachShade 30': string;
  'globalColorsSharedPeachShade 40': string;
  'globalColorsSharedPeachShade 50': string;
  'globalColorsSharedPeachTint 10': string;
  'globalColorsSharedPeachTint 20': string;
  'globalColorsSharedPeachTint 30': string;
  'globalColorsSharedPeachTint 40': string;
  'globalColorsSharedPeachTint 50': string;
  'globalColorsSharedPeachTint 60': string;
  'globalColorsSharedPinkPrimary': string;
  'globalColorsSharedPinkShade 10': string;
  'globalColorsSharedPinkShade 20': string;
  'globalColorsSharedPinkShade 30': string;
  'globalColorsSharedPinkShade 40': string;
  'globalColorsSharedPinkShade 50': string;
  'globalColorsSharedPinkTint 10': string;
  'globalColorsSharedPinkTint 20': string;
  'globalColorsSharedPinkTint 30': string;
  'globalColorsSharedPinkTint 40': string;
  'globalColorsSharedPinkTint 50': string;
  'globalColorsSharedPinkTint 60': string;
  'globalColorsSharedPlatinumPrimary': string;
  'globalColorsSharedPlatinumShade 10': string;
  'globalColorsSharedPlatinumShade 20': string;
  'globalColorsSharedPlatinumShade 30': string;
  'globalColorsSharedPlatinumShade 40': string;
  'globalColorsSharedPlatinumShade 50': string;
  'globalColorsSharedPlatinumTint 10': string;
  'globalColorsSharedPlatinumTint 20': string;
  'globalColorsSharedPlatinumTint 30': string;
  'globalColorsSharedPlatinumTint 40': string;
  'globalColorsSharedPlatinumTint 50': string;
  'globalColorsSharedPlatinumTint 60': string;
  'globalColorsSharedPlumPrimary': string;
  'globalColorsSharedPlumShade 10': string;
  'globalColorsSharedPlumShade 20': string;
  'globalColorsSharedPlumShade 30': string;
  'globalColorsSharedPlumShade 40': string;
  'globalColorsSharedPlumShade 50': string;
  'globalColorsSharedPlumTint 10': string;
  'globalColorsSharedPlumTint 20': string;
  'globalColorsSharedPlumTint 30': string;
  'globalColorsSharedPlumTint 40': string;
  'globalColorsSharedPlumTint 50': string;
  'globalColorsSharedPlumTint 60': string;
  'globalColorsSharedPurplePrimary': string;
  'globalColorsSharedPurpleShade 10': string;
  'globalColorsSharedPurpleShade 20': string;
  'globalColorsSharedPurpleShade 30': string;
  'globalColorsSharedPurpleShade 40': string;
  'globalColorsSharedPurpleShade 50': string;
  'globalColorsSharedPurpleTint 10': string;
  'globalColorsSharedPurpleTint 20': string;
  'globalColorsSharedPurpleTint 30': string;
  'globalColorsSharedPurpleTint 40': string;
  'globalColorsSharedPurpleTint 50': string;
  'globalColorsSharedPurpleTint 60': string;
  'globalColorsSharedRedPrimary': string;
  'globalColorsSharedRedShade 10': string;
  'globalColorsSharedRedShade 20': string;
  'globalColorsSharedRedShade 30': string;
  'globalColorsSharedRedShade 40': string;
  'globalColorsSharedRedShade 50': string;
  'globalColorsSharedRedTint 10': string;
  'globalColorsSharedRedTint 20': string;
  'globalColorsSharedRedTint 30': string;
  'globalColorsSharedRedTint 40': string;
  'globalColorsSharedRedTint 50': string;
  'globalColorsSharedRedTint 60': string;
  'globalColorsSharedRoyal bluePrimary': string;
  'globalColorsSharedRoyal blueShade 10': string;
  'globalColorsSharedRoyal blueShade 20': string;
  'globalColorsSharedRoyal blueShade 30': string;
  'globalColorsSharedRoyal blueShade 40': string;
  'globalColorsSharedRoyal blueShade 50': string;
  'globalColorsSharedRoyal blueTint 10': string;
  'globalColorsSharedRoyal blueTint 20': string;
  'globalColorsSharedRoyal blueTint 30': string;
  'globalColorsSharedRoyal blueTint 40': string;
  'globalColorsSharedRoyal blueTint 50': string;
  'globalColorsSharedRoyal blueTint 60': string;
  'globalColorsSharedSeafoamPrimary': string;
  'globalColorsSharedSeafoamShade 10': string;
  'globalColorsSharedSeafoamShade 20': string;
  'globalColorsSharedSeafoamShade 30': string;
  'globalColorsSharedSeafoamShade 40': string;
  'globalColorsSharedSeafoamShade 50': string;
  'globalColorsSharedSeafoamTint 10': string;
  'globalColorsSharedSeafoamTint 20': string;
  'globalColorsSharedSeafoamTint 30': string;
  'globalColorsSharedSeafoamTint 40': string;
  'globalColorsSharedSeafoamTint 50': string;
  'globalColorsSharedSeafoamTint 60': string;
  'globalColorsSharedSilverPrimary': string;
  'globalColorsSharedSilverShade 10': string;
  'globalColorsSharedSilverShade 20': string;
  'globalColorsSharedSilverShade 30': string;
  'globalColorsSharedSilverShade 40': string;
  'globalColorsSharedSilverShade 50': string;
  'globalColorsSharedSilverTint 10': string;
  'globalColorsSharedSilverTint 20': string;
  'globalColorsSharedSilverTint 30': string;
  'globalColorsSharedSilverTint 40': string;
  'globalColorsSharedSilverTint 50': string;
  'globalColorsSharedSilverTint 60': string;
  'globalColorsSharedSteelPrimary': string;
  'globalColorsSharedSteelShade 10': string;
  'globalColorsSharedSteelShade 20': string;
  'globalColorsSharedSteelShade 30': string;
  'globalColorsSharedSteelShade 40': string;
  'globalColorsSharedSteelShade 50': string;
  'globalColorsSharedSteelTint 10': string;
  'globalColorsSharedSteelTint 20': string;
  'globalColorsSharedSteelTint 30': string;
  'globalColorsSharedSteelTint 40': string;
  'globalColorsSharedSteelTint 50': string;
  'globalColorsSharedSteelTint 60': string;
  'globalColorsSharedTealPrimary': string;
  'globalColorsSharedTealShade 10': string;
  'globalColorsSharedTealShade 20': string;
  'globalColorsSharedTealShade 30': string;
  'globalColorsSharedTealShade 40': string;
  'globalColorsSharedTealShade 50': string;
  'globalColorsSharedTealTint 10': string;
  'globalColorsSharedTealTint 20': string;
  'globalColorsSharedTealTint 30': string;
  'globalColorsSharedTealTint 40': string;
  'globalColorsSharedTealTint 50': string;
  'globalColorsSharedTealTint 60': string;
  'globalColorsSharedYellowPrimary': string;
  'globalColorsSharedYellowShade 10': string;
  'globalColorsSharedYellowShade 20': string;
  'globalColorsSharedYellowShade 30': string;
  'globalColorsSharedYellowShade 40': string;
  'globalColorsSharedYellowShade 50': string;
  'globalColorsSharedYellowTint 10': string;
  'globalColorsSharedYellowTint 20': string;
  'globalColorsSharedYellowTint 30': string;
  'globalColorsSharedYellowTint 40': string;
  'globalColorsSharedYellowTint 50': string;
  'globalColorsSharedYellowTint 60': string;
  'globalSpacinghorizontalL': string;
  'globalSpacinghorizontalLnudge': string;
  'globalSpacinghorizontalM': string;
  'globalSpacinghorizontalMnudge': string;
  'globalSpacinghorizontalNone': string;
  'globalSpacinghorizontalS': string;
  'globalSpacinghorizontalSnudge': string;
  'globalSpacinghorizontalXl': string;
  'globalSpacinghorizontalXs': string;
  'globalSpacinghorizontalXxl': string;
  'globalSpacinghorizontalXxs': string;
  'globalSpacinghorizontalXxxl': string;
  'globalSpacinghorizontalXxxxl': string;
  'globalSpacingverticalL': string;
  'globalSpacingverticalLnudge': string;
  'globalSpacingverticalM': string;
  'globalSpacingverticalMnudge': string;
  'globalSpacingverticalNone': string;
  'globalSpacingverticalS': string;
  'globalSpacingverticalSnudge': string;
  'globalSpacingverticalXl': string;
  'globalSpacingverticalXs': string;
  'globalSpacingverticalXxl': string;
  'globalSpacingverticalXxs': string;
  'globalSpacingverticalXxxl': string;
  'globalSpacingverticalXxxxl': string;
  'globalStrokewidthNone': string;
  'globalStrokewidthThick': string;
  'globalStrokewidthThicker': string;
  'globalStrokewidthThickest': string;
  'globalStrokewidthThin': string;
  'gradientLinear': string;
  'popover sizeLargePopover-padding-horizontal': string;
  'popover sizeLargePopover-padding-vertical': string;
  'popover sizeMediumPopover-padding-horizontal': string;
  'popover sizeMediumPopover-padding-vertical': string;
  'popover sizeSmallPopover-padding-horizontal': string;
  'popover sizeSmallPopover-padding-vertical': string;
  'themeDarkBrandBackground1Hover': string;
  'themeDarkBrandBackground1Pressed': string;
  'themeDarkBrandBackground1Rest': string;
  'themeDarkBrandBackground1Selected': string;
  'themeDarkBrandBackground2Hover': string;
  'themeDarkBrandBackground2Pressed': string;
  'themeDarkBrandBackground2Rest': string;
  'themeDarkBrandBackground3Rest': string;
  'themeDarkBrandBackgroundCompoundHover': string;
  'themeDarkBrandBackgroundCompoundPressed': string;
  'themeDarkBrandBackgroundCompoundRest': string;
  'themeDarkBrandBackgroundInvertedHover': string;
  'themeDarkBrandBackgroundInvertedPressed': string;
  'themeDarkBrandBackgroundInvertedRest': string;
  'themeDarkBrandBackgroundInvertedSelected': string;
  'themeDarkBrandBackgroundStaticRest': string;
  'themeDarkBrandForeground1Hover': string;
  'themeDarkBrandForeground1Pressed': string;
  'themeDarkBrandForeground1Rest': string;
  'themeDarkBrandForeground1Selected': string;
  'themeDarkBrandForeground2Hover': string;
  'themeDarkBrandForeground2Pressed': string;
  'themeDarkBrandForeground2Rest': string;
  'themeDarkBrandForegroundCompoundHover': string;
  'themeDarkBrandForegroundCompoundPressed': string;
  'themeDarkBrandForegroundCompoundRest': string;
  'themeDarkBrandForegroundInvertedHover': string;
  'themeDarkBrandForegroundInvertedPressed': string;
  'themeDarkBrandForegroundInvertedRest': string;
  'themeDarkBrandForegroundLinkHover': string;
  'themeDarkBrandForegroundLinkPressed': string;
  'themeDarkBrandForegroundLinkRest': string;
  'themeDarkBrandForegroundLinkSelected': string;
  'themeDarkBrandForegroundOn lightHover': string;
  'themeDarkBrandForegroundOn lightPressed': string;
  'themeDarkBrandForegroundOn lightRest': string;
  'themeDarkBrandForegroundOn lightSelected': string;
  'themeDarkBrandStroke1Hover': string;
  'themeDarkBrandStroke1Pressed': string;
  'themeDarkBrandStroke1Rest': string;
  'themeDarkBrandStroke1Selected': string;
  'themeDarkBrandStroke2ContrastRest': string;
  'themeDarkBrandStroke2Rest': string;
  'themeDarkBrandStroke3Rest': string;
  'themeDarkBrandStrokeCompoundHover': string;
  'themeDarkBrandStrokeCompoundPressed': string;
  'themeDarkBrandStrokeCompoundRest': string;
  'themeDarkControl logicTheme switch': string;
  'themeDarkData vizBackgroundCoreBlue': string;
  'themeDarkData vizBackgroundCoreGray': string;
  'themeDarkData vizBackgroundCoreGreen': string;
  'themeDarkData vizBackgroundCoreOcean': string;
  'themeDarkData vizBackgroundCoreRed': string;
  'themeDarkData vizBackgroundCoreTeal': string;
  'themeDarkData vizBackgroundCoreYellow': string;
  'themeDarkData vizBackgroundNeutralBlack': string;
  'themeDarkData vizBackgroundSequentialBlue100': string;
  'themeDarkData vizBackgroundSequentialBlue200': string;
  'themeDarkData vizBackgroundSequentialBlue300': string;
  'themeDarkData vizBackgroundSequentialBlue400': string;
  'themeDarkData vizBackgroundSequentialGray100': string;
  'themeDarkData vizBackgroundSequentialGray200': string;
  'themeDarkData vizBackgroundSequentialGray300': string;
  'themeDarkData vizBackgroundSequentialGray400': string;
  'themeDarkData vizBackgroundSequentialGreen100': string;
  'themeDarkData vizBackgroundSequentialGreen200': string;
  'themeDarkData vizBackgroundSequentialGreen300': string;
  'themeDarkData vizBackgroundSequentialGreen400': string;
  'themeDarkData vizBackgroundSequentialOcean100': string;
  'themeDarkData vizBackgroundSequentialOcean200': string;
  'themeDarkData vizBackgroundSequentialOcean300': string;
  'themeDarkData vizBackgroundSequentialOcean400': string;
  'themeDarkData vizBackgroundSequentialRed100': string;
  'themeDarkData vizBackgroundSequentialRed200': string;
  'themeDarkData vizBackgroundSequentialRed300': string;
  'themeDarkData vizBackgroundSequentialRed400': string;
  'themeDarkData vizBackgroundSequentialTeal100': string;
  'themeDarkData vizBackgroundSequentialTeal200': string;
  'themeDarkData vizBackgroundSequentialTeal300': string;
  'themeDarkData vizBackgroundSequentialTeal400': string;
  'themeDarkData vizBackgroundSequentialYellow100': string;
  'themeDarkData vizBackgroundSequentialYellow200': string;
  'themeDarkData vizBackgroundSequentialYellow300': string;
  'themeDarkData vizBackgroundSequentialYellow400': string;
  'themeDarkData vizForegroundAccessibilityText dark bkgd': string;
  'themeDarkData vizForegroundAccessibilityText light bkgd': string;
  'themeDarkData vizForegroundKpi cardText dark bkgd': string;
  'themeDarkData vizForegroundKpi cardText light bkgd': string;
  'themeDarkData vizForegroundLabelsCategorical': string;
  'themeDarkData vizForegroundLabelsColorBlue': string;
  'themeDarkData vizForegroundLabelsColorBlue200': string;
  'themeDarkData vizForegroundLabelsColorBlue400': string;
  'themeDarkData vizForegroundLabelsColorGray': string;
  'themeDarkData vizForegroundLabelsColorGray300': string;
  'themeDarkData vizForegroundLabelsColorGray400': string;
  'themeDarkData vizForegroundLabelsColorGreen': string;
  'themeDarkData vizForegroundLabelsColorGreen300': string;
  'themeDarkData vizForegroundLabelsColorGreen400': string;
  'themeDarkData vizForegroundLabelsColorOcean': string;
  'themeDarkData vizForegroundLabelsColorOcean200': string;
  'themeDarkData vizForegroundLabelsColorOcean400': string;
  'themeDarkData vizForegroundLabelsColorRed': string;
  'themeDarkData vizForegroundLabelsColorRed300': string;
  'themeDarkData vizForegroundLabelsColorRed400': string;
  'themeDarkData vizForegroundLabelsColorTeal': string;
  'themeDarkData vizForegroundLabelsColorTeal300': string;
  'themeDarkData vizForegroundLabelsColorTeal400': string;
  'themeDarkData vizForegroundLabelsColorYellow300': string;
  'themeDarkData vizForegroundLabelsColorYellow400': string;
  'themeDarkData vizForegroundLabelsData': string;
  'themeDarkData vizSemanticBackgroundNegative': string;
  'themeDarkData vizSemanticBackgroundNotice': string;
  'themeDarkData vizSemanticBackgroundPositive': string;
  'themeDarkData vizSemanticForegroundDark bkgdNegative': string;
  'themeDarkData vizSemanticForegroundDark bkgdNotice': string;
  'themeDarkData vizSemanticForegroundDark bkgdPositive': string;
  'themeDarkData vizSemanticForegroundLight bkgdNegative': string;
  'themeDarkData vizSemanticForegroundLight bkgdNotice': string;
  'themeDarkData vizSemanticForegroundLight bkgdPositive': string;
  'themeDarkData vizSemanticStrokeDark bkgdNegative': string;
  'themeDarkData vizSemanticStrokeDark bkgdNotice': string;
  'themeDarkData vizSemanticStrokeDark bkgdPositive': string;
  'themeDarkData vizSemanticStrokeLight bkgdNegative': string;
  'themeDarkData vizSemanticStrokeLight bkgdNotice': string;
  'themeDarkData vizSemanticStrokeLight bkgdPositive': string;
  'themeDarkData vizStrokeAccessible outline': string;
  'themeDarkData vizStrokeAxis-target-benchmark': string;
  'themeDarkData vizStrokeColorBlue': string;
  'themeDarkData vizStrokeColorBlue200': string;
  'themeDarkData vizStrokeColorBlue400': string;
  'themeDarkData vizStrokeColorGray': string;
  'themeDarkData vizStrokeColorGray300': string;
  'themeDarkData vizStrokeColorGray400': string;
  'themeDarkData vizStrokeColorGreen': string;
  'themeDarkData vizStrokeColorGreen300': string;
  'themeDarkData vizStrokeColorGreen400': string;
  'themeDarkData vizStrokeColorOcean': string;
  'themeDarkData vizStrokeColorOcean200': string;
  'themeDarkData vizStrokeColorOcean400': string;
  'themeDarkData vizStrokeColorRed': string;
  'themeDarkData vizStrokeColorRed300': string;
  'themeDarkData vizStrokeColorRed400': string;
  'themeDarkData vizStrokeColorTeal': string;
  'themeDarkData vizStrokeColorTeal300': string;
  'themeDarkData vizStrokeColorTeal400': string;
  'themeDarkData vizStrokeColorYellow': string;
  'themeDarkData vizStrokeColorYellow300': string;
  'themeDarkData vizStrokeColorYellow400': string;
  'themeDarkData vizStrokeGridline': string;
  'themeDarkData vizStrokeTrend-average': string;
  'themeDarkNeutralBackground1Hover': string;
  'themeDarkNeutralBackground1Pressed': string;
  'themeDarkNeutralBackground1Rest': string;
  'themeDarkNeutralBackground1Selected': string;
  'themeDarkNeutralBackground2Rest': string;
  'themeDarkNeutralBackground3Hover': string;
  'themeDarkNeutralBackground3Pressed': string;
  'themeDarkNeutralBackground3Rest': string;
  'themeDarkNeutralBackground4Hover': string;
  'themeDarkNeutralBackground4Pressed': string;
  'themeDarkNeutralBackground4Rest': string;
  'themeDarkNeutralBackground5Rest': string;
  'themeDarkNeutralBackground6Rest': string;
  'themeDarkNeutralBackgroundAlpha1Rest': string;
  'themeDarkNeutralBackgroundAlpha2Rest': string;
  'themeDarkNeutralBackgroundDisabledRest': string;
  'themeDarkNeutralBackgroundInvertedDisabledRest': string;
  'themeDarkNeutralBackgroundInvertedRest': string;
  'themeDarkNeutralBackgroundOverlayRest': string;
  'themeDarkNeutralBackgroundOverlayScrollbarRest': string;
  'themeDarkNeutralBackgroundStaticRest': string;
  'themeDarkNeutralBackgroundStencil1Rest': string;
  'themeDarkNeutralBackgroundStencil2Rest': string;
  'themeDarkNeutralBackgroundSubtleHover': string;
  'themeDarkNeutralBackgroundSubtleInvertedHover': string;
  'themeDarkNeutralBackgroundSubtleInvertedPressed': string;
  'themeDarkNeutralBackgroundSubtleInvertedRest': string;
  'themeDarkNeutralBackgroundSubtleInvertedSelected': string;
  'themeDarkNeutralBackgroundSubtleLight alphaHover': string;
  'themeDarkNeutralBackgroundSubtleLight alphaPressed': string;
  'themeDarkNeutralBackgroundSubtleLight alphaSelected': string;
  'themeDarkNeutralBackgroundSubtlePressed': string;
  'themeDarkNeutralBackgroundSubtleRest': string;
  'themeDarkNeutralBackgroundSubtleSelected': string;
  'themeDarkNeutralBackgroundTransparentHover': string;
  'themeDarkNeutralBackgroundTransparentPressed': string;
  'themeDarkNeutralBackgroundTransparentRest': string;
  'themeDarkNeutralBackgroundTransparentSelected': string;
  'themeDarkNeutralForeground1Hover': string;
  'themeDarkNeutralForeground1Pressed': string;
  'themeDarkNeutralForeground1Rest primary text': string;
  'themeDarkNeutralForeground1Selected': string;
  'themeDarkNeutralForeground2BrandHover': string;
  'themeDarkNeutralForeground2BrandPressed': string;
  'themeDarkNeutralForeground2BrandRest': string;
  'themeDarkNeutralForeground2BrandSelected': string;
  'themeDarkNeutralForeground2Hover': string;
  'themeDarkNeutralForeground2LinkHover': string;
  'themeDarkNeutralForeground2LinkPressed': string;
  'themeDarkNeutralForeground2LinkRest': string;
  'themeDarkNeutralForeground2LinkSelected': string;
  'themeDarkNeutralForeground2Pressed': string;
  'themeDarkNeutralForeground2Rest secondary text': string;
  'themeDarkNeutralForeground2Selected': string;
  'themeDarkNeutralForeground4Rest': string;
  'themeDarkNeutralForegroundDisabled2Rest': string;
  'themeDarkNeutralForegroundDisabledRest': string;
  'themeDarkNeutralForegroundInverted1Hover': string;
  'themeDarkNeutralForegroundInverted1Pressed': string;
  'themeDarkNeutralForegroundInverted1Rest': string;
  'themeDarkNeutralForegroundInverted1Selected': string;
  'themeDarkNeutralForegroundInverted2Rest': string;
  'themeDarkNeutralForegroundInvertedDisabledRest': string;
  'themeDarkNeutralForegroundInvertedLinkHover': string;
  'themeDarkNeutralForegroundInvertedLinkPressed': string;
  'themeDarkNeutralForegroundInvertedLinkRest': string;
  'themeDarkNeutralForegroundInvertedLinkSelected': string;
  'themeDarkNeutralForegroundOn brandRest': string;
  'themeDarkNeutralForegroundStaticInvertedRest': string;
  'themeDarkNeutralStroke1Hover': string;
  'themeDarkNeutralStroke1Pressed': string;
  'themeDarkNeutralStroke1Rest': string;
  'themeDarkNeutralStroke1Selected': string;
  'themeDarkNeutralStroke2Rest': string;
  'themeDarkNeutralStroke3Rest': string;
  'themeDarkNeutralStrokeAccessibleHover': string;
  'themeDarkNeutralStrokeAccessiblePressed': string;
  'themeDarkNeutralStrokeAccessibleRest': string;
  'themeDarkNeutralStrokeAccessibleSelected': string;
  'themeDarkNeutralStrokeAlpha1Rest': string;
  'themeDarkNeutralStrokeAlpha2Rest': string;
  'themeDarkNeutralStrokeDisabledInvertedRest': string;
  'themeDarkNeutralStrokeDisabledRest': string;
  'themeDarkNeutralStrokeFocus1Rest': string;
  'themeDarkNeutralStrokeFocus2Rest': string;
  'themeDarkNeutralStrokeOn brand1Rest': string;
  'themeDarkNeutralStrokeOn brand2Rest': string;
  'themeDarkNeutralStrokeSubtleRest': string;
  'themeDarkNeutralStrokeTransparentDisabledRest': string;
  'themeDarkNeutralStrokeTransparentInteractiveRest': string;
  'themeDarkNeutralStrokeTransparentRest': string;
  'themeDarkShadowAmbient': string;
  'themeDarkShadowAmbient-darker': string;
  'themeDarkShadowAmbient-lighter': string;
  'themeDarkShadowBrand-ambient': string;
  'themeDarkShadowBrand-key': string;
  'themeDarkShadowKey': string;
  'themeDarkShadowKey-darker': string;
  'themeDarkShadowKey-lighter': string;
  'themeDarkStatusAvailableForeground3Rest': string;
  'themeDarkStatusAwayBackground3Rest': string;
  'themeDarkStatusDangerBackground1Rest': string;
  'themeDarkStatusDangerBackground3Rest': string;
  'themeDarkStatusDangerForeground1Rest': string;
  'themeDarkStatusDangerForeground3Rest': string;
  'themeDarkStatusDangerStroke1Rest': string;
  'themeDarkStatusDangerStroke2Rest': string;
  'themeDarkStatusGenericAnchorBackground2Rest': string;
  'themeDarkStatusGenericAnchorForeground2Rest': string;
  'themeDarkStatusGenericAnchorStrokeActiveRest': string;
  'themeDarkStatusGenericInformationBackground1Hover': string;
  'themeDarkStatusGenericInformationBackground1Pressed': string;
  'themeDarkStatusGenericInformationBackground1Rest': string;
  'themeDarkStatusGenericInformationForegroundHover': string;
  'themeDarkStatusGenericInformationForegroundPressed': string;
  'themeDarkStatusGenericInformationForegroundRest': string;
  'themeDarkStatusGenericInformationStroke1Rest': string;
  'themeDarkStatusGenericInformationStroke2Hover': string;
  'themeDarkStatusGenericInformationStroke2Pressed': string;
  'themeDarkStatusGenericInformationStroke2Rest': string;
  'themeDarkStatusOofForeground3Rest': string;
  'themeDarkStatusSevereBackground1Rest': string;
  'themeDarkStatusSevereBackground3Rest': string;
  'themeDarkStatusSevereForeground1Rest': string;
  'themeDarkStatusSevereForeground3Rest': string;
  'themeDarkStatusSevereStroke1Rest': string;
  'themeDarkStatusSevereStroke2Rest': string;
  'themeDarkStatusSuccessBackground1Rest': string;
  'themeDarkStatusSuccessBackground3Rest': string;
  'themeDarkStatusSuccessForeground1Rest': string;
  'themeDarkStatusSuccessForeground3Rest': string;
  'themeDarkStatusSuccessStroke1Rest': string;
  'themeDarkStatusSuccessStroke2Rest': string;
  'themeDarkStatusWarningBackground1Rest': string;
  'themeDarkStatusWarningBackground3Rest': string;
  'themeDarkStatusWarningForeground1Rest': string;
  'themeDarkStatusWarningForeground3Rest': string;
  'themeDarkStatusWarningStroke1Rest': string;
  'themeDarkStatusWarningStroke2Rest': string;
  'themeLightBrandBackground1Hover': string;
  'themeLightBrandBackground1Pressed': string;
  'themeLightBrandBackground1Rest': string;
  'themeLightBrandBackground1Selected': string;
  'themeLightBrandBackground2Hover': string;
  'themeLightBrandBackground2Pressed': string;
  'themeLightBrandBackground2Rest': string;
  'themeLightBrandBackground3Rest': string;
  'themeLightBrandBackgroundCompoundHover': string;
  'themeLightBrandBackgroundCompoundPressed': string;
  'themeLightBrandBackgroundCompoundRest': string;
  'themeLightBrandBackgroundInvertedHover': string;
  'themeLightBrandBackgroundInvertedPressed': string;
  'themeLightBrandBackgroundInvertedRest': string;
  'themeLightBrandBackgroundInvertedSelected': string;
  'themeLightBrandBackgroundStaticRest': string;
  'themeLightBrandForeground1Hover': string;
  'themeLightBrandForeground1Pressed': string;
  'themeLightBrandForeground1Rest': string;
  'themeLightBrandForeground1Selected': string;
  'themeLightBrandForeground2Hover': string;
  'themeLightBrandForeground2Pressed': string;
  'themeLightBrandForeground2Rest': string;
  'themeLightBrandForegroundCompoundHover': string;
  'themeLightBrandForegroundCompoundPressed': string;
  'themeLightBrandForegroundCompoundRest': string;
  'themeLightBrandForegroundInvertedHover': string;
  'themeLightBrandForegroundInvertedPressed': string;
  'themeLightBrandForegroundInvertedRest': string;
  'themeLightBrandForegroundLinkHover': string;
  'themeLightBrandForegroundLinkPressed': string;
  'themeLightBrandForegroundLinkRest': string;
  'themeLightBrandForegroundLinkSelected': string;
  'themeLightBrandForegroundOn lightHover': string;
  'themeLightBrandForegroundOn lightPressed': string;
  'themeLightBrandForegroundOn lightRest': string;
  'themeLightBrandForegroundOn lightSelected': string;
  'themeLightBrandStroke1Hover': string;
  'themeLightBrandStroke1Pressed': string;
  'themeLightBrandStroke1Rest': string;
  'themeLightBrandStroke1Selected': string;
  'themeLightBrandStroke2ContrastRest': string;
  'themeLightBrandStroke2Rest': string;
  'themeLightBrandStroke3Rest': string;
  'themeLightBrandStrokeCompoundHover': string;
  'themeLightBrandStrokeCompoundPressed': string;
  'themeLightBrandStrokeCompoundRest': string;
  'themeLightControl logicTheme switch': string;
  'themeLightData vizBackgroundCoreBlue': string;
  'themeLightData vizBackgroundCoreGray': string;
  'themeLightData vizBackgroundCoreGreen': string;
  'themeLightData vizBackgroundCoreOcean': string;
  'themeLightData vizBackgroundCoreRed': string;
  'themeLightData vizBackgroundCoreTeal': string;
  'themeLightData vizBackgroundCoreYellow': string;
  'themeLightData vizBackgroundNeutralBlack': string;
  'themeLightData vizBackgroundSequentialBlue100': string;
  'themeLightData vizBackgroundSequentialBlue200': string;
  'themeLightData vizBackgroundSequentialBlue300': string;
  'themeLightData vizBackgroundSequentialBlue400': string;
  'themeLightData vizBackgroundSequentialGray100': string;
  'themeLightData vizBackgroundSequentialGray200': string;
  'themeLightData vizBackgroundSequentialGray300': string;
  'themeLightData vizBackgroundSequentialGray400': string;
  'themeLightData vizBackgroundSequentialGreen100': string;
  'themeLightData vizBackgroundSequentialGreen200': string;
  'themeLightData vizBackgroundSequentialGreen300': string;
  'themeLightData vizBackgroundSequentialGreen400': string;
  'themeLightData vizBackgroundSequentialOcean100': string;
  'themeLightData vizBackgroundSequentialOcean200': string;
  'themeLightData vizBackgroundSequentialOcean300': string;
  'themeLightData vizBackgroundSequentialOcean400': string;
  'themeLightData vizBackgroundSequentialRed100': string;
  'themeLightData vizBackgroundSequentialRed200': string;
  'themeLightData vizBackgroundSequentialRed300': string;
  'themeLightData vizBackgroundSequentialRed400': string;
  'themeLightData vizBackgroundSequentialTeal100': string;
  'themeLightData vizBackgroundSequentialTeal200': string;
  'themeLightData vizBackgroundSequentialTeal300': string;
  'themeLightData vizBackgroundSequentialTeal400': string;
  'themeLightData vizBackgroundSequentialYellow100': string;
  'themeLightData vizBackgroundSequentialYellow200': string;
  'themeLightData vizBackgroundSequentialYellow300': string;
  'themeLightData vizBackgroundSequentialYellow400': string;
  'themeLightData vizForegroundAccessibilityText dark bkgd': string;
  'themeLightData vizForegroundAccessibilityText light bkgd': string;
  'themeLightData vizForegroundKpi cardText dark bkgd': string;
  'themeLightData vizForegroundKpi cardText light bkgd': string;
  'themeLightData vizForegroundLabelsCategorical': string;
  'themeLightData vizForegroundLabelsColorBlue': string;
  'themeLightData vizForegroundLabelsColorBlue200': string;
  'themeLightData vizForegroundLabelsColorBlue400': string;
  'themeLightData vizForegroundLabelsColorGray': string;
  'themeLightData vizForegroundLabelsColorGray300': string;
  'themeLightData vizForegroundLabelsColorGray400': string;
  'themeLightData vizForegroundLabelsColorGreen': string;
  'themeLightData vizForegroundLabelsColorGreen300': string;
  'themeLightData vizForegroundLabelsColorGreen400': string;
  'themeLightData vizForegroundLabelsColorOcean': string;
  'themeLightData vizForegroundLabelsColorOcean200': string;
  'themeLightData vizForegroundLabelsColorOcean400': string;
  'themeLightData vizForegroundLabelsColorRed': string;
  'themeLightData vizForegroundLabelsColorRed300': string;
  'themeLightData vizForegroundLabelsColorRed400': string;
  'themeLightData vizForegroundLabelsColorTeal': string;
  'themeLightData vizForegroundLabelsColorTeal300': string;
  'themeLightData vizForegroundLabelsColorTeal400': string;
  'themeLightData vizForegroundLabelsColorYellow300': string;
  'themeLightData vizForegroundLabelsColorYellow400': string;
  'themeLightData vizForegroundLabelsData': string;
  'themeLightData vizSemanticBackgroundNegative': string;
  'themeLightData vizSemanticBackgroundNotice': string;
  'themeLightData vizSemanticBackgroundPositive': string;
  'themeLightData vizSemanticForegroundDark bkgdNegative': string;
  'themeLightData vizSemanticForegroundDark bkgdNotice': string;
  'themeLightData vizSemanticForegroundDark bkgdPositive': string;
  'themeLightData vizSemanticForegroundLight bkgdNegative': string;
  'themeLightData vizSemanticForegroundLight bkgdNotice': string;
  'themeLightData vizSemanticForegroundLight bkgdPositive': string;
  'themeLightData vizSemanticStrokeDark bkgdNegative': string;
  'themeLightData vizSemanticStrokeDark bkgdNotice': string;
  'themeLightData vizSemanticStrokeDark bkgdPositive': string;
  'themeLightData vizSemanticStrokeLight bkgdNegative': string;
  'themeLightData vizSemanticStrokeLight bkgdNotice': string;
  'themeLightData vizSemanticStrokeLight bkgdPositive': string;
  'themeLightData vizStrokeAccessible outline': string;
  'themeLightData vizStrokeAxis-target-benchmark': string;
  'themeLightData vizStrokeColorBlue': string;
  'themeLightData vizStrokeColorBlue200': string;
  'themeLightData vizStrokeColorBlue400': string;
  'themeLightData vizStrokeColorGray': string;
  'themeLightData vizStrokeColorGray300': string;
  'themeLightData vizStrokeColorGray400': string;
  'themeLightData vizStrokeColorGreen': string;
  'themeLightData vizStrokeColorGreen300': string;
  'themeLightData vizStrokeColorGreen400': string;
  'themeLightData vizStrokeColorOcean': string;
  'themeLightData vizStrokeColorOcean200': string;
  'themeLightData vizStrokeColorOcean400': string;
  'themeLightData vizStrokeColorRed': string;
  'themeLightData vizStrokeColorRed300': string;
  'themeLightData vizStrokeColorRed400': string;
  'themeLightData vizStrokeColorTeal': string;
  'themeLightData vizStrokeColorTeal300': string;
  'themeLightData vizStrokeColorTeal400': string;
  'themeLightData vizStrokeColorYellow': string;
  'themeLightData vizStrokeColorYellow300': string;
  'themeLightData vizStrokeColorYellow400': string;
  'themeLightData vizStrokeGridline': string;
  'themeLightData vizStrokeTrend-average': string;
  'themeLightNeutralBackground1Hover': string;
  'themeLightNeutralBackground1Pressed': string;
  'themeLightNeutralBackground1Rest': string;
  'themeLightNeutralBackground1Selected': string;
  'themeLightNeutralBackground2Rest': string;
  'themeLightNeutralBackground3Hover': string;
  'themeLightNeutralBackground3Pressed': string;
  'themeLightNeutralBackground3Rest': string;
  'themeLightNeutralBackground4Hover': string;
  'themeLightNeutralBackground4Pressed': string;
  'themeLightNeutralBackground4Rest': string;
  'themeLightNeutralBackground5Rest': string;
  'themeLightNeutralBackground6Rest': string;
  'themeLightNeutralBackgroundAlpha1Rest': string;
  'themeLightNeutralBackgroundAlpha2Rest': string;
  'themeLightNeutralBackgroundDisabledRest': string;
  'themeLightNeutralBackgroundInvertedDisabledRest': string;
  'themeLightNeutralBackgroundInvertedRest': string;
  'themeLightNeutralBackgroundOverlayRest': string;
  'themeLightNeutralBackgroundOverlayScrollbarRest': string;
  'themeLightNeutralBackgroundStaticRest': string;
  'themeLightNeutralBackgroundStencil1Rest': string;
  'themeLightNeutralBackgroundStencil2Rest': string;
  'themeLightNeutralBackgroundSubtleHover': string;
  'themeLightNeutralBackgroundSubtleInvertedHover': string;
  'themeLightNeutralBackgroundSubtleInvertedPressed': string;
  'themeLightNeutralBackgroundSubtleInvertedRest': string;
  'themeLightNeutralBackgroundSubtleInvertedSelected': string;
  'themeLightNeutralBackgroundSubtleLight alphaHover': string;
  'themeLightNeutralBackgroundSubtleLight alphaPressed': string;
  'themeLightNeutralBackgroundSubtleLight alphaSelected': string;
  'themeLightNeutralBackgroundSubtlePressed': string;
  'themeLightNeutralBackgroundSubtleRest': string;
  'themeLightNeutralBackgroundSubtleSelected': string;
  'themeLightNeutralBackgroundTransparentHover': string;
  'themeLightNeutralBackgroundTransparentPressed': string;
  'themeLightNeutralBackgroundTransparentRest': string;
  'themeLightNeutralBackgroundTransparentSelected': string;
  'themeLightNeutralForeground1Hover': string;
  'themeLightNeutralForeground1Pressed': string;
  'themeLightNeutralForeground1Rest primary text': string;
  'themeLightNeutralForeground1Selected': string;
  'themeLightNeutralForeground2BrandHover': string;
  'themeLightNeutralForeground2BrandPressed': string;
  'themeLightNeutralForeground2BrandRest': string;
  'themeLightNeutralForeground2BrandSelected': string;
  'themeLightNeutralForeground2Hover': string;
  'themeLightNeutralForeground2LinkHover': string;
  'themeLightNeutralForeground2LinkPressed': string;
  'themeLightNeutralForeground2LinkRest': string;
  'themeLightNeutralForeground2LinkSelected': string;
  'themeLightNeutralForeground2Pressed': string;
  'themeLightNeutralForeground2Rest secondary text': string;
  'themeLightNeutralForeground2Selected': string;
  'themeLightNeutralForeground4Rest': string;
  'themeLightNeutralForegroundDisabled2Rest': string;
  'themeLightNeutralForegroundDisabledRest': string;
  'themeLightNeutralForegroundInverted1Hover': string;
  'themeLightNeutralForegroundInverted1Pressed': string;
  'themeLightNeutralForegroundInverted1Rest': string;
  'themeLightNeutralForegroundInverted1Selected': string;
  'themeLightNeutralForegroundInverted2Rest': string;
  'themeLightNeutralForegroundInvertedDisabledRest': string;
  'themeLightNeutralForegroundInvertedLinkHover': string;
  'themeLightNeutralForegroundInvertedLinkPressed': string;
  'themeLightNeutralForegroundInvertedLinkRest': string;
  'themeLightNeutralForegroundInvertedLinkSelected': string;
  'themeLightNeutralForegroundOn brandRest': string;
  'themeLightNeutralForegroundStaticInvertedRest': string;
  'themeLightNeutralStroke1Hover': string;
  'themeLightNeutralStroke1Pressed': string;
  'themeLightNeutralStroke1Rest': string;
  'themeLightNeutralStroke1Selected': string;
  'themeLightNeutralStroke2Rest': string;
  'themeLightNeutralStroke3Rest': string;
  'themeLightNeutralStrokeAccessibleHover': string;
  'themeLightNeutralStrokeAccessiblePressed': string;
  'themeLightNeutralStrokeAccessibleRest': string;
  'themeLightNeutralStrokeAccessibleSelected': string;
  'themeLightNeutralStrokeAlpha1Rest': string;
  'themeLightNeutralStrokeAlpha2Rest': string;
  'themeLightNeutralStrokeDisabledInvertedRest': string;
  'themeLightNeutralStrokeDisabledRest': string;
  'themeLightNeutralStrokeFocus1Rest': string;
  'themeLightNeutralStrokeFocus2Rest': string;
  'themeLightNeutralStrokeOn brand1Rest': string;
  'themeLightNeutralStrokeOn brand2Rest': string;
  'themeLightNeutralStrokeSubtleRest': string;
  'themeLightNeutralStrokeTransparentDisabledRest': string;
  'themeLightNeutralStrokeTransparentInteractiveRest': string;
  'themeLightNeutralStrokeTransparentRest': string;
  'themeLightShadowAmbient': string;
  'themeLightShadowAmbient-darker': string;
  'themeLightShadowAmbient-lighter': string;
  'themeLightShadowBrand-ambient': string;
  'themeLightShadowBrand-key': string;
  'themeLightShadowKey': string;
  'themeLightShadowKey-darker': string;
  'themeLightShadowKey-lighter': string;
  'themeLightStatusAvailableForeground3Rest': string;
  'themeLightStatusAwayBackground3Rest': string;
  'themeLightStatusDangerBackground1Rest': string;
  'themeLightStatusDangerBackground3Rest': string;
  'themeLightStatusDangerForeground1Rest': string;
  'themeLightStatusDangerForeground3Rest': string;
  'themeLightStatusDangerStroke1Rest': string;
  'themeLightStatusDangerStroke2Rest': string;
  'themeLightStatusGenericAnchorBackground2Rest': string;
  'themeLightStatusGenericAnchorForeground2Rest': string;
  'themeLightStatusGenericAnchorStrokeActiveRest': string;
  'themeLightStatusGenericInformationBackground1Hover': string;
  'themeLightStatusGenericInformationBackground1Pressed': string;
  'themeLightStatusGenericInformationBackground1Rest': string;
  'themeLightStatusGenericInformationForegroundHover': string;
  'themeLightStatusGenericInformationForegroundPressed': string;
  'themeLightStatusGenericInformationForegroundRest': string;
  'themeLightStatusGenericInformationStroke1Rest': string;
  'themeLightStatusGenericInformationStroke2Hover': string;
  'themeLightStatusGenericInformationStroke2Pressed': string;
  'themeLightStatusGenericInformationStroke2Rest': string;
  'themeLightStatusOofForeground3Rest': string;
  'themeLightStatusSevereBackground1Rest': string;
  'themeLightStatusSevereBackground3Rest': string;
  'themeLightStatusSevereForeground1Rest': string;
  'themeLightStatusSevereForeground3Rest': string;
  'themeLightStatusSevereStroke1Rest': string;
  'themeLightStatusSevereStroke2Rest': string;
  'themeLightStatusSuccessBackground1Rest': string;
  'themeLightStatusSuccessBackground3Rest': string;
  'themeLightStatusSuccessForeground1Rest': string;
  'themeLightStatusSuccessForeground3Rest': string;
  'themeLightStatusSuccessStroke1Rest': string;
  'themeLightStatusSuccessStroke2Rest': string;
  'themeLightStatusWarningBackground1Rest': string;
  'themeLightStatusWarningBackground3Rest': string;
  'themeLightStatusWarningForeground1Rest': string;
  'themeLightStatusWarningForeground3Rest': string;
  'themeLightStatusWarningStroke1Rest': string;
  'themeLightStatusWarningStroke2Rest': string;
  'tree indentationLevel 10Tree-padding-left': string;
  'tree indentationLevel 10Treeleaf-padding-left': string;
  'tree indentationLevel 1Tree-padding-left': string;
  'tree indentationLevel 1Treeleaf-padding-left': string;
  'tree indentationLevel 2Tree-padding-left': string;
  'tree indentationLevel 2Treeleaf-padding-left': string;
  'tree indentationLevel 3Tree-padding-left': string;
  'tree indentationLevel 3Treeleaf-padding-left': string;
  'tree indentationLevel 4Tree-padding-left': string;
  'tree indentationLevel 4Treeleaf-padding-left': string;
  'tree indentationLevel 5Tree-padding-left': string;
  'tree indentationLevel 5Treeleaf-padding-left': string;
  'tree indentationLevel 6Tree-padding-left': string;
  'tree indentationLevel 6Treeleaf-padding-left': string;
  'tree indentationLevel 7Tree-padding-left': string;
  'tree indentationLevel 7Treeleaf-padding-left': string;
  'tree indentationLevel 8Tree-padding-left': string;
  'tree indentationLevel 8Treeleaf-padding-left': string;
  'tree indentationLevel 9Tree-padding-left': string;
  'tree indentationLevel 9Treeleaf-padding-left': string;
  'tree indentationNoneTree-padding-left': string;
  'tree indentationNoneTreeleaf-padding-left': string;
  'typographyBody1FontFamily': string;
  'typographyBody1FontSize': string;
  'typographyBody1FontStretch': string;
  'typographyBody1FontStyle': string;
  'typographyBody1FontWeight': string;
  'typographyBody1LetterSpacing': string;
  'typographyBody1LineHeight': string;
  'typographyBody1ParagraphIndent': string;
  'typographyBody1ParagraphSpacing': string;
  'typographyBody1TextCase': string;
  'typographyBody1TextDecoration': string;
  'typographyBody1strongFontFamily': string;
  'typographyBody1strongFontSize': string;
  'typographyBody1strongFontStretch': string;
  'typographyBody1strongFontStyle': string;
  'typographyBody1strongFontWeight': string;
  'typographyBody1strongLetterSpacing': string;
  'typographyBody1strongLineHeight': string;
  'typographyBody1strongParagraphIndent': string;
  'typographyBody1strongParagraphSpacing': string;
  'typographyBody1strongTextCase': string;
  'typographyBody1strongTextDecoration': string;
  'typographyBody1strongerFontFamily': string;
  'typographyBody1strongerFontSize': string;
  'typographyBody1strongerFontStretch': string;
  'typographyBody1strongerFontStyle': string;
  'typographyBody1strongerFontWeight': string;
  'typographyBody1strongerLetterSpacing': string;
  'typographyBody1strongerLineHeight': string;
  'typographyBody1strongerParagraphIndent': string;
  'typographyBody1strongerParagraphSpacing': string;
  'typographyBody1strongerTextCase': string;
  'typographyBody1strongerTextDecoration': string;
  'typographyBody2FontFamily': string;
  'typographyBody2FontSize': string;
  'typographyBody2FontStretch': string;
  'typographyBody2FontStyle': string;
  'typographyBody2FontWeight': string;
  'typographyBody2LetterSpacing': string;
  'typographyBody2LineHeight': string;
  'typographyBody2ParagraphIndent': string;
  'typographyBody2ParagraphSpacing': string;
  'typographyBody2TextCase': string;
  'typographyBody2TextDecoration': string;
  'typographyBody2semilightFontFamily': string;
  'typographyBody2semilightFontSize': string;
  'typographyBody2semilightFontStretch': string;
  'typographyBody2semilightFontStyle': string;
  'typographyBody2semilightFontWeight': string;
  'typographyBody2semilightLetterSpacing': string;
  'typographyBody2semilightLineHeight': string;
  'typographyBody2semilightParagraphIndent': string;
  'typographyBody2semilightParagraphSpacing': string;
  'typographyBody2semilightTextCase': string;
  'typographyBody2semilightTextDecoration': string;
  'typographyBody2strongFontFamily': string;
  'typographyBody2strongFontSize': string;
  'typographyBody2strongFontStretch': string;
  'typographyBody2strongFontStyle': string;
  'typographyBody2strongFontWeight': string;
  'typographyBody2strongLetterSpacing': string;
  'typographyBody2strongLineHeight': string;
  'typographyBody2strongParagraphIndent': string;
  'typographyBody2strongParagraphSpacing': string;
  'typographyBody2strongTextCase': string;
  'typographyBody2strongTextDecoration': string;
  'typographyBody2strongerFontFamily': string;
  'typographyBody2strongerFontSize': string;
  'typographyBody2strongerFontStretch': string;
  'typographyBody2strongerFontStyle': string;
  'typographyBody2strongerFontWeight': string;
  'typographyBody2strongerLetterSpacing': string;
  'typographyBody2strongerLineHeight': string;
  'typographyBody2strongerParagraphIndent': string;
  'typographyBody2strongerParagraphSpacing': string;
  'typographyBody2strongerTextCase': string;
  'typographyBody2strongerTextDecoration': string;
  'typographyCaption1FontFamily': string;
  'typographyCaption1FontSize': string;
  'typographyCaption1FontStretch': string;
  'typographyCaption1FontStyle': string;
  'typographyCaption1FontWeight': string;
  'typographyCaption1LetterSpacing': string;
  'typographyCaption1LineHeight': string;
  'typographyCaption1ParagraphIndent': string;
  'typographyCaption1ParagraphSpacing': string;
  'typographyCaption1TextCase': string;
  'typographyCaption1TextDecoration': string;
  'typographyCaption1strongFontFamily': string;
  'typographyCaption1strongFontSize': string;
  'typographyCaption1strongFontStretch': string;
  'typographyCaption1strongFontStyle': string;
  'typographyCaption1strongFontWeight': string;
  'typographyCaption1strongLetterSpacing': string;
  'typographyCaption1strongLineHeight': string;
  'typographyCaption1strongParagraphIndent': string;
  'typographyCaption1strongParagraphSpacing': string;
  'typographyCaption1strongTextCase': string;
  'typographyCaption1strongTextDecoration': string;
  'typographyCaption1strongerFontFamily': string;
  'typographyCaption1strongerFontSize': string;
  'typographyCaption1strongerFontStretch': string;
  'typographyCaption1strongerFontStyle': string;
  'typographyCaption1strongerFontWeight': string;
  'typographyCaption1strongerLetterSpacing': string;
  'typographyCaption1strongerLineHeight': string;
  'typographyCaption1strongerParagraphIndent': string;
  'typographyCaption1strongerParagraphSpacing': string;
  'typographyCaption1strongerTextCase': string;
  'typographyCaption1strongerTextDecoration': string;
  'typographyCaption2FontFamily': string;
  'typographyCaption2FontSize': string;
  'typographyCaption2FontStretch': string;
  'typographyCaption2FontStyle': string;
  'typographyCaption2FontWeight': string;
  'typographyCaption2LetterSpacing': string;
  'typographyCaption2LineHeight': string;
  'typographyCaption2ParagraphIndent': string;
  'typographyCaption2ParagraphSpacing': string;
  'typographyCaption2TextCase': string;
  'typographyCaption2TextDecoration': string;
  'typographyCaption2strongFontFamily': string;
  'typographyCaption2strongFontSize': string;
  'typographyCaption2strongFontStretch': string;
  'typographyCaption2strongFontStyle': string;
  'typographyCaption2strongFontWeight': string;
  'typographyCaption2strongLetterSpacing': string;
  'typographyCaption2strongLineHeight': string;
  'typographyCaption2strongParagraphIndent': string;
  'typographyCaption2strongParagraphSpacing': string;
  'typographyCaption2strongTextCase': string;
  'typographyCaption2strongTextDecoration': string;
  'typographyDisplay1FontFamily': string;
  'typographyDisplay1FontSize': string;
  'typographyDisplay1FontStretch': string;
  'typographyDisplay1FontStyle': string;
  'typographyDisplay1FontWeight': string;
  'typographyDisplay1LetterSpacing': string;
  'typographyDisplay1LineHeight': string;
  'typographyDisplay1ParagraphIndent': string;
  'typographyDisplay1ParagraphSpacing': string;
  'typographyDisplay1TextCase': string;
  'typographyDisplay1TextDecoration': string;
  'typographyDisplay1lightFontFamily': string;
  'typographyDisplay1lightFontSize': string;
  'typographyDisplay1lightFontStretch': string;
  'typographyDisplay1lightFontStyle': string;
  'typographyDisplay1lightFontWeight': string;
  'typographyDisplay1lightLetterSpacing': string;
  'typographyDisplay1lightLineHeight': string;
  'typographyDisplay1lightParagraphIndent': string;
  'typographyDisplay1lightParagraphSpacing': string;
  'typographyDisplay1lightTextCase': string;
  'typographyDisplay1lightTextDecoration': string;
  'typographyDisplay1semilightFontFamily': string;
  'typographyDisplay1semilightFontSize': string;
  'typographyDisplay1semilightFontStretch': string;
  'typographyDisplay1semilightFontStyle': string;
  'typographyDisplay1semilightFontWeight': string;
  'typographyDisplay1semilightLetterSpacing': string;
  'typographyDisplay1semilightLineHeight': string;
  'typographyDisplay1semilightParagraphIndent': string;
  'typographyDisplay1semilightParagraphSpacing': string;
  'typographyDisplay1semilightTextCase': string;
  'typographyDisplay1semilightTextDecoration': string;
  'typographyDisplay1strongFontFamily': string;
  'typographyDisplay1strongFontSize': string;
  'typographyDisplay1strongFontStretch': string;
  'typographyDisplay1strongFontStyle': string;
  'typographyDisplay1strongFontWeight': string;
  'typographyDisplay1strongLetterSpacing': string;
  'typographyDisplay1strongLineHeight': string;
  'typographyDisplay1strongParagraphIndent': string;
  'typographyDisplay1strongParagraphSpacing': string;
  'typographyDisplay1strongTextCase': string;
  'typographyDisplay1strongTextDecoration': string;
  'typographyDisplay1strongerFontFamily': string;
  'typographyDisplay1strongerFontSize': string;
  'typographyDisplay1strongerFontStretch': string;
  'typographyDisplay1strongerFontStyle': string;
  'typographyDisplay1strongerFontWeight': string;
  'typographyDisplay1strongerLetterSpacing': string;
  'typographyDisplay1strongerLineHeight': string;
  'typographyDisplay1strongerParagraphIndent': string;
  'typographyDisplay1strongerParagraphSpacing': string;
  'typographyDisplay1strongerTextCase': string;
  'typographyDisplay1strongerTextDecoration': string;
  'typographyDisplay2FontFamily': string;
  'typographyDisplay2FontSize': string;
  'typographyDisplay2FontStretch': string;
  'typographyDisplay2FontStyle': string;
  'typographyDisplay2FontWeight': string;
  'typographyDisplay2LetterSpacing': string;
  'typographyDisplay2LineHeight': string;
  'typographyDisplay2ParagraphIndent': string;
  'typographyDisplay2ParagraphSpacing': string;
  'typographyDisplay2TextCase': string;
  'typographyDisplay2TextDecoration': string;
  'typographyDisplay2lightFontFamily': string;
  'typographyDisplay2lightFontSize': string;
  'typographyDisplay2lightFontStretch': string;
  'typographyDisplay2lightFontStyle': string;
  'typographyDisplay2lightFontWeight': string;
  'typographyDisplay2lightLetterSpacing': string;
  'typographyDisplay2lightLineHeight': string;
  'typographyDisplay2lightParagraphIndent': string;
  'typographyDisplay2lightParagraphSpacing': string;
  'typographyDisplay2lightTextCase': string;
  'typographyDisplay2lightTextDecoration': string;
  'typographyDisplay2semilightFontFamily': string;
  'typographyDisplay2semilightFontSize': string;
  'typographyDisplay2semilightFontStretch': string;
  'typographyDisplay2semilightFontStyle': string;
  'typographyDisplay2semilightFontWeight': string;
  'typographyDisplay2semilightLetterSpacing': string;
  'typographyDisplay2semilightLineHeight': string;
  'typographyDisplay2semilightParagraphIndent': string;
  'typographyDisplay2semilightParagraphSpacing': string;
  'typographyDisplay2semilightTextCase': string;
  'typographyDisplay2semilightTextDecoration': string;
  'typographyDisplay2strongFontFamily': string;
  'typographyDisplay2strongFontSize': string;
  'typographyDisplay2strongFontStretch': string;
  'typographyDisplay2strongFontStyle': string;
  'typographyDisplay2strongFontWeight': string;
  'typographyDisplay2strongLetterSpacing': string;
  'typographyDisplay2strongLineHeight': string;
  'typographyDisplay2strongParagraphIndent': string;
  'typographyDisplay2strongParagraphSpacing': string;
  'typographyDisplay2strongTextCase': string;
  'typographyDisplay2strongTextDecoration': string;
  'typographyDisplay2strongerFontFamily': string;
  'typographyDisplay2strongerFontSize': string;
  'typographyDisplay2strongerFontStretch': string;
  'typographyDisplay2strongerFontStyle': string;
  'typographyDisplay2strongerFontWeight': string;
  'typographyDisplay2strongerLetterSpacing': string;
  'typographyDisplay2strongerLineHeight': string;
  'typographyDisplay2strongerParagraphIndent': string;
  'typographyDisplay2strongerParagraphSpacing': string;
  'typographyDisplay2strongerTextCase': string;
  'typographyDisplay2strongerTextDecoration': string;
  'typographyDisplay3strongFontFamily': string;
  'typographyDisplay3strongFontSize': string;
  'typographyDisplay3strongFontStretch': string;
  'typographyDisplay3strongFontStyle': string;
  'typographyDisplay3strongFontWeight': string;
  'typographyDisplay3strongLetterSpacing': string;
  'typographyDisplay3strongLineHeight': string;
  'typographyDisplay3strongParagraphIndent': string;
  'typographyDisplay3strongParagraphSpacing': string;
  'typographyDisplay3strongTextCase': string;
  'typographyDisplay3strongTextDecoration': string;
  'typographyFontfamilyBase': string;
  'typographyFontsize1000': string;
  'typographyFontsizeBase100': string;
  'typographyFontsizeBase200': string;
  'typographyFontsizeBase300': string;
  'typographyFontsizeBase400': string;
  'typographyFontsizeBase500': string;
  'typographyFontsizeBase600': string;
  'typographyFontsizeBase700': string;
  'typographyFontsizeBase800': string;
  'typographyFontsizeBase900': string;
  'typographyFontsizeBase920': string;
  'typographyFontsizeBase980': string;
  'typographyFontweightBold': string;
  'typographyFontweightLight': string;
  'typographyFontweightRegular': string;
  'typographyFontweightSemibold': string;
  'typographyFontweightSemilight': string;
  'typographyLineheightBase100': string;
  'typographyLineheightBase1000': string;
  'typographyLineheightBase200': string;
  'typographyLineheightBase300': string;
  'typographyLineheightBase400': string;
  'typographyLineheightBase500': string;
  'typographyLineheightBase600': string;
  'typographyLineheightBase700': string;
  'typographyLineheightBase800': string;
  'typographyLineheightBase900': string;
  'typographyLineheightBase920': string;
  'typographyLineheightBase980': string;
  'typographyTitle 1FontFamily': string;
  'typographyTitle 1FontSize': string;
  'typographyTitle 1FontStretch': string;
  'typographyTitle 1FontStyle': string;
  'typographyTitle 1FontWeight': string;
  'typographyTitle 1LetterSpacing': string;
  'typographyTitle 1LineHeight': string;
  'typographyTitle 1ParagraphIndent': string;
  'typographyTitle 1ParagraphSpacing': string;
  'typographyTitle 1TextCase': string;
  'typographyTitle 1TextDecoration': string;
  'typographyTitle 2 strongFontFamily': string;
  'typographyTitle 2 strongFontSize': string;
  'typographyTitle 2 strongFontStretch': string;
  'typographyTitle 2 strongFontStyle': string;
  'typographyTitle 2 strongFontWeight': string;
  'typographyTitle 2 strongLetterSpacing': string;
  'typographyTitle 2 strongLineHeight': string;
  'typographyTitle 2 strongParagraphIndent': string;
  'typographyTitle 2 strongParagraphSpacing': string;
  'typographyTitle 2 strongTextCase': string;
  'typographyTitle 2 strongTextDecoration': string;
  'typographyTitle 2 strongerFontFamily': string;
  'typographyTitle 2 strongerFontSize': string;
  'typographyTitle 2 strongerFontStretch': string;
  'typographyTitle 2 strongerFontStyle': string;
  'typographyTitle 2 strongerFontWeight': string;
  'typographyTitle 2 strongerLetterSpacing': string;
  'typographyTitle 2 strongerLineHeight': string;
  'typographyTitle 2 strongerParagraphIndent': string;
  'typographyTitle 2 strongerParagraphSpacing': string;
  'typographyTitle 2 strongerTextCase': string;
  'typographyTitle 2 strongerTextDecoration': string;
  'typographyTitle1lightFontFamily': string;
  'typographyTitle1lightFontSize': string;
  'typographyTitle1lightFontStretch': string;
  'typographyTitle1lightFontStyle': string;
  'typographyTitle1lightFontWeight': string;
  'typographyTitle1lightLetterSpacing': string;
  'typographyTitle1lightLineHeight': string;
  'typographyTitle1lightParagraphIndent': string;
  'typographyTitle1lightParagraphSpacing': string;
  'typographyTitle1lightTextCase': string;
  'typographyTitle1lightTextDecoration': string;
  'typographyTitle1semilightFontFamily': string;
  'typographyTitle1semilightFontSize': string;
  'typographyTitle1semilightFontStretch': string;
  'typographyTitle1semilightFontStyle': string;
  'typographyTitle1semilightFontWeight': string;
  'typographyTitle1semilightLetterSpacing': string;
  'typographyTitle1semilightLineHeight': string;
  'typographyTitle1semilightParagraphIndent': string;
  'typographyTitle1semilightParagraphSpacing': string;
  'typographyTitle1semilightTextCase': string;
  'typographyTitle1semilightTextDecoration': string;
  'typographyTitle1strongFontFamily': string;
  'typographyTitle1strongFontSize': string;
  'typographyTitle1strongFontStretch': string;
  'typographyTitle1strongFontStyle': string;
  'typographyTitle1strongFontWeight': string;
  'typographyTitle1strongLetterSpacing': string;
  'typographyTitle1strongLineHeight': string;
  'typographyTitle1strongParagraphIndent': string;
  'typographyTitle1strongParagraphSpacing': string;
  'typographyTitle1strongTextCase': string;
  'typographyTitle1strongTextDecoration': string;
  'typographyTitle1strongerFontFamily': string;
  'typographyTitle1strongerFontSize': string;
  'typographyTitle1strongerFontStretch': string;
  'typographyTitle1strongerFontStyle': string;
  'typographyTitle1strongerFontWeight': string;
  'typographyTitle1strongerLetterSpacing': string;
  'typographyTitle1strongerLineHeight': string;
  'typographyTitle1strongerParagraphIndent': string;
  'typographyTitle1strongerParagraphSpacing': string;
  'typographyTitle1strongerTextCase': string;
  'typographyTitle1strongerTextDecoration': string;
  'typographyTitle2FontFamily': string;
  'typographyTitle2FontSize': string;
  'typographyTitle2FontStretch': string;
  'typographyTitle2FontStyle': string;
  'typographyTitle2FontWeight': string;
  'typographyTitle2LetterSpacing': string;
  'typographyTitle2LineHeight': string;
  'typographyTitle2ParagraphIndent': string;
  'typographyTitle2ParagraphSpacing': string;
  'typographyTitle2TextCase': string;
  'typographyTitle2TextDecoration': string;
  'typographyTitle2lightFontFamily': string;
  'typographyTitle2lightFontSize': string;
  'typographyTitle2lightFontStretch': string;
  'typographyTitle2lightFontStyle': string;
  'typographyTitle2lightFontWeight': string;
  'typographyTitle2lightLetterSpacing': string;
  'typographyTitle2lightLineHeight': string;
  'typographyTitle2lightParagraphIndent': string;
  'typographyTitle2lightParagraphSpacing': string;
  'typographyTitle2lightTextCase': string;
  'typographyTitle2lightTextDecoration': string;
  'typographyTitle2semilightFontFamily': string;
  'typographyTitle2semilightFontSize': string;
  'typographyTitle2semilightFontStretch': string;
  'typographyTitle2semilightFontStyle': string;
  'typographyTitle2semilightFontWeight': string;
  'typographyTitle2semilightLetterSpacing': string;
  'typographyTitle2semilightLineHeight': string;
  'typographyTitle2semilightParagraphIndent': string;
  'typographyTitle2semilightParagraphSpacing': string;
  'typographyTitle2semilightTextCase': string;
  'typographyTitle2semilightTextDecoration': string;
  'typographyTitle3FontFamily': string;
  'typographyTitle3FontSize': string;
  'typographyTitle3FontStretch': string;
  'typographyTitle3FontStyle': string;
  'typographyTitle3FontWeight': string;
  'typographyTitle3LetterSpacing': string;
  'typographyTitle3LineHeight': string;
  'typographyTitle3ParagraphIndent': string;
  'typographyTitle3ParagraphSpacing': string;
  'typographyTitle3TextCase': string;
  'typographyTitle3TextDecoration': string;
  'typographyTitle3lightFontFamily': string;
  'typographyTitle3lightFontSize': string;
  'typographyTitle3lightFontStretch': string;
  'typographyTitle3lightFontStyle': string;
  'typographyTitle3lightFontWeight': string;
  'typographyTitle3lightLetterSpacing': string;
  'typographyTitle3lightLineHeight': string;
  'typographyTitle3lightParagraphIndent': string;
  'typographyTitle3lightParagraphSpacing': string;
  'typographyTitle3lightTextCase': string;
  'typographyTitle3lightTextDecoration': string;
  'typographyTitle3semilightFontFamily': string;
  'typographyTitle3semilightFontSize': string;
  'typographyTitle3semilightFontStretch': string;
  'typographyTitle3semilightFontStyle': string;
  'typographyTitle3semilightFontWeight': string;
  'typographyTitle3semilightLetterSpacing': string;
  'typographyTitle3semilightLineHeight': string;
  'typographyTitle3semilightParagraphIndent': string;
  'typographyTitle3semilightParagraphSpacing': string;
  'typographyTitle3semilightTextCase': string;
  'typographyTitle3semilightTextDecoration': string;
  'typographyTitle3strongFontFamily': string;
  'typographyTitle3strongFontSize': string;
  'typographyTitle3strongFontStretch': string;
  'typographyTitle3strongFontStyle': string;
  'typographyTitle3strongFontWeight': string;
  'typographyTitle3strongLetterSpacing': string;
  'typographyTitle3strongLineHeight': string;
  'typographyTitle3strongParagraphIndent': string;
  'typographyTitle3strongParagraphSpacing': string;
  'typographyTitle3strongTextCase': string;
  'typographyTitle3strongTextDecoration': string;
  'typographyTitle3strongerFontFamily': string;
  'typographyTitle3strongerFontSize': string;
  'typographyTitle3strongerFontStretch': string;
  'typographyTitle3strongerFontStyle': string;
  'typographyTitle3strongerFontWeight': string;
  'typographyTitle3strongerLetterSpacing': string;
  'typographyTitle3strongerLineHeight': string;
  'typographyTitle3strongerParagraphIndent': string;
  'typographyTitle3strongerParagraphSpacing': string;
  'typographyTitle3strongerTextCase': string;
  'typographyTitle3strongerTextDecoration': string;
  'typographyTitle4FontFamily': string;
  'typographyTitle4FontSize': string;
  'typographyTitle4FontStretch': string;
  'typographyTitle4FontStyle': string;
  'typographyTitle4FontWeight': string;
  'typographyTitle4LetterSpacing': string;
  'typographyTitle4LineHeight': string;
  'typographyTitle4ParagraphIndent': string;
  'typographyTitle4ParagraphSpacing': string;
  'typographyTitle4TextCase': string;
  'typographyTitle4TextDecoration': string;
  'typographyTitle4lightFontFamily': string;
  'typographyTitle4lightFontSize': string;
  'typographyTitle4lightFontStretch': string;
  'typographyTitle4lightFontStyle': string;
  'typographyTitle4lightFontWeight': string;
  'typographyTitle4lightLetterSpacing': string;
  'typographyTitle4lightLineHeight': string;
  'typographyTitle4lightParagraphIndent': string;
  'typographyTitle4lightParagraphSpacing': string;
  'typographyTitle4lightTextCase': string;
  'typographyTitle4lightTextDecoration': string;
  'typographyTitle4semilightFontFamily': string;
  'typographyTitle4semilightFontSize': string;
  'typographyTitle4semilightFontStretch': string;
  'typographyTitle4semilightFontStyle': string;
  'typographyTitle4semilightFontWeight': string;
  'typographyTitle4semilightLetterSpacing': string;
  'typographyTitle4semilightLineHeight': string;
  'typographyTitle4semilightParagraphIndent': string;
  'typographyTitle4semilightParagraphSpacing': string;
  'typographyTitle4semilightTextCase': string;
  'typographyTitle4semilightTextDecoration': string;
  'typographyTitle4strongFontFamily': string;
  'typographyTitle4strongFontSize': string;
  'typographyTitle4strongFontStretch': string;
  'typographyTitle4strongFontStyle': string;
  'typographyTitle4strongFontWeight': string;
  'typographyTitle4strongLetterSpacing': string;
  'typographyTitle4strongLineHeight': string;
  'typographyTitle4strongParagraphIndent': string;
  'typographyTitle4strongParagraphSpacing': string;
  'typographyTitle4strongTextCase': string;
  'typographyTitle4strongTextDecoration': string;
  'typographyTitle4strongerFontFamily': string;
  'typographyTitle4strongerFontSize': string;
  'typographyTitle4strongerFontStretch': string;
  'typographyTitle4strongerFontStyle': string;
  'typographyTitle4strongerFontWeight': string;
  'typographyTitle4strongerLetterSpacing': string;
  'typographyTitle4strongerLineHeight': string;
  'typographyTitle4strongerParagraphIndent': string;
  'typographyTitle4strongerParagraphSpacing': string;
  'typographyTitle4strongerTextCase': string;
  'typographyTitle4strongerTextDecoration': string;
}

export const fluentTokens: Theme & FluentThemeTokens = {
  'gradientLinear': '[object Object]',
  'fontCaption2FontSize': '10px',
  'fontCaption2TextDecoration': 'none',
  'fontCaption2FontFamily': 'Segoe UI',
  'fontCaption2FontWeight': '400',
  'fontCaption2FontStyle': 'normal',
  'fontCaption2FontStretch': 'normal',
  'fontCaption2LetterSpacing': '0',
  'fontCaption2LineHeight': '14px',
  'fontCaption2ParagraphIndent': '0',
  'fontCaption2ParagraphSpacing': '0',
  'fontCaption2TextCase': 'none',
  'fontCaption2strongFontSize': '10px',
  'fontCaption2strongTextDecoration': 'none',
  'fontCaption2strongFontFamily': 'Segoe UI',
  'fontCaption2strongFontWeight': '600',
  'fontCaption2strongFontStyle': 'normal',
  'fontCaption2strongFontStretch': 'normal',
  'fontCaption2strongLetterSpacing': '0',
  'fontCaption2strongLineHeight': '14px',
  'fontCaption2strongParagraphIndent': '0',
  'fontCaption2strongParagraphSpacing': '0',
  'fontCaption2strongTextCase': 'none',
  'fontCaption1FontSize': '12px',
  'fontCaption1TextDecoration': 'none',
  'fontCaption1FontFamily': 'Segoe UI',
  'fontCaption1FontWeight': '400',
  'fontCaption1FontStyle': 'normal',
  'fontCaption1FontStretch': 'normal',
  'fontCaption1LetterSpacing': '0',
  'fontCaption1LineHeight': '16px',
  'fontCaption1ParagraphIndent': '0',
  'fontCaption1ParagraphSpacing': '0',
  'fontCaption1TextCase': 'none',
  'fontCaption1strongFontSize': '12px',
  'fontCaption1strongTextDecoration': 'none',
  'fontCaption1strongFontFamily': 'Segoe UI',
  'fontCaption1strongFontWeight': '600',
  'fontCaption1strongFontStyle': 'normal',
  'fontCaption1strongFontStretch': 'normal',
  'fontCaption1strongLetterSpacing': '0',
  'fontCaption1strongLineHeight': '16px',
  'fontCaption1strongParagraphIndent': '0',
  'fontCaption1strongParagraphSpacing': '0',
  'fontCaption1strongTextCase': 'none',
  'fontCaption1strongerFontSize': '12px',
  'fontCaption1strongerTextDecoration': 'none',
  'fontCaption1strongerFontFamily': 'Segoe UI',
  'fontCaption1strongerFontWeight': '700',
  'fontCaption1strongerFontStyle': 'normal',
  'fontCaption1strongerFontStretch': 'normal',
  'fontCaption1strongerLetterSpacing': '0',
  'fontCaption1strongerLineHeight': '16px',
  'fontCaption1strongerParagraphIndent': '0',
  'fontCaption1strongerParagraphSpacing': '0',
  'fontCaption1strongerTextCase': 'none',
  'fontBody1FontSize': '14px',
  'fontBody1TextDecoration': 'none',
  'fontBody1FontFamily': 'Segoe UI',
  'fontBody1FontWeight': '400',
  'fontBody1FontStyle': 'normal',
  'fontBody1FontStretch': 'normal',
  'fontBody1LetterSpacing': '0',
  'fontBody1LineHeight': '22px',
  'fontBody1ParagraphIndent': '0',
  'fontBody1ParagraphSpacing': '0',
  'fontBody1TextCase': 'none',
  'fontBody1strongFontSize': '14px',
  'fontBody1strongTextDecoration': 'none',
  'fontBody1strongFontFamily': 'Segoe UI',
  'fontBody1strongFontWeight': '600',
  'fontBody1strongFontStyle': 'normal',
  'fontBody1strongFontStretch': 'normal',
  'fontBody1strongLetterSpacing': '0',
  'fontBody1strongLineHeight': '22px',
  'fontBody1strongParagraphIndent': '0',
  'fontBody1strongParagraphSpacing': '0',
  'fontBody1strongTextCase': 'none',
  'fontBody1strongerFontSize': '14px',
  'fontBody1strongerTextDecoration': 'none',
  'fontBody1strongerFontFamily': 'Segoe UI',
  'fontBody1strongerFontWeight': '700',
  'fontBody1strongerFontStyle': 'normal',
  'fontBody1strongerFontStretch': 'normal',
  'fontBody1strongerLetterSpacing': '0',
  'fontBody1strongerLineHeight': '22px',
  'fontBody1strongerParagraphIndent': '0',
  'fontBody1strongerParagraphSpacing': '0',
  'fontBody1strongerTextCase': 'none',
  'fontBody2semilightFontSize': '16px',
  'fontBody2semilightTextDecoration': 'none',
  'fontBody2semilightFontFamily': 'Segoe UI',
  'fontBody2semilightFontWeight': '400',
  'fontBody2semilightFontStyle': 'normal',
  'fontBody2semilightFontStretch': 'normal',
  'fontBody2semilightLetterSpacing': '0',
  'fontBody2semilightLineHeight': '24px',
  'fontBody2semilightParagraphIndent': '0',
  'fontBody2semilightParagraphSpacing': '0',
  'fontBody2semilightTextCase': 'none',
  'fontBody2FontSize': '16px',
  'fontBody2TextDecoration': 'none',
  'fontBody2FontFamily': 'Segoe UI',
  'fontBody2FontWeight': '400',
  'fontBody2FontStyle': 'normal',
  'fontBody2FontStretch': 'normal',
  'fontBody2LetterSpacing': '0',
  'fontBody2LineHeight': '24px',
  'fontBody2ParagraphIndent': '0',
  'fontBody2ParagraphSpacing': '0',
  'fontBody2TextCase': 'none',
  'fontBody2strongFontSize': '16px',
  'fontBody2strongTextDecoration': 'none',
  'fontBody2strongFontFamily': 'Segoe UI',
  'fontBody2strongFontWeight': '600',
  'fontBody2strongFontStyle': 'normal',
  'fontBody2strongFontStretch': 'normal',
  'fontBody2strongLetterSpacing': '0',
  'fontBody2strongLineHeight': '24px',
  'fontBody2strongParagraphIndent': '0',
  'fontBody2strongParagraphSpacing': '0',
  'fontBody2strongTextCase': 'none',
  'fontBody2strongerFontSize': '16px',
  'fontBody2strongerTextDecoration': 'none',
  'fontBody2strongerFontFamily': 'Segoe UI',
  'fontBody2strongerFontWeight': '700',
  'fontBody2strongerFontStyle': 'normal',
  'fontBody2strongerFontStretch': 'normal',
  'fontBody2strongerLetterSpacing': '0',
  'fontBody2strongerLineHeight': '24px',
  'fontBody2strongerParagraphIndent': '0',
  'fontBody2strongerParagraphSpacing': '0',
  'fontBody2strongerTextCase': 'none',
  'fontTitle4lightFontSize': '20px',
  'fontTitle4lightTextDecoration': 'none',
  'fontTitle4lightFontFamily': 'Segoe UI',
  'fontTitle4lightFontWeight': '300',
  'fontTitle4lightFontStyle': 'normal',
  'fontTitle4lightFontStretch': 'normal',
  'fontTitle4lightLetterSpacing': '0',
  'fontTitle4lightLineHeight': '28px',
  'fontTitle4lightParagraphIndent': '0',
  'fontTitle4lightParagraphSpacing': '0',
  'fontTitle4lightTextCase': 'none',
  'fontTitle4semilightFontSize': '20px',
  'fontTitle4semilightTextDecoration': 'none',
  'fontTitle4semilightFontFamily': 'Segoe UI',
  'fontTitle4semilightFontWeight': '400',
  'fontTitle4semilightFontStyle': 'normal',
  'fontTitle4semilightFontStretch': 'normal',
  'fontTitle4semilightLetterSpacing': '0',
  'fontTitle4semilightLineHeight': '28px',
  'fontTitle4semilightParagraphIndent': '0',
  'fontTitle4semilightParagraphSpacing': '0',
  'fontTitle4semilightTextCase': 'none',
  'fontTitle4FontSize': '20px',
  'fontTitle4TextDecoration': 'none',
  'fontTitle4FontFamily': 'Segoe UI',
  'fontTitle4FontWeight': '400',
  'fontTitle4FontStyle': 'normal',
  'fontTitle4FontStretch': 'normal',
  'fontTitle4LetterSpacing': '0',
  'fontTitle4LineHeight': '28px',
  'fontTitle4ParagraphIndent': '0',
  'fontTitle4ParagraphSpacing': '0',
  'fontTitle4TextCase': 'none',
  'fontTitle4strongFontSize': '20px',
  'fontTitle4strongTextDecoration': 'none',
  'fontTitle4strongFontFamily': 'Segoe UI',
  'fontTitle4strongFontWeight': '600',
  'fontTitle4strongFontStyle': 'normal',
  'fontTitle4strongFontStretch': 'normal',
  'fontTitle4strongLetterSpacing': '0',
  'fontTitle4strongLineHeight': '28px',
  'fontTitle4strongParagraphIndent': '0',
  'fontTitle4strongParagraphSpacing': '0',
  'fontTitle4strongTextCase': 'none',
  'fontTitle4strongerFontSize': '20px',
  'fontTitle4strongerTextDecoration': 'none',
  'fontTitle4strongerFontFamily': 'Segoe UI',
  'fontTitle4strongerFontWeight': '700',
  'fontTitle4strongerFontStyle': 'normal',
  'fontTitle4strongerFontStretch': 'normal',
  'fontTitle4strongerLetterSpacing': '0',
  'fontTitle4strongerLineHeight': '28px',
  'fontTitle4strongerParagraphIndent': '0',
  'fontTitle4strongerParagraphSpacing': '0',
  'fontTitle4strongerTextCase': 'none',
  'fontTitle3lightFontSize': '24px',
  'fontTitle3lightTextDecoration': 'none',
  'fontTitle3lightFontFamily': 'Segoe UI',
  'fontTitle3lightFontWeight': '300',
  'fontTitle3lightFontStyle': 'normal',
  'fontTitle3lightFontStretch': 'normal',
  'fontTitle3lightLetterSpacing': '0',
  'fontTitle3lightLineHeight': '34px',
  'fontTitle3lightParagraphIndent': '0',
  'fontTitle3lightParagraphSpacing': '0',
  'fontTitle3lightTextCase': 'none',
  'fontTitle3semilightFontSize': '24px',
  'fontTitle3semilightTextDecoration': 'none',
  'fontTitle3semilightFontFamily': 'Segoe UI',
  'fontTitle3semilightFontWeight': '400',
  'fontTitle3semilightFontStyle': 'normal',
  'fontTitle3semilightFontStretch': 'normal',
  'fontTitle3semilightLetterSpacing': '0',
  'fontTitle3semilightLineHeight': '34px',
  'fontTitle3semilightParagraphIndent': '0',
  'fontTitle3semilightParagraphSpacing': '0',
  'fontTitle3semilightTextCase': 'none',
  'fontTitle3FontSize': '24px',
  'fontTitle3TextDecoration': 'none',
  'fontTitle3FontFamily': 'Segoe UI',
  'fontTitle3FontWeight': '400',
  'fontTitle3FontStyle': 'normal',
  'fontTitle3FontStretch': 'normal',
  'fontTitle3LetterSpacing': '0',
  'fontTitle3LineHeight': '34px',
  'fontTitle3ParagraphIndent': '0',
  'fontTitle3ParagraphSpacing': '0',
  'fontTitle3TextCase': 'none',
  'fontTitle3strongFontSize': '24px',
  'fontTitle3strongTextDecoration': 'none',
  'fontTitle3strongFontFamily': 'Segoe UI',
  'fontTitle3strongFontWeight': '600',
  'fontTitle3strongFontStyle': 'normal',
  'fontTitle3strongFontStretch': 'normal',
  'fontTitle3strongLetterSpacing': '0',
  'fontTitle3strongLineHeight': '34px',
  'fontTitle3strongParagraphIndent': '0',
  'fontTitle3strongParagraphSpacing': '0',
  'fontTitle3strongTextCase': 'none',
  'fontTitle3strongerFontSize': '24px',
  'fontTitle3strongerTextDecoration': 'none',
  'fontTitle3strongerFontFamily': 'Segoe UI',
  'fontTitle3strongerFontWeight': '700',
  'fontTitle3strongerFontStyle': 'normal',
  'fontTitle3strongerFontStretch': 'normal',
  'fontTitle3strongerLetterSpacing': '0',
  'fontTitle3strongerLineHeight': '34px',
  'fontTitle3strongerParagraphIndent': '0',
  'fontTitle3strongerParagraphSpacing': '0',
  'fontTitle3strongerTextCase': 'none',
  'fontTitle2lightFontSize': '28px',
  'fontTitle2lightTextDecoration': 'none',
  'fontTitle2lightFontFamily': 'Segoe UI',
  'fontTitle2lightFontWeight': '300',
  'fontTitle2lightFontStyle': 'normal',
  'fontTitle2lightFontStretch': 'normal',
  'fontTitle2lightLetterSpacing': '0',
  'fontTitle2lightLineHeight': '36px',
  'fontTitle2lightParagraphIndent': '0',
  'fontTitle2lightParagraphSpacing': '0',
  'fontTitle2lightTextCase': 'none',
  'fontTitle2semilightFontSize': '28px',
  'fontTitle2semilightTextDecoration': 'none',
  'fontTitle2semilightFontFamily': 'Segoe UI',
  'fontTitle2semilightFontWeight': '400',
  'fontTitle2semilightFontStyle': 'normal',
  'fontTitle2semilightFontStretch': 'normal',
  'fontTitle2semilightLetterSpacing': '0',
  'fontTitle2semilightLineHeight': '36px',
  'fontTitle2semilightParagraphIndent': '0',
  'fontTitle2semilightParagraphSpacing': '0',
  'fontTitle2semilightTextCase': 'none',
  'fontTitle2FontSize': '28px',
  'fontTitle2TextDecoration': 'none',
  'fontTitle2FontFamily': 'Segoe UI',
  'fontTitle2FontWeight': '400',
  'fontTitle2FontStyle': 'normal',
  'fontTitle2FontStretch': 'normal',
  'fontTitle2LetterSpacing': '0',
  'fontTitle2LineHeight': '36px',
  'fontTitle2ParagraphIndent': '0',
  'fontTitle2ParagraphSpacing': '0',
  'fontTitle2TextCase': 'none',
  'fontTitle 2 strongFontSize': '28px',
  'fontTitle 2 strongTextDecoration': 'none',
  'fontTitle 2 strongFontFamily': 'Segoe UI',
  'fontTitle 2 strongFontWeight': '400',
  'fontTitle 2 strongFontStyle': 'normal',
  'fontTitle 2 strongFontStretch': 'normal',
  'fontTitle 2 strongLetterSpacing': '0',
  'fontTitle 2 strongLineHeight': '36px',
  'fontTitle 2 strongParagraphIndent': '0',
  'fontTitle 2 strongParagraphSpacing': '0',
  'fontTitle 2 strongTextCase': 'none',
  'fontTitle 2 strongerFontSize': '28px',
  'fontTitle 2 strongerTextDecoration': 'none',
  'fontTitle 2 strongerFontFamily': 'Segoe UI',
  'fontTitle 2 strongerFontWeight': '700',
  'fontTitle 2 strongerFontStyle': 'normal',
  'fontTitle 2 strongerFontStretch': 'normal',
  'fontTitle 2 strongerLetterSpacing': '0',
  'fontTitle 2 strongerLineHeight': '36px',
  'fontTitle 2 strongerParagraphIndent': '0',
  'fontTitle 2 strongerParagraphSpacing': '0',
  'fontTitle 2 strongerTextCase': 'none',
  'fontTitle 1FontSize': '32px',
  'fontTitle 1TextDecoration': 'none',
  'fontTitle 1FontFamily': 'Segoe UI',
  'fontTitle 1FontWeight': '400',
  'fontTitle 1FontStyle': 'normal',
  'fontTitle 1FontStretch': 'normal',
  'fontTitle 1LetterSpacing': '0',
  'fontTitle 1LineHeight': '48px',
  'fontTitle 1ParagraphIndent': '0',
  'fontTitle 1ParagraphSpacing': '0',
  'fontTitle 1TextCase': 'none',
  'fontTitle1strongFontSize': '32px',
  'fontTitle1strongTextDecoration': 'none',
  'fontTitle1strongFontFamily': 'Segoe UI',
  'fontTitle1strongFontWeight': '600',
  'fontTitle1strongFontStyle': 'normal',
  'fontTitle1strongFontStretch': 'normal',
  'fontTitle1strongLetterSpacing': '0',
  'fontTitle1strongLineHeight': '48px',
  'fontTitle1strongParagraphIndent': '0',
  'fontTitle1strongParagraphSpacing': '0',
  'fontTitle1strongTextCase': 'none',
  'fontTitle1strongerFontSize': '32px',
  'fontTitle1strongerTextDecoration': 'none',
  'fontTitle1strongerFontFamily': 'Segoe UI',
  'fontTitle1strongerFontWeight': '700',
  'fontTitle1strongerFontStyle': 'normal',
  'fontTitle1strongerFontStretch': 'normal',
  'fontTitle1strongerLetterSpacing': '0',
  'fontTitle1strongerLineHeight': '48px',
  'fontTitle1strongerParagraphIndent': '0',
  'fontTitle1strongerParagraphSpacing': '0',
  'fontTitle1strongerTextCase': 'none',
  'fontTitle1lightFontSize': '32px',
  'fontTitle1lightTextDecoration': 'none',
  'fontTitle1lightFontFamily': 'Segoe UI',
  'fontTitle1lightFontWeight': '300',
  'fontTitle1lightFontStyle': 'normal',
  'fontTitle1lightFontStretch': 'normal',
  'fontTitle1lightLetterSpacing': '0',
  'fontTitle1lightLineHeight': '48px',
  'fontTitle1lightParagraphIndent': '0',
  'fontTitle1lightParagraphSpacing': '0',
  'fontTitle1lightTextCase': 'none',
  'fontTitle1semilightFontSize': '32px',
  'fontTitle1semilightTextDecoration': 'none',
  'fontTitle1semilightFontFamily': 'Segoe UI',
  'fontTitle1semilightFontWeight': '400',
  'fontTitle1semilightFontStyle': 'normal',
  'fontTitle1semilightFontStretch': 'normal',
  'fontTitle1semilightLetterSpacing': '0',
  'fontTitle1semilightLineHeight': '48px',
  'fontTitle1semilightParagraphIndent': '0',
  'fontTitle1semilightParagraphSpacing': '0',
  'fontTitle1semilightTextCase': 'none',
  'fontDisplay3strongFontSize': '40px',
  'fontDisplay3strongTextDecoration': 'none',
  'fontDisplay3strongFontFamily': 'Segoe UI',
  'fontDisplay3strongFontWeight': '600',
  'fontDisplay3strongFontStyle': 'normal',
  'fontDisplay3strongFontStretch': 'normal',
  'fontDisplay3strongLetterSpacing': '0',
  'fontDisplay3strongLineHeight': '52px',
  'fontDisplay3strongParagraphIndent': '0',
  'fontDisplay3strongParagraphSpacing': '0',
  'fontDisplay3strongTextCase': 'none',
  'fontDisplay2lightFontSize': '48px',
  'fontDisplay2lightTextDecoration': 'none',
  'fontDisplay2lightFontFamily': 'Segoe UI',
  'fontDisplay2lightFontWeight': '300',
  'fontDisplay2lightFontStyle': 'normal',
  'fontDisplay2lightFontStretch': 'normal',
  'fontDisplay2lightLetterSpacing': '0',
  'fontDisplay2lightLineHeight': '64px',
  'fontDisplay2lightParagraphIndent': '0',
  'fontDisplay2lightParagraphSpacing': '0',
  'fontDisplay2lightTextCase': 'none',
  'fontDisplay2semilightFontSize': '48px',
  'fontDisplay2semilightTextDecoration': 'none',
  'fontDisplay2semilightFontFamily': 'Segoe UI',
  'fontDisplay2semilightFontWeight': '400',
  'fontDisplay2semilightFontStyle': 'normal',
  'fontDisplay2semilightFontStretch': 'normal',
  'fontDisplay2semilightLetterSpacing': '0',
  'fontDisplay2semilightLineHeight': '64px',
  'fontDisplay2semilightParagraphIndent': '0',
  'fontDisplay2semilightParagraphSpacing': '0',
  'fontDisplay2semilightTextCase': 'none',
  'fontDisplay2FontSize': '48px',
  'fontDisplay2TextDecoration': 'none',
  'fontDisplay2FontFamily': 'Segoe UI',
  'fontDisplay2FontWeight': '400',
  'fontDisplay2FontStyle': 'normal',
  'fontDisplay2FontStretch': 'normal',
  'fontDisplay2LetterSpacing': '0',
  'fontDisplay2LineHeight': '64px',
  'fontDisplay2ParagraphIndent': '0',
  'fontDisplay2ParagraphSpacing': '0',
  'fontDisplay2TextCase': 'none',
  'fontDisplay2strongFontSize': '48px',
  'fontDisplay2strongTextDecoration': 'none',
  'fontDisplay2strongFontFamily': 'Segoe UI',
  'fontDisplay2strongFontWeight': '400',
  'fontDisplay2strongFontStyle': 'normal',
  'fontDisplay2strongFontStretch': 'normal',
  'fontDisplay2strongLetterSpacing': '0',
  'fontDisplay2strongLineHeight': '64px',
  'fontDisplay2strongParagraphIndent': '0',
  'fontDisplay2strongParagraphSpacing': '0',
  'fontDisplay2strongTextCase': 'none',
  'fontDisplay2strongerFontSize': '48px',
  'fontDisplay2strongerTextDecoration': 'none',
  'fontDisplay2strongerFontFamily': 'Segoe UI',
  'fontDisplay2strongerFontWeight': '700',
  'fontDisplay2strongerFontStyle': 'normal',
  'fontDisplay2strongerFontStretch': 'normal',
  'fontDisplay2strongerLetterSpacing': '0',
  'fontDisplay2strongerLineHeight': '64px',
  'fontDisplay2strongerParagraphIndent': '0',
  'fontDisplay2strongerParagraphSpacing': '0',
  'fontDisplay2strongerTextCase': 'none',
  'fontDisplay1lightFontSize': '52px',
  'fontDisplay1lightTextDecoration': 'none',
  'fontDisplay1lightFontFamily': 'Segoe UI',
  'fontDisplay1lightFontWeight': '300',
  'fontDisplay1lightFontStyle': 'normal',
  'fontDisplay1lightFontStretch': 'normal',
  'fontDisplay1lightLetterSpacing': '0',
  'fontDisplay1lightLineHeight': '70px',
  'fontDisplay1lightParagraphIndent': '0',
  'fontDisplay1lightParagraphSpacing': '0',
  'fontDisplay1lightTextCase': 'none',
  'fontDisplay1semilightFontSize': '52px',
  'fontDisplay1semilightTextDecoration': 'none',
  'fontDisplay1semilightFontFamily': 'Segoe UI',
  'fontDisplay1semilightFontWeight': '400',
  'fontDisplay1semilightFontStyle': 'normal',
  'fontDisplay1semilightFontStretch': 'normal',
  'fontDisplay1semilightLetterSpacing': '0',
  'fontDisplay1semilightLineHeight': '70px',
  'fontDisplay1semilightParagraphIndent': '0',
  'fontDisplay1semilightParagraphSpacing': '0',
  'fontDisplay1semilightTextCase': 'none',
  'fontDisplay1FontSize': '52px',
  'fontDisplay1TextDecoration': 'none',
  'fontDisplay1FontFamily': 'Segoe UI',
  'fontDisplay1FontWeight': '400',
  'fontDisplay1FontStyle': 'normal',
  'fontDisplay1FontStretch': 'normal',
  'fontDisplay1LetterSpacing': '0',
  'fontDisplay1LineHeight': '70px',
  'fontDisplay1ParagraphIndent': '0',
  'fontDisplay1ParagraphSpacing': '0',
  'fontDisplay1TextCase': 'none',
  'fontDisplay1strongFontSize': '52px',
  'fontDisplay1strongTextDecoration': 'none',
  'fontDisplay1strongFontFamily': 'Segoe UI',
  'fontDisplay1strongFontWeight': '600',
  'fontDisplay1strongFontStyle': 'normal',
  'fontDisplay1strongFontStretch': 'normal',
  'fontDisplay1strongLetterSpacing': '0',
  'fontDisplay1strongLineHeight': '70px',
  'fontDisplay1strongParagraphIndent': '0',
  'fontDisplay1strongParagraphSpacing': '0',
  'fontDisplay1strongTextCase': 'none',
  'fontDisplay1strongerFontSize': '52px',
  'fontDisplay1strongerTextDecoration': 'none',
  'fontDisplay1strongerFontFamily': 'Segoe UI',
  'fontDisplay1strongerFontWeight': '700',
  'fontDisplay1strongerFontStyle': 'normal',
  'fontDisplay1strongerFontStretch': 'normal',
  'fontDisplay1strongerLetterSpacing': '0',
  'fontDisplay1strongerLineHeight': '70px',
  'fontDisplay1strongerParagraphIndent': '0',
  'fontDisplay1strongerParagraphSpacing': '0',
  'fontDisplay1strongerTextCase': 'none',
  'effectElevationShadow20': '[object Object]',
  'effectElevationShadow21': '[object Object]',
  'effectElevationShadow40': '[object Object]',
  'effectElevationShadow41': '[object Object]',
  'effectElevationShadow80': '[object Object]',
  'effectElevationShadow81': '[object Object]',
  'effectElevationShadow160': '[object Object]',
  'effectElevationShadow161': '[object Object]',
  'effectElevationShadow280': '[object Object]',
  'effectElevationShadow281': '[object Object]',
  'effectElevationShadow640': '[object Object]',
  'effectElevationShadow641': '[object Object]',
  'tree indentationNoneTree-padding-left': '0',
  'tree indentationNoneTreeleaf-padding-left': '24',
  'tree indentationLevel 1Tree-padding-left': '24',
  'tree indentationLevel 1Treeleaf-padding-left': '48',
  'tree indentationLevel 2Tree-padding-left': '48',
  'tree indentationLevel 2Treeleaf-padding-left': '72',
  'tree indentationLevel 3Tree-padding-left': '72',
  'tree indentationLevel 3Treeleaf-padding-left': '96',
  'tree indentationLevel 4Tree-padding-left': '96',
  'tree indentationLevel 4Treeleaf-padding-left': '120',
  'tree indentationLevel 5Tree-padding-left': '120',
  'tree indentationLevel 5Treeleaf-padding-left': '144',
  'tree indentationLevel 6Tree-padding-left': '144',
  'tree indentationLevel 6Treeleaf-padding-left': '168',
  'tree indentationLevel 7Tree-padding-left': '168',
  'tree indentationLevel 7Treeleaf-padding-left': '192',
  'tree indentationLevel 8Tree-padding-left': '192',
  'tree indentationLevel 8Treeleaf-padding-left': '216',
  'tree indentationLevel 9Tree-padding-left': '216',
  'tree indentationLevel 9Treeleaf-padding-left': '240',
  'tree indentationLevel 10Tree-padding-left': '240',
  'tree indentationLevel 10Treeleaf-padding-left': '264',
  'popover sizeMediumPopover-padding-vertical': '{global.medium.spacingvertical.lnudge}',
  'popover sizeMediumPopover-padding-horizontal': '{global.medium.spacinghorizontal.lnudge}',
  'popover sizeSmallPopover-padding-vertical': '{global.small.spacingvertical.m}',
  'popover sizeSmallPopover-padding-horizontal': '{global.small.spacinghorizontal.m}',
  'popover sizeLargePopover-padding-vertical': '{global.large.spacingvertical.xl}',
  'popover sizeLargePopover-padding-horizontal': '{global.large.spacinghorizontal.xl}',
  'card paddingMediumCard-horizontal': '{global.medium.spacinghorizontal.m}',
  'card paddingMediumCard-vertical': '{global.medium.spacingvertical.m}',
  'card paddingMediumCard-gap': '{global.medium.spacinghorizontal.mnudge}',
  'card paddingMediumCard-corner-radius': '{global.medium.borderradius.medium}',
  'card paddingSmallCard-horizontal': '{global.small.spacinghorizontal.s}',
  'card paddingSmallCard-vertical': '{global.small.spacingvertical.mnudge}',
  'card paddingSmallCard-gap': '{global.small.spacinghorizontal.mnudge}',
  'card paddingSmallCard-corner-radius': '{global.small.borderradius.medium}',
  'card paddingLargeCard-horizontal': '{global.large.spacinghorizontal.l}',
  'card paddingLargeCard-vertical': '{global.large.spacingvertical.l}',
  'card paddingLargeCard-gap': '{global.large.spacinghorizontal.m}',
  'card paddingLargeCard-corner-radius': '{global.large.borderradius.medium}',
  'button shapeButton-corner-radius': '{global.rounded (default).borderradius.small}',
  'button shapeButton-image-corner-radius': '{global.rounded (default).borderradius.small}',
  'badge shapeBadge-corner-radius': '{global.circular.borderradius.circular}',
  'arrow positionAbove startAbove-start': 'true',
  'arrow positionAbove startAbove-middle': 'false',
  'arrow positionAbove startAbove-end': 'false',
  'arrow positionAbove startBefore-top': 'false',
  'arrow positionAbove startBefore-center': 'false',
  'arrow positionAbove startBefore-bottom': 'false',
  'arrow positionAbove startAfter-top': 'false',
  'arrow positionAbove startAfter-center': 'false',
  'arrow positionAbove startAfter-bottom': 'false',
  'arrow positionAbove startBottom-start': 'false',
  'arrow positionAbove startBottom-center': 'false',
  'arrow positionAbove startBottom-end': 'false',
  'arrow positionAbove middleAbove-start': 'false',
  'arrow positionAbove middleAbove-middle': 'true',
  'arrow positionAbove middleAbove-end': 'false',
  'arrow positionAbove middleBefore-top': 'false',
  'arrow positionAbove middleBefore-center': 'false',
  'arrow positionAbove middleBefore-bottom': 'false',
  'arrow positionAbove middleAfter-top': 'false',
  'arrow positionAbove middleAfter-center': 'false',
  'arrow positionAbove middleAfter-bottom': 'false',
  'arrow positionAbove middleBottom-start': 'false',
  'arrow positionAbove middleBottom-center': 'false',
  'arrow positionAbove middleBottom-end': 'false',
  'arrow positionAbove endAbove-start': 'false',
  'arrow positionAbove endAbove-middle': 'false',
  'arrow positionAbove endAbove-end': 'true',
  'arrow positionAbove endBefore-top': 'false',
  'arrow positionAbove endBefore-center': 'false',
  'arrow positionAbove endBefore-bottom': 'false',
  'arrow positionAbove endAfter-top': 'false',
  'arrow positionAbove endAfter-center': 'false',
  'arrow positionAbove endAfter-bottom': 'false',
  'arrow positionAbove endBottom-start': 'false',
  'arrow positionAbove endBottom-center': 'false',
  'arrow positionAbove endBottom-end': 'false',
  'arrow positionBefore topAbove-start': 'false',
  'arrow positionBefore topAbove-middle': 'false',
  'arrow positionBefore topAbove-end': 'false',
  'arrow positionBefore topBefore-top': 'true',
  'arrow positionBefore topBefore-center': 'false',
  'arrow positionBefore topBefore-bottom': 'false',
  'arrow positionBefore topAfter-top': 'false',
  'arrow positionBefore topAfter-center': 'false',
  'arrow positionBefore topAfter-bottom': 'false',
  'arrow positionBefore topBottom-start': 'false',
  'arrow positionBefore topBottom-center': 'false',
  'arrow positionBefore topBottom-end': 'false',
  'arrow positionBefore middleAbove-start': 'false',
  'arrow positionBefore middleAbove-middle': 'false',
  'arrow positionBefore middleAbove-end': 'false',
  'arrow positionBefore middleBefore-top': 'false',
  'arrow positionBefore middleBefore-center': 'true',
  'arrow positionBefore middleBefore-bottom': 'false',
  'arrow positionBefore middleAfter-top': 'false',
  'arrow positionBefore middleAfter-center': 'false',
  'arrow positionBefore middleAfter-bottom': 'false',
  'arrow positionBefore middleBottom-start': 'false',
  'arrow positionBefore middleBottom-center': 'false',
  'arrow positionBefore middleBottom-end': 'false',
  'arrow positionBefore bottomAbove-start': 'false',
  'arrow positionBefore bottomAbove-middle': 'false',
  'arrow positionBefore bottomAbove-end': 'false',
  'arrow positionBefore bottomBefore-top': 'false',
  'arrow positionBefore bottomBefore-center': 'false',
  'arrow positionBefore bottomBefore-bottom': 'true',
  'arrow positionBefore bottomAfter-top': 'false',
  'arrow positionBefore bottomAfter-center': 'false',
  'arrow positionBefore bottomAfter-bottom': 'false',
  'arrow positionBefore bottomBottom-start': 'false',
  'arrow positionBefore bottomBottom-center': 'false',
  'arrow positionBefore bottomBottom-end': 'false',
  'arrow positionAfter topAbove-start': 'false',
  'arrow positionAfter topAbove-middle': 'false',
  'arrow positionAfter topAbove-end': 'false',
  'arrow positionAfter topBefore-top': 'false',
  'arrow positionAfter topBefore-center': 'false',
  'arrow positionAfter topBefore-bottom': 'false',
  'arrow positionAfter topAfter-top': 'true',
  'arrow positionAfter topAfter-center': 'false',
  'arrow positionAfter topAfter-bottom': 'false',
  'arrow positionAfter topBottom-start': 'false',
  'arrow positionAfter topBottom-center': 'false',
  'arrow positionAfter topBottom-end': 'false',
  'arrow positionAfter middleAbove-start': 'false',
  'arrow positionAfter middleAbove-middle': 'false',
  'arrow positionAfter middleAbove-end': 'false',
  'arrow positionAfter middleBefore-top': 'false',
  'arrow positionAfter middleBefore-center': 'false',
  'arrow positionAfter middleBefore-bottom': 'false',
  'arrow positionAfter middleAfter-top': 'false',
  'arrow positionAfter middleAfter-center': 'true',
  'arrow positionAfter middleAfter-bottom': 'false',
  'arrow positionAfter middleBottom-start': 'false',
  'arrow positionAfter middleBottom-center': 'false',
  'arrow positionAfter middleBottom-end': 'false',
  'arrow positionAfter bottomAbove-start': 'false',
  'arrow positionAfter bottomAbove-middle': 'false',
  'arrow positionAfter bottomAbove-end': 'false',
  'arrow positionAfter bottomBefore-top': 'false',
  'arrow positionAfter bottomBefore-center': 'false',
  'arrow positionAfter bottomBefore-bottom': 'false',
  'arrow positionAfter bottomAfter-top': 'false',
  'arrow positionAfter bottomAfter-center': 'false',
  'arrow positionAfter bottomAfter-bottom': 'true',
  'arrow positionAfter bottomBottom-start': 'false',
  'arrow positionAfter bottomBottom-center': 'false',
  'arrow positionAfter bottomBottom-end': 'false',
  'arrow positionBottom startAbove-start': 'false',
  'arrow positionBottom startAbove-middle': 'false',
  'arrow positionBottom startAbove-end': 'false',
  'arrow positionBottom startBefore-top': 'false',
  'arrow positionBottom startBefore-center': 'false',
  'arrow positionBottom startBefore-bottom': 'false',
  'arrow positionBottom startAfter-top': 'false',
  'arrow positionBottom startAfter-center': 'false',
  'arrow positionBottom startAfter-bottom': 'false',
  'arrow positionBottom startBottom-start': 'true',
  'arrow positionBottom startBottom-center': 'false',
  'arrow positionBottom startBottom-end': 'false',
  'arrow positionBottom middleAbove-start': 'false',
  'arrow positionBottom middleAbove-middle': 'false',
  'arrow positionBottom middleAbove-end': 'false',
  'arrow positionBottom middleBefore-top': 'false',
  'arrow positionBottom middleBefore-center': 'false',
  'arrow positionBottom middleBefore-bottom': 'false',
  'arrow positionBottom middleAfter-top': 'false',
  'arrow positionBottom middleAfter-center': 'false',
  'arrow positionBottom middleAfter-bottom': 'false',
  'arrow positionBottom middleBottom-start': 'false',
  'arrow positionBottom middleBottom-center': 'true',
  'arrow positionBottom middleBottom-end': 'false',
  'arrow positionBottom endAbove-start': 'false',
  'arrow positionBottom endAbove-middle': 'false',
  'arrow positionBottom endAbove-end': 'false',
  'arrow positionBottom endBefore-top': 'false',
  'arrow positionBottom endBefore-center': 'false',
  'arrow positionBottom endBefore-bottom': 'false',
  'arrow positionBottom endAfter-top': 'false',
  'arrow positionBottom endAfter-center': 'false',
  'arrow positionBottom endAfter-bottom': 'false',
  'arrow positionBottom endBottom-start': 'false',
  'arrow positionBottom endBottom-center': 'false',
  'arrow positionBottom endBottom-end': 'true',
  'arrow positionNoneAbove-start': 'false',
  'arrow positionNoneAbove-middle': 'false',
  'arrow positionNoneAbove-end': 'false',
  'arrow positionNoneBefore-top': 'false',
  'arrow positionNoneBefore-center': 'false',
  'arrow positionNoneBefore-bottom': 'false',
  'arrow positionNoneAfter-top': 'false',
  'arrow positionNoneAfter-center': 'false',
  'arrow positionNoneAfter-bottom': 'false',
  'arrow positionNoneBottom-start': 'false',
  'arrow positionNoneBottom-center': 'false',
  'arrow positionNoneBottom-end': 'false',
  'typographyFontfamilyBase': 'Segoe UI',
  'typographyLineheightBase100': '14',
  'typographyLineheightBase200': '16',
  'typographyLineheightBase300': '22',
  'typographyLineheightBase400': '24',
  'typographyLineheightBase500': '28',
  'typographyLineheightBase600': '34',
  'typographyLineheightBase700': '36',
  'typographyLineheightBase800': '48',
  'typographyLineheightBase900': '52',
  'typographyLineheightBase1000': '92',
  'typographyLineheightBase920': '64',
  'typographyLineheightBase980': '70',
  'typographyFontsize1000': '68',
  'typographyFontsizeBase100': '10',
  'typographyFontsizeBase200': '12',
  'typographyFontsizeBase300': '14',
  'typographyFontsizeBase400': '16',
  'typographyFontsizeBase500': '20',
  'typographyFontsizeBase600': '24',
  'typographyFontsizeBase700': '28',
  'typographyFontsizeBase800': '32',
  'typographyFontsizeBase900': '40',
  'typographyFontsizeBase980': '52',
  'typographyFontsizeBase920': '48',
  'typographyFontweightRegular': 'Regular',
  'typographyFontweightSemibold': 'Semibold',
  'typographyFontweightBold': 'Bold',
  'typographyFontweightSemilight': 'Semilight',
  'typographyFontweightLight': 'Light',
  'typographyCaption2FontSize': '10',
  'typographyCaption2TextDecoration': 'none',
  'typographyCaption2FontFamily': 'Segoe UI',
  'typographyCaption2FontWeight': '400',
  'typographyCaption2FontStyle': 'normal',
  'typographyCaption2FontStretch': 'normal',
  'typographyCaption2LetterSpacing': '0',
  'typographyCaption2LineHeight': '14',
  'typographyCaption2ParagraphIndent': '0',
  'typographyCaption2ParagraphSpacing': '0',
  'typographyCaption2TextCase': 'none',
  'typographyCaption2strongFontSize': '10',
  'typographyCaption2strongTextDecoration': 'none',
  'typographyCaption2strongFontFamily': 'Segoe UI',
  'typographyCaption2strongFontWeight': '600',
  'typographyCaption2strongFontStyle': 'normal',
  'typographyCaption2strongFontStretch': 'normal',
  'typographyCaption2strongLetterSpacing': '0',
  'typographyCaption2strongLineHeight': '14',
  'typographyCaption2strongParagraphIndent': '0',
  'typographyCaption2strongParagraphSpacing': '0',
  'typographyCaption2strongTextCase': 'none',
  'typographyCaption1FontSize': '12',
  'typographyCaption1TextDecoration': 'none',
  'typographyCaption1FontFamily': 'Segoe UI',
  'typographyCaption1FontWeight': '400',
  'typographyCaption1FontStyle': 'normal',
  'typographyCaption1FontStretch': 'normal',
  'typographyCaption1LetterSpacing': '0',
  'typographyCaption1LineHeight': '16',
  'typographyCaption1ParagraphIndent': '0',
  'typographyCaption1ParagraphSpacing': '0',
  'typographyCaption1TextCase': 'none',
  'typographyCaption1strongFontSize': '12',
  'typographyCaption1strongTextDecoration': 'none',
  'typographyCaption1strongFontFamily': 'Segoe UI',
  'typographyCaption1strongFontWeight': '600',
  'typographyCaption1strongFontStyle': 'normal',
  'typographyCaption1strongFontStretch': 'normal',
  'typographyCaption1strongLetterSpacing': '0',
  'typographyCaption1strongLineHeight': '16',
  'typographyCaption1strongParagraphIndent': '0',
  'typographyCaption1strongParagraphSpacing': '0',
  'typographyCaption1strongTextCase': 'none',
  'typographyCaption1strongerFontSize': '12',
  'typographyCaption1strongerTextDecoration': 'none',
  'typographyCaption1strongerFontFamily': 'Segoe UI',
  'typographyCaption1strongerFontWeight': '700',
  'typographyCaption1strongerFontStyle': 'normal',
  'typographyCaption1strongerFontStretch': 'normal',
  'typographyCaption1strongerLetterSpacing': '0',
  'typographyCaption1strongerLineHeight': '16',
  'typographyCaption1strongerParagraphIndent': '0',
  'typographyCaption1strongerParagraphSpacing': '0',
  'typographyCaption1strongerTextCase': 'none',
  'typographyBody1FontSize': '14',
  'typographyBody1TextDecoration': 'none',
  'typographyBody1FontFamily': 'Segoe UI',
  'typographyBody1FontWeight': '400',
  'typographyBody1FontStyle': 'normal',
  'typographyBody1FontStretch': 'normal',
  'typographyBody1LetterSpacing': '0',
  'typographyBody1LineHeight': '22',
  'typographyBody1ParagraphIndent': '0',
  'typographyBody1ParagraphSpacing': '0',
  'typographyBody1TextCase': 'none',
  'typographyBody1strongFontSize': '14',
  'typographyBody1strongTextDecoration': 'none',
  'typographyBody1strongFontFamily': 'Segoe UI',
  'typographyBody1strongFontWeight': '600',
  'typographyBody1strongFontStyle': 'normal',
  'typographyBody1strongFontStretch': 'normal',
  'typographyBody1strongLetterSpacing': '0',
  'typographyBody1strongLineHeight': '22',
  'typographyBody1strongParagraphIndent': '0',
  'typographyBody1strongParagraphSpacing': '0',
  'typographyBody1strongTextCase': 'none',
  'typographyBody1strongerFontSize': '14',
  'typographyBody1strongerTextDecoration': 'none',
  'typographyBody1strongerFontFamily': 'Segoe UI',
  'typographyBody1strongerFontWeight': '700',
  'typographyBody1strongerFontStyle': 'normal',
  'typographyBody1strongerFontStretch': 'normal',
  'typographyBody1strongerLetterSpacing': '0',
  'typographyBody1strongerLineHeight': '22',
  'typographyBody1strongerParagraphIndent': '0',
  'typographyBody1strongerParagraphSpacing': '0',
  'typographyBody1strongerTextCase': 'none',
  'typographyBody2semilightFontSize': '16',
  'typographyBody2semilightTextDecoration': 'none',
  'typographyBody2semilightFontFamily': 'Segoe UI',
  'typographyBody2semilightFontWeight': '400',
  'typographyBody2semilightFontStyle': 'normal',
  'typographyBody2semilightFontStretch': 'normal',
  'typographyBody2semilightLetterSpacing': '0',
  'typographyBody2semilightLineHeight': '24',
  'typographyBody2semilightParagraphIndent': '0',
  'typographyBody2semilightParagraphSpacing': '0',
  'typographyBody2semilightTextCase': 'none',
  'typographyBody2FontSize': '16',
  'typographyBody2TextDecoration': 'none',
  'typographyBody2FontFamily': 'Segoe UI',
  'typographyBody2FontWeight': '400',
  'typographyBody2FontStyle': 'normal',
  'typographyBody2FontStretch': 'normal',
  'typographyBody2LetterSpacing': '0',
  'typographyBody2LineHeight': '24',
  'typographyBody2ParagraphIndent': '0',
  'typographyBody2ParagraphSpacing': '0',
  'typographyBody2TextCase': 'none',
  'typographyBody2strongFontSize': '16',
  'typographyBody2strongTextDecoration': 'none',
  'typographyBody2strongFontFamily': 'Segoe UI',
  'typographyBody2strongFontWeight': '600',
  'typographyBody2strongFontStyle': 'normal',
  'typographyBody2strongFontStretch': 'normal',
  'typographyBody2strongLetterSpacing': '0',
  'typographyBody2strongLineHeight': '24',
  'typographyBody2strongParagraphIndent': '0',
  'typographyBody2strongParagraphSpacing': '0',
  'typographyBody2strongTextCase': 'none',
  'typographyBody2strongerFontSize': '16',
  'typographyBody2strongerTextDecoration': 'none',
  'typographyBody2strongerFontFamily': 'Segoe UI',
  'typographyBody2strongerFontWeight': '700',
  'typographyBody2strongerFontStyle': 'normal',
  'typographyBody2strongerFontStretch': 'normal',
  'typographyBody2strongerLetterSpacing': '0',
  'typographyBody2strongerLineHeight': '24',
  'typographyBody2strongerParagraphIndent': '0',
  'typographyBody2strongerParagraphSpacing': '0',
  'typographyBody2strongerTextCase': 'none',
  'typographyTitle4lightFontSize': '20',
  'typographyTitle4lightTextDecoration': 'none',
  'typographyTitle4lightFontFamily': 'Segoe UI',
  'typographyTitle4lightFontWeight': '300',
  'typographyTitle4lightFontStyle': 'normal',
  'typographyTitle4lightFontStretch': 'normal',
  'typographyTitle4lightLetterSpacing': '0',
  'typographyTitle4lightLineHeight': '28',
  'typographyTitle4lightParagraphIndent': '0',
  'typographyTitle4lightParagraphSpacing': '0',
  'typographyTitle4lightTextCase': 'none',
  'typographyTitle4semilightFontSize': '20',
  'typographyTitle4semilightTextDecoration': 'none',
  'typographyTitle4semilightFontFamily': 'Segoe UI',
  'typographyTitle4semilightFontWeight': '400',
  'typographyTitle4semilightFontStyle': 'normal',
  'typographyTitle4semilightFontStretch': 'normal',
  'typographyTitle4semilightLetterSpacing': '0',
  'typographyTitle4semilightLineHeight': '28',
  'typographyTitle4semilightParagraphIndent': '0',
  'typographyTitle4semilightParagraphSpacing': '0',
  'typographyTitle4semilightTextCase': 'none',
  'typographyTitle4FontSize': '20',
  'typographyTitle4TextDecoration': 'none',
  'typographyTitle4FontFamily': 'Segoe UI',
  'typographyTitle4FontWeight': '400',
  'typographyTitle4FontStyle': 'normal',
  'typographyTitle4FontStretch': 'normal',
  'typographyTitle4LetterSpacing': '0',
  'typographyTitle4LineHeight': '28',
  'typographyTitle4ParagraphIndent': '0',
  'typographyTitle4ParagraphSpacing': '0',
  'typographyTitle4TextCase': 'none',
  'typographyTitle4strongFontSize': '20',
  'typographyTitle4strongTextDecoration': 'none',
  'typographyTitle4strongFontFamily': 'Segoe UI',
  'typographyTitle4strongFontWeight': '600',
  'typographyTitle4strongFontStyle': 'normal',
  'typographyTitle4strongFontStretch': 'normal',
  'typographyTitle4strongLetterSpacing': '0',
  'typographyTitle4strongLineHeight': '28',
  'typographyTitle4strongParagraphIndent': '0',
  'typographyTitle4strongParagraphSpacing': '0',
  'typographyTitle4strongTextCase': 'none',
  'typographyTitle4strongerFontSize': '20',
  'typographyTitle4strongerTextDecoration': 'none',
  'typographyTitle4strongerFontFamily': 'Segoe UI',
  'typographyTitle4strongerFontWeight': '700',
  'typographyTitle4strongerFontStyle': 'normal',
  'typographyTitle4strongerFontStretch': 'normal',
  'typographyTitle4strongerLetterSpacing': '0',
  'typographyTitle4strongerLineHeight': '28',
  'typographyTitle4strongerParagraphIndent': '0',
  'typographyTitle4strongerParagraphSpacing': '0',
  'typographyTitle4strongerTextCase': 'none',
  'typographyTitle3lightFontSize': '24',
  'typographyTitle3lightTextDecoration': 'none',
  'typographyTitle3lightFontFamily': 'Segoe UI',
  'typographyTitle3lightFontWeight': '300',
  'typographyTitle3lightFontStyle': 'normal',
  'typographyTitle3lightFontStretch': 'normal',
  'typographyTitle3lightLetterSpacing': '0',
  'typographyTitle3lightLineHeight': '34',
  'typographyTitle3lightParagraphIndent': '0',
  'typographyTitle3lightParagraphSpacing': '0',
  'typographyTitle3lightTextCase': 'none',
  'typographyTitle3semilightFontSize': '24',
  'typographyTitle3semilightTextDecoration': 'none',
  'typographyTitle3semilightFontFamily': 'Segoe UI',
  'typographyTitle3semilightFontWeight': '400',
  'typographyTitle3semilightFontStyle': 'normal',
  'typographyTitle3semilightFontStretch': 'normal',
  'typographyTitle3semilightLetterSpacing': '0',
  'typographyTitle3semilightLineHeight': '34',
  'typographyTitle3semilightParagraphIndent': '0',
  'typographyTitle3semilightParagraphSpacing': '0',
  'typographyTitle3semilightTextCase': 'none',
  'typographyTitle3FontSize': '24',
  'typographyTitle3TextDecoration': 'none',
  'typographyTitle3FontFamily': 'Segoe UI',
  'typographyTitle3FontWeight': '400',
  'typographyTitle3FontStyle': 'normal',
  'typographyTitle3FontStretch': 'normal',
  'typographyTitle3LetterSpacing': '0',
  'typographyTitle3LineHeight': '34',
  'typographyTitle3ParagraphIndent': '0',
  'typographyTitle3ParagraphSpacing': '0',
  'typographyTitle3TextCase': 'none',
  'typographyTitle3strongFontSize': '24',
  'typographyTitle3strongTextDecoration': 'none',
  'typographyTitle3strongFontFamily': 'Segoe UI',
  'typographyTitle3strongFontWeight': '600',
  'typographyTitle3strongFontStyle': 'normal',
  'typographyTitle3strongFontStretch': 'normal',
  'typographyTitle3strongLetterSpacing': '0',
  'typographyTitle3strongLineHeight': '34',
  'typographyTitle3strongParagraphIndent': '0',
  'typographyTitle3strongParagraphSpacing': '0',
  'typographyTitle3strongTextCase': 'none',
  'typographyTitle3strongerFontSize': '24',
  'typographyTitle3strongerTextDecoration': 'none',
  'typographyTitle3strongerFontFamily': 'Segoe UI',
  'typographyTitle3strongerFontWeight': '700',
  'typographyTitle3strongerFontStyle': 'normal',
  'typographyTitle3strongerFontStretch': 'normal',
  'typographyTitle3strongerLetterSpacing': '0',
  'typographyTitle3strongerLineHeight': '34',
  'typographyTitle3strongerParagraphIndent': '0',
  'typographyTitle3strongerParagraphSpacing': '0',
  'typographyTitle3strongerTextCase': 'none',
  'typographyTitle2lightFontSize': '28',
  'typographyTitle2lightTextDecoration': 'none',
  'typographyTitle2lightFontFamily': 'Segoe UI',
  'typographyTitle2lightFontWeight': '300',
  'typographyTitle2lightFontStyle': 'normal',
  'typographyTitle2lightFontStretch': 'normal',
  'typographyTitle2lightLetterSpacing': '0',
  'typographyTitle2lightLineHeight': '36',
  'typographyTitle2lightParagraphIndent': '0',
  'typographyTitle2lightParagraphSpacing': '0',
  'typographyTitle2lightTextCase': 'none',
  'typographyTitle2semilightFontSize': '28',
  'typographyTitle2semilightTextDecoration': 'none',
  'typographyTitle2semilightFontFamily': 'Segoe UI',
  'typographyTitle2semilightFontWeight': '400',
  'typographyTitle2semilightFontStyle': 'normal',
  'typographyTitle2semilightFontStretch': 'normal',
  'typographyTitle2semilightLetterSpacing': '0',
  'typographyTitle2semilightLineHeight': '36',
  'typographyTitle2semilightParagraphIndent': '0',
  'typographyTitle2semilightParagraphSpacing': '0',
  'typographyTitle2semilightTextCase': 'none',
  'typographyTitle2FontSize': '28',
  'typographyTitle2TextDecoration': 'none',
  'typographyTitle2FontFamily': 'Segoe UI',
  'typographyTitle2FontWeight': '400',
  'typographyTitle2FontStyle': 'normal',
  'typographyTitle2FontStretch': 'normal',
  'typographyTitle2LetterSpacing': '0',
  'typographyTitle2LineHeight': '36',
  'typographyTitle2ParagraphIndent': '0',
  'typographyTitle2ParagraphSpacing': '0',
  'typographyTitle2TextCase': 'none',
  'typographyTitle 2 strongFontSize': '28',
  'typographyTitle 2 strongTextDecoration': 'none',
  'typographyTitle 2 strongFontFamily': 'Segoe UI',
  'typographyTitle 2 strongFontWeight': '400',
  'typographyTitle 2 strongFontStyle': 'normal',
  'typographyTitle 2 strongFontStretch': 'normal',
  'typographyTitle 2 strongLetterSpacing': '0',
  'typographyTitle 2 strongLineHeight': '36',
  'typographyTitle 2 strongParagraphIndent': '0',
  'typographyTitle 2 strongParagraphSpacing': '0',
  'typographyTitle 2 strongTextCase': 'none',
  'typographyTitle 2 strongerFontSize': '28',
  'typographyTitle 2 strongerTextDecoration': 'none',
  'typographyTitle 2 strongerFontFamily': 'Segoe UI',
  'typographyTitle 2 strongerFontWeight': '700',
  'typographyTitle 2 strongerFontStyle': 'normal',
  'typographyTitle 2 strongerFontStretch': 'normal',
  'typographyTitle 2 strongerLetterSpacing': '0',
  'typographyTitle 2 strongerLineHeight': '36',
  'typographyTitle 2 strongerParagraphIndent': '0',
  'typographyTitle 2 strongerParagraphSpacing': '0',
  'typographyTitle 2 strongerTextCase': 'none',
  'typographyTitle 1FontSize': '32',
  'typographyTitle 1TextDecoration': 'none',
  'typographyTitle 1FontFamily': 'Segoe UI',
  'typographyTitle 1FontWeight': '400',
  'typographyTitle 1FontStyle': 'normal',
  'typographyTitle 1FontStretch': 'normal',
  'typographyTitle 1LetterSpacing': '0',
  'typographyTitle 1LineHeight': '48',
  'typographyTitle 1ParagraphIndent': '0',
  'typographyTitle 1ParagraphSpacing': '0',
  'typographyTitle 1TextCase': 'none',
  'typographyTitle1strongFontSize': '32',
  'typographyTitle1strongTextDecoration': 'none',
  'typographyTitle1strongFontFamily': 'Segoe UI',
  'typographyTitle1strongFontWeight': '600',
  'typographyTitle1strongFontStyle': 'normal',
  'typographyTitle1strongFontStretch': 'normal',
  'typographyTitle1strongLetterSpacing': '0',
  'typographyTitle1strongLineHeight': '48',
  'typographyTitle1strongParagraphIndent': '0',
  'typographyTitle1strongParagraphSpacing': '0',
  'typographyTitle1strongTextCase': 'none',
  'typographyTitle1strongerFontSize': '32',
  'typographyTitle1strongerTextDecoration': 'none',
  'typographyTitle1strongerFontFamily': 'Segoe UI',
  'typographyTitle1strongerFontWeight': '700',
  'typographyTitle1strongerFontStyle': 'normal',
  'typographyTitle1strongerFontStretch': 'normal',
  'typographyTitle1strongerLetterSpacing': '0',
  'typographyTitle1strongerLineHeight': '48',
  'typographyTitle1strongerParagraphIndent': '0',
  'typographyTitle1strongerParagraphSpacing': '0',
  'typographyTitle1strongerTextCase': 'none',
  'typographyTitle1lightFontSize': '32',
  'typographyTitle1lightTextDecoration': 'none',
  'typographyTitle1lightFontFamily': 'Segoe UI',
  'typographyTitle1lightFontWeight': '300',
  'typographyTitle1lightFontStyle': 'normal',
  'typographyTitle1lightFontStretch': 'normal',
  'typographyTitle1lightLetterSpacing': '0',
  'typographyTitle1lightLineHeight': '48',
  'typographyTitle1lightParagraphIndent': '0',
  'typographyTitle1lightParagraphSpacing': '0',
  'typographyTitle1lightTextCase': 'none',
  'typographyTitle1semilightFontSize': '32',
  'typographyTitle1semilightTextDecoration': 'none',
  'typographyTitle1semilightFontFamily': 'Segoe UI',
  'typographyTitle1semilightFontWeight': '400',
  'typographyTitle1semilightFontStyle': 'normal',
  'typographyTitle1semilightFontStretch': 'normal',
  'typographyTitle1semilightLetterSpacing': '0',
  'typographyTitle1semilightLineHeight': '48',
  'typographyTitle1semilightParagraphIndent': '0',
  'typographyTitle1semilightParagraphSpacing': '0',
  'typographyTitle1semilightTextCase': 'none',
  'typographyDisplay3strongFontSize': '40',
  'typographyDisplay3strongTextDecoration': 'none',
  'typographyDisplay3strongFontFamily': 'Segoe UI',
  'typographyDisplay3strongFontWeight': '600',
  'typographyDisplay3strongFontStyle': 'normal',
  'typographyDisplay3strongFontStretch': 'normal',
  'typographyDisplay3strongLetterSpacing': '0',
  'typographyDisplay3strongLineHeight': '52',
  'typographyDisplay3strongParagraphIndent': '0',
  'typographyDisplay3strongParagraphSpacing': '0',
  'typographyDisplay3strongTextCase': 'none',
  'typographyDisplay2lightFontSize': '48',
  'typographyDisplay2lightTextDecoration': 'none',
  'typographyDisplay2lightFontFamily': 'Segoe UI',
  'typographyDisplay2lightFontWeight': '300',
  'typographyDisplay2lightFontStyle': 'normal',
  'typographyDisplay2lightFontStretch': 'normal',
  'typographyDisplay2lightLetterSpacing': '0',
  'typographyDisplay2lightLineHeight': '64',
  'typographyDisplay2lightParagraphIndent': '0',
  'typographyDisplay2lightParagraphSpacing': '0',
  'typographyDisplay2lightTextCase': 'none',
  'typographyDisplay2semilightFontSize': '48',
  'typographyDisplay2semilightTextDecoration': 'none',
  'typographyDisplay2semilightFontFamily': 'Segoe UI',
  'typographyDisplay2semilightFontWeight': '400',
  'typographyDisplay2semilightFontStyle': 'normal',
  'typographyDisplay2semilightFontStretch': 'normal',
  'typographyDisplay2semilightLetterSpacing': '0',
  'typographyDisplay2semilightLineHeight': '64',
  'typographyDisplay2semilightParagraphIndent': '0',
  'typographyDisplay2semilightParagraphSpacing': '0',
  'typographyDisplay2semilightTextCase': 'none',
  'typographyDisplay2FontSize': '48',
  'typographyDisplay2TextDecoration': 'none',
  'typographyDisplay2FontFamily': 'Segoe UI',
  'typographyDisplay2FontWeight': '400',
  'typographyDisplay2FontStyle': 'normal',
  'typographyDisplay2FontStretch': 'normal',
  'typographyDisplay2LetterSpacing': '0',
  'typographyDisplay2LineHeight': '64',
  'typographyDisplay2ParagraphIndent': '0',
  'typographyDisplay2ParagraphSpacing': '0',
  'typographyDisplay2TextCase': 'none',
  'typographyDisplay2strongFontSize': '48',
  'typographyDisplay2strongTextDecoration': 'none',
  'typographyDisplay2strongFontFamily': 'Segoe UI',
  'typographyDisplay2strongFontWeight': '400',
  'typographyDisplay2strongFontStyle': 'normal',
  'typographyDisplay2strongFontStretch': 'normal',
  'typographyDisplay2strongLetterSpacing': '0',
  'typographyDisplay2strongLineHeight': '64',
  'typographyDisplay2strongParagraphIndent': '0',
  'typographyDisplay2strongParagraphSpacing': '0',
  'typographyDisplay2strongTextCase': 'none',
  'typographyDisplay2strongerFontSize': '48',
  'typographyDisplay2strongerTextDecoration': 'none',
  'typographyDisplay2strongerFontFamily': 'Segoe UI',
  'typographyDisplay2strongerFontWeight': '700',
  'typographyDisplay2strongerFontStyle': 'normal',
  'typographyDisplay2strongerFontStretch': 'normal',
  'typographyDisplay2strongerLetterSpacing': '0',
  'typographyDisplay2strongerLineHeight': '64',
  'typographyDisplay2strongerParagraphIndent': '0',
  'typographyDisplay2strongerParagraphSpacing': '0',
  'typographyDisplay2strongerTextCase': 'none',
  'typographyDisplay1lightFontSize': '52',
  'typographyDisplay1lightTextDecoration': 'none',
  'typographyDisplay1lightFontFamily': 'Segoe UI',
  'typographyDisplay1lightFontWeight': '300',
  'typographyDisplay1lightFontStyle': 'normal',
  'typographyDisplay1lightFontStretch': 'normal',
  'typographyDisplay1lightLetterSpacing': '0',
  'typographyDisplay1lightLineHeight': '70',
  'typographyDisplay1lightParagraphIndent': '0',
  'typographyDisplay1lightParagraphSpacing': '0',
  'typographyDisplay1lightTextCase': 'none',
  'typographyDisplay1semilightFontSize': '52',
  'typographyDisplay1semilightTextDecoration': 'none',
  'typographyDisplay1semilightFontFamily': 'Segoe UI',
  'typographyDisplay1semilightFontWeight': '400',
  'typographyDisplay1semilightFontStyle': 'normal',
  'typographyDisplay1semilightFontStretch': 'normal',
  'typographyDisplay1semilightLetterSpacing': '0',
  'typographyDisplay1semilightLineHeight': '70',
  'typographyDisplay1semilightParagraphIndent': '0',
  'typographyDisplay1semilightParagraphSpacing': '0',
  'typographyDisplay1semilightTextCase': 'none',
  'typographyDisplay1FontSize': '52',
  'typographyDisplay1TextDecoration': 'none',
  'typographyDisplay1FontFamily': 'Segoe UI',
  'typographyDisplay1FontWeight': '400',
  'typographyDisplay1FontStyle': 'normal',
  'typographyDisplay1FontStretch': 'normal',
  'typographyDisplay1LetterSpacing': '0',
  'typographyDisplay1LineHeight': '70',
  'typographyDisplay1ParagraphIndent': '0',
  'typographyDisplay1ParagraphSpacing': '0',
  'typographyDisplay1TextCase': 'none',
  'typographyDisplay1strongFontSize': '52',
  'typographyDisplay1strongTextDecoration': 'none',
  'typographyDisplay1strongFontFamily': 'Segoe UI',
  'typographyDisplay1strongFontWeight': '600',
  'typographyDisplay1strongFontStyle': 'normal',
  'typographyDisplay1strongFontStretch': 'normal',
  'typographyDisplay1strongLetterSpacing': '0',
  'typographyDisplay1strongLineHeight': '70',
  'typographyDisplay1strongParagraphIndent': '0',
  'typographyDisplay1strongParagraphSpacing': '0',
  'typographyDisplay1strongTextCase': 'none',
  'typographyDisplay1strongerFontSize': '52',
  'typographyDisplay1strongerTextDecoration': 'none',
  'typographyDisplay1strongerFontFamily': 'Segoe UI',
  'typographyDisplay1strongerFontWeight': '700',
  'typographyDisplay1strongerFontStyle': 'normal',
  'typographyDisplay1strongerFontStretch': 'normal',
  'typographyDisplay1strongerLetterSpacing': '0',
  'typographyDisplay1strongerLineHeight': '70',
  'typographyDisplay1strongerParagraphIndent': '0',
  'typographyDisplay1strongerParagraphSpacing': '0',
  'typographyDisplay1strongerTextCase': 'none',
  'themeLightNeutralBackground1Rest': '{global.light.colors.neutral.white}',
  'themeLightNeutralBackground1Hover': '{global.light.colors.neutral.grey-80}',
  'themeLightNeutralBackground1Pressed': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralBackground1Selected': '{global.light.colors.neutral.grey-90}',
  'themeLightNeutralBackground2Rest': '#f5f4f2ff',
  'themeLightNeutralBackground3Rest': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralBackground3Hover': '{global.light.colors.neutral.grey-80}',
  'themeLightNeutralBackground3Pressed': '{global.light.colors.neutral.grey-80}',
  'themeLightNeutralBackground4Rest': '{global.light.colors.neutral.grey-90}',
  'themeLightNeutralBackground4Hover': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralBackground4Pressed': '{global.light.colors.neutral.grey-60}',
  'themeLightNeutralBackground5Rest': '{global.light.colors.neutral.grey-80}',
  'themeLightNeutralBackground6Rest': '{global.light.colors.neutral.grey-90}',
  'themeLightNeutralBackgroundInvertedRest': '{brand.light.brand-10}',
  'themeLightNeutralBackgroundInvertedDisabledRest': '{global.light.colors.alpha.white.10}',
  'themeLightNeutralBackgroundAlpha1Rest': '{global.light.colors.alpha.white.50}',
  'themeLightNeutralBackgroundAlpha2Rest': '{global.light.colors.alpha.white.80}',
  'themeLightNeutralBackgroundStaticRest': '{global.light.colors.neutral.white}',
  'themeLightNeutralBackgroundSubtleRest': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralBackgroundSubtleHover': '{global.light.colors.neutral.grey-80}',
  'themeLightNeutralBackgroundSubtlePressed': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralBackgroundSubtleSelected': '{global.light.colors.neutral.grey-90}',
  'themeLightNeutralBackgroundSubtleLight alphaHover': '{global.light.colors.alpha.white.70}',
  'themeLightNeutralBackgroundSubtleLight alphaPressed': '{global.light.colors.alpha.white.50}',
  'themeLightNeutralBackgroundSubtleLight alphaSelected': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralBackgroundSubtleInvertedRest': '{global.light.colors.alpha.black.0}',
  'themeLightNeutralBackgroundSubtleInvertedHover': '{global.light.colors.alpha.black.10}',
  'themeLightNeutralBackgroundSubtleInvertedPressed': '{global.light.colors.alpha.black.30}',
  'themeLightNeutralBackgroundSubtleInvertedSelected': '{global.light.colors.alpha.black.20}',
  'themeLightNeutralBackgroundTransparentRest': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralBackgroundTransparentHover': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralBackgroundTransparentPressed': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralBackgroundTransparentSelected': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralBackgroundDisabledRest': '{global.light.colors.neutral.grey-80}',
  'themeLightNeutralBackgroundStencil1Rest': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralBackgroundStencil2Rest': '{global.light.colors.neutral.grey-90}',
  'themeLightNeutralBackgroundOverlayRest': '{global.light.colors.alpha.black.40}',
  'themeLightNeutralBackgroundOverlayScrollbarRest': '{global.light.colors.alpha.black.50}',
  'themeLightNeutralForeground1Rest primary text': '{brand.light.brand-10}',
  'themeLightNeutralForeground1Hover': '{brand.light.brand-30}',
  'themeLightNeutralForeground1Pressed': '{brand.light.brand-30}',
  'themeLightNeutralForeground1Selected': '{brand.light.brand-30}',
  'themeLightNeutralForeground2Rest secondary text': '{global.light.colors.neutral.grey-12}',
  'themeLightNeutralForeground2Hover': '{global.light.colors.neutral.grey-6}',
  'themeLightNeutralForeground2Pressed': '{global.light.colors.neutral.grey-6}',
  'themeLightNeutralForeground2Selected': '{global.light.colors.neutral.grey-6}',
  'themeLightNeutralForeground2BrandHover': '{brand.light.brand-50}',
  'themeLightNeutralForeground2BrandPressed': '{brand.light.brand-40}',
  'themeLightNeutralForeground2BrandSelected': '{brand.light.brand-30}',
  'themeLightNeutralForeground2BrandRest': '{brand.light.brand-60}',
  'themeLightNeutralForeground2LinkRest': '{brand.light.brand-60}',
  'themeLightNeutralForeground2LinkHover': '{brand.light.brand-50}',
  'themeLightNeutralForeground2LinkPressed': '{brand.light.brand-40}',
  'themeLightNeutralForeground2LinkSelected': '{brand.light.brand-30}',
  'themeLightNeutralForeground4Rest': '{global.light.colors.neutral.grey-30}',
  'themeLightNeutralForegroundDisabled2Rest': '{global.light.colors.neutral.grey-60}',
  'themeLightNeutralForegroundDisabledRest': '{global.light.colors.neutral.grey-50}',
  'themeLightNeutralForegroundStaticInvertedRest': '{global.light.colors.neutral.white}',
  'themeLightNeutralForegroundInverted1Rest': '{global.light.colors.neutral.white}',
  'themeLightNeutralForegroundInverted1Hover': '{global.light.colors.neutral.grey-80}',
  'themeLightNeutralForegroundInverted1Pressed': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralForegroundInverted1Selected': '{global.light.colors.neutral.grey-60}',
  'themeLightNeutralForegroundInverted2Rest': '{global.light.colors.neutral.white}',
  'themeLightNeutralForegroundInvertedDisabledRest': '{global.light.colors.alpha.white.40}',
  'themeLightNeutralForegroundInvertedLinkRest': '{global.light.colors.neutral.white}',
  'themeLightNeutralForegroundInvertedLinkHover': '{global.light.colors.neutral.grey-90}',
  'themeLightNeutralForegroundInvertedLinkPressed': '{global.light.colors.neutral.grey-80}',
  'themeLightNeutralForegroundInvertedLinkSelected': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralForegroundOn brandRest': '{global.light.colors.neutral.white}',
  'themeLightNeutralStroke1Rest': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralStroke1Hover': '{global.light.colors.neutral.grey-60}',
  'themeLightNeutralStroke1Pressed': '{global.light.colors.neutral.grey-50}',
  'themeLightNeutralStroke1Selected': '{global.light.colors.neutral.grey-40}',
  'themeLightNeutralStroke2Rest': '{global.light.colors.grey.white}',
  'themeLightNeutralStroke3Rest': '{global.light.colors.neutral.grey-50}',
  'themeLightNeutralStrokeAlpha1Rest': '{global.light.colors.alpha.black.5}',
  'themeLightNeutralStrokeAlpha2Rest': '{global.light.colors.alpha.white.20}',
  'themeLightNeutralStrokeSubtleRest': '#f5f4f2ff',
  'themeLightNeutralStrokeOn brand1Rest': '{brand.light.brand-60}',
  'themeLightNeutralStrokeOn brand2Rest': '{global.light.colors.neutral.white}',
  'themeLightNeutralStrokeAccessibleRest': '{brand.light.brand-60}',
  'themeLightNeutralStrokeAccessibleHover': '{brand.light.brand-50}',
  'themeLightNeutralStrokeAccessiblePressed': '{brand.light.brand-40}',
  'themeLightNeutralStrokeAccessibleSelected': '{brand.light.brand-30}',
  'themeLightNeutralStrokeFocus1Rest': '{brand.light.brand-60}',
  'themeLightNeutralStrokeFocus2Rest': '{global.light.colors.grey.white}',
  'themeLightNeutralStrokeTransparentInteractiveRest': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralStrokeTransparentDisabledRest': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralStrokeTransparentRest': '{global.light.colors.alpha.white.0}',
  'themeLightNeutralStrokeDisabledRest': '{global.light.colors.neutral.grey-70}',
  'themeLightNeutralStrokeDisabledInvertedRest': '{global.light.colors.alpha.white.40}',
  'themeLightBrandBackground1Rest': '{brand.light.brand-60}',
  'themeLightBrandBackground1Hover': '{brand.light.brand-50}',
  'themeLightBrandBackground1Pressed': '{brand.light.brand-40}',
  'themeLightBrandBackground1Selected': '{brand.light.brand-30}',
  'themeLightBrandBackground2Rest': '{brand.light.brand-10}',
  'themeLightBrandBackground2Hover': '{brand.light.brand-110}',
  'themeLightBrandBackground2Pressed': '{brand.light.brand-100}',
  'themeLightBrandBackground3Rest': '{brand.light.brand-120}',
  'themeLightBrandBackgroundInvertedRest': '{global.light.colors.neutral.white}',
  'themeLightBrandBackgroundInvertedHover': '{brand.light.brand-120}',
  'themeLightBrandBackgroundInvertedPressed': '{brand.light.brand-130}',
  'themeLightBrandBackgroundInvertedSelected': '{brand.light.brand-100}',
  'themeLightBrandBackgroundStaticRest': '{brand.light.brand-60}',
  'themeLightBrandBackgroundCompoundRest': '{brand.light.brand-60}',
  'themeLightBrandBackgroundCompoundHover': '{brand.light.brand-50}',
  'themeLightBrandBackgroundCompoundPressed': '{brand.light.brand-40}',
  'themeLightBrandForeground1Rest': '{brand.light.brand-60}',
  'themeLightBrandForeground1Hover': '{brand.light.brand-50}',
  'themeLightBrandForeground1Pressed': '{brand.light.brand-40}',
  'themeLightBrandForeground1Selected': '{brand.light.brand-30}',
  'themeLightBrandForeground2Rest': '{brand.light.brand-80}',
  'themeLightBrandForeground2Hover': '{brand.light.brand-60}',
  'themeLightBrandForeground2Pressed': '{brand.light.brand-30}',
  'themeLightBrandForegroundLinkRest': '{brand.light.brand-60}',
  'themeLightBrandForegroundLinkHover': '{brand.light.brand-50}',
  'themeLightBrandForegroundLinkPressed': '{brand.light.brand-40}',
  'themeLightBrandForegroundLinkSelected': '{brand.light.brand-30}',
  'themeLightBrandForegroundInvertedRest': '{brand.light.brand-100}',
  'themeLightBrandForegroundInvertedHover': '{brand.light.brand-110}',
  'themeLightBrandForegroundInvertedPressed': '{brand.light.brand-100}',
  'themeLightBrandForegroundOn lightRest': '{brand.light.brand-80}',
  'themeLightBrandForegroundOn lightHover': '{brand.light.brand-70}',
  'themeLightBrandForegroundOn lightPressed': '{brand.light.brand-50}',
  'themeLightBrandForegroundOn lightSelected': '{brand.light.brand-60}',
  'themeLightBrandForegroundCompoundRest': '{brand.light.brand-60}',
  'themeLightBrandForegroundCompoundHover': '{brand.light.brand-50}',
  'themeLightBrandForegroundCompoundPressed': '{brand.light.brand-40}',
  'themeLightBrandStroke1Rest': '{brand.light.brand-60}',
  'themeLightBrandStroke1Hover': '{brand.light.brand-50}',
  'themeLightBrandStroke1Pressed': '{brand.light.brand-40}',
  'themeLightBrandStroke1Selected': '{brand.light.brand-30}',
  'themeLightBrandStroke2Rest': '{brand.light.brand-10}',
  'themeLightBrandStroke2ContrastRest': '{brand.light.brand-110}',
  'themeLightBrandStroke3Rest': '{brand.light.brand-90}',
  'themeLightBrandStrokeCompoundRest': '{brand.light.brand-60}',
  'themeLightBrandStrokeCompoundHover': '{brand.light.brand-50}',
  'themeLightBrandStrokeCompoundPressed': '{brand.light.brand-40}',
  'themeLightStatusDangerBackground1Rest': '{global.light.colors.shared.cranberry.tint 60}',
  'themeLightStatusDangerBackground3Rest': '{global.light.colors.shared.cranberry.primary}',
  'themeLightStatusDangerForeground1Rest': '{global.light.colors.shared.cranberry.primary}',
  'themeLightStatusDangerForeground3Rest': '{global.light.colors.neutral.white}',
  'themeLightStatusDangerStroke1Rest': '{global.light.colors.shared.cranberry.primary}',
  'themeLightStatusDangerStroke2Rest': '{global.light.colors.shared.cranberry.tint 30}',
  'themeLightStatusSuccessBackground1Rest': '{global.light.colors.shared.green.tint 60}',
  'themeLightStatusSuccessBackground3Rest': '{global.light.colors.shared.green.primary}',
  'themeLightStatusSuccessForeground1Rest': '{global.light.colors.shared.green.primary}',
  'themeLightStatusSuccessForeground3Rest': '{global.light.colors.neutral.white}',
  'themeLightStatusSuccessStroke1Rest': '{global.light.colors.shared.green.primary}',
  'themeLightStatusSuccessStroke2Rest': '{global.light.colors.shared.green.tint 30}',
  'themeLightStatusWarningBackground1Rest': '{global.light.colors.shared.orange.tint 60}',
  'themeLightStatusWarningBackground3Rest': '{global.light.colors.shared.orange.primary}',
  'themeLightStatusWarningForeground1Rest': '{global.light.colors.shared.orange.primary}',
  'themeLightStatusWarningForeground3Rest': '{global.light.colors.neutral.white}',
  'themeLightStatusWarningStroke1Rest': '{global.light.colors.shared.orange.primary}',
  'themeLightStatusWarningStroke2Rest': '{global.light.colors.shared.orange.tint 30}',
  'themeLightStatusOofForeground3Rest': '{global.light.colors.shared.berry.primary}',
  'themeLightStatusAwayBackground3Rest': '{global.light.colors.shared.marigold.primary}',
  'themeLightStatusAvailableForeground3Rest': '{global.light.colors.shared.light green.primary}',
  'themeLightStatusGenericAnchorBackground2Rest': '{global.light.colors.shared.anchor.tint 40}',
  'themeLightStatusGenericAnchorForeground2Rest': '{global.light.colors.shared.anchor.shade 30}',
  'themeLightStatusGenericAnchorStrokeActiveRest': '{global.light.colors.shared.anchor.primary}',
  'themeLightStatusGenericInformationBackground1Rest': '{global.light.colors.shared.information.tint 60}',
  'themeLightStatusGenericInformationBackground1Hover': '{global.light.colors.shared.information.tint 50}',
  'themeLightStatusGenericInformationBackground1Pressed': '{global.light.colors.shared.information.tint 40}',
  'themeLightStatusGenericInformationStroke1Rest': '{global.light.colors.shared.information.primary}',
  'themeLightStatusGenericInformationStroke2Rest': '{global.light.colors.shared.information.tint 30}',
  'themeLightStatusGenericInformationStroke2Hover': '{global.light.colors.shared.information.tint 20}',
  'themeLightStatusGenericInformationStroke2Pressed': '{global.light.colors.shared.information.tint 10}',
  'themeLightStatusGenericInformationForegroundRest': '{global.light.colors.shared.information.primary}',
  'themeLightStatusGenericInformationForegroundHover': '{global.light.colors.shared.information.shade 10}',
  'themeLightStatusGenericInformationForegroundPressed': '{global.light.colors.shared.information.shade 20}',
  'themeLightStatusSevereBackground1Rest': '{global.light.colors.shared.dark orange.tint 60}',
  'themeLightStatusSevereBackground3Rest': '{global.light.colors.shared.dark orange.primary}',
  'themeLightStatusSevereForeground1Rest': '{global.light.colors.shared.dark orange.primary}',
  'themeLightStatusSevereForeground3Rest': '{global.light.colors.neutral.white}',
  'themeLightStatusSevereStroke1Rest': '{global.light.colors.shared.dark orange.primary}',
  'themeLightStatusSevereStroke2Rest': '{global.light.colors.shared.dark orange.tint 30}',
  'themeLightShadowAmbient': '#0000001f',
  'themeLightShadowAmbient-lighter': '#0000000f',
  'themeLightShadowAmbient-darker': '#00000033',
  'themeLightShadowBrand-ambient': '#00000040',
  'themeLightShadowKey': '#00000024',
  'themeLightShadowKey-lighter': '#00000012',
  'themeLightShadowKey-darker': '#0000003d',
  'themeLightShadowBrand-key': '#0000004d',
  'themeLightControl logicTheme switch': 'Light',
  'themeLightData vizForegroundLabelsCategorical': '{global.light.colors.brand.brand-10}',
  'themeLightData vizForegroundLabelsData': '{global.light.colors.neutral.grey-12}',
  'themeLightData vizForegroundLabelsColorBlue': '{global.light.colors.data viz.core.blue}',
  'themeLightData vizForegroundLabelsColorGray': '{global.light.colors.data viz.core.gray}',
  'themeLightData vizForegroundLabelsColorRed': '{global.light.colors.data viz.core.red}',
  'themeLightData vizForegroundLabelsColorTeal': '{global.light.colors.data viz.core.teal}',
  'themeLightData vizForegroundLabelsColorOcean': '{global.light.colors.data viz.core.ocean}',
  'themeLightData vizForegroundLabelsColorGreen': '{global.light.colors.data viz.core.green}',
  'themeLightData vizForegroundLabelsColorYellow300': '{global.light.colors.data viz.sequential.yellow300}',
  'themeLightData vizForegroundLabelsColorBlue400': '{global.light.colors.data viz.sequential.blue400}',
  'themeLightData vizForegroundLabelsColorGray400': '{global.light.colors.data viz.sequential.gray400}',
  'themeLightData vizForegroundLabelsColorRed400': '{global.light.colors.data viz.sequential.red400}',
  'themeLightData vizForegroundLabelsColorTeal300': '{global.light.colors.data viz.sequential.teal300}',
  'themeLightData vizForegroundLabelsColorRed300': '{global.light.colors.data viz.sequential.red300}',
  'themeLightData vizForegroundLabelsColorTeal400': '{global.light.colors.data viz.sequential.teal400}',
  'themeLightData vizForegroundLabelsColorOcean400': '{global.light.colors.data viz.sequential.ocean400}',
  'themeLightData vizForegroundLabelsColorGreen400': '{global.light.colors.data viz.sequential.green400}',
  'themeLightData vizForegroundLabelsColorYellow400': '{global.light.colors.data viz.sequential.yellow400}',
  'themeLightData vizForegroundLabelsColorGreen300': '{global.light.colors.data viz.sequential.green300}',
  'themeLightData vizForegroundLabelsColorGray300': '{global.light.colors.data viz.sequential.gray300}',
  'themeLightData vizForegroundLabelsColorBlue200': '{global.light.colors.data viz.sequential.blue200}',
  'themeLightData vizForegroundLabelsColorOcean200': '{global.light.colors.data viz.sequential.ocean200}',
  'themeLightData vizForegroundAccessibilityText dark bkgd': '{global.light.colors.neutral.white}',
  'themeLightData vizForegroundAccessibilityText light bkgd': '{global.light.colors.neutral.black}',
  'themeLightData vizForegroundKpi cardText dark bkgd': '{global.light.colors.neutral.white}',
  'themeLightData vizForegroundKpi cardText light bkgd': '{global.light.colors.neutral.grey-40}',
  'themeLightData vizStrokeGridline': '{global.light.colors.neutral.grey-70}',
  'themeLightData vizStrokeAxis-target-benchmark': '{global.light.colors.neutral.black}',
  'themeLightData vizStrokeColorBlue': '{global.light.colors.data viz.core.blue}',
  'themeLightData vizStrokeColorBlue400': '{global.light.colors.data viz.sequential.blue400}',
  'themeLightData vizStrokeColorGray': '{global.light.colors.data viz.core.gray}',
  'themeLightData vizStrokeColorGray400': '{global.light.colors.data viz.sequential.gray400}',
  'themeLightData vizStrokeColorRed': '{global.light.colors.data viz.core.red}',
  'themeLightData vizStrokeColorRed300': '{global.light.colors.data viz.sequential.red300}',
  'themeLightData vizStrokeColorRed400': '{global.light.colors.data viz.sequential.red400}',
  'themeLightData vizStrokeColorTeal': '{global.light.colors.data viz.core.teal}',
  'themeLightData vizStrokeColorTeal300': '{global.light.colors.data viz.sequential.teal300}',
  'themeLightData vizStrokeColorTeal400': '{global.light.colors.data viz.sequential.teal400}',
  'themeLightData vizStrokeColorOcean': '{global.light.colors.data viz.core.ocean}',
  'themeLightData vizStrokeColorOcean400': '{global.light.colors.data viz.sequential.ocean400}',
  'themeLightData vizStrokeColorGreen': '{global.light.colors.data viz.core.green}',
  'themeLightData vizStrokeColorGreen300': '{global.light.colors.data viz.sequential.green300}',
  'themeLightData vizStrokeColorGreen400': '{global.light.colors.data viz.sequential.green400}',
  'themeLightData vizStrokeColorYellow300': '{global.light.colors.data viz.sequential.yellow300}',
  'themeLightData vizStrokeColorYellow400': '{global.light.colors.data viz.sequential.yellow400}',
  'themeLightData vizStrokeColorGray300': '{global.light.colors.data viz.sequential.gray300}',
  'themeLightData vizStrokeColorBlue200': '{global.light.colors.data viz.sequential.blue200}',
  'themeLightData vizStrokeColorOcean200': '{global.light.colors.data viz.sequential.ocean200}',
  'themeLightData vizStrokeColorYellow': '{global.light.colors.data viz.core.yellow}',
  'themeLightData vizStrokeTrend-average': '{global.light.colors.data viz.sequential.gray300}',
  'themeLightData vizStrokeAccessible outline': '{global.light.colors.neutral.white}',
  'themeLightData vizSemanticForegroundLight bkgdPositive': '{global.light.colors.data viz.core.green}',
  'themeLightData vizSemanticForegroundLight bkgdNegative': '{global.light.colors.data viz.core.red}',
  'themeLightData vizSemanticForegroundLight bkgdNotice': '{global.light.colors.data viz.core.yellow}',
  'themeLightData vizSemanticForegroundDark bkgdPositive': '#37bb65ff',
  'themeLightData vizSemanticForegroundDark bkgdNegative': '#cc2e48ff',
  'themeLightData vizSemanticForegroundDark bkgdNotice': '{global.light.colors.data viz.core.yellow}',
  'themeLightData vizSemanticStrokeLight bkgdPositive': '{global.light.colors.data viz.core.green}',
  'themeLightData vizSemanticStrokeLight bkgdNegative': '{global.light.colors.data viz.core.red}',
  'themeLightData vizSemanticStrokeLight bkgdNotice': '{global.light.colors.data viz.core.yellow}',
  'themeLightData vizSemanticStrokeDark bkgdPositive': '#37bb65ff',
  'themeLightData vizSemanticStrokeDark bkgdNegative': '#cc2e48ff',
  'themeLightData vizSemanticStrokeDark bkgdNotice': '{global.light.colors.data viz.core.yellow}',
  'themeLightData vizSemanticBackgroundPositive': '{global.light.colors.data viz.core.green}',
  'themeLightData vizSemanticBackgroundNegative': '{global.light.colors.data viz.core.red}',
  'themeLightData vizSemanticBackgroundNotice': '{global.light.colors.data viz.core.yellow}',
  'themeLightData vizBackgroundCoreBlue': '{global.light.colors.data viz.core.blue}',
  'themeLightData vizBackgroundCoreGray': '{global.light.colors.data viz.core.gray}',
  'themeLightData vizBackgroundCoreRed': '{global.light.colors.data viz.core.red}',
  'themeLightData vizBackgroundCoreTeal': '{global.light.colors.data viz.core.teal}',
  'themeLightData vizBackgroundCoreOcean': '{global.light.colors.data viz.core.ocean}',
  'themeLightData vizBackgroundCoreGreen': '{global.light.colors.data viz.core.green}',
  'themeLightData vizBackgroundCoreYellow': '{global.light.colors.data viz.core.yellow}',
  'themeLightData vizBackgroundSequentialBlue400': '{global.light.colors.data viz.sequential.blue400}',
  'themeLightData vizBackgroundSequentialGray400': '{global.light.colors.data viz.sequential.gray400}',
  'themeLightData vizBackgroundSequentialRed300': '{global.light.colors.data viz.sequential.red300}',
  'themeLightData vizBackgroundSequentialRed400': '{global.light.colors.data viz.sequential.red400}',
  'themeLightData vizBackgroundSequentialTeal300': '{global.light.colors.data viz.sequential.teal300}',
  'themeLightData vizBackgroundSequentialTeal400': '{global.light.colors.data viz.sequential.teal400}',
  'themeLightData vizBackgroundSequentialOcean400': '{global.light.colors.data viz.sequential.ocean400}',
  'themeLightData vizBackgroundSequentialGreen300': '{global.light.colors.data viz.sequential.green300}',
  'themeLightData vizBackgroundSequentialGreen400': '{global.light.colors.data viz.sequential.green400}',
  'themeLightData vizBackgroundSequentialYellow300': '{global.light.colors.data viz.sequential.yellow300}',
  'themeLightData vizBackgroundSequentialYellow400': '{global.light.colors.data viz.sequential.yellow400}',
  'themeLightData vizBackgroundSequentialBlue300': '{global.light.colors.data viz.sequential.blue300}',
  'themeLightData vizBackgroundSequentialBlue200': '{global.light.colors.data viz.sequential.blue200}',
  'themeLightData vizBackgroundSequentialBlue100': '{global.light.colors.data viz.sequential.blue100}',
  'themeLightData vizBackgroundSequentialGray300': '{global.light.colors.data viz.sequential.gray300}',
  'themeLightData vizBackgroundSequentialGray200': '{global.light.colors.data viz.sequential.gray200}',
  'themeLightData vizBackgroundSequentialGray100': '{global.light.colors.data viz.sequential.gray100}',
  'themeLightData vizBackgroundSequentialRed200': '{global.light.colors.data viz.sequential.red200}',
  'themeLightData vizBackgroundSequentialRed100': '{global.light.colors.data viz.sequential.red100}',
  'themeLightData vizBackgroundSequentialTeal200': '{global.light.colors.data viz.sequential.teal200}',
  'themeLightData vizBackgroundSequentialTeal100': '{global.light.colors.data viz.sequential.teal100}',
  'themeLightData vizBackgroundSequentialOcean300': '{global.light.colors.data viz.sequential.ocean300}',
  'themeLightData vizBackgroundSequentialOcean200': '{global.light.colors.data viz.sequential.ocean200}',
  'themeLightData vizBackgroundSequentialOcean100': '{global.light.colors.data viz.sequential.ocean100}',
  'themeLightData vizBackgroundSequentialGreen200': '{global.light.colors.data viz.sequential.green200}',
  'themeLightData vizBackgroundSequentialGreen100': '{global.light.colors.data viz.sequential.green100}',
  'themeLightData vizBackgroundSequentialYellow200': '{global.light.colors.data viz.sequential.yellow200}',
  'themeLightData vizBackgroundSequentialYellow100': '{global.light.colors.data viz.sequential.yellow100}',
  'themeLightData vizBackgroundNeutralBlack': '{global.light.colors.neutral.black}',
  'themeDarkNeutralBackground1Rest': '{global.dark.colors.neutral.black}',
  'themeDarkNeutralBackground1Hover': '{global.dark.colors.neutral.grey-10}',
  'themeDarkNeutralBackground1Pressed': '{global.dark.colors.neutral.grey-12}',
  'themeDarkNeutralBackground1Selected': '{global.dark.colors.neutral.grey-8}',
  'themeDarkNeutralBackground2Rest': '{global.dark.colors.neutral.grey-6}',
  'themeDarkNeutralBackground3Rest': '{global.dark.colors.neutral.grey-12}',
  'themeDarkNeutralBackground3Hover': '{global.dark.colors.neutral.grey-10}',
  'themeDarkNeutralBackground3Pressed': '{global.dark.colors.neutral.grey-10}',
  'themeDarkNeutralBackground4Rest': '{global.dark.colors.neutral.grey-90}',
  'themeDarkNeutralBackground4Hover': '{global.dark.colors.neutral.grey-70}',
  'themeDarkNeutralBackground4Pressed': '{global.dark.colors.neutral.grey-60}',
  'themeDarkNeutralBackground5Rest': '{global.dark.colors.neutral.grey-90}',
  'themeDarkNeutralBackground6Rest': '{global.dark.colors.neutral.grey-20}',
  'themeDarkNeutralBackgroundInvertedRest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralBackgroundInvertedDisabledRest': '{global.dark.colors.alpha.white.10}',
  'themeDarkNeutralBackgroundAlpha1Rest': '{global.dark.colors.alpha.brand-10.50}',
  'themeDarkNeutralBackgroundAlpha2Rest': '{global.dark.colors.alpha.black.70}',
  'themeDarkNeutralBackgroundStaticRest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralBackgroundSubtleRest': '{global.dark.colors.alpha.black.0}',
  'themeDarkNeutralBackgroundSubtleHover': '{global.dark.colors.neutral.grey-80}',
  'themeDarkNeutralBackgroundSubtlePressed': '{global.dark.colors.neutral.grey-70}',
  'themeDarkNeutralBackgroundSubtleSelected': '{global.dark.colors.neutral.grey-90}',
  'themeDarkNeutralBackgroundSubtleLight alphaHover': '#242424cc',
  'themeDarkNeutralBackgroundSubtleLight alphaPressed': '#24242480',
  'themeDarkNeutralBackgroundSubtleLight alphaSelected': '{global.dark.colors.alpha.black.0}',
  'themeDarkNeutralBackgroundSubtleInvertedRest': '{global.dark.colors.alpha.black.0}',
  'themeDarkNeutralBackgroundSubtleInvertedHover': '{global.dark.colors.alpha.black.10}',
  'themeDarkNeutralBackgroundSubtleInvertedPressed': '{global.dark.colors.alpha.black.30}',
  'themeDarkNeutralBackgroundSubtleInvertedSelected': '{global.dark.colors.alpha.black.20}',
  'themeDarkNeutralBackgroundTransparentRest': '{global.dark.colors.alpha.black.0}',
  'themeDarkNeutralBackgroundTransparentHover': '{global.dark.colors.alpha.black.0}',
  'themeDarkNeutralBackgroundTransparentPressed': '{global.dark.colors.alpha.black.0}',
  'themeDarkNeutralBackgroundTransparentSelected': '{global.dark.colors.alpha.black.0}',
  'themeDarkNeutralBackgroundDisabledRest': '{global.dark.colors.neutral.grey-8}',
  'themeDarkNeutralBackgroundStencil1Rest': '#575757ff',
  'themeDarkNeutralBackgroundStencil2Rest': '{global.dark.colors.neutral.grey-20}',
  'themeDarkNeutralBackgroundOverlayRest': '{global.dark.colors.alpha.black.50}',
  'themeDarkNeutralBackgroundOverlayScrollbarRest': '{global.dark.colors.alpha.white.60}',
  'themeDarkNeutralForeground1Rest primary text': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground1Hover': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground1Pressed': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground1Selected': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground2Rest secondary text': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground2Hover': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground2Pressed': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground2Selected': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground2BrandHover': '{brand.dark.brand-100}',
  'themeDarkNeutralForeground2BrandPressed': '{brand.dark.brand-90}',
  'themeDarkNeutralForeground2BrandSelected': '{brand.dark.brand-100}',
  'themeDarkNeutralForeground2BrandRest': '{brand.dark.brand-100}',
  'themeDarkNeutralForeground2LinkRest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground2LinkHover': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground2LinkPressed': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground2LinkSelected': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForeground4Rest': '{global.dark.colors.neutral.grey-60}',
  'themeDarkNeutralForegroundDisabled2Rest': '{global.dark.colors.neutral.grey-60}',
  'themeDarkNeutralForegroundDisabledRest': '{global.dark.colors.neutral.grey-50}',
  'themeDarkNeutralForegroundStaticInvertedRest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForegroundInverted1Rest': '#242424ff',
  'themeDarkNeutralForegroundInverted1Hover': '#242424ff',
  'themeDarkNeutralForegroundInverted1Pressed': '#242424ff',
  'themeDarkNeutralForegroundInverted1Selected': '#242424ff',
  'themeDarkNeutralForegroundInverted2Rest': '#242424ff',
  'themeDarkNeutralForegroundInvertedDisabledRest': '{global.dark.colors.alpha.white.40}',
  'themeDarkNeutralForegroundInvertedLinkRest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForegroundInvertedLinkHover': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForegroundInvertedLinkPressed': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForegroundInvertedLinkSelected': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralForegroundOn brandRest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralStroke1Rest': '{global.dark.colors.neutral.grey-40}',
  'themeDarkNeutralStroke1Hover': '{global.dark.colors.neutral.grey-40}',
  'themeDarkNeutralStroke1Pressed': '{global.dark.colors.neutral.grey-40}',
  'themeDarkNeutralStroke1Selected': '{global.dark.colors.neutral.grey-40}',
  'themeDarkNeutralStroke2Rest': '{global.dark.colors.grey.white}',
  'themeDarkNeutralStroke3Rest': '{global.dark.colors.neutral.grey-50}',
  'themeDarkNeutralStrokeAlpha1Rest': '{global.dark.colors.alpha.white.10}',
  'themeDarkNeutralStrokeAlpha2Rest': '{global.dark.colors.alpha.white.20}',
  'themeDarkNeutralStrokeSubtleRest': '#f5f4f2ff',
  'themeDarkNeutralStrokeOn brand1Rest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralStrokeOn brand2Rest': '{global.dark.colors.grey.white}',
  'themeDarkNeutralStrokeAccessibleRest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralStrokeAccessibleHover': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralStrokeAccessiblePressed': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralStrokeAccessibleSelected': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralStrokeFocus1Rest': '{global.dark.colors.neutral.black}',
  'themeDarkNeutralStrokeFocus2Rest': '{global.dark.colors.neutral.white}',
  'themeDarkNeutralStrokeTransparentInteractiveRest': '{global.dark.colors.alpha.white.0}',
  'themeDarkNeutralStrokeTransparentDisabledRest': '{global.dark.colors.alpha.white.0}',
  'themeDarkNeutralStrokeTransparentRest': '{global.dark.colors.alpha.white.0}',
  'themeDarkNeutralStrokeDisabledRest': '{global.dark.colors.neutral.grey-70}',
  'themeDarkNeutralStrokeDisabledInvertedRest': '{global.dark.colors.alpha.white.40}',
  'themeDarkBrandBackground1Rest': '{brand.dark.brand-60}',
  'themeDarkBrandBackground1Hover': '{brand.dark.brand-40}',
  'themeDarkBrandBackground1Pressed': '{brand.dark.brand-30}',
  'themeDarkBrandBackground1Selected': '{brand.dark.brand-20}',
  'themeDarkBrandBackground2Rest': '{brand.dark.brand-20}',
  'themeDarkBrandBackground2Hover': '{brand.dark.brand-40}',
  'themeDarkBrandBackground2Pressed': '{brand.dark.brand-10}',
  'themeDarkBrandBackground3Rest': '#ffffffff',
  'themeDarkBrandBackgroundInvertedRest': '{global.dark.colors.neutral.white}',
  'themeDarkBrandBackgroundInvertedHover': '{brand.dark.brand-120}',
  'themeDarkBrandBackgroundInvertedPressed': '{brand.dark.brand-130}',
  'themeDarkBrandBackgroundInvertedSelected': '{brand.dark.brand-100}',
  'themeDarkBrandBackgroundStaticRest': '{brand.dark.brand-80}',
  'themeDarkBrandBackgroundCompoundRest': '{brand.dark.brand-100}',
  'themeDarkBrandBackgroundCompoundHover': '{brand.dark.brand-110}',
  'themeDarkBrandBackgroundCompoundPressed': '{brand.dark.brand-90}',
  'themeDarkBrandForeground1Rest': '{brand.dark.brand-100}',
  'themeDarkBrandForeground1Hover': '{brand.dark.brand-100}',
  'themeDarkBrandForeground1Pressed': '{brand.dark.brand-100}',
  'themeDarkBrandForeground1Selected': '{brand.dark.brand-100}',
  'themeDarkBrandForeground2Rest': '{brand.dark.brand-110}',
  'themeDarkBrandForeground2Hover': '{brand.dark.brand-130}',
  'themeDarkBrandForeground2Pressed': '{brand.dark.brand-100}',
  'themeDarkBrandForegroundLinkRest': '{brand.dark.brand-100}',
  'themeDarkBrandForegroundLinkHover': '{brand.dark.brand-110}',
  'themeDarkBrandForegroundLinkPressed': '{brand.dark.brand-90}',
  'themeDarkBrandForegroundLinkSelected': '{brand.dark.brand-100}',
  'themeDarkBrandForegroundInvertedRest': '{brand.dark.brand-80}',
  'themeDarkBrandForegroundInvertedHover': '{brand.dark.brand-70}',
  'themeDarkBrandForegroundInvertedPressed': '{brand.dark.brand-60}',
  'themeDarkBrandForegroundOn lightRest': '{brand.dark.brand-70}',
  'themeDarkBrandForegroundOn lightHover': '{brand.dark.brand-70}',
  'themeDarkBrandForegroundOn lightPressed': '{brand.dark.brand-50}',
  'themeDarkBrandForegroundOn lightSelected': '{brand.dark.brand-60}',
  'themeDarkBrandForegroundCompoundRest': '{brand.dark.brand-100}',
  'themeDarkBrandForegroundCompoundHover': '{brand.dark.brand-110}',
  'themeDarkBrandForegroundCompoundPressed': '{brand.dark.brand-90}',
  'themeDarkBrandStroke1Rest': '{brand.dark.brand-100}',
  'themeDarkBrandStroke1Hover': '#2886deff',
  'themeDarkBrandStroke1Pressed': '{brand.dark.brand-70}',
  'themeDarkBrandStroke1Selected': '{brand.dark.brand-70}',
  'themeDarkBrandStroke2Rest': '{brand.dark.brand-50}',
  'themeDarkBrandStroke2ContrastRest': '{brand.dark.brand-60}',
  'themeDarkBrandStroke3Rest': '#ffffffff',
  'themeDarkBrandStrokeCompoundRest': '{brand.dark.brand-100}',
  'themeDarkBrandStrokeCompoundHover': '{brand.dark.brand-110}',
  'themeDarkBrandStrokeCompoundPressed': '{brand.dark.brand-90}',
  'themeDarkStatusDangerBackground1Rest': '{global.dark.colors.neutral.white}',
  'themeDarkStatusDangerBackground3Rest': '{global.dark.colors.shared.cranberry.primary}',
  'themeDarkStatusDangerForeground1Rest': '{global.dark.colors.shared.cranberry.tint 30}',
  'themeDarkStatusDangerForeground3Rest': '{global.dark.colors.neutral.white}',
  'themeDarkStatusDangerStroke1Rest': '{global.dark.colors.shared.cranberry.primary}',
  'themeDarkStatusDangerStroke2Rest': '{global.dark.colors.shared.cranberry.tint 30}',
  'themeDarkStatusSuccessBackground1Rest': '{global.dark.colors.shared.green.tint 60}',
  'themeDarkStatusSuccessBackground3Rest': '{global.dark.colors.shared.green.primary}',
  'themeDarkStatusSuccessForeground1Rest': '{global.dark.colors.shared.green.primary}',
  'themeDarkStatusSuccessForeground3Rest': '{global.dark.colors.neutral.white}',
  'themeDarkStatusSuccessStroke1Rest': '{global.dark.colors.shared.green.primary}',
  'themeDarkStatusSuccessStroke2Rest': '{global.dark.colors.shared.green.tint 30}',
  'themeDarkStatusWarningBackground1Rest': '{global.dark.colors.shared.orange.tint 60}',
  'themeDarkStatusWarningBackground3Rest': '{global.dark.colors.shared.orange.primary}',
  'themeDarkStatusWarningForeground1Rest': '{global.dark.colors.shared.orange.primary}',
  'themeDarkStatusWarningForeground3Rest': '{global.dark.colors.neutral.white}',
  'themeDarkStatusWarningStroke1Rest': '{global.dark.colors.shared.orange.primary}',
  'themeDarkStatusWarningStroke2Rest': '{global.dark.colors.shared.orange.tint 30}',
  'themeDarkStatusOofForeground3Rest': '{global.dark.colors.shared.berry.tint 20}',
  'themeDarkStatusAwayBackground3Rest': '{global.dark.colors.shared.marigold.primary}',
  'themeDarkStatusAvailableForeground3Rest': '{global.dark.colors.shared.light green.primary}',
  'themeDarkStatusGenericAnchorBackground2Rest': '{global.dark.colors.shared.anchor.shade 30}',
  'themeDarkStatusGenericAnchorForeground2Rest': '{global.dark.colors.shared.anchor.tint 40}',
  'themeDarkStatusGenericAnchorStrokeActiveRest': '{global.dark.colors.shared.anchor.tint 30}',
  'themeDarkStatusGenericInformationBackground1Rest': '#ffffffff',
  'themeDarkStatusGenericInformationBackground1Hover': '#ffffffff',
  'themeDarkStatusGenericInformationBackground1Pressed': '#ffffffff',
  'themeDarkStatusGenericInformationStroke1Rest': '#ffffffff',
  'themeDarkStatusGenericInformationStroke2Rest': '#ffffffff',
  'themeDarkStatusGenericInformationStroke2Hover': '#ffffffff',
  'themeDarkStatusGenericInformationStroke2Pressed': '#ffffffff',
  'themeDarkStatusGenericInformationForegroundRest': '#ffffffff',
  'themeDarkStatusGenericInformationForegroundHover': '#ffffffff',
  'themeDarkStatusGenericInformationForegroundPressed': '#ffffffff',
  'themeDarkStatusSevereBackground1Rest': '{global.dark.colors.shared.dark orange.tint 60}',
  'themeDarkStatusSevereBackground3Rest': '{global.dark.colors.shared.dark orange.primary}',
  'themeDarkStatusSevereForeground1Rest': '{global.dark.colors.shared.dark orange.primary}',
  'themeDarkStatusSevereForeground3Rest': '{global.dark.colors.neutral.white}',
  'themeDarkStatusSevereStroke1Rest': '{global.dark.colors.shared.dark orange.primary}',
  'themeDarkStatusSevereStroke2Rest': '{global.dark.colors.shared.dark orange.tint 30}',
  'themeDarkShadowAmbient': '#00000033',
  'themeDarkShadowAmbient-lighter': '#0000001f',
  'themeDarkShadowAmbient-darker': '#00000066',
  'themeDarkShadowBrand-ambient': '#00000040',
  'themeDarkShadowKey': '#00000047',
  'themeDarkShadowKey-lighter': '#00000024',
  'themeDarkShadowKey-darker': '#0000007a',
  'themeDarkShadowBrand-key': '#0000004d',
  'themeDarkControl logicTheme switch': 'Dark',
  'themeDarkData vizForegroundLabelsCategorical': '#ffffffff',
  'themeDarkData vizForegroundLabelsData': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorBlue': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorGray': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorRed': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorTeal': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorOcean': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorGreen': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorYellow300': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorBlue400': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorGray400': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorRed400': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorTeal300': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorRed300': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorTeal400': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorOcean400': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorGreen400': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorYellow400': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorGreen300': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorGray300': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorBlue200': '#ffffffff',
  'themeDarkData vizForegroundLabelsColorOcean200': '#ffffffff',
  'themeDarkData vizForegroundAccessibilityText dark bkgd': '#ffffffff',
  'themeDarkData vizForegroundAccessibilityText light bkgd': '#ffffffff',
  'themeDarkData vizForegroundKpi cardText dark bkgd': '#ffffffff',
  'themeDarkData vizForegroundKpi cardText light bkgd': '#ffffffff',
  'themeDarkData vizStrokeGridline': '#ffffffff',
  'themeDarkData vizStrokeAxis-target-benchmark': '#ffffffff',
  'themeDarkData vizStrokeColorBlue': '#ffffffff',
  'themeDarkData vizStrokeColorBlue400': '#ffffffff',
  'themeDarkData vizStrokeColorGray': '#ffffffff',
  'themeDarkData vizStrokeColorGray400': '#ffffffff',
  'themeDarkData vizStrokeColorRed': '#ffffffff',
  'themeDarkData vizStrokeColorRed300': '#ffffffff',
  'themeDarkData vizStrokeColorRed400': '#ffffffff',
  'themeDarkData vizStrokeColorTeal': '#ffffffff',
  'themeDarkData vizStrokeColorTeal300': '#ffffffff',
  'themeDarkData vizStrokeColorTeal400': '#ffffffff',
  'themeDarkData vizStrokeColorOcean': '#ffffffff',
  'themeDarkData vizStrokeColorOcean400': '#ffffffff',
  'themeDarkData vizStrokeColorGreen': '#ffffffff',
  'themeDarkData vizStrokeColorGreen300': '#ffffffff',
  'themeDarkData vizStrokeColorGreen400': '#ffffffff',
  'themeDarkData vizStrokeColorYellow300': '#ffffffff',
  'themeDarkData vizStrokeColorYellow400': '#ffffffff',
  'themeDarkData vizStrokeColorGray300': '#ffffffff',
  'themeDarkData vizStrokeColorBlue200': '#ffffffff',
  'themeDarkData vizStrokeColorOcean200': '#ffffffff',
  'themeDarkData vizStrokeColorYellow': '#ffffffff',
  'themeDarkData vizStrokeTrend-average': '#ffffffff',
  'themeDarkData vizStrokeAccessible outline': '#ffffffff',
  'themeDarkData vizSemanticForegroundLight bkgdPositive': '#ffffffff',
  'themeDarkData vizSemanticForegroundLight bkgdNegative': '#ffffffff',
  'themeDarkData vizSemanticForegroundLight bkgdNotice': '#ffffffff',
  'themeDarkData vizSemanticForegroundDark bkgdPositive': '#ffffffff',
  'themeDarkData vizSemanticForegroundDark bkgdNegative': '#ffffffff',
  'themeDarkData vizSemanticForegroundDark bkgdNotice': '#ffffffff',
  'themeDarkData vizSemanticStrokeLight bkgdPositive': '#ffffffff',
  'themeDarkData vizSemanticStrokeLight bkgdNegative': '#ffffffff',
  'themeDarkData vizSemanticStrokeLight bkgdNotice': '#ffffffff',
  'themeDarkData vizSemanticStrokeDark bkgdPositive': '#ffffffff',
  'themeDarkData vizSemanticStrokeDark bkgdNegative': '#ffffffff',
  'themeDarkData vizSemanticStrokeDark bkgdNotice': '#ffffffff',
  'themeDarkData vizSemanticBackgroundPositive': '#ffffffff',
  'themeDarkData vizSemanticBackgroundNegative': '#ffffffff',
  'themeDarkData vizSemanticBackgroundNotice': '#ffffffff',
  'themeDarkData vizBackgroundCoreBlue': '#ffffffff',
  'themeDarkData vizBackgroundCoreGray': '#ffffffff',
  'themeDarkData vizBackgroundCoreRed': '#ffffffff',
  'themeDarkData vizBackgroundCoreTeal': '#ffffffff',
  'themeDarkData vizBackgroundCoreOcean': '#ffffffff',
  'themeDarkData vizBackgroundCoreGreen': '#ffffffff',
  'themeDarkData vizBackgroundCoreYellow': '#ffffffff',
  'themeDarkData vizBackgroundSequentialBlue400': '#ffffffff',
  'themeDarkData vizBackgroundSequentialGray400': '#ffffffff',
  'themeDarkData vizBackgroundSequentialRed300': '#ffffffff',
  'themeDarkData vizBackgroundSequentialRed400': '#ffffffff',
  'themeDarkData vizBackgroundSequentialTeal300': '#ffffffff',
  'themeDarkData vizBackgroundSequentialTeal400': '#ffffffff',
  'themeDarkData vizBackgroundSequentialOcean400': '#ffffffff',
  'themeDarkData vizBackgroundSequentialGreen300': '#ffffffff',
  'themeDarkData vizBackgroundSequentialGreen400': '#ffffffff',
  'themeDarkData vizBackgroundSequentialYellow300': '#ffffffff',
  'themeDarkData vizBackgroundSequentialYellow400': '#ffffffff',
  'themeDarkData vizBackgroundSequentialBlue300': '#ffffffff',
  'themeDarkData vizBackgroundSequentialBlue200': '#ffffffff',
  'themeDarkData vizBackgroundSequentialBlue100': '#ffffffff',
  'themeDarkData vizBackgroundSequentialGray300': '#ffffffff',
  'themeDarkData vizBackgroundSequentialGray200': '#ffffffff',
  'themeDarkData vizBackgroundSequentialGray100': '#ffffffff',
  'themeDarkData vizBackgroundSequentialRed200': '#ffffffff',
  'themeDarkData vizBackgroundSequentialRed100': '#ffffffff',
  'themeDarkData vizBackgroundSequentialTeal200': '#ffffffff',
  'themeDarkData vizBackgroundSequentialTeal100': '#ffffffff',
  'themeDarkData vizBackgroundSequentialOcean300': '#ffffffff',
  'themeDarkData vizBackgroundSequentialOcean200': '#ffffffff',
  'themeDarkData vizBackgroundSequentialOcean100': '#ffffffff',
  'themeDarkData vizBackgroundSequentialGreen200': '#ffffffff',
  'themeDarkData vizBackgroundSequentialGreen100': '#ffffffff',
  'themeDarkData vizBackgroundSequentialYellow200': '#ffffffff',
  'themeDarkData vizBackgroundSequentialYellow100': '#ffffffff',
  'themeDarkData vizBackgroundNeutralBlack': '#ffffffff',
  'globalColorsNeutralBlack': '#000000ff',
  'globalColorsNeutralGrey-6': '#111111ff',
  'globalColorsNeutralGrey-8': '#2c2c2cff',
  'globalColorsNeutralGrey-10': '#3a3a3aff',
  'globalColorsNeutralGrey-12': '#595959ff',
  'globalColorsNeutralGrey-20': '#626a6aff',
  'globalColorsNeutralGrey-30': '#788383ff',
  'globalColorsNeutralGrey-40': '#959d9dff',
  'globalColorsNeutralGrey-50': '#afb6b6ff',
  'globalColorsNeutralGrey-60': '#caceceff',
  'globalColorsNeutralGrey-70': '#e4e7e7ff',
  'globalColorsNeutralGrey-80': '#f2f3f3ff',
  'globalColorsNeutralGrey-90': '#f8f8f8ff',
  'globalColorsNeutralWhite': '#ffffffff',
  'globalColorsSharedBurgundyShade 50': '#1a0607ff',
  'globalColorsSharedBurgundyShade 40': '#310b0dff',
  'globalColorsSharedBurgundyShade 30': '#5c1519ff',
  'globalColorsSharedBurgundyShade 20': '#7d1d21ff',
  'globalColorsSharedBurgundyShade 10': '#942228ff',
  'globalColorsSharedBurgundyPrimary': '#a4262cff',
  'globalColorsSharedBurgundyTint 10': '#af393eff',
  'globalColorsSharedBurgundyTint 20': '#ba4d52ff',
  'globalColorsSharedBurgundyTint 30': '#c86c70ff',
  'globalColorsSharedBurgundyTint 40': '#e4afb2ff',
  'globalColorsSharedBurgundyTint 50': '#f0d3d4ff',
  'globalColorsSharedBurgundyTint 60': '#fbf4f4ff',
  'globalColorsSharedCranberryPrimary': '#ad0000ff',
  'globalColorsSharedCranberryTint 30': '#dd9090ff',
  'globalColorsSharedCranberryTint 60': '#fcdfdfff',
  'globalColorsSharedRedShade 50': '#210809ff',
  'globalColorsSharedRedShade 40': '#3f1011ff',
  'globalColorsSharedRedShade 30': '#751d1fff',
  'globalColorsSharedRedShade 20': '#9f282bff',
  'globalColorsSharedRedShade 10': '#bc2f32ff',
  'globalColorsSharedRedPrimary': '#d13438ff',
  'globalColorsSharedRedTint 10': '#d7494cff',
  'globalColorsSharedRedTint 20': '#dc5e62ff',
  'globalColorsSharedRedTint 30': '#e37d80ff',
  'globalColorsSharedRedTint 40': '#f1bbbcff',
  'globalColorsSharedRedTint 50': '#f8dadbff',
  'globalColorsSharedRedTint 60': '#fdf6f6ff',
  'globalColorsSharedDark orangePrimary': '#da3b01ff',
  'globalColorsSharedDark orangeTint 30': '#f5c0acff',
  'globalColorsSharedDark orangeTint 60': '#f8e8e1ff',
  'globalColorsSharedBronzeShade 50': '#1b0a01ff',
  'globalColorsSharedBronzeShade 40': '#321303ff',
  'globalColorsSharedBronzeShade 30': '#5e2405ff',
  'globalColorsSharedBronzeShade 20': '#7f3107ff',
  'globalColorsSharedBronzeShade 10': '#963a08ff',
  'globalColorsSharedBronzePrimary': '#a74109ff',
  'globalColorsSharedBronzeTint 10': '#b2521eff',
  'globalColorsSharedBronzeTint 20': '#bc6535ff',
  'globalColorsSharedBronzeTint 30': '#ca8057ff',
  'globalColorsSharedBronzeTint 40': '#e5bba4ff',
  'globalColorsSharedBronzeTint 50': '#f1d9ccff',
  'globalColorsSharedBronzeTint 60': '#fbf5f2ff',
  'globalColorsSharedOrangePrimary': '#c9601cff',
  'globalColorsSharedOrangeTint 30': '#f0a371ff',
  'globalColorsSharedOrangeTint 60': '#fbeee6ff',
  'globalColorsSharedPeachShade 50': '#291600ff',
  'globalColorsSharedPeachShade 40': '#4d2a00ff',
  'globalColorsSharedPeachShade 30': '#8f4e00ff',
  'globalColorsSharedPeachShade 20': '#c26a00ff',
  'globalColorsSharedPeachShade 10': '#e67e00ff',
  'globalColorsSharedPeachPrimary': '#ff8c00ff',
  'globalColorsSharedPeachTint 10': '#ff9a1fff',
  'globalColorsSharedPeachTint 20': '#ffa83dff',
  'globalColorsSharedPeachTint 30': '#ffba66ff',
  'globalColorsSharedPeachTint 40': '#ffddb3ff',
  'globalColorsSharedPeachTint 50': '#ffedd6ff',
  'globalColorsSharedPeachTint 60': '#fffaf5ff',
  'globalColorsSharedMarigoldShade 50': '#251a00ff',
  'globalColorsSharedMarigoldShade 40': '#463100ff',
  'globalColorsSharedMarigoldShade 30': '#835b00ff',
  'globalColorsSharedMarigoldShade 20': '#b27c00ff',
  'globalColorsSharedMarigoldShade 10': '#d39300ff',
  'globalColorsSharedMarigoldPrimary': '#eaa300ff',
  'globalColorsSharedMarigoldTint 10': '#edad1cff',
  'globalColorsSharedMarigoldTint 20': '#efb839ff',
  'globalColorsSharedMarigoldTint 30': '#f2c661ff',
  'globalColorsSharedMarigoldTint 40': '#f9e2aeff',
  'globalColorsSharedMarigoldTint 50': '#fcefd3ff',
  'globalColorsSharedMarigoldTint 60': '#fefbf4ff',
  'globalColorsSharedYellowShade 50': '#282400ff',
  'globalColorsSharedYellowShade 40': '#4c4400ff',
  'globalColorsSharedYellowShade 30': '#817400ff',
  'globalColorsSharedYellowShade 20': '#c0ad00ff',
  'globalColorsSharedYellowShade 10': '#e4cc00ff',
  'globalColorsSharedYellowPrimary': '#fde300ff',
  'globalColorsSharedYellowTint 10': '#fde61eff',
  'globalColorsSharedYellowTint 20': '#fdea3dff',
  'globalColorsSharedYellowTint 30': '#feee66ff',
  'globalColorsSharedYellowTint 40': '#fef7b2ff',
  'globalColorsSharedYellowTint 50': '#fffad6ff',
  'globalColorsSharedYellowTint 60': '#fffef5ff',
  'globalColorsSharedGoldShade 50': '#1f1900ff',
  'globalColorsSharedGoldShade 40': '#3a2f00ff',
  'globalColorsSharedGoldShade 30': '#6c5700ff',
  'globalColorsSharedGoldShade 20': '#937700ff',
  'globalColorsSharedGoldShade 10': '#ae8c00ff',
  'globalColorsSharedGoldPrimary': '#c19c00ff',
  'globalColorsSharedGoldTint 10': '#c8a718ff',
  'globalColorsSharedGoldTint 20': '#d0b232ff',
  'globalColorsSharedGoldTint 30': '#dac157ff',
  'globalColorsSharedGoldTint 40': '#ecdfa5ff',
  'globalColorsSharedGoldTint 50': '#f5eeceff',
  'globalColorsSharedGoldTint 60': '#fdfbf2ff',
  'globalColorsSharedBrassShade 50': '#181202ff',
  'globalColorsSharedBrassShade 40': '#2e2103ff',
  'globalColorsSharedBrassShade 30': '#553e06ff',
  'globalColorsSharedBrassShade 20': '#745408ff',
  'globalColorsSharedBrassShade 10': '#89640aff',
  'globalColorsSharedBrassPrimary': '#986f0bff',
  'globalColorsSharedBrassTint 10': '#a47d1eff',
  'globalColorsSharedBrassTint 20': '#b18c34ff',
  'globalColorsSharedBrassTint 30': '#c1a256ff',
  'globalColorsSharedBrassTint 40': '#e0cea2ff',
  'globalColorsSharedBrassTint 50': '#efe4cbff',
  'globalColorsSharedBrassTint 60': '#fbf8f2ff',
  'globalColorsSharedBrownShade 50': '#170e07ff',
  'globalColorsSharedBrownShade 40': '#2b1a0eff',
  'globalColorsSharedBrownShade 30': '#50301aff',
  'globalColorsSharedBrownShade 20': '#6c4123ff',
  'globalColorsSharedBrownShade 10': '#804d29ff',
  'globalColorsSharedBrownPrimary': '#8e562eff',
  'globalColorsSharedBrownTint 10': '#9c663fff',
  'globalColorsSharedBrownTint 20': '#a97652ff',
  'globalColorsSharedBrownTint 30': '#bb8f6fff',
  'globalColorsSharedBrownTint 40': '#ddc3b0ff',
  'globalColorsSharedBrownTint 50': '#edded3ff',
  'globalColorsSharedBrownTint 60': '#faf7f4ff',
  'globalColorsSharedDark brownShade 50': '#0c0704ff',
  'globalColorsSharedDark brownShade 40': '#170c08ff',
  'globalColorsSharedDark brownShade 30': '#2b1710ff',
  'globalColorsSharedDark brownShade 20': '#3a1f15ff',
  'globalColorsSharedDark brownShade 10': '#452519ff',
  'globalColorsSharedDark brownPrimary': '#4d291cff',
  'globalColorsSharedDark brownTint 10': '#623a2bff',
  'globalColorsSharedDark brownTint 20': '#784d3eff',
  'globalColorsSharedDark brownTint 30': '#946b5cff',
  'globalColorsSharedDark brownTint 40': '#caada3ff',
  'globalColorsSharedDark brownTint 50': '#e3d2cbff',
  'globalColorsSharedDark brownTint 60': '#f8f3f2ff',
  'globalColorsSharedLimeShade 50': '#121b06ff',
  'globalColorsSharedLimeShade 40': '#23330bff',
  'globalColorsSharedLimeShade 30': '#405f14ff',
  'globalColorsSharedLimeShade 20': '#57811bff',
  'globalColorsSharedLimeShade 10': '#689920ff',
  'globalColorsSharedLimePrimary': '#73aa24ff',
  'globalColorsSharedLimeTint 10': '#81b437ff',
  'globalColorsSharedLimeTint 20': '#90be4cff',
  'globalColorsSharedLimeTint 30': '#a4cc6cff',
  'globalColorsSharedLimeTint 40': '#cfe5afff',
  'globalColorsSharedLimeTint 50': '#e5f1d3ff',
  'globalColorsSharedLimeTint 60': '#f8fcf4ff',
  'globalColorsSharedForestShade 50': '#0c1501ff',
  'globalColorsSharedForestShade 40': '#162702ff',
  'globalColorsSharedForestShade 30': '#294903ff',
  'globalColorsSharedForestShade 20': '#376304ff',
  'globalColorsSharedForestShade 10': '#427505ff',
  'globalColorsSharedForestPrimary': '#498205ff',
  'globalColorsSharedForestTint 10': '#599116ff',
  'globalColorsSharedForestTint 20': '#6ba02bff',
  'globalColorsSharedForestTint 30': '#85b44cff',
  'globalColorsSharedForestTint 40': '#bdd99bff',
  'globalColorsSharedForestTint 50': '#dbebc7ff',
  'globalColorsSharedForestTint 60': '#f6faf0ff',
  'globalColorsSharedSeafoamShade 50': '#002111ff',
  'globalColorsSharedSeafoamShade 40': '#003d20ff',
  'globalColorsSharedSeafoamShade 30': '#00723bff',
  'globalColorsSharedSeafoamShade 20': '#009b51ff',
  'globalColorsSharedSeafoamShade 10': '#00b85fff',
  'globalColorsSharedSeafoamPrimary': '#00cc6aff',
  'globalColorsSharedSeafoamTint 10': '#19d279ff',
  'globalColorsSharedSeafoamTint 20': '#34d889ff',
  'globalColorsSharedSeafoamTint 30': '#5ae0a0ff',
  'globalColorsSharedSeafoamTint 40': '#a8f0cdff',
  'globalColorsSharedSeafoamTint 50': '#cff7e4ff',
  'globalColorsSharedSeafoamTint 60': '#f3fdf8ff',
  'globalColorsSharedLight greenShade 50': '#031a02ff',
  'globalColorsSharedLight greenShade 40': '#063004ff',
  'globalColorsSharedLight greenShade 30': '#0b5a08ff',
  'globalColorsSharedLight greenShade 20': '#0e7a0bff',
  'globalColorsSharedLight greenShade 10': '#11910dff',
  'globalColorsSharedLight greenPrimary': '#13a10eff',
  'globalColorsSharedLight greenTint 10': '#27ac22ff',
  'globalColorsSharedLight greenTint 20': '#3db838ff',
  'globalColorsSharedLight greenTint 30': '#5ec75aff',
  'globalColorsSharedLight greenTint 40': '#a7e3a5ff',
  'globalColorsSharedLight greenTint 50': '#cef0cdff',
  'globalColorsSharedLight greenTint 60': '#f2fbf2ff',
  'globalColorsSharedGreenPrimary': '#0a7f00ff',
  'globalColorsSharedGreenTint 30': '#8dc881ff',
  'globalColorsSharedGreenTint 60': '#e2f5e0ff',
  'globalColorsSharedDark greenShade 50': '#021102ff',
  'globalColorsSharedDark greenShade 40': '#032003ff',
  'globalColorsSharedDark greenShade 30': '#063b06ff',
  'globalColorsSharedDark greenShade 20': '#085108ff',
  'globalColorsSharedDark greenShade 10': '#0a5f0aff',
  'globalColorsSharedDark greenPrimary': '#0b6a0bff',
  'globalColorsSharedDark greenTint 10': '#1a7c1aff',
  'globalColorsSharedDark greenTint 20': '#2d8e2dff',
  'globalColorsSharedDark greenTint 30': '#4da64dff',
  'globalColorsSharedDark greenTint 40': '#9ad29aff',
  'globalColorsSharedDark greenTint 50': '#c6e7c6ff',
  'globalColorsSharedDark greenTint 60': '#f0f9f0ff',
  'globalColorsSharedLight tealShade 50': '#001d1fff',
  'globalColorsSharedLight tealShade 40': '#00373aff',
  'globalColorsSharedLight tealShade 30': '#00666dff',
  'globalColorsSharedLight tealShade 20': '#008b94ff',
  'globalColorsSharedLight tealShade 10': '#00a5afff',
  'globalColorsSharedLight tealPrimary': '#00b7c3ff',
  'globalColorsSharedLight tealTint 10': '#18bfcaff',
  'globalColorsSharedLight tealTint 20': '#32c8d1ff',
  'globalColorsSharedLight tealTint 30': '#58d3dbff',
  'globalColorsSharedLight tealTint 40': '#a6e9edff',
  'globalColorsSharedLight tealTint 50': '#cef3f5ff',
  'globalColorsSharedLight tealTint 60': '#f2fcfdff',
  'globalColorsSharedTealShade 50': '#001516ff',
  'globalColorsSharedTealShade 40': '#012728ff',
  'globalColorsSharedTealShade 30': '#02494cff',
  'globalColorsSharedTealShade 20': '#026467ff',
  'globalColorsSharedTealShade 10': '#037679ff',
  'globalColorsSharedTealPrimary': '#038387ff',
  'globalColorsSharedTealTint 10': '#159195ff',
  'globalColorsSharedTealTint 20': '#2aa0a4ff',
  'globalColorsSharedTealTint 30': '#4cb4b7ff',
  'globalColorsSharedTealTint 40': '#9bd9dbff',
  'globalColorsSharedTealTint 50': '#c7ebecff',
  'globalColorsSharedTealTint 60': '#f0fafaff',
  'globalColorsSharedDark tealShade 50': '#001010ff',
  'globalColorsSharedDark tealShade 40': '#001f1fff',
  'globalColorsSharedDark tealShade 30': '#003939ff',
  'globalColorsSharedDark tealShade 20': '#004e4eff',
  'globalColorsSharedDark tealShade 10': '#005c5cff',
  'globalColorsSharedDark tealPrimary': '#006666ff',
  'globalColorsSharedDark tealTint 10': '#0e7878ff',
  'globalColorsSharedDark tealTint 20': '#218b8bff',
  'globalColorsSharedDark tealTint 30': '#41a3a3ff',
  'globalColorsSharedDark tealTint 40': '#92d1d1ff',
  'globalColorsSharedDark tealTint 50': '#c2e7e7ff',
  'globalColorsSharedDark tealTint 60': '#eff9f9ff',
  'globalColorsSharedCyanShade 50': '#00181eff',
  'globalColorsSharedCyanShade 40': '#002e38ff',
  'globalColorsSharedCyanShade 30': '#005669ff',
  'globalColorsSharedCyanShade 20': '#00748fff',
  'globalColorsSharedCyanShade 10': '#008aa9ff',
  'globalColorsSharedCyanPrimary': '#0099bcff',
  'globalColorsSharedCyanTint 10': '#18a4c4ff',
  'globalColorsSharedCyanTint 20': '#31afccff',
  'globalColorsSharedCyanTint 30': '#56bfd7ff',
  'globalColorsSharedCyanTint 40': '#a4deebff',
  'globalColorsSharedCyanTint 50': '#cdedf4ff',
  'globalColorsSharedCyanTint 60': '#f2fafcff',
  'globalColorsSharedSteelShade 50': '#000f12ff',
  'globalColorsSharedSteelShade 40': '#001b22ff',
  'globalColorsSharedSteelShade 30': '#00333fff',
  'globalColorsSharedSteelShade 20': '#004555ff',
  'globalColorsSharedSteelShade 10': '#005265ff',
  'globalColorsSharedSteelPrimary': '#005b70ff',
  'globalColorsSharedSteelTint 10': '#0f6c81ff',
  'globalColorsSharedSteelTint 20': '#237d92ff',
  'globalColorsSharedSteelTint 30': '#4496a9ff',
  'globalColorsSharedSteelTint 40': '#94c8d4ff',
  'globalColorsSharedSteelTint 50': '#c3e1e8ff',
  'globalColorsSharedSteelTint 60': '#eff7f9ff',
  'globalColorsSharedLight blueShade 50': '#091823ff',
  'globalColorsSharedLight blueShade 40': '#112d42ff',
  'globalColorsSharedLight blueShade 30': '#20547cff',
  'globalColorsSharedLight blueShade 20': '#2c72a8ff',
  'globalColorsSharedLight blueShade 10': '#3487c7ff',
  'globalColorsSharedLight bluePrimary': '#3a96ddff',
  'globalColorsSharedLight blueTint 10': '#4fa1e1ff',
  'globalColorsSharedLight blueTint 20': '#65ade5ff',
  'globalColorsSharedLight blueTint 30': '#83bdebff',
  'globalColorsSharedLight blueTint 40': '#bfddf5ff',
  'globalColorsSharedLight blueTint 50': '#dcedfaff',
  'globalColorsSharedLight blueTint 60': '#f6fafeff',
  'globalColorsSharedBlueShade 50': '#001322ff',
  'globalColorsSharedBlueShade 40': '#002440ff',
  'globalColorsSharedBlueShade 30': '#004377ff',
  'globalColorsSharedBlueShade 20': '#005ba1ff',
  'globalColorsSharedBlueShade 10': '#006cbfff',
  'globalColorsSharedBluePrimary': '#0078d4ff',
  'globalColorsSharedBlueTint 10': '#1a86d9ff',
  'globalColorsSharedBlueTint 20': '#3595deff',
  'globalColorsSharedBlueTint 30': '#5caae5ff',
  'globalColorsSharedBlueTint 40': '#a9d3f2ff',
  'globalColorsSharedBlueTint 50': '#d0e7f8ff',
  'globalColorsSharedBlueTint 60': '#f3f9fdff',
  'globalColorsSharedRoyal blueShade 50': '#000c16ff',
  'globalColorsSharedRoyal blueShade 40': '#00172aff',
  'globalColorsSharedRoyal blueShade 30': '#002c4eff',
  'globalColorsSharedRoyal blueShade 20': '#003b6aff',
  'globalColorsSharedRoyal blueShade 10': '#00467eff',
  'globalColorsSharedRoyal bluePrimary': '#004e8cff',
  'globalColorsSharedRoyal blueTint 10': '#125e9aff',
  'globalColorsSharedRoyal blueTint 20': '#286fa8ff',
  'globalColorsSharedRoyal blueTint 30': '#4a89baff',
  'globalColorsSharedRoyal blueTint 40': '#9abfdcff',
  'globalColorsSharedRoyal blueTint 50': '#c7dcedff',
  'globalColorsSharedRoyal blueTint 60': '#f0f6faff',
  'globalColorsSharedDark blueShade 50': '#000910ff',
  'globalColorsSharedDark blueShade 40': '#00111fff',
  'globalColorsSharedDark blueShade 30': '#002039ff',
  'globalColorsSharedDark blueShade 20': '#002b4eff',
  'globalColorsSharedDark blueShade 10': '#00335cff',
  'globalColorsSharedDark bluePrimary': '#003966ff',
  'globalColorsSharedDark blueTint 10': '#0e4a78ff',
  'globalColorsSharedDark blueTint 20': '#215c8bff',
  'globalColorsSharedDark blueTint 30': '#4178a3ff',
  'globalColorsSharedDark blueTint 40': '#92b5d1ff',
  'globalColorsSharedDark blueTint 50': '#c2d6e7ff',
  'globalColorsSharedDark blueTint 60': '#eff4f9ff',
  'globalColorsSharedCornflowerShade 50': '#0d1126ff',
  'globalColorsSharedCornflowerShade 40': '#182047ff',
  'globalColorsSharedCornflowerShade 30': '#2c3c85ff',
  'globalColorsSharedCornflowerShade 20': '#3c51b4ff',
  'globalColorsSharedCornflowerShade 10': '#4760d5ff',
  'globalColorsSharedCornflowerPrimary': '#4f6bedff',
  'globalColorsSharedCornflowerTint 10': '#637cefff',
  'globalColorsSharedCornflowerTint 20': '#778df1ff',
  'globalColorsSharedCornflowerTint 30': '#93a4f4ff',
  'globalColorsSharedCornflowerTint 40': '#c8d1faff',
  'globalColorsSharedCornflowerTint 50': '#e1e6fcff',
  'globalColorsSharedCornflowerTint 60': '#f7f9feff',
  'globalColorsSharedNavyShade 50': '#00061dff',
  'globalColorsSharedNavyShade 40': '#000c36ff',
  'globalColorsSharedNavyShade 30': '#001665ff',
  'globalColorsSharedNavyShade 20': '#001e89ff',
  'globalColorsSharedNavyShade 10': '#0023a2ff',
  'globalColorsSharedNavyPrimary': '#0027b4ff',
  'globalColorsSharedNavyTint 10': '#173bbdff',
  'globalColorsSharedNavyTint 20': '#3050c6ff',
  'globalColorsSharedNavyTint 30': '#546fd2ff',
  'globalColorsSharedNavyTint 40': '#a3b2e8ff',
  'globalColorsSharedNavyTint 50': '#ccd5f3ff',
  'globalColorsSharedNavyTint 60': '#f2f4fcff',
  'globalColorsSharedLavenderShade 50': '#120f25ff',
  'globalColorsSharedLavenderShade 40': '#221d46ff',
  'globalColorsSharedLavenderShade 30': '#3f3682ff',
  'globalColorsSharedLavenderShade 20': '#5649b0ff',
  'globalColorsSharedLavenderShade 10': '#6656d1ff',
  'globalColorsSharedLavenderPrimary': '#7160e8ff',
  'globalColorsSharedLavenderTint 10': '#8172ebff',
  'globalColorsSharedLavenderTint 20': '#9184eeff',
  'globalColorsSharedLavenderTint 30': '#a79cf1ff',
  'globalColorsSharedLavenderTint 40': '#d2ccf8ff',
  'globalColorsSharedLavenderTint 50': '#e7e4fbff',
  'globalColorsSharedLavenderTint 60': '#f9f8feff',
  'globalColorsSharedPurpleShade 50': '#0f0717ff',
  'globalColorsSharedPurpleShade 40': '#1c0e2bff',
  'globalColorsSharedPurpleShade 30': '#341a51ff',
  'globalColorsSharedPurpleShade 20': '#46236eff',
  'globalColorsSharedPurpleShade 10': '#532982ff',
  'globalColorsSharedPurplePrimary': '#5c2e91ff',
  'globalColorsSharedPurpleTint 10': '#6b3f9eff',
  'globalColorsSharedPurpleTint 20': '#7c52abff',
  'globalColorsSharedPurpleTint 30': '#9470bdff',
  'globalColorsSharedPurpleTint 40': '#c6b1deff',
  'globalColorsSharedPurpleTint 50': '#e0d3edff',
  'globalColorsSharedPurpleTint 60': '#f7f4fbff',
  'globalColorsSharedDark purpleShade 50': '#0a0411ff',
  'globalColorsSharedDark purpleShade 40': '#130820ff',
  'globalColorsSharedDark purpleShade 30': '#240f3cff',
  'globalColorsSharedDark purpleShade 20': '#311552ff',
  'globalColorsSharedDark purpleShade 10': '#3a1861ff',
  'globalColorsSharedDark purplePrimary': '#401b6cff',
  'globalColorsSharedDark purpleTint 10': '#512b7eff',
  'globalColorsSharedDark purpleTint 20': '#633e8fff',
  'globalColorsSharedDark purpleTint 30': '#7e5ca7ff',
  'globalColorsSharedDark purpleTint 40': '#b9a3d3ff',
  'globalColorsSharedDark purpleTint 50': '#d8cce7ff',
  'globalColorsSharedDark purpleTint 60': '#f5f2f9ff',
  'globalColorsSharedOrchidShade 50': '#16101dff',
  'globalColorsSharedOrchidShade 40': '#281e37ff',
  'globalColorsSharedOrchidShade 30': '#4c3867ff',
  'globalColorsSharedOrchidShade 20': '#674c8cff',
  'globalColorsSharedOrchidShade 10': '#795aa6ff',
  'globalColorsSharedOrchidPrimary': '#8764b8ff',
  'globalColorsSharedOrchidTint 10': '#9373c0ff',
  'globalColorsSharedOrchidTint 20': '#a083c9ff',
  'globalColorsSharedOrchidTint 30': '#b29ad4ff',
  'globalColorsSharedOrchidTint 40': '#d7caeaff',
  'globalColorsSharedOrchidTint 50': '#e9e2f4ff',
  'globalColorsSharedOrchidTint 60': '#f9f8fcff',
  'globalColorsSharedGrapeShade 50': '#160418ff',
  'globalColorsSharedGrapeShade 40': '#29072eff',
  'globalColorsSharedGrapeShade 30': '#4c0d55ff',
  'globalColorsSharedGrapeShade 20': '#671174ff',
  'globalColorsSharedGrapeShade 10': '#7a1589ff',
  'globalColorsSharedGrapePrimary': '#881798ff',
  'globalColorsSharedGrapeTint 10': '#952aa4ff',
  'globalColorsSharedGrapeTint 20': '#a33fb1ff',
  'globalColorsSharedGrapeTint 30': '#b55fc1ff',
  'globalColorsSharedGrapeTint 40': '#d9a7e0ff',
  'globalColorsSharedGrapeTint 50': '#eaceefff',
  'globalColorsSharedGrapeTint 60': '#faf2fbff',
  'globalColorsSharedBerryShade 50': '#1f091dff',
  'globalColorsSharedBerryShade 40': '#3a1136ff',
  'globalColorsSharedBerryShade 30': '#6d2064ff',
  'globalColorsSharedBerryShade 20': '#932b88ff',
  'globalColorsSharedBerryShade 10': '#af33a1ff',
  'globalColorsSharedBerryPrimary': '#c239b3ff',
  'globalColorsSharedBerryTint 10': '#c94cbcff',
  'globalColorsSharedBerryTint 20': '#d161c4ff',
  'globalColorsSharedBerryTint 30': '#da7ed0ff',
  'globalColorsSharedBerryTint 40': '#edbbe7ff',
  'globalColorsSharedBerryTint 50': '#f5daf2ff',
  'globalColorsSharedBerryTint 60': '#fdf5fcff',
  'globalColorsSharedLilacShade 50': '#1c0b1fff',
  'globalColorsSharedLilacShade 40': '#35153aff',
  'globalColorsSharedLilacShade 30': '#63276dff',
  'globalColorsSharedLilacShade 20': '#863593ff',
  'globalColorsSharedLilacShade 10': '#9f3fafff',
  'globalColorsSharedLilacPrimary': '#b146c2ff',
  'globalColorsSharedLilacTint 10': '#ba58c9ff',
  'globalColorsSharedLilacTint 20': '#c36bd1ff',
  'globalColorsSharedLilacTint 30': '#cf87daff',
  'globalColorsSharedLilacTint 40': '#e6bfedff',
  'globalColorsSharedLilacTint 50': '#f2dcf5ff',
  'globalColorsSharedLilacTint 60': '#fcf6fdff',
  'globalColorsSharedPinkShade 50': '#24091bff',
  'globalColorsSharedPinkShade 40': '#441232ff',
  'globalColorsSharedPinkShade 30': '#80215dff',
  'globalColorsSharedPinkShade 20': '#ad2d7eff',
  'globalColorsSharedPinkShade 10': '#cd3595ff',
  'globalColorsSharedPinkPrimary': '#e43ba6ff',
  'globalColorsSharedPinkTint 10': '#e750b0ff',
  'globalColorsSharedPinkTint 20': '#ea66baff',
  'globalColorsSharedPinkTint 30': '#ef85c8ff',
  'globalColorsSharedPinkTint 40': '#f7c0e3ff',
  'globalColorsSharedPinkTint 50': '#fbddf0ff',
  'globalColorsSharedPinkTint 60': '#fef6fbff',
  'globalColorsSharedHot pinkShade 50': '#240016ff',
  'globalColorsSharedHot pinkShade 40': '#44002aff',
  'globalColorsSharedHot pinkShade 30': '#7f004eff',
  'globalColorsSharedHot pinkShade 20': '#ad006aff',
  'globalColorsSharedHot pinkShade 10': '#cc007eff',
  'globalColorsSharedHot pinkPrimary': '#e3008cff',
  'globalColorsSharedHot pinkTint 10': '#e61c99ff',
  'globalColorsSharedHot pinkTint 20': '#ea38a6ff',
  'globalColorsSharedHot pinkTint 30': '#ee5fb7ff',
  'globalColorsSharedHot pinkTint 40': '#f7addaff',
  'globalColorsSharedHot pinkTint 50': '#fbd2ebff',
  'globalColorsSharedHot pinkTint 60': '#fef4faff',
  'globalColorsSharedMagentaShade 50': '#1f0013ff',
  'globalColorsSharedMagentaShade 40': '#390024ff',
  'globalColorsSharedMagentaShade 30': '#6b0043ff',
  'globalColorsSharedMagentaShade 20': '#91005aff',
  'globalColorsSharedMagentaShade 10': '#ac006bff',
  'globalColorsSharedMagentaPrimary': '#bf0077ff',
  'globalColorsSharedMagentaTint 10': '#c71885ff',
  'globalColorsSharedMagentaTint 20': '#ce3293ff',
  'globalColorsSharedMagentaTint 30': '#d957a8ff',
  'globalColorsSharedMagentaTint 40': '#eca5d1ff',
  'globalColorsSharedMagentaTint 50': '#f5cee6ff',
  'globalColorsSharedMagentaTint 60': '#fcf2f9ff',
  'globalColorsSharedPlumShade 50': '#13000cff',
  'globalColorsSharedPlumShade 40': '#240017ff',
  'globalColorsSharedPlumShade 30': '#43002bff',
  'globalColorsSharedPlumShade 20': '#5a003bff',
  'globalColorsSharedPlumShade 10': '#6b0045ff',
  'globalColorsSharedPlumPrimary': '#77004dff',
  'globalColorsSharedPlumTint 10': '#87105dff',
  'globalColorsSharedPlumTint 20': '#98246fff',
  'globalColorsSharedPlumTint 30': '#ad4589ff',
  'globalColorsSharedPlumTint 40': '#d696c0ff',
  'globalColorsSharedPlumTint 50': '#e9c4dcff',
  'globalColorsSharedPlumTint 60': '#faf0f6ff',
  'globalColorsSharedBeigeShade 50': '#141313ff',
  'globalColorsSharedBeigeShade 40': '#252323ff',
  'globalColorsSharedBeigeShade 30': '#444241ff',
  'globalColorsSharedBeigeShade 20': '#5d5958ff',
  'globalColorsSharedBeigeShade 10': '#6e6968ff',
  'globalColorsSharedBeigePrimary': '#7a7574ff',
  'globalColorsSharedBeigeTint 10': '#8a8584ff',
  'globalColorsSharedBeigeTint 20': '#9a9594ff',
  'globalColorsSharedBeigeTint 30': '#afabaaff',
  'globalColorsSharedBeigeTint 40': '#d7d4d4ff',
  'globalColorsSharedBeigeTint 50': '#eae8e8ff',
  'globalColorsSharedBeigeTint 60': '#faf9f9ff',
  'globalColorsSharedMinkShade 50': '#0f0e0eff',
  'globalColorsSharedMinkShade 40': '#1c1b1aff',
  'globalColorsSharedMinkShade 30': '#343231ff',
  'globalColorsSharedMinkShade 20': '#474443ff',
  'globalColorsSharedMinkShade 10': '#54514fff',
  'globalColorsSharedMinkPrimary': '#5d5a58ff',
  'globalColorsSharedMinkTint 10': '#706d6bff',
  'globalColorsSharedMinkTint 20': '#84817eff',
  'globalColorsSharedMinkTint 30': '#9e9b99ff',
  'globalColorsSharedMinkTint 40': '#cecccbff',
  'globalColorsSharedMinkTint 50': '#e5e4e3ff',
  'globalColorsSharedMinkTint 60': '#f8f8f8ff',
  'globalColorsSharedSilverShade 50': '#151818ff',
  'globalColorsSharedSilverShade 40': '#282d2eff',
  'globalColorsSharedSilverShade 30': '#4a5356ff',
  'globalColorsSharedSilverShade 20': '#657174ff',
  'globalColorsSharedSilverShade 10': '#78868aff',
  'globalColorsSharedSilverPrimary': '#859599ff',
  'globalColorsSharedSilverTint 10': '#92a1a5ff',
  'globalColorsSharedSilverTint 20': '#a0aeb1ff',
  'globalColorsSharedSilverTint 30': '#b3bfc2ff',
  'globalColorsSharedSilverTint 40': '#d8dfe0ff',
  'globalColorsSharedSilverTint 50': '#eaeeefff',
  'globalColorsSharedSilverTint 60': '#fafbfbff',
  'globalColorsSharedPlatinumShade 50': '#111314ff',
  'globalColorsSharedPlatinumShade 40': '#1f2426ff',
  'globalColorsSharedPlatinumShade 30': '#3b4447ff',
  'globalColorsSharedPlatinumShade 20': '#505c60ff',
  'globalColorsSharedPlatinumShade 10': '#5f6d71ff',
  'globalColorsSharedPlatinumPrimary': '#69797eff',
  'globalColorsSharedPlatinumTint 10': '#79898dff',
  'globalColorsSharedPlatinumTint 20': '#89989dff',
  'globalColorsSharedPlatinumTint 30': '#a0adb2ff',
  'globalColorsSharedPlatinumTint 40': '#cdd6d8ff',
  'globalColorsSharedPlatinumTint 50': '#e4e9eaff',
  'globalColorsSharedPlatinumTint 60': '#f8f9faff',
  'globalColorsSharedAnchorShade 50': '#090a0bff',
  'globalColorsSharedAnchorShade 40': '#111315ff',
  'globalColorsSharedAnchorShade 30': '#202427ff',
  'globalColorsSharedAnchorShade 20': '#2b3135ff',
  'globalColorsSharedAnchorShade 10': '#333a3fff',
  'globalColorsSharedAnchorPrimary': '#394146ff',
  'globalColorsSharedAnchorTint 10': '#4d565cff',
  'globalColorsSharedAnchorTint 20': '#626c72ff',
  'globalColorsSharedAnchorTint 30': '#808a90ff',
  'globalColorsSharedAnchorTint 40': '#bcc3c7ff',
  'globalColorsSharedAnchorTint 50': '#dbdfe1ff',
  'globalColorsSharedAnchorTint 60': '#f6f7f8ff',
  'globalColorsSharedCharcoalShade 50': '#090909ff',
  'globalColorsSharedCharcoalShade 40': '#111111ff',
  'globalColorsSharedCharcoalShade 30': '#202020ff',
  'globalColorsSharedCharcoalShade 20': '#2b2b2bff',
  'globalColorsSharedCharcoalShade 10': '#333333ff',
  'globalColorsSharedCharcoalPrimary': '#393939ff',
  'globalColorsSharedCharcoalTint 10': '#515151ff',
  'globalColorsSharedCharcoalTint 20': '#686868ff',
  'globalColorsSharedCharcoalTint 30': '#888888ff',
  'globalColorsSharedCharcoalTint 40': '#c4c4c4ff',
  'globalColorsSharedCharcoalTint 50': '#dfdfdfff',
  'globalColorsSharedCharcoalTint 60': '#f7f7f7ff',
  'globalColorsSharedInformationPrimary': '#007e73ff',
  'globalColorsSharedInformationTint 30': '#8ad0caff',
  'globalColorsSharedInformationTint 60': '#e8f8f7ff',
  'globalColorsSharedInformationTint 40': '#abe6e1ff',
  'globalColorsSharedInformationTint 50': '#caedeaff',
  'globalColorsSharedInformationTint 20': '#59b9b1ff',
  'globalColorsSharedInformationTint 10': '#029b8dff',
  'globalColorsSharedInformationShade 10': '#00554eff',
  'globalColorsSharedInformationShade 20': '#003e39ff',
  'globalColorsAlphaWhite0': '#ffffff00',
  'globalColorsAlphaWhite5': '#ffffff0d',
  'globalColorsAlphaWhite10': '#ffffff1a',
  'globalColorsAlphaWhite20': '#ffffff33',
  'globalColorsAlphaWhite30': '#ffffff4d',
  'globalColorsAlphaWhite40': '#ffffff66',
  'globalColorsAlphaWhite50': '#ffffff80',
  'globalColorsAlphaWhite60': '#ffffff99',
  'globalColorsAlphaWhite70': '#ffffffb3',
  'globalColorsAlphaWhite80': '#ffffffcc',
  'globalColorsAlphaWhite90': '#ffffffe6',
  'globalColorsAlphaBlack0': '#00000000',
  'globalColorsAlphaBlack5': '#0000000d',
  'globalColorsAlphaBlack10': '#0000001a',
  'globalColorsAlphaBlack20': '#00000033',
  'globalColorsAlphaBlack30': '#0000004d',
  'globalColorsAlphaBlack40': '#00000066',
  'globalColorsAlphaBlack50': '#00000080',
  'globalColorsAlphaBlack60': '#00000099',
  'globalColorsAlphaBlack70': '#000000b3',
  'globalColorsAlphaBlack80': '#000000cc',
  'globalColorsAlphaBlack90': '#000000e6',
  'globalColorsAlphaBrand-105': '#0f1a380d',
  'globalColorsAlphaBrand-1010': '#0f1a381a',
  'globalColorsAlphaBrand-1020': '#0f1a3833',
  'globalColorsAlphaBrand-1030': '#0f1a384d',
  'globalColorsAlphaBrand-1040': '#0f1a3866',
  'globalColorsAlphaBrand-1050': '#0f1a3880',
  'globalColorsAlphaBrand-1060': '#0f1a3899',
  'globalColorsAlphaBrand-1070': '#0f1a38b3',
  'globalColorsAlphaBrand-1080': '#0f1a38cc',
  'globalColorsAlphaBrand-1090': '#0f1a38e6',
  'globalColorsData vizCoreBlue': '{brand.value.brand-60}',
  'globalColorsData vizCoreGray': '#a2aeb5ff',
  'globalColorsData vizCoreRed': '#b94431ff',
  'globalColorsData vizCoreTeal': '#05a3b1ff',
  'globalColorsData vizCoreOcean': '#0b3873ff',
  'globalColorsData vizCoreGreen': '#529c74ff',
  'globalColorsData vizCoreYellow': '#df9f37ff',
  'globalColorsData vizSemanticLight bkgdPositive': '#529c74ff',
  'globalColorsData vizSemanticLight bkgdNotice': '#df9f37ff',
  'globalColorsData vizSemanticLight bkgdNegative': '#b94431ff',
  'globalColorsData vizSemanticDark bkgdPositive': '#37bb65ff',
  'globalColorsData vizSemanticDark bkgdNegative': '#cc2e48ff',
  'globalColorsData vizSemanticDark bkgdNotice': '#df9f37ff',
  'globalColorsData vizSequentialBlue400': '#133a77ff',
  'globalColorsData vizSequentialBlue300': '{brand.value.brand-60}',
  'globalColorsData vizSequentialBlue200': '#6f94ceff',
  'globalColorsData vizSequentialBlue100': '#9ebbe6ff',
  'globalColorsData vizSequentialGray400': '#36383aff',
  'globalColorsData vizSequentialGray300': '#646b6fff',
  'globalColorsData vizSequentialGray200': '#a2aeb5ff',
  'globalColorsData vizSequentialGray100': '#d1dbe2ff',
  'globalColorsData vizSequentialRed400': '#460f05ff',
  'globalColorsData vizSequentialRed300': '#8c2e20ff',
  'globalColorsData vizSequentialRed200': '#b94431ff',
  'globalColorsData vizSequentialRed100': '#cf8a7eff',
  'globalColorsData vizSequentialTeal400': '#063f44ff',
  'globalColorsData vizSequentialTeal300': '#136a73ff',
  'globalColorsData vizSequentialTeal200': '#05a3b1ff',
  'globalColorsData vizSequentialTeal100': '#80d0d7ff',
  'globalColorsData vizSequentialOcean400': '#071e39ff',
  'globalColorsData vizSequentialOcean300': '#0b3873ff',
  'globalColorsData vizSequentialOcean200': '#5a74cbff',
  'globalColorsData vizSequentialOcean100': '#9ab2ffff',
  'globalColorsData vizSequentialGreen400': '#08362aff',
  'globalColorsData vizSequentialGreen300': '#1d6953ff',
  'globalColorsData vizSequentialGreen200': '#529c74ff',
  'globalColorsData vizSequentialGreen100': '#87c3a9ff',
  'globalColorsData vizSequentialYellow400': '#563b10ff',
  'globalColorsData vizSequentialYellow300': '#a06a14ff',
  'globalColorsData vizSequentialYellow200': '#df9f37ff',
  'globalColorsData vizSequentialYellow100': '#ffd592ff',
  'globalColorsBrandBrand-10': '#0f1a38ff',
  'globalColorsBrandBrand-20': '#041e47ff',
  'globalColorsBrandBrand-30': '#052c69ff',
  'globalColorsBrandBrand-40': '#0c3069ff',
  'globalColorsBrandBrand-50': '#19458bff',
  'globalColorsBrandBrand-60': '#295cadff',
  'globalColorsBrandBrand-70': '#3e76cfff',
  'globalColorsBrandBrand-80': '#5692f1ff',
  'globalColorsBrandBrand-90': '#80b1ffff',
  'globalColorsBrandBrand-100': '#a5c8ffff',
  'globalColorsBrandBrand-110': '#a5c8ffff',
  'globalColorsBrandBrand-120': '#eef5ffff',
  'globalColorsBrandBrand-130': '#f5f9ffff',
  'globalBorderradiusNone': '0',
  'globalBorderradiusSmall': '2',
  'globalBorderradiusMedium': '4',
  'globalBorderradiusLarge': '6',
  'globalBorderradiusX-large': '8',
  'globalBorderradiusCircular': '9999',
  'globalSpacinghorizontalNone': '0',
  'globalSpacinghorizontalXxs': '2',
  'globalSpacinghorizontalXs': '4',
  'globalSpacinghorizontalSnudge': '6',
  'globalSpacinghorizontalS': '8',
  'globalSpacinghorizontalMnudge': '12',
  'globalSpacinghorizontalM': '16',
  'globalSpacinghorizontalL': '32',
  'globalSpacinghorizontalXl': '48',
  'globalSpacinghorizontalXxl': '52',
  'globalSpacinghorizontalXxxl': '56',
  'globalSpacinghorizontalLnudge': '24',
  'globalSpacinghorizontalXxxxl': '64',
  'globalStrokewidthNone': '0',
  'globalStrokewidthThin': '1',
  'globalStrokewidthThick': '2',
  'globalStrokewidthThicker': '4',
  'globalStrokewidthThickest': '6',
  'globalSpacingverticalNone': '0',
  'globalSpacingverticalXxs': '2',
  'globalSpacingverticalXs': '4',
  'globalSpacingverticalSnudge': '6',
  'globalSpacingverticalS': '8',
  'globalSpacingverticalMnudge': '12',
  'globalSpacingverticalM': '16',
  'globalSpacingverticalL': '32',
  'globalSpacingverticalXl': '48',
  'globalSpacingverticalXxl': '52',
  'globalSpacingverticalXxxl': '56',
  'globalSpacingverticalLnudge': '24',
  'globalSpacingverticalXxxxl': '64',
  'brandBrand-10': '#0f1a38ff',
  'brandBrand-20': '#041e47ff',
  'brandBrand-30': '#052c69ff',
  'brandBrand-40': '#0c3069ff',
  'brandBrand-50': '#19458bff',
  'brandBrand-60': '#295cadff',
  'brandBrand-70': '#3e76cfff',
  'brandBrand-80': '#5692f1ff',
  'brandBrand-90': '#80b1ffff',
  'brandBrand-100': '#a5c8ffff',
  'brandBrand-110': '#cadeffff',
  'brandBrand-120': '#eef5ffff',
  'brandBrand-130': '#f5f9ffff'
};

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

export const processedTokens = Object.entries(fluentTokens).reduce((acc, [key, value]) => {
  acc[key] = value.startsWith('#') ? convertHexToRgba(value) : value;
  
  return acc;
}, {} as Record<string, string>);
