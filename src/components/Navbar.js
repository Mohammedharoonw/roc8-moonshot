import React from "react";
import  {FcShop}  from "react-icons/fc";
import  {FiShoppingCart}  from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({cartItemsCount}) => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <div>
        <Link to="/"><FcShop size={32} /></Link> 
      </div>
      <div className="relative">
        <button className="bg-gray-900 p-2 rounded-full">
          <Link to="/cart"><FiShoppingCart size={24} /></Link> 
          {cartItemsCount > 0 && (
            <span className="bg-yellow-500 text-xs absolute top-0 right-0 rounded-full h-4 w-4 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar


