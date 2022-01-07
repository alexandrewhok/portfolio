import React from 'react';

const CardProject = ({number, image, title}) => {

    
    return(
        <div className="cardproject ">
            <img src={image} className="cardproject-img" alt="Project-banner" />
            <div className="cardproject-body">
                <div className="cardproject-body-name big-text-banner">{title}</div>
                <div className="cardproject-body-number text-banner">{number}</div>
            </div>
        </div>
    );
};

export default CardProject;