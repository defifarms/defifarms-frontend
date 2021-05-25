import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    flexBasis: "auto",
  },
};

const useStyles = makeStyles(styles);

const GridItem = forwardRef((props, ref) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid ref={ref} item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
});

export default GridItem;
