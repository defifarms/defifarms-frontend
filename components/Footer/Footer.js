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
import { dropdown } from "constants/roadmap.js";

const subList = (navLink) =>
  dropdown.map((item) => (
    <Link href={item.href} key={item.name}>
      <a target="_blank" className={navLink} rel="noopener">
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

  const subItemClasses = classNames({
    [classes.subItem]: true,
    [classes.navLink]: true,
  });

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
                  rel="noopener"
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
              <img src={logo} alt="DeFiFarms" className={classes.logo} />
            </a>
          </Link>
        </Hidden>
        <List className={classes.wrapper}>
          {menu.map((item) =>
            item.name === "icon" ? (
              <Hidden key={item} smDown implementation="css" key={item.name}>
                <Link href="/">
                  <a>
                    <img src={logo} alt="DeFiFarms" className={classes.logo} />
                  </a>
                </Link>
              </Hidden>
            ) : item.name === "Whitepaper" ? (
              <ListItem className={classes.listItem} key={item.name}>
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
            <Link href={{ pathname: "/", query: { q: "team" } }}>
              <a className={classes.navLink}>Team</a>
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
                re="noopener"
                className={classes.btn}
              >
                <img src={icon5} alt="First slide" />
              </Button>
              <Button
                href="https://t.me/DefifarmsNFT"
                color="transparent"
                target="_blank"
                re="noopener"
                className={classes.btn}
              >
                <img src={icon4} alt="First slide" />
              </Button>
              <Button
                href="https://www.linkedin.com/company/defifarms-inc"
                color="transparent"
                target="_blank"
                re="noopener"
                className={classes.btn}
              >
                <img src={linkedin} alt="First slide" />
              </Button>
              <Button
                href="https://medium.com/@DefiFarmsNFTs"
                color="transparent"
                target="_blank"
                re="noopener"
                className={classes.btn}
              >
                <img src={medium} alt="First slide" />
              </Button>
              <Button
                href="https://github.com/defifarms"
                color="transparent"
                target="_blank"
                re="noopener"
                className={classes.btn}
              >
                <img src={icon2} alt="First slide" />
              </Button>
              <Button
                href="https://bscscan.com/token/0x2307DfB065CF1c9c5bC0f3435b49830C0AB86847"
                color="transparent"
                target="_blank"
                re="noopener"
                className={classes.btn}
              >
                <img src={icon3} alt="First slide" />
              </Button>
              <Button
                href="https://www.reddit.com/user/DeFiFarmsNFTs"
                color="transparent"
                target="_blank"
                re="noopener"
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
              DeFiFarms &copy; {1900 + new Date().getYear()} All Rights Reserved
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
