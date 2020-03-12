import React from 'react';

import PropTypes from 'prop-types';


const TextList = ({ texts }) => {
    const list = texts 
        ? texts.map((text) => <li key={text}>{text}</li>)
        : [];

    return (
        <ul>
            { list }
        </ul>
    );
};


TextList.propTypes = {
    /**
     *  Texts list
     */
    texts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};


export default TextList;
