// import LifeCycleSample from './LifeCycleSample';

// function App() {
//   return <LifeCycleSample />;
// }

// export default App;

import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

const state = {
  color: '#000000', // black
};

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

handleClick = () => {
  this.setState({ color: getRandomColor() });
};
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
