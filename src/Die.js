import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from "@fortawesome/free-solid-svg-icons";


class Die extends Component {
  static defaultProps = {
    numberWords: { 1: faDiceOne, 2: faDiceTwo, 3: faDiceThree, 4: faDiceFour, 5: faDiceFive, 6: faDiceSix },
    val: 1
  };
  render() {

    let className = "Die";
    if (this.props.locked) { className += " Die-locked" };
    if (this.props.isRolling) { className += " Die-isRolling" };
    return (
      <div>

        <FontAwesomeIcon
          icon={this.props.numberWords[this.props.val]}
          className={className}
          style={{ opacity: this.props.locked && 0.8 }}
          onClick={() => this.props.handleClick(this.props.idx)} />
      </div>


    );
  }
}

export default Die;
