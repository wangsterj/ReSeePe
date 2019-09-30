import React from 'react';
import RecipeItem from './RecipeItem.jsx';

const RecipeList = (props) => {
  const { recipeItems, loggedIn, favoriteHandler } = props;

  // if not logged in, don't render!
  if (!loggedIn) {
    return null;
  }
  return (
    <div>
      <h4>Recipe Options</h4>
      <div>
        { recipeItems.map((recipeItem, index) => <RecipeItem recipeItem={recipeItem} key={recipeItem.id} favoriteHandler={favoriteHandler} />)}
      </div>
    </div>
  );
};

export default RecipeList;
