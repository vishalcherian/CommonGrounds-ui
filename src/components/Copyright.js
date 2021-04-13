import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const Copyright = ( props ) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'CommonGrounds © '}
      <Link color="inherit" href="https://github.com/vishalcherian">
        Enjoy ❤️ 
      </Link>{' '}
    </Typography>
  );
}

export default Copyright