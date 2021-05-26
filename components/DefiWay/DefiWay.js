import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import Image from "next/image";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { getRoadmap } from "helpers/times.js";

// Icons
import bsc from "assets/img/icons/bsc.png";
import basic from "assets/img/icons/basic.png";
import av from "assets/img/icons/av.png";
import nodle from "assets/img/icons/nodle.png";
import kaikaikim from "assets/img/icons/logo_kaikaikim.png";
import orientCapital from "assets/img/icons/orient-capital.png";
import seoul from "assets/img/icons/seoul.png";
import minLab from "assets/img/icons/minLab.png";
import ichiTek from "assets/img/icons/ichiTek.png";

import styles from "assets/jss/nextjs-material-kit/components/defiWay.js";

const useStyles = makeStyles(styles);

const DefiWay = ({ bgImage, title, isMain }) => {
  const classes = useStyles();
  const { t } = useTranslation("common");
  const [roadmap, setRoadmap] = useState({});
  useEffect(() => {
    setRoadmap(getRoadmap());
  }, []);

  return (
    <>
      <div
        className={classes.wrapper}
        style={{
          backgroundImage: "url(" + bgImage + ")",
        }}
      >
        <GridContainer justify="center" className={classes.smartChain}>
          <GridItem xs={12} sm={12} md={6} className={classes.gridItem}>
            <h5 className={classes.title} style={{ margin: "0" }}>
              {t("#DeFi #NFTs on #BSC")}
            </h5>
            <h5 className={classes.description}>{title}</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} style={{ paddingLeft: "20px" }}>
            <div className={classes.flex}>
              <Button
                color="transparent"
                target="_blank"
                className={classes.btn}
                href="#"
                target="_blank"
              >
                Join {roadmap.title}
              </Button>
              <Button
                color="transparent"
                target="_blank"
                className={classes.btnContact}
                href="https://t.me/DefifarmsNFT"
              >
                {t("Contact us")}
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      {isMain && (
        <div className={classes.platformWrapper}>
          <h5 className={classes.partners}>Ecosystem Partners</h5>
          <div className={classes.partnersWrapper}>
            <div className={classes.partnersIcon}>
              <Image
                src={bsc}
                alt="bsc"
                width="199"
                height="79"
                layout="intrinsic"
                className={classes.partnersIcon}
              />
            </div>
            <div className={classes.partnersIcon}>
              <Image
                src={basic}
                alt="basic"
                width="220"
                height="79"
                layout="intrinsic"
                className={classes.partnersIcon}
              />
            </div>
            <div className={classes.partnersIcon}>
              <Image
                className={classes.partnersIcon}
                src={av}
                alt="av"
                width="300"
                height="50"
                layout="intrinsic"
              />
            </div>
            <div className={classes.partnersIcon}>
              <Image
                src={nodle}
                alt="nodle"
                width="220"
                height="79"
                layout="intrinsic"
              />
            </div>
          </div>
          <h5 className={classes.partners}>Strategic Investors</h5>
          <div className={classes.partnersWrapper}>
            <div className={classes.partnersIcon}>
              <Image
                src={kaikaikim}
                alt="kaikaikim"
                width="150"
                height="150"
                layout="fixed"
              />
            </div>
            <div className={classes.partnersIcon}>
              <Image
                src={orientCapital}
                alt="orientCapital"
                width="150"
                height="150"
                layout="fixed"
              />
            </div>
            <div className={classes.partnersIcon}>
              <Image
                src={seoul}
                alt="seoul"
                width="150"
                height="150"
                layout="fixed"
              />
            </div>
            <div className={classes.partnersIcon}>
              <Image
                src={minLab}
                alt="minLab"
                width="150"
                height="150"
                layout="fixed"
              />
            </div>
            <div className={classes.partnersIcon}>
              <Image
                src={ichiTek}
                alt="ichiTek"
                width="150"
                height="150"
                layout="fixed"
              />
            </div>
          </div>
        </div>
      )}
      <div className={classes.platformWrapper}>
        <h4 className={classes.platform}>{t("As a user 1")}</h4>
        <h4 className={classes.platform}>{t("As a user 2")}</h4>
      </div>
    </>
  );
};

export default DefiWay;
