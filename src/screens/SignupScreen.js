  
import React, { useState } from 'react';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Config from '../Config'
import Copyright from '../components/Copyright'

const useStyles = makeStyles( (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupScreen = ( props ) => {
  const classes = useStyles();

  const [ firstName, setFirstName ] = useState( '' )
  const [ lastName, setLastName ] = useState( '' )
  const [ userHandle, setUserHandle ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const [ confirmPassword, setConfirmPassword ] = useState( '' )
  const [ loading, setLoading ] = useState( false )
  const [ errors, setErrors ] = useState( '' )

  const handleSubmit = async ( event ) => {
    try {
      event.preventDefault()
      setErrors( '' )
      setLoading( true )
      const res = await axios.post( `${Config.BASE_URL}/signup`, {
        firstName,
        lastName,
        userHandle,
        email,
        password,
        confirmPassword
      } )
      console.log( 'res:', res )
      localStorage.setItem( 'FBIdToken', `Bearer ${res.data.token}` )
      setLoading( false )
      props.history.push( '/' )
    } catch ( err ) {
      setLoading( false)
      if ( err.response ) {
        setErrors( err.response.data.error )
      } else if ( err.request ) {
        setErrors( err.request.data.error )
      } else {
        setErrors( 'Something went wrong, please try again later' )
      }
      console.log( 'errors:', err.error )
    }
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3" gutterBottom>
          Sign up
        </Typography>
        {loading && (
            <Typography component="h5" variant="h5" gutterBottom>
              Loading...
            </Typography>
          )}
          {errors && (
            <p className={classes.error}>{errors}</p>
          )}
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={( event ) => {
                  setFirstName( event.target.value )
                }}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={( event ) => {
                  setLastName( event.target.value )
                }}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={( event ) => {
                  setUserHandle( event.target.value )
                }}
                variant="outlined"
                required
                fullWidth
                id="userHandle"
                label="Username"
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={( event ) => {
                  setEmail( event.target.value )
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={( event ) => {
                  setPassword( event.target.value )
                }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={( event ) => {
                  setConfirmPassword( event.target.value )
                }}
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="space-around">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default SignupScreen