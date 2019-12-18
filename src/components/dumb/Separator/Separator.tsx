import React, { FunctionComponent } from 'react';
import './Separator.scss';

interface IProps {
  className?: string;
}

const Separator: FunctionComponent<IProps> = props => {
  const { className } = props;
  const componentClass = `separator ${className ? className : ''}`;

  return <hr className={componentClass} />;
};

export default Separator;
