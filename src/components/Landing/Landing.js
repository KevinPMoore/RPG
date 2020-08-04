import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends React.Component {

    render() {
        return(
            <section
                className='landing'
            >
                <div
                    className='logo'
                >
                    Logo placeholder
                </div>
                <div
                    className='credits'
                >
                    Credits placeholder
                </div>
                <div
                    className='landing-buttons'
                >
                    <Link
                        to={'/characterselect'}
                    >
                        <button
                            className='new-game-button'
                        >
                            New Game
                        </button>
                    </Link>
                    <Link
                        to={'/rabitstavern'}
                    >
                        <button
                            className='continue-button'
                        >
                            Continue
                        </button>
                    </Link>
                </div>
            </section>
        );
    };
};