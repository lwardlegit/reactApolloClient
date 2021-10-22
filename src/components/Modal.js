import React, {useState} from 'react'
import { UPDATE_CUSTOMER_MUTATION } from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client';
import { parse } from 'graphql';

const Modal = props =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState(0);

    const [editCustomer, {error}] = useMutation(UPDATE_CUSTOMER_MUTATION)
    const changeCustomer = () =>{
        console.log('raw form data',name,email,age)
        editCustomer({
            variables: {
                id: props.id,
                name: name,
                email: email,
                age: parseInt(age)
            }
        })
        if(error){
            console.log(error);
        }
        props.closeModal(0)
    };



    
    if(!props.show){
        return null
    }else{
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>update customer details</h4>
                </div>

                <div className="modal-body">
                <div style={{ display: 'flex', height:'2em',margin:'1em'}}>
                    <input type="text"
                    placeholder="Name"
                    onChange = {(e) =>{
                    setName(e.target.value)}}/>
                </div>
                <div style={{ display: 'flex', height:'2em',margin:'1em'}}>
                    <input type="text"
                    placeholder="Email"
                    onChange = {(e) =>{
                    setEmail(e.target.value)}}/>
                </div>
                <div style={{ display: 'flex', height:'2em',margin:'1em'}}>
                    <input type="text"
                    placeholder="Age"
                    onChange = {(e) =>{
                    setAge(e.target.value)}}/>
                </div>
                </div>
               

                <div className="modal-footer">
                   <button className="updateBtn" onClick={changeCustomer}>Update</button>
                </div>
            </div>
        </div>
    )
}
}

export default Modal