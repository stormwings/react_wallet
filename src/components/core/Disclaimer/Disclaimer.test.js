import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Disclaimer from './Disclaimer';


afterEach(cleanup);

const componentProps = {
    multiple: true,
    children: [
        "El máximo de compra es $ 10.00000000 BTC",
        "El mínimo de compra es $ 900.00 ARS"
    ]
};


describe('<Disclaimer />', () => {
    test('should render single disclaimer correctly', () => {
        const { container } = render(
            <Disclaimer
                children="Esta es una compra" 
                multiple={false}
            />
        );

        const text = container.getElementsByTagName('p')[0];

        expect(text.textContent).toEqual("Esta es una compra");
    });

    test('should render multiple disclaimers correctly', () => {
        const { container } = render(<Disclaimer {...componentProps} />);

        const texts = container.getElementsByTagName('p');

        expect(texts[0].textContent).toEqual("El máximo de compra es $ 10.00000000 BTC");
        expect(texts[1].textContent).toEqual("El mínimo de compra es $ 900.00 ARS");
    });
});
