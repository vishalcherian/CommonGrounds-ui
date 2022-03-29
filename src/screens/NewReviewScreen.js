import React, { useState, useEffect } from 'react'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import { coffeeNotesData, initialHighlights } from '../util/CoffeeNotes'
import { postNewReview } from '../redux/actions/dataAction'
import DarkTextField from '../components/DarkTextField'
import './styles/NewReviewStyles.css'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent : 'center',
    overflow : 'hidden'
  },
  label : {
    marginBottom : 10
  },
}));

const NewReviewScreen = ( {
  onClose,
  postNewReview
} ) => {
  const classes = useStyles()

  const [ initialSelected, setInitialSelected ] = useState( {} )
  const [ unselected, setUnselected ] = useState( {} )
  const [ highlighted, setHighlighted ] = useState( {} )
  const [ selected, setSelected ] = useState( {} ) 
  const [ coffeeName, setCoffeeName ] = useState( '' )
  const [ coffeeCompany, setCoffeeCompany ] = useState( '' )
  const [ description, setDescription ] = useState( '' )

  useEffect( () => {
    // iterate through coffeeData to add all to unselected Object
    const unselectedInit = {}
    Object.keys( coffeeNotesData ).forEach( key => unselectedInit[key] = true )
    setUnselected( unselectedInit )
    // iterate through initialHighlights and add all to highlighted object
    setHighlighted( initialHighlights )
  }, [] )

  const handleChipSelect = ( key ) => {
    const subNotes = coffeeNotesData[key].subNotes

    if ( selected[key] ) {
      // remove from selected
      const selectedCopy = { ...selected }
      delete selectedCopy[key]
      setSelected( selectedCopy )
      // add to unselected
      setUnselected( { ...unselected, [key] : true } )
      // remove related highlights
      const highlightedCopy = { ...highlighted }
      subNotes.forEach( subNote => delete highlightedCopy[subNote] )
      setHighlighted( highlightedCopy )
    } else {
      // remove from unselected
      const unselectedCopy = { ...unselected }
      delete unselectedCopy[key]
      setUnselected( unselectedCopy )
      // add to selected
      setSelected( { ...selected, [key] : true } )
      // add related highlights
      const highlightedCopy = { ...highlighted }
      subNotes.forEach( key => highlightedCopy[key] = true )
      setHighlighted( highlightedCopy )
    }
  }

  const handleSubmit = ( event ) => {
    // get selected chips, brand, coffee name, description
    const body = {
      flavorNotes : Object.keys( selected ),
      name : coffeeName,
      company : coffeeCompany,
      description,
    }
    // validation

    // send to api to post
    postNewReview( body )
    onClose()
  }

  return (
    <Container component="main" maxWidth={1} className={classes.paper}>
      <CssBaseline />
      <Grid container xs={12} direction="column" justify="space-between">

        <Grid container xs={12} justify="space-between">
          <Grid item xs={2}>
            <Button color="secondary" onClick={onClose} size="large" disableRipple >
              <CloseIcon fontSize="large"/>
            </Button>
          </Grid>
          <Grid container justify="center" xs={8}>
            <Typography component="h1" variant="h3" color='secondary' gutterBottom>
              New Review
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container xs={12}>
          <Box pt={6} style={{ marginTop : 20, height : '70vh', overflowY : 'auto', overflowX : 'hidden' }}>
            <Grid container xs={12} justify="center" style={{ marginBottom : 20 }}>
              <Typography className={classes.label} component="body1" variant="body2" color="secondary" gutterBottom>
                Tell us about its flavors and aromas:
              </Typography>
            </Grid>
            <Grid container xs={12} justify="center" style={{ marginBottom : 50 }} >
              <Grid container xs={7} justify="center" >
                {Object.keys( coffeeNotesData ).map( key => {
                    let style = coffeeNotesData[key].unselectedStyle
                    if ( selected[key] ) style = coffeeNotesData[key].selectedStyle
                    else if ( highlighted[key] ) style = coffeeNotesData[key].highlightedStyle
                    return (
                      <Box m={1}>
                        <Chip
                          label={key}
                          clickable
                          variant="outlined"
                          onClick={() => handleChipSelect( key )}
                          style={style} />
                      </Box>
                    )
                  } )}
              </Grid>
            </Grid>
            <Grid container xs={12} justify="center" style={{ marginBottom : 20 }}>
              <Typography className={classes.label} component="body1" variant="body2" color="secondary" gutterBottom>
                Now for some more details:
              </Typography>
            </Grid>
            <Grid container xs={12} justify="center">
              <Grid container spacing={2} xs={6} justify="center">
                <Grid item xs={12} sm={6}>
                  <DarkTextField
                    onChange={( event ) => setCoffeeName( event.target.value )}
                    autoComplete="fname"
                    name="coffeeName"
                    variant="outlined"
                    required
                    fullWidth
                    id="coffeeName"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DarkTextField
                    onChange={( event ) => setCoffeeCompany( event.target.value )}
                    variant="outlined"
                    required
                    fullWidth
                    id="company"
                    label="Company"
                    name="company"
                  />
                </Grid>
                <Grid item xs={12}>
                  <DarkTextField
                    rows={5}
                    multiline
                    color="secondary"
                    onChange={( event ) => setDescription( event.target.value )}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Any closing words?"
                    name="description"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid container xs={12} justify="center" alignContent="center">
          <Grid container justify="center" xs={8}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>    
    </Container>
  )
}

const mapStateToProps = ( state ) => {

}

const mapDispatchToProps = ( dispatch ) => {
  return {
    postNewReview : ( body ) => dispatch( postNewReview( body ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( NewReviewScreen )

