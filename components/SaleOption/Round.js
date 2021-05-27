import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import { pad, calculateTimeLeft } from "helpers/times.js";
import styles from "assets/jss/nextjs-material-kit/components/saleOption.js";

const useStyles = makeStyles(styles);

const Round = ({ title, labels, date, nextDate, dateTitle, link }) => {
  const classes = useStyles();
  const { t } = useTranslation("tokenomics");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date, null, nextDate));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={classes.roundWrapper}>
      <div className={classes.line}>
        <p className={classes.roundTitle}>{t(`${title}`)}</p>
      </div>
      <div className={classes.roundDescriptionWrapper}>
        <p className={classes.roundDescription}>
          Starts <b>{dateTitle}</b>
        </p>
        {labels.map((item) => (
          <p key={item} className={classes.roundDescription}>
            {t(`${item}`)}
          </p>
        ))}
      </div>
      <div className={classes.timeWrapper}>
        <div>
          <div className={classes.time}>
            <p className={classes.timeValue}>{pad(timeLeft.days)}</p>
          </div>
          <p className={classes.timeLabel}>DAYS</p>
        </div>

        <div>
          <div className={classes.time}>
            <p className={classes.timeValue}>{pad(timeLeft.hours)}</p>
          </div>
          <p className={classes.timeLabel}>HOURS</p>
        </div>

        <div>
          <div className={classes.time}>
            <p className={classes.timeValue}>{pad(timeLeft.minutes)}</p>
          </div>
          <p className={classes.timeLabel}>MINUTES</p>
        </div>

        <div>
          <div className={classes.time}>
            <p className={classes.timeValue}>{pad(timeLeft.seconds)}</p>
          </div>
          <p className={classes.timeLabel}>SECONDS</p>
        </div>
      </div>
      <Button
        color="transparent"
        color="transparent"
        className={classes.btn}
        rel="noopener"
        href={link}
        target="_blank"
        disabled={timeLeft.status === "Sold Out"}
      >
        {timeLeft.status}
      </Button>
    </div>
  );
};

export default Round;
