import React from "react";
import Head from "next/head";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { appWithTranslation } from "next-i18next";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import "assets/scss/nextjs-material-kit.scss?v=1.1.0";

const dashboardRoutes = [];

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1281,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["SF UI Text", "Source Sans Pro", "Poppins", "Montserrat"].join(
      ","
    ),
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          DefiFarms: The First NFTs Protocol Powerful Automatic Liquidity
          Acquisition Yield Farm & AMM
        </title>
      </Head>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="DefiFarms: The First NFTs Protocol Powerful Automatic Liquidity Acquisition Yield Farm & AMM"
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
      />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
