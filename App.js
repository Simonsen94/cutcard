import React, { Component } from 'react';
import Cuts from './cuts';
import AddCut from './AddForm';

class App extends Component {
  state = {
    cuts: [
      {id: 1, content: '1 klip tilbage'},
      {id: 2, content: '2 klip tilbage'},
      {id: 3, content: '3 klip tilbage'},
      {id: 4, content: '4 klip tilbage'},
      {id: 5, content: '5 klip tilbage'},
      {id: 6, content: '6 klip tilbage'},
      {id: 7, content: '7 klip tilbage'},
      {id: 8, content: '8 klip tilbage'},
      {id: 9, content: '9 klip tilbage'},
      {id: 10, content: '10 klip tilbage'}
    ]
  }

  deleteCut = (id) => {
    const cuts = this.state.cuts.filter(cut => {
      return cut.id !== id 
    });
    this.setState({
      cuts
    })
  }
  addCut = (cut) => {
    cut.id = Math.random();
    let cuts = [...this.state.cuts, cut];
    this.setState({
      cuts
    })
  }
  render() {
    return (
      <div className="cutcard-app container">
      <h1 className="center blue-text">Klippekort</h1>
      <Cuts cuts={ this.state.cuts } deleteCut={this.deleteCut} />
      <AddCut addCut={ this.addCut }/>
      </div>
    );
  }
}

export default App;