import React from 'react';
import './Text.scss';

interface IProps {
  className?: string;
  content: string;
}

export const Title = ({ content, className }: IProps) => {
  const componentClassName = `global--title ${className}`;
  return <h2 className={componentClassName}>{content}</h2>;
};

export const Subtitle = ({ content, className }: IProps) => {
  const componentClassName = `global--subtitle ${className}`;
  return <h3 className={componentClassName}>{content}</h3>;
};
