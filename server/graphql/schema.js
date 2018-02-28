const { makeExecutableSchema } = require('graphql-tools');

const dreamContoller = require('./dream');
const userController = require('./user');

const typeDefs = `
  type Query {
    dreams(current_page: Int!, page_size: Int!, sort: String!): DreamList
    users(current_page: Int!, page_size: Int!): UserList
    user(username: String!, password: String!): UserOne
    destoryUser(username: String!): UserRemove
  }
  type Mutation {
    addUser(username: String!, password: String!): UserOne
  }
  type DreamList {
    code: String,
    result: DreamsResult
  }
  type DreamsResult {
    count: Int,
    rows: [Dream]
  }
  type Dream {
    id: Int,
    dream_name: String,
    plan_time: Date,
    task_nums: Int,
    complete_percentage: Int,
    pic_nums: Int,
    watcher_nums: Int,
    dream_person: String,
    img_url: String,
    created_on: Date
  }
  type UserRemove {
    code: String,
    result: String
  }
  type UserOne {
    code: String,
    result: User
  }
  type UserList {
    code: String,
    result: UsersResult
  }
  type UsersResult {
    count: Int,
    rows: [User]
  }
  type User {
    id: Int,
    username: String,
    password: String,
    created_on: Date
  }
  scalar Date
  schema {
    query: Query,
    mutation: Mutation
  }
`;

const resolvers = {
  Query: {
    dreams(root, args, context) {
      return dreamContoller.getDreamsGraphql(args);
    },
    users(root, args, context) {
      return userController.getUsersGraphql(args);
    },
    user(root, args, context) {
      return userController.findUserGraphql(args);
    },
    destoryUser(root, args, context) {
      return userController.destoryUser(args);
    }
  },
  Mutation: {
    addUser(root, args, context) {
      return userController.addUserGraphql(args);
    }
  }
}

module.exports = makeExecutableSchema({typeDefs, resolvers})
