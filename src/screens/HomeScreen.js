import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Dialog from '@material-ui/core/Dialog'
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import axios from 'axios'

import NewReviewScreen from './NewReviewScreen'
import ProfileScreen from './ProfileScreen'
import PostCard from '../components/PostCard'
import Config from '../Config'
import { CLOSE_REVIEW_SCREEN, OPEN_REVIEW_SCREEN } from '../redux/types'

const useStyles = makeStyles( {
  root: {
    backgroundColor : 'black'
  },
  fab : {
    margin: 0,
    top: 'auto',
    right: 40,
    bottom: 40,
    left: 'auto',
    position: 'fixed',
  }
} )

const HomeScreen = ( {
  reviewScreenOpen,
  openReviewScreen,
  closeReviewScreen
} ) => {

  const [ posts, setPosts ] = useState( [] )

  useEffect( () => {
    const getPosts = async () => {
      const FBIdToken = localStorage.getItem( 'FBIdToken' )
      const res = await axios.get( `${Config.BASE_URL}/posts`, { headers : { Authorization : FBIdToken } } )
      console.log( 'res.data:', res.data )
      setPosts( res.data )
    }
    getPosts()
  }, [] )
  // let recentScreamsMarkup = posts ? (
  //   posts.map( post => <p>post.description</p>)
  // ) : <p>Loading...</p>
  const classes = useStyles()

  const handleAddReview = () => {
    openReviewScreen()
  }

  console.log( 'posts:', posts )
  return (
    <div>
      <Grid container>
        <ProfileScreen />
        <Grid container sm={8} xs={12} spacing={3}>
          {posts.map( post => {
            console.log( 'post:', post )
            return (
              <Grid item>
                <PostCard
                  userImage={post.userImage}
                  title={post.name}
                  subtitle={post.company || 'The Bun Shop'}
                  flavors={post.flavorNotes}
                  description={post.description} 
                  cheersCount={post.likeCount}
                  commentCount={post.commentCount}
                />
              </ Grid>
            )
          } )}
        </Grid>
      </Grid>
        <Grid container justify="flex-end" maxWidth={1}>
          <Grid item>
            <Fab className={classes.fab} color="secondary" aria-label="add" onClick={handleAddReview} >
                <LocalCafeTwoToneIcon />
            </Fab>
          </Grid>
        </Grid>
      <Dialog
        fullScreen
        open={reviewScreenOpen}
        onClose={closeReviewScreen}
        PaperProps={ { style : { backgroundColor : 'black', boxShadow : 'none' } }}>
        <NewReviewScreen onClose={closeReviewScreen}/>
      </Dialog>
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return {
    reviewScreenOpen : state.UI.reviewScreenOpen
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    openReviewScreen : () => dispatch( { type : OPEN_REVIEW_SCREEN } ),
    closeReviewScreen : () => dispatch( { type : CLOSE_REVIEW_SCREEN } )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( HomeScreen )
