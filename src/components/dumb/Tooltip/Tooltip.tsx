import React, { FunctionComponent } from 'react';
import bitcoin from './../../../assets/svg/icon_bitcoin.svg';
import './Tooltip.scss'

interface ITooltipButtonProps {
    /**
     * The icon's button.
    */
    icon: string
};
const TooltipButton: FunctionComponent<ITooltipButtonProps> = ({ icon }) => icon
    ? <div className="tooltip__button">
        <img src={bitcoin} />
    </div>
    : null;

interface ITooltipContentProps {
    /**
     * The component that load inside tooltip.
    */
    children: React.ReactNode
};
const TooltipContent: FunctionComponent<ITooltipContentProps> = ({ children }) => children
    ? <div className="tooltip__content">
        {children}
    </div>
    : null;

interface ITooltipProps {
    /**
     * The component that load if not loading.
    */
    children: React.ReactNode,
    /**
     * Override or extend the styles applied to the component.
    */
    className?: string,
    /**
     * The icon's button.
    */
    icon: string
};
const Tooltip: FunctionComponent<ITooltipProps> = props => {
    const { className, icon, children } = props;

    return (
        <div 
            className={`tooltip ${className || ''}`}
            data-testid="tooltip"
        >
            <TooltipButton icon={icon} />
            <TooltipContent>
                {children}
            </TooltipContent>
        </div>
    );
};

export default Tooltip;
