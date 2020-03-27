import React, { Component } from "react";
import { Link } from "react-router-dom";

class Screenshots extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const screenShots = this.props.location.state;
    this.setState(screenShots);
  }

  render() {
    return (
      <div>
        <button>
          <Link to="/">Return</Link>
        </button>
        <div>
          {this.state.screenshots ? (
            this.state.screenshots.map((img, index) => (
              <img alt="" key={index} src={`${img.image}`} />
            ))
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
    );
  }
}

export default Screenshots;
