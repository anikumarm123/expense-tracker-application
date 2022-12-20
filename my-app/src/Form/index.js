import "../Form/index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = (props) => {
  const navigate = useNavigate();

  const [expenseDetails, setExpenseDetails] = useState({
    category: "",
    date: "",
    amount: "",
    expense: "",
    description: "",
  });

  const submitDetails = () => {
    props.handleExpenseDetails(expenseDetails);
    navigate("/");
  };

  const handleDetails = (event) => {
    setExpenseDetails({...expenseDetails,[event.target.name]: event.target.value});
  };
  
  return (
    <section>
      <form onSubmit = {submitDetails}>
          <input
            name="category"
            type="text"
            placeholder="Category"
            onChange={handleDetails}
            required="required"
          />
          <input
            name="date"
            type="date"
            placeholder="Date"
            onChange={handleDetails}
            required="required"
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            onChange={handleDetails}
            required="required"
          />
          <input
            name="expense"
            type="text"
            placeholder="Expense"
            onChange={handleDetails}
            required="required"
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleDetails}
            required="required"
          />
          <input type="submit" id="submit-button" />
      </form>
    </section>
  );
};
