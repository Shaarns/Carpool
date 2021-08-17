import React, { useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { users } from '../chat/chat-data';
import LeftChatBox from './LeftChatBox';
import RightChatBox from './RightChatBox';
import './chat.css';

const Chat = () => {
  const [sendMessages, setSendMessages] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setSendMessages(event.target.value);
  };

  const handleClick = () => {
    if (sendMessages.length === 0) {
      return;
    } else {
      setMessages([...messages, { messages: sendMessages, id: Date.now() }]);
      setSendMessages('');
    }
  };

  return (
    <Container maxWidth='md'>
      <Paper elevation={5}>
        <Grid container>
          <Grid item md={4} xs={4}>
            <LeftChatBox users={users} />
          </Grid>
          <Grid item md={8} xs={8}>
            <RightChatBox
              handleChange={handleChange}
              handleClick={handleClick}
              sendMessages={sendMessages}
              messages={messages}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Chat;
