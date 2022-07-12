import React, { Component, Fragment } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Fragment>
                    <div className="projects-grid">
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Project Manager - Front End React</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                It is a project manager which allows you to create new users, log in and be able to create projects, create tasks, edit them, delete them.
                            </CardText>
                            <CardActions border>
                                <Button href="https://classy-mandazi-a46afb.netlify.app" target="_blank" colored>Open App</Button>
                                <Button href="https://github.com/fcogallegos/UPTASKS_MERN_frontend" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 2 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Patient Manager</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                It is a pet appointment manager, which is a form that is validated, you can add appointments and delete them.
                            </CardText>
                            <CardActions border>
                                <Button href="https://nervous-blackwell-31ff34.netlify.app" target="_blank" colored>Open App</Button>
                                <Button href="https://github.com/fcogallegos/quotes_react" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 3 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Weekly expense</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                It is a project that manages the budget, expenses can be added, and will show the budget entered and the remaining one.
                            </CardText>
                            <CardActions border>
                                <Button href="https://elastic-kare-c9911e.netlify.app/" target="_blank" colored>Open App</Button>
                                <Button href="https://github.com/fcogallegos/budget_react" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 4 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Cryptocurrency quote</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                It is a project that quotes the type of currency and the type of cryptocurrency and calculates the current price.
                            </CardText>
                            <CardActions border>
                                <Button href="https://sleepy-thompson-c6e0f3.netlify.app/" target="_blank" colored>Open App</Button>
                                <Button href="https://github.com/fcogallegos/cotizador_react" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                    </div>
                    <div className="projects-grid">
                        {/* Project 5 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Wheater React App</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                Climate consulting project.
                            </CardText>
                            <CardActions border>
                                <Button href="https://distracted-goldwasser-b77527.netlify.app/" target="_blank" colored>Open App</Button>
                                <Button href="https://github.com/fcogallegos/weather_react" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 6 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Song yrics finder</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                It is a Song yrics finder, you only need the artist and the name of the song, this is done by consulting an API.
                            </CardText>
                            <CardActions border>
                                <Button href="https://elastic-johnson-747886.netlify.app/" target="_blank" colored>Open App</Button>
                                <Button href="https://github.com/fcogallegos/letters_react" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 7 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Image finder App</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                Image search through an API query
                            </CardText>
                            <CardActions border>
                                <Button href="https://keen-wright-00efdc.netlify.app/" target="_blank" colored>Open App</Button>
                                <Button href="https://github.com/fcogallegos/pixabay_react" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                         {/* Project 8 */}
                         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Insurance quote App</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                Insurance quote
                            </CardText>
                            <CardActions border>
                                <Button href="https://practical-wright-2d1378.netlify.app/" target="_blank" colored>Open App</Button>
                                <Button href="https://github.com/fcogallegos/cotizador_react" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>

                </Fragment>
                
            )
        } else if(this.state.activeTab === 1) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                    <CardTitle style={{color: 'black', height: '200px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) center / cover'}}>Angular Project</CardTitle>
                    <CardText style={{textAlign: 'justify'}}>
                        REGISTRATION SYSTEM AND DOCUMENT CONVERGENCE KIOSK is a system designed to facilitate the biannual registration process carried out by the Instituto Tecnológico de Tepic.
                    </CardText>
                    <CardActions border>
                        <Button href="https://pablo300595.github.io/AppCLIENTEPRUEBAS/" target="_blank" colored>Open App</Button>
                        <Button href="https://github.com/pablo300595/AppCLIENTEPRUEBAS" target="_blank"colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover'}}>Project Manager - Back End React</CardTitle>
                            <CardText style={{textAlign: 'justify'}}>
                                Back End with NodeJS, Express, using Database MongoDB.
                            </CardText>
                            <CardActions border>
                                <Button href="https://fierce-atoll-76442.herokuapp.com/" target="_blank" colored>HEROKU</Button>
                                <Button href="https://github.com/fcogallegos/MERN-tasks-server" target="_blank"colored>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                </div>        
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                
                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;