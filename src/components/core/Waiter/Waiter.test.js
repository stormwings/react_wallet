import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Waiter from './Waiter';

afterEach(cleanup);

const componentProps = {
    loader: <div id="loading">loading</div>,
    children: <div id="children">body</div>
};

describe('<Waiter />', () => {
    test('Render children and loader correctly', () => {
        const { container, rerender } = render(
            <Waiter
                {...componentProps}
                shouldRender={() => false}
            />
        );
    
        expect(container.querySelector('#loading')).toBeTruthy();
        expect(container.querySelector('#children')).toBeFalsy();
    
        rerender(
            <Waiter
                {...componentProps}
                shouldRender={() => true}
            />
        );
    
        expect(container.querySelector('#loading')).toBeFalsy();
        expect(container.querySelector('#children')).toBeTruthy();
    });
});
