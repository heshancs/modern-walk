import React from "react";
import Card from "./Card";
import { IProductData } from "../interfaces/IProductData";

interface ProductListProps {
  products: IProductData[];
  categoryName?: string;
}

// TODO: This filtering logic is temporary and intended for prototyping purposes.
// It filters products based on the specified category, specifically focusing on clothing categories.
const filterProductsByCategory = (products: IProductData[], category: string) => {
  return products.filter((product) => product.category?.includes(category));
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  categoryName,
}) => {
  const filteredProducts = categoryName
    ? filterProductsByCategory(products, "clothing")
    : products;

  return (
    <div className="container">
      <div className="row">
        {categoryName ? <h2>{categoryName}</h2> : <h2>Flash Sale</h2>}

        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
