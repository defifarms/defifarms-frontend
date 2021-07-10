import React, { useEffect, useState, useRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Clock from "pages-sections/LandingPage-Sections/Clock.js";
import { getRoadmap } from "helpers/times.js";
import classNames from "classnames";
import privateBg from "assets/img/private-sale.png";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/bounce.js";
const useStyles = makeStyles(styles);

export default function BounceSection() {
  const classes = useStyles();
  const [roadmap, setRoadmap] = useState({});
  const refInput = useRef(null);
  const [isPrivate, setPrivate] = useState(false);
  useEffect(() => {
    setRoadmap(getRoadmap());
  }, []);

  useEffect(() => {
    const nextTime = +new Date(roadmap.date) - +new Date();
    const isPrivateSale = nextTime < 0 && roadmap.title === "Private Sale"
    setPrivate(isPrivateSale)
  }, [roadmap]);

  const wrapper = classNames({
    [classes.wrapper]: true,
    [classes.main]: isPrivate,
  });

  const onCoppy = () => {
    const confirmCodeInput = refInput.current;
    confirmCodeInput?.select();
    document.execCommand("copy");
  };
  return (
    <div>
      <div className={wrapper}>
        <GridContainer justify="center" className={classes.item}>
          <GridItem xs={12} sm={12} md={12}>
            <h5 className={classes.title}>
              {isPrivate ? "Private Sale Ending In..." : `${roadmap.title} is opening the whitelisting process`}
            </h5>
            {!isPrivate && <><h5 className={classes.description}>
              Go to{" "}
              <a
                className={classes.descriptionLink}
                href={roadmap.link}
                target="_blank"
                re="noopener"
              >
                Register Form
              </a>{" "}
              to buy DEFIY tokens at {roadmap.title}.
            </h5>
              <h5 className={classes.description}>
                Whitelist Lottery is live!
              </h5></>}
            <Clock startTime={roadmap.date} endTime={roadmap.nextDate} />
            {!isPrivate &&<Button
              color="transparent"
              className={classes.btn}
              rel="noopener"
              href={roadmap.link}
              target="_blank"
            >
              Join {roadmap.title}
            </Button>}
          </GridItem>
        </GridContainer>
      </div>
      {isPrivate && (
        <div className={classes.privateWrapper}>
          <div className={classes.privateBgWrapper}>
            <img
              src={privateBg}
              alt="First slide"
              className={classes.privateBg}
            />
          </div>
          <div className={classes.tokenWrapper}>
            <h5 className={classes.description}>
              Congratulation you qualify for Buy DeFiFarms Coin (DEFIY)!
            </h5>
            <h5 className={classes.descriptionToken}>
              You can send the BUSD (BEP20) to our office wallet address bellow:
            </h5>
            <div className={classes.flex}>
              <input
                className={classes.token}
                ref={refInput}
                readOnly
                value="0xA88165eE3389ca157680360974Cc13d4C01A3a20"
              />

              <p className={classes.copy} onClick={onCoppy}>
                Copy
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
