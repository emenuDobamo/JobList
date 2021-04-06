import { Component } from "react";
import "./HighlightCardComponent.css";
import { ReactComponent as BagIcon } from "../../Icons/BagIcon.svg";
import { ReactComponent as StarIcon } from "../../Icons/StarIcon.svg";
import { ReactComponent as WalletIcon } from "../../Icons/WalletIcon.svg";

class HighlightCardComponent extends Component {
  render() {
    return (
      <div className="highlight-card">
        <div>
          <BagIcon />
        </div>
        <div> $15 </div>
        <div> Earning in month </div>
      </div>
    );
  }
}
export default HighlightCardComponent;
