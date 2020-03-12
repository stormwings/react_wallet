import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";
import 'lilitcss/css/lilit.css';

import Card from './Card';

storiesOf("Dumb/Card", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With children", () => (
        <Card
            className='custom_class'
            col={1}
            id='unique_id'
            onClick={action('clicked!')}
        >
            <div className="element">title</div>
            <div className="element">container</div>
            <div className="element">end</div>
        </Card>
    ));
