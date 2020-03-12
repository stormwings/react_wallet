import React from 'react';

import PropTypes from 'prop-types';


const Disclaimer = props => {
    const { multiple, children } = props;

    return (
        <div className="disclaimer">
            { multiple
                ? children.map((child, i) => <p key={i}>{ child }</p>)
                : <p>{ children }</p>
            }
        </div>
    );
};


Disclaimer.propTypes = {
    /**
     * The disclaimers list or array.
    */
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    /**
     * Check multiple values.
    */
    multiple: PropTypes.bool
};


export default Disclaimer;
