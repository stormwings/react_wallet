import React, { FunctionComponent } from 'react';
import './Avatar.scss';

interface IProps {
  id: string;
  image: string;
  size?: 'small' | 'medium' | 'big';
}

const Avatar: FunctionComponent<IProps> = ({ image, size }) => (
  <img 
    id="avatar" 
    className={`avatar --${size ? size : 'small'}`} 
    src={image} 
    alt="user avatar"
  />
);

export default Avatar;
