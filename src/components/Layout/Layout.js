import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Auxi>
        <Toolbar />
        <SideDrawer />
        <main className={classes.content}>
            {props.children}
        </main>
    </Auxi>
);

export default layout;