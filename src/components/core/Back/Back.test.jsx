import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';

import Back from './Back';


const componentProps = { 
    goBack: jest.fn(),
    string: 'Go Back',
    children: <div id="children">Children</div>
};

afterEach(cleanup);
beforeEach(() => {
    componentProps.goBack.mockClear();
});


describe('<Back />', () => {
    test('should render with correct content', () => {
        const { container } = render(<Back {...componentProps} />);
    
        const backButton = container.querySelector('.section__subtitle > #go_back_button');
    
        expect(backButton.textContent).toEqual('Go Back');
    });
    
    test('click should call goBack function', () => {
        const { container } = render(<Back {...componentProps} />);
    
        const back = container.querySelector('.section__subtitle');
    
        fireEvent.click(back);
    
        expect(componentProps.goBack).toHaveBeenCalledTimes(1);
    });
    
    test('children component should renders correctly', () => {
        const { container } = render(<Back {...componentProps} />);
    
        const children = container.querySelector('.section__subtitle > #children');
    
        expect(children.textContent).toEqual('Children');
    });
});
