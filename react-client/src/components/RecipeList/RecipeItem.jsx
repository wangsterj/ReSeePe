import React from 'react';

const RecipeItem = (props) => {
  const { recipeItem, favoriteHandler } = props;
  const {
    id, title, readyInMinutes, servings,
  } = recipeItem;
  const imgUrl = `https://spoonacular.com/recipeImages/${id}-312x231.jpg`;
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
      <button type="button" onClick={() => { favoriteHandler(recipeItem); }}>Favorite this Recipe!</button>
    </span>
  );
};

export default RecipeItem;
