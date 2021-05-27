import {
  container,
  hexToRGBAlpha,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
} from "assets/jss/nextjs-material-kit.js";

const headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    //color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset",
    "@media (max-width: 960px)": {
      padding: "3px 0",
    },
  },
  absolute: {
    position: "absolute",
    zIndex: "1100",
  },
  fixed: {
    position: "fixed",
    zIndex: "1100",
  },
  container: {
    ...container,
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "95%",
    },
    "@media (min-width: 1500px)": {
      maxWidth: "1460px",
    },
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent",
    },
  },
  appResponsive: {
    margin: "20px 10px",
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      primaryColor,
      0.46
    )}`,
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      infoColor,
      0.46
    )}`,
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      successColor,
      0.46
    )}`,
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      warningColor,
      0.46
    )}`,
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      dangerColor,
      0.46
    )}`,
  },
  rose: {
    backgroundColor: roseColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      roseColor,
      0.46
    )}`,
  },
  transparent: {
    background:
      "linear-gradient(180deg, #2B0C9F 0%, rgba(43, 12, 159, 0) 100%) !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF",
    "@media (max-width: 960px)": {
      paddingTop: "0",
      backgroundColor: "#281da9 !important",
    },
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)",
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    //color: "#555",
    backgroundColor: "#281da9 !important",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    "@media (max-width: 960px)": {
      padding: "0",
    },
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: "100%",
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
  },
  btn: {
    padding: "16px 24px",
    border: "1px solid #FEA23E",
    boxSizing: "border-box",
    borderRadius: "6px",
    fontFamily: "SF UI Text",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "-0.015em",
    color: "#FEA23E !important",
    margin: 0,
    "&:hover": {
      background: "#FEA23E",
      color: "#fff !important",
    },
    "@media (max-width: 960px)": {
      height: "34px",
      margin: "20px 0 0 22px",
      padding: "8px 24px",
    },
  },
  btnIcon: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "18px",
    color: " #F1F1F1",
    margin: "0px 8px",
    "@media (max-width: 960px)": {
      color: "#4F4F4F",
    },
  },
  btnLanguage: {
    margin: "0 16px 0 0",
    padding: "12px 0",
    width: "110px",
  },
  iconText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "18px",
    margin: "0px 8px",
    color: "#FEA23E",
  },
  icon: {
    width: "24px",
    height: "16px",
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "auto",
    "@media (max-width: 960px)": {
      width: "40px",
    },
  },
  flexMobile: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
  },
};

export default headerStyle;
