import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component {

    state={
        showSideDrawer : false   
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer : false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer : true});
    }

    drawerToggleClicked = () => {
        this.setState((prevState) => {
           return {showSideDrawer : !prevState.showSideDrawer};
        });
    }
    render() {
        return(
            <Auxi>
                <Toolbar
                    clicked={this.drawerToggleClicked} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                 />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxi>
        );
    }
}

export default layout;