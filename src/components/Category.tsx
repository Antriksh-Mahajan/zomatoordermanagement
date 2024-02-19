import React, { useEffect, useState } from "react";
import category from "../components/category.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/category.css'
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
          
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  


  return (
    <div className="">
      <div className="">
      <h2 className="">Inspiration for your first order</h2>
      <Slider {...settings} className="my-slider my-10" >

        {categories.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-ce">
            <img className=" rounded-full" width={150} height={150} src={item.image} alt={item.name} />
            <h1>{item.name}</h1>

          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Category;
