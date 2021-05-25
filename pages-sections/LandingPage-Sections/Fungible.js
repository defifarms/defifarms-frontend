import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/fungible.js";
import image from "assets/img/fungible.png";

const useStyles = makeStyles(styles);

export default function Fungible() {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <div className={classes.wrapper}>
      <GridContainer justify="center" className={classes.content}>
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.item}>
            <h5 className={classes.title}>{t("Section 3")}</h5>
            <h5 className={classes.description}>
              {t("Section 3 Description")}
            </h5>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.itemLast}>
            <Image
              src={image}
              alt="Fungible"
              width="628"
              height="455"
              layout="intrinsic"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
