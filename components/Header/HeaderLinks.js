/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const dropdown = [
  {
    name: "Litepaper",
    href: "https://github.com/defifarms/brand_assets/blob/main/DefiFarms%20Litepaper.pdf",
  },
  {
    name: "One pager",
    href: "https://github.com/defifarms/brand_assets/blob/main/One%20Pager.pdf",
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
    href: "https://github.com/defifarms/brand_assets/blob/main/Defifarms%20Whitepaper.pdf",
  },
];
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
          <Hidden mdUp implementation="js">
            <div className={subMenu}>
              {dropdown.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    target="_blank"
                    className={classes.navLink1}
                    onClick={onClick}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <Link
                href="https://bscscan.com/address/0x2307DfB065CF1c9c5bC0f3435b49830C0AB86847"
                target="_blank"
              >
                <a target="_blank" className={classes.navLink1}>
                  dApp Roadmap
                </a>
              </Link>
            </div>
          </Hidden>
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
