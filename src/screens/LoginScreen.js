import React, { useState } from 'react'
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
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import './styles/LoginScreenStyles.css'
import Copyright from '../components/Copyright'
import { loginUser } from '../redux/actions/userAction'

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
  error : {
    color : 'red'
  }
}));

const LoginScreen = ( {
  loginUser,
  history,
  UI : { loading, errors }
} ) => {
  const classes = useStyles()

  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  const handleSubmit = async ( event ) => {
    event.preventDefault()
    const userData = {
      email,
      password
    }
    loginUser( userData, history )
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
          {errors && (
            <p className={classes.error}>{errors}</p>
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
              control={<Checkbox value="remember" color="primary" icon={<SentimentSatisfiedSharpIcon color="primary"/>} checkedIcon={<InsertEmoticonSharpIcon color="secondary"/>}/>}
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
            <Grid 
              container
              justify="space-around">
              <Grid item>
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

const mapStateToProps = ( state ) => ( {
  user : state.user,
  UI : state.UI
} )

const mapDispatchToProps = {
  loginUser
}

export default connect( mapStateToProps, mapDispatchToProps )( LoginScreen )