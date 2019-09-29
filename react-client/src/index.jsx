import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import RecipeList from './components/RecipeList/RecipeList.jsx';
import SearchBar from './components/RecipeList/SearchBar.jsx';
import Login from './components/Login/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      recipeItems: [],
    };
    this.recipeQuery = this.recipeQuery.bind(this);
  }

  componentDidMount() {
    axios.get('/api/allItems')
      .then((response) => {
        this.setState({
          items: response.data,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });

    // const { query } = this.state;
    // const query = 'hi';
    // axios.get(`/api/recipe-query/${query}`)
    //   .then((response) => {
    //     this.setState({
    //       recipeItems: response.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   });
  }

  recipeQuery(query) {
    axios.get(`/api/recipe-query/${query}`)
      .then((response) => {
        this.setState({
          recipeItems: response.data,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  render() {
    const { items, recipeItems } = this.state;
    return (
      <div>
        <h1>ReSeePe</h1>
        <Login />
        <SearchBar recipeQuery={this.recipeQuery} />
        <h4>Recipe Options</h4>
        <RecipeList recipeItems={recipeItems} />
        <h1>Item List</h1>
        {/* <List items={items} /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
