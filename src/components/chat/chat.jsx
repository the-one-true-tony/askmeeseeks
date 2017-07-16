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
          message: "I'm Mr. Meeseeks, look at me! Ask me a question.",
          time: currentTime
        }
      ]
    };
    this.askQuestion = this.askQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyPress);
  }
  componentDidUpdate(){
    let chatWindow = document.getElementById("chat-window");
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  handleKeyPress(e){
    console.log(e.keyCode);
    if(e.keyCode === 13){
      this.askQuestion();
    }
  }
  askQuestion(){
    let { question, chatHistory } = this.state;
    if(question === "") return;

    let chatPost = {
      user: "Jerry",
      message: question,
      time: new Date().getTime()
    };
    chatHistory.push(chatPost);
    this.setState({
      chatHistory,
      question: ""
    });

  }
  updateQuestion(e){
    const question = e.currentTarget.value;
    this.setState({question});
  }


  render(){
    const { chatHistory, question } = this.state;

    return(
      <div>
        <div id="chat-window">
          Chatbot
          <ChatHistory chatHistory={ chatHistory }/>
        </div>
        <div className="chat-controls">
          <input type='input'
            className="chat-input"
            placeholder='Ooh Wee ask me a question'
            value={question}
            onChange={ this.updateQuestion} />
        </div>
      </div>
    );
  }
}
