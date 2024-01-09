import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {Component} from 'react';
import TestComponent from './components/TestComponent.js';


class App extends Component {

  state = { details : [], }

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000/')
    .then(
      res => { data = res.data;
      this.setState({
        details: data
      })
    })
    .catch(err => {
      console.log(err)
     })
  }

  render() {
    return (
      <div>
        <header>
          Data from Django
        </header>
        <hr></hr>
        <div>
           <TestComponent />
        </div>
      </div>
    )
  }

}
export default App;