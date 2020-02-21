import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";

import SVGUser from "./../../../assets/svg/user.svg";
import Avatar from "./Avatar";

storiesOf("Dumb/Avatar", module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add("Avatar", () => (
    <Avatar image={SVGUser} size={select("Size", ["small", "medium", "big"], "small")} />
  ));
