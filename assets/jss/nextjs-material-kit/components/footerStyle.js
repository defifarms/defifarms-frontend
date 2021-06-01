import { primaryColor } from "assets/jss/nextjs-material-kit.js";
import image from "assets/img/bnc.svg";

const footerStyle = (theme) => ({
  wrapper: {
    display: "flex",
    background: "#16035B",
    fontFamily: " SF UI Text",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#CFCFCF",
    padding: "32px 0",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 30px",
    },
  },
  wrapperImg: {
    position: "relative",
    display: "flex",
    background: "#16035B",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 0 0",
    },
  },
  listItem: {
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
  btn: {
    width: "36px",
    padding: "0",
    margin: "0 8px",
  },
  text: {
    paddingTop: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  footer: {
    background: "#1e0072",
    padding: "40px 0 30px",
    textAlign: "center",
    width: "100%",
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  container: {
    background: "#1e0072",
  },
  navLink: {
    cursor: "pointer",
    color: "inherit",
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
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#fff",
    },
    "& > span": {
      color: "#CFCFCF",
      "&:hover,&:focus": {
        color: "#fff",
        fontWeight: "700",
      },
    },

    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  logo: {
    width: "88px",
    height: "88px",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
    },
  },
  submenu: {
    position: "absolute",
    zIndex: "1",
    top: "-10px",
    color: "#CFCFCF",
    [theme.breakpoints.down("sm")]: {
      position: "inherit",
      display: "flex",
      flexWrap: "wrap",
    },
  },
  toggleIcon: {
    width: "0",
    height: "0",
    display: "inline-block",
    borderTop: "4px solid",
    transition: "all 150ms ease-in",
    borderLeft: "4px solid transparent",
    marginLeft: "4px",
    borderRight: "4px solid transparent",
    verticalAlign: "middle",
  },
  subItem: {
    [theme.breakpoints.down("sm")]: {
      width: "calc(50% - 15px)",
    },
  },
  caretActive: {
    transform: "rotate(180deg)",
  },
  icon: {
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    width: "110px",
    height: "26px",
    display: "inline-block",
    margin: "0 5px",
  },
});

export default footerStyle;
