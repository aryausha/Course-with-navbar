import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios'
import React, { Component } from 'react'

export default class ViewCourse extends Component {
    constructor(){
        super();
        this.FetchApi();
    }
    state={
        course:[]
    }
    FetchApi=()=>{
        axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
            (response)=>{
                console.log(response.data)
                this.setState({
                    course:response.data

                })

            }
        )
    }
    render() {
        return (
            <div>
                <TableContainer style={{padding:80}}>
                    <Table>
                        <TableHead>
                                <TableRow>
                                    <TableCell>slno</TableCell>
                                    <TableCell>courseTitle</TableCell>
                                    <TableCell>courseDescription</TableCell>
                                    <TableCell>courseDate</TableCell>
                                    <TableCell>courseDuration</TableCell>
                                    <TableCell>courseVenue</TableCell>
                                </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.course.map(
                                (value,index)=>{
                                    return <TableRow>
                                        <TableCell>{index}</TableCell>
                                         <TableCell>{value.courseTitle}</TableCell>
                                    <TableCell>{value.courseDescription}</TableCell>
                                    <TableCell>{value.courseDate}</TableCell>
                                    <TableCell>{value.courseDuration}</TableCell>
                                    <TableCell>{value.courseVenue}</TableCell>
                                        

                                    </TableRow>
                                }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
        )
    }
}
