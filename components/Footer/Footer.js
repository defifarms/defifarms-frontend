/*eslint-disable*/
import React from "react";
import Link from "next/link";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";

import Button from "components/CustomButtons/Button.js";
import Hidden from "@material-ui/core/Hidden";
import logo from "assets/img/icons/logo.png";
import icon2 from "assets/img/icons/icon-2.png";
import icon3 from "assets/img/icons/icon-3.png";
import icon4 from "assets/img/icons/telegram.png";
import icon5 from "assets/img/icons/tweat.png";
import medium from "assets/img/icons/medium.png";
import linkedin from "assets/img/icons/linkedin.png";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const menu = [
  { route: "/tokenomics", name: "Tokenomics" },
  { route: "/tokenomics", name: "Roadmap" },
  { route: "/litepaper", name: "Litepaper" },
  { route: "/litepaper", name: "icon" },
  { route: "/tokenomics", name: "Smart Contract" },
  // { route: "/tokenomics", name: "Audit" },
  { route: "/tokenomics", name: "Support" },
];

const useStyles = makeStyles(styles);
export default function Footer(props) {
  const { t } = useTranslation("common");
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  return (
    <div className={classes.wrapperImg}>
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
          ) : (
            <ListItem className={classes.listItem} key={item.name}>
              <Link href={{ pathname: item.route, query: { q: item.name } }}>
                <a className={classes.navLink}>{t(`${item.name}`)}</a>
              </Link>
            </ListItem>
          )
        )}
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
              <img
                src={icon5}
                alt="First slide"
                style={{ width: "50px", height: "100%" }}
              />
            </Button>
            <Button
              href="https://t.me/DefifarmsNFT"
              color="transparent"
              target="_blank"
              className={classes.btn}
            >
              <img
                src={icon4}
                alt="First slide"
                style={{ width: "50px", height: "100%" }}
              />
            </Button>
            <Button
              href="https://www.linkedin.com/company/defifarms-inc"
              color="transparent"
              target="_blank"
              className={classes.btn}
            >
              <img
                src={linkedin}
                alt="First slide"
                style={{ width: "50px", height: "100%" }}
              />
            </Button>
            <Button
              href="https://medium.com/@DefiFarmsNFTs"
              color="transparent"
              target="_blank"
              className={classes.btn}
            >
              <img
                src={medium}
                alt="First slide"
                style={{ width: "50px", height: "100%" }}
              />
            </Button>
            <Button
              href="https://github.com/defifarms"
              color="transparent"
              target="_blank"
              className={classes.btn}
            >
              <img
                src={icon2}
                alt="First slide"
                style={{ width: "50px", height: "100%" }}
              />
            </Button>
            <Button
              href="#"
              color="transparent"
              target="_blank"
              className={classes.btn}
            >
              <img
                src={icon3}
                alt="First slide"
                style={{ width: "50px", height: "100%" }}
              />
            </Button>
          </div>
          <div className={classes.text}>
            DefiFarms &copy; {1900 + new Date().getYear()} All Rights Reserved |
            Powered by Binance Smart Chain
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
