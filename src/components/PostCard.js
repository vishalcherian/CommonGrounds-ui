import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { format } from 'date-fns'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert'
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import axios from 'axios'

import Config from '../Config'
import { coffeeNotesData } from '../util/CoffeeNotes'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostCard = ( {
  userImage,
  title,
  subtitle,
  flavors,
  description,
  cheersCount,
  commentCount
} ) => {
  const classes = useStyles();

  const [ chips, setChips ] = useState( [] )

  return (
    <Card className={classes.root} elevation={1}>
      <CardHeader
        avatar={
          <Avatar aria-label="C" variant="rounded" className={classes.avatar}>
            Comm
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardContent>
        <Grid container spacing={1} >
          {flavors.map( flavor => {
            const style = coffeeNotesData[flavor].postCardStyle
            return (
              <Grid item>
                <Chip 
                label={flavor}
                style={style} />
              </ Grid>
            )
          } )}
        </Grid>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard