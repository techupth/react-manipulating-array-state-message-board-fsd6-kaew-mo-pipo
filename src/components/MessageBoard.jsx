import { useState } from "react";

function MessageBoard() {
  const [todoMessage, setTodoMessage] = useState("");
  const [keepMessage, setKeepMessage] = useState([]);

  const changeTodoMessage = (event) => {
    setTodoMessage(event.target.value);
  };

  const submitKeepMessage = () => {
    const newKeepMessage = [...keepMessage];
    newKeepMessage.push(todoMessage);
    setKeepMessage(newKeepMessage);
    setTodoMessage("");
  };

  const deleteMessage = (indexMessage) => {
    const newKeepMessage = [...keepMessage];
    newKeepMessage.splice(indexMessage, 1);
    setKeepMessage(newKeepMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={todoMessage}
            onChange={changeTodoMessage}
          />
        </label>
        <button className="submit-message-button" onClick={submitKeepMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {keepMessage.map((Message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{Message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
