import React from "react"
import Img from "gatsby-image"
export default function Products({ product }) {
  console.log(product.image.fluid)
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>{product.price}</h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="https://fervent-swirles-8d1b5b.netlify.com/"
            //   data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image={product.image.fluid.src}
            data-item-name={product.title}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
