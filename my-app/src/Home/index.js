import "../Home/index.css";
import React, { useState } from "react";

export const Home = (props) => {
  const { listOfDetails } = props;
  const [editDetails, setEditDetails] = useState({});
  const [editIndex, setEditIndex] = useState(0);
  const [editStatus, setEditStatus] = useState(false);
  
  const handleEdit = (editData, index) => {

    if (!editStatus) {
      setEditDetails(editData);
      setEditIndex(index);
      setEditStatus(true);
    } 
    else {
      listOfDetails.splice(index, 1, editDetails);
      setEditStatus(false);
    }

  };

  const handleEditExpense = (event) => {
    setEditDetails({ ...editDetails, [event.target.name]: event.target.value });
  };

  const handleDelete = (index) => {
    listOfDetails.splice(index,1);
    setEditIndex(2)
  };

  return (
    <div>
      {listOfDetails.length !== 0 && (
        <div className="view-detail">

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Expense</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>

            {listOfDetails?.map((listData, index) =>
              editIndex === index && editStatus ? (
                <tbody key={index}>
                  <tr>
                    <td>
                      <input
                        name="category"
                        value={editDetails.category}
                        onChange={handleEditExpense}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="date"
                        value={editDetails.date}
                        onChange={handleEditExpense}
                      />
                    </td>
                    <td>
                      <input
                        name="amount"
                        value={editDetails.amount}
                        onChange={handleEditExpense}
                      />
                    </td>
                    <td>
                      <input
                        name="expense"
                        value={editDetails.expense}
                        onChange={handleEditExpense}
                      />
                    </td>
                    <td>
                      <input
                        name="description"
                        value={editDetails.description}
                        onChange={handleEditExpense}
                      />
                    </td>
                    <td className="edit_delete_buttons">
                      <button onClick={() => handleEdit(listData, index)}>
                        <i className="fa-solid fa-pen"></i>Update
                      </button>
                      <button onClick={() => handleDelete(index)}>
                        <i className="fa-solid fa-trash"></i>Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody key={index}>
                  <tr>
                    <td>{listData.category}</td>
                    <td>{listData.date}</td>
                    <td>{listData.amount}</td>
                    <td>{listData.expense}</td>
                    <td>{listData.description}</td>
                    <td className="edit_delete_buttons">
                      <button onClick={() => handleEdit(listData, index)}>
                        <i className="fa-solid fa-pen"></i>Edit
                      </button>
                      <button onClick={() => handleDelete(index)}>
                        <i className="fa-solid fa-trash"></i>Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </table>
        </div>
      )}
    </div>
  );
};
