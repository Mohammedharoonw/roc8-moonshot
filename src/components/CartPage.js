import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto my-4 px-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex my-2">
              <img src={item.image} alt={item.title} className="w-1/6 h-auto object-contain mr-2" />
              <Link to={`/products/${item.id}`} className="text-blue-500 hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
