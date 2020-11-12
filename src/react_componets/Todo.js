import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((elt) => elt.id !== todo.id));
  };

 
const completeHandler = () => {
  setTodos(todos.map(elt => {
    if (elt.id === todo.id){
      return {
        ...elt, completed: !elt.completed
      }
    }
    return elt;
  }))
}

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
