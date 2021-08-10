import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

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
import HeaderLinks from "components/Header/HeaderLinks.js";
import { getRoadmap } from "helpers/times.js";

// core components
import styles from "assets/jss/nextjs-material-kit/components/headerStyle.js";
import logo from "assets/img/icons/logo.png";
import { dropdown } from "constants/roadmap.js";

const useStyles = makeStyles(styles);

// const dropdown = [
//   {
//     name: "Litepaper",
//     href: "./documents/DefiFarms_Litepaper.pdf",
//   },
//   {
//     name: "One pager",
//     href: "./documents/One_Pager.pdf",
//   },
//   {
//     name: "Infographics",
//     href: "https://github.com/defifarms/brand_assets/tree/main/Infographics",
//   },
//   {
//     name: "Tokenomics",
//     href: "./documents/Tokenomics.pdf",
//   },
//   {
//     name: "Whitepaper",
//     href: "./documents/DeFiFarms_Whitepaper.pdf",
//   },
//   {
//     href: "./documents/dApp_Roadmap.pdf",
//     name: "dApp Roadmap",
//   },
// ];
export default function Header(props) {
  const [roadmap, setRoadmap] = useState({});
  useEffect(() => {
    setRoadmap(getRoadmap());
  }, []);

  const { t } = useTranslation("common");
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
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

  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    !mobileOpen && setToggleMenu(false);
  };

  const handelToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <div>
            <Link href="/">
              <a>
                <img
                  src={logo}
                  alt="DeFiFarms: The First NFTs Protocol Powerful Automatic Liquidity Acquisition Yield Farm & AMM"
                  className={classes.logo}
                />
              </a>
            </Link>
          </div>
          <Hidden smDown implementation="css">
            <HeaderLinks
              onClick={handleDrawerToggle}
              toggleMenu={onToggleMenu}
              closeMenu={closeMenu}
            />
          </Hidden>
          <div className={classes.flexBox}>
            <div id="google_translate_element"></div>
            <Hidden smDown implementation="css">
              <Button
                color="transparent"
                color="transparent"
                className={classes.btn}
                rel="noopener"
                href="https://app.defifarms.org/"
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
                    <img src={logo} alt="DeFiFarms" className={classes.logo} />
                  </a>
                </Link>
                <div className={classes.flexBox}>
                  <IconButton
                    color="inherit"
                    aria-label="close Close"
                    onClick={handleDrawerToggle}
                  >
                    <Close />
                  </IconButton>
                </div>
              </div>
              <HeaderLinks
                onClick={handleDrawerToggle}
                toggleMenu={handelToggleMenu}
                istoggleMenu={toggleMenu}
              />
              <Button
                color="transparent"
                color="transparent"
                className={classes.btn}
                rel="noopener"
                href="https://app.defifarms.org/"
                target="_blank"
              >
                {t("buttonHeader")}
              </Button>
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
      {toggleMenu && (
        <div className={classes.subMenu}>
          <div className={classes.center}>
            {dropdown.map((item) => (
              <Link href={item.href} key={item.name}>
                <a target="_blank" rel="noopener" className={classes.navLink}>
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
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
