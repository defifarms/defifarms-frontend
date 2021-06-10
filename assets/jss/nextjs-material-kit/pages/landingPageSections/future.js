import coin from "assets/img/coin.png";
import coinMobile from "assets/img/coin-mb.png";

const title = {
  fontFamily: "SF UI Text",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "32px",
  lineHeight: "48px",
  letterSpacing: "-0.015em",
  color: "#fff",
  margin: "0",
  padding: "0 0 32px",
};
const futureStyle = (theme) => ({
  coin: {
    width: "1240px",
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 auto",
  },
  container: {
    backgroundColor: "#1e0072",
  },
  coinWrapper: {
    height: "auto",
    margin: "-2px auto 0",
    padding: "72px 0",
    maxWidth: "1240px",
    display: "flex",
    justifyContent: "flex-end",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    textAlign: "left",
    backgroundImage: "url(" + coin + ")",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + coinMobile + ")",
      padding: "0 0 50px",
    },
  },
  wrapper: {
    height: "auto",
    margin: "0",
    padding: "80px 0",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 50px",
    },
  },
  titleFuture: {
    ...title,
    [theme.breakpoints.down("sm")]: {
      padding: "400px 0 32px",
    },
  },
  titleFees: {
    ...title,
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0 32px",
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
    textAlign: "justify",
  },
  section: {
    maxWidth: "600px",
    padding: "0 40px 0 0",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      textAlign: "center",
    },
  },
  feesWrapper: {
    padding: "0 40px",
    maxWidth: "1240px",
    margin: "0 auto",
    width: "100%",
    alignItems: "flex-start",
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
  list: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#fff",
    margin: "30px 0",
    [theme.breakpoints.down("sm")]: {
      listStylePosition: "inside",
    },
  },
  item: {
    padding: "78px 0 0",
  },
  itemWrapper: {
    padding: "85px 0 0 134px",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
});

export default futureStyle;
