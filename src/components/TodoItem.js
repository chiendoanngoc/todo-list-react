function TodoItem( {item, deleteFunction} ) {
    return (
        <div className="todo-item">
            <span>{item.text}</span>
            <button onClick={() => deleteFunction(item)}>Delete</button>
        </div>
    );
}

export default TodoItem;