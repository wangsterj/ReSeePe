import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import List from './components/List.jsx';
import RecipeList from './components/RecipeList/RecipeList.jsx';
import FavoriteList from './components/FavoriteList/FavoriteList.jsx';
import SearchBar from './components/RecipeList/SearchBar.jsx';
import Login from './components/Login/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeItems: [],
      // loggedIn: true,
      loggedIn: false,
      userID: 0,
      favoriteList: [],
    };
    this.recipeQuery = this.recipeQuery.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.favoriteHandler = this.favoriteHandler.bind(this);
    this.getFavoriteRecipes = this.getFavoriteRecipes.bind(this);
    this.unfavoriteHandler = this.unfavoriteHandler.bind(this);
  }

  componentDidMount() {
    this.getFavoriteRecipes();
    // this.recipeQuery('cookies');
  }

  getFavoriteRecipes() {
    const { userID } = this.state;
    axios.get(`/api/favoriteRecipes/${userID}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          favoriteList: response.data,
        });
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
    })
      .then((result) => {
        this.getFavoriteRecipes();
      });
  }

  // deletes recipe from user's favorite list and updates current list
  unfavoriteHandler(recipeItem) {
    const { id, apiid } = recipeItem;
    const { userID } = this.state;
    axios.delete(`/api/favoriteRecipes/${id}/${userID}`)
      .then((response) => {
        this.getFavoriteRecipes();
      });
  }

  loginHandler(userID) {
    this.setState({ loggedIn: true, userID });
  }

  render() {
    const {
      recipeItems, loggedIn, favoriteList,
    } = this.state;
    return (
      <Div>

        <H1>ReSeePe</H1>
        <Text>(reh·see·pee)</Text>
        <Desc>Visualize your favorite recipes!</Desc>
        {/* {loggedIn === 0 ? <Login loginHandler={this.loginHandler} /> : null} */}
        <Login loginHandler={this.loginHandler} loggedIn={loggedIn} />

        <SearchBar recipeQuery={this.recipeQuery} loggedIn={loggedIn} />
        <RecipeList recipeItems={recipeItems} loggedIn={loggedIn} favoriteHandler={this.favoriteHandler} />
        <FavoriteList favoriteItems={favoriteList} loggedIn={loggedIn} unfavoriteHandler={this.unfavoriteHandler} />
      </Div>
    );
  }
}

const Desc = styled.div`
padding-top:15px;
padding-bottom:10px;
`;

const Div = styled.div`
margin-top: 10px;
font-family: 'didot';
position: relative;
text-align: center;
`;

const H1 = styled.div`
  display: block;
  font-size: 2.5em;
  font-weight: bold;
`;

const Text = styled.div`
  color: #969696;
  font-style: italic;
  font-size: .85em;
`;

ReactDOM.render(<App />, document.getElementById('app'));
