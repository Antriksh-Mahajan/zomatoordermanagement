import React, { useEffect, useState } from "react";
import data from "./data.json";
import Skeleton from "./skeleton/Skeleton";
import '../../src/components/Fooditem.css'
interface FoodItem {
  name: string;
  image: string;
  description: string;
  price: number;
  restaurant: string;
  restaurant_url: string;
}

const FoodItem = () => {
  const [food, setFood] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    setTimeout(() => {
      setFood(data.food_items);
      setLoading(false); // Set loading to false when data is loaded
    }, 2000);
  }, []);
  const skeletonArray = new Array(data.food_items.length).fill(0);

  return (
    <div className="mt-10">
      

      <ul className="flex flex-wrap justify-center items-center gap-10 mt-10">
      
        {loading // Show skeletons while loading
          ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center text-center items-center"
              >
                <Skeleton classes={"thumbnail"} />
                <Skeleton classes="title" />
                <Skeleton classes="title" />
              </div>
            ))
          : // Show food items once data is loaded
            food.map((item, index) => (
              <li className="flex flex-col items-center cardborder" key={index} >
                <div className="w-72 h-full min-w-80 rounded-3xl" >
                  <img
                    className="w-full h-full rounded-3xl min-h-64"
                    src={item.image}
                    alt={item.name}
                    width={328}
                  />
                </div>
                <div className="flex flex-row justify-between w-72 mt-2">
                  <h2>{item.name}</h2>
                  <h3>Rating</h3>
                </div>
                <div className="flex flex-row justify-between w-72 mt-2">
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default FoodItem;
