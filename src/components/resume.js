import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 
import profile  from '../images/fjg.png';
import Education from './education';
import Experience from './experience';
import ExperienceReact from './experienceReact';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center'}}>
                            <img 
                                src={profile}
                                alt="profile"
                                style={{ height: '250px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Francisco Gallegos</h2>
                        <h4 style={{ color: 'grey' }}>Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p style={{textAlign: 'justify'}}>Software Engineer with knowledge in the development of web
                            applications in different databases management systems, using
                            SCRUM methodology to create incremental and quality
                            software. 
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Phone</h5>
                        <p>(311) 289-48-05</p>
                        <h5>Email</h5>
                        <p>fgallegosgo@gmail.com</p>
                        <h5>Portfolio</h5>
                        <a href="https://clever-torvalds-25b57b.netlify.app/" target="_blank" rel="noopener noreferrer">https://clever-torvalds-25b57b.netlify.app/</a>
                        <h5>GitHub</h5>
                        <a href="https://github.com/fcogallegos?tab=repositories" target="_blank" rel="noopener noreferrer">https://github.com/fcogallegos?tab=repositories</a>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2013}
                            endYear={2019}
                            schoolName="Instituto Tecnológico de Tepic"
                            schoolDescription="Computer Systems Engineer
                            Specialty - Web and multiplatform development."
                        />

                        <Education 
                            startYear={2009}
                            endYear={2012}
                            schoolName="Conalep Tepic 169"
                            schoolDescription="Technical Professional Bachelor in Computer Science."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <ExperienceReact 
                            startYear={2020}
                            endYear={2020}
                            rolJob="Full Stack / Project and Task Manager"
                            jobName="Full Stack / Project and Task Manager"
                            jobDescription="The project and task manager allows you to create, get, update, delete projects
                            and tasks; tasks are added to the active project; Thus it also allows creating users
                            and being able to log in and log out."
                        />

                        <br/>
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            rolJob="Front End / Registration system and document convergence kiosk"
                            jobName="Front End Developer / Centro de Investigación y Desarrollo de
                            Tecnologías de la Información (CIDETI)"
                            jobDescription="I did a professional residency lasting one year, my collaboration was with the front-end
                            in a software development project to automate the enrollment process for new students
                            at Instituto Tecnológico de Tepic."
                        />
                       
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills 
                            skill="Node.js"
                            progress={80}
                        />
                        <Skills 
                            skill="React"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;