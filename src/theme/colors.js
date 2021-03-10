import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme( {
    palette : {
        primary : {
            main : '#060f40',
            contrastText : '#ede8bb'
        },
        secondary : {
            main : '#370617',
            contrastText : '#ede8bb'
        },
    }
} )

export default theme