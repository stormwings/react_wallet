import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Dumb/Button", module)
  .addDecorator(withKnobs)
  .add("Text", () => (
    <Button
      content={text("Name", "Mariano")}
      disabled={select("Disabled", [true, false], true)}
      onClick={action("clicked")}
    />
  ))
  .add("Emoji", () => (
    <Button content={"😀 😎 👍 💯"} onClick={action("clicked")} />
  ));
