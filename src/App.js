import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {Link} from "react-router-dom";
import Main from "./Components/Main";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className='header-color' href='/' title="Umair Malik" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">Aboutme</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contactme</Link>
                </Navigation>
            </Header>
            <Drawer title="Umair Malik">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">Aboutme</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contactme</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
