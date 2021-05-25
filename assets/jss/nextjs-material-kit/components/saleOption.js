const text = {
  fontFamily: "SF UI Text",
  fontStyle: "normal",
  margin: "0",
};

const saleOptionStyles = (theme) => ({
  roundDescriptionWrapper: {
    padding: "0 10px",
    minHeight: "110px",
  },
  options: {
    background:
      "linear-gradient(140.54deg, rgba(38, 1, 117, 0.3) 7.31%, rgba(51, 34, 243, 0.3) 99.53%)",
    border: "1px solid rgba(189, 189, 189, 0.7)",
    boxSizing: "border-box",
    borderRadius: "8px",
    width: "272px",
    padding: "0 30px",
    margin: "0 25px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      borderRadius: "0",
      borderLeft: "none",
      borderRight: "none",
      width: "100%",
      margin: "0",
      padding: "0 20px",
      flexWrap: "wrap",
    },
  },
  optionsSmall: {
    padding: "0 10px",
  },
  round: {
    ...text,
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "38px",
    color: "#FEA23E",
    padding: "46px 0 49px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
  roundSmall: {
    fontSize: "26px",
  },
  roundValue: {
    ...text,
    fontWeight: "normal",
    fontSize: "17px",
    lineHeight: "27px",
    color: "#fff",
    padding: "0 0 42px",
    textAlign: "center",
    minHeight: "76px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 27px",
      textAlign: "left",
      width: "35%",
      height: "auto",
    },
  },
  roundValueSmall: {
    fontSize: "15px",
  },
  label: {
    ...text,
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "48px",
    color: "#fff",
    letterSpacing: "-0.015em",
    padding: "0 0 27px",
  },
  labelSmall: {
    padding: "0 0 19px",
  },
  labelWrapper: {
    padding: "126px 75px 0 0",
    [theme.breakpoints.down("md")]: {
      padding: "126px 30px 0 0",
    },
  },
  roundWrapper: {
    width: "340px",
    background: "#EFEFEF",
    backdropFilter: "blur(9px)",
    borderRadius: "26px",
    margin: "0 35px 112px",
    padding: "0 0 50px",
    textAlign: "center",
  },
  roundTitle: {
    ...text,
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "46px",
    color: "#FEA23E",
    padding: "40px 0 32px",
  },
  roundDescription: {
    ...text,
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#2B0C9F",
  },
  line: {
    width: "260px",
    borderBottom: "1px solid #cfcfcf",
    margin: "0 auto 32px",
  },
  time: {
    width: "61px",
    height: "61px",
    background: "#181918",
    borderRadius: "8px",
    margin: "0 6px",
    display: "flex",
    alignItems: "center",
  },
  timeWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "38px 0 36px",
  },
  timeValue: {
    fontFamily: "'Major Mono Display', monospace",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "45px",
    lineHeight: "45px",
    letterSpacing: "-0.19em",
    color: "#ededed",
    textAlign: "center",
    margin: "0",
    textShadow: "0px 0px 8px rgba(255, 255, 255, 0.1)",
  },
  timeLabel: {
    fontFamily: "Source Sans Pro",
    fontWeight: "300",
    fontSize: " 12px",
    lineHeight: "15px",
    color: "#181918",
    paddingTop: "8px",
    margin: "0",
  },
  btn: {
    ...text,
    width: "250px",
    height: "59px",
    background: "linear-gradient(97.41deg, #FEA23E 5.75%, #D6B402 103.93%)",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#fff",
    transition: "none",
    textTransform: "none",
    "&:hover": {
      background: "#fea23e",
      color: "#fff",
    },
    "&:focus": {
      background: "#fea23e",
      color: "#fff",
    },
    "&:disabled": {
      background: "#979797",
      color: "#fff",
      textTransform: "uppercase",
    },
  },
  roundTitleWrapper: {
    width: "65%",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  flex: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "baseline",
    },
  },
});

export default saleOptionStyles;
