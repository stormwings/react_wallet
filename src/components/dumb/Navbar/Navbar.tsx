import React, { FunctionComponent } from "react";
import "./Navbar.scss";
import ImageMenuIcon from "./../../../assets/image/menu.png";
import SvgUser from "./../../../assets/components/SvgUser";
import { useHistory } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

interface IProps {
  title: string;
}

export const Navbar: FunctionComponent<IProps> = props => {
  const { title } = props;
  const history = useHistory();

  return (
    <div id="navbar">
      <div
        className="menu-icon"
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/")}
      >
        <img src={ImageMenuIcon} alt="menu-icon" className="image" />
        <span className="title">{title}</span>
      </div>
      <div
        className="menu-avatar"
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/user")}
      >
        <Avatar size="small">
          <SvgUser />
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
