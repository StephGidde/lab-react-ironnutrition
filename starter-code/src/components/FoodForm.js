import React, { Component } from "react";

class FoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  };

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Number of calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />
          <label>image:</label>
          <input
            type="text"
            name="image"
            checked={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FoodForm;
