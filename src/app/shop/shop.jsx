"use client";

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    price: 90.00,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    color: 'Salmon',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    price: 32.00,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    color: 'Blue',
  },
  {
    id: 3,
    name: 'Shirt',
    price: 90.00,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    color: 'Salmon',
  },
  {
    id: 4,
    name: 'Hoodie',
    price: 32.00,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    color: 'Blue',
  }
];

export default function Shop({ addToCart }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {products.map((product) => (
        <div key={product.id} className="group relative border p-4 rounded-lg">
          <div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-4 px-6 flex justify-between">
            <div>
              <h3 className="text-md text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
                <p className="text-md font-medium text-gray-900">${product.price.toFixed(2)}</p>
              </h3>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="text-white px-5 py-2.5 border-4 border-green-700 relative rounded-full group overflow-hidden font-medium bg-green-600 inline-block"
            >  
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-700 group-hover:h-full opacity-90"></span>
              <span className="relative">Add To Cart</span>
            </button>
          </div>
          
        </div>
      ))}
    </div>
  );
}
