import React from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Disclaimer from './Disclaimer';


storiesOf("Dumb/Disclaimer", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Single", () => (
        <Disclaimer
            children="Esta es una compra"
            multiple={false}
        />
    ))
    .add("Multiple", () => (
        <Disclaimer
            children={[
                "El máximo de compra es $ 10.00000000 BTC",
                "El mínimo de compra es $ 900.00 ARS"
            ]}
            multiple
        />
    ));
