import React from 'react';
import styled from 'styled-components';

const RecipeItem = (props) => {
  const { recipeItem, favoriteHandler } = props;
  const {
    id, title, readyInMinutes, servings,
  } = recipeItem;
  const imgUrl = `https://spoonacular.com/recipeImages/${id}-312x231.jpg`;
  return (
    <Item>
      <Title>{title}</Title>
      <Img src={imgUrl} />
      <div>
        Ready in
        {' '}
        {readyInMinutes}
        {' '}
        minutes
      </div>
      {/* <div>
        {readyInMinutes}
        {' '}
        servings
      </div> */}
      <button type="button" onClick={() => { favoriteHandler(recipeItem); }}>Favorite this Recipe!</button>
    </Item>
  );
};
export const Title = styled.div`
  height: 36px;
  width: 150px;
  text-align:center;
  margin: auto auto;
  padding-bottom:5px;
  opacity: 1;
`;

export const Img = styled.img`
border-radius:5px;
  position: relative;
  top: 30%
  max-width: 80%;
  overflow: hidden;
  opacity: 1;
`;

export const Item = styled.div`
  margin: 0 5px;
  width: 300px;
  display: inline-block;
  border-radius: 10px;
  padding: 10px 0;
  background-color: white;
  opacity: .8;
  :hover {
    opacity: 1;
  }
`;

export default RecipeItem;
