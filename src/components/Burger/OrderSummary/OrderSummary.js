import React from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredeintSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>
                <span style={{textTransform : 'capitalize'}}>{igKey}</span>  : {props.ingredients[igKey]}
                </li>;
    })

    return(
        <Auxi>
            <h3> Your Order </h3>
            <p>A delicious burger with the following ingredients : </p>
            <h4>Total Cost : $ {props.totalprice.toFixed(2)}</h4>
            <ul>
                {ingredeintSummary}
            </ul>
            <p> Continue to checkout ? </p> 
            <Button
                btnType={"Danger"}
                clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button
                btnType={"Success"}
                clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxi>
    );
};

export default orderSummary;