import React from 'react';

function ServiceBlock(props) {
        const services = (
            <div className='row'>
                {props.services.map((service)=>
                    <div className='col s4' key={service.id}>
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={service.imgUrl}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{service.name}<i className="material-icons right"></i></span>
                                <a className="waves-effect waves-light btn">Заказать</a>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{service.description}<i className="material-icons right">close</i></span>
                                <p>{service.backStage}</p>
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

export default ServiceBlock;