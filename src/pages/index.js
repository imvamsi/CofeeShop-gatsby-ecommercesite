import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"
import { FaGulp } from "react-icons/fa"
import Navbar from "../components/Globals/Navbar"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaGulp />
  </Layout>
)

export default IndexPage
