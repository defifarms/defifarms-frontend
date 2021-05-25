import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";

import styles from "assets/jss/nextjs-material-kit/components/tokenomicsItemStyle.js";
const useStyles = makeStyles(styles);

const TokenomicsItem = ({ tokenomics, translate }) => {
  const classes = useStyles();
  const { t } = useTranslation("tokenomics");

  return (
    <ul className={classes.wrapper}>
      {tokenomics.map((item) => (
        <div key={item} className={classes.wrapperItem}>
          <span className={classes.icon} />
          <p className={classes.value}>{translate ? t(`${item}`) : item}</p>
        </div>
      ))}
    </ul>
  );
};

export default TokenomicsItem;
