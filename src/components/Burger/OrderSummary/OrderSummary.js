import React , {Component} from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../../UI/Button/Button';


class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }

    render() {
        const ingredeintSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>
                    <span style={{textTransform : 'capitalize'}}>{igKey}</span>  : {this.props.ingredients[igKey]}
                    </li>;
        })
    
        return(
            <Auxi>
                <h3> Your Order </h3>
                <p>A delicious burger with the following ingredients : </p>
                <h4>Total Cost : $ {this.props.totalprice.toFixed(2)}</h4>
                <ul>
                    {ingredeintSummary}
                </ul>
                <p> Continue to checkout ? </p> 
                <Button
                    btnType={"Danger"}
                    clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button
                    btnType={"Success"}
                    clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxi>
        );
    }
}

export default OrderSummary;