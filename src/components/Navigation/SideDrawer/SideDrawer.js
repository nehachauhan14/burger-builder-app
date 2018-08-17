import React , {Component} from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import BackDrawer from '../../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';

const sideDrawer = (props) => {
    let attachedClasses= [classes.SideDrawer , classes.Close].join(' ');
    if(props.open){
        attachedClasses= [classes.SideDrawer , classes.Open].join(' ');
    }


    return (
        <Auxi>
        <BackDrawer
            show = {props.open}
            clicked={props.closed}
        />
        <div className={attachedClasses}>
            <Logo/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </div>
        </Auxi>
    );
};

export default sideDrawer;