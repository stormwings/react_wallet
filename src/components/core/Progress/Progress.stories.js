import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs, select } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Progress from './Progress';


storiesOf("Dumb/Progress", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Normal", () => (
        <Progress 
            begin={{ value: select("Progress", [0, 5, 10, 15], 5) }}
            end={{ value: 15 }} 
        />
    ));
