import React from 'react';

import './Header.css';
import family from './family.jpg';

const headerInfo = (props) => {
    return(
        <div className="HeaderStyle">
            <img src={family} className="heroImage" alt="family at sunset"/>
            <h1 className="pageName"> Family Readiness Group</h1>
          
        </div>
    )
}

export default headerInfo;