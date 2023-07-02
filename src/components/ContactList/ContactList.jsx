import PropTypes from 'prop-types';
export const ContactList = ({ contacts, filter, buttonDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        if (name.toLowerCase().includes(filter)) {
          return (
            <li key={id}>
              {name}:{number}
              <button
                type="button"
                name="delete"
                onClick={() => buttonDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        }
      })}
    </ul>
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
