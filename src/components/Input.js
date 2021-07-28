import { useState } from "react";

function Input({ addItemFunction }) {
  const [text, setText] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (!text) {
      alert("Blank!");
      return;
    }
    addItemFunction(text);
    setText("");
  }

  return (
    <div className="input">
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="New Todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default Input;
