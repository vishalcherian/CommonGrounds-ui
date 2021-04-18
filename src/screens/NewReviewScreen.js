import React, { useState, useEffect } from 'react'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import CoffeeNotes from '../util/CoffeeNotes'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor : 'white',
    borderRadius : 10,
    padding : 40
  },
  label : {
    marginBottom : 20
  }
}));

const NewReviewScreen = ( props ) => {
  const classes = useStyles()
  const [ chips, setChips ] = useState( null )

  useEffect( () => {
    const appendChips = ( newChips ) => {
      const newResult = chips.concat( newChips )
      setChips( newResult )
    }

    const chips = Object.keys( CoffeeNotes ).map( ( adjective ) => {
      const chipStyle = { 
        backgroundColor : CoffeeNotes[adjective].color,
        color : 'white',
      }
      return <Chip
        label={adjective} 
        onClick={handleClick} 
        style={chipStyle} 
        clickable />
    } )
    setChips( chips ) 
  } )

  const handleClick = () => {}
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3" gutterBottom>
          New Review
        </Typography>
        <Grid container xs={12} justify="flex-start">
          <Typography className={classes.label} component="body1" variant="body2" gutterBottom>
            First, describe it's boldest flavor
          </Typography>
        </Grid>
        <Grid className={classes.label} container xs={12} justify="flex-start">
          {chips}
        </Grid>
        <Grid container  xs={12} justify="flex-start">
          <Typography className={classes.label} component="body1" variant="body2" gutterBottom>
            Mmm, any additional notes?
          </Typography>
        </Grid>
        <Grid container xs={12} justify="flex-start">
          {chips}
        </Grid>
      </div>
    </Container>
  )
}

export default NewReviewScreen
