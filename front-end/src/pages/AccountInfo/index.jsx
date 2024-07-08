import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import userApi from '../../api/userApi';

const useStyles = makeStyles((theme) => ({
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
  profileImage: {
    display: 'block',
    margin: '0 auto',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: theme.spacing(3),
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  name: {
    width: '150px',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
  },
  button: {
    marginTop: theme.spacing(3),
    justifyContent:'center',
    textAlign:'center',
    width:'60px'
  },
}));

function AccountInfo(props) {
  const userId = localStorage.getItem('userId');
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    birthday: '',
    gender: '',
    password: '',
    profileImage: '', // Add a field for the profile image URL
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    if (!userId) {
      setError('No user ID found in local storage');
      return;
    }
    (async () => {
      try {
        const userData = await userApi.getInfo(userId);
        setUser(userData);
      } catch (error) {
        setError('Failed to fetch account info');
      }
    })();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <Box
      style={{
        margin: '120px auto',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
      }}
    >
      <Typography className={classes.title}>MY PROFILE</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {user.profileImage && (
        <img
          src={user.profileImage}
          alt="Profile"
          className={classes.profileImage}
        />
      )}
      <Box className={classes.wrapper}>
        <Box className={classes.item}>
          <Typography className={classes.name}>Display Name</Typography>
          <TextField
            className={classes.input}
            variant="outlined"
            value={user.displayName}
          />
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.name}>Email</Typography>
          <TextField className={classes.input} variant="outlined" value={user.email} />
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.name}>Birthday</Typography>
          <TextField className={classes.input} variant="outlined" value={user.birthday} />
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.name}>Gender</Typography>
          <TextField className={classes.input} variant="outlined" value={user.gender} />
        </Box>
        <Box className={classes.item}>
          <Typography className={classes.name}>Password</Typography>
          <TextField
            className={classes.input}
            variant="outlined"
            type="password"
            value={user.password}
          />
        </Box>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

AccountInfo.propTypes = {
  // Define prop types if any
};

export default AccountInfo;
