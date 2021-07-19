function Input( {addItemFunction} ) {
    function addItem() {
        const text = document.getElementById("newTodo").value;
        addItemFunction(text);
    }
    return (
        <div className="input">
            <input type="text" id="newTodo" placeholder="New Todo..."/>
            <button onClick={addItem}>Add Todo</button>
        </div>
    )
}

export default Input;