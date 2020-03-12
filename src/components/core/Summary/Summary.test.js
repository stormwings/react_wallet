import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Summary from './Summary';


afterEach(cleanup);

const componentProps = {
    withoutResult: false,
    className: "invoice",
    itemClass: "invoice__card",
    result: {
        text: "Total",
        content: "500",
        itemClass:"invoice__card"
    },
    items: [
        {
            text: "Compañía",
            content: "Personal"
        },
        {
            text: "Número de teléfono",
            content: "2216241093"
        },
        {
            text: "Fecha de creación",
            content: "02/09/2019"
        }
    ]
};


describe('<Summary />', () => {
    test('should render class correctly', () => {
        const { container, rerender } = render(<Summary {...componentProps} />);
    
        const summary = container.firstChild;
    
        expect(summary.className).toContain('invoice');
    
        rerender(
            <Summary 
                {...componentProps}
                className={null}
            />
        );
    
        expect(summary.className).toEqual('');
    });

    test('should render', () => {
        const { getAllByTestId, rerender } = render(<Summary {...componentProps} />);

        const items = getAllByTestId('summary--item');

        expect(items[0].className).toEqual('invoice__card--count');
        expect(items[1].className).toEqual('invoice__card--count');
        expect(items[2].className).toEqual('invoice__card--count');

        rerender(
            <Summary
                {...componentProps}
                itemClass={null}
            />
        );
    
        expect(items[0].className).toEqual('summary--item--count');
        expect(items[1].className).toEqual('summary--item--count');
        expect(items[2].className).toEqual('summary--item--count');
    });
    
    test('should render items and result correctly', () => {
        const { container, getByText } = render(<Summary {...componentProps} />);
    
        const items = container.querySelectorAll('.invoice__card--count');
    
        expect(items[0].children[0].textContent).toEqual('Compañía');
        expect(items[0].children[1].textContent).toEqual('Personal');
    
        expect(items[1].children[0].textContent).toEqual('Número de teléfono');
        expect(items[1].children[1].textContent).toEqual('2216241093');
    
        expect(items[2].children[0].textContent).toEqual('Fecha de creación');
        expect(items[2].children[1].textContent).toEqual('02/09/2019');
    
        expect(getByText('500').textContent).toEqual('500');
    
        expect(container.getElementsByTagName('span')).toHaveLength(4);
    });

    test('should not generate result', () => {
        const { getAllByTestId, rerender } = render(<Summary {...componentProps} />);

        expect(getAllByTestId('summary--item')).toHaveLength(4);

        rerender(
            <Summary
                {...componentProps}
                withoutResult
            />
        );

        expect(getAllByTestId('summary--item')).toHaveLength(3);
    });
});
