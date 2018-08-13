import React from 'react';
import classes from '../BuildControl/BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classes.buildControl}>
            <div>{props.label}</div>
            <button className={classes.less} onClick={props.removed} disabled={props.disable}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    );
};

export default buildControl;