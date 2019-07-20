import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height:'128px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  copyright:{
      textAlign:'center',
      paddingTop:'45px'
  }
}));



const SampleFab2 = () => {
  const classes = useStyles();
  return ( 
    <Grid container xs = {12}  className={classes.root} >
      <Grid xs={12 } className={classes.copyright}>
          © 2018-2019 UrlShortner.com.
      </Grid>
    </Grid>
  );
}

class Footer extends Component {
  render(){
  // const classes = useStyles();

  return (
    <div>
        <SampleFab2/>
    </div>
  );
}
}
export default Footer;