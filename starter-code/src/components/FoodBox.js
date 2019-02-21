import React, { Component } from "react";
import "../App.css";
import "bulma/css/bulma.css";

class FoodBox extends Component {
  render() {
    // let todaysFoodArr = [];
    // const addFoodToList = e => {
    //   todaysFoodArr.unshift(e.target.id);
    //   console.log(todaysFoodArr);
    // };

    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button
                    id={this.props.name}
                    // onClick={addFoodToList}
                    className="button is-info"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        {/* <div className="todaysFood">
          <h1>
            <b>Today's Food </b>
          </h1>
          <ul>
            {todaysFoodArr.map((food, index) => {
              <li key={index}>{food}</li>;
            })}
          </ul>
        </div> */}
      </div>
    );
  }
}

export default FoodBox;
