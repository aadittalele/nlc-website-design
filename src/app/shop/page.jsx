// "use client";
// import { useState } from 'react';
// import Shop from './shop';
// import Cart from './cart';
// import Navbar from '@/components/Navbar';

// export default function Home() {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingProductIndex = prevItems.findIndex((item) => item.id === product.id);
//       if (existingProductIndex !== -1) {
//         const updatedCartItems = prevItems.map((item, index) =>
//           index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         return updatedCartItems;
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//     setIsCartOpen(true);
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="bg-gray-800 pb-6">
//         <Navbar />
//       </div>
//       <main>
//         <p className="mt-4 text-center text-gray-700 text-6xl font-bold">Shop</p>
//         <Shop addToCart={addToCart} />
//         {isCartOpen && (
//           <Cart cartItems={cartItems} removeFromCart={removeFromCart} closeCart={closeCart} />
//         )}
//       </main>
//     </div>
//   );
// }