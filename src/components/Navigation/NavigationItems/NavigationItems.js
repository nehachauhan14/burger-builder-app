import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem href="/" active>
            Burger Builder
        </NavigationItem>
        <NavigationItem 
            href="/" >Check out
        </NavigationItem>
    </ul>
);

export default navigationItems;