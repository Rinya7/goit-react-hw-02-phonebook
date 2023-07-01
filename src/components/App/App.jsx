import { Container } from './App.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = evt.currentTarget;
    console.log(name);
    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    this.setState({
      name: name.value,
      number: number.value,
    });

    this.setState(previus => {
      return {
        contacts: [contact, ...previus.contacts],
      };
    });

    evt.currentTarget.reset();
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor="Number">Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />

            <button type="submit">Add contact</button>
          </form>
        </>
        <>
          <h2>Contacts</h2>
          <h3>Find contacts by name:</h3>
          <input type="text" name="filter" title="filter contacts" required />
          <ul>
            {this.state.contacts.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}:{contact.number}
                </li>
              );
            })}
          </ul>
        </>
      </Container>
    );
  }
}

export { App };
