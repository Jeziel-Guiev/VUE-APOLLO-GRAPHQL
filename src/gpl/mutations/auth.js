import gql from 'graphql-tag'

export const LOGIN_USER = gql`
mutation authUser($email: String! $password: String! ){
	authUser(email: $email password: $password ){
    token
  }
}
`
export const REGISTER_USER = gql`
mutation createUser($name: String! $email: String! $password: String! ) {
    createUser( name: $name, email: $email, password: $password) {
      token
    }
}
`