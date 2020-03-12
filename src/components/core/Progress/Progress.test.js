import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Progress from './Progress';


afterEach(cleanup);

const componentProps = {
    begin: { value: 0 },
    end: { value: 15 }
};


describe('<Progress />', () => {
    test('begin and end should set correctly', () => {
        const { container } = render(<Progress {...componentProps} />);
    
        const progress = container.getElementsByTagName('progress')[0];
    
        expect(progress.max).toEqual(15);
        expect(progress.value).toEqual(0);
    });
});
