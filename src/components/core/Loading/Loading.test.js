import React from 'react';

import { cleanup, render } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Loading from './Loading';


afterEach(cleanup);


describe('<Loading />', () => {
    test('Matches the snapshot', () => {
        const tree = renderer
            .create(<Loading />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Render correctly', () => {
        const { container: { firstChild } } = render(<Loading />);

        expect(firstChild).toBeTruthy();
    });
});
