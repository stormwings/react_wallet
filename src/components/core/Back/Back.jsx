import React from 'react';

import PropTypes from 'prop-types';


const RPBack = props =>  {
    const { goBack, children, string } = props;

    return (
        <div
            className="section__subtitle"
            onClick={() => goBack()}
        >
            <a id="go_back_button">{ string }</a>
            {children}
        </div>
    );
};


RPBack.propTypes = {
    /**
     * The children component.
    */
    children: PropTypes.node,
    /**
     * Callback fired when the table's row clicked.
     *
     * @param {object} event The event source of the callback.
    */
    goBack: PropTypes.func.isRequired,
    /**
     * The content of the button.
    */
    string: PropTypes.string.isRequired,
};


export default RPBack;
