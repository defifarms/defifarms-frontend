import React, { useEffect, useState, forwardRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import Image from "next/image";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { getRoadmap } from "helpers/times.js";

// Icons
import av from "assets/img/icons/av.png";
import nodle from "assets/img/icons/nodle.png";
import kaikaikim from "assets/img/icons/logo_kaikaikim.png";
import orientCapital from "assets/img/icons/orient-capital.png";
import seoul from "assets/img/icons/seoul.png";
import minLab from "assets/img/icons/minLab.png";
import ichiTek from "assets/img/icons/ichiTek.png";
import blake from "assets/img/avatar/blake.jpeg";
import cesar from "assets/img/avatar/cesar.jpeg";
import harrik from "assets/img/avatar/harrik.jpeg";
import markas from "assets/img/avatar/markas.jpeg";
import zackhary from "assets/img/avatar/zackhary.jpeg";
import basicCapitan from 'assets/img/basics-capital.png'

import styles from "assets/jss/nextjs-material-kit/components/defiWay.js";

const useStyles = makeStyles(styles);

const teams = [
  {
    name: "Cesar Deandre",
    image: cesar,
    position: "CEO & Co-Founder",
    linkedin: "https://www.linkedin.com/in/cesar-deandre-b0867b1b3/",
  },
  {
    name: "Zackhary Brown",
    image: zackhary,
    position: "CMO & Co-Founder",
    linkedin: "https://www.linkedin.com/in/zackhary-brown-ab3b731ba/",
  },
  {
    name: "Harrik Medsam",
    image: harrik,
    position: "Chief Finacial Officer",
    linkedin: "https://www.linkedin.com/in/harrik-medsam-22137120b/",
  },
  {
    name: "Blake Dalton",
    image: blake,
    position: "Blockchain Developer",
    linkedin: "https://www.linkedin.com/in/blake-dalton-8a4577206/",
  },
  {
    name: "Markas Sallu",
    image: markas,
    position: "Blockchain Architect",
    linkedin: "https://www.linkedin.com/in/markas-sallu-72a18320b/",
  },
];

const Team = ({ name, image, position, linkedin }) => {
  const classes = useStyles();
  return (
    <div className={classes.partnersIcon}>
      <div className={classes.teamImg + " teamImg"}>
        <img src={image} alt="basic" className={classes.team} />
      </div>

      <h5 className={classes.teamName}>{name}</h5>
      <h5 className={classes.teamPosition}>{position}</h5>
      <Button
        color="transparent"
        target="_blank"
        re="noopener"
        className={classes.btnTeam}
        href={linkedin}
      >
        in
      </Button>
    </div>
  );
};

const DefiWay = forwardRef(({ bgImage, title, isMain }, ref) => {
  const classes = useStyles();
  const { t } = useTranslation("common");
  const [roadmap, setRoadmap] = useState({});
  useEffect(() => {
    setRoadmap(getRoadmap());
  }, []);

  return (
    <>
      <div
        className={classes.wrapper}
        style={{
          backgroundImage: "url(" + bgImage + ")",
        }}
      >
        <GridContainer justify="center" className={classes.smartChain}>
          <GridItem xs={12} sm={12} md={6} className={classes.gridItem}>
            <h5 className={classes.title} style={{ margin: "0" }}>
              {t("#DeFi #NFTs on #BSC")}
            </h5>
            <h5 className={classes.description}>{title}</h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} style={{ paddingLeft: "20px" }}>
            <div className={classes.flex}>
              <Button
                color="transparent"
                target="_blank"
                className={classes.btn}
                href={roadmap.link}
                re="noopener"
                target="_blank"
              >
                Join {roadmap.title}
              </Button>
              <Button
                color="transparent"
                target="_blank"
                re="noopener"
                className={classes.btnContact}
                href="mailto:contact@defifarms.org"
              >
                {t("Contact us")}
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      {isMain && (
        <div className={classes.platformWrapper} ref={ref}>
          <h5 className={classes.partners}>Team members</h5>
          <div className={classes.partnersWrapper}>
            {teams.map((item) => (
              <Team
                key={item.name}
                name={item.name}
                image={item.image}
                position={item.position}
                linkedin={item.linkedin}
              />
            ))}
          </div>
          <h5 className={classes.partners}>Ecosystem Partners</h5>
          <div className={classes.partnersWrapper}>
          <div className={classes.partnersIcon}>
              <Image
                src={basicCapitan}
                alt="nodle"
                width="150"
                height="50"
                layout="intrinsic"
              />
            </div>
            <div className={classes.partnersIcon}>
              <Image
                src={nodle}
                alt="nodle"
                width="150"
                height="50"
                layout="intrinsic"
              />
            </div>
          </div>
          <h5 className={classes.partners}>Strategic Investors</h5>
          <div className={classes.partnersWrapper}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.partnersIcon}>
                  <Image
                    src={kaikaikim}
                    alt="kaikaikim"
                    width="60"
                    height="60"
                    layout="fixed"
                  />
                  <h5 className={classes.descriptionLogo}>KaiKaiKim</h5>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.partnersIcon}>
                  <Image
                    src={orientCapital}
                    alt="orientCapital"
                    width="60"
                    height="60"
                    layout="fixed"
                  />
                  <h5 className={classes.descriptionLogo}>Orient Capital</h5>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.partnersIcon}>
                  <Image
                    src={seoul}
                    alt="seoul"
                    width="60"
                    height="60"
                    layout="fixed"
                  />
                  <h5 className={classes.descriptionLogo}>
                    Seoul Fortune Venture
                  </h5>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.partnersIcon}>
                  <Image
                    src={minLab}
                    alt="minLab"
                    width="60"
                    height="60"
                    layout="fixed"
                  />
                  <h5 className={classes.descriptionLogo}>MintLAB</h5>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.partnersIcon}>
                  <Image
                    src={ichiTek}
                    alt="ichiTek"
                    width="60"
                    height="60"
                    layout="fixed"
                  />
                  <h5 className={classes.descriptionLogo}>IchiTek</h5>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.partnersIcon}>
                  <Image
                    className={classes.partnersIcon}
                    src={av}
                    alt="av"
                    width="150"
                    height="50"
                    layout="intrinsic"
                  />
                  <h5 className={classes.descriptionLogo}>
                    Andromeda Research
                  </h5>
                </div>
              </GridItem>
            </GridContainer>
          </div>
          <h5 className={classes.partners}>Featured In</h5>
          <div className={classes.partnersWrapper}>
            <div className={classes.partnersIcon}>
              <a
                target="_blank"
                re="noopener"
                className={classes.descriptionLink}
                href="https://www.einnews.com/pr_news/542577199/defifarms-is-using-the-power-of-nft-s-to-revolutionize-the-decentralized-finance-world"
              >
                EIN News
              </a>
            </div>
            <div className={classes.partnersIcon}>
              <a
                target="_blank"
                re="noopener"
                className={classes.descriptionLink}
                href="https://techtodaynewspaper.com/defifarms-is-using-the-power-of-nfts-to-revolutionize-the-decentralized-finance-world/"
              >
                Techtoday Newspaper
              </a>
            </div>
            <div className={classes.partnersIcon}>
              <a
                target="_blank"
                re="noopener"
                className={classes.descriptionLink}
                href="https://www.cryptonewsz.com/defifarms-comes-with-combined-convenience-of-defi-and-nft/amp/?fbclid=IwAR3ySvH-nhLzwxuBMIok-IJqZZnMUaKHHjDLf_x2rHQmHAnCgmCcRBsPH34"
              >
                CryptoNewsz
              </a>
            </div>
            <div className={classes.partnersIcon}>
              <a
                target="_blank"
                re="noopener"
                className={classes.descriptionLink}
                href="https://techbullion.com/innovative-defi-ecosystem-is-disrupting-the-industry-with-nft-enhanced-yield-farming/amp/?fbclid=IwAR3-FN-FGQJBcEFaXE6kTlpMQoXwjqro_KrYMaHdv__HEpGs7v8SMIfB-mU"
              >
                Techbullion
              </a>
            </div>
            <div className={classes.partnersIcon}>
              <a
                target="_blank"
                re="noopener"
                className={classes.descriptionLink}
                href="https://in.news.yahoo.com/news/innovative-defi-ecosystem-disrupting-industry-055909907.html"
              >
                Yahoo Finance
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default DefiWay;
