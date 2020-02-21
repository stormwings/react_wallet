import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { jsxDecorator } from "storybook-addon-jsx";

import Button from "./Button";

storiesOf("Dumb/Button", module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add("Text", () => (
    <Button
      content={text("Name", "Mariano")}
      disabled={select("Disabled", [true, false], true)}
      onClick={() => console.log("clicked")}
    />
  ))
  .add("Emoji", () => (
    <Button content={"😀 😎 👍 💯"} onClick={action("clicked")} />
  ));
