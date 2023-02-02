import React, { Component } from 'react';

const textArray = ['A Full Stack Web Dev.', 
'A PHP | React Developer', 'A Mobile App Developer', 'A React Native Developer '];

class TextSlide extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
        <div className="slider-content">
        <h3>{textThatChanges}</h3>
     </div>
    )
  }
}

export default TextSlide;