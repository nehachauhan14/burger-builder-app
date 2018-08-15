import React from 'react';
import Auxi from '../../../hoc/Auxi';

const orderSummary = (props) => {
    const ingredeintSummary = Object.keys(props.ingredients).map(igKey => {
        return <li><span style={{textTransform : 'capitalize'}}>{igKey}</span>  : {props.ingredients[igKey]}</li>;
    })

    return(
        <Auxi>
            <h3> Your Order </h3>
            <p>A delicious burger with the following ingredients : </p>
            <ul>
                {ingredeintSummary}
            </ul>
            <p> Continue to checkout ? </p> 
        </Auxi>
    );
};

export default orderSummary;