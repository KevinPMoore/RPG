import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterSelect.css';

//get an update character passed from app
export default class CharacterSelect extends React.Component {
    state = {
        firstChar: 'small',
        secondChar: 'small',
        thirdChar: 'small',
        modal: 'hidden-confirm',
        selected: null
    }

    updateFirstChar = () => {
        this.setState({
            firstChar: 'expand',
            secondChar: 'small',
            thirdChar: 'small',
            selected: 'firstChar'
        })
    }

    updateSecondChar = () => {
        this.setState({
            firstChar: 'small',
            secondChar: 'expand',
            thirdChar: 'small',
            selected: 'secondChar'
        })
    }

    updateThirdChar = () => {
        this.setState({
            firstChar: 'small',
            secondChar: 'small',
            thirdChar: 'expand',
            selected: 'thirdChar'
        })
    }

    updateModal = () => {
        if(this.state.modal === 'hidden-confirm') {
            this.setState({
                modal: 'shown-confirm'
            })
        } else {
            this.setState({
                modal: 'hidden-confirm'
            })
        }
    }

    renderCharacterInfo = () => {
        if(this.state.firstChar === 'expand') {
            return(
                <p>
                    Some info about the first character
                </p>
            )
        } else if(this.state.secondChar === 'expand') {
            return(
                <p>
                    Some info about the second character
                </p>
            )
        } else if(this.state.thirdChar === 'expand') {
            return(
                <p>
                    Some info about the third character
                </p>
            )
        }
    }

    renderCharacterModal = () => {
        return(
            <div className={this.state.modal}>

            </div>
        )
    }

    handleConfirmChracter = () => {
        
    }

    render() {
        const selected = this.state.selected
        return(
            <div className='choosecharacter'>
                <div className='portraits'>
                    <div 
                        className={[this.state.firstChar, 'onechange'].join(' ')}
                        onClick={this.updateFirstChar}
                    >
                        1
                    </div>
                    <div 
                        className={[this.state.secondChar, 'twochange'].join(' ')}
                        onClick={this.updateSecondChar}
                    >
                        2
                    </div>
                    <div 
                        className={[this.state.thirdChar, 'threechange'].join(' ')}
                        onClick={this.updateThirdChar}
                    >
                        3
                    </div>
                </div>
                <div className='bio'>
                    {this.renderCharacterInfo()}
                </div>
                <button
                    onClick={this.updateModal}
                >
                    Confirm character
                </button>
                <div className={this.state.modal}>
                    <div className='modalcontent'>
                        <p>
                            Proceed as {selected}?
                        </p>
                        <Link
                            to={'/gamescreen'}
                        >
                            <button
                                className='modalbutton'
                                onClick={() => this.props.updateCharacter(selected)}
                            >
                                Confirm
                            </button>
                        </Link>
                        <button
                            className='modalbutton'
                            onClick={this.updateModal}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};