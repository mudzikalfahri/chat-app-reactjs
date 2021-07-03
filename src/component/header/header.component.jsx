import React from 'react';
import './header.styles.scss';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';

function Header() {
    return (
        <div className='header'>
            <PublicRoundedIcon/>
            <div className="title">
                World Chat
            </div> 
            
        </div>
    )
}

export default Header
