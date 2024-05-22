import React, { useState } from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import styles from "./ChatBar.module.scss";

const ChatBarPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      setMessages([...messages, userInput]);
      setUserInput("");
    }
  };

  return (
    <div
      className={`${styles[`chat-bar-popup`]} ${
        isOpen ? [styles[`open`]] : ""
      }`}
    >
      <button className={styles[`chat-button`]} onClick={toggleChatPopup}>
        {isOpen ? (
          <AiOutlineWechat size={28} />
        ) : (
          <BsFillChatDotsFill size={24} />
        )}
      </button>
      {isOpen && (
        <div className={styles[`chat-popup`]}>
          <div className={styles[`chat-messages`]}>
            {messages.map((message, index) => (
              <div key={index} className={styles[`chat-message`]}>
                {message}
              </div>
            ))}
          </div>
          <div className={styles[`input-area`]}>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button
              className={styles["send-button"]}
              type="button"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBarPopup;
