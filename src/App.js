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
        main: "#ff0000",
        //dark: "#0091ea",
        //light: "#f6ef77"
      },
      background: {
        paper: '#424242',
        default: "#2e2e2e"
      },
    }
  })

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
