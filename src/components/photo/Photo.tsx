import React, { forwardRef } from 'react';

export const Photo = forwardRef(({ src, style, ...props }: any, ref) => {
  const inlineStyles = {
    transformOrigin: '0 0',
    height: 200,
    width: 200,
    // backgroundImage: `url("${src}")`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    ...style,
  };

  return <img ref={ref} src={src} style={inlineStyles} {...props} alt="" />;
});
