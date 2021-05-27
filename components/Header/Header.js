import React, { useState, useMemo, FC, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { getRoadmap } from "helpers/times.js";

// core components
import styles from "assets/jss/nextjs-material-kit/components/headerStyle.js";
import logo from "assets/img/icons/logo.png";
import en from "assets/img/icons/en.png";
import vn from "assets/img/icons/vn.png";
import jp from "assets/img/icons/jp.png";
import china from "assets/img/icons/china.png";
import korea from "assets/img/icons/korea.png";

const useStyles = makeStyles(styles);

const languagesData = [
  {
    icon: en,
    name: "English",
    id: "en",
  },
  {
    icon: vn,
    name: "Viet Nam",
    id: "vn",
  },
  {
    icon: jp,
    name: "Japan",
    id: "en",
  },
  {
    icon: china,
    name: "china",
    id: "en",
  },
  {
    icon: korea,
    name: "korea",
    id: "en",
  },
];

const LanguageComponent = ({
  languages,
  onSelectLanguage,
  language,
  classes,
}) => {
  const router = useRouter();
  return (
    <CustomDropdown
      noLiPadding
      navDropdown
      buttonText={<p className={classes.btnIcon}>{language.name}</p>}
      buttonProps={{
        className: classes.btnLanguage,
        color: "transparent",
        width: "167px",
      }}
      buttonIcon={
        <img
          className={classes.animatedItem}
          src={language.icon}
          alt={language.name}
          className={classes.icon}
        />
      }
      dropdownList={languages.map((item) => (
        <Link href={router.pathname} locale={item.id}>
          <Button
            color="transparent"
            color="transparent"
            key={item.name}
            onClick={() => onSelectLanguage(item)}
            rel="noopener"
          >
            <img
              className={classes.animatedItem}
              src={item.icon}
              alt={item.name}
              className={classes.icon}
            />
            <p className={classes.iconText}>{item.name}</p>
          </Button>
        </Link>
      ))}
    />
  );
};

export default function Header(props) {
  const router = useRouter();
  const [roadmap, setRoadmap] = useState({});
  useEffect(() => {
    setRoadmap(getRoadmap());
  }, []);
  const localeLanguage =
    languagesData.find((item) => item.id === router.locale) || languagesData[0];
  const [language, setLanguage] = useState(localeLanguage);

  const { t } = useTranslation("common");

  const otherlanguages = useMemo(
    () => languagesData.filter((item) => item.name !== language.name),
    [language]
  );

  const onSelectLanguage = (item) => {
    setLanguage(item);
  };

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <div>
          <Link href="/">
            <a>
              <img
                src={logo}
                alt="DefiFarms: The First NFTs Protocol Powerful Automatic Liquidity Acquisition Yield Farm & AMM"
                className={classes.logo}
              />
            </a>
          </Link>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks onClick={handleDrawerToggle} />
        </Hidden>
        <div className={classes.flexBox}>
          {/* <LanguageComponent
              languages={otherlanguages}
              language={language}
              onSelectLanguage={onSelectLanguage}
              classes={classes}
            /> */}
          <div id="google_translate_element"></div>
          <Hidden smDown implementation="css">
            <Button
              color="transparent"
              color="transparent"
              className={classes.btn}
              rel="noopener"
              href={roadmap.link}
              target="_blank"
            >
              {t("buttonHeader")}
            </Button>
          </Hidden>
        </div>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            <div className={classes.flexMobile}>
              <Link href="/">
                <a onClick={handleDrawerToggle}>
                  <img src={logo} alt="DefiFarms" className={classes.logo} />
                </a>
              </Link>
              <div className={classes.flexBox}>
                {/* <LanguageComponent
                  languages={otherlanguages}
                  language={language}
                  onSelectLanguage={onSelectLanguage}
                  classes={classes}
                /> */}

                <IconButton
                  color="inherit"
                  aria-label="close Close"
                  onClick={handleDrawerToggle}
                >
                  <Close />
                </IconButton>
              </div>
            </div>
            <HeaderLinks onClick={handleDrawerToggle} />
            <Button
              color="transparent"
              color="transparent"
              className={classes.btn}
              rel="noopener"
              href={roadmap.link}
              target="_blank"
            >
              {t("buttonHeader")}
            </Button>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
