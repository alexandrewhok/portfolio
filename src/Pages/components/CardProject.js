import React from 'react';

const CardProject = ({number, image, title, src}) => {
    return(
        <div className="cardproject ">
            <div className="cardproject-body">
                <div className="cardproject-body-number big-text-banner">{number}</div>
                <img src={image} className="cardproject-body-img" alt="Project-banner" />
                <div className="cardproject-body-name big-text-banner">{title}</div>
            </div>
        </div>
    );
};

export default CardProject;