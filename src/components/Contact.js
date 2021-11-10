import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Mail from "@material-ui/icons/Mail";
import Linkedin from "@material-ui/icons/LinkedIn";
import Call from "@material-ui/icons/Call";
import WhatsApp from "@material-ui/icons/WhatsApp";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#2222",
    height:700,
    
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "10.8rem",
      },
    },
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Mail />} className={classes.root} href="mailto:salek.eljili@gmail.com"/>
      <BottomNavigationAction icon={<Linkedin />} className={classes.root} href="https://www.linkedin.com/in/saleck-el-jili-b56823175/"/>
      <BottomNavigationAction icon={<Call />} className={classes.root} href="tel:+33624020215"/>
      <BottomNavigationAction icon={<WhatsApp />} className={classes.root} href="https://wa.me/33624020215"/>
      <BottomNavigationAction icon={<GitHub />} className={classes.root} href="https://gitlab.com/Eljili" />
    </BottomNavigation>
  );
};

export default Contact;
