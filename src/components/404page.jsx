import React, { Component } from "react";
import { Helmet } from "react-helmet";
import IliyanYordanov from "../imgs/profile/IliyanYordanov.jpg";

class Page404 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Iliyan Yordanov - 404</title>
          <meta
            name="description"
            content="The page your're looking for is not found. Go back to my homepage. "
          />
          <meta property="image" content={IliyanYordanov} />
        </Helmet>
        <div className="page404">
          <h1>Oups..Page not found!</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Page404;
