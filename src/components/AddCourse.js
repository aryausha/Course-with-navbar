import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class AddCourse extends Component {
    state={
        courseTitle:"",
        courseDescription:"",
        courseDate:"",
        courseDuration:"",
        courseVenue:""
    }
    onSubmit=()=>
    {
        console.log(this.state)
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status="success")
                {
                    alert("added succesfully")
                }

            }
        )
    }
    fetchData=(event)=>
    {
        this.setState({
            
                [event.target.name]:event.target.value
            
        })
    }
    render() {
        return (
            <div>
                <Grid container style={{padding:50}}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{padding:30}}>
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        type="text"
                        label="CourseTitle"
                        name="courseTitle"
                        onChange={this.fetchData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{padding:30}}>
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        type="text"
                        label="CourseDescription"
                        name="courseDescription"
                        onChange={this.fetchData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{padding:30}}>
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        type="date"
                        label="CourseDate"
                        name="courseDate"
                        onChange={this.fetchData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{padding:30}}>
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        type="text"
                        label="CourseDuration"
                        name="courseDuration"
                        onChange={this.fetchData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{padding:30}}>
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        type="text"
                        label="CourseVenue"
                        name="courseVenue"
                        onChange={this.fetchData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                        variant="contained"
                        fullWidth
                        required
                        margin="normal"
                        color="secondary"
                        onClick={this.onSubmit}

                        >Submit</Button>
                        </Grid>




                </Grid>
                
            </div>
        )
    }
}
