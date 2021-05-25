import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { useRouter } from "next/router";

import styles from "assets/jss/nextjs-material-kit/components/saleOption.js";

const useStyles = makeStyles(styles);

const Labels = ({ labels }) => {
  const classes = useStyles();
  const { t } = useTranslation("tokenomics");
  const router = useRouter();

  return (
    <div className={classes.labelWrapper}>
      {labels.map((item) => (
        <p
          key={item}
          className={
            router.locale === "vn"
              ? clsx(classes.label, classes.labelSmall)
              : classes.label
          }
        >
          {t(`${item}`)}
        </p>
      ))}
    </div>
  );
};

export default Labels;
