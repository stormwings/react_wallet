import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Timer from './Timer';


storiesOf("Dumb/Timer", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Normal", () => (
        <Timer
            expiringTime={5}
            key="timer"
            onFinish={() => null}
        />
    ));
