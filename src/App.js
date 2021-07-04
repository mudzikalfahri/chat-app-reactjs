import './App.css';
import React, { useEffect } from 'react'
import Header from './component/header/header.component';
import BodyChat from './component/bodychat/bodychat.component';
import ChatField from './component/chatfield/chatfield.component';
import { useState } from 'react';
import data from './firebase';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    data.collection('messages').orderBy('time', 'asc').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data().message))
    })
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const submitMessage = (e) => {
    e.preventDefault();
    data.collection('messages').add({
      message: input,
      time: firebase.firestore.FieldValue.serverTimestamp()
    })
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
