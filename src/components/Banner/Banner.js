import { Container, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import Carousel from './Carousel';


const useStyles = makeStyles(() =>({
    banner: {
        backgroundImage: "url(./crypto_back1.jpg)",
        
    },
    bannerContent:{
        
        height: 450,
        display: "flex",
        flexDirection : "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline:{
        display:"flex",
        height: "40%",
        flexDirection:"column",
        justifyContent: "center",
        textAlign: "center",    }
}));
const Banner = () => {
    const classes = useStyles();
    
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
            <Typography
                variant='h2'
                style={{
                    fontWeight: "bold",
                    marginBottom :15,
                    fontFamily: "Montserrat",
                }}>
                       Track My Crypto
            </Typography>
            <Typography
            variant = "subtitle2"
            style = {{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
            }}
            >
            Quick Info about your favorite Crypto

            </Typography>
        </div>
        <Carousel />
        </Container>
    </div>
  );
};

export default Banner;