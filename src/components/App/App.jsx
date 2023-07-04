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
    const simpleContact = this.state.contacts.find(
      contact =>
        contact.number.toLocaleLowerCase() === number.toLocaleLowerCase() ||
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    console.log(simpleContact);
    if (simpleContact) {
      alert(`${simpleContact} is already in contacts`);
    }

    if (!simpleContact) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      console.log(contact);
      this.setState(previus => {
        return {
          contacts: [contact, ...previus.contacts],
        };
      });
      console.log(this.state);
    }
  };

  filterByName = filteredName => {
    this.setState(previus => ({
      filter: filteredName,
      contacts: previus.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filteredName.toLowerCase())
      ),
    }));
  };

  deleteContact = contactId => {
    this.setState(previus => ({
      contacts: previus.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm onSubmitForm={this.handleContactSubmits} />
        <h2>Contacts</h2>
        <Filter filterForm={this.filterByName} />
        <ContactList contacts={contacts} buttonDelete={this.deleteContact} />
      </Container>
    );
  }
}

export { App };
