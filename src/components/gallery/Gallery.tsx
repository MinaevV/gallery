import React /* useState */ from 'react';
import Item from '../item/Item';

const pictures = [
  {
    id: 0,
    path: require('./svg/1.svg').default,
  },
  {
    id: 1,
    path: require('./svg/2.svg').default,
  },
  {
    id: 2,
    path: require('./svg/3.svg').default,
  },

  {
    id: 3,
    path: require('./svg/4.svg').default,
  },

  {
    id: 4,
    path: require('./svg/5.svg').default,
  },

  {
    id: 5,
    path: require('./svg/6.svg').default,
  },

  {
    id: 6,
    path: require('./svg/7.svg').default,
  },
  {
    id: 7,
    path: require('./svg/8.svg').default,
  },

  {
    id: 8,
    path: require('./svg/9.svg').default,
  },

  {
    id: 9,
    path: require('./svg/10.svg').default,
  },

  {
    id: 10,
    path: require('./svg/11.svg').default,
  },

  {
    id: 11,
    path: require('./svg/12.svg').default,
  },

  {
    id: 12,
    path: require('./svg/13.svg').default,
  },

  {
    id: 13,
    path: require('./svg/14.svg').default,
  },

  {
    id: 14,
    path: require('./svg/15.svg').default,
  },

  {
    id: 15,
    path: require('./svg/16.svg').default,
  },
];

function Gallery(): React.ReactElement {
  type TMap = {
    id: number;
  };

  return (
    <div className="gallery">
      <ul className="gallery__pic-list">
        {pictures.map(({ id }: TMap, index: number) => {
          return <Item key={id} id={id} src={pictures[id].path} />;
        })}
      </ul>
    </div>
  );
}

export default Gallery;
