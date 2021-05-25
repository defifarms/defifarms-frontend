import React, { forwardRef } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

const useStyles = makeStyles(styles);

const GridContainer = forwardRef((props, ref) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid
      ref={ref}
      container
      {...rest}
      className={classes.grid + " " + className}
    >
      {children}
    </Grid>
  );
});

export default GridContainer;
