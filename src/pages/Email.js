import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'react-bootstrap';


export default function Email() {
  return (
    
     
      <TextField  style={{ width: 350,fontFamily:'Quicksand'}} label="Email" variant="outlined" />
    
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
 
];