import React, { useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Sections for this page
import Tokenomics from "pages-sections/Tokenomics/Tokenomics.js";
import Roadmap from "pages-sections/Tokenomics/Roadmap.js";
import SaleOptions from "pages-sections/Tokenomics/SaleOptions.js";

export default function TokenomicsScreen(props) {
  const refRoadmap = useRef();
  const refSmartContract = useRef();
  const router = useRouter();
  const { q } = router.query;
  useEffect(() => {
    if (q === "Roadmap") {
      moveToRoadmap();
    }
    // } else if (q === "Smart Contract") {
    //   moveToSmartContract();
    // }
  }, [q]);

  useEffect(() => {
    window.addEventListener("load", googleTranslateElementInit);
    return () => window.removeEventListener("load", googleTranslateElementInit);
  }, []);

  const moveToRoadmap = useCallback(() => {
    refRoadmap.current.scrollIntoView({
      behavior: "smooth",
    });
  });

  const moveToSmartContract = useCallback(() => {
    refSmartContract.current.scrollIntoView({
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
      <Tokenomics />
      <Roadmap ref={refRoadmap} />
      <SaleOptions ref={refSmartContract} />
    </div>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const fs = require("fs");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "tokenomics"])),
    },
  };
};
