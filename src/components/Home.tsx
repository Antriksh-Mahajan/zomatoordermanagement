import Navbar from "./Navbar";
import FoodItem from "./FoodItem";
import '../components/Home.css'
type Props = {};

const Home = (props: Props) => {
  return (
    < div className="max-w-full flex justify-center flex-col items-center">
      <div className=" home" >
        <Navbar />
        <FoodItem />
      </div>
    </div>
  );
};

export default Home;
