import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import SingleFood from "./components/SingleFood";
import '../src/components/Home.css'
const App = () => {

  return (
    
    <div className="App m-auto">
    
      <div  >
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<SingleFood />} />

      </Routes>
    </Router>

      </div>
    </div>
  );
};

export default App;
