import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Tooltip from './Tooltip';

afterEach(cleanup);

const componentProps = {
    className: 'custom__tooltip',
    id: '1'
};

describe('<Tooltip>', () => {
    test('should render class correctly', () => {
        const { container, rerender } = render(<Tooltip {...componentProps} />);
    
        const tooltip = container.querySelector('.tooltip');
    
        expect(tooltip.className).toContain(componentProps.className);
    
        rerender(
            <Tooltip
                {...componentProps}
                className={null}
            />
        );
    
        expect(tooltip.className).not.toContain(componentProps.className);
    });
    
    test('should render icon', () => {
        const { container, rerender } = render(<Tooltip {...componentProps} />);
    
        const button = container.querySelector('.tooltip');
        
        expect(button.firstChild).toBeFalsy();
        
        rerender(
            <Tooltip 
                {...componentProps}
                icon={'icon-share'}
            />);

        expect(button.firstChild).toBeTruthy();
        expect(button.children).toHaveLength(1);
    });
    
    test('children should renders correctly', () => {
        const children = <div id="children">Children</div>;
        
        const { container } = render(
            <Tooltip {...componentProps}>
                {children}
            </Tooltip>
        );
    
        const tooltipContent = container.querySelector('.tooltip > .tooltip__content').firstChild;
    
        expect(tooltipContent.id).toEqual('children');
        expect(tooltipContent.innerHTML).toEqual('Children');
    });
});
