import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";

import Tooltip from './Tooltip';
import { Subtitle } from "../Text/Text";

storiesOf("Dumb/Tooltip", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("With icon", () => (
        <Tooltip icon={'icon-info'}>
            <Subtitle content="holus" className="white" />
        </Tooltip>
    ));
