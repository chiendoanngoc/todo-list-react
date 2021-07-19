import { useState } from "react";
import "../styles/todo.css";
import TodoItem from "./TodoItem";
import Input from "./Input";

function Todo() {
  const listItem = [
    { id: 1, text: "Todo Item 1" },
    { id: 2, text: "Todo Item 2" },
    { id: 3, text: "Todo Item 3" },
  ];

  const [list, setList] = useState(listItem);

  function deleteItem(item) {
    const newList = [];
    list.forEach((todoItem) => {
      if (todoItem.id !== item.id) {
        newList.push(todoItem);
      }
    });
    setList(newList);
  }

  function addItem(newItemText) {
    const newList = [...list];
    newList.push({id: 4, text: newItemText})
    setList(newList);
  }

  return (
    <div className="todo-list">
      <div className="header">
        <h1>TODO LIST</h1>
      </div>
      <div className="body">
        {list.map((item) => (
          <TodoItem item={item} deleteFunction={deleteItem} />
        ))}
      </div>
      <Input addItemFunction={addItem} />
    </div>
  );
}

export default Todo;
