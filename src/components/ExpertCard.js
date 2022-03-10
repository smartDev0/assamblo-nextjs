import React from 'react';
const ExpertCard = ({ name, img, description, text, exe, t }) => {
    return (
        <div className="expert__card">
            <picture>
                <img
                    className="expert__img"
                    src={`/img/verticals/${img}.${exe}`}
                    alt={name}
                    title={name}
                />
            </picture>
            <div>
                <p className="expert__text">
                    <strong>
                        {text}
                    </strong>
                </p>
                <p className="expert__description">
                    {description}
                </p>
            </div>
        </div>
    );
};


export default ExpertCard;
