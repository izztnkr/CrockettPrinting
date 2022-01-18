const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    link: {
        type: String,
        required: true,
        trim: true,
    },

    options: [
        {
            name: {
                type: String,
                trim: true
            },

            size: {
              type: String,
              trim: true
            },

            price: {
              type: String,
              required: true,
              trim: true
            },
        }
    ]
});

const Category = model("Category", categorySchema);

module.exports = Category;