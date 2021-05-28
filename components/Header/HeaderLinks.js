/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const menu = [
  { route: "/tokenomics", name: "Tokenomics" },
  { route: "/tokenomics", name: "Roadmap" },
  { route: "/litepaper", name: "Litepaper" },
  { route: "/tokenomics", name: "Smart Contract" },
];

export default function HeaderLinks({ onClick }) {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <List className={classes.list}>
      {menu.map((item) => (
        <ListItem
          className={classes.listItem}
          key={item.name}
          onClick={onClick}
        >
          <Link href={{ pathname: item.route, query: { q: item.name } }}>
            <a className={classes.navLink}>{t(`${item.name}`)}</a>
          </Link>
        </ListItem>
      ))}
      <ListItem className={classes.listItem}>
        <Link href="https://t.me/DefifarmsNFT" target="_blank">
          <a target="_blank" className={classes.navLink}>
            Support
          </a>
        </Link>
      </ListItem>
    </List>
  );
}
