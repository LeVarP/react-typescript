import React, { useEffect, useState } from 'react';
import { Product } from './components/Product';
//import { products } from './data/products';
import axios from 'axios';
import { IProduct } from './models'
import './index.css'

function App() {

  const[products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchProducts() {
    setLoading(true)
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
    setProducts(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {loading && <div className='div_loader'><div className='circle_loader'></div></div>}
      <div className="container mx-auto max-w-2xl pt-5">
        {products.map(product => <Product product={product} key={product.id}/>)}
      </div>
    </>
  )
}

export default App;
