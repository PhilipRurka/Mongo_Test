import mongoose, { Schema, models } from 'mongoose';

import { Todo } from '@/Types/todos';

const todoSchema = new Schema<Todo>(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
      enum: ['low', 'medium', 'high'],
    },
  },
  { timestamps: true }
);

const TodoModel = models.Todo || mongoose.model('Todo', todoSchema);

export default TodoModel;
