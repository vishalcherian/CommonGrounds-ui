import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import { colors } from '../theme/colors'

const DarkTextField = withStyles( {
  root : {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.secondaryMain
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.secondaryContrast
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.secondaryContrast
    },
    "& .MuiOutlinedInput-input": {
      color: colors.secondaryMain,
      fontFamily : 'Roboto Mono, sans-serif',
      fontWeight : 'normal'
    },
    "&:hover .MuiOutlinedInput-input": {
      color: colors.secondaryContrast
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      fontFamily : 'Roboto Mono, sans-serif',
      color : colors.secondaryMain,
      fontWeight : 'normal'
    },
    "& .MuiInputLabel-outlined": {
      color: colors.secondaryMain
      
    },
    "&:hover .MuiInputLabel-outlined": {
      color: colors.secondaryContrast
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: colors.secondaryMain
    }
  }
} )( TextField )

export default DarkTextField