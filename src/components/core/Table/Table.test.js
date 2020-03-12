import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';

import Table from './Table';


const componentProps = {
    className: "table__content --box",
    id: "home_movements_table",
    headClasses: "table__title",
    rowClasses: "table__row",
    col: 12,
    withoutHeaders: false,
    noData: "No hay transacciones",
    headers: [
        {
            name: "Fecha",
            accessor: "dateCreated",
            className: "table__row--date",
            envelop: null
        },
        {
            name: "Monto",
            accessor: "amount",
            className: "table__row--amount",
            envelop: null
        },
        {
            name: "Descripción",
            accessor: "description",
            className: "table__row--description",
            envelop: null
        }
    ],
    data: [
        {
            id: 33,
            dateCreated: "2019-09-02 12:12:13.569100",
            description: "Recarga de teléfono",
            amount: "1000.00"
        }
    ],
    onClickRow: jest.fn()
};

afterEach(cleanup);
beforeEach(() => {
    componentProps.onClickRow.mockClear();
});


describe('<Table />', () => {
    test('should render class correctly', () => {
        const { container, rerender } = render(<Table {...componentProps} />);
    
        const table = container.getElementsByTagName('table')[0];
    
        expect(table.className).toContain('table__content --box');
    
        rerender(
            <Table 
                {...componentProps}
                className={null}
            />
        );
    
        expect(table.className).toEqual(' col__12');

        rerender(
            <Table
                {...componentProps}
                col={null}
            />
        );
    });

    test('should render cols correctly', () => {
        const { container, rerender } = render(
            <Table
                {...componentProps}
                col={12}
            />
        );
    
        const table = container.getElementsByTagName('table')[0];
    
        expect(table.className).toEqual('table__content --box col__12');
    
        rerender(
            <Table
                {...componentProps}
                col={null}
            />
        );
    
        expect(table.className).toEqual('table__content --box ');
    });

    test('should render rows correctly', () => {
        const { container } = render(<Table {...componentProps} />);

        const table = container.querySelector(`.table__row`);

        expect(table).toBeTruthy();

        const dateRow = container.querySelector('table > tbody > tr > .table__row--date');
        const amountRow = container.querySelector('table > tbody > tr > .table__row--amount');
        const descriptionRow = container.querySelector('table > tbody > tr > .table__row--description');

        expect(dateRow.textContent).toEqual('2019-09-02 12:12:13.569100');
        expect(amountRow.textContent).toEqual('1000.00');
        expect(descriptionRow.textContent).toEqual('Recarga de teléfono');
    });

    test('should render header elements', () => {
        const { container } = render(<Table {...componentProps} />);

        const headers = container.querySelectorAll('table > thead > tr > th');
        const headersHead = container.querySelectorAll('table > tbody > tr > td');

        expect(headersHead[0].className).toEqual('table__row--date');
        expect(headersHead[1].className).toEqual('table__row--amount');
        expect(headersHead[2].className).toEqual('table__row--description');

        expect(headers[0].textContent).toEqual('Fecha');
        expect(headers[1].textContent).toEqual('Monto');
        expect(headers[2].textContent).toEqual('Descripción');
    });

    test('should render no data', () => {
        const { container } = render(
            <Table
                {...componentProps}
                data={[]}
            />);

        const table = container.querySelector('table > tbody > tr');
        const message = container.querySelector('table > tbody > tr > td > div');

        expect(table.className).toEqual('table__empty');
        expect(message.className).toEqual('--empty');
        expect(message.textContent).toEqual('No hay transacciones');
    });

    test('should not render header elements', () => {
        const { container, rerender } = render(
            <Table
                {...componentProps}
                withoutHeaders
            />);

        const withoutHeaders = container.querySelectorAll('table > thead');

        expect(withoutHeaders).toHaveLength(1);
        expect(withoutHeaders[0].firstChild).toBeNull();

        rerender(
            <Table
                {...componentProps}
                headers={[]}
                withoutHeaders={false}
            />);

        const emptyHeaders = container.querySelectorAll('table > thead');

        expect(withoutHeaders).toHaveLength(1);
        expect(emptyHeaders[0].firstChild).toBeNull();
    });

    test('should render data with accesor', () => {
        const formatDate = date => {
            try {
                return new Intl.DateTimeFormat(
                    navigator.language || "es-AR",
                    { year: 'numeric', month: '2-digit',day: '2-digit' }
                ).format(Date.parse(date));
            } catch (e) {
                return Date.parse(date);
            }
        };

        const envelop = ({ data, accessor }) => formatDate(data[accessor]);

        const propsWithEnvelop = componentProps;
        propsWithEnvelop.headers[0].envelop = envelop;
        
        const { container } = render(<Table {...propsWithEnvelop} />);

        const row = container.querySelector('table > tbody > tr > .table__row--date');

        expect(row).toBeTruthy();

        expect(row.textContent).toEqual('09/02/2019');
    });

    test("row click should work", () => {
        const { container } = render(<Table {...componentProps} />);

        const dateRow = container.querySelector('table > tbody > tr > .table__row--date');
        const amountRow = container.querySelector('table > tbody > tr > .table__row--amount');
        const descriptionRow = container.querySelector('table > tbody > tr > .table__row--description');

        fireEvent.click(dateRow);
        fireEvent.click(amountRow);
        fireEvent.click(descriptionRow);

        expect(componentProps.onClickRow).toHaveBeenCalledTimes(3);
    });
});
