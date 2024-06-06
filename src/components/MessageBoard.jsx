import { useState } from "react";
function MessageBoard() {
  const [inputText, setInputText] = useState("");
  const [inputList, setInputList] = useState([
    "Hello all ! This is first message.",
  ]);

  const addInputlist = (event) => {
    event.preventDefault();
    setInputList([...inputList, inputText]);
    setInputText("");
  };
  const deleteInputList = (index) => {
    const newInputList = [...inputList];
    newInputList.splice(index, 1);
    setInputList(newInputList);
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
            value={inputText}
            onChange={(event) => {
              setInputText(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={addInputlist}>
          Submit
        </button>
      </div>
      <div class="board">
        {inputList.map((item, index) => (
          <div className="message" key={index}>
            <h1>{item}</h1>
            <button
              className="delete-button"
              onClick={() => deleteInputList(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
