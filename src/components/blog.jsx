import React from "react";
import { Helmet } from "react-helmet";
import IliyanYordanov from "../imgs/profile/IliyanYordanov.jpg";

const Blog = () => {
  return (
    <React.Fragment>
      {/* Meta description */}
      <Helmet>
        <title>Iliyan Yordanov - Blog</title>
        <meta
          name="description"
          content="Blog posts from Iliyan Yordanov, front-end engeneer from Bristol, UK."
        />
        <meta property="image" content={IliyanYordanov} />
        <meta property="og:title" content="Iliyan Yordanov - Blog" />
        <meta
          property="og:description"
          content="Blog posts from Iliyan Yordanov, front-end engeneer from Bristol, UK."
        />
        <meta property="og:image" content={IliyanYordanov} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {/* Blog Posts */}
      <h1>Blog posts</h1>
      <p className="mt-4 display-4">Coming up soon...</p>
    </React.Fragment>
  );
};

export default Blog;
