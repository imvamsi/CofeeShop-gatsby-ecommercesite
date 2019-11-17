import React from "react"
import Product from "./Product"
import { StaticQuery, graphql } from "gatsby"
import Title from "../Globals/Title"
const getProducts = graphql`
  {
    product: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our Products" />
              <div className="row">
                {data.product.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
