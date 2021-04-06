import { Component } from "react";
import OngoingJobComponent from "../OngoingJobComponent/OngoingjobComponent";
import "./ListofJobsComponent.css";

class ListofJobsComponent extends Component {
  render() {
    const listOfJobs = [
      {
        jobTitle: "UI design for mobile applications",
        companyName: "Rainbow",
        status: ["new", "ongoing", "Requirements"],
        companyLogoUrl: "url",
        duration: "4 days",
        amount: 1
      },
      {
        jobTitle: "Redesign for our website",
        companyName: "Stabil Studio",
        status: ["ongoing", "Requirements"],
        companyLogoUrl: "url",
        duration: "4 days",
        amount: 760
      },
      {
        jobTitle: "change this data",
        companyName: "ViN",
        status: ["new", "ongoing", "Requirements"],
        companyLogoUrl: "url",
        duration: "1 days",
        amount: 67
      },
      {
        jobTitle: "Design logo for bakery",
        companyName: "Anisha Bakery",
        status: ["Complete", "ongoing", "Requirements"],
        companyLogoUrl: "url",
        duration: "2 days",
        amount: 8
      }
    ];
    return (
      <div className="job-list">
        <div>
          <div>
            <h2> Ongoing jobs </h2>
          </div>
        </div>
        <p />
        {listOfJobs.map((job) => (
          <OngoingJobComponent {...job} />
        ))}
      </div>
    );
  }
}

export default ListofJobsComponent;
