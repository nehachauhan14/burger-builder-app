import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import classes from './BuildControls.css';

const Controls = [
    {label : 'Salad' , type: 'salad'},
    {label : 'Cheeze' , type: 'cheeze'},
    {label : 'Meat' , type: 'meat'}
    ,{label : 'Bacon' , type: 'bacon'}];


const buildControls = (props)=> {
    return(
        <div className={classes.BuildControls}>
        <p>Current Price : {props.price} </p>
            {Controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disable = {props.disabled[ctrl.type]} />
            ))}
        </div>
    );

};

export default buildControls;