import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import MessageInput from './MessageInput';

const useStyles = makeStyles((theme) => ({
  messages: {
    backgroundColor: 'brown',
    color: 'white',
    display: 'inline-block',
    padding: theme.spacing(0.5, 2),
    borderRadius: '4rem',
    boxShadow:
      '2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px rgba(0, 0, 0, 0.2)',
  },
}));

const RightChatBox = ({
  messages,
  handleChange,
  handleClick,
  sendMessages,
}) => {
  const classes = useStyles();
  return (
    <div className='right-chat-section'>
      <section className='chat-header'>
        <Typography variant='h6'> Chat Person Name</Typography>
      </section>
      <hr />
      <article className='right-chat-box'>
        <section className='message-area'>
          <div className='chat-box'>
            {messages.map((message) => (
              <div key={message.id}>
                <Typography
                  variant='subtitle2'
                  className={classes.messages}
                  align='right'
                >
                  {message.messages}
                </Typography>
              </div>
            ))}
          </div>
        </section>
        <MessageInput
          handleClick={handleClick}
          handleChange={handleChange}
          sendMessages={sendMessages}
        />
      </article>
    </div>
  );
};

export default RightChatBox;
