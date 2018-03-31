import React, { Component } from 'react';
import './projects.style.css'
import {projects} from './project_const'
function ProjectsBlock(props) {

    const projects = (
            <div className='row'>
                {props.projects.map((project)=>
                    <div className='col m4 s6' key={project.toString()}>
                        <div className="our-team">
                            <div className="team-image">
                                <img src='' />
                                <p className="description">
                                    Задний текст
                                </p>
                                <ul className="social">
                                    <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                    <li><a href=""><i className="fa fa-facebook-f"></i></a></li>
                                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                    <li><a href=""><i className="fa fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info">
                                <h3 className="title">Артбь dsюти</h3>
                                <span className="post">Описание мелкое</span>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
    );
        return(
            <div className='container'>
                {projects}
            </div>
        )
}
export default ProjectsBlock;