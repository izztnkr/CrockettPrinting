import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_RESPONSE } from '../../utils/mutations';
import { REMOVE_RESPONSE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ResponseForm = ({ messageId }) => {
  const [responseText, setResponseText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addResponse, { error }] = useMutation(ADD_RESPONSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addResponse({
        variables: {
          messageId,
          responseText,
          responseAuthor: Auth.getProfile().data.username,
        },
      });

      setResponseText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'responseText' && value.length <= 1000) {
      setResponseText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>Your message will be sent after clicking 'send'.</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 1000 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/1000
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="replyText"
                placeholder="Add your response..."
                value={responseText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Send
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to send your messages. Please login{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ResponseForm;
