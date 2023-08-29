import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    alert("Item Added to Cart!")
    if (count > 0) {
      dispatch(addItem({ ...product, count }));
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-4 px-4">
      <div className="flex">
        <img
          src={product.image}
          alt={product.title}
          className="w-1/3 h-auto object-contain"
        />
        <div className="ml-8">
          <h1 className="text-gray-900 font-bold text-2xl mb-2">{product.title}</h1>
          <p className="text-gray-700 text-base">{product.description}</p>
          <div className="flex items-center mt-4">
            <span className="font-bold text-xl">${product.price}</span>
            <div className="ml-4 flex">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="mx-2 font-bold text-xl">{count}</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${
              count === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleAddToCart}
            disabled={count === 0}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
