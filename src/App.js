import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
  CssBaseline
} from '@mui/material'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {

  const theme = createTheme({
    palette: {
      text: {
        primary: "#ffffff"
      },
      primary: {
        main: "#f7d608",
        //dark: "#0091ea",
        //light: "#f6ef77"
      },
      secondary : {
        main: '#112240',
      },
      background: {
        paper: '#424242',
        default: "#2e2e2e"
      },
    }
  })
console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </ThemeProvider>

  )
}
