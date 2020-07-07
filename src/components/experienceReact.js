import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl'; 


class ExperienceReact extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p style={{textAlign: 'center'}}>{this.props.startYear} - {this.props.endYear}</p>
                    <p style={{textAlign: 'center'}}>{this.props.rolJob}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px', textAlign: 'justify' }}> {this.props.jobName} </h4>
                    <p style={{ textAlign: 'justify' }}>{this.props.jobDescription}</p>
                    <p style={{ fontWeight: 'bold' }}>Functionalities:</p>
                    <List>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Create Users.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Create, read, update and delete Projects.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Create, read, update and delete Tasks.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Log In.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Log Out.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Project and task manager.</ListItem>
                    </List>  

                    <p style={{ fontWeight: 'bold' }}>Responsabilities:</p>
                    <p style={{ marginLeft: '15px', fontWeight: 'bold' }}>Front End</p>
                    <List>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation the login page and creating an account.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation the project page.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of new projects.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of tasks for projects.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Validation of forms and alerts.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of accounts and authentication from react.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Project creation and management.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Task creation and management.</ListItem>  
                    </List> 

                    <p style={{ marginLeft: '15px', fontWeight: 'bold' }}>Back End</p>
                    <List>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of the API.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Connection to MongoDB.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of models for user, project, and task.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of controllers for auth, user, project and task.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of routes for auth, user, project and task.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of middleware.</ListItem>  
                    </List> 

                    <p style={{ fontWeight: 'bold' }}>Technologies Used:</p>
                    <List>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• React</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• JavaScript</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• HTML</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• CSS</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Node.js</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Express.js</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• MongoDB</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Git</ListItem>  
                    </List> 

                    <h5>Link to open App</h5>
                    <a href="https://heuristic-easley-f59559.netlify.app/" target="_blank" rel="noopener noreferrer">https://heuristic-easley-f59559.netlify.app/</a>

                </Cell>
            </Grid>
        )
    }
}

export default ExperienceReact;