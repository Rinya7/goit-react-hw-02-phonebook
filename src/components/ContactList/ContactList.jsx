import { Ul, Li, Text } from './ContactList.styled';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, filter, buttonDelete }) => {
  return (
    <Ul>
      {contacts.map(({ name, id, number }) => {
        if (name.toLowerCase().includes(filter.toLowerCase())) {
          return (
            <Li key={id}>
              <Text>
                {name} : <span>{number}</span>
              </Text>

              <button
                type="button"
                name="delete"
                onClick={() => buttonDelete(id)}
              >
                Delete
              </button>
            </Li>
          );
        }
      })}
    </Ul>
  );
};

ContactList.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      is: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string,
  buttonDelete: PropTypes.func,
};
