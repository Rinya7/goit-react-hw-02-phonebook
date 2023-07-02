import { Form, FildInput, Label, Button, Div } from './ContactsForm.styled';
const { Component } = require('react');

class ContactsForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = evt.currentTarget;
    this.props.onSubmitForm(name.value, number.value);
    evt.currentTarget.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Div>
          <Label htmlFor="Name">Name</Label>
          <FildInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Div>
        <Div>
          <Label htmlFor="Number">Number</Label>
          <FildInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Div>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export { ContactsForm };
