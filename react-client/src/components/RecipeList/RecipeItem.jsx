import React from 'react';

const RecipeItem = (props) => {
  const { recipeItem } = props;
  const {
    id, title, readyInMinutes, servings,
  } = recipeItem;
  const a = {
    id: 215435, title: 'Three-Cheese Pizza (For Cheese Lovers)', readyInMinutes: 45, servings: 8, image: 'three-cheese-pizza-for-cheese-lovers-215435.jpg', imageUrls: ['three-cheese-pizza-for-cheese-lovers-215435.jpg'],
  };
  const imgUrl = `https://spoonacular.com/recipeImages/${id}-312x231.jpg`;
  return (
    <div>
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
    </div>
  );
};

export default RecipeItem;
