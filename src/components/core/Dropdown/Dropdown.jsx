import React from 'react';

import PropTypes from 'prop-types';


const Ul = props => {
    const { list, ulClassName, disabled, id } = props;

    if (disabled) {return null;}

    const listItems = list.map((obj, index) =>
        (
            <li
                className={obj.disabled ? '--disabled' : ''}
                id={`${id}_li`}
                key={index}
                onClick={obj.onClick && !obj.disabled ? obj.onClick : null}
            >
                {obj.content}
            </li>
        )
    );

    return (
        <ul className={`dropdown__list ${ulClassName ? ulClassName : ''}`}>
            { listItems }
        </ul>
    );
};

const Dropdown = props => {
    const { 
        className,
        id,
        onClickDropdown,
        children,
        buttonClass,
        onClickButton,
        buttonContent,
        disabled,
        list,
        ulClassName
    } = props;

    return (
        <div
            className={`dropdown ${className ? className : ''}`}
            id={id}
            onClick={onClickDropdown}
        >
            { children }
            <a
                className={buttonClass
                    ? buttonClass
                    : "dropdown__button"
                }
                id={id ? `${id}_button` : ''}
                onClick={onClickButton}
            >
                { buttonContent }
            </a>
            {list ? 
                <Ul
                    disabled={disabled}
                    id={id}
                    list={list}
                    ulClassName={ulClassName}
                />
                : null
            }
        </div>
    );
};


Ul.propTypes = {
    /**
     * Define if item is disabled.
    */
    disabled: PropTypes.bool,
    /**
     * Specifies a Unique id to the element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Item list to render.
    */
    list: PropTypes.arrayOf(PropTypes.object),
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    ulClassName: PropTypes.string
};

Dropdown.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    buttonClass: PropTypes.string,
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    buttonContent: PropTypes.string.isRequired,
    /**
     * The component that load if not loading.
    */
    children: PropTypes.node.isRequired,
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    className: PropTypes.string,
    /**
     * Define if dropdown is disabled.
    */
    disabled: PropTypes.bool,
    /**
     * Specifies a Unique id to the button element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Callback fired when row clicked.
     *
     * @param {object} event The event source of the callback.
    */
    list: PropTypes.arrayOf(PropTypes.object),
    /**
     * Callback fired when button clicked.
     *
     * @param {object} event The event source of the callback.
    */
    onClickButton: PropTypes.func.isRequired,
    /**
     * Callback.
     *
     * @param {object} event The event source of the callback.
    */
    onClickDropdown: PropTypes.func,
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    ulClassName: PropTypes.string
};


export default Dropdown;
