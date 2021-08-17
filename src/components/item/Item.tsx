import React /* useState */ from 'react';

function Item(props: { id: number; src: string }): React.ReactElement {
  return (
    <li id={`${props.id}`}>
      <img src={props.src} alt="" />
    </li>
  );
}

export default Item;
