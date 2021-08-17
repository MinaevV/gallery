import React, { forwardRef } from 'react';

export const Photo = forwardRef(({ src, style, ...props }: any, ref) => {
  const inlineStyles = {
    transformOrigin: '0 0',
    height: 200,
    width: 200,
    ...style,
  };

  return (
    <div ref={ref} style={inlineStyles} {...props}>
      <img src={src} alt="" />
    </div>
  );
});
