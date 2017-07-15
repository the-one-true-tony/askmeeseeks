import React, { Component } from 'react';
import mrm from '../../img/meeseek.png';
import jerry from '../../img/jerry.png';
export default class ChatHistory extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let chats = this.props.chatHistory;
    console.log(chats);
    return(
      <ul>
        {chats.map((chat, i) => (
          <li key={i}>
            <div>
              <img className="icon"
                src={ chat.user === "Jerry" ? jerry : mrm }/>
              <p>{chat.user}: {chat.message}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
