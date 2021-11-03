import React, { useState } from 'react'
import {
  Typography,
  Box,
  Divider
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Services() {
  const classes = useStyles();

  const [state, setState] = useState({

  })

  return (
    <Box id='contact' className={classes.root}>
      <div className={classes.section}>
        <Typography variant='h2' className={classes.title}>Contact Me</Typography>

        <div className={classes.dividerWrp}>
          <Divider className={classes.divider} />
        </div>

        <Box className={classes.card}>
          <div className={classes.address}>
            <LocationOnIcon color='primary'/>
            <Typography className={classes.cardText}>
              Mwenge, Dar es Salaam, Tanzania
            </Typography>
          </div>
          <div className={classes.address}>
            <PhoneIcon color='primary'/>
            <Typography className={classes.cardText}>
              +255 782 491 477
            </Typography>
          </div>
          <div className={classes.address}>
            <EmailIcon color='primary'/>
            <Typography className={classes.cardText}>
              sarahangelk@gmail.com
            </Typography>
          </div>
        </Box>
        
        <div className={classes.socials}>
          <div className={classes.socialIcon}>
            <GitHubIcon />
          </div>
          <div className={classes.socialIcon}>
            <InstagramIcon />
          </div>
          <div className={classes.socialIcon}>
            <FacebookIcon />
          </div>
          <div className={classes.socialIcon}>
            <TwitterIcon />
          </div>
          <div className={classes.socialIcon}>
            <LinkedInIcon />
          </div>
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
  socials: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 50,
    height: 50,
    [theme.breakpoints.down('sm')]: {
      width: 30,
      height: 30,
      margin: 5,
    },
    backgroundColor: 'white',
    borderRadius: '50%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: theme.palette.primary.main,
    '&:hover':{
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.main,
    }
  },
  address: {
    display: 'flex', 
    verticalAlign: 'center',
    padding: 15,
  },
  card: {
    margin: 20,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'block',
  },
  cardTitle: {
    textAlign: 'center',
    padding: 10,
  },
  cardText: {
    textAlign: 'left',
    paddingLeft: 10,
    verticalAlign: 'center',
  },

}))