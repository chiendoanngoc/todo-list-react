function TodoItem( {item} ) {
    return (
        <div className="todo-item">
            <span>{item.name}</span>
            <button>Delete</button>
        </div>
    );
}

export default TodoItem;