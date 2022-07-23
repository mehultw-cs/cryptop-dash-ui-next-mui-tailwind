import {React, useEffect} from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import darkTheme from "../styles/theme/darkTheme";
import "../styles/globals.css";

import Header from "../components/Header"


const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {

  // useEffect for VantaJS animated background
    useEffect(() =>{
    const threeScript = document.createElement('script');
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");

       //add to Head of the doc.

      document.getElementsByTagName("head")[0].appendChild(threeScript);
      return () => {
        if (threeScript) {
          threeScript.remove();
        }
      };
  },[]);
     


  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
