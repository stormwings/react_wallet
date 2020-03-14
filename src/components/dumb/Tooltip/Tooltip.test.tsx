import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Tooltip from './Tooltip';

afterEach(cleanup);

const componentProps = {
    className: 'custom__tooltip',
    icon: 'question',
    children: <div id="children">Children</div>
};

describe('<Tooltip>', () => {
    test('should render class correctly', () => {
        const { getByTestId, rerender } = render(<Tooltip {...componentProps} />);
    
        const tooltip = getByTestId('tooltip');
    
        expect(tooltip.className).toContain('custom__tooltip');
    
        rerender(
            <Tooltip
                {...componentProps}
                className={''}
            />
        );
    
        expect(tooltip.className).toEqual('tooltip ');
    });
    
    test('should render icon', () => {
        const { getByTestId } = render(<Tooltip {...componentProps} />);
    
        const tooltip = getByTestId('tooltip');

        expect(tooltip.firstChild).toBeTruthy();
        expect(tooltip.children).toHaveLength(2);
    });
    
    test('children should renders correctly', () => {        
        const { container } = render(<Tooltip {...componentProps} />);
    
        const tooltipContent: any = container.querySelector('.tooltip > .tooltip__content')?.firstChild;
    
        expect(tooltipContent.id).toEqual('children');
        expect(tooltipContent.textContent).toEqual('Children');
    });
});
