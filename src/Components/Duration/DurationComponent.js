import { Component } from "react";
import "./DurationComponent.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Clock } from "../../Images/Clock.svg";

class DurationComponent extends Component {
  render() {
    const job = this.props;

    return (
      <div className="duration-card">
        <div className="duration-icon">
          <Clock />
        </div>
        <div className="duration-text">
          <p>Duration </p>
          <div className="duration-value"> {job.duration} </div>
        </div>
      </div>
    );
  }
}

export default DurationComponent;
