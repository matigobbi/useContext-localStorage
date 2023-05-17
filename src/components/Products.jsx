/* eslint-disable react/prop-types */
import "./Products.css"
import { AddToCartIcon } from './Icons'

export function Products({ products }) {


  return (
    <main className="products">
      <ul>
        {products.slice(0,10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>
                <strong>{product.title}</strong>
              </h3>
            </div>
            <div>
              <AddToCartIcon />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
