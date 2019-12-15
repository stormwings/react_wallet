import React, { FunctionComponent } from 'react';
import './Separator.scss';

// example (take container width)
/* <Separator /> */

interface IProps {
  className?: number;
}

const Separator: FunctionComponent<IProps> = props => {
  const { className } = props;
  const componentClass = `separator ${className ? className : defaultProps.className}`;

  return <hr className={componentClass} />;
};

const defaultProps = {
  className: '80-percent'
};

export default Separator;
