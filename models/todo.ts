import { model, Schema, SchemaTypes } from 'mongoose';

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  haveDone: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

const Todo = model('Todo', TodoSchema);

export default Todo;
