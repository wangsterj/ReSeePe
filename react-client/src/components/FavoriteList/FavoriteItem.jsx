import React from 'react';
import styled from 'styled-components';
import { Title, Img, Item } from '../RecipeList/RecipeItem.jsx';


const FavoriteItem = (props) => {
  const { favoriteItem, unfavoriteHandler } = props;
  const {
    id, apiid, title, readyinminutes, servings,
  } = favoriteItem;
  console.log(favoriteItem);
  let imgUrl;
  if (!apiid) {
    imgUrl = `https://spoonacular.com/recipeImages/${id}-312x231.jpg`;
  } else {
    imgUrl = `https://spoonacular.com/recipeImages/${apiid}-312x231.jpg`;
  }
  return (
    <Item>
      <Title>{title}</Title>
      <Img src={imgUrl} />
      <div>
        Ready in
        {' '}
        {readyinminutes}
        {' '}
        minutes
      </div>
      {/* <div>
        {servings}
        {' '}
        servings
      </div> */}
      <button type="button" onClick={() => { unfavoriteHandler(favoriteItem); }}>un-Favorite this Recipe!</button>
    </Item>
  );
};

export default FavoriteItem;
