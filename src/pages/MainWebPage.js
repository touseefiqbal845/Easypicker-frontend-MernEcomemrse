import React from "react";
import NavBar from "../features/navbar/Navbar-admin";
import HeroSection from "../easyPicker/HeroSection";
import Services from "../easyPicker/Services";
import Trusted from "../easyPicker/Trusted";
import Footer from "../features/common/Footerfirst";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29 ,29, 29, .8)",
    white: "#fff",
    black: " #212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  container: {
    maxWidth: "1500px",
    margin: "0 auto",
  },
  media: {
    mobile: "768px",
    tab: "998px",
    lap: "1350px",
  },
};

const Home = () => {
  const data = {
    name: "easyPicker.pk",
  };

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <HeroSection myData={data} />
        <Services />
        <Trusted />
      </ThemeProvider>

      <Footer className="mt-9" />
    </>
  );
};

export default Home;