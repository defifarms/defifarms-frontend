/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const dropdown = [
  {
    name: "Litepaper",
    href: "./documents/DefiFarms_Litepaper.pdf",
  },
  {
    name: "One pager",
    href: "./documents/One_Pager.pdf",
  },
  {
    name: "Infographics",
    href: "https://github.com/defifarms/brand_assets/tree/main/Infographics",
  },
  {
    name: "Tokenomics",
    href: "./documents/Tokenomics.pdf",
  },
  {
    name: "Whitepaper",
    href: "./documents/Defifarms_Whitepaper.pdf",
  },
  {
    href: "./documents/dApp_Roadmap.pdf",
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

export default function HeaderLinks({
  onClick,
  toggleMenu,
  closeMenu,
  istoggleMenu,
}) {
  const classes = useStyles();
  const { t } = useTranslation("common");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    toggleMenu(!!anchorEl);
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
    closeMenu && closeMenu();

    setAnchorEl(null);
  };
  const caretClasses = classNames({
    [classes.toggleIcon]: true,
    [classes.caretActive]: Boolean(anchorEl),
  });

  const subMenu = classNames({
    [classes.none]: Boolean(!istoggleMenu),
    [classes.flex]: Boolean(istoggleMenu),
  });

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
          <Link href="mailto:contact@defifarms.org" target="_blank">
            <a target="_blank" className={classes.navLink}>
              Support
            </a>
          </Link>
        </ListItem>
      </List>
    </ClickAwayListener>
  );
}
