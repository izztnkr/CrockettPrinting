import React from "react";
import { Link } from "react-router-dom";
import "../MessageList/style.css";
import { useMutation } from "@apollo/client";
import { REMOVE_MESSAGE } from "../../utils/mutations";
import { QUERY_MESSAGES } from "../../utils/queries";
// import { useParams } from "react-router-dom";

//messageList component for app. This will show a list of all the messages which exist and will also prompt users to respond if necessary
const MessageList = ({ messages, title }) => {
  const [removeMessage] = useMutation(REMOVE_MESSAGE, {
    refetchQueries: [{ query: QUERY_MESSAGES }],
  });

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
              <button
                onClick={() =>
                  removeMessage({ variables: { messageId: message._id } })
                }
              >
                Delete Message
              </button>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/messages/${message._id}`}
            >
              Click here to reply.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
