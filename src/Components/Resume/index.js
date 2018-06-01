import React  from "react"
import { Grid, Cell} from "react-mdl"
import Education from "../subViews/Education"
import Experience from "../subViews/Experience"
import Skills from "../subViews/Skills"

export default class Resume extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}} >
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Umair Malik</h2>
                        <h4 style={{color: 'grey'}}>Mern Stack Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>House No: B.T.25 R.B.B colony jamshoro</p>
                        <h5>Phone</h5>
                        <p>+92 305-3042326</p>
                        <h5>Email</h5>
                        <p>umairmalikavan@gmail.com</p>
                        <h5>Website</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className='resume-right-cell' col={8}>
                        
                        <h2>
                            Experience
                        </h2>
                        
                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        
                        <h2>
                            Education
                        </h2>
                        <Education
                            startYear={2002}
                            endYear={2006}
                            schoolName="My University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <Education
                            startYear={2002}
                            endYear={2006}
                            schoolName="My University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <Education
                            startYear={2002}
                            endYear={2006}
                            schoolName="My University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={80}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />

                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}