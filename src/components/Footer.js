import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Youtube from "@material-ui/icons/YouTube";
import GitHub from "@material-ui/icons/GitHub";


const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      
      <BottomNavigationAction icon={<GitHub />} className={classes.root} href="https://gitlab.com/Eljili"/>
      <BottomNavigationAction icon={<Youtube />} className={classes.root} href="https://www.youtube.com/channel/UCcEnUCA-FFetc33LoLDqCDQ"/>
      
    </BottomNavigation>
  );
};
export default Footer;
