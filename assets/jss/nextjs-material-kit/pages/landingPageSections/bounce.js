import image from "assets/img/bounce.png";
import imageMobile from "assets/img/bounce-1.png";

const fungibleStyle = (theme) => ({
  wrapper: {
    height: "auto",
    display: "inherit",
    position: "relative",
    zIndex: "-1",
    margin: "0",
    padding: "72px 40px",
    border: "0",
    alignItems: "center",
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    backgroundColor: "#160055",
    backgroundPosition: "top center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "72px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
      backgroundImage: "url(" + imageMobile + ")",
    },
  },
  item: {
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  content: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  title: {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "48px",
    lineHeight: "50px",
    letterSpacing: "-0.015em",
    color: "#FEA23E",
    padding: "0",
    margin: "0",
    [theme.breakpoints.down("sm")]: {
      letterSpacing: "0",
    },
  },
  description: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "26px",
    lineHeight: "32px",
    letterSpacing: "-0.015em",
    color: "rgba(255, 255, 255, 0.8)",
    margin: "0",
    padding: "5px 0 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  descriptionToken: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "-0.015em",
    color: "rgba(255, 255, 255, 0.8)",
    margin: "0",
    padding: "0",
  },
  copy: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "-0.015em",
    color: "#FEA23E",
    margin: "0",
    padding: "0 0 0 20px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "0 0 0 10px",
    },
  },
  token: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "-0.015em",
    color: "rgba(255, 255, 255, 0.8)",
    margin: "0",
    padding: "0",
    background: "transparent",
    border: "none",
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  descriptionLink: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "-0.015em",
    // color: "#FEA23E !important",
    color: "rgba(255, 255, 255, 0.8) !important",
    margin: "0",
    padding: "0",
    "& :hover, :focus": {
      // color: "#FEA23E",
      color: "rgba(255, 255, 255, 0.8)",
    },
  },
  btn: {
    padding: "16px 52px",
    marginTop: "40px",
    background: "linear-gradient(97.41deg, #FEA23E 5.75%, #D6B402 103.93%)",
    borderRadius: "6px",
    margin: 0,
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "36px",
    color: "#fff !important",

    transition: "none",
    textTransform: "none",
    fontFamily: "SF UI Text",
    "&:hover": {
      background: "#FEA23E",
    },
    "&:focus": {
      background: "#FEA23E",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px",
    },
  },
  privateBgWrapper: {
    maxWidth: "608px",
    margin: "0 auto",
    border: "8px solid #fff",
    borderRadius: "3px",
  },
  privateBg: {
    width: "100%"
  },
  tokenWrapper: {
    border: "1px solid #FEA23E",
    width: "fit-content",
    borderRadius: "3px",
    padding: "10px 30px",
    textAlign: "center",
    margin: "30px auto 0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "10px"
    },
  },
  main: {
    paddingBottom: "300px"
  },
  privateWrapper: {
    marginTop: "-230px"
  },
  flex: {
    display: "flex",
    padding: "7px 40px 7px 0",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "7px 0",
    },
  },
});

export default fungibleStyle;
