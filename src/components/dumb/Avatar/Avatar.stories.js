import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";

import SVGUser from "./../../../assets/components/SvgUser";
import Avatar from "./Avatar";

storiesOf("Dumb/Avatar", module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add("Avatar", () => (
    <Avatar size={select("Size", ["small", "medium", "big"], "small")}>
      <SVGUser />
    </Avatar>
  ));
