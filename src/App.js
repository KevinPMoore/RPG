import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import CharacterSelect from './components/CharacterSelect/CharacterSelect'
import GameScreen from './components/Tavern/Tavern';
import './App.css';

//make an updatecharacter and pass to characterselect
class App extends React.Component {
  state = {
    character: null,

  }

  updateCharacter = (value) => {
    this.setState({
      character: value
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path={'/'}
            component={Landing}
          />

          <Route
            exact
            path={'/characterselect'}
            render={(props) => <CharacterSelect {...props} updateCharacter={this.updateCharacter}/>}
          />

          <Route
            exact
            path={'/gamescreen'}
            render={(props) => <GameScreen {...props} character={this.state.character}/>}
          />
        </Switch>
      </div>
    )
  }
}

export default App;