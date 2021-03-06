import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ResponseList from "../../components/ResponseList";
import ResponseForm from "../../components/ResponseForm";

import { QUERY_SINGLE_MESSAGE } from "../../utils/queries";

const SingleMessage = () => {
  // Use `useParams()` to retrieve value of the route parameter `:messageId`
  const { messageId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_MESSAGE, {
    // pass URL parameter
    variables: { messageId: messageId },
  });

  const message = data?.message || {}; // Square or squirly

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {message.messageAuthor} <br />
        <span style={{ fontSize: "1rem" }}>
          had this message on {message.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {message.messageText}
        </blockquote>
      </div>

      <div className="my-5">
        <ResponseList responses={message.responses} />
      </div>
      <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <ResponseForm messageId={message._id} />
      </div>
    </div>
  );
};

export default SingleMessage;
