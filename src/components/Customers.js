import React, {useEffect,useState} from 'react'
import {gql,useQuery} from "@apollo/client";
import {GET_CUSTOMERS} from '../GraphQL/Queries';
import { DELETE_CUSTOMER_MUTATION } from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client';
import '../App.css';



//map the returned values to the component
const CustomerList =(props)=>{
    const {error, loading, data} = useQuery(GET_CUSTOMERS)
    const [customers,setCustomers] = useState([])
    

    const [deleteCustomer] = useMutation(DELETE_CUSTOMER_MUTATION)
    const removeCustomer = (id) =>{
        console.log('customer id',id)
        deleteCustomer({
            variables: {
                id: parseInt(id),
            }
        })
        if(error){
            console.log(error);
        }
       
        }

    //grab new data whever data updates
    useEffect(()=>{
        if(data){
        setCustomers(data.customers)
        }
        console.log(data)
    }, [data])

   
        
    return customers.map(({ id, name, email,age }) => (
        <div className="customersContainer" key={id}>
            <p>
                {id}: {name} {email}: {age}
            </p>
            <button onClick={()=>{removeCustomer(id)}} className="deleteBtn">Delete</button>
            <button onClick={()=>{props.setShowModal(id)}} className="updateBtn">Update</button>
        </div>

       
        ))


               
    }
    export default CustomerList




    
