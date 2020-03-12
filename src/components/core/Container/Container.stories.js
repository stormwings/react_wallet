import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import 'lilitcss/css/lilit.css';

import Container from './Container';
import Button from "../Button";

export default {
    title: "Container",
    component: Container
};

storiesOf("Dumb/Container", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Button inside", () => (
        <Container>
            <Button
                className="--primaryGradient"
                content="Button"
            />
        </Container>
    ));
