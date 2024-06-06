import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  function handleMessageInput(event) {
    setMessageInput(event.target.value);
  }
  function addMessage(event) {
    event.preventDefault();
    setMessageList([...messageList, messageInput]);
    // const newMessageList = [...messageList];
    // newMessageList.push(messageInput);
    // setMessageList(newMessageList);
    setMessageInput("");
  }

  function removeMessage(index) {
    const newMessageList = [...messageList];
    newMessageList.splice(index, 1);
    setMessageList(newMessageList);
  }

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
            value={messageInput}
            onChange={handleMessageInput}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  removeMessage(index);
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
