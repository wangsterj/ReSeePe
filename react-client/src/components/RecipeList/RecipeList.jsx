import React from 'react';
import styled from 'styled-components';
import RecipeItem from './RecipeItem.jsx';

const RecipeList = (props) => {
  const { recipeItems, loggedIn, favoriteHandler } = props;

  // if not logged in, don't render!
  if (!loggedIn) {
    return null;
  }
  let header;
  if (recipeItems.length !== 0) {
    header = (<H4>Recipe Search Results:</H4>);
  }
  return (
    <div>
      {header}
      <div>
        { recipeItems.map((recipeItem, index) => <RecipeItem recipeItem={recipeItem} key={recipeItem.id} favoriteHandler={favoriteHandler} />)}
      </div>
    </div>
  );
};

const H4 = styled.div`
  display: inline-block;
  font-weight: bold;
  padding-top: 10px;
  margin-right: 50%;
  `;

export default RecipeList;
