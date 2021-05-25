import image from "assets/img/icons/intersect.png";

const headerLinksStyle = (theme) => ({
  wrapper: {
    padding: "0 0 0 20px",
    margin: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 16px",
    },
  },
  wrapperItem: {
    display: "flex",
    alignItems: "baseline",
  },
  icon: {
    backgroundImage: "url(" + image + ")",
    width: "12px",
    height: "12px",
    paddingRight: "12px",
  },
  value: {
    fontFamily: "SF UI Text",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "40px",
    color: "#fff",
    margin: "0",
    padding: "0 0 0 24px",
    wordBreak: "break-all",
  },
});

export default headerLinksStyle;
