//first we have to import react
import React from "react";

/*
    the following arrow function is equivalent to:
    Function Form (){.....}
    */
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  //Note: order of passed in props do not matter
  //here we can write javascript code and fucntions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }, //note: if we were building an acutal application, we would use a package to assign the id to something useful
    ]);
    setInputText(""); //we want text box to be cleared once submitted
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    //NOTE: React prefers className as opposed to class in JSX
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

//to hook our componet to our app, we must first export it
export default Form;
