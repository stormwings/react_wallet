import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import TextList from './TextList';


storiesOf("Dumb/TextList", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Normal", () => (
        <TextList 
            texts={[
                "First Item",
                "Second Item"
            ]}
        />
    ));
