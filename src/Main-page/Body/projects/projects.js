import React from 'react';

import './projects.style.css'
function ProjectsBlock(props) {

    const projects = (
            <div className='row'>
                {props.projects.map((project)=>
                    <div className='col m4 s6' key={project.id}>
                        <div className="our-team">
                            <div className="team-image">
                                <img src={project.img} />
                                <p className="description">
                                    Задний текст
                                </p>
                                <ul className="social">
                                    <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info">
                                <h3 className="title">{project.name}</h3>
                                <span className="post">{project.city}</span>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
    );
        return(
            <div className='container'>
                <h1>Реализованные проекты</h1>
                {projects}
            </div>
        )
}
export default ProjectsBlock;