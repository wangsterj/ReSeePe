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
      // items: [],
      recipeItems: [],
      loggedIn: true,
      // loggedIn: false,
      userID: 0,
      favoriteList: [],
    };
    this.recipeQuery = this.recipeQuery.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.favoriteHandler = this.favoriteHandler.bind(this);
  }

  componentDidMount() {
    const { userID } = this.state;
    axios.get(`/api/favoriteRecipes/${userID}`)
      .then((response) => {
        console.log(response);
        // this.setState({
        //   favoriteList: response.data,
        // });
      })
      .catch((err) => {
        console.log('err', err);
      });
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

  favoriteHandler(recipeItem) {
    const { favoriteList, userID } = this.state;
    axios.post('/api/favoriteRecipes', {
      recipeItem,
      userID,
    }, () => {
      favoriteList.push(recipeItem);
      this.setState({ favoriteList });
    });
  }

  loginHandler(userID) {
    this.setState({ loggedIn: true, userID });
  }

  render() {
    const { items, recipeItems, loggedIn } = this.state;
    return (
      <div>
        <h1>ReSeePe</h1>
        {/* {loggedIn === 0 ? <Login loginHandler={this.loginHandler} /> : null} */}
        <Login loginHandler={this.loginHandler} loggedIn={loggedIn} />

        <SearchBar recipeQuery={this.recipeQuery} loggedIn={loggedIn} />
        <RecipeList recipeItems={recipeItems} loggedIn={loggedIn} favoriteHandler={this.favoriteHandler} />


        {/* <h1>Item List</h1> */}
        {/* <List items={items} /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
