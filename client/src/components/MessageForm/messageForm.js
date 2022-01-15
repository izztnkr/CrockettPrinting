import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_MESSAGE } from '../../utils/mutations';
import { QUERY_MESSAGES } from '../../utils/queries';

import Auth from '../../utils/auth';

const MessageForm = () => {
  const [messageText, setMessageText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    update(cache, { data: { addMessage } }) {
      try {
        const { messages } = cache.readQuery({ query: QUERY_MESSAGES });

        cache.writeQuery({
          query: QUERY_MESSAGES,
          data: { messages: [addMessage, ...messages] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMessage({
        variables: {
          messageText,
          messageAuthor: Auth.getProfile().data.username,
        },
      });

      setMessageText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'messageText' && value.length <= 700) {
      setMessageText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What printing or design project can we help you with?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 700 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/700
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="messageText"
                placeholder="Enter message here..."
                value={messageText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Submit Message
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to send messages. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default MessageForm;
