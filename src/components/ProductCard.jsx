import { Button } from 'flowbite-react';
import React from 'react';

const ProductCard = ({ image, title, rating, price, desc, category }) => {
  const renderRating = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="w-full max-w-sm bg-slate-200 border  border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 sm:h-auto hover:scale-105 transition">
        <img className="p-2 rounded-t-lg h-72 w-full rounded-xl transition ease-in-out hover:rounded-full " src={image} alt="product image" />
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-cyan-950  dark:text-white font-playfair">{title}</h5>
        </a>
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white font-bona"><h9 className="font-serif">Category:</h9> {category}</h5>
        </div>
        <div className='h-20'>
          <h5 className="text-xl tracking-tight text-gray-900 dark:text-white font-extralight font-sans">{desc}</h5>
        </div>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {renderRating()}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-cyan-950 dark:text-white font-dancing">${price}</span>
          <Button>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
