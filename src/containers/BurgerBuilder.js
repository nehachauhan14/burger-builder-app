import React , {Component} from 'react';
import Auxi from '../hoc/Auxi';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad   : 0.5, 
    bacon   : 0.4, 
    cheeze  : 1.3, 
    meat    : 0.7
}

class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad   : 0, 
            bacon   : 0, 
            cheeze  : 0, 
            meat    : 0
        } , 
        totalPrice : 4
    };


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type] ; 
        const updatedCount = oldCount + 1 ; 
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount ; 
        const newPrice = INGREDIENT_PRICE[type] + this.state.totalPrice;
        this.setState({
            totalPrice : newPrice , 
            ingredients : updatedIngredients
        });

        console.log(`current state is ${{...this.state.ingredients}}`);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
            return;
        const updatedCount = oldCount > 0 ? oldCount -1  : oldCount ;
        const updatedIngredients = {
            ...this.state.ingredients
        } ;
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

        this.setState({
            ingredients:updatedIngredients ,
            totalPrice : newPrice
        });
    }


    render(){

        let disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0 ;
        }

        return(
        <Auxi>
            <Burger ingredients={this.state.ingredients}  />
            <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}></BuildControls>    
        </Auxi>
    );
  }
}

export default BurgerBuilder ;