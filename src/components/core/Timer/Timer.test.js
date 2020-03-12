import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Timer from './Timer';


afterEach(cleanup);

const componentProps = {
    key: "timer",
    expiringTime: 5,
    onFinish: () => null
};


describe('<Timer />', () => {
    test('Render props correctly', () => {
        const { container } = render(<Timer {...componentProps} />);
    
        expect(container.children).toHaveLength(1);
    });
});
