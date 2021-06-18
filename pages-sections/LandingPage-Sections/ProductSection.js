import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";

import Button from "@material-ui/core/Button";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import image from "assets/img/bitmap.png";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        textAlign: "center",
      }}
    >
      <h5 className={classes.description}>{t("Section 2")}</h5>
      <h5 className={classes.description}>
        Powered by <span className={classes.icon} />
      </h5>
      <Button
        color="transparent"
        color="transparent"
        className={classes.btn}
        href="https://t.me/DefifarmsNFT"
        target="_blank"
        rel="noopener"
      >
        {t("Join The Community")}
      </Button>
    </div>
  );
}
