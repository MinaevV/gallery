import React from 'react';

type TGrid = {
  children: [];
  columns: number;
};

export function Grid({ children, columns }: TGrid) {
  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
      }}
    >
      {children}
    </ul>
  );
}
