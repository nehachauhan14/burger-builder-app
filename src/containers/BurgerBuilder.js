import React , {Component} from 'react';
import Auxi from '../hoc/Auxi';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import Loader from '../UI/Loader/Loader';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import axios from '../../src/axios-orders';

const INGREDIENT_PRICE = {
    salad   : 0.5, 
    bacon   : 0.4, 
    cheeze  : 1.3, 
    meat    : 0.7
}

class BurgerBuilder extends Component{

    state = {
        ingredients : null, 
        totalPrice : 4,
        purchasable : false,
        purchasing : false,
        loading : false
    };

    componentDidMount(){
        axios.get('/ingredients.json')
            .then(response => {
                console.log(`ingredient recieved :  ${response.data}`);
                this.setState({ingredients : response.data})
            }).catch(error => console.log('Error occured'))
    }


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
        this.updatePurchasable(updatedIngredients);
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
        this.updatePurchasable(updatedIngredients);
    }

    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey =>{
            return ingredients[igKey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);

        this.setState({purchasable : sum > 0 })
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }

    purchaseContineHandler = ()  => {

        this.setState({loading: true});
        const order = {
            ingredient : this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name: 'Neha Chauhan',
                address:{
                    street: 'Teststreet 1',
                    zipcode : '110086',
                    country:'India'
                },
                email : 'nehachauhan79@gmail.com'
            },
            deliveryMethod : 'Fastest'
        }

        axios.post('/Orders.json' , order)
            .then( response => {
                console.log(response);
                this.setState({loading: false , purchasing : false});
            })
            .catch( error => {
                console.log(error)
                this.setState({loading: false , purchasing : false});
            })
    }

    render(){
        let disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0 ;
        }
        
        let orderSummary = null ; 
        let burger = <Loader />;
        
        if(this.state.ingredients){
            burger =  (
                <Auxi>
                <Burger ingredients={this.state.ingredients}  />
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}>
                </BuildControls>
                </Auxi>);
                
            orderSummary = (<OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCanceled ={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContineHandler}
                totalprice = {this.state.totalPrice}>
            </OrderSummary>);

            if(this.state.loading){
                orderSummary = <Loader />;
            }
        }

        return(
        <Auxi>
            <Modal 
                show={this.state.purchasing}
                modelClosed={this.purchaseCancelHandler}>
                {orderSummary} 
            </Modal>
              {burger}  
        </Auxi>
    );
  }
}

export default BurgerBuilder ;