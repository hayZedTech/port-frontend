import { useState } from "react";
import { Link, useNavigate, Route, Routes } from "react-router-dom";


import sneakers from "./images/pair-comfortable-sport-shoes-sporty-600nw-2125635932.webp";
import watch from "./images/pexels-joey-nguy-n-1056657-2113994.jpg";
import shirt from "./images/images.jfif";
import jacket from "./images/images (1).jfif";

const products = [
  { id: 1, name: "Blue Sneakers", price: 40, image: sneakers },
  { id: 2, name: "Aqua Watch", price: 60, image: watch },
  { id: 3, name: "Ocean Shirt", price: 30, image: shirt },
  { id: 4, name: "Sky Jacket", price: 80, image: jacket },
];

const Navbar = ({ cartCount }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid d-flex align-items-center">
      <Link className="navbar-brand fw-bold btn btn-secondary px-4" to="/ecommerce">
        Shop
      </Link>
      <ul className="list-unstyled">
        <li>
          <Link to="/ecommerce/cart" className="btn btn-light">
            Cart <span className="badge bg-danger">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

const Shop = ({ addToCart }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-4">Shop Our Products</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card shadow-lg h-100">
              <img src={product.image} className="card-img-top" alt={product.name} style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-info">${product.price}</p>
                <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cart = ({ cartItems, updateCart, removeFromCart }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="row justify-content-center">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card shadow-lg d-flex flex-row">
                  <img src={item.image} className="card-img-left" alt={item.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-info">Price: ${item.price}</p>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-secondary btn-sm" onClick={() => updateCart(item.id, -1)}>-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="btn btn-secondary btn-sm" onClick={() => updateCart(item.id, 1)}>+</button>
                    </div>
                    <button className="btn btn-danger btn-sm mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <h4>Total Quantity: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</h4>
            <h4>Total Price: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export const Ecommerce = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCart = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + change } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Shop addToCart={addToCart} />} />
        <Route path="cart" element={<Cart cartItems={cart} updateCart={updateCart} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  );
};
