import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  render() {
    const { recipeQuery } = this.props;
    return (
      <div>
        <input type="text" placeholder="Search recipes..." onChange={(event) => { this.setState({ input: event.target.value }); }} />
        <button type="button" onClick={recipeQuery}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
