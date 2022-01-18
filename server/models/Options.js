const { Schema, model } = require('mongoose');

const optionSchema = new Schema ({
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

