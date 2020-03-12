import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Table from './Table';


export default {
    title: "Table",
    component: Table
};

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
            id: 1,
            dateCreated: "2019-09-02 12:12:13.569100",
            description: "Recarga de teléfono",
            amount: "1000.00"
        },
        {
            id: 2,
            dateCreated: "2019-09-02 12:12:13.569100",
            description: "Recarga de teléfono",
            amount: "1000.00"
        },
        {
            id: 3,
            dateCreated: "2019-09-02 12:12:13.569100",
            description: "Recarga de teléfono",
            amount: "1000.00"
        },
    ],
    onClickRow: () => true
};


storiesOf("Dumb/Table", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Common table", () => (
        <Table {...componentProps} />
    ))
    .add("Without data", () => (
        <Table 
            {...componentProps} 
            data={[]}
        />
    ))
    .add("Without headers", () => (
        <Table 
            {...componentProps} 
            withoutHeaders={true}
        />
    ));
