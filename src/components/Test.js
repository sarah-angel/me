import React, { useState } from 'react'
import { 
  Typography,
  Box,
  Divider
} from '@mui/material'
import { makeStyles } from '@mui/styles';

export default function Test() {
  const classes = useStyles();

  const [state, setState] = useState({

  })

  return (
    <Box id='about' className={classes.root}>
      <div className={classes.section}>
        <Typography variant='h2' className={classes.title}>Testing</Typography>
      
        <div className={classes.dividerWrp}>
          <Divider className={classes.divider}/>
        </div>

        <Typography className={classes.info}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </Typography>

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
    width: '70%',
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