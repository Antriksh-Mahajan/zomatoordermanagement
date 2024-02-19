import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import Navbar from "./Navbar";

const SingleFood: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 

  // Check if id is undefined
  if (id === undefined) {
    return <div>No food item selected</div>;
  }

  const foodItem = data.food_items[parseInt(id)];

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-row gap-2">
        <div style={{ height: "370px", width: "686px" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={foodItem.image[0]}
            alt={foodItem.name}
          />
        </div>
        <div className="flex-col ">
          <div className=" flex flex-col gap-2">
            <img src={foodItem.image[1]} alt={foodItem.name} width={200} />
            <img src={foodItem.image[2]} alt={foodItem.name} width={200} />
          </div>
        </div>
        <div>
          <img
            src={foodItem.image[3]}
            alt={foodItem.name}
            style={{ height: "100%" }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-5">
        <div className="flex gap-3 flex-col">
          <h3 className="text-4xl">{foodItem.name}</h3>
          <p>Description: {foodItem.description}</p>
        </div>
        <div>
          <p>Ratings {foodItem.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
