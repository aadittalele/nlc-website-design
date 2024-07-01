"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cart({ cartItems, removeFromCart, closeCart }) {
  const router = useRouter();
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleCart = () => {
    if (subtotal > 0) {
      router.push('/pay?amount=' + subtotal);
    }
  }

  return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">My Cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={closeCart}>
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((item, idx) => (
                          <li key={idx} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item.name}</a>
                                  </h3>
                                  <p className="ml-4">${item.price.toFixed(2)}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty {item.quantity}</p>
                                <div className="flex">
                                  <button type="button" className="font-medium text-red-600 hover:text-red-300" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={handleCart}
                      className="text-white px-5 py-2.5 border-4 border-green-700 relative rounded-full group overflow-hidden font-medium bg-green-600 inline-block"
                    >  
                      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-700 group-hover:h-full opacity-90"></span>
                      <span className="relative">Checkout</span>
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button type="button" className="font-medium text-green-600 hover:text-green-400" onClick={closeCart}>
                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                      </button>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}