import token from "assets/img/token.png";

const text = {
  fontFamily: "SF UI Text",
  fontStyle: "normal",
  margin: "0",
};

const title = {
  ...text,
  fontWeight: "600",
  fontSize: "48px",
  lineHeight: "50px",
  color: "#fff",
  textAlign: "center",
};

const description = {
  ...text,
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "27px",
  color: "#fff",
  textAlign: "center",
};

const saleOptionsStyles = (theme) => ({
  wrapper: {
    background: "#1e0072",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    textAlign: "left",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    margin: "-1px 0 0",
  },
  title: {
    ...title,
    padding: "96px 0 50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "38px",
      lineHeight: "57px",
      padding: "50px 0 38px",
    },
  },
  description: {
    ...description,
    margin: "0 auto",
    padding: "0 0 105px",
    maxWidth: "1092px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px 50px",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  note: {
    ...description,
    padding: "25px 0 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "16px 20px 42px",
      textAlign: "left",
    },
  },
  link: {
    color: "#FEA23E",
    "&:hover": {
      color: "#FEA23E",
    },
  },
  smartContracts: {
    ...title,
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  iconWrapper: {
    textAlign: "center",
    padding: "50px 0 0",
    maxWidth: "1902px",
  },
  contracts: {
    ...description,
    padding: "50px 0 0",
    maxWidth: "1092px",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      padding: "50px 20px 0",
    },
  },
  tokenWrapper: {
    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundImage: "url(" + token + ")",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "84px 0",
  },
  token: {
    width: "300px",
    padding: "34px 0",
    margin: "12px",
    background:
      "radial-gradient(238% 305.55% at -42.5% 176.44%, #1D6EFF 1.87%, #2B4BDF 12.32%, #2C22BA 27.46%, #2C0AA5 38.01%, #320399 47.84%, #350094 100%)",
    [theme.breakpoints.down("md")]: {
      width: "285px",
    },
  },
  tokenName: {
    ...text,
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "48px",
    letterSpacing: "-0.015em",
    color: "#fff",
  },
  tokenvalue: {
    padding: "0 34px",
    wordBreak: "break-all",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "30px",
    textAlign: "center",
    letterSpacing: "-0.015em",
    color: "#FEA23E",
    [theme.breakpoints.down("md")]: {
      fontSize: "17px",
    },
  },
});

export default saleOptionsStyles;
