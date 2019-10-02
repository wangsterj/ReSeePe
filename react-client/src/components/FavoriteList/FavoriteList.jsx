import React from 'react';
import styled from 'styled-components';
import FavoriteItem from './FavoriteItem.jsx';

const FavoriteList = (props) => {
  const { favoriteItems, loggedIn, unfavoriteHandler } = props;

  // if not logged in, don't render!
  if (!loggedIn) {
    return null;
  }
  let header;
  // if (favoriteItems.length !== 0) {
  header = (<H4>Favorite List:</H4>);
  // }
  return (
    <div>
      {header}
      <div>
        { favoriteItems.map((favoriteItem, index) => <FavoriteItem favoriteItem={favoriteItem} key={favoriteItem.id} unfavoriteHandler={unfavoriteHandler} />)}
      </div>
    </div>
  );
};

const H4 = styled.div`
  display: inline-block;
  font-weight: bold;
  padding-top: 10px;
  `;
export default FavoriteList;
