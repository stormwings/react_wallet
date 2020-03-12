import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';

import RPSelectAccordion from './SelectAccordion';


afterEach(cleanup);

const componentProps = {
    radioName: "selectedGateway",
    selectedGateway: "test-rapipagoonline",
    id: "withdrawal_select_gateway_select_acco",
    onSelect: jest.fn(),
    radioList: [
        {
            leftLabel: "Rapipago online",
            value: "test-rapipagoonline",
            disabled: false,
            description: "Comisión: 3.0%",
            rightLabel: "Monto disponible: $ 20000"
        },
        {
            leftLabel: "CVU",
            value: "test-bank-transfer-cvu",
            disabled: false,
            description: "Comisión: 1.5%",
            rightLabel: "Monto disponible: $ 20000"
        },
        {
            leftLabel: "Open Pay Banco",
            value: "test-openpay-bank",
            disabled: false,
            description: "Comisión: 2.5%",
            rightLabel: "Monto disponible: $ 20000"
        },
        {
            leftLabel: "Mercadopago",
            value: "test-mercadopago",
            disabled: false,
            description: "Comisión: 2.5%",
            rightLabel: "Monto disponible: $ 10000"
        },
        {
            leftLabel: "Transferencia bancaria",
            value: "test-bank-transfer",
            disabled: true,
            description: "Comisión: 1.5%",
            rightLabel: "Monto disponible: $ 1000"
        }
    ]
};


describe('<SelectAccordion />', () => {
    test('should render all elements correctly', () => {
        const { container } = render(<RPSelectAccordion {...componentProps} />);

        const list = container.querySelectorAll('.inline-block');

        expect(list).toHaveLength(5);

        expect(list[0].innerHTML).toEqual("Rapipago online");
        expect(list[1].innerHTML).toEqual("CVU");
        expect(list[2].innerHTML).toEqual("Open Pay Banco");
        expect(list[3].innerHTML).toEqual("Mercadopago");
        expect(list[4].innerHTML).toEqual("Transferencia bancaria");
    });

    test('should render all elements without input', () => {
        const { container, rerender } = render(
            <RPSelectAccordion
                {...componentProps}
            />);

        const inputs = container.getElementsByTagName('input');

        expect(inputs).toHaveLength(5);

        rerender(
            <RPSelectAccordion
                {...componentProps}
                withoutInput
            />);

        expect(inputs).toHaveLength(0);
    });

    test('radio value should change on click', () => {
        const { container } = render(<RPSelectAccordion {...componentProps} />);
    
        const id = "withdrawal_select_gateway_select_acco";
        const value = "test-openpay-bank";
    
        expect(container.querySelector(`#${id}_${value}_radio_button`).checked).toEqual(false);
    
        fireEvent.click(container.querySelectorAll('.inline-block')[2]);
    
        expect(container.querySelector(`#${id}_${value}_radio_button`).checked).toEqual(true);
    });

    test('accordion should be open', () => {
        const { container } = render(<RPSelectAccordion {...componentProps} />);
    
        const id = "withdrawal_select_gateway_select_acco";
        const value = "test-openpay-bank";
    
        fireEvent.click(container.querySelectorAll('.accordion__content')[2]);
    
        expect(container.querySelectorAll(`.--open`)).toHaveLength(1);
        expect(container.querySelectorAll(`.--open`)[0].id).toEqual(`${id}_${value}`);
    });

    test('accordion disabled should not work', () => {
        const { container } = render(<RPSelectAccordion {...componentProps} />);
    
        const id = "withdrawal_select_gateway_select_acco";
        const value = "test-bank-transfer";
    
        fireEvent.click(container.querySelectorAll('.accordion__content')[4]);
    
        expect(container.querySelectorAll(`.--disabled`)).toHaveLength(1);
        expect(container.querySelectorAll(`.--disabled`)[0].id).toEqual(`${id}_${value}`);
    });

    test('selected gateway is selected', () => {
        const { container } = render(<RPSelectAccordion {...componentProps} />);

        const checkbox = container.querySelector(`#${componentProps.id}_test-rapipagoonline_radio_button`);

        expect(checkbox.checked).toBeTruthy();
    });
});
