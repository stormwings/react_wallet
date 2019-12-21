import React, { FunctionComponent } from 'react';
import './Button.scss';

interface IProps {
  content: string;
  disabled?: boolean;
  onClick?: Function;
}

const Button: FunctionComponent<IProps> = props => {
  const { content, disabled, onClick } = props;
  return (
    <div id="button--container">
      <button className="button" disabled={disabled ? true : false} onClick={() => (onClick ? onClick() : defaultProps.onClick())}>
        {content}
      </button>
    </div>
  );
};

const defaultProps = {
  onClick: () => {
    return;
  }
};

export default Button;
