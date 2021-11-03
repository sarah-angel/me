import React, { useState } from 'react'
import {
  Typography,
  Box,
  Divider
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel'

export default function Services() {
  const classes = useStyles();

  const [state, setState] = useState({

  })

  return (
    <Box id='services' className={classes.root}>
      <div className={classes.section}>
        <Typography variant='h2' className={classes.title}>Services I Offer</Typography>

        <div className={classes.dividerWrp}>
          <Divider className={classes.divider} />
        </div>

        <div className={classes.list}>
          {[1, 2, 3].map((item, index) => (
            <Box key={index} className={classes.card}>
              <div className={classes.cardIcon}>
                <div className={classes.icon}></div>
              </div>
              <Typography variant='h5' className={classes.cardTitle}>
                Web Development
              </Typography>
              <Typography className={classes.cardText}>
                Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
              </Typography>
            </Box>
          ))}

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
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    '@media (max-width: 400px)': {
      width: 250,
    },
    height: 350,
    backgroundColor: theme.palette.background.paper,
    margin: 20,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'block',
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