import React from 'react';

import { cleanup, render } from '@testing-library/react';

import TPTextList from './TextList';

afterEach(cleanup);

const componentProps = {
    texts: [
        "First Item",
        "Second Item"
    ]
};

describe('<TextList />', () => {
    test('should render texts correctly', () => {
        const { container } = render(<TPTextList {...componentProps} />);
    
        const listChildrens = container.querySelectorAll('ul > li');
    
        expect(listChildrens).toHaveLength(2);
    
        expect(listChildrens[0].textContent).toEqual('First Item');
        expect(listChildrens[1].textContent).toEqual('Second Item');
    });
});
