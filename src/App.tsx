import "./App.css";
import Category from "./components/Category";
import FoodItem from "./components/FoodItem";
import Navbar from "./components/Navbar";

const App = () => {
  console.log("heysdf");
  return (
    <div className="max-w-full flex justify-center flex-col items-center">
      <div className="max-w-7xl ">
        <Navbar />
        <Category/>
         <FoodItem />
      </div>
    </div>
  );
};

export default App;
