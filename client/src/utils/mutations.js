import { gql } from '@apollo/client';
//all of the mutations used in the app stored here
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($messageText: String!, $messageAuthor: String!) {
    addMessage(messageText: $messageText, messageAuthor: $messageAuthor) {
      _id
      messageText
      messageAuthor
      createdAt
      responses {
        _id
        responseText
      }
    }
  }
`;

export const ADD_RESPONSE = gql`
  mutation addResponse(
    $messageId: ID!
    $responseText: String!
    $responseAuthor: String!
  ) {
    addResponse(
      messageId: $messageId
      responseText: $responseText
      responseAuthor: $responseAuthor
    ) {
      _id
      messageText
      messageAuthor
      createdAt
      responses {
        _id
        responseText
        createdAt
      }
    }
  }
`;
