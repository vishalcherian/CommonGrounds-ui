import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme( {
    typography: {
        fontFamily : [
            'Roboto Mono',
            'sans-serif'
        ].join( ',' ),
        h3 : {
            fontFamily : [
                'Libre Baskerville',
                'serif'
            ].join( ',' )
        },
        body1 : {
            fontFamily : [
                'Barlow',
                'sans-serif'
            ].join( ',' )
        },
        body2 : {
            fontFamily : [
                'Roboto Mono',
                'sans-serif'
            ].join( ',' ),
        }
    },
    palette : {
        primary : {
            main : '#000',
            contrastText : '#ede8bb'
        },
        secondary : {
            main : '#49c46a',
            contrastText : '#ede8bb'
        },
    }
} )

export default theme