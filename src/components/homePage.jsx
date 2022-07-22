import React, { Component } from "react";
import { Helmet } from "react-helmet";
import IliyanYordanov from "../imgs/profile/IliyanYordanov.jpg";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* Meta Description */}

        <Helmet>
          <title>Iliyan Yordanov - Home page</title>
          <meta
            name="description"
            content="Home page of the Iliyan Yordanov's portfolio website, a front-end engeneer from Bristol, UK."
          />
          <meta property="image" content={IliyanYordanov}/>
          <meta property="og:title" content="Iliyan Yordanov - Home page" />
          <meta
            property="og:description"
            content="Home page of the Iliyan Yordanov's portfolio website, a front-end engeneer from Bristol, UK."
          />
          <meta property="og:image" content={IliyanYordanov} />
          <meta property="og:url" content={window.location.href} />
        </Helmet>

        <div className="homePage">
          <h1>Iliyan Yordanov</h1>
          <p>Front-end developer</p>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
