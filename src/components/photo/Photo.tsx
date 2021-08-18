import React, { forwardRef } from 'react';

export const Photo = forwardRef(({ src, style, ...props }: any, ref) => {
  const inlineStyles = {
    transformOrigin: '0 0',

    cursor: 'pointer',
    ...style,
  };

  return (
    <li ref={ref} style={inlineStyles} {...props}>
      <img src={src} alt="" />
    </li>
  );
});
