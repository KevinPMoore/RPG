import React, {Component} from 'react';
import FocusImage from '../FocusImage/FocusImage';
import FocusText from '../FocusText/FocusText';
import Menu from '../Menu/Menu';
import './GameScreen.css';

class GameScreen extends React.Component {
 state = {

 }

 render() {
     return(
         <main>
            <section className='focus'>
                <FocusImage/>
                <FocusText/>
            </section>
            <section className='menubar'>
                <Menu/>
            </section>
            <section className='menudisplay'>

            </section>
         </main>
     )
 }
}

export default GameScreen;