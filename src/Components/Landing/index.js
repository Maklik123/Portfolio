import React, { Component } from 'react'
import {Grid, Cell, Card, CardText, CardTitle, CardActions} from "react-mdl"
import image from "../../assets/img/image.png"

export default class Landing extends Component {
  render() {
    return (
      <div style={{width: '100px', margin:'auto'}}>
        <Grid className='landing-grid' >
          <Cell col={12} >
            {/* <img
              src={image}
              alt="avatar"
              className="avatar-img"
            /> */}
             {/* <h1 className='my-Name'>Umair Malik</h1> */}
            


            <Card shadow={0} style={{width: '230px', height: '230px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto',  marginTop:'5em'}}>
              <CardTitle expand />
              <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                  {/* <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                      Image.jpg
                  </span> */}
              </CardActions>
          </Card>





            <div className='banner-text'>
              <h1>
                Full Stack Developer
              </h1>
              <hr/>
              <p>HTML/CSS | Bootstrap | Javascript| React | React Native | Nodejs | Express | Mongodb</p>
              <div className='social-Links'> 
                {/* LinkedIn */}
                <a href='http://google.com' rel='noopener noreferrer' target="_blank">
                  <i className='fa fa-linkedin-square' aria-hidden='trues' ></i>
                </a>
                {/* GitHub */}
                <a href='http://google.com' rel='noopener noreferrer' target="_blank">
                  <i className='fa fa-github-square' aria-hidden='trues' ></i>
                </a>
                {/* facebook */}
                <a href='http://google.com' rel='noopener noreferrer' target="_blank">
                  <i className='fa fa-facebook-square' aria-hidden='trues' ></i>
                </a>
                {/* twitter */}
                <a href='http://google.com' rel='noopener noreferrer' target="_blank">
                  <i className='fa fa-twitter-square' aria-hidden='trues' ></i>
                </a>
                

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
