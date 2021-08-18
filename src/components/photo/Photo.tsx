import React, { forwardRef } from 'react';

type TProps = {
  src: string;
  style: object;
  index?: number;
  ref: React.ForwardedRef<HTMLLIElement>;
};

export const Photo = forwardRef(
  ({ src, style, ...props }: TProps, ref): React.ReactElement => {
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
  }
);
