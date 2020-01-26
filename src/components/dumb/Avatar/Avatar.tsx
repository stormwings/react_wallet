import React, { FunctionComponent } from "react";
import "./Avatar.scss";

interface IProps {
  image?: string;
  children?: any;
  size?: "small" | "medium" | "big";
}

const Avatar: FunctionComponent<IProps> = ({ image, size, children }) => {
  const className = `${size ? `image-${size}` : "image-small"}`;

  if (children)
    return (
      <div id="avatar-image" className={className}>
        {children}
      </div>
    );

  return (
    <img id="avatar-image" className={className} src={image} alt="avatar" />
  );
};

export default Avatar;
