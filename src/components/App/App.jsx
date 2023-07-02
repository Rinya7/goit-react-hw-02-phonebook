import { Container } from './App.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleContactSubmits = (name, number) => {
    let repeatName = 0;
    this.state.contacts.map(contact => {
      if (
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
      ) {
        repeatName = 1;
        alert(`${name} is already in contacts`);
      }
    });
    if (!repeatName) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(previus => {
        return {
          contacts: [contact, ...previus.contacts],
        };
      });
    }
  };

  filterByName = filteredName => {
    this.setState({
      filter: filteredName,
    });
  };

  deleteContact = contactId => {
    this.setState(previus => ({
      contacts: previus.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    console.log(this.state);
    const { contacts, filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm onSubmitForm={this.handleContactSubmits} />
        <h2>Contacts</h2>
        <Filter filterForm={this.filterByName} />
        <ContactList
          contacts={contacts}
          filter={filter}
          buttonDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export { App };
