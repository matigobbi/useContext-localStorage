
import { useState } from "react"
import { Products } from "./components/Products"
import { products } from "./mocks/products.json"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] =useState({
    category: "all",
    minPrice: 0
  })
  
  const filterProducts= (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
          (
            filters.category === "all" ||
            product.category === filters.category
          )
        
      )
    })
  }
  const filteredProducts = filterProducts(products)

  return (
    <>
    Shopping Cart
    <Products products={filteredProducts}/>
    </>
  )
}

export default App
