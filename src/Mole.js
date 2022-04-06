import React, { Component } from "react";

class Mole extends Component {
  render() {
    const id = this.props.id;
    return (
      <div className="container-item custom-cursor">
        {this.props.id !== this.props.active ? (
          <img
            src="img/WAM_Hole.png"
            alt=""
            onClick={(id) => this.props.checkMove(this.props.id)}
          />
        ) : (
          <img
            src="img/WAM_Mole.png"
            alt=""
            onClick={(id) => this.props.checkMove(this.props.id)}
          />
        )}
        {/* {this.props.id === this.props.active ? <img src={'img/WAM_Mole.png'} alt=""/> : 
        <img src={'img/WAM_Hole.png'} alt=""/>} */}
      </div>
    );
  }
}

export default Mole;
