import { Component } from "react";
import { nanoid } from 'nanoid'
import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";



const INITIAL__CONTACTS= [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

export class App extends Component {
state={
  contacts: INITIAL__CONTACTS,
  filter: ''
}
  handlerAddContact = ({ name, number }) => {
    const uniqueId = nanoid();
    const { contacts } = this.state;
    const checkOnIncludes = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase( ));
   
    const newContact = {
      id: uniqueId,
      name,
      number,
    }
    

        if (checkOnIncludes) {
      return alert('Change name')
        }

    this.setState(prevState => ({
      contacts: [newContact,...prevState.contacts]
    }))

  }

  handlerDeleteContact = (idContact) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>(contact.id !== idContact))
    }))
  }
  
  handlerFilterContact = (e) => {
    const { value } = e.currentTarget;

    this.setState({
      filter:value
    })
  
}

  getVisibleContacts = () => {
    const { filter,contacts } = this.state;
    const normalizeFilter = filter.toLowerCase().trim();
    return contacts.filter(contact=>(contact.name.toLowerCase().includes(normalizeFilter)))
  }
  
  render() {

    return (
      <div >
        <Form onSubmitInfo={this.handlerAddContact}></Form>
        <Contacts contacts={this.getVisibleContacts()} onDelete={this.handlerDeleteContact} onFilter={this.handlerFilterContact}></Contacts>
      </div>
    )
  }

};


