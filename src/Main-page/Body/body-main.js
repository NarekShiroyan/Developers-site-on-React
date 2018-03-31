import React, { Component } from 'react';
import './body-main-style.css';
import video from './video/Love-Coding.mp4';
import services from './services'
import {projects} from './projects/project_const'
import Projects from "./projects/projects";

class body extends Component {
    render() {

        function ServiceBlock(props) {
            const services = (
                <div className='row'>
                    {props.services.map((service)=>
                        <div className='col s4' key={service.toString()}>
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={service.imgUrl}/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">{service.name}<i className="material-icons right"></i></span>
                                    <p><a href="">Ссылка</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{service.description}<i className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
            return(
                <div className='container'>
                {services}
                </div>
            )
        }

        return (
            <div className='row'>
            <div className="homepage-hero-module">
                <div className="video-container">
                    <video className="fillWidth" loop autoPlay>
                        <source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                </div>
            </div>
                <div className='servicesBlock'>
                    <ServiceBlock services={services}/>
                    <Projects/>
                </div>
            </div>
        );
    }
}

export default body;