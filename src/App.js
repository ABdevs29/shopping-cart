import { useState } from "react";
import "./App.css";
import HeadBanner from "./HeadBanner";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const mobiles = [
  {
    id: 0,
    name: "Samsung",
    model: "S20 FE",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-fe-5g.jpg",
    currency: "₹",
    price: 50999,
    rating: 4.4,
  },
  {
    id: 1,
    name: "Apple",
    model: "iPhone 12 Mini",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
    currency: "₹",
    price: 59900,
    rating: 4.2,
  },
  {
    id: 2,
    name: "Moto",
    model: "Edge 20 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge20-pro-.jpg",
    currency: "₹",
    price: 60900,
    rating: 3.7,
  },
  {
    id: 3,
    name: "Xiaomi",
    model: "MI 11 Ultra",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11-ultra-5g-k1.jpg",
    currency: "₹",
    price: 70999,
    rating: 2.8,
  },
];


function App() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    console.log(id, mobiles[id]);
    let result = mobiles[id];
    setCart([...cart, result]);
    console.log(cart)
  };

  
  const handleDelete = (id) => {

    const newCart = cart.filter(item => item.id !== id);
    console.log(newCart, id)
    setCart([...newCart]);
  };

  return (
    <div className="App">
      <Navbar cart={cart} />
      <HeadBanner />
      <div className="card-container">
        {mobiles.map((mobile) => {
          return (
            <ProductCard
              mobile={mobile}
              handleAddToCart={handleAddToCart}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
