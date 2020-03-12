import React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import SelectAccordion from './SelectAccordion';


const componentProps = {
    radioName: "selectedGateway",
    selectedGateway: "test-rapipagoonline",
    id: "withdrawal_select_gateway_select_acco",
    onSelect: action('New element selected'),
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


storiesOf("Dumb/SelectAccordion", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Normal", () => (
        <SelectAccordion
            {...componentProps}
        />
    ));
