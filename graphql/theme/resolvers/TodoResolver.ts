import { GraphQLUpload } from 'apollo-server-express';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import TodoModel from '../../../models/todo';
import AppError from '../../../utils/AppError';
import Todo from '../schemas/Todo';
import EditTodo from './input-type/EditTodo';
import TodoInput from './input-type/TodoInput';

@Resolver()
export default class TodoResolver {
  @Mutation(() => Todo)
  async todoAdd(@Arg('data') data: TodoInput) {
    let todo = await TodoModel.create(data);
    return todo;
  }

  @Query(() => [Todo])
  async getAllTodos() {
    let todos = await TodoModel.find();
    return todos;
  }

  @Query(() => Todo)
  async getASingleTodo(@Arg('todoId') todoId: String) {
    let todo = await TodoModel.findOne({ _id: todoId });
    if (!todo) {
      return new AppError('todo not found', 401);
    }
    return todo;
  }

  @Mutation(() => String)
  async removeTodos(
    @Arg('todoIds', (type) => [String])
    todoIds: String[]
  ) {
    await TodoModel.deleteMany({ _id: { $in: todoIds } });
    return 'removed';
  }

  @Mutation(() => String)
  async updateATodo(@Arg('data') data: EditTodo) {
    let updatedData: any = data;
    updatedData.updatedAt = Date.now();

    console.log(updatedData);

    await TodoModel.findOneAndUpdate({ _id: updatedData.todoId }, updatedData);

    return 'updated successfully';
  }
}
