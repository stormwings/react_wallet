import React from "react";

import { storiesOf } from "@storybook/react";

import { text, withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Back from './Back';


storiesOf("Dumb/Back", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With children", () => (
        <Back
            goBack={() => true}
            shouldRender={() => true}
            string={text("Content", "Go Back!")}
        >
            <div id="children">Children</div>
        </Back>
    ));
