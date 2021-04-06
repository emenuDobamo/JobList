import { Component } from "react";
import "./SideNavComponent.css";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import { ReactComponent as HomeIcon } from "../../Icons/HomeIcon.svg";

class SideNavComponent extends Component {
  render() {
    return (
      <div className="sidenav">
        <Logo className="sidenav-logo" />
        <div className="sidenav-homeicon">
          <HomeIcon />
          <h5> Home </h5>
        </div>
      </div>
    );
  }
}

export default SideNavComponent;
