const { Component } = require('react');

class Filter extends Component {
  filterByName = evt => {
    this.props.filterForm(evt.currentTarget.value);
  };

  render() {
    return (
      <>
        <h3>Find contacts by name:</h3>
        <input
          type="text"
          name="filter"
          title="filter contacts"
          required
          onChange={this.filterByName}
        />
      </>
    );
  }
}

export { Filter };
