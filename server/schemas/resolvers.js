const { AuthenticationError } = require('apollo-server-express');
const { User, Message, Category } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('messages');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('messages');
    },
    userMessages: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Message.find(params).sort({ createdAt: -1 });
    },
    message: async (parent, { messageId }) => {
      return Message.findOne({ _id: messageId });
    },
    messages: async (parent, { username }) => {
      return Message.find().sort({ createdAt: -1 });
    },
    // messing around with these bottom two, dont think parent is necessary but if something broke, double check
    categories: async () => {
      return Category.find().populate("options");
    },
    categories: async(parent, { categoryId }) => {
      return Category.findOne({ categoryId }).populate("options");
    }
    
  
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addMessage: async (parent, { messageText, messageAuthor }) => {
      const message = await Message.create({ messageText, messageAuthor });

      await User.findOneAndUpdate(
        { username: messageAuthor },
        { $addToSet: { messages: message._id } }
      );

      return message;
    },
    addComment: async (parent, { messageId, commentText, commentAuthor }) => {
      return Message.findOneAndUpdate(
        { _id:messageId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeMessage: async (parent, { messageId }) => {
      return Message.findOneAndDelete({ _id: messageId });
    },
    removeComment: async (parent, { messageId, commentId }) => {
      return Message.findOneAndUpdate(
        { _id: messageId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
