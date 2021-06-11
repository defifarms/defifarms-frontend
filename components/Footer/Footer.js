/*eslint-disable*/
import React, { useState } from "react";
import Link from "next/link";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import Hidden from "@material-ui/core/Hidden";
import logo from "assets/img/icons/logo.png";
import icon2 from "assets/img/icons/icon-2.png";
import icon3 from "assets/img/icons/icon-3.png";
import icon4 from "assets/img/icons/telegram.png";
import icon5 from "assets/img/icons/tweat.png";
import medium from "assets/img/icons/medium.png";
import linkedin from "assets/img/icons/linkedin.png";
import redit from "assets/img/icons/redit.png";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";
const dropdown = [
  {
    name: "Litepaper",
    href: "https://drive.google.com/file/d/1l_jlB_25GLN7_trv42A_7CB6bcG3ko80/view?usp=sharing",
  },
  {
    name: "One pager",
    href: "https://drive.google.com/file/d/1e-N5mEPfdEJO-Q76LZZIhEVOqC1wyKyJ/view?usp=sharing",
  },
  {
    name: "Infographics",
    href: "https://github.com/defifarms/brand_assets/tree/main/Infographics",
  },
  {
    name: "Tokenomics",
    href: "https://github.com/defifarms/brand_assets/blob/main/Tokenomics.pdf",
  },
  {
    name: "Whitepaper",
    href: "https://drive.google.com/file/d/16rlbSp4cd_RpGDuPp7VPBpKeGTJ8_yYb/view?usp=sharing",
  },
  {
    href: "https://github.com/defifarms/brand_assets/blob/main/dApp%20Roadmap.pdf",
    name: "dApp Roadmap",
  },
];

const subList = (navLink) =>
  dropdown.map((item) => (
    <Link href={item.href} key={item.name}>
      <a target="_blank" className={navLink}>
        {item.name}
      </a>
    </Link>
  ));

const menu = [
  { route: "/tokenomics", name: "Tokenomics" },
  { route: "/tokenomics", name: "Roadmap" },
  { route: "/litepaper", name: "Whitepaper" },
  { route: "/litepaper", name: "icon" },
  { route: "/tokenomics", name: "Smart Contract" },
];

const useStyles = makeStyles(styles);
export default function Footer(props) {
  const { t } = useTranslation("common");
  const classes = useStyles();
  const { whiteFont } = props;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  const caretClasses = classNames({
    [classes.toggleIcon]: true,
    [classes.caretActive]: Boolean(anchorEl),
  });
  const subItemClasses = classNames({
    [classes.subItem]: true,
    [classes.navLink]: true,
  });

  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleClick = (event) => {
    setToggleMenu(!toggleMenu);
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setToggleMenu(false);
  };

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <div className={classes.wrapperImg}>
        {toggleMenu && (
          <div className={classes.submenu}>
            {dropdown.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  onClick={closeMenu}
                  target="_blank"
                  className={subItemClasses}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        )}
        <Hidden smUp implementation="js">
          <Link href="/">
            <a>
              <img src={logo} alt="DefiFarms" className={classes.logo} />
            </a>
          </Link>
        </Hidden>
        <List className={classes.wrapper}>
          {menu.map((item) =>
            item.name === "icon" ? (
              <Hidden key={item} smDown implementation="css" key={item.name}>
                <Link href="/">
                  <a>
                    <img src={logo} alt="DefiFarms" className={classes.logo} />
                  </a>
                </Link>
              </Hidden>
            ) : item.name === "Whitepaper" ? (
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  noLiPadding
                  navDropdown
                  buttonText="Whitepaper"
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent",
                  }}
                  dropdownList={subList(classes.navLink)}
                />
              </ListItem>
            ) : (
              <ListItem className={classes.listItem} key={item.name}>
                <Link href={{ pathname: item.route, query: { q: item.name } }}>
                  <a className={classes.navLink}>{t(`${item.name}`)}</a>
                </Link>
              </ListItem>
            )
          )}
          <ListItem className={classes.listItem}>
            <Link href="mailto:contact@defifarms.org" target="_blank">
              <a target="_blank" className={classes.navLink}>
                Support
              </a>
            </Link>
          </ListItem>
        </List>
        <footer className={footerClasses}>
          <div className={classes.container}>
            <div>
              <Button
                href="https://twitter.com/DeFiFarmsNFTs"
                color="transparent"
                target="_blank"
                className={classes.btn}
              >
                <img src={icon5} alt="First slide" />
              </Button>
              <Button
                href="https://t.me/DefifarmsNFT"
                color="transparent"
                target="_blank"
                className={classes.btn}
              >
                <img src={icon4} alt="First slide" />
              </Button>
              <Button
                href="https://www.linkedin.com/company/defifarms-inc"
                color="transparent"
                target="_blank"
                className={classes.btn}
              >
                <img src={linkedin} alt="First slide" />
              </Button>
              <Button
                href="https://medium.com/@DefiFarmsNFTs"
                color="transparent"
                target="_blank"
                className={classes.btn}
              >
                <img src={medium} alt="First slide" />
              </Button>
              <Button
                href="https://github.com/defifarms"
                color="transparent"
                target="_blank"
                className={classes.btn}
              >
                <img src={icon2} alt="First slide" />
              </Button>
              <Button
                href="https://bscscan.com/token/0x2307DfB065CF1c9c5bC0f3435b49830C0AB86847"
                color="transparent"
                target="_blank"
                className={classes.btn}
              >
                <img src={icon3} alt="First slide" />
              </Button>
              <Button
                href="https://www.reddit.com/user/DeFiFarmsNFTs"
                color="transparent"
                target="_blank"
                className={classes.btn}
              >
                <img
                  src={redit}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </Button>
            </div>
            <div className={classes.text}>
              DefiFarms &copy; {1900 + new Date().getYear()} All Rights Reserved
              | Power by <span className={classes.icon} /> Binance Smart Chain
            </div>
          </div>
        </footer>
      </div>
    </ClickAwayListener>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
