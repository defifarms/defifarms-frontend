import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";

import TokenomicsItem from "components/TokenomicsItem/TokenomicsItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/tokenomics/tokenomics.js";

const tokenomicsLeft = [
  "Protocol BEP20",
  "Name Defipay",
  "Symbol DEFIY",
  "Max Supply",
  "Rewards Pool",
  "Private 15",
  "Public 1",
];

const tokenomicsRight = [
  "Farming/staking/reward (18%): 18,000,000",
  "Marketing (12%): 12,000,000",
  "Liquidity (15%): 15,000,000",
  "Ecosystem (11%): 11,000,000",
  "Team (15%): 15,000,000",
  "Advisor & Partnership (5%): 5,000,000",
];

const tokenomicsBottom = [
  "PancakeSwap: {TBA}",
  "CoinMarketCap: {TBA}",
  "DexGuru: {TBA}",
  "PooCoin: {TBA}",
  "GoSwapp: {TBA}",
];

const useStyles = makeStyles(styles);
const Tokenomics = () => {
  const classes = useStyles();
  const { t } = useTranslation("tokenomics");

  return (
    <div className={classes.wrapper}>
      <h5 className={classes.title}>Tokenomics</h5>
      <div className={classes.tokenWrapper}>
        <h5 className={classes.token}>{t("Token Contract")}</h5>
        <a
          className={classes.tokenValue}
          href="https://bscscan.com/token/0x2307DfB065CF1c9c5bC0f3435b49830C0AB86847"
          target="_blank"
        >
          0x2307DfB065CF1c9c5bC0f3435b49830C0AB86847
        </a>
      </div>
      <div className={classes.tokenomicsItem}>
        <TokenomicsItem tokenomics={tokenomicsLeft} translate />
        <TokenomicsItem tokenomics={tokenomicsRight} />
      </div>
      <div className={classes.flexBox}>
        <div className={classes.trackingInfo}>
          <h5 className={classes.tokenInfo}>{t("Token Tracking Info")}</h5>
          <TokenomicsItem tokenomics={tokenomicsBottom} />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
