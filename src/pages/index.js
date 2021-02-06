import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lander from "../components/lander"
import Features from "../components/features"
import HowItWork from "../components/howitwork"
import "../styles/styles.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Revision 2.0" />
    <Lander />
    <HowItWork />
    <Features />
  </Layout>
)

export default IndexPage
