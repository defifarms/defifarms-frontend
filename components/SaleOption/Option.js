import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import clsx from "clsx";
import { pad, calculateTimeLeft } from "helpers/times.js";

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

const Option = ({ title, options, date, nextDate }) => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("tokenomics");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date, null, nextDate));
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div
      className={
        timeLeft.status === "Sold Out" ? classes.gray : classes.options
      }
    >
      <p className={classes.round}>{title}</p>
      <div>
        {options.map((item, index) => (
          <div key={item} className={classes.flex}>
            <div className={classes.roundTitleWrapper}>
              <p className={classes.label}>{t(`${labels[index]}`)}</p>
            </div>
            <p className={classes.roundValue}>{t(`${item}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Option;
