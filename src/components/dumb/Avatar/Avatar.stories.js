import React from "react";
// import { action } from "@storybook/addon-actions";

import SVGUser from "./../../../assets/components/SvgUser";
import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar
};

export const Small = () => (
  <Avatar size="small">
    <SVGUser />
  </Avatar>
);

export const Medium = () => (
  <Avatar size="medium">
    <SVGUser />
  </Avatar>
);

export const Big = () => (
  <Avatar size="big">
    <SVGUser />
  </Avatar>
);
