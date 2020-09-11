import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      binnumber: '',
      decnumber: '',
      errormessage: ''
    }
  }

  mySubmitHandler = (event) => {
    event.preventDefault()
    let totalDecimal = 0
    let currentBinNumber = this.state.binnumber
    currentBinNumber = currentBinNumber.toString().split('').reverse()

    if (currentBinNumber[0] === '0') {
      totalDecimal += 0
    } 
    if (currentBinNumber[0] === '1') {
      totalDecimal += 1
    } 

    if (currentBinNumber[1] === '0') {
      totalDecimal += 0
    } 
    if (currentBinNumber[1] === '1') {
      totalDecimal += 2
    } 

    if (currentBinNumber[2] === '0') {
      totalDecimal += 0
    } 
    if (currentBinNumber[2] === '1') {
      totalDecimal += 4
    } 

    if (currentBinNumber[3] === '0') {
      totalDecimal += 0
    } 
    if (currentBinNumber[3] === '1') {
      totalDecimal += 8
    } 

    if (currentBinNumber[4] === '0') {
      totalDecimal += 0
    } 
    if (currentBinNumber[4] === '1') {
      totalDecimal += 16
    } 

    if (currentBinNumber[5] === '0') {
      totalDecimal += 0
    } 
    if (currentBinNumber[5] === '1') {
      totalDecimal += 32
    } 

    if (currentBinNumber[6] === '0') {
      totalDecimal += 0
    } 
    if (currentBinNumber[6] === '1') {
      totalDecimal += 64
    } 

    if (currentBinNumber[7] === '0') {
      totalDecimal += 0
    } 
    if (currentBinNumber[7] === '1') {
      totalDecimal += 128
    } 

    this.setState({decnumber: totalDecimal})
    
  }

  myChangeHandler = (event) => {

    this.setState({binnumber: event.target.value})

  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Binary To Decimal Converter</h1>
        <p>Enter Binary Number:</p>

        <form onSubmit={this.mySubmitHandler} >
        <input 
          type="text"
          maxLength="8"
          onChange={this.myChangeHandler} /><br />
        <button style={{margin: "20px", cursor: "pointer"}}>Convert</button>
        </form>
        
        <p>Decimal Number:</p>
        <p>{this.state.decnumber}</p>
        {this.state.errormessage}
      </div>
    );
  }
  
}

export default App;
