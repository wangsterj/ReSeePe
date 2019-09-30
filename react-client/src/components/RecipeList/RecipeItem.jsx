import React from 'react';

const RecipeItem = (props) => {
  const { recipeItem } = props;
  const {
    id, title, readyInMinutes, servings,
  } = recipeItem;
  const imgUrl = `https://spoonacular.com/recipeImages/${id}-312x231.jpg`;
  return (
    <span>
      <div>{title}</div>
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
      <img src={imgUrl} />
    </span>
  );
};

export default RecipeItem;
