import React, { useRef, useCallback, useEffect, useState } from "react";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import HubspotForm from 'react-hubspot-form'

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import SectionCarousel from "pages-sections/LandingPage-Sections/SectionCarousel.js";
import Fungible from "pages-sections/LandingPage-Sections/Fungible.js";
import BounceSection from "pages-sections/LandingPage-Sections/BounceSection.js";
import Staking from "pages-sections/LandingPage-Sections/Staking.js";
import Future from "pages-sections/LandingPage-Sections/Future.js";

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

const styles = {
  hub: {
    width: "fit-content",
    margin: "auto",
    paddingTop: "20px",
  }
}

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const refStaking = useRef();
  const refLocking = useRef();
  const refTeam = useRef();
  const router = useRouter();
  const { q } = router.query;
  useEffect(() => {
    if (q === "team") {
      moveToTeam();
    }
  }, [q]);

  const moveToTeam = useCallback(() => {
    refTeam.current.scrollIntoView({
      behavior: "smooth",
    });
  });

  useEffect(() => {
    window.addEventListener("load", googleTranslateElementInit);
    return () => window.removeEventListener("load", googleTranslateElementInit);
  }, []);

  const moveToStaking = useCallback(() => {
    refStaking.current.scrollIntoView({
      behavior: "smooth",
    });
  });

  const moveToLocking = useCallback(() => {
    refLocking.current.scrollIntoView({
      behavior: "smooth",
    });
  });

  const googleTranslateElementInit = () => {
    if (!window["google"]) {
      var script = document.createElement("SCRIPT");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.getElementsByTagName("HEAD")[0].appendChild(script);
    }

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
      },
      "google_translate_element"
    );

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', 'AW-342366603');
  };

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <SectionCarousel
          moveToStaking={moveToStaking}
          moveToLocking={moveToLocking}
        />
        <ProductSection />
        <div className={classes.hub}>
          <HubspotForm
            region="na1"
            portalId='20329563'
            formId='faeaca18-a4ba-4d8a-8100-dc67728e39b6'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
          />    
        </div>  
        <Fungible />
        <BounceSection />
        <Staking
          ref={{
            refLocking: refLocking,
            refStaking: refStaking,
          }}
        />
        <Future ref={refTeam} />
      </ThemeProvider>
    </div>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const fs = require("fs");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
};
