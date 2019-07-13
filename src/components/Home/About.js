import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "Webdesign.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout);

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>hey there</h4>
          <p>
            Hello my name is Nick Vallance and currently enrolled at the University of Houston pursuing a degree in Computer Information Systems
          </p>
          <p>
            I have experience with mutliple programming languages that include Java, JavaScript, C++, and PHP, but I consider web development
            to be my passion. I love creating slick user interfaces and an overall great user experience.
          </p>

          <AniLink fade to="/blog" className="btn-primary">
            my blog
          </AniLink>

        </article>
      </div>
    </section>
  )
};

export default About
