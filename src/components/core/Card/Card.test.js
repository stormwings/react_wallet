import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';

import Card from './Card';


const componentProps = { 
    className: 'custom_class',
    onClick: jest.fn(),
    id: 'unique_id',
    col: 1,
    children: <div id="children">Children</div>
};

afterEach(cleanup);
beforeEach(() => {
    componentProps.onClick.mockClear();
});


describe('<Card />' ,() => {
    test('should render children correctly', () => {
        const { container } = render(<Card {...componentProps} />);
    
        const children = container.querySelector('div > #children');
    
        expect(children.textContent).toEqual('Children');
    });

    test('should render class correctly', () => {
        const { container, rerender } = render(<Card {...componentProps} />);
    
        const card = container.firstChild;
    
        expect(card.className).toContain('custom_class');
    
        rerender(
            <Card 
                {...componentProps}
                className={null}
            />
        );
    
        expect(card.className).not.toContain('custom_class');
    });

    test('should render cols correctly', () => {
        const { container, rerender } = render(<Card {...componentProps} />);

        const card = container.firstChild;

        expect(card.className).toContain('col__1');

        rerender(
            <Card 
                {...componentProps}
                col={null}
            />
        );
        expect(card.className).not.toContain('col__');
    });
    
    test('should calls the correct function on click', () => {
        const { container } = render(<Card {...componentProps} />);
    
        const card = container.querySelector('#unique_id');
    
        fireEvent.click(card);
    
        expect(componentProps.onClick).toHaveBeenCalledTimes(1);
    });
});
