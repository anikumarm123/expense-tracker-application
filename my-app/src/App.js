import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Form } from "./Form";
import { NavBar } from "./NavBar";
import { useState } from "react";

function App() {
  const [listOfDetails, setListOfDetails] = useState([])
  
  const handleExpenseDetails = (expenseDetails) => {
    setListOfDetails([...listOfDetails,expenseDetails])    
  };
  
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path = "/" element={<><NavBar /><Home listOfDetails = {listOfDetails} /></>}></Route>
          <Route path = "form" element={<><NavBar /><Form handleExpenseDetails = {handleExpenseDetails} /></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
