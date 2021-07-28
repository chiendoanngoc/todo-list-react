import { useState } from "react";
import "../styles/todo.css";
import TodoItem from "./TodoItem";
import Input from "./Input";

function Todo() {
  const listItem = [
    { id: 1, text: "Todo Item 1", checked: false },
    { id: 2, text: "Todo Item 2", checked: false },
    { id: 3, text: "Todo Item 3", checked: false },
  ];

  const [list, setList] = useState(listItem);

  function deleteItem(item) {
    setList(list.filter((todo) => todo.id !== item.id))
  }

  function getID() {
    const newID = list[list.length - 1]["id"] + 1
    return newID
  }

  function addItem(newItemText) {
    const newTodo = {id: getID(), text: newItemText}
    setList([...list, newTodo])
  }

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
        {list.map((item) => (
          <TodoItem key={item.id} item={item} deleteFunction={deleteItem} changeCheckFunction={setChecked}/>
        ))}
      </div>
      <Input addItemFunction={addItem} />
    </div>
  );
}

export default Todo;
