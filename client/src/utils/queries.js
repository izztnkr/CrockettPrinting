import { gql } from "@apollo/client";

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

export const QUERY_MESSAGES = gql`
  query getMessages {
    messages {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_USER_MESSAGES = gql`
  query getUserMessages($username: String) {
    messages(username: $username) {
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
      responses {
        _id
        responseText
        createdAt
      }
    }
  }
`;

export const QUERY_RESPONSE = gql`
  query getResponse {
    response {
      _id
      responseText
      responseAuthor
      createdAt
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      image
      name
      options {
        id
        name
        size
        price
      }
    }
  }
`;

export const QUERY_SINGLE_CATEGORY = gql`
  query getCategories($categoryId: ID!) {
    category(categoryId: $categoryId) {
      id
      image
      name
      options {
        id
        name
        size
        price
      }
    }
  }
`;
