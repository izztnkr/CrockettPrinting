const db = require('../config/connection');
const { User, Message, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const messageSeeds = require('./messageSeeds.json');
const categorySeeds = require('./categorySeeds.json');

db.once('open', async () => {
  try {
    await Message.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Category.create(categorySeeds);

    for (let i = 0; i < messageSeeds.length; i++) {
      const { id, messageAuthor } = await Message.create(messageSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: messageAuthor },
        {
          $addToSet: {
            messages: id,
          },
        }
      );
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
