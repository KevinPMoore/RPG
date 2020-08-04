import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterSelect.css';

export default class CharacterSelect extends React.Component {
    state = {
        portrait: null,
        modal: 'hidden-confirm',
        selected: null,
        questions: [{text: 'Are you cool?', option1: 'Yes', option1value: 'Cool', option2: 'No', option2value: 'Lame'}, {text: 'Are you sneaky?', option1: 'Yellow', option1value: 'Sweet', option2: 'Brown', option2value: 'Sour'}],
        index: 0,
        name: '',
        formName: '',
        questionStatus: 'unfinished',
        portraitStatus: 'unfinished',
        nameStatus: 'unfinished'
    };

    updateName = (ev) => {
      this.setState({
          name: ev.target.value
      });
    };

    updateModal = () => {
        if(this.state.modal === 'hidden-confirm') {
            this.setState({
                modal: 'shown-confirm'
            })
        } else {
            this.setState({
                modal: 'hidden-confirm'
            });
        };
    };

    handleConfirmChracter = () => {
        let character = {
            name: this.state.name,
            portrait: this.state.portrait
        };

        this.props.updateCharacter(character);
    };

    renderQuestions = (index) => {
        let question = this.state.questions[index];
        if(question === undefined) {
            this.setState({
                questionStatus: 'finished'
            });
            return(
                <p>
                    All done
                </p>
            );
        }else {
            return(
                <div
                    className='questions'
                >
                    <p
                        className='question-text'
                    >
                        {question.text}
                    </p>
                    <button
                        className='question-button'
                        onClick={this.handleAdvanceQuestion}
                    >
                        {question.option1}
                    </button>
                    <button
                        className='question-button'
                        onClick={this.handleAdvanceQuestion}
                    >
                        {question.option2}
                    </button>
                </div>
            );
        };
    };

    handleAdvanceQuestion = () => {
        if(this.state.index < this.state.questions.length - 1) {
            this.setState({
                index: this.state.index + 1
            }); 
            this.renderQuestions(this.state.index);
        } else {
            this.renderQuestions(undefined);
        };
    };

    renderPortraits = () => {
        return(
            <div 
                className='portraits'
            >
                <div
                    className='portrait'
                >
                    One
                </div>
                <div
                    className='portrait'
                >
                    Two
                </div>
            </div>
        );
    };

    handleSelectPortrait = () => {

    };

    renderModal = () => {
        if(this.state.nameStatus === 'unfinished') {
            return(
                <div
                    className={this.state.modal}
                >
                    <div
                        className='modal-content'
                    >
                        <form
                            className='name-form'
                            onSubmit={this.handleEnterName}
                        >
                            <label
                                className='name-form-label'
                                htmlFor='character-name'
                            >
                                What is your name?
                            </label>
                            <input
                                className='character-name'
                                id='character-name'
                                type='text'
                            >
                            </input>
                        </form>
                    </div>
                </div>
            );
        } else {
            return(
                <div className={this.state.modal}>
                    <div
                        className='modal-content'
                    >
                        <p>
                            Proceed as {this.state.name}?
                        </p>
                        <Link
                            to={'/gamescreen'}
                        >
                            <button
                                className='modal-button'
                                onClick={() => this.handleConfirmChracter()}
                            >
                                Confirm
                            </button>
                        </Link>
                        <button
                            className='modal-button'
                            onClick={this.updateModal}
                        >
                            Cancel
                        </button>
                    </div>
            </div>
            )
        }
    };

    handleEnterName = (ev) => {
        ev.preventDefault();
        this.setState({
            name: this.state.formName,
            formName: ''
        });
    };

    render() {
        return(
            <section 
                className='character-select'
            >
                {this.state.questionStatus === 'unfinished' ? this.renderQuestions(this.state.index) : this.renderPortraits()}
                <button
                    onClick={this.updateModal}
                >
                    Confirm character
                </button>
                {this.renderModal()}
            </section>
        );
    };
};