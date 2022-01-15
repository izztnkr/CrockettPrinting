import React from 'react';
import { useQuery } from '@apollo/client';

import MessageList from '../../components/MessageList/MessageList';
import MessageForm from '../../components/MessageForm/messageForm';

import { QUERY_MESSAGE } from '../../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MESSAGE);
  const messages = data?.messages || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <MessageForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MessageList
            messages={messages}
              title="Some Feed for Message(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
