const title = {
  fontFamily: "SF UI Text",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "32px",
  lineHeight: "42px",
  letterSpacing: "-0.015em",
  color: "#fff",
  margin: "70px 0 32px 0px",
};

const stakingStyle = (theme) => ({
  wrapper: {
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "80px 0 55px",
    border: "0",
    alignItems: "center",
    background: "#1E0072",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
      textAlign: "center",
    },
  },
  item: {
    maxWidth: "580px",
  },
  itemFun: {
    paddingTop: "38px",
    maxWidth: "580px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0",
    },
  },
  content: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "0 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
    },
  },
  title: {
    ...title,
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 32px",
    },
  },
  titleRisk: {
    ...title,
    paddingTop: "50px",
    [theme.breakpoints.down("sm")]: {
      margin: "32px 0",
      paddingTop: "0",
    },
  },
  titleStaking: {
    ...title,
    padding: "0",
    margin: "0 0 32px",
    [theme.breakpoints.down("sm")]: {
      margin: "32px 0",
    },
  },
  description: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#fff",
    margin: "0",
    padding: "0",
    textAlign: "justify",
  },
  smartChain: {
    padding: "70px 40px 0",
    maxWidth: "1240px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 20px 0",
      flexWrap: "wrap-reverse",
    },
  },
  lockingImg: {
    height: "358px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%",
      padding: "50px 0 32px",
    },
  },
  staking: {
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0",
    },
  },
});

export default stakingStyle;
