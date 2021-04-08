import { ClassnamesMap } from "./RulesetsBuilder.interface";

const RulesetsEmmetClassnamesMap: ClassnamesMap = {
  widthAuto: "w_a",
  width: "w_$0",
  minWidth: "miw_$0",
  maxWidth: "maw_$0",

  heightAuto: "h_a",
  height: "h_$0",
  minHeight: "mih_$0",
  maxHeight: "mah_$0",

  padding: "p_$0",
  paddingTop: "pt_$0",
  paddingBottom: "pb_$0",
  paddingVertical: "pver_$0",
  paddingLeft: "pl_$0",
  paddingRight: "pr_$0",
  paddingHorizontal: "phor_$0",

  margin: "m_$0",
  marginTop: "mt_$0",
  marginBottom: "mb_$0",
  marginVertical: "mver_$0",
  marginLeft: "ml_$0",
  marginRight: "mr_$0",
  marginHorizontal: "mhor_$0",

  top: "t_$0",
  bottom: "b_$0",
  left: "l_$0",
  right: "r_$0",

  zIndex: "z_$0",
  zIndexAuto: "z_a",

  font: "f_$0",
  fontSize: "fz_$0",
  fontFamily: "ff_$0",
  fontWeightNormal: "fw_n",
  fontWeightBold: "fw_b",
  fontWeightBolder: "fw_br",
  fontWeightLighter: "fw_lr",
  fontWeight100: "fw_1",
  fontWeight200: "fw_2",
  fontWeight300: "fw_3",
  fontWeight400: "fw_4",
  fontWeight500: "fw_5",
  fontWeight600: "fw_6",
  fontWeight700: "fw_7",
  fontWeight800: "fw_8",
  fontWeight900: "fw_9",
  fontStyleNormal: "fs_n",
  fontStyleItalic: "fs_i",
  fontStyleOblique: "fs_o",
  lineHeight: "lh_$0",

  border: "bd_$0",
  borderLeft: "bdl_$0",
  borderRight: "bdr_$0",
  borderTop: "bdt_$0",
  borderBottom: "bdb_$0",
  borderRadius: "bdrs_$0",

  color: "c_$0",

  positionStatic: "pos_s",
  positionRelative: "pos_r",
  positionAbsolute: "pos_a",
  positionFixed: "pos_f",

  displayNone: "d_n",
  displayInline: "d_i",
  displayBlock: "d_b",
  displayInlineBlock: "d_ib",
  displayFlex: "d_f",
  displayInlineFlex: "d_if",
  displayTable: "d_t",
  displayGrid: "d_g",
  displayInlineGrid: "d_ig",

  visibilityVisible: "v_v",
  visibilityHidden: "v_h",
  visibilityCollapse: "v_c",

  verticalAlignSuper: "va_sup",
  verticalAlignTop: "va_t",
  verticalAlignTextTop: "va_tt",
  verticalAlignMiddle: "va_m",
  verticalAlignBaseline: "va_bl",
  verticalAlignBottom: "va_b",
  verticalAlignTextBottom: "va_tb",
  verticalAlignSub: "va_sub",

  textAlignLeft: "ta_l",
  textAlignCenter: "ta_c",
  textAlignRight: "ta_r",
  textAlignJustify: "ta_j",

  textAlignLastAuto: "tal_a",
  textAlignLastLeft: "tal_l",
  textAlignLastCenter: "tal_c",
  textAlignLastRight: "tal_r",

  textDecorationNone: "td_n",
  textDecorationUnderline: "td_u",
  textDecorationOverline: "td_o",
  textDecorationLineThrough: "td_l",

  textEmphasisNone: "te_n",
  textEmphasisAccent: "te_ac",
  textEmphasisDot: "te_dt",
  textEmphasisCircle: "te_c",
  textEmphasisDisc: "te_ds",
  textEmphasisBefore: "te_b",
  textEmphasisAfter: "te_a",

  textTransformNone: "tt_n",
  textTransformCapitalize: "tt_c",
  textTransformUppercase: "tt_u",
  textTransformLowercase: "tt_l",

  whiteSpaceNormal: "whs_n",
  whiteSpacePre: "whs_p",
  whiteSpaceNoWrap: "whs_nw",
  whiteSpacePreWrap: "whs_pw",
  whiteSpacePreLine: "whs_pl",

  cursorAuto: "cur_a",
  cursorDefault: "cur_d",
  cursorCrosshair: "cur_c",
  cursorHand: "cur_ha",
  cursorHelp: "cur_he",
  cursorMove: "cur_m",
  cursorPointer: "cur_p",
  cursorText: "cur_t",

  flex: "fx_$0",
  flexGrow: "fxg_$0",
  flexShrink: "fxs_$0",
  flexBasis: "fxb_$0",
  flexBasisAuto: "fxb_a",
  order: "ord_$0",
  orderUnset: "ord_u",

  flexRow: "fxrow",
  flexRowGuttered: "fxrow_$0",
  flexCol: "fxcol_$0",

  flexDirectionColumn: "fxd_c",
  flexDirectionColumnReverse: "fxd_cr",
  flexDirectionRow: "fxd_r",
  flexDirectionRowReverse: "fxd_rr",

  flexWrapNoWrap: "fxw_n",
  flexWrapWrap: "fxw_w",
  flexWrapWrapReverse: "fxw_we",
  flexWrapUnset: "fxw_u",

  justifyContentUnset: "jc_u",
  justifyContentCenter: "jc_c",
  justifyContentFlexEnd: "jc_fe",
  justifyContentFlexStart: "jc_fs",
  justifyContentSpaceAround: "jc_sa",
  justifyContentSpaceBetween: "jc_sb",

  alignContentCenter: "ac_c",
  alignContentFlexEnd: "ac_fe",
  alignContentFlexStart: "ac_fs",
  alignContentStretch: "ac_s",
  alignContentSpaceAround: "ac_sa",
  alignContentSpaceBetween: "ac_sb",

  alignItemsBaseline: "ai_b",
  alignItemsСenter: "ai_c",
  alignItemsFlexEnd: "ai_fe",
  alignItemsFlexStart: "ai_fs",
  alignItemsStretch: "ai_s",

  background: "bg_$0",
  backgroundColor: "bgc_$0",
  backgroundPositionTop: "bgp_t",
  backgroundPositionBottom: "bgp_b",
  backgroundPositionLeft: "bgp_l",
  backgroundPositionRight: "bgp_r",
  backgroundPositionCenter: "bgp_c",

  overflowVisible: "ov_v",
  overflowHidden: "ov_h",
  overflowScroll: "ov_s",
  overflowAuto: "ov_a",
  overflowXVisible: "ovx_v",
  overflowXHidden: "ovx_h",
  overflowXScroll: "ovx_s",
  overflowXAuto: "ovx_a",
  overflowYVisible: "ovy_v",
  overflowYHidden: "ovy_h",
  overflowYScroll: "ovy_s",
  overflowYAuto: "ovy_a",

  opacity0: "op_0",
  opacity01: "op_01",
  opacity02: "op_02",
  opacity03: "op_03",
  opacity04: "op_04",
  opacity05: "op_05",
  opacity06: "op_06",
  opacity07: "op_07",
  opacity08: "op_08",
  opacity09: "op_09",
  opacity1: "op_1",

  listStyleNone: "lis_n",
  listStylePositionInside: "lisp_i",
  listStylePositionOutside: "lisp_o",
  listStyleTypeNone: "list_n",
  listStyleTypeDisc: "list_d",
  listStyleTypeCircle: "list_c",
  listStyleTypeSquare: "list_s",
  listStyleTypeDecimal: "list_dc",
  listStyleTypeDecimalLeadingZero: "list_dclz",
  listStyleTypeLowerRoman: "list_lr",
  listStyleTypeUpperRoman: "list_ur",
  listStyleImageNone: "lisi_n",
};

export default RulesetsEmmetClassnamesMap;
