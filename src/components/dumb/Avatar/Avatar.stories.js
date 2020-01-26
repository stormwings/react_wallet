import React from "react";
// import { action } from "@storybook/addon-actions";

import SVGUser from "./../../../assets/components/SvgUser";
import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar
};

export const Image = () => (
  <Avatar size="small">
    <SVGUser />
  </Avatar>
);
