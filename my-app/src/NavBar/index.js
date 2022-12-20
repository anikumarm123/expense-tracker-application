import React from "react";
import logo from "../Asserts/expense-logo.png";
import { useNavigate } from "react-router-dom";
import '../NavBar/index.css'

export const NavBar = () => {

  const navigate = useNavigate();
  
  const handleExpenseAdd = () => {
    navigate("/form");
  };
  return (
    <div>
      <nav className="nav-section">
        <div className="heading">
          <img src={logo} alt="filter applied" />
          <h1>Expense Tracker</h1>
        </div>
        <div className="nav-list">
          <button>
            <i className="fa-solid fa-house"></i> Home
          </button>
          <button onClick={handleExpenseAdd}>
            <i className="fa-solid fa-plus"></i> Add Expense
          </button>
        </div>
      </nav>
    </div>
  );
};
