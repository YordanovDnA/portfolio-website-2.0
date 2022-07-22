import React from "react";
import ImageAppear from "react-image-appear";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import IliyanYordanov from "../imgs/profile/IliyanYordanov.jpg";
import MikaelaDimova from "../imgs/testimonials/MikaelaDimova.jpg";
import MartinPenchev from "../imgs/testimonials/MartinPenchev.jpg";

const AboutMe = () => {
  const date = new Date();
  const thisYear = date.getFullYear();

  return (
    <React.Fragment>
      {/* Meta description */}

      <Helmet>
        <title>Iliyan Yordanov - About me</title>
        <meta
          name="description"
          content="Front-end engeneer from Bristol, UK. My passion is to programing things. Doesn't matter, is it a website
            or electronic, I love to code and solve problems..."
        />
        <meta property="image" content={IliyanYordanov} />
        <meta property="og:title" content="Iliyan Yordanov - About me" />
        <meta
          property="og:description"
          content="Front-end engeneer from Bristol, UK. My passion is to programing things. Doesn't matter, is it a website
            or electronic, I love to code and solve problems..."
        />
        <meta property="og:image" content={IliyanYordanov} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {/* Description */}

      <div className="aboutMeDescription col-12 row text-left">
        <div className="col-12">
          <h2 className="pageTitle mb-4">
            About <span className="text-blue">Me</span>
            <span id="aboutMeDotsSpec" className="dotsEffect"></span>
          </h2>
        </div>
        <div className="col-md-6 mt-3 mb-3">
          <p className="text-secondColor">
            My passion is to programing things. Doesn't matter, is it a website
            or electronic, I love to code and solve problems.
            <br />
            <br />
            Some of my favourite tools are React, Redux, and I'm very attracted
            to Node.js and Express. Although I'm not exactly a full-stack
            software engineer at the moment, I work very hard to become one. One
            day I would like to work in a big team with lots of professionals,
            developing the future.
            <br />
            <br />
            I'm a dreamer, and I truly believe that technologies are helpful for
            all of us. I love my family and going out with friends. One of my
            favorite things to do is hiking and exploring.
          </p>
        </div>

        <div className="col-md-6 mt-3 mb-3">
          <ul className="">
            <li className="">
              <span className="text-blue">Location: </span>
              <span className="text-secondColor">Bristol, UK</span>
            </li>
            <li className="">
              <span className="text-blue">Email: </span>
              <span className="text-secondColor">
                <a
                  className="text-secondColor"
                  href="mailto:iliyanyyordanov@gmail.com"
                >
                  iliyanyyordanov@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* What I do  */}

      <div className="whatIDo col-12 row text-left">
        <h3 className="col-12 mt-4 mb-4">
          What <span className="text-blue">I Do</span>
          <span id="whatIDoDotsSpec" className="dotsEffect"></span>
        </h3>

        <div className="col-xl-6 mt-3">
          <span className="lnr lnr-code"></span>
          <h4>Software engineering</h4>
          <p className="text-secondColor border rounded p-2">
            I started to code before {thisYear - 2016} years although, I was
            very attracted to computers from a very young. Unfortunately, there
            was not that much information at that time.
            <br />
            <br />
            After proper research for the trends and what programming path to
            follow, I decided to become a full-stack software engineer. At this
            stage, I can say I'm more a front-end developer, but I work hard to
            become full-stack, and one day I will.
            <br />
            <br />
            I'm very passionate about React and Redux, which are well-known
            libraries for front-end developers, and I'm working hard to master
            them. I do have some back-end experience using Node.js, and Express
            for building APIs. Furthermore, I know how to deploy web apps to {}
            <abbr title="Amazon Web Services">AWS</abbr> and Heroku.
          </p>
          <br />
          <br />
          <span className="lnr lnr-laptop-phone"></span>
          <h4>Online Marketing</h4>
          <p className="text-secondColor border rounded p-2">
            To assess the best target group for my clients business, I'm working
            with different tools such as Google Trends, Google Analytics and
            many more. Through the years, I managed a couple of marketing
            campaigns on Facebook and Google Ads. <br />
            <br /> I have regular clients who trust me for their marketing
            campaigns and design. I do most of their posts and manage some of
            their social media accounts.
            <br />
            <br />
            Online marketing is something that makes me proud when I see the
            results. I don't like to waste time and money, so I'm trying to get
            as much as I can with as little as I can.
          </p>
        </div>

        <div className="col-xl-6 mt-3">
          <span className="lnr lnr-laptop-phone"></span>
          <h4>Website design</h4>
          <p className="text-secondColor border rounded p-2">
            I'm a web designer with 2 years of experience designing websites
            using WordPress. For me, WordPress is a quick and cheap solution for
            small and medium businesses, and it's a well known easy to use
            platform with <abbr title="Content Managment Sysyem">CMS</abbr>.
            <br />
            <br />
            What I like the most about WordPress is that you can create a
            website within a day or two, and everything is so easy. Furthermore,
            you can easily add plugins and extend your website to whatever you
            want, or it could be your eCommerce solution. You probably know that
            a significant part of the websites online is built on WordPress.
            <br />
            <br />
            However, WordPress has it's pros and cons. If you'd like to know
            more about it, subscribe to my blog where you can find more
            information.
          </p>
        </div>

        {/* Testimonials */}

        <div className="testimonialsWrapper col-12 row mt-4">
          <h3 className="col-12">
            Testimonials
            <span id="testimonialsDotsSpec" className="dotsEffect"></span>
          </h3>
          <div className="col-xl-6">
            <div className="testimonialImgWrapper">
              <ImageAppear className="testimonialImg" src={MikaelaDimova} />
            </div>
            <p className="testimonialText text-secondColor">
              I'm very happy with the results that I received from Iliyan. He
              made my website look exactly as I asked, and it is working
              perfectly fine. All I got to say is thank you for your help, the
              website is better than I expected!
              <br />
              <br />
              <span>- Mikaela Dimova</span>
              <br />
              <span>
                Founder of
                <Link className="text-blue" to="https://glossmeout.co.uk">
                  {" "}
                  GlossMeOut
                </Link>
              </span>
            </p>
          </div>

          <div className="col-xl-6">
            <div className="testimonialImgWrapper">
              <ImageAppear className="testimonialImg" src={MartinPenchev} />
            </div>
            <p className="testimonialText text-secondColor">
              Exceptionally talented and keen to learn, that's how I can
              describe Iliyan. I was impressed with his ability to work on a
              variety of projects simultaneously without hesitation. It was a
              real pleasure to study and build projects together. He will be a
              great fit for any front-end developer role.
              <br />
              <br />
              <span>- Martin Penchev</span>
              <br />
              <span>LinkedIn</span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
