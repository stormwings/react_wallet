import React from 'react';
import './Text.scss';

interface IPropsText {
  content: string;
  className?: string;
  style?: object;
}

export const Title = ({ content, className, style }: IPropsText) => {
  return (
    <h2 id="global--title" className={className} style={style}>
      {content}
    </h2>
  );
};
export const Subtitle = ({ content, className }: IPropsText) => {
  return (
    <h3 id="global--subtitle" className={className}>
      {content}
    </h3>
  );
};
