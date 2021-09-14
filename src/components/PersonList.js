import React from "react";
import axios from "axios";

import "../css/PersonList.css";

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      living_surface: "",
      bedroom_count: "",
      postal_code: "",
      bathroom_count: "",
      facades: "",
      garden_surface: "",
      swimming_pool: null,
      fireplace: null,
      terrace: null,
      condition: "",
      prediction: 0.00
    };
    this.handleSwimmingPool = this.handleSwimmingPool.bind(this);
    this.handleFireplace = this.handleFireplace.bind(this);
    this.handleTerrace = this.handleTerrace.bind(this);
  }
  handleSwimmingPool(event) {
    const swimming_pool = event.currentTarget.value === "true" ? true : false;
    this.setState({ swimming_pool });
  }
  handleFireplace(event) {
    const fireplace = event.currentTarget.value === "true" ? true : false;
    this.setState({ fireplace });
  }
  handleTerrace(event) {
    const terrace = event.currentTarget.value === "true" ? true : false;
    this.setState({ terrace });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    axios
      .post(`https://predict-immo.herokuapp.com/predict`, {
        data: {
          type: this.state.type,
          living_surface: this.state.living_surface,
          bedroom_count: this.state.bedroom_count,
          postal_code: this.state.postal_code,
          bathroom_count: this.state.bathroom_count,
          facades: this.state.facades,
          garden_surface: this.state.garden_surface,
          swimming_pool: this.state.swimming_pool,
          fireplace: this.state.fireplace,
          terrace: this.state.terrace,
          condition: this.state.condition,
        },
      })
      .then((res) => {
        console.log(res.data.prediction);
        console.log(this.state.swimming_pool);
        this.setState({ prediction: res.data.prediction });
      });
  };

  render() {
    const {
      type,
      living_surface,
      bedroom_count,
      postal_code,
      bathroom_count,
      facades,
      garden_surface,
      swimming_pool,
      fireplace,
      terrace,
      condition,
    } = this.state;
    return (
      <>
    
        <div className="test">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="type">Type </label>
              <select name="type" onChange={this.handleChange} value={type}>
                <option value="APARTMENT">APARTMENT</option>
                <option value="HOUSE">HOUSE</option>
                <option value="OTHERS">OTHERS</option>
              </select>
            </div>
            <div>
              <label htmlFor="bedroom_count">Bedroom count </label>
              <select
                name="bedroom_count"
                onChange={this.handleChange}
                value={bedroom_count}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label>Postal code </label>
              <input
                type="text"
                placeholder="postal_code"
                name="postal_code"
                value={postal_code}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Living surface </label>
              <input
                type="text"
                placeholder="living_surface"
                name="living_surface"
                value={living_surface}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="bathroom_count">Bathroom count </label>
              <select
                name="bathroom_count"
                onChange={this.handleChange}
                value={bathroom_count}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label htmlFor="bathroom_count">Facades </label>
              <select
                name="facades"
                onChange={this.handleChange}
                value={facades}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div>
              <label>Garden surface </label>
              <input
                type="text"
                placeholder="garden_surface"
                name="garden_surface"
                value={garden_surface}
                onChange={this.handleChange}
              />
            </div>

            <div className="radio">
              <p>Swimming pool</p>
              <label>
                <input
                  type="radio"
                  name="swimming_pool"
                  value="true"
                  checked={swimming_pool === true}
                  onChange={this.handleSwimmingPool}
                />
                Yes
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="swimming_pool"
                  value="false"
                  checked={swimming_pool === false}
                  onChange={this.handleSwimmingPool}
                />
                No
              </label>
            </div>
            <div className="radio">
              <p>Fireplace</p>
              <label>
                <input
                  type="radio"
                  name="fireplace"
                  value="true"
                  checked={fireplace === true}
                  onChange={this.handleFireplace}
                />
                Yes
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="fireplace"
                  value="false"
                  checked={fireplace === false}
                  onChange={this.handleFireplace}
                />
                No
              </label>
            </div>
            <div className="radio">
              <p>Terrace</p>
              <label>
                <input
                  type="radio"
                  name="terrace"
                  value="true"
                  checked={terrace === true}
                  onChange={this.handleTerrace}
                />
                Yes
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="terrace"
                  value="false"
                  checked={terrace === false}
                  onChange={this.handleTerrace}
                />
                No
              </label>
            </div>

            <div>
              <label htmlFor="condition">Condition </label>
              <select
                name="condition"
                onChange={this.handleChange}
                value={condition}
              >
                <option value="AS_NEW">AS NEW</option>
                <option value="GOOD">GOOD</option>
                <option value="JUST_RENOVATED">JUST RENOVATED</option>
                <option value="TO_BE_DONE_UP">TO BE DONE UP</option>
                <option value="TO_RENOVATE">TO RENOVATE</option>
                <option value="TO_RESTORE">TO RESTORE</option>
              </select>
            </div>
            <div>
              <button type="submit"> Submit </button>
            </div>
          </form>
         
        </div>
        <div className="prediction">
            <p>Your prediction is {this.state.prediction} euros</p>
          </div>
      </>
    );
  }
}
