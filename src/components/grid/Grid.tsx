import React from 'react';

export function Grid({ children, columns }: any) {
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
