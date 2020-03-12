import React from 'react';

import PropTypes from 'prop-types';

import { Icon } from 'ripio-icons';


const TooltipButton = ({ icon }) => icon
    ? <div className="tooltip__button">
        <Icon name={icon} />
    </div>
    : null;

const TooltipContent = ({ children }) => children
    ? <div className="tooltip__content">
        {children}
    </div>
    : null;

const RPTooltip = props => {
    const { className, id, icon, children } = props;

    return (
        <div
            className={`tooltip ${className || ''}`}
            id={id}
        >
            <TooltipButton icon={icon} />
            <TooltipContent>
                {children}
            </TooltipContent>
        </div>
    );
};


TooltipButton.propTypes = {
    /**
     * The icon's button.
     * See [Ripio-Icons API] below for more details.
    */
    icon: PropTypes.string,
};

TooltipContent.propTypes = {
    /**
     * The component that load if not loading.
    */
    children: PropTypes.node,
};

RPTooltip.propTypes = {
    /**
     * The component that load if not loading.
    */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    className: PropTypes.string,
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
};


export default RPTooltip;
