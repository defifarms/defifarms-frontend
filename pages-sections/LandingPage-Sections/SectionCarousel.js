import React, { useEffect, useState } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";

import bg from "assets/img/bg.jpg";
import bg2 from "assets/img/bg-2-1.png";
import image1 from "assets/img/bg1.jpg";
import banner3 from "assets/img/banner3.png";

import boder from "assets/img/NBT-boder.png";
import fill from "assets/img/NFT-fill.png";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/sectionCarousel.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel({ moveToStaking, moveToLocking }) {
  const [heightSmall, setHeight] = useState(0);
  const handleScroll = () => {
    setHeight(window.innerHeight < 812 && window.innerWidth < 500);
  };

  useEffect(() => {
    window.addEventListener("load", handleScroll);
    return () => window.removeEventListener("load", handleScroll);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 60000,
    infinite: true,
    //adaptiveHeight: true,
  };
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <div>
      <div>
        <GridContainer style={{ margin: 0, backgroundColor: "#1916ab" }}>
          <GridItem xs={12} sm={12} md={12}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src={image1}
                    alt="First slide"
                    className="slick-image slick-image-full"
                    style={{ height: "100%" }}
                  />

                  <div className="slick-caption">
                    <div className={classes.flex}>
                      <div
                        className={classes.img}
                        style={{
                          backgroundImage: "url(" + fill + ")",
                          backgroundSize: "cover",
                          backgroundPosition: "top center",
                          textAlign: "center",
                        }}
                      >
                        <img
                          className={classes.animatedItem}
                          src={boder}
                          alt="First slide"
                        />
                      </div>
                      <div className={classes.col} />
                      <div className={classes.col}>
                        <div className={classes.wrapper}>
                          <p className={classes.title}>{t("Slide1")}</p>
                          <p className={classes.description}>
                            {t("Slide1 Description")}
                          </p>
                          <Button
                            color="transparent"
                            target="_blank"
                            className={classes.btn}
                            onClick={moveToStaking}
                          >
                            DEFIY STAKING
                          </Button>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={bg}
                    alt="Second slide"
                    className="slick-image slick-image-full"
                  />
                  <div className="slick-caption">
                    <div className={classes.flexCenter}>
                      <div className={classes.bg}>
                        <div className={classes.bgMix}>
                          <img
                            src={bg2}
                            alt="First slide"
                            className="slick-image "
                            style={{ height: "100%" }}
                          />
                        </div>
                        <div className={classes.bg2}>
                          <div className={classes.wrapperFlex}>
                            <p className={classes.titleRewards}>
                              {t("Slide2")}
                            </p>
                            <p className={classes.descriptionRewards}>
                              {t("Slide2 Description")}
                            </p>
                            <Button
                              color="transparent"
                              target="_blank"
                              className={classes.btn}
                              onClick={moveToLocking}
                            >
                              NFT MINTING
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={bg}
                    alt="Second slide"
                    className="slick-image slick-image-full"
                  />
                  <div className="slick-caption">
                    <div className={classes.flexspaceAround}>
                      <img
                        src={banner3}
                        alt="First slide"
                        className={classes.banner3}
                      />
                      <div className={classes.bNFYWrapper}>
                        <div className={classes.wrapperFlex}>
                          <p className={classes.bNFY}>{t("Slide3")}</p>
                          <p className={classes.descriptionBNFY}>
                            {t("Slide3 Description")}
                          </p>
                          <Button
                            color="transparent"
                            target="_blank"
                            className={classes.btn}
                          >
                            DEFIY STAKING
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
