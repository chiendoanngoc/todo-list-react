function TodoItem({ item, deleteFunction, changeCheckFunction }) {
  let className = "";
  if (item.checked) {
    className += "todo-item-checked";
  }

  return (
    <div className="todo-item">
      <div>
        <input type="checkbox" onChange={(e) => changeCheckFunction(item.id)} />
        <span className={className}>
          {item.id}: {item.text}
        </span>
      </div>

      <button onClick={() => deleteFunction(item.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
