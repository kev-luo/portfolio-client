import { gql } from 'graphql-tag';

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