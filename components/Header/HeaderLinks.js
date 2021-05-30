/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks({ onClick, toggleMenu, closeMenu }) {
  const classes = useStyles();
  const { t } = useTranslation("common");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    toggleMenu();
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (param) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event) => {
    closeMenu();

    setAnchorEl(null);
  };
  const caretClasses = classNames({
    [classes.toggleIcon]: true,
    [classes.caretActive]: Boolean(anchorEl),
  });
  return (
    <ClickAwayListener onClickAway={handleCloseAway}>
      <List className={classes.list}>
        {/* {menu.map((item) => (
        <ListItem
          className={classes.listItem}
          key={item.name}
          onClick={onClick}
        >
          <Link href={{ pathname: item.route, query: { q: item.name } }}>
            <a className={classes.navLink}>{t(`${item.name}`)}</a>
          </Link>
        </ListItem>
      ))} */}
        <ListItem className={classes.listItem} onClick={onClick}>
          <Link href={{ pathname: "tokenomics", query: { q: "Tokenomics" } }}>
            <a className={classes.navLink}>Tokenomics</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem} onClick={onClick}>
          <Link href={{ pathname: "tokenomics", query: { q: "Roadmap" } }}>
            <a className={classes.navLink}>Roadmap</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem} onClick={handleClick}>
          <p
            className={classes.navLink}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Whitepaper <span className={caretClasses} />
          </p>
        </ListItem>
        <ListItem className={classes.listItem} onClick={onClick}>
          <Link
            href={{ pathname: "tokenomics", query: { q: "Smart Contract" } }}
          >
            <a className={classes.navLink}>Smart Contract</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="https://t.me/DefifarmsNFT" target="_blank">
            <a target="_blank" className={classes.navLink}>
              Support
            </a>
          </Link>
        </ListItem>
      </List>
    </ClickAwayListener>
  );
}
