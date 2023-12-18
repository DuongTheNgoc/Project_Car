import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ProductFulltem() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://65743d90f941bda3f2af8183.mockapi.io/api/qlxe/cars");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {selectedProduct ? (
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src={selectedProduct.image}
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{selectedProduct.name}</h4>
            <p className="card-text">{selectedProduct.description}</p>
          </div>
        </div>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="card bg-light"
            style={{ width: 300 }}
            onClick={() => handleProductClick(product)}
          >
            <img
              className="card-img-top"
              src={product.image}
              alt="Card image"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{product.name}</h4>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
