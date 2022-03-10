import React from 'react';
import Link from 'next/link';
const VerticalCard = ({name, width, img, link, text, t }) => {
    return (
        <div className="others__card">
            <Link href={link}>
                <picture>
                    <img
                        className="others__img"
                        src={`/img/verticals/${img}.png`}
                        alt={name}
                        width={width}
                    />
                </picture>
            </Link>
            <p className="others__text">
                <Link href={link}>
                    <strong>
                        {text}
                    </strong>
                </Link>
            </p>
        </div>
    );
};


export default VerticalCard;
