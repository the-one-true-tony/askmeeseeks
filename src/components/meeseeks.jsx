import React, { Component } from 'react';
import sketch from './util/sketch';
import P5Wrapper from 'react-p5-wrapper';
import Chat from './chat/chat';

export default class Meeseeks extends Component {
  constructor(){
    super();
  }
  componentDidMount(){

  }
  render(){
    return(
      <div>
        <Chat />
      </div>
    );
  }
}


// <P5Wrapper sketch={sketch} />
