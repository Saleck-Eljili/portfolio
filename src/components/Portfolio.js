import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/Capture.PNG";
import project2 from "../images/Capture2.PNG";
import project10 from "../images/Capture10.PNG";
import project3 from "../images/javascript-fullstack.jpg";
import project30 from "../images/netflix.png";
import project300 from "../images/susten.PNG";
import project3000 from "../images/fondblanc.png";

import image1 from "../images/react.jpg";
import image2 from "../images/Spotify.png";
import image3 from "../images/motion.png";
import image4 from "../images/mysql.jpg";
import image5 from "../images/node.png";
import image6 from "../images/django.png";
import image7 from "../images/laravel-logo.png";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Git from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "My Portfolio",
    description: "portfolio avec react JS et Material-ui",
    image: project30,
    link: "https://github.com/Saleck-Eljili/portfolio",
    image1: image1,
  },
  {
    name: "netflix clone",
    description: "netflix clone avec react-typescript et API themoviedb (TMDB)",
    image: project30,
    link: "https://github.com/Saleck-Eljili/netflix-clone",
    image1: image1,
  },
  {
    name: "qwestTV test",
    description: "CRUD react js frontend et node mysql backend (rest API) ",
    image: project3,
    link: "https://gitlab.com/Eljili/qwesttv_test_alternance_saleck_eljili",
    image1: image1,
    image2: image5,
    image3: image4,
  },
  {
    name: "Sustenecho test",
    image: project300,
    link: "https://github.com/Saleck-Eljili/sustainecho",
    description: `API rest backend Django-python et frontend react js dans le cadre d'un test`,
    image1: image1,
    image2: image6,
  },
  {
    name: "Music Search App",
    description: `Développement d’une application de music en ReactJS et API Spotify.`,
    image: project1,
    link: "https://gitlab.com/Eljili/spotify-music-search-app",
    image1: image1,
    image2: image2,
  },
  {
    name: "AMSA Fourniture",
    description: "Un site de e-commerce pour fournitures scolaire avec Laravel",
    image: project10,
    web: "https://amsafourniture.com/",
    image1: image7,
    image2: image4,
  },
  {
    name: "Les-PC-project",
    description: `Création d’une application web ludique promouvant le tri de déchets. `,
    image: project2,
    web: "https://hackathon-group13.web.app/",
    image1: image1,
    image2: image3,
  },

  {
    name: "COURS JAVA APP",
    image: project3000,
    description: ` Création d’une APPLICATION ANDROID COURS JAVA en JQueryMobile et CORDOVA`,
  },
  {
    name: "Netflix clone",
    description: ` Création d’un clone de netflix avec Angular et API TMDB`,
    image: project30,
  },
  {
    name: "User crud",
    image: project3000,
    description: ` Mise en œuvre d’une API Rest avec PHP et son utilisation avec un front JQueryMobile`,
  },
  {
    name: "ChifAPP",
    image: project3000,
    description: ` Création d’un Logiciel de Chiffrement et déchiffrement classique en PYTHON`,
  },
  {
    name: "my LABO",
    image: project3000,
    description: `  Création d’un Logiciel pour la gestion d’un Laboratoire de recherche avec JAVA`,
  },
  {
    name: "Cabinet",
    image: project3000,
    description: `  Création d’un Logiciel de gestion d’un cabinet médical avec JAVA`,
  },
  {
    name: "Notes",
    image: project3000,
    description: `   Création d’un Logiciel gestion des notes des étudiants de la L1TDSI en C`,
  },
  {
    name: "Boubou",
    image: project3000,
    description: `   Création d’un Site D’achat et vente avec WordPress`,
  },
  {
    name: "ChifMOd",
    image: project3000,
    description: `   Création d’un Logiciel de Chiffrement et déchiffrement moderne en Crypto-JAVA`,
  },
  {
    name: "eljilishop",
    image: project3000,
    description: `    Développement d’un site e-commerce avec Symfony (en cours)`,
  },
  {
    name: "Taxi-commun",
    image: project3000,
    description: `    Une application pour la gestion de transport en commun avec ReactNative(en cours)`,
  },
  {
    name: "CU-stock",
    image: project3000,
    description: `Création d’un Logiciel de gestion de stock de produit et facturation des ventes en JAVA`,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <BottomNavigation className={classes.bottomNavContainer}>
                  {project.link ? (
                    <BottomNavigationAction
                      icon={<Git />}
                      className={classes.root}
                      href={project.link}
                    />
                  ) : project.web ? (
                    <BottomNavigationAction
                      icon={<LanguageIcon />}
                      className={classes.root}
                      href={project.web}
                    />
                  ) : (
                    <BottomNavigationAction className={classes.root} />
                  )}
                  <BottomNavigationAction className={classes.root} />
                  {project.image1 ? <img src={project.image1} alt="img" /> : ""}
                  {project.image2 ? <img src={project.image2} alt="img" /> : ""}
                  {project.image3 ? <img src={project.image3} alt="img" /> : ""}
                </BottomNavigation>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
