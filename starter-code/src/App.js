import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodForm from "./components/FoodForm";
import FoodBox from "./components/FoodBox";
import TodaysFood from "./components/TodaysFood";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods,
      showForm: false
    };
  }

  addFoodHandler(food) {
    this.setState({
      foods: this.state.foods.concat([food])
    });
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  render() {
    const displayFoods = this.state.foods.map((foods, index) => {
      return (
        <FoodBox
          key={index}
          image={foods.image}
          calories={foods.calories}
          name={foods.name}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button onClick={() => this.showForm()}>
          {this.state.showForm ? "Hide Form" : "Show Form"}
        </button>
        {this.state.showForm && (
          <div className="FoodForm">
            <FoodForm addFood={e => this.addFoodHandler(e)} />
          </div>
        )}
        <div className="food">{displayFoods}</div>
      </div>
    );
  }
}

export default App;
