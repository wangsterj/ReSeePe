import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => {
  console.log(props.items);
  return (
  <div>
    <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map((item,index) => <ListItem item={item} key = {item+index}/>)}
  </div>
  )
}

export default List;