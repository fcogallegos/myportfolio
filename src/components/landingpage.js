import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile  from '../images/fjg.png';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={profile}
                            alt="profile"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            
                            <hr />
                            
                            <p> HTML | CSS | Bootstrap | JavaScript | jQuery | React | Angular | NodeJS | Express </p>
                            <p>  MongoDB | SQL Server | MySQL | REST API | Git | GitHub | Linux | Java </p>
                            
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/francisco-javier-gallegos-god%C3%ADnez-609966169/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/fcogallegos?tab=repositories" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                
                                {/* Freecodecamp 
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                                */}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;