import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const MessageInput = ({ handleChange, sendMessages, handleClick }) => {
  return (
    <section className='message-input-area'>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className='message-input-field'>
          <TextField
            placeholder='Type Message and hit Enter'
            onChange={handleChange}
            value={sendMessages}
            fullWidth
          />

          <Button type='submit' onClick={handleClick}>
            <SendIcon aria-label='toggle'></SendIcon>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default MessageInput;
