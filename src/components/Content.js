import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import {Box,TextField,Fab,Typography} from '@material-ui/core';
import axios from 'axios';

import MySnackbar from "./MySnackbar";


// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
//     },
//     textField: {
//         width: '50%',
//         marginLeft:'25%',
//         marginRight:'25%',
//         marginTop:'3%',
//         marginBottom:'5%',
//       },
//       textField2: {
//         width: '350px'
//       },
//     button:{
//         textAlign:'center',
//         width:'30%',
//         marginLeft:'25%',
//         marginRight:'25%',
//     },
//     result:{
//         width:"100%",
//         marginLeft:'25%',
//         marginRight:'15%',
//         marginTop:'3%'
//     },
//     heading:{
//         textAlign:'center'
//     }
   
//   }));

//   let SampleFab3 = () => {
//     const classes = useStyles();
//     let CSampleFab3 = SampleFab3.bind(this);
//     // return ();
//  }

class Content extends Component {
  constructor (props){
    super(props);
    this.state = {
      longUrl:'',
      shortUrl:''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSave = () =>{
    let Url ={
      longUrl: this.state.longUrl
    } 
    let route = '/api/url/shortner';

    axios
      .post(route, Url)
      .then(res => {
        if(res.data.variant === 'error'){
          this.child.handleSnackbar(res.data);
          this.handleClear();
        }else{
          this.setState({
                shortUrl: res.data
              })
        }
      })
      
      .catch(err => console.log(err));
  }
  
  CopyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("shortUrl");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    // /* Alert the copied text */
    // let obj = {message:copyText.value, variant:'success'}
    // this.child.handleSnackbar(obj);
    alert("Copied the Url: " + copyText.value);
  }
  handleClear = () => {
    this.setState({
      longUrl:'',
      shortUrl:''
    });
  };

    render(){
  // const classes = useStyles();

      return (
        <Grid container>
       
      <Box
      boxShadow={1}
      bgcolor="background.paper"
      m={1}
      p={1}
      style={{ width: '100%', height: '25rem',marginLeft:'20%', marginRight:'20%' }}
    >
      <Typography variant="h5" gutterBottom style= {{ textAlign:'center'}} /*className={classes.heading}*/>
      Efficient Url Shortening service
    </Typography>

    <TextField label="longUrl" fullWidth value={this.state.longUrl} onChange={this.handleChange("longUrl")} />

      <Fab variant="extended" color="primary" aria-label="Add" 
      style={{  textAlign:'center',
                width:'30%',
                marginLeft:'25%',
                marginRight:'25%',
                marginTop:'3%',}} /*className={classes.button}*/ onClick={this.handleSave}>
        Get Link
      </Fab>
      <Grid container spacing={2} style={{
          width:"100%",
                  marginLeft:'15%',
                  marginRight:'10%',
                  marginTop:'3%'
      }} /*className={classes.result}*/>
          <Grid item>
              <TextField
                      label="shortUrl"
                      id="shortUrl"
                      // className={classes.textField2}
                      style={{minWidth: '400px'}}
                      type="text"
                      value={this.state.shortUrl}
                      margin="normal"
                  /> 
          </Grid>
          <Grid item >
              
                  <Fab variant="extended" color="primary" aria-label="Add" onClick={this.CopyToClipboard}>
                      Copy
                  </Fab> 
          </Grid>
      </Grid>
      
    </Box>
         {/* Below -> SnackBar for message print */}
         <MySnackbar onRef={ref => (this.child = ref)} />
    
        </Grid> 
      );
    }
  }

export default Content;