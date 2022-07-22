import React from "react";
import ReactImageAppear from "react-image-appear";
import { portfolio } from "./../data/portfolio";
import { Helmet } from "react-helmet";
import IliyanYordanov from "../imgs/profile/IliyanYordanov.jpg";

const Portfilio = (props) => {
  return (
    <React.Fragment>
      {/* Meta description */}
      <Helmet>
        <title>Iliyan Yordanov - Portfolio</title>
        <meta
          name="description"
          content="The portfolio of Iliyan Yordanov, front-end engeneer from Bristol, UK. On this page you can find all my projects I have ever built.  "
        />
        <meta property="image" content={IliyanYordanov} />
        <meta property="og:title" content="Iliyan Yordanov - Portfolio" />
        <meta
          property="og:description"
          content="The portfolio of Iliyan Yordanov, front-end engeneer from Bristol, UK. On this page you can find all my projects I have ever built. "
        />
        <meta property="og:image" content={IliyanYordanov} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {/* Portfolio */}
      <div className="col-12 row">
        <h1 className="col-12">Portfolio</h1>
        {portfolio.map((project) => {
          return (
            <div key={project.id} className="col-xl-6 col-12 text-left mt-4">
              <h4 className="mt-4">{project.info.name}</h4>
              <ReactImageAppear
                onClick={() => props.history.push(`/project/${project.id}`)}
                className="portfolioThumbnails rounded bordered w-100"
                src={project.photos.thumbnail}
                placeholderClass="rounded ReactImageAppearPlaceholder"
              />
            </div>
          );
        })}
        <div className="col-12 alert alert-info" role="alert">
          <strong>Note:</strong> These are not my only projects. More will be
          added soon!
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfilio;
