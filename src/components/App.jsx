import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', tel: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', tel: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', tel: '227-91-26'},
    ],
    filter: ''
  }
  
  formSubmitHandler = data => { 
    console.log('data', data);
  }

  addContact = (event) => {
    const contact = {
      id: nanoid(),
      name: event.name,
      tel: event.tel,
    };

    this.state.contacts.some(elem =>
      contact.name.toLowerCase() === elem.name.toLowerCase())
      ? alert(`${contact.name} is already in contacts.`)
      : this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts]
      }));
  };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   console.log(this.state);
  // };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  deleteContact = (idContact) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== idContact)
    }))
  };
  
  render() { 
    const { contacts, filter } = this.state;
    
    const filterCotacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    
    return (
      
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
        <ContactList
          data={filterCotacts}
          onDeleteContact={this.deleteContact}
        />
      </div>       
    ) 
  }
  
};
