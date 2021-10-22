import './App.css';
import React, {Component} from 'react'
import Form from './components/Form'
import CustomerList from './components/Customers';
import Modal from './components/Modal'

import { ApolloClient, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { InMemoryCache, useQuery, gql } from "@apollo/client";
import { ErrorLink, onError } from '@apollo/client/link/error';
import {from} from '@apollo/client';

const errorLink = onError(({ graphqlErrors,networkError}) =>{
if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      alert(`graphql ERROR ${message}`)
    })
  }
});

const link = from([
  errorLink, 
  new HttpLink({uri:'http://localhost:3000/graphql'})
])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});




export default class App extends Component{
  constructor(props) {
    super(props)
    this.state={ 
      show: false,
      id: null
    }
    
    this.setShowModal = this.setShowModal.bind(this);
  }

  setShowModal = (id) =>{
    console.log('id',id,'show',this.state.show)
    this.setState({show:!this.state.show, id:id})
  }
  


  render(){
    return (
      <ApolloProvider client={client}>
        <div className="container">
      
          <Form/>
            <div className="customerContainerDiv">
            <CustomerList setShowModal={this.setShowModal}/>
            </div>
            <Modal show={this.state.show} id={this.state.id} closeModal={this.setShowModal}/>
        </div>
      </ApolloProvider>

  );
  }
}


