import { InputType, Field } from 'type-graphql';

@InputType()
export default class TodoInput {
  @Field()
  title: String;
  @Field()
  description: String;
}
