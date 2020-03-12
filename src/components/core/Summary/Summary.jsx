import React from 'react';

import PropTypes from 'prop-types';


const Item = ({ text, content, itemClass }) => (
    <div 
        className={`${itemClass || 'summary--item'}--count`}
        data-testid="summary--item"
    >
        <div className="--dark">{ text }</div>
        <span>{ content }</span>
    </div>
);

const Result = ({ result, withoutResult, itemClass }) => 
    withoutResult
        ? null
        :
        <Item
            content={result.content}
            itemClass={itemClass}
            text={result.text}
        />;

const Summary = props => {
    const { items, itemClass, className, withoutResult, result } = props;

    if (!items) {return null;}

    const i = items.map(
        (item, index) =>
            (
                <Item
                    content={item.content}
                    itemClass={itemClass}
                    key={`item-${index}`}
                    text={item.text}
                />
            )
    );

    return (
        <div className={className || ''}>
            { i }
            { !withoutResult && <hr /> }
            <Result
                itemClass={itemClass}
                result={result}
                withoutResult={withoutResult}
            />
        </div>
    );
};


Item.propTypes = {
    /**
     * The content of the component.
    */
    content: PropTypes.string,
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    itemClass: PropTypes.string,
    /**
     * The title of the component value.
    */
    text: PropTypes.string
};

Result.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    itemClass: PropTypes.string,
    /**
     * Object result.
    */
    result: PropTypes.object,
    /**
     * Define if show result.
    */
    withoutResult: PropTypes.bool
};

Summary.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    className: PropTypes.string,
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    itemClass: PropTypes.string,
    /**
     * Summary array items.
    */
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    /**
     * Object result.
    */
    result: PropTypes.object,
    /**
     * Define if show result.
    */
    withoutResult: PropTypes.bool
};


export default Summary;
