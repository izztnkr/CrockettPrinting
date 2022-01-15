import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      messages {
        _id
        messageText
        createdAt
      }
    }
  }
`;

export const QUERY_MESSAGE = gql`
  query getMessage {
    message {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_MESSAGE = gql`
  query getSingleMessage($messageId: ID!) {
    message(messageId: $messageId) {
      _id
      messageText
      messageAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_COMMENT = gql`
  query getMessage {
    message {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;