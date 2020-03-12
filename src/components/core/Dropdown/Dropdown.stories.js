import React from "react";

import { action } from "@storybook/addon-actions";

import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Dropdown from './Dropdown';

import Container from '../Container';


export default {
    title: "Dropdown",
    component: Dropdown
};


storiesOf("Dumb/Dropdown", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With disabled", () => (
        <Container>
            <Dropdown
                buttonClass={'dropdown__button'}
                buttonContent={'Button'}
                className={'dropdown__account'}
                disabled={false}
                id={'catalog_balance_available_dropdown'}
                list={[
                    {
                        onClick: action("Action list!"),
                        content: "Cargar saldo"
                    },
                    {
                        onClick: action("Action list2!"),
                        content: "Cargar criptos",
                        disabled: true
                    }
                ]}
                onClickButton={action("Action!")}
                onClickDropdown={e => e.stopPropagation()}
                ulClassName={'--rightEdge'}
            >
                <div id="children">Children</div>
            </Dropdown>
        </Container>
    ));
