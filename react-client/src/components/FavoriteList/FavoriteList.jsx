import React from 'react';
import FavoriteItem from './FavoriteItem.jsx';

const FavoriteList = (props) => {
  const { favoriteItems, loggedIn, unfavoriteHandler } = props;

  // if not logged in, don't render!
  if (!loggedIn) {
    return null;
  }
  let header;
  if (favoriteItems.length !== 0) {
    header = (<h4>FavoriteList</h4>);
  }
  return (
    <div>
      {header}
      <div>
        { favoriteItems.map((favoriteItem, index) => <FavoriteItem favoriteItem={favoriteItem} key={favoriteItem.id} unfavoriteHandler={unfavoriteHandler} />)}
      </div>
    </div>
  );
};

export default FavoriteList;
