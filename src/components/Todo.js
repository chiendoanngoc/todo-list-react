import { useState, useEffect } from "react";
import "../styles/todo.css";
import TodoItem from "./TodoItem";
import Input from "./Input";
import axios from "axios";

function Todo({ todos, addTodo, deleteTodo, changeCheck }) {
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    axios.get('https://mockend.com/chiendoanngoc/todo-list-react/lists').then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="todo-list">
      <div className="header">
        <h1>TODO LIST</h1>
      </div>
      <div className="body">
        <button onClick={() => {setFilter("ALL")}}>ALL</button>
        <button onClick={() => {setFilter("Doing")}}>Doing</button>
        <button onClick={() => {setFilter("Done")}}>Done</button>
        {filter === "ALL" && todos.map((item) => (
          <TodoItem key={item.id} item={item} deleteFunction={deleteTodo} changeCheckFunction={changeCheck}/>
        ))}
        {filter === "Doing" && todos.filter((item) => item.checked === false).map((item) => (
          <TodoItem key={item.id} item={item} deleteFunction={deleteTodo} changeCheckFunction={changeCheck}/>
        ))}
        {filter === "Done" && todos.filter((item) => item.checked === true).map((item) => (
          <TodoItem key={item.id} item={item} deleteFunction={deleteTodo} changeCheckFunction={changeCheck}/>
        ))}
      </div>
      <Input addItemFunction={addTodo} />
    </div>
  );
}

export default Todo;
