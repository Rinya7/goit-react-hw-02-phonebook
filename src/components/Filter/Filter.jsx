import PropTypes from 'prop-types';
import { Input, Title, Div } from './Filter.styled';
const { Component } = require('react');

class Filter extends Component {
  filterByName = evt => {
    this.props.filterForm(evt.currentTarget.value);
  };

  render() {
    return (
      <Div>
        <Title>Find contacts by name:</Title>
        <Input
          type="text"
          name="filter"
          title="filter contacts"
          required
          onChange={this.filterByName}
        />
      </Div>
    );
  }
}

export { Filter };

Filter.protoType = {
  filterByName: PropTypes.func,
};
