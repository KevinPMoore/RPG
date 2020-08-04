import React from 'react';
import './Menu.css';

class Menu extends React.Component {

    render() {
        return(
            <div className='menubuttons'>
                <button>
                    Character Info
                </button>
                <button>
                    Inventory
                </button>
                <button>
                    Interactions
                </button>
            </div>
        )
    }
}

export default Menu;