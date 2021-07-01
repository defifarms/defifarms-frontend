/*eslint-disable*/
import React from "react";
import Link from "next/link";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { dropdown } from "constants/roadmap.js";
const useStyles = makeStyles(styles);

const subList = (navLink) =>
  dropdown.map((item) => (
    <Link href={item.href} key={item.name}>
      <a target="_blank" re="noopener" className={navLink}>
        {item.name}
      </a>
    </Link>
  ));

export default function HeaderLinks({
  onClick,
  closeMenu,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseAway = (event) => {
    closeMenu && closeMenu();

    setAnchorEl(null);
  };

  return (
    <ClickAwayListener onClickAway={handleCloseAway}>
      <List className={classes.list}>
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
        <ListItem className={classes.listItem} onClick={onClick}>
          <Link
            href={{ pathname: "tokenomics", query: { q: "Smart Contract" } }}
          >
            <a className={classes.navLink}>Smart Contract</a>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href={{ pathname: "/", query: { q: "team" } }}>
            <a className={classes.navLink}>Team</a>
          </Link>
        </ListItem>
      </List>
    </ClickAwayListener>
  );
}
