import React , {Component} from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    
    return (
        <div className={classes.SideDrawer}>
            <Logo/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;