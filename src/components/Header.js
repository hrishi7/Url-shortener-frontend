import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const SampleFab = () => {
  const classes = useStyles();
  return ( <AppBar position="static" className={classes.root}>
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
      UrlShortner
    </Typography>
  </Toolbar>
</AppBar>);
}
class Header extends Component {
render(){
  // const classes = useStyles();
  return (
    <div >
     <SampleFab/>
    </div>
  );
}
}

export default Header;