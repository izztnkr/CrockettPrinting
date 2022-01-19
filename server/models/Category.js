const { Schema, model } = require('mongoose');
const optionSchema = require('./Options');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    image: {
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