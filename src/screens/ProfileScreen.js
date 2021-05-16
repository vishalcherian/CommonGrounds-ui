import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { colors } from '../theme/colors'

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundColor : colors.secondaryMain,
    justifyContent : 'center',
    alignItems : 'center'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Sidebar = withStyles( {
  root : {
    borderRightWidth : 0,
  }
} )( Drawer)

const ProfileScreen = ( { profilePicSrc, userHandle } ) => {
  const classes = useStyles()
  console.log( profilePicSrc )
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left" >

      <ListItem>
        <Grid container direction="row" justify="flex-start" alignItems="center" style={{ paddingTop : 15, paddingBottom : 15 }}>
          <Avatar style={{ marginRight : 20 }} variant="rounded" alt={"Vishal"} src={profilePicSrc} className={classes.large} />
          <Typography component="h1" variant="h5" gutterBottom>
            {userHandle}
          </Typography>
        </Grid>
      </ListItem>
      <ListItem>
        
      </ListItem>
      <Divider />
    </Drawer>
  )
}

const mapStateToProps = ( state ) => {
  return {
    profilePicSrc : 'https://github.com/identicons/jcazevedo.png',
    userHandle : state.user.credentials.userHandle
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {}
}

export default connect( mapStateToProps, mapDispatchToProps )( ProfileScreen )
