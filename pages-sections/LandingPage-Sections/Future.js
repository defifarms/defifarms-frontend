import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import Image from "next/image";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import DefiWay from "components/DefiWay/DefiWay.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/future.js";

import fee from "assets/img/fee.png";
import feeBg from "assets/img/fee-bg.png";
import sellBg from "assets/img/private-bg.png";

const useStyles = makeStyles(styles);

export default function Staking() {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <>
      <div className={classes.coinWrapper}>
        <div className={classes.coin}>
          <div className={classes.section}>
            <h5 className={classes.titleFuture}>{t("The Future")}</h5>
            <h5 className={classes.description}>
              {t("The Future Description")}
            </h5>
          </div>
        </div>
      </div>
      <div
        className={classes.wrapper}
        style={{
          backgroundImage: "url(" + feeBg + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          textAlign: "left",
        }}
      >
        <GridContainer justify="center" className={classes.feesWrapper}>
          <GridItem xs={12} sm={12} md={6} className={classes.gridItem}>
            <div>
              <h5 className={classes.titleFees} style={{ margin: "0" }}>
                {t("Transaction Fees")}
              </h5>
              <h5 className={classes.description}>
                {t("Transaction Fees Description")}
              </h5>
              <ul className={classes.list}>
                <li>{t("Transaction 1")}</li>
                <li>{t("Transaction 2")}</li>
                <li>{t("Transaction 3")}</li>
              </ul>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.itemWrapper}>
            <Image
              src={fee}
              alt="Fungible"
              width="338"
              height="242"
              layout="intrinsic"
            />
          </GridItem>
        </GridContainer>
      </div>
      <DefiWay bgImage={sellBg} title={t("Get right here")} isMain />
    </>
  );
}
