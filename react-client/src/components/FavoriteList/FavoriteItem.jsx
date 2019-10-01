import React from 'react';

const FavoriteItem = (props) => {
  const { favoriteItem, unfavoriteHandler } = props;
  const {
    id, apiid, title, readyInMinutes, servings,
  } = favoriteItem;
  let imgUrl;
  if (!apiid) {
    imgUrl = `https://spoonacular.com/recipeImages/${id}-312x231.jpg`;
  } else {
    imgUrl = `https://spoonacular.com/recipeImages/${apiid}-312x231.jpg`;
  }
  return (
    <span>
      <div>{title}</div>
      <img src={imgUrl} />
      <div>
        Ready in
        {' '}
        {readyInMinutes}
        {' '}
        minutes
      </div>
      <div>
        {readyInMinutes}
        {' '}
        servings
      </div>
      <button type="button" onClick={() => { unfavoriteHandler(favoriteItem); }}>un-Favorite this Recipe!</button>
    </span>
  );
};

export default FavoriteItem;
