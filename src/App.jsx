import React, {Component} from "react";
import Number from './components/Lottery/Number';


class App extends Component {
  state = {
    lottoNumbers: [],
  };

  showNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < 5; ) {
      const number = Math.floor(Math.random() * 32) + 5;

      if (newNumbers.indexOf(number) === -1) {
        newNumbers.push(number);
        i++;
      }
    }

    const sortedNumbers = [...newNumbers];
    sortedNumbers.sort((a, b) => a - b);
    this.setState({ lottoNumbers: sortedNumbers });
  };

  render() {
    return (
      <div className="App">
        <h1>Лоторея</h1>
        {this.state.lottoNumbers.map((number, index) => (
          <Number key={index} number={number}/>
        ))}
        <button type="button" onClick={this.showNumbers}>
          Новые цифры
        </button>
      </div>
    );
  }
}

export default App;


