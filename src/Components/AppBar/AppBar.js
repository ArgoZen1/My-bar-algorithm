import React from 'react';
import './AppBar.sass'
const AppBar = (props) => {
    return (
        <div className='AppBar'>
            <h1>Mon Bar</h1>
            <input placeholder='Recherche...' onChange={(e) => {
                props.filter(e.target.value)
            }}

            />
        </div>
    );
};

export default AppBar;