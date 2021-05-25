const fungibleStyle = (theme) => ({
  wrapper: {
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "100px 0 68px",
    border: "0",
    alignItems: "center",
    background: "#1E0072",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
    },
  },
  item: {
    maxWidth: "580px",
  },
  itemLast: {
    maxWidth: "580px",
    padding: "0 0 0 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  content: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "0 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  title: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    lineHeight: "42px",
    letterSpacing: "-0.015em",
    color: "#fff",
    margin: "0 0 32px 0px",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  description: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "-0.015em",
    color: "rgba(255, 255, 255, 0.8)",
    margin: "0",
    padding: "0",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 34px",
    },
  },
  btn: {
    margin: "55px 0 0",
    padding: "16px 24px",
    width: "278px",
    height: "50px",
    border: "1px solid #FEA23E",
    boxSizing: "border-box",
    borderRadius: "6px",
    fontFamily: "SF UI Text",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "-0.015em",
    color: "#FEA23E",
  },
});

export default fungibleStyle;
