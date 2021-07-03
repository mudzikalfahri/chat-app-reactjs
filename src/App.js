import './App.css';
import React from 'react'
import Header from './component/header/header.component';
import BodyChat from './component/bodychat/bodychat.component';
import ChatField from './component/chatfield/chatfield.component';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const submitMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
    console.log(messages)
  }

  

  return (
    <div className="App">
      <Header/>
      <BodyChat messages={messages}/>
      <ChatField input={input} handleChange={handleChange} submitMessage={submitMessage}/>
    </div>
  );
}

export default App;
