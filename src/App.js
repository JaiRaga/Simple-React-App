import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'fbef', name: 'Raga', age: 24},
      {id: 'efw', name: 'Max', age: 29},
      {id: 'rbrb',name: 'Manu', age: 27}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Clicked!')
    this.setState({
      persons: [
        {name: newName, age: 24},
        {name: 'Max', age: 29},
        {name:  'Manu', age: 27}
      ]
    })
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersons = () => {
    let doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              age = {person.age}
              key= {person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      style.backgroundColor = '#00CED1'
    }


    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
          style = {style} 
          onClick = {this.togglePersons}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work' ))
  }
}

export default App;
