import { gql } from "graphql-tag";

export const userFragment = gql`
  fragment userFields on User {
    createdAt
    email
    email_verified
    given_name
    family_name
    status
    enabled
    updatedAt
    username
  }
`;

export const listUsers = gql`
  query ListUsers($input: ListUsersInput) {
    listUsers(input: $input) {
      users {
        ...userFields
      }
      nextToken
    }
  }
  ${userFragment}
`;

export const createUser = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...userFields
    }
  }
  ${userFragment}
`;

export const updateUser = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input)
  }
`;

export const deleteUsers = gql`
  mutation DeleteUsers($usernames: [String!]!) {
    deleteUsers(usernames: $usernames)
  }
`;

export const listGroups = gql`
  query ListGroups {
    listGroups {
      groups {
        createdAt
        description
        name
        precedence
        updatedAt
      }
    }
  }
`;

export const listGroupsForUser = gql`
  query ListGroupsForUser($username: String!) {
    listGroupsForUser(username: $username) {
      name
    }
  }
`;

export const getUser = gql`
  query GetUser($username: String!) {
    getUser(username: $username) {
      groups
      ...userFields
    }
  }
  ${userFragment}
`;

export const listUsersInGroup = gql`
  query ListUsersInGroup($input: ListUsersInGroupInput) {
    listUsersInGroup(input: $input) {
      users {
        ...userFields
      }
      nextToken
    }
  }
  ${userFragment}
`;

export const disableUsers = gql`
  mutation DisableUsers($usernames: [String!]!) {
    disableUsers(usernames: $usernames)
  }
`;

export const enableUsers = gql`
  mutation EnableUsers($usernames: [String!]!) {
    enableUsers(usernames: $usernames)
  }
`;

export const resetPasswords = gql`
  mutation ResetPasswords($usernames: [String!]!) {
    resetPasswords(usernames: $usernames)
  }
`;
