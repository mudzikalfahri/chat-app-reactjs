import React from 'react';
import './bodychat.styles.scss';
import ChatBaloon from '../chat-baloon/chat-baloon.component';

function BodyChat(props) {
    return (
        <div className='bodychat'>
            {props.messages.map(message => (
                <ChatBaloon key={message.id} message={message.message}/>
            ))}
        </div>
    )
} 

export default BodyChat
