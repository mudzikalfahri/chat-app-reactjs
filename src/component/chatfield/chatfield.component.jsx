import React from 'react'
import './chatfield.styles.scss'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { TextField, Button } from '@material-ui/core';

function ChatField(props) {
    return (
        <div className='chatfield'>
            <form>
                <TextField 
                    className='input'
                    value={props.input} 
                    onChange={props.handleChange} 
                    id="outlined-basic" 
                    label="Type a message" 
                    variant="outlined" />
                <Button
                    size="large" 
                    disabled={!props.input}
                    onClick={props.submitMessage}
                    type='submit'
                    variant="contained"
                    color="primary"
                    endIcon={<SendRoundedIcon/>}
                >
                    Send
                </Button>
            </form>            
        </div>
    )
}

export default ChatField
