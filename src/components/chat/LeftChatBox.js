import React from 'react';
import { Typography, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // messages: {
  //   backgroundColor: 'brown',
  //   color: 'white',
  //   display: 'inline-block',
  //   padding: theme.spacing(0.5, 2),
  //   borderRadius: '4rem',
  //   boxShadow:
  //     '2px 2px 2px rgba(0, 0, 0, 0.2), -2px -2px 2px rgba(0, 0, 0, 0.2)',
  // },
  avatar: {
    margin: theme.spacing(0.5, 1),
  },
  userName: {
    margin: theme.spacing(0.5, 1),
  },
}));

const LeftChatBox = ({ users }) => {
  const classes = useStyles();
  return (
    <div>
      <div className='left-chat-section'>
        <section className='chat-header'>
          <Typography variant='h6' align='center'>
            UserName
          </Typography>
        </section>
        <hr />
        <article className='left-chat-box'>
          {users.map((user) => {
            return (
              <div className='left-chat-users' key={user.id}>
                <Avatar alt='' src={user.image} className={classes.avatar} />
                <Typography variant='subtitle2' className={classes.userName}>
                  {user.name}
                </Typography>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default LeftChatBox;
