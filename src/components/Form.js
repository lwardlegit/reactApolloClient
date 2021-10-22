import React, {useState} from 'react'
import '../App.css'
import { CREATE_CUSTOMER_MUTATION } from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client';

export default function Form() {
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState(0);

    const [addCustomer, {error}] = useMutation(CREATE_CUSTOMER_MUTATION)
    const newCustomer = () =>{
        console.log('raw form data',id,name,email,age)
        addCustomer({
            variables: {
                id: id,
                name: name,
                email: email,
                age: age
            }
        })
        if(error){
            console.log(error);
        }
    };

    return (
        <div style={{display : 'block', padding: '2em' }}>

            <div style={{ display: 'flex', height:'2em',margin:'1em'}}>
            <input type="text"
             placeholder="id"
             onChange = {(e) =>{
             setId(parseInt(e.target.value))}}/>
           
            </div>


            <div style={{ display: 'flex', height:'2em',margin:'1em'}}>
            <input type="text"
             placeholder="name"
             onChange = {(e) =>{
             setName(e.target.value)}}/>
             </div>

             <div style={{ display: 'flex', height:'2em',margin:'1em'}}>
            <input type="text" 
            placeholder="email"
            onChange = {(e) =>{
            setEmail(e.target.value)}}/>
            </div>

            <div style={{ display: 'flex', height:'2em',margin:'1em'}}>
            <input type="text" 
            placeholder="age"
            onChange = {(e) =>{
            setAge(parseInt(e.target.value))}}/>
            </div>
            <button className="createCustomerBtn" onClick={newCustomer}>Create Customer</button>
        </div>
    )
}
