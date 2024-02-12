// ChatBarPopup.js
import React, { useState } from "react";
import { AiOutlineWechat } from "react-icons/ai"
import { BsFillChatDotsFill } from "react-icons/bs"
import "./chatBar.scss"; // Import your SCSS file

const ChatBarPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState(""); // State to store user input

  const toggleChatPopup = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // If the chat is opened, populate initial messages
      setMessages([
        "Hello!",
        "How can I help you?",
        "Please ask any questions you have.",
      ]);
    }
  };

  const handleInputChange = (e) => {
    // Update user input as they type
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      // If the user sends a message, add it to the messages
      setMessages([...messages, userInput]);
      setUserInput(""); // Clear the user input field
    }
  };

  return (
    <div className={`chat-bar-popup ${isOpen ? "open" : ""}`}>
      <button className="chat-button" onClick={toggleChatPopup}>
        {/* {isOpen ? "Close Chat" : "Open Chat"} */}
        {isOpen ? <AiOutlineWechat size={28}/> : <BsFillChatDotsFill size={24}/>}
      </button>
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className="chat-message">
                {message}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button className="send-button" type="submit" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBarPopup;
