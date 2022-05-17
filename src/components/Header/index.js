import React from 'react';
import './styles.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png' alt='Netflix'/>
                </a>
            </div>
            <div className="header--user">
                <img src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt='Usuario' />
            </div>
         </header>
    )
}
//https://cdn.icon-icons.com/icons2/2619/PNG/256/among_us_netflix_icon_156927.png