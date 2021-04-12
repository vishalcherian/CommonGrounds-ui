import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles'

import Config from '../Config'
import './styles/LoginScreenStyles.css'

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing( 3, 0, 5 ),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'CommonGrounds © '}
      <Link color="inherit" href="https://material-ui.com/">
        Enjoy ❤️ 
      </Link>{' '}
    </Typography>
  );
}

const LoginScreen = ( props ) => {
  const classes = useStyles()

  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const [ loading, setLoading ] = useState( false )
  const [ errors, setErrors ] = useState( null )

  const handleSubmit = async ( event ) => {
    try {
      event.preventDefault()
      setLoading( true )
      const res = await axios.post( `${Config.BASE_URL}/login`, {
        email,
        password
      } )
      console.log( 'result:', res.data )
      setLoading( false )
      props.history.push( '/' )
    } catch ( err ) {
      setLoading( false )
      console.log( 'errors:', err )
      setErrors( err )
    }
  }


  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h3" gutterBottom>
            Sign in
          </Typography>
          {loading && (
            <Typography component="h5" variant="h5" gutterBottom>
              Loading...
            </Typography>
          )}
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              onChange={( event ) => {
                setEmail( event.target.value )
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={( event ) => {
                setPassword( event.target.value )
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  )
}

export default LoginScreen