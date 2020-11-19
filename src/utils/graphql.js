import gql from 'graphql-tag';

export const FETCH_PROJECTS_QUERY = gql`
{
  getProjects {
    id
    name
    description
    repo
    deployed
    skills {
      id
      name
      createdAt
    }
  }
}
`

export const CREATE_MESSAGE = gql`
  mutation createMessage(
    $name: String!
    $email: String!
    $body: String!
  ) {
    createMessage(
      name: $name
      email: $email
      body: $body
    ) {
      name
      email
      body
    }
  }
`