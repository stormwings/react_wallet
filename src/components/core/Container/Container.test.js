import React from 'react';

import { render, cleanup } from '@testing-library/react';

import Container from 'src/core/Container';

afterEach(cleanup);

const componentProps = {
    className: 'custom_class',
    children: <div id="children">Children</div>
};

describe('<Container />', () => {
    test('should render class correctly', () => {
        const { container, rerender } = render(<Container {...componentProps} />);
    
        const component = container.firstChild;
    
        expect(component.className).toContain(componentProps.className);
    
        rerender(
            <Container 
                {...componentProps}
                className={null}
            />
        );
    
        expect(component.className).not.toContain(componentProps.className);
    });
    
    test('should render correctly', () => {        
        const { container } = render(<Container {...componentProps} />);
    
        const component = container.querySelector('#children');
    
        expect(component.textContent).toEqual('Children');
    });
});
