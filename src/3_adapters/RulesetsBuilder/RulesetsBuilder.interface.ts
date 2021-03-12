import { IRulesetDTO } from "../../1_entities/Ruleset/Ruleset.interface";
import {
  TBorderValues,
  TFlexValues,
  TFontValues,
  TRulesetValues,
  TSizeValues,
  TSpacingValues,
} from "../../2_usecases/interfaces";

export interface IRulesetsBuilder {
  addSize: (v?: TSizeValues) => IRulesetsBuilder;
  addMargin: (v?: TSpacingValues) => IRulesetsBuilder;
  addPadding: (v?: TSpacingValues) => IRulesetsBuilder;
  addOffset: (v?: TRulesetValues) => IRulesetsBuilder;
  addFont: (v?: TFontValues) => IRulesetsBuilder;
  addBorder: (v?: TBorderValues) => IRulesetsBuilder;
  addColor: (v?: TRulesetValues) => IRulesetsBuilder;
  addFlex: (v?: TFlexValues) => IRulesetsBuilder;
  addZIndex: (v?: TRulesetValues) => IRulesetsBuilder;
  addDisplay: () => IRulesetsBuilder;
  addPosition: () => IRulesetsBuilder;
  addText: () => IRulesetsBuilder;
  addVisibility: () => IRulesetsBuilder;
  addCursor: () => IRulesetsBuilder;
  addList: () => IRulesetsBuilder;
  addOverflow: () => IRulesetsBuilder;
  addOpacity: () => IRulesetsBuilder;
  getResult: () => IRulesetDTO[];
}

export interface IRulesetsBuilderFunctions {
  addStatic: (...rulesetNames: (keyof IRulesetNamesMap<string>)[]) => void;
  addValues: (
    values: Record<string, string> | undefined,
    ...rulesetNames: (keyof IRulesetNamesMap<string>)[]
  ) => void;
}

export interface IRulesetNamesMap<T = string>
  extends TSizeRulesetNames<T>,
    TPaddingRulesetNames<T>,
    TMarginRulesetNames<T>,
    TOffsetRulesetNames<T>,
    TPositionRulesetNames<T>,
    TFontRulesetNames<T>,
    TBorderRulesetNames<T>,
    TColorRulesetNames<T>,
    TCursorRulesetNames<T>,
    TDisplayRulesetNames<T>,
    TVisibilityRulesetNames<T>,
    TextRulesetNames<T>,
    FlexRulesetNames<T>,
    TOverflowRulesetNames<T>,
    TListRulesetNames<T>,
    TOpacityRulesetNames<T>,
    ZIndexRulesetNames<T> {}

type TSizeRulesetNames<T> = {
  widthAuto: T;
  heightAuto: T;
  width: T;
  height: T;
  minWidth: T;
  minHeight: T;
  maxWidth: T;
  maxHeight: T;
};

type TPaddingRulesetNames<T> = {
  padding: T;
  paddingTop: T;
  paddingBottom: T;
  paddingVertical: T;
  paddingLeft: T;
  paddingRight: T;
  paddingHorizontal: T;
};

type TMarginRulesetNames<T> = {
  margin: T;
  marginTop: T;
  marginBottom: T;
  marginVertical: T;
  marginLeft: T;
  marginRight: T;
  marginHorizontal: T;
};

type TOffsetRulesetNames<T> = {
  top: T;
  bottom: T;
  left: T;
  right: T;
};

type TPositionRulesetNames<T> = {
  positionStatic: T;
  positionRelative: T;
  positionAbsolute: T;
  positionFixed: T;
};

type TFontRulesetNames<T> = {
  font: T;
  fontSize: T;
  fontFamily: T;
  fontWeightNormal: T;
  fontWeightBold: T;
  fontWeightBolder: T;
  fontWeightLighter: T;
  fontWeight100: T;
  fontWeight200: T;
  fontWeight300: T;
  fontWeight400: T;
  fontWeight500: T;
  fontWeight600: T;
  fontWeight700: T;
  fontWeight800: T;
  fontWeight900: T;
  fontStyleNormal: T;
  fontStyleItalic: T;
  fontStyleOblique: T;
  lineHeight: T;
};

type TBorderRulesetNames<T> = {
  border: T;
  borderLeft: T;
  borderRight: T;
  borderTop: T;
  borderBottom: T;
  borderRadius: T;
};

type TColorRulesetNames<T> = {
  color: T;
  backgroundColor: T;
};

