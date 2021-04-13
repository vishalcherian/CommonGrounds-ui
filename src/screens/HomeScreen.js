import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';
import axios from 'axios'

import Config from '../Config'
import NewReviewScreen from './NewReviewScreen'
import Typography from '@material-ui/core/Typography';


const HomeScreen = ( props ) => {
  const [ reviewModalVisible, setReviewModalVisible ] = useState( false )
  // const [ posts, setPosts ] = useState( { } )
  // useEffect( () => {
  //   // TODO
  //   const getPosts = async () => {
  //     const url = Config.BASE_URL + '/posts'
  //     const posts = await axios.get( url )
  //     console.log( 'posts:', posts )
  //     setPosts( posts )
  //   }
  //   getPosts()
  // }, [] )
    
  // let recentScreamsMarkup = posts ? (
  //   posts.map( post => <p>post.description</p>)
  // ) : <p>Loading...</p>

  const handleAddReview = () => {
    setReviewModalVisible( true )
  }

  return (
    <div>
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          <p>Content...</p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
        <Fab color="secondary" aria-label="add" onClick={handleAddReview} >
          <LocalCafeTwoToneIcon />
        </Fab>
      </Grid>
        <Modal open={reviewModalVisible} onBackdropClick={() => setReviewModalVisible(false)} closeAfterTransition>
          <Fade>
            <NewReviewScreen />
          </Fade>
        </Modal>
    </div>
  )
}

export default HomeScreen