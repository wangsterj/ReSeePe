import React from 'react';

const ListItem = (props) => {
  console.log(props.item);
  return (
  <div>
    { props.item.description }
  </div>
  )
}

export default ListItem;