const btn = {
  padding: "16px 52px",
  borderRadius: "6px",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "27px",
  transition: "none",
  textTransform: "none",
  "&:hover": {
    background: "#FEA23E",
    color: "#fff",
  },
  "&:focus": {
    background: "#FEA23E",
    color: "#fff",
  },
};

const futureStyle = (theme) => ({
  wrapper: {
    height: "auto",
    margin: "0",
    padding: "80px 0",
    display: "flex",
    justifyContent: "flex-end",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 50px",
    },
  },
  smartChain: {
    padding: "0 40px",
    maxWidth: "1240px",
    margin: "0 auto",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      textAlign: "center",
    },
  },
  gridItem: {
    padding: "0 20px 0 0",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  title: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    lineHeight: "48px",
    letterSpacing: "-0.015em",
    margin: "0",
    padding: "0 0 32px",
    color: "rgba(255, 255, 255, 0.8)",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0 0",
    },
  },
  description: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "rgba(255, 255, 255, 0.8)",
    margin: "0",
    padding: "0",
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  btn: {
    ...btn,
    float: "left",
    background: "linear-gradient(97.41deg, #FEA23E 5.75%, #D6B402 103.93%)",
    margin: "16px 0",
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    color: "#fff !important",
    [theme.breakpoints.down("sm")]: {
      margin: "32px 0 0",
      fontSize: "small",
    },
  },
  btnContact: {
    ...btn,
    border: "1px solid #FEA23E",
    margin: "16px 0 0 16px",
    fontFamily: "Source Sans Pro",
    letterSpacing: "-0.015em",
    color: "#FEA23E",
    height: "59px",
    [theme.breakpoints.down("sm")]: {
      margin: "32px 0 0 16px",
    },
  },
  platform: {
    fontFamily: "SF UI Text",
    fontSize: "23px",
    lineHeight: " 38px",
    color: "#FEA23E",
    margin: "0",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  platformWrapper: {
    background: "#1e0072",
    padding: "72px 120px 72px 55px",
    [theme.breakpoints.down("md")]: {
      padding: "72px 55px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
      textAlign: "center",
    },
  },
});

export default futureStyle;
