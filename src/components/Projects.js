import React, { useState } from 'react'
import {
  Typography,
  Box,
  Divider
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

import { projects } from '../data'

export default function Projects() {
  const classes = useStyles();

  const [state, setState] = useState({

  })

  const responsiveCarousel = {
    desktop: {
      breakpoint: { max: 3000, min: 1204 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1204, min: 900 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  return (
    <Box id='work' className={classes.root}>
      <div className={classes.section}>
        <Typography variant='h2' className={classes.title}>Previous Work</Typography>

        <div className={classes.dividerWrp}>
          <Divider className={classes.divider} />
        </div>

        <div>
        <Carousel responsive={responsiveCarousel}
          className={classes.list}
          removeArrowOnDeviceType={["mobile"]}
          showDots infinite renderButtonGroupOutside={true}
        >
          {projects.map((item, index) => (
            <Box key={index} className={classes.card}>
              <div className={classes.cardIcon}>
                <img src={item.image} style={{width: 200}}/>
              </div>
              <Typography variant='h5' className={classes.cardTitle}>
                Web Development
              </Typography>
              <Typography className={classes.cardText}>
                Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use.
              </Typography>
            </Box>
          ))}
        </Carousel>
        </div>

      </div>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: 100, //toolbar
  },
  section: {
    [theme.breakpoints.up('md')]: {
      //width: '70%',
    }
  },
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    }
  },
  dividerWrp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    height: 3,
    width: '20%',
    maxWidth: 100,
    display: 'inline-block',
    backgroundColor: theme.palette.primary.main,
    marginBottom: 10,
    marginTop: 10,
  },
  list: {
    marginTop: 20,
    width: '90vw',
    //backgroundColor: 'red',
    alignItems: 'center',
    paddingBottom: 25,
  },
  card: {
    width: 350,
    '@media (max-width: 400px)': {
      width: 250,
    },
    height: 350,
    backgroundColor: theme.palette.background.paper,
    //marginLeft: 20,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardIcon: {
    display: 'flex',
    marginTop: 20,
    justifyContent: 'center',
  },
  icon: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    borderRadius: '50%',
    textAlign: 'center',
  },
  cardTitle: {
    textAlign: 'center',
    padding: 10,
  },
  cardText: {
    textAlign: 'center',
    padding: 10,
  },
  info: {
    textAlign: 'center',
    marginTop: 20,
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    }
  },

}))