import { Component, useState } from "react";
import HighlightCardComponent from "./Components/HighlightCard/HighlightCardComponent";
import ListofJobsComponent from "./Components/ListOfJobs/ListofJobsComponent";
import SideNavComponent from "./Components/SideNav/SideNavComponent";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SideNavComponent />
      <HighlightCardComponent />
      <HighlightCardComponent />
      <HighlightCardComponent />

      <ListofJobsComponent />
    </div>
  );
}
