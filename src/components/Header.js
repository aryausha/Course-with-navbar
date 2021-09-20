import { AppBar, MenuItem, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography>
                            Course Details
                        </Typography>
                        <Link to="/" style={{textDecoration:'none'}}><MenuItem>AddCourse</MenuItem></Link>
                        <Link to="/view" style={{textDecoration:'none'}}><MenuItem>ViewCourse</MenuItem></Link>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}
