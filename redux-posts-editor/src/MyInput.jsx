import React from 'react';
import classes from './MyInput.module.css';


export function MyInput(props) {
    return (
        <input className={classes.myInput} {...props}/>
    );
};


