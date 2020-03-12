import React from 'react';

import PropTypes from 'prop-types';

import StylesConstants from './../../utils/stylesConstants';


const Card = props => {
    const { col, className, id, onClick, children } = props;

    const column = col ? StylesConstants.cols[col] : StylesConstants.cols[0];

    return (
        <div
            className={`${className ? className : ''} --box ${column}`}
            id={id}
            onClick={onClick || null}
        >
            { children }
        </div>
    );
};


Card.propTypes = {
    /**
     * The content of the component.
    */
    children: PropTypes.node.isRequired,
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
     */
    className: PropTypes.string,
    /**
     * The number of columns.
    */
    col: PropTypes.number,
    /**
     * Specifies a Unique id to the table.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Callback fired when the table's row clicked.
     *
     * @param {object} event The event source of the callback.
    */
    onClick: PropTypes.func
};


export default Card;
