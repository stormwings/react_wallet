import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";

import { withKnobs, text } from "@storybook/addon-knobs";

import { jsxDecorator } from "storybook-addon-jsx";

import 'lilitcss/css/lilit.css';

import Button from "./Button";


export default {
    title: "Button",
    component: Button
};


storiesOf("Dumb/Button", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Text", () => (
        <Button
            className="--primaryGradient"
            content={text("Content", "Hello!")}
            onClick={() => true}
        />
    ))
    .add("Icon", () => (
        <Button
            className="--primaryGradient"
            content={text("Content", "Hello!")}
            icon="icon-camera"
            onClick={() => true}
        />
    ))
    .add("Light", () => (
        <Fragment>
            <Button
                className="--light"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Button
                className="--outline"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Button
                className="--light --outline"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
        </Fragment>
    ))
    .add("Sizes", () => (
        <Fragment>
            <Button
                className="--primaryGradient --small"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Button
                className="--primaryGradient --normal"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Button
                className="--primaryGradient --medium"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Button
                className="--primaryGradient --large"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
        </Fragment>
    ))
    .add("Less Round", () => (
        <Button
            className="--primaryGradient --round5"
            content={text("Content", "Hello!")}
            onClick={() => true}
        />
    ))
    .add("Status", () => (
        <Fragment>
            <Button
                className="--primaryGradient --active"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Button
                className="--primaryGradient --disabled"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
        </Fragment>
    ))
    .add("Full", () => (
        <Button
            className="--primaryGradient --full"
            content={text("Content", "Hello!")}
            onClick={() => true}
        />
    ))
    .add("Circle", () => (
        <Button
            className="--primaryGradient --round"
            content={text("Content", "Hello!")}
            onClick={() => true}
        />
    ));

