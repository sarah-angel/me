import React, { useState } from 'react'
import { 
  Typography,
  Box
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { MenuIcon } from "@heroicons/react/solid";
import Scrollspy from 'react-scrollspy'

import logo from '../assets/logo.png'

export default function Navbar() {
  const classes = useStyles();

  const [state, setState] = useState({
    openMenu: false,
  })

  return (
    <Box className={classes.root}>
      <Box className={classes.appBar}>
      <div className={classes.title}>
        <img src={logo} style={{width: 35}} />
        {/* <a href='#about' className={classes.link}> */}
          <Typography variant='h5' className={classes.titleText}>
            arahK.
          </Typography>
          <Typography variant='h5' style={{color: 'yellow'}} className={classes.titleText}>
            
          </Typography>
        {/* </a> */}
      </div>

      <Box className={classes.navMenu} sx={{display: {md: 'block', xs: 'none'}}}>
      <Scrollspy className={classes.scrollspy}
        items={['home', 'about', 'services', 'work', 'contact']} 
        currentClassName={classes.activeNav} offset={-200} componentTag='div' 
      >
        <li className={classes.li}><a href='#home' className={classes.link}>
          <Typography noWrap  className={classes.navField}>
            Home
          </Typography>
        </a></li>
        <li className={classes.li}><a href='#about' className={classes.link}>
          <Typography noWrap className={classes.navField}>
            About
          </Typography>
        </a></li>
        <li className={classes.li}><a href='#services' className={classes.link}>
          <Typography noWrap className={classes.navField}>
            Services
          </Typography>
        </a></li>
        <li className={classes.li}><a href='#work' className={classes.link}>
          <Typography noWrap className={classes.navField}>
            Work
          </Typography>
        </a></li>
        <li className={classes.li}><a href='#contact' className={classes.link}>
          <Typography noWrap className={classes.navField}>
            Contact
          </Typography>
        </a></li>
      </Scrollspy>
      </Box>

      <Box sx={{display: {md: 'none', xs: 'flex'}}} className={classes.menu}
        onClick={() => setState({...state, openMenu: !state.openMenu})}
      >
        <MenuIcon color='text' height={25} className={classes.menuIcon}/>
        <Typography noWrap className={classes.menuText}>
          MENU
        </Typography>
      </Box>

      </Box>

      {state.openMenu &&
        <Box className={classes.navMenu} sx={{display: {md: 'none', xs: 'block'}, marginTop: 1.5,}}>
          <Scrollspy className={classes.scrollspyXs}
            items={['home', 'about', 'services', 'work', 'contact']} 
            // currentClassName={classes.activeNav} 
            offset={-200} componentTag='div' 
          >
            <li className={classes.li}>
              <a href='#home' className={classes.link}  onClick={() => setState({...state, openMenu: !state.openMenu})}>
              <Typography noWrap  className={classes.navFieldXs}>
                Home
              </Typography>
              </a>
            </li>
            <li className={classes.li}>
              <a href='#about' className={classes.link}  onClick={() => setState({...state, openMenu: !state.openMenu})}>
              <Typography noWrap className={classes.navFieldXs}>
                About
              </Typography>
              </a>
            </li>
            <li className={classes.li}>
              <a href='#services' className={classes.link}  onClick={() => setState({...state, openMenu: !state.openMenu})}>
              <Typography noWrap className={classes.navFieldXs}>
                Services
              </Typography>
              </a>
            </li>
            <li className={classes.li}>
              <a href='#work' className={classes.link}  onClick={() => setState({...state, openMenu: !state.openMenu})}>
              <Typography noWrap className={classes.navFieldXs}>
                Work
              </Typography>
              </a>
            </li>
            <li className={classes.li}>
              <a href='#contact' className={classes.link}  onClick={() => setState({...state, openMenu: !state.openMenu})}>
              <Typography noWrap className={classes.navFieldXs}>
                Contact
              </Typography>
              </a>
            </li>
          </Scrollspy>
        </Box>
      }
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    zIndex: theme.zIndex.drawer,
    //backgroundColor: 'transparent',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 10,
    paddingBottom: 10,
  },
  appBar: {
    //backgroundColor: 'transparent', 
    backgroundColor: theme.palette.background.paper,
    padding: 15,
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  title: {
    flex: 1,
    display: 'flex',
  },
  titleText: {
    marginTop: 'auto',
    paddingBottom: 0,
  },
  row: {
    display: 'flex',
  },
  navMenu: {
    flex: 1,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    marginLeft: 20,
    [theme.breakpoints.down('md')]: {
      alignSelf: 'flex-start',
      justifySelf: 'flex-start',
    }
  },
  scrollspy: {
    justifyContent: 'center',
    display: 'flex',
  },
  scrollspyXs: {
    justifyContent: 'center',
    display: 'block',
  },
  li: {
    listStyle: 'none',
    marginRight: 40,
  },
  navField: {
    fontSize: 18,
    fontWeight: '100',
    verticalAlign: 'center',
    color: 'grey',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  navFieldXs: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: '100',
    verticalAlign: 'center',
    color: 'grey',
    '&:hover': {
      color: theme.palette.text.primary,
    },
    paddingBottom: 15,
  },
  activeNav: {
    borderBottomColor: theme.palette.primary.main,
    borderBottom: '3px solid',
  },
  menu: {
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
    marginRight: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10,
  },
  menuIcon: {
    verticalAlign: 'center',
  }

}))