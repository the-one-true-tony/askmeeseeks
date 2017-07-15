import React, { Component } from 'react';
import ChatHistory from './chathistory';

export default class Chat extends Component {
  constructor(props){
    super(props);
    let currentTime = new Date().getTime();
    this.state = {
      question: "",
      chatHistory: [
        {
          user: "Mr. Meeseeks",
          message: 'Ask me a question, Woooweeee!',
          time: currentTime
        }
      ]
    };
    this.askQuestion = this.askQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }

  askQuestion(e){
    e.preventDefault();
    let { question, chatHistory } = this.state;
    let chatPost = {
      user: "Jerry",
      message: question,
      time: new Date().getTime()
    };
    chatHistory.push(chatPost);
    this.setState({
      chatHistory
    });
  }
  updateQuestion(e){
    const question = e.currentTarget.value;
    this.setState({question});
  }


  render(){

    const { chatHistory } = this.state;
    return(
      <div>
        Chatbot
        <ChatHistory chatHistory={ chatHistory }/>
        <input type='input'
          placeholder='Ooh Wee ask me a question'
          onChange={ this.updateQuestion} />
        <input type ='submit'
          value='Submit'
          onClick={ this.askQuestion }
        />
      </div>
    );
  }
}
