import React, { useState } from 'react'
import {
  Typography,
  Box,
  Divider
} from '@mui/material'
import { makeStyles } from '@mui/styles';

import img from './bgr.jpg'

export default function Home() {
  const classes = useStyles();

  const [state, setState] = useState({

  })

  return (
    <Box id='home' className={classes.root}>
      <div className={classes.section}>
        <Typography variant='h5' className={classes.hello} >Hi, I am</Typography>
        <Typography variant='h3' className={classes.fullname} >Sarah-Angel P. Kiboma</Typography>

        <Divider className={classes.divider} />

        <Typography variant='h4' className={classes.quote} > &nbsp;&nbsp; A creative and innovative Software Developer</Typography>
      </div>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    paddingTop: 100,
    height: '100vh',
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
    justifyContent: 'center',
  },
  section: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      marginLeft: '10%',
      paddingLeft: 0,
      marginTop: '10%',
    },
    padding: 20,
    marginTop: '20%',
  },
  hello: {
    marginLeft: 10,
  },
  fullname: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    }
  },
  divider: { 
    height: 3, 
    width: 30, 
    textAlign: 'left', 
    marginLeft: 0, 
    display: 'inline-block', 
    backgroundColor: 'red', 
    marginBottom: 3 
  },
  quote: {
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    }
  }


}))