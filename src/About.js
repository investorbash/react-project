import React from "react";
import styles from "./style.module.css";

const About = ()=> {
    return (
      <div className={styles.about}>
        <h2 className={styles.hash}>Previously Work Experience</h2>
        <p className={styles.pa}>
          I have had a long and illustrious career in variety of trades. Here
          are some highlights
        </p>
        <ul>
          <li className={styles.pa}>2005 - 2008 - work as a typist at flying fingers</li>
          <li className={styles.pa}>
            2008 - 2009 - Perform cutting-edge web design at Coverdale Farm
          </li>
          <li className={styles.pa}>
            2009 - 2011 - Starred in chapter 2 of creating a website
            <tt>The missing manual</tt>
          </li>
        </ul>
        <h2 className={styles.hash}>
          How to Make an Online Portfolio Website?
        </h2>
        <p className={styles.para}>
          Let your work speak for itself. An online portfolio website makes your
          work accessible to anyone, anywhere, giving you a better chance to
          grow your business. With Format, you create a portfolio in 3 simple
          steps: Step 1: Create an account and tell us what kind of artist you
          are. Do you want to build a photography portfolio or a designers’
          website? Are you an illustrator or a fashion designer? Do you produce
          killer video content? We want to help you create a digital portfolio
          site that'll put your work in the spotlight. Once we have a better
          understanding of who you are and what you do, we'll offer themes that
          are most popular among users like you. We'll also ask you questions
          about your experience building a portfolio site and what kind of
          components you wish to have. This will help us fine tune your site.
          Based on your answers, Format will suggest different themes. Just pick
          one and seif it fits–don't worry if you change your mind, you can
          change yourtheme at any time.
        </p>
        <h3 className={styles.hash}>
          Step 2: Choose a theme and create a digital portfolio.
        </h3>
        <p className={styles.para}>
          Based on your answers, Format will suggest different themes. Just pick
          one and see if it fits–don't worry if you change your mind, you can
          change your theme at any time.
        </p>
        <h3 className={styles.hash}>
          Step 3: Make sure you’ve got the right images and upload them.
        </h3>
        <p className={styles.para}>
          Once you're registered, you can start to upload images, explore more
          themes, and tweak your site to perfection! We also have a friendly
          team of Format Experts who can help you create your best portfolio.
          Our hands-on creators can answer questions and guide you through the
          process of building your portfolio any time of the day. Putting your
          best foot forward has never been easier.
        </p>
      </div>
    );
}

export default About;