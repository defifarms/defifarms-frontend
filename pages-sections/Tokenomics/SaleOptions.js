import React, { forwardRef } from "react";
import Image from "next/image";
import Hidden from "@material-ui/core/Hidden";
import { useTranslation } from "next-i18next";

import Option from "components/SaleOption/Option.js";
import Labels from "components/SaleOption/Labels.js";
import Round from "components/SaleOption/Round.js";
import DefiWay from "components/DefiWay/DefiWay.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/pages/tokenomics/saleOptions.js";
import smartContracts from "assets/img/smart-contracts.png";
import bitmap from "assets/img/bitmap.png";
import { roadmap } from "constants/roadmap.js";

const rounds = [
  {
    title: "Seed Sale",
    options: [
      "Seed Dates",
      "Seed Lockup",
      "Seed Release",
      "Seed Purchase",
      "Seed Supply",
      "Seed Tokens",
      "Seed Price",
    ],
  },
  {
    title: "Private Sale",
    options: [
      "Private Dates",
      "Private Lockup",
      "Private Release",
      "Private Purchase",
      "Private Supply",
      "Private Tokens",
      "Private Price",
    ],
  },
  {
    title: "IDO Sale",
    options: [
      "IDO Dates",
      "IDO Lockup",
      "IDO Release",
      "IDO Purchase",
      "IDO Supply",
      "IDO Tokens",
      "IDO Price",
    ],
  },
];

const labels = [
  "Sale Dates",
  "Lockup",
  "Release",
  "Purchase Limits",
  "% of Total Supply",
  "Number of Tokens",
  "Price Per Token",
];

const tokens = [
  {
    name: "DEFIY Token Contract",
    value: "0x2307DfB065CF1c9c5bC0f3435b49830C0AB86847",
    link: "https://bscscan.com/token/0x2307DfB065CF1c9c5bC0f3435b49830C0AB86847",
  },
  {
    name: "Reward Pool",
    value: "{TBA}",
  },
  {
    name: "DEFIY MasterChef",
    value: "{TBA}",
  },
  {
    name: "DEFIY Referral",
    value: "{TBA}",
  },
  {
    name: "DEFIY Locker",
    value: "{TBA}",
  },
  {
    name: "DEFIY Timelock",
    value: "{TBA}",
  },
  {
    name: "Token Vault",
    value: "{TBA}",
  },
  {
    name: "LiquidityLock",
    value: "{TBA}",
  },
];
const useStyles = makeStyles(styles);
const SaleOptions = forwardRef((props, ref) => {
  const classes = useStyles();
  const { t } = useTranslation("tokenomics");

  return (
    <div className={classes.wrapper}>
      <h5 className={classes.title}>{t("Sale Options")}</h5>
      <p className={classes.description}>{t("Sale Description")}</p>
      <div className={classes.flex}>
        <Hidden smDown>
          <Labels labels={labels} />
        </Hidden>
        {rounds.map((item, index) => (
          <Option
            key={item.title}
            title={item.title}
            options={item.options}
            nextDate={roadmap[index].nextDate}
            date={roadmap[index].date}
          />
        ))}
      </div>
      <p className={classes.note}>{t("Supplies and sale")}</p>
      <div className={classes.flex}>
        {roadmap.map((item) => (
          <Round
            key={item.title}
            title={item.title}
            labels={item.labels}
            date={item.date}
            nextDate={item.nextDate}
            dateTitle={item.dateTitle}
            link={item.link}
          />
        ))}
      </div>
      <h5 ref={ref} className={classes.smartContracts}>
        {t("Smart Contracts")}
      </h5>
      <div className={classes.iconWrapper}>
        <Image
          src={smartContracts}
          alt="Smart Contracts"
          className={classes.icon}
          width="128"
          height="128"
        />
        <p className={classes.contracts}>{t("Smart Contracts Desc")}</p>
        <div className={classes.tokenWrapper}>
          {tokens.map((item) => (
            <div className={classes.token} key={item.name}>
              <p key={item.name} className={classes.tokenName}>
                {item.name}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  className={classes.tokenvalue}
                >
                  {item.value}
                </a>
              ) : (
                <p className={classes.tokenvalue}>{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <DefiWay bgImage={bitmap} title={t("DNFY is the way")} />
    </div>
  );
});

export default SaleOptions;
