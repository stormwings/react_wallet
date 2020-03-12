import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Summary from './Summary';


export default {
    title: "Summary",
    component: Summary
};


storiesOf("Dumb/Summary", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With disabled", () => (
        <Summary
            className="invoice"
            itemClass="invoice__card"
            items={[
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
            ]}
            result={{
                text: "Total",
                content: "500",
                itemClass:"invoice__card"
            }}
            withoutResult={false}
        />
    ));
