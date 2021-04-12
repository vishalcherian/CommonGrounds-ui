import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

import Config from '../Config'
import { PostCard } from '../components'

const HomeScreen = ( props ) => {
  const [ posts, setPosts ] = useState( { } )
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
    
  console.log( 'post:', posts )

  // let recentScreamsMarkup = posts ? (
  //   posts.map( post => <p>post.description</p>)
  // ) : <p>Loading...</p>
  return (
    <Grid container spacing={16}>
      <Grid item sm={8} xs={12}>
        <p>Content...</p>
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>Profile...</p>
      </Grid>
    </Grid>
  )
}

export default HomeScreen