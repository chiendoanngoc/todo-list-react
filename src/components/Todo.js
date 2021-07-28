import { useState } from "react";
import "../styles/todo.css";
import TodoItem from "./TodoItem";
import Input from "./Input";

function Todo({ todos, addTodo, deleteTodo }) {
  const listItem = [
    { id: 1, text: "Todo Item 1", checked: false },
    { id: 2, text: "Todo Item 2", checked: false },
    { id: 3, text: "Todo Item 3", checked: false },
  ];

  const [list, setList] = useState(listItem);
  const [filter, setFilter] = useState("ALL");

  // function deleteItem(item) {
  //   setList(list.filter((todo) => todo.id !== item.id))
  // }

  function setChecked(id) {
    setList(list.map((todoItem) => {
      if (todoItem.id === id) {
        todoItem.checked = !todoItem.checked
      }
      return todoItem
    }))
  }

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
          <TodoItem key={item.id} item={item} deleteFunction={deleteTodo} changeCheckFunction={setChecked}/>
        ))}
        {filter === "Doing" && todos.filter((item) => item.checked === false).map((item) => (
          <TodoItem key={item.id} item={item} deleteFunction={deleteTodo} changeCheckFunction={setChecked}/>
        ))}
        {filter === "Done" && todos.filter((item) => item.checked === true).map((item) => (
          <TodoItem key={item.id} item={item} deleteFunction={deleteTodo} changeCheckFunction={setChecked}/>
        ))}
      </div>
      <Input addItemFunction={addTodo} />
    </div>
  );
}

export default Todo;
