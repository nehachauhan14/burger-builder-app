import React from 'react';
import classes from './Modal.css';
import Auxi from '../../hoc/Auxi';
import BackDrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return(
        <Auxi>
        <BackDrop 
            show={props.show}
            clicked={props.modelClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? '1' : '0',

            }}>
            {props.children}
        </div>
    </Auxi>
    ); 
    
};

export default modal;