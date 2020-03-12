import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import 'lilitcss/css/lilit.css';

import Waiter from './Waiter';

export default {
    title: "Waiter",
    component: Waiter
};

storiesOf("Dumb/Waiter", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With body", () => (
        <Waiter shouldRender={() => true}>
            <div id="children">body</div>
        </Waiter>
    ))
    .add("Is loading", () => (
        <Waiter shouldRender={() => false}>
            <div id="loading">loading</div>
        </Waiter>
    ));
