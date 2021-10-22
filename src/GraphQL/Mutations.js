//mutations for adding customers
import {gql} from '@apollo/client';

export const CREATE_CUSTOMER_MUTATION = gql`
mutation addCustomer($id: Int! $name: String! $email: String! $age: Int!){
    addCustomer
    (id: $id name: $name email: $email age: $age)
          {
            id
            name
            email
            age
    }
}
`

export const DELETE_CUSTOMER_MUTATION = gql`
mutation deleteCustomer($id: Int!){
    deleteCustomer
    (id: $id){
        id
    }
        
}
`

export const UPDATE_CUSTOMER_MUTATION = gql`
mutation editCustomer($id: Int! $name: String! $email: String! $age: Int!){
    editCustomer
    (id: $id name: $name email: $email age: $age){
        id
    }
        
}
`