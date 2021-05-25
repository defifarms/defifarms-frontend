import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { getRoadmap } from "helpers/times.js";

import styles from "assets/jss/nextjs-material-kit/components/defiWay.js";

const useStyles = makeStyles(styles);

const DefiWay = ({ bgImage, title }) => {
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
      <div className={classes.platformWrapper}>
        <h4 className={classes.platform}>{t("As a user 1")}</h4>
        <h4 className={classes.platform}>{t("As a user 2")}</h4>
      </div>
    </>
  );
};

export default DefiWay;
