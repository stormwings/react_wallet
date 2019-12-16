import React, { FunctionComponent } from 'react';
import './Avatar.scss';

interface IProps {
  image: string;
  size?: 'small' | 'medium' | 'big';
}

const Avatar: FunctionComponent<IProps> = ({ image, size }) => {
  const className = `${size ? `image-${size}` : 'image-small'}`;
  return <img id="avatar-image" className={className} src={image} alt="avatar" />;
};

export default Avatar;
