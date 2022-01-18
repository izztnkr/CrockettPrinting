const { Schema, model } = require('mongoose');

const optionSchema = new Schema ({
    options: [
        {
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