import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"
import { FaGulp } from "react-icons/fa"
import Navbar from "../components/Globals/Navbar"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from '../components/Home/Info'

const IndexPage = ({ data }) => (
  <Layout>
    <Navbar />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="regular joe's"
    />
    <Info/>
    
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
