import React, { useRef, useCallback, useEffect } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export default function LandingPage(props) {
  const refStaking = useRef();
  const refLocking = useRef();

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
      console.log("script added");
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
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SectionCarousel
          moveToStaking={moveToStaking}
          moveToLocking={moveToLocking}
        />
        <ProductSection />
        <Fungible />
        <BounceSection />
        <Staking
          ref={{
            refLocking: refLocking,
            refStaking: refStaking,
          }}
        />
        <Future />
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
