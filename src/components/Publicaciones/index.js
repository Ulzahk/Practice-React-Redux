import React, { Component } from "react";

class Publicaciones extends Component {
  render() {
    return <div>{this.props.match.params.index}</div>;
  }
}

export default Publicaciones;
