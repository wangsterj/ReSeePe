import React from 'react';
import RecipeItem from './RecipeItem.jsx';

const RecipeList = (props) => {
  const { recipeItems } = props;
  return (
    <div>
      { recipeItems.map((recipeItem, index) => <RecipeItem recipeItem={recipeItem} key={recipeItem.id} />)}
    </div>
  );
};

export default RecipeList;
