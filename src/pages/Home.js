import { Grid } from "@material-ui/core";
import React from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import Main from "../component/main/Main";


function Home() {
  return (
    <>
        <Grid container item>
          <Header/>
        </Grid>
        <Grid container item>
          <Main/>
        </Grid>
        <Grid container item>
          <Footer/>
        </Grid>
    </>
  );
}

export default Home;