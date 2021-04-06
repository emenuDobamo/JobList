import { Component } from "react";
import AmountComponent from "../Amount/AmountComponent";
import JobNameComponent from "../JobNameComponent/JobNameComponent";
import DurationComponent from "../Duration/DurationComponent";
import "./OngoingJobComponent.css";

class OngoingJobComponent extends Component {
  render() {
    const job = this.props;

    return (
      <div className="ongoing-card">
        <JobNameComponent {...job} />
        <AmountComponent {...job} />
        <DurationComponent {...job} />
      </div>
    );
  }
}
export default OngoingJobComponent;
