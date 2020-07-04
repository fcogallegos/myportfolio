import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profile  from '../images/fjg.png';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Francisco Gallegos</h2>
                        <img 
                            src={profile}
                            alt="profile"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', fontSize:'17px' , paddingTop: '1em' }} >
                            Software Engineer with knowledge in the development of web
                            applications in different databases management systems, using
                            SCRUM methodology to create incremental and quality
                            software. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                              <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (311) 289-48-05
                                </ListItemContent>
                              </ListItem>
                              
                              <ListItem>
                                <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    fgallegosgo@gmail.com
                                </ListItemContent>
                              </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;