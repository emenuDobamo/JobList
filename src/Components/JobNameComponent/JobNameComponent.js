import { Component } from "react";
import { ReactComponent as VinLogo } from "../../Images/VinLogo.svg";
import "./JobNameComponent.css";

class JobNameComponent extends Component {
  render() {
    const job = this.props;
    console.log(job);

    return (
      <div className="job-card">
        <div className="job-icon">
          <VinLogo />
        </div>
        <div className="job-text">
          <p> {job.companyName} </p>
          <div className="duration-value"> {job.jobTitle}</div>
        </div>
      </div>
    );
  }
}

export default JobNameComponent;
