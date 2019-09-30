import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  render() {
    const { recipeQuery, loggedIn } = this.props;
    // if not logged in, don't render!
    if (!loggedIn) {
      return null;
    }
    return (
      <div>
        <input type="text" placeholder="Search recipes..." onChange={(event) => { this.setState({ input: event.target.value }); }} />
        <button type="button" onClick={recipeQuery}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
