import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl'; 


class Experience extends Component {
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
                    <p style={{ fontWeight: 'bold' }}>Responsabilities:</p>
                    <List>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Work with SCRUM methodology.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Design the database model.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Design the layout of the user interface.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Develop a web application for the administration of the registration process
                          procedures.</ListItem>
                          
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of the student module.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of the secretary module.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Creation of the administrator module.</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Implementation of Bootstrap and Angular Material to have a responsive and
                            great web application.</ListItem>
                    </List>

                    <p style={{ fontWeight: 'bold' }}>Technologies Used:</p>
                    <List>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• JavaScript</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• TypeScript</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Angular</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• HTML</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• CSS</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Bootstrap</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Angular Material</ListItem>
                          <ListItem  style={{ color: 'white', fontSize: '14px' }}>• Git</ListItem>
                    </List>    

                    <h5>Link to open App</h5>
                    <a href="https://pablo300595.github.io/AppCLIENTEPRUEBAS/" target="_blank" rel="noopener noreferrer">https://pablo300595.github.io/AppCLIENTEPRUEBAS/</a>
  
                </Cell>
            </Grid>
        )
    }
}

export default Experience;