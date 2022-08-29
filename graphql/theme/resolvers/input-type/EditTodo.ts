import { InputType, Field, ID } from 'type-graphql';

@InputType()
export default class EditTodoInput {
  @Field((type) => ID)
  todoId: String;
  @Field({ nullable: true })
  title: String;
  @Field({ nullable: true })
  description: String;
  @Field({ nullable: true })
  haveDone: Boolean;
}
