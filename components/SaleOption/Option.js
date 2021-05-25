import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import clsx from "clsx";

import styles from "assets/jss/nextjs-material-kit/components/saleOption.js";

const useStyles = makeStyles(styles);
const labels = [
  "Sale Dates",
  "Lockup",
  "Release",
  "Purchase Limits",
  "% of Total Supply",
  "Num of Tokens",
  "Price per Token",
];

const Option = ({ title, options }) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("tokenomics");

  return (
    <div
      className={
        router.locale === "vn"
          ? clsx(classes.options, classes.optionsSmall)
          : classes.options
      }
    >
      <p
        className={
          router.locale === "vn"
            ? clsx(classes.round, classes.roundSmall)
            : classes.round
        }
      >
        {t(`${title}`)}
      </p>
      <div>
        {options.map((item, index) => (
          <div key={item} className={classes.flex}>
            <div className={classes.roundTitleWrapper}>
              <p className={classes.label}>{t(`${labels[index]}`)}</p>
            </div>
            <p
              className={
                router.locale === "vn"
                  ? clsx(classes.roundValue, classes.roundValueSmall)
                  : classes.roundValue
              }
            >
              {t(`${item}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Option;
