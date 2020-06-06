import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

class Landing extends React.Component {

    render() {
        return(
            <div>
                <p>
                    Here is some text that will introduce the plot
                </p>
                <Link
                    to={'/characterselect'}
                >
                    <button>
                        Choose your character
                    </button>
                </Link>
            </div>
        )
    }
}

export default Landing;