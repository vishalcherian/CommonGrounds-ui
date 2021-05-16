import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import { colors } from './colors'

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
        h5 : {
            fontFamily : [
                'Roboto Mono',
                'sans-serif'
            ].join( ','),
            fontSize : 16,
            fontWeight : 'bold'
        },
        body1 : {
            fontFamily : [
                'Barlow',
                'sans-serif'
            ].join( ',' ),
            fontSize : '1rem',
            fontWeight : 'bold'
        },
        body2 : {
            fontFamily : [
                'Roboto Mono',
                'sans-serif'
            ].join( ',' ),
            fontSize : '1rem'
        }
    },
    palette : {
        primary : {
            main : colors.primaryMain,
            contrastText : colors.primaryContrast
        },
        secondary : {
            main : colors.secondaryMain,
            contrastText : colors.secondaryContrast
        },
    },
    overrides: {
        // Style sheet name ⚛️
        MuiChip: {
          // Name of the rule
          root: {
            // Some CSS
            borderColor: 'pink',
          },
        },
      },
} )

export default theme