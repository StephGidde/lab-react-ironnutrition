import React, { Component } from "react";
import "../App.css";
import "bulma/css/bulma.css";

class TodaysFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: [
        {
          name: "",
          calories: "",
          number: ""
        }
      ]
    };
  }

  addFoodToList = e => {
    this.setState({
      food: this.state.food.push(e.target)
    });
    console.log(this.state.food);
  };

  render() {
    return (
      <div className="todaysFood">
        <h1>
          <b>Today's Food </b>
        </h1>
        <ul>{}</ul>
      </div>
    );
  }
}
export default TodaysFood;
