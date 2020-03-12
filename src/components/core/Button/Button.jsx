import React from 'react';

import PropTypes from 'prop-types';

import { Icon } from 'ripio-icons';


const Button = props => {
    const { className, disabled, id, onClick, type, content, icon } = props;

    return (
        <button
            className={`button ${className || ''} ${icon ? '--icon' : ''}`}
            disabled={disabled}
            id={id}
            onClick={onClick ? onClick : null}
            type={type || 'submit'}
        >
            { icon && <Icon name={icon} /> }
            { content }
        </button>
    );
};


Button.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    className: PropTypes.string,
    /**
     * The content of the button.
    */
    content: PropTypes.string.isRequired,
    /**
     * If `true`, the button will be disabled.
    */
    disabled: PropTypes.bool,
    /**
     * The icon's button.
     * See [Ripio-Icons API] below for more details.
    */
    icon: PropTypes.string,
    /**
     * Specifies a Unique id to the button element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Callback fired when the component requests to be clicked.
     *
     * @param {object} event The event source of the callback.
    */
    onClick: PropTypes.func,
    /**
     * Specifies the type of <input> element to display. 
    */
    type: PropTypes.string,
};


export default Button;
