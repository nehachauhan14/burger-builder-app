import React from 'react';
import Auxi from '../../hoc/Auxi';
import Classes from './Layout.css';

const layout = (props) => {
        return(
            <Auxi>
                <div> Toolbox , Sidedrawer, Backdrop </div>
                 <main className="content"> 
                    {props.children}
                </main>
            </Auxi>
        );
}

export default layout ;

