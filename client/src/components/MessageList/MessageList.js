import React from "react";
import { Link } from "react-router-dom";
import "../MessageList/style.css";

const MessageList = ({ messages, title }) => {
  if (!messages.length) {
    return <h3>No Messages Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {messages &&
        messages.map((message) => (
          <div key={message._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {message.messageAuthor} <br />
              <span style={{ fontSize: "1rem" }}>
                message submitted on {message.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{message.messageText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/messages/${message._id}`}
            >
              Looking forward to hearing from you!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
