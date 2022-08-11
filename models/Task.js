const mongoose = require('mongoose')
const {Schema,
       model
      } = mongoose

const TaskSchema = new Schema({
    name:{
        type: String,
        required: [true, 'must provide name'],
        maxlength: [20, 'name should not exceed 20 characters'],
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    } 
})

module.exports = model('Task', TaskSchema)