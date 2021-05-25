import image from "assets/img/roadmap.png";
import imageMobile from "assets/img/roadmap-1.png";
import subtract from "assets/img/icons/subtract.png";

const roadmapStyles = (theme) => ({
  wrapper: {
    backgroundSize: "cover",
    backgroundPosition: "top center",
    textAlign: "left",
    backgroundImage: "url(" + image + ")",
    height: "auto",
    margin: "0",
    padding: "0 0 96px",
    border: "0",
    alignItems: "center",
    margin: "-1px 0 0",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + imageMobile + ")",
      padding: "0 57px 50px",
    },
  },
  title: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "48px",
    lineHeight: "50px",
    color: "#fea23e",
    margin: "0",
    padding: "96px 0 100px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "38px",
      lineHeight: "57px",
      padding: "50px 0",
    },
  },
  icon: {
    width: "64px !important",
    height: "auto",
  },
  roadmapTitle: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "40px",
    textTransform: "uppercase",
    color: "#fff",
    margin: "24px 0 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      lineHeight: "38px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      lineHeight: "40px",
      textAlign: "center",
    },
  },
  item: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "40px",
    color: "#fff",
  },
  flexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  roadmap: {
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  subtract: {
    width: "85px",
    height: "170px",
    display: "block",
    backgroundImage: "url(" + subtract + ")",
    margin: "0 25px 25px",
    [theme.breakpoints.down("md")]: {
      margin: "0 20px 25px",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(90deg)",
    },
  },
  subtractWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
    },
  },
  list: {
    padding: "0 0 0 18px",
    maxWidth: "261px",
    [theme.breakpoints.down("sm")]: {
      margin: "16px 0 0",
    },
  },
  iconWrapper: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
});

export default roadmapStyles;
