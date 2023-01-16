import React, { useState, useEffect } from "react";
import { getAllProducts as getAllProductsService, deleteProduct  } from "../services/ProductService";
import Item from "./Item";

const exampleProducts = [{
    name:'Fleece Jacket',
    price: {
      formatted_with_symbol: 600,
    },
    description: 'Be better prepared for anything Mother Nature can throw at you with this fleece jacket. When you step outside and find adventure, know that this jacket will keep you feeling nice and toasty',
    permalink:'jacket',
    quantity:1,
    variant: 'color'
}]

function Products() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts()
  }, []);
  
  const getAllProducts = async () => {
    const response = await getAllProductsService();
    setProducts(response.products);
  }

  const removeProduct = async (id) => {
    await deleteProduct(id);
    getAllProducts()
  }

  return (
      <div className="d-flex flex-row">
      {products && products.length > 0  ? products.map((product) => (
        <Item key={product.id} {...product} removeProduct={removeProduct}/>
      )) : <div style={{color:'white',fontSize:'48px',paddingTop:'25%',paddingLeft:'35%'}}>No Products Available</div>}
    </div>
  );
}

export default Products;