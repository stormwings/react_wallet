import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import 'lilitcss/css/lilit.css';

import Modal from './Modal';

export default {
    title: "Modal",
    component: Modal
};

storiesOf("Dumb/Modal", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With children", () => (
        <Modal
            id={"custom_id"}
            isOpen
            onClose={action('Close!')}
        >
            Modal Children
        </Modal>
    ));
