import { defaultFont } from "assets/jss/nextjs-material-kit.js";

const headerLinksStyle = (theme) => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  navLink: {
    color: "#ededed",
    position: "relative",
    padding: "12px",
    fontWeight: "600",
    fontSize: "18px",
    fontFamily: "SF UI Text",
    textTransform: "none",
    borderRadius: "3px",
    lineHeight: "21px",
    letterSpacing: "-0.015em",
    textDecoration: "none",
    fontWeight: "600",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      fontWeight: "700",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        color: "#3038bd",
      },
    },
    [theme.breakpoints.down("md")]: {
      padding: "12px 10px",
      lineHeight: "20px",
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      color: "#3038BD",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px",
    },
    color: "#FFF",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px",
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px",
    },
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

export default headerLinksStyle;
