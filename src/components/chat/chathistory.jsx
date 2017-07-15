import React, { Component } from 'react';
import mrm from '../../img/meeseek.png';
import jerry from '../../img/jerry.png';
export default class ChatHistory extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let chats = this.props.chatHistory;
    return(
      <ul>
        {chats.map((chat, i) => (
          <li key={i} className={
            chat.user === "Jerry" ? "list-item" : "list-item right"
          }>
            <div className="message-bubble">
              <img className="icon"
                src={ chat.user === "Jerry" ? jerry : mrm }/>
              <p>{chat.message}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
