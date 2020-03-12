import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import InvoiceCard from './InvoiceCard';

import Disclaimer from '../Disclaimer/Disclaimer';


export default {
    title: "InvoiceCard",
    component: InvoiceCard
};


storiesOf("Dumb/InvoiceCard", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With disabled", () => (
        <InvoiceCard
            disclaimers={
                <Disclaimer
                    children="Esta es una compra"
                    multiple={false}
                />
            }
            title={'main title'}
        >
            <div id="children">Children</div>
        </InvoiceCard>
    ));
