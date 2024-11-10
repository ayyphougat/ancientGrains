import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const products = [
    {
      title: "Ancient Grains Millet Flour",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800",
      desc: "Organic stone-ground millet flour, perfect for gluten-free baking and traditional recipes.",
      category: "Flour",
      rating: 5,
    },
    {
      title: "Millet Superfood Cereal",
      price: 8.99,
      image: "https://th.bing.com/th/id/OIP.073OofZvAU6QbqjWmtXvXAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain",
      desc: "Start your day with our nutrient-rich millet cereal blend, packed with protein and fiber.",
      category: "Breakfast",
      rating: 5,
      
    },
    {
      title: "Crunchy Millet Snacks",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800",
      desc: "Healthy roasted millet snacks seasoned with Himalayan salt and herbs.",
      category: "Snacks",
      rating: 5,
        },
    {
      title: "Millet Pasta",
      price: 6.99,
      image: "https://th.bing.com/th/id/OIP.NAAtKB8GACeolaQhYuqpzwHaJ4?rs=1&pid=ImgDetMain",
      desc: "Gluten-free pasta made from 100% millet flour, high in protein and minerals.",
      category: "Pasta",
      rating: 4,
        },
    {
      title: "Millet Energy Bars",
      price: 4.99,
      image: "https://i2-prod.dailyrecord.co.uk/incoming/article31857711.ece/ALTERNATES/s615/0_GettyImages-1461399856.jpg",
      desc: "Natural energy bars made with puffed millet, nuts, and honey.",
      category: "Snacks",
      rating: 3,
        },
    {
      title: "Pearl Millet Grains",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800",
      desc: "Premium quality pearl millet grains, perfect for traditional recipes.",
      category: "Grains",
      rating: 4,
        },
    {
      title: "Millet Crackers",
      price: 5.49,
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800",
      desc: "Crispy crackers made with millet flour and aromatic herbs.",
      category: "Snacks",
      rating: 5,
      
    },
    {
      title: "Millet Pancake Mix",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=800",
      desc: "Easy-to-make gluten-free pancake mix with millet flour base.",
      category: "Breakfast",
      rating: 5,
        },
    // {
    //   title: "Sprouted Millet",
    //   price: 11.99,
    //   image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?w=800",
    //   desc: "Nutrient-enhanced sprouted millet for maximum health benefits.",
    //   category: "Grains",
    //     },
    {
      title: "Millet Cookie Mix",
      price: 6.49,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
      desc: "Delicious gluten-free cookie mix made with organic millet flour.",
      category: "Baking",
      rating: 4,
    
    },
  ];

  return (
    <div className="p-6 grid sm:h-auto w-full sm:grid-cols-3 sm:gap-6 gap-4 h-auto">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          rating={product.rating}
          price={product.price}
          desc={product.desc}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductList;
