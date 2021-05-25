import React, { forwardRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import Image from "next/image";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/staking.js";
import staking from "assets/img/staking.png";
import risk from "assets/img/risk.png";
import locking from "assets/img/locking.png";

const useStyles = makeStyles(styles);

const Staking = forwardRef((props, ref) => {
  const { refLocking, refStaking } = ref;
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <div className={classes.wrapper}>
      <GridContainer justify="center" className={classes.content}>
        <GridItem xs={12} sm={12} md={6}>
          <GridContainer justify="center" className={classes.content}>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.itemFun}>
                <Image
                  src={risk}
                  alt="Fungible"
                  width="490"
                  height="232"
                  layout="intrinsic"
                />
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.item}>
                <h5 className={classes.titleRisk}>{t("Manage Your Risk")}</h5>
                <h5 className={classes.description}>{t("Risk Description")}</h5>
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <GridContainer justify="center" className={classes.content}>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.item}>
                <Image
                  className={classes.lockingImg}
                  src={locking}
                  alt="Fungible"
                  width="442"
                  height="315"
                  layout="intrinsic"
                />
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={12} ref={refLocking}>
              <div className={classes.item}>
                <h5 className={classes.title}>{t("Liquidity Locking")}</h5>
                <h5 className={classes.description}>
                  {t("Liquidity Locking Description")}
                </h5>
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer
        justify="center"
        className={classes.smartChain}
        ref={refStaking}
      >
        <GridItem xs={12} sm={12} md={6} className={classes.staking}>
          <div className={classes.item}>
            <h5 className={classes.titleStaking}>{t("Staking")}</h5>
            <h5 className={classes.description}>{t("Staking Description")}</h5>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} style={{ paddingLeft: "20px" }}>
          <div className={classes.item}>
            <Image
              src={staking}
              alt="Fungible"
              width="535"
              height="314"
              layout="intrinsic"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
});

export default Staking;
