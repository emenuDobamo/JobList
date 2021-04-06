import { Component } from "react";
import "./AmountComponent.css";
import { ReactComponent as CircleDollarSign } from "../../Images/CircleDollarSign.svg";

class AmountComponent extends Component {
  render() {
    const job = this.props;
 
    return (
      <div className="Amount-card">
        <div className="Amount-icon">
          <CircleDollarSign />
        </div>
        <div className="Amount-text">
          <div> Amount </div>
          <div> ${job.amount} </div>
        </div>
      </div>
    );
  }
}

export default AmountComponent;
