import React, { FunctionComponent } from 'react';
import './Button.scss';

// example
/* <Button content="Login" onClick={() => console.log('click')} /> */

interface IProps {
  content: string;
  onClick: Function;
}

const Button: FunctionComponent<IProps> = props => {
  const { content, onClick } = props;
  return (
    <div id="button--container">
      <button className="button" onClick={() => (onClick ? onClick() : defaultProps.onClick())}>
        {content}
      </button>
    </div>
  );
};

const defaultProps = {
  onClick: () => console.log('onClick empty')
};

export default Button;
