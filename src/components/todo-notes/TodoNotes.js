import React, { useState } from "react";
import "./todo-notes.css";
import { AiFillSave } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import Button from "../button/Button";
import cloneDeep from "lodash.clonedeep";

const TodoNotes = () => {
  const [todoList, setTodoList] = useState([
    {
      value: "",
    },
  ]);

  const addTodoList = () => {
    const currentTodoList = cloneDeep(todoList);
    currentTodoList.push(currentTodoList);
    setTodoList(currentTodoList);
  };
  console.log(todoList, "todoList");
  return (
    <div className="todoMainContainer">
      <div className="todo_addBtn">
        <Button value="Add" className="green" handleClick={addTodoList} />
      </div>
      <div className="todoWrapper">
        {todoList?.map((val, index) => {
          return (
            <div className="todo_main" key={index}>
              <div className="todo_tool">
                <AiFillSave
                  size="1.5rem"
                  color="#B0EEFF"
                  style={{ padding: "4px", cursor: "pointer" }}
                />
                <FaTrash
                  size="1.2rem"
                  color="#FFBEBC"
                  style={{ padding: "4px", cursor: "pointer" }}
                />
              </div>
              <div className="todo_textarea">
                <textarea></textarea>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoNotes;
