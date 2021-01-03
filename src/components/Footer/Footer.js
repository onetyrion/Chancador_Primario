/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";
import { home } from "variables/general";
const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href={home} className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://distritocandelaria.cl"
                target="_blank"
                className={classes.block}
              >
                Distrito Candelaria
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://lundinmining.com/"
                target="_blank"
                className={classes.block}
              >
                Lundin Mining
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block}>
                Equipo de desarrollo
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.github.com/onetyrion"
                target="_blank"
                className={classes.a}
              >
                &copy; {1900 + new Date().getYear()} ByteNet, Repositorio del
                sistema
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}
