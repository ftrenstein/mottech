// import PropTypes from "prop-types";
import React from "react";
import group76 from "../assets/group-76.png";
// import "./left-menu.css";

export const LeftMenu = ({ property1, profile, className }) => {
  return (
    <div className={`left-menu ${className}`}>
      <img className="group" alt="Group" src={group76} />

      <div className="frame">
        <div className="div-wrapper">
          <div className="text-wrapper">􀦲</div>
        </div>

        <div className="div">
          <div className="text-wrapper">􀋲</div>
        </div>

        <div className="div">
          <div className="text-wrapper-2">􀈷</div>
        </div>

        <div className="div">
          <div className="text-wrapper-3">􀐾</div>
        </div>

        <div className="div">
          <div className="text-wrapper-4">􀉫</div>
        </div>
      </div>
    </div>
  );
};

// LeftMenu.propTypes = {
//   property1: PropTypes.oneOf(["dashboard"]),
//   profile: PropTypes.oneOf(["manager"]),
// };

export default LeftMenu;