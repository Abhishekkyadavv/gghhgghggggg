import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    //   boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
      backgroundColor: '#fff',
      padding: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        width: '50%',
        borderRadius: theme.spacing(1),
      },
    },
    form: {
        position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
    },
    submitButton: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  
const Posts = () => {
    const [formData, setFormData] = useState({
        posts: '',
        // body: '',
      });
      
      const ApiData={
"posts":[{"title" :formData.posts}]
      }
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
      
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // fake api test by suraj

            // const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
          
          // *********** interview api
            const response = await axios.post('https://dummyjson.com/posts', ApiData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      
                  
      const classes = useStyles();

return (
  <div className={classes.formContainer}>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Title"
        name="posts"
        value={formData.posts}
        onChange={handleInputChange}
      />
      {/* <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Body"
        name="body"
        value={formData.body}
        onChange={handleInputChange}
      /> */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submitButton}
      >
        Submit
      </Button>
    </form>
  </div>
);

      
}

export default Posts

