import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Loading from './Loading';


storiesOf("Dumb/Loading", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Loading", () => (
        <Loading />
    ));
