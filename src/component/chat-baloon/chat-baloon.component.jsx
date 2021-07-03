import React from 'react';
import './chat-baloon.styles.scss';

function ChatBaloon(props) {
    return (
        <div className='chatbaloon'>
            <div className="sender">someone</div>
            <p className="chat">{props.message}</p>
        </div>
    )
}

export default ChatBaloon
