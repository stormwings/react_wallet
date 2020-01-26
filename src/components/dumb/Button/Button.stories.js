import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

export default {
  title: "Button",
  component: Button
};

export const Text = () => (
  <Button content="Hello!" disabled={false} onClick={action("clicked")} />
);

export const Emoji = () => (
  <Button content={"😀 😎 👍 💯"} onClick={action("clicked")} />
);
