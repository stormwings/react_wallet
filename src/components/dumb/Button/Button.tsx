import React, { FunctionComponent } from 'react';
import './Button.scss';
import bitcoin from './../../../assets/svg/icon_bitcoin.svg';

type ButtonTypes = "button" | "submit" | "reset";

interface IProps {
  /**
   * The content of the button.
  */
  content: string;
  /**
   * Override or extend the styles applied to the component.
  */
  className?: string;
  /**
   * Handle enable/disabled button's feature.
  */
  disabled?: boolean;
  /**
   * The icon's button.
  */
  icon?: string;
  /**
   * Callback fired when the component requests to be clicked.
  */
  onClick?: Function;
  /**
   * Specifies the button's type to display. 
  */
  type?: ButtonTypes;
}

const Button: FunctionComponent<IProps> = props => {
  const { content, disabled, onClick, className, type, icon } = props;

  return (
    <div id="button--container">
      <button 
        className={`button ${className || ''} ${icon ? '--icon' : ''}`}
        disabled={disabled}
        onClick={() => (onClick ? onClick() : defaultProps.onClick())}
        type={type || 'submit'}
      >
        {icon && <img src={bitcoin} />}
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
