import React from 'react';

const CardProject = ({number, image, title}) => {
    return(
        <div className="cardproject ">
            <div className="cardproject-body">
                <div className="cardproject-number big-text">{number}</div>
                <img src={image} className="cardproject-img" alt="Project-banner" />
                <div className="card-award-date big-text">{title}</div>
            </div>
        </div>
    );
};

export default CardProject;