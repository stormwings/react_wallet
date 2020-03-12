import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import 'lilitcss/css/lilit.css';

import Slider from './Slider';

storiesOf("Dumb/Slider", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Normal", () => (
        <Slider 
            autoPlay
            buttonContent="Aceptar"
            id="home_initial_modal_slider"
            onEnter={action('Close!')}
            slides={[
                {
                    title: "welcome",
                    content: "now you are part of the digital economy",
                    subcontent: "start your path through our platform"
                },
                {
                    title: "digital account",
                    content: "we are your gateway to the crypto world",
                    subcontent: "load balance to buy and sell in the simplest way"
                }
            ]}
        />
    ));
