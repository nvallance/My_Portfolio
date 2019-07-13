import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <StyledHero img={this.props.data.Webdesign.childImageSharp.fluid} />
        <Tours />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    Webdesign: file(relativePath: { eq: "Webdesign.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
