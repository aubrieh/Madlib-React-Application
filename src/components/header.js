import React from 'react';

const Header = () => {
    return (
        <div className='header'>
        <div className="header__skew"></div>
        <div className="header__border"></div>
            <h1>{'Bottega Madlibs'}</h1>
            <p>{'Fill out the fields below to generate the Mad Libs Story'}</p>
        </div>
    )
}

export default Header;