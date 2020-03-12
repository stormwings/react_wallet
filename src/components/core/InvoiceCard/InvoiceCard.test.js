import React from 'react';

import { cleanup, render } from '@testing-library/react';

import InvoiceCard from './invoiceCard';


afterEach(cleanup);

const componentProps = {
    title: 'main title',
    disclaimers: 'this is a disclaimer',
    children: <div id="children">Children</div>
};


describe('<InvoiceCard />', () => {
    test('should render children correctly', () => {
        const { container } = render(<InvoiceCard {...componentProps} />);
    
        const children = container.querySelector('.invoice__card > #children');
    
        expect(children.textContent).toEqual('Children');
    });
    
    test('should render invoice title correctly', () => {
        const { container, rerender } = render(<InvoiceCard {...componentProps} />);
    
        const invoiceTitle = container.querySelector('.invoice__card > .invoice__card--title');
    
        expect(invoiceTitle.textContent).toEqual('main title');
    
        rerender(
            <InvoiceCard
                {...componentProps}
                title={null}
            />
        );
    
        expect(container.querySelector('.invoice__card > .invoice__card--title')).toBeFalsy();
    });
    
    test('disclaimer should render', () => {
        const { container } = render(<InvoiceCard {...componentProps} />);
    
        const wrapper = container.querySelector('.content__wrapper');
    
        expect(wrapper.textContent).toContain('this is a disclaimer');
    });
});
