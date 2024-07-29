import React, { createContext, useState } from "react";
import Cart from "./components/taskComp/Cart";

export const UserContext = React.createContext();

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: "5.0",
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      image:
        "https://i.pinimg.com/564x/da/c5/9f/dac59f48a77524ada600c068c0d273de.jpg",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ... ",
      price: 899,
      discountPercentage: 17.94,
      rating: "5.0",
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      image:
        "https://i.pinimg.com/564x/94/c9/dd/94c9dd480f1decac36d47ab6e02e2c6a.jpg",
    },
    {
      id: 3,
      title: "Vivo T one",
      description:
        "Vivo T1 4G comes with a powerful processor, offers smooth performance and a lasting battery",
      price: 1650,
      discountPercentage: 15.46,
      rating: "4.0",
      stock: 36,
      brand: "Vivo",
      category: "smartphones",
      image:
        "https://fdn2.gsmarena.com/vv/bigpic/vivo-t1-sndrgn680.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "The OPPOF19 is a powerful smartphone with innovative camera technology to let you capture the beauty.",
      price: 280,
      discountPercentage: 17.91,
      rating: "4.0",
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      image:
        "https://i.pinimg.com/564x/2f/d9/90/2fd990d4805f640bae3572ec8ea43a94.jpg",
    },
    {
      id: 5,
      title: "Realme 12 pro plus",
      description:
        "The realme 12 Pro+ 5G stands tall as a beacon of superior technology and design.",
      price: 499,
      discountPercentage: 10.58,
      rating: "4.0",
      stock: 32,
      brand: "Realme",
      category: "smartphones",
      image:
        "https://i.gadgets360cdn.com/products/large/Realme-12-Pro-Plus-5G-DB-709x800-1706525405.jpg",
    },
  ]);

  return (
    <>
      <UserContext.Provider value={{ product, setProduct }}>
        <div className="container my-5">
          <Cart />
        </div>
      </UserContext.Provider>
    </>
  );
}
export default App;