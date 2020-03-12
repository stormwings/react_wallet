import React from 'react';

import PropTypes from 'prop-types';


const Progress = props =>  {
    const { begin, end } = props;

    return (
        <progress
            max={end && end.value}
            value={begin && begin.value}
        />
    );
};


Progress.propTypes = {
    /**
     * Start time
     */
    begin: PropTypes.shape({
        value: PropTypes.number.isRequired
    }).isRequired,
    /**
     * End time
     */
    end: PropTypes.shape({
        value: PropTypes.number.isRequired
    }.isRequired)
};


export default Progress;