type TCursorRulesetNames<T> = {
  cursorAuto: T;
  cursorDefault: T;
  cursorCrosshair: T;
  cursorHand: T;
  cursorHelp: T;
  cursorMove: T;
  cursorPointer: T;
  cursorText: T;
};

type TDisplayRulesetNames<T> = {
  displayNone: T;
  displayInline: T;
  displayBlock: T;
  displayInlineBlock: T;
  displayFlex: T;
  displayInlineFlex: T;
  displayTable: T;
  displayGrid: T;
  displayInlineGrid: T;
};

type TVisibilityRulesetNames<T> = {
  visibilityVisible: T;
  visibilityHidden: T;
  visibilityCollapse: T;
};

type TextRulesetNames<T> = {
  verticalAlignSuper: T;
  verticalAlignTop: T;
  verticalAlignTextTop: T;
  verticalAlignMiddle: T;
  verticalAlignBaseline: T;
  verticalAlignBottom: T;
  verticalAlignTextBottom: T;
  verticalAlignSub: T;
  textAlignLeft: T;
  textAlignCenter: T;
  textAlignRight: T;
  textAlignJustify: T;
  textAlignLastAuto: T;
  textAlignLastLeft: T;
  textAlignLastCenter: T;
  textAlignLastRight: T;
  textDecorationNone: T;
  textDecorationUnderline: T;
  textDecorationOverline: T;
  textDecorationLineThrough: T;
  textEmphasisNone: T;
  textEmphasisAccent: T;
  textEmphasisDot: T;
  textEmphasisCircle: T;
  textEmphasisDisc: T;
  textEmphasisBefore: T;
  textEmphasisAfter: T;
  textTransformNone: T;
  textTransformCapitalize: T;
  textTransformUppercase: T;
  textTransformLowercase: T;
  whiteSpaceNormal: T;
  whiteSpacePre: T;
  whiteSpaceNoWrap: T;
  whiteSpacePreWrap: T;
  whiteSpacePreLine: T;
};

type FlexRulesetNames<T> = {
  flex: T;
  flexGrow: T;
  flexShrink: T;
  flexBasisAuto: T;
  flexBasis: T;
  flexDirectionColumn: T;
  flexDirectionColumnReverse: T;
  flexDirectionRow: T;
  flexDirectionRowReverse: T;
  flexWrapNoWrap: T;
  flexWrapWrap: T;
  flexWrapWrapReverse: T;
  flexWrapUnset: T;
  justifyContentUnset: T;
  justifyContentCenter: T;
  justifyContentFlexEnd: T;
  justifyContentFlexStart: T;
  justifyContentSpaceAround: T;
  justifyContentSpaceBetween: T;
  alignContentCenter: T;
  alignContentFlexEnd: T;
  alignContentFlexStart: T;
  alignContentStretch: T;
  alignContentSpaceAround: T;
  alignContentSpaceBetween: T;
  alignItemsBaseline: T;
  alignItemsСenter: T;
  alignItemsFlexEnd: T;
  alignItemsFlexStart: T;
  alignItemsStretch: T;
  order: T;
  orderUnset: T;
};

type TOpacityRulesetNames<T> = {
  opacity0: T;
  opacity01: T;
  opacity02: T;
  opacity03: T;
  opacity04: T;
  opacity05: T;
  opacity06: T;
  opacity07: T;
  opacity08: T;
  opacity09: T;
  opacity1: T;
};

type ZIndexRulesetNames<T> = {
  zIndex: T;
  zIndexAuto: T;
};

type TOverflowRulesetNames<T> = {
  overflowVisible: T;
  overflowHidden: T;
  overflowScroll: T;
  overflowAuto: T;
  overflowXVisible: T;
  overflowXHidden: T;
  overflowXScroll: T;
  overflowXAuto: T;
  overflowYVisible: T;
  overflowYHidden: T;
  overflowYScroll: T;
  overflowYAuto: T;
};

type TListRulesetNames<T> = {
  listStyleNone: T;
  listStylePositionInside: T;
  listStylePositionOutside: T;
  listStyleTypeNone: T;
  listStyleTypeDisc: T;
  listStyleTypeCircle: T;
  listStyleTypeSquare: T;
  listStyleTypeDecimal: T;
  listStyleTypeDecimalLeadingZero: T;
  listStyleTypeLowerRoman: T;
  listStyleTypeUpperRoman: T;
  listStyleImageNone: T;
};
