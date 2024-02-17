import React, { useEffect, useState } from "react";
import category from "../components/category.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CategoryItem {
  name: string;
  image: string;
}

const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    setCategories(category.category);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768, // Adjust for tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480, // Adjust for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  

  return (
    <div className="bg-gray-100 py-10 my-0">
      <h2 className="text-4xl">Inspiration for your first order</h2>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjust the max-width and padding according to your design */}
        
      </div>
    </div>
  );
  
};

export default Category;
