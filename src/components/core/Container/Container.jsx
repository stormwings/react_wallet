import React from 'react';

import PropTypes from 'prop-types';


const Container = props => {
    const { className, children } = props;

    return (
        <div className={`content__wrapper ${className || ''}`}>
            {children}
        </div>
    );
};


Container.propTypes = {
    /**
     * The content of the component.
    */
    children: PropTypes.node.isRequired,
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    className: PropTypes.string,
};


export default Container;
