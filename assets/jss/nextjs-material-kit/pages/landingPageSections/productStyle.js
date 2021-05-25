const productStyle = (theme) => ({
  description: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "32px",
    lineHeight: "42px",
    letterSpacing: "-0.015em",
    color: "#fff",
    margin: "0 auto",
    padding: "0",
    maxWidth: "1200px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      maxWidth: "1000px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      fontWeight: "normal",
    },
  },
  pageHeader: {
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "60px 0",
    border: "0",
    alignItems: "center",
    margin: "-1px 0 0",
    [theme.breakpoints.down("md")]: {
      padding: "60px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
    },
  },
  btn: {
    margin: "55px 0 0",
    padding: "16px 24px",
    width: "278px",
    height: "59px",
    border: "1px solid #FEA23E",
    boxSizing: "border-box",
    borderRadius: "6px",
    fontFamily: "SF UI Text",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "-0.015em",
    color: "#FEA23E",
    textTransform: "none",
    "&:hover": {
      background: "#FEA23E",
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "32",
    },
  },
});

export default productStyle;
