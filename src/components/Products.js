import React, { useState, useEffect } from "react";
import { getAllProducts as getAllProductsService } from "../services/ProductService";
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

  const [products, setProducts] = useState(exampleProducts);

  useEffect(() => {
    getAllProducts()
  }, []);

  const getAllProducts = async () => {
    const response = await getAllProductsService();
    setProducts(response.products);
  }

  return (
      <div>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;