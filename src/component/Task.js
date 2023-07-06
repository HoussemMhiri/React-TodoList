import React from "react";
import "./Tasks.css";

export const Task = ({ data, check, trash }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {data.map((el) => (
          <div key={el.id} className={`task ${el.done ? "check" : " "} todo`}>
            <li className="todo-item">{el.task}</li>
            <button className="complete-btn" onClick={() => check(el.id)}>
              <i class="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => trash(el.id)}>
              <i class="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
