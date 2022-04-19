import gql from 'graphql-tag'

export const LOGGED_IN_USER = gql`
  query {
    me {
      id
      name
      email
      posts{
        title
      }
    }

  }
`
export const GetUserforId = gql`
query GetUserforId($id: ID!) {
    GetUserforId(id: $id) {
    email
    direccion
    telefono
    turno
    id
    paralelo
    apellido
    nivel
    name
    role
    ability{
     resource
    }
    }
  }

`

export const GetUsersListAll = gql`
  query {
    listAllUsers {
      email
      role
      ability {
        resource
      }
   }
  }`