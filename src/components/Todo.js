import "../styles/todo.css";
import TodoItem from "./TodoItem";

function Todo() {
  const listItem = [
    { name: "Todo Item 1" },
    { name: "Todo Item 2" },
    { name: "Todo Item 3" },
  ];
  return (
    <div className="todo-list">
      <div className="header">
        <h1>TODO LIST</h1>
      </div>
      <div className="body">
          {listItem.map(item => (
              <TodoItem item={item} />
          ))}
      </div>
    </div>
  );
}

export default Todo;
