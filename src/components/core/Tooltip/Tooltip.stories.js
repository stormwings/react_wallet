import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Tooltip from './Tooltip';


export default {
    title: "Tooltip",
    component: Tooltip
};


storiesOf("Dumb/Tooltip", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With icon", () => (
        <Tooltip
            className={'custom__tooltip'}
            icon={'icon-info'}
            id={'1'}
        >
            Tooltip Children
        </Tooltip>
    ));
