import React, { forwardRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/pages/tokenomics/roadmap.js";
import contact from "assets/img/icons/contact.png";
import onlinePrivacy from "assets/img/icons/online-privacy.png";
import goal from "assets/img/icons/goal.png";
import velocity from "assets/img/icons/velocity.png";

const quarters = [
  {
    title: "Quarter 1",
    maps: ["Quarter 1.1", "Quarter 1.2", "Quarter 1.3"],
    icon: contact,
  },
  {
    title: "Quarter 2",
    maps: ["Quarter 2.1", "Quarter 2.2", "Quarter 2.3"],
    icon: onlinePrivacy,
  },
  {
    title: "Quarter 3",
    maps: ["Quarter 3.1", "Quarter 3.2", "Quarter 3.3"],
    icon: goal,
  },
  {
    title: "Quarter 4",
    maps: ["Quarter 4.1"],
    icon: velocity,
  },
];

const useStyles = makeStyles(styles);

const RoadmapItem = ({ icon, title, maps }) => {
  const { t } = useTranslation("tokenomics");
  const classes = useStyles();

  return (
    <div className={classes.flexBox}>
      <div>
        <div className={classes.iconWrapper}>
          <Image
            src={icon}
            alt={title}
            className={classes.icon}
            width="64"
            height="64"
          />
        </div>

        <p className={classes.roadmapTitle}>{t(`${title}`)}</p>
        <ul className={classes.list}>
          {maps.map((item) => (
            <li key={item} className={classes.item}>
              {t(`${item}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Roadmap = forwardRef((props, ref) => {
  const classes = useStyles();
  const { t } = useTranslation("tokenomics");
  return (
    <div className={classes.wrapper} ref={ref}>
      <h5 className={classes.title}>{t("Roadmap")}</h5>
      <div className={classes.flexBox}>
        {quarters.map((item, index) => (
          <div key={item.title} className={classes.roadmap}>
            <RoadmapItem icon={item.icon} title={item.title} maps={item.maps} />
            {index !== quarters.length - 1 && (
              <div className={classes.subtractWrapper}>
                <span className={classes.subtract} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Roadmap;
