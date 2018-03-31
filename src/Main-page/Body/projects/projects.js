import React, { Component } from 'react';
import img from './img/artbeauty.png'
import './projects.style.css'
class Projects extends Component {
    render(){
        return(
            <div className='container'>
                <div className='row'>
            <div className='col m4 s6'>
                <div className="our-team">
                <div className="team-image">
                    <img src={img} />
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
                    <h3 className="title">Артбьюти</h3>
                    <span className="post">Описание мелкое</span>
                </div>
            </div>
            </div>
                </div>
            </div>
        )
    }
}
export default Projects;