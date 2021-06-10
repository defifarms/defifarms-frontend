import image from "assets/img/tokenomics.png";
import imageMobile from "assets/img/tokenomics-1.png";

const tokenomicsStyles = (theme) => ({
  wrapper: {
    background: "#1e0072",
    backgroundSize: "contain",
    backgroundPosition: "top center",
    textAlign: "left",
    backgroundImage: "url(" + image + ")",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    margin: "-1px 0 0",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      padding: "88px 20px 50px",
      backgroundImage: "url(" + imageMobile + ")",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "72px",
    lineHeight: "86px",
    color: "#fff",
    margin: "0",
    padding: "177px 0 32px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "38px",
      lineHeight: "57px",
      padding: "0 0 50px",
    },
  },
  tokenWrapper: {
    background:
      "linear-gradient(140.54deg, rgba(38, 1, 117, 0.3) 7.31%, rgba(51, 34, 243, 0.3) 99.53%)",
    border: "1px solid rgba(189, 189, 189, 0.7)",
    boxSizing: "border-box",
    borderRadius: "8px",
    maxWidth: "956px",
    minHeight: "119px",
    padding: "32px 10px 25px",
    textAlign: "center",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 15px",
      height: "auto",
    },
  },
  token: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    lineHeight: "24px",
    color: "#fff",
    letterSpacing: "-0.015em",
    margin: "0",
    padding: "0 0 6px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "38px",
      lineHeight: "57px",
      padding: "0",
    },
  },
  tokenValue: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    color: "#fea23e",
    wordBreak: "break-all",
    lineHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "22px",
    },
  },
  tokenomicsItem: {
    maxWidth: "956px",
    display: "flex",
    margin: "0 auto",
    justifyContent: "space-between",
    padding: "40px 0 55px",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  trackingInfo: {
    width: "850px",
  },
  flexBox: {
    padding: "0 0 96px",
    display: "flex",
    justifyContent: "flex-end",
    maxWidth: "1300px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  tokenInfo: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    lineHeight: "42px",
    color: "#fff",
    letterSpacing: "-0.015em",
    margin: "0",
    padding: "0 0 32px",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0 24px 27px",
    },
  },
});

export default tokenomicsStyles;
