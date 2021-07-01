import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Clock from "pages-sections/LandingPage-Sections/Clock.js";
import { getRoadmap } from "helpers/times.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/bounce.js";
const useStyles = makeStyles(styles);

export default function BounceSection() {
  const classes = useStyles();
  const [roadmap, setRoadmap] = useState({});
  useEffect(() => {
    setRoadmap(getRoadmap());
  }, []);

  return (
    <div className={classes.wrapper}>
      <GridContainer justify="center" className={classes.item}>
        <GridItem xs={12} sm={12} md={12}>
          <h5 className={classes.title}>
            {roadmap.title} is opening the whitelisting process
          </h5>
          <h5 className={classes.description}>
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
            {/* {roadmap.title} is opening the whitelisting process{" "}
            {roadmap.dateTitle} */}
            Whitelist Lottery is live!
          </h5>
          <Clock startTime={roadmap.date} endTime={roadmap.nextDate} />
          <Button
            color="transparent"
            className={classes.btn}
            rel="noopener"
            href={roadmap.link}
            target="_blank"
          >
            Join {roadmap.title}
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
