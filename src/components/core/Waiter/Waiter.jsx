import React from 'react';

import PropTypes from 'prop-types';


const Loader = ({ loader }) => loader ? loader : null;

const Waiter = ({ shouldRender, loader, children }) => (
    shouldRender() 
        ? children
        : <Loader loader={loader} />
);


Waiter.propTypes = {
    /**
    * The component that load if not loading.
    */
    children: PropTypes.node,
    /**
    * The component that load if loading.
    */
    loader: PropTypes.node,
    /**
     * Callback that checks loading.
     *
     * @param {object} event The event source of the callback.
     */
    shouldRender: PropTypes.func.isRequired,
};


export default Waiter;
