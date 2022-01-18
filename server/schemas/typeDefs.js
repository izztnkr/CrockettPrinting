const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    messages: [Message]!
  }

  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    messages: [Message]
    userMessages(username: String): [Message]
    message(messageId: ID!): Message
    categories: [Category]
    category(categoryId: ID!): Category
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMessage(messageText: String!, messageAuthor: String!): Message
    addComment(
      messageId: ID!
      commentText: String!
      commentAuthor: String!
    ): Message
    removeMessage(messageId: ID!): Message
    removeComment(messageId: ID!, commentId: ID!): Message
  },

  type Category {
    _id: ID!
    link: String!
    name: String!
    options: [Options]! 
  },

  type Options {
    _id: ID
    name: String!
    size: String!
    price: String!
  }
`;

module.exports = typeDefs;
