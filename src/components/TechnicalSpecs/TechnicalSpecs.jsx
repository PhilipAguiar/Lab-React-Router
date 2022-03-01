import React from 'react'


function TechnicalSpecs({product}) {
console.log(product)

  return (
    <>
    <h1>Technical Specs</h1>
    <p>{product.technicalSpecs}</p>
    </>
  )
}

export default TechnicalSpecs