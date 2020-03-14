import React, { Fragment }  from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";

import Button from "./Button";

const Hr = () => <div style={{ padding: "5px" }} />;

storiesOf("Dumb/Button", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Text", () => (
        <Fragment>
            <Button
                className="--primary"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Hr />
            <Button
                className="--success"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
        </Fragment>
    ))
    .add("Icon", () => (
        <Button
            className="--primary --icon"
            content={text("Content", "Hello!")}
            icon="icon-camera"
            onClick={() => true}
        />
    ))
    .add("Sizes", () => (
        <Fragment>
            <Button
                className="--primary --small"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Hr />
            <Button
                className="--primary"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
            <Hr />
            <Button
                className="--primary --large"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
        </Fragment>
    ))
    .add("Round", () => (
        <Button
            className="--primary --round"
            content={text("Content", "Hello!")}
            onClick={() => true}
        />
    ))
    .add("Status", () => (
            <Button
                className="--primary --disabled"
                content={text("Content", "Hello!")}
                onClick={() => true}
            />
    ))
    .add("Full", () => (
        <Button
            className="--primary --full"
            content={text("Content", "Hello!")}
            onClick={() => true}
        />
    ));
