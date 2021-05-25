const description = {
  fontFamily: "Source Sans Pro",
  fontSize: "24px",
  lineHeight: "32px",
  color: "#fff",
  margin: "0",
  textAlign: "justify",
};
const title = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "72px",
  lineHeight: "80px",
  color: "#fff",
  textAlign: "left",
  margin: "0",
};

const useStyles = (theme) => ({
  title: {
    ...title,
    padding: "0 0 40px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "60px",
      lineHeight: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "30px 0 24px",
      fontSize: "38px",
      lineHeight: "58px",
    },
    "@media (max-width: 415px)": {
      lineHeight: "40px",
      padding: "10px 0",
    },
  },
  bNFY: {
    ...title,
    paddingBottom: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "60px",
      lineHeight: "60px",
      paddingBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "15px 0",
      fontSize: "38px",
      lineHeight: "55px",
    },
    "@media (max-width: 415px)": {
      lineHeight: "40px",
      padding: "10px 0",
    },
  },
  banner3: {
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      height: "300px",
      width: "344px",
    },
    [theme.breakpoints.down("sm")]: {
      // height: "240px",
      // width: "280px",
      height: "190px",
      width: "240px",
    },
    "@media (max-width: 415px)": {
      height: "170px",
      width: "230px",
    },
  },
  banner3Mobile: {
    height: "190px",
    width: "240px",
  },
  description: {
    ...description,
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 32px",
    },
    "@media (max-width: 415px)": {
      padding: "0 0 10px",
    },
  },
  descriptionBNFY: {
    ...description,
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  descriptionRewards: {
    ...description,
    paddingRight: "75px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0",
    },
  },
  titleRewards: {
    ...title,
    padding: "35px 0 40px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "60px",
      lineHeight: "60px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
      padding: "20px 0",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "38px",
      lineHeight: "58px",
    },
    "@media (max-width: 415px)": {
      lineHeight: "40px",
      padding: "10px 0",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100vw",
    paddingBottom: "6%",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "0",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  bg: {
    width: "70%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bgMix: {
    backgroundColor: "#1f16b1",
    "& img": {
      mixBlendMode: "lighten",
      [theme.breakpoints.down("sm")]: {
        height: "auto !important",
      },
    },
  },
  flexCenter: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  flexspaceAround: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    padding: "0 0 5%",
    [theme.breakpoints.down("md")]: {
      height: "100vh",
      padding: "10% 0 0",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      padding: "0",
      height: "auto",
    },
  },
  btn: {
    padding: "16px 52px",
    float: "left",
    width: "204px",
    height: "59px",
    background: "linear-gradient(97.41deg, #FEA23E 5.75%, #D6B402 103.93%)",
    borderRadius: "6px",
    margin: "40px 0px 0",
    transition: "none",
    textTransform: "none",
    fontFamily: "SF UI Text",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "center",
    color: " #fff",
    "&:hover": {
      background: "#FEA23E",
    },
    "&:focus": {
      background: "#FEA23E",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "20px 0px 0",
    },
  },
  wrapper: {
    maxWidth: "520px",
    marginRight: "20%",
    paddingBottom: "80px",
    [theme.breakpoints.down("lg")]: {
      paddingBottom: "0",
      marginRight: "12%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      margin: "0",
      padding: "0 20px",
      flexWrap: "wrap",
      display: "flex",
      justifyContent: "center",
    },
  },
  wrapperFlex: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      margin: "0",
      padding: "0 20px",
      flexWrap: "wrap",
      display: "flex",
      justifyContent: "center",
    },
  },
  bNFYWrapper: {
    maxWidth: "520px",
    marginLeft: "100px",
    paddingBottom: "80px",
    [theme.breakpoints.down("lg")]: {
      paddingBottom: "0",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
    },
  },
  img: {
    position: "absolute",
    left: "23%",
    top: "1%",
    width: "330px",
    height: "330px",
    [theme.breakpoints.down("md")]: {
      left: "20%",
      top: "10%",
      width: "300px",
      height: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      left: "9%",
      width: "250px",
      height: "250px",
      top: "39%",
      position: "unset",
    },
    "@media (max-width: 415px)": {
      width: "180px",
      height: "180px",
    },
  },
  imgSmall: {
    width: "200px",
    height: "200px",
  },
  bg2: {
    maxWidth: "520px",
    float: "right",
    marginRight: "80px",
    position: "absolute",
    top: "0",
    right: "0",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
    },
    [theme.breakpoints.down("sm")]: {
      position: "unset",
    },
  },
  col: {
    width: "50vw",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  animatedItem: {
    animation: `$myEffect 15s infinite linear`,
    height: "100%",
    width: "100%",
    display: "unset",
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(359deg)",
    },
  },
});

export default useStyles;
