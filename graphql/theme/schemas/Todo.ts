import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class Todo {
  @Field((type) => ID)
  _id: String;
  @Field()
  title: String;
  @Field()
  description: String;
  @Field()
  haveDone: Boolean;
  @Field()
  createdAt: Date;
  @Field({ nullable: true })
  updatedAt: Date;
}
