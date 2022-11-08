import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDeriverivStateFormProps(nextProps, prevState) {
    console.log(getDeriverivStateFormProps);
    if (nextProps.color !== prevState) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount..');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps');
    console.log('nextState');

    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.state.color;
    }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (snapShot) {
      console.log('업데이트 되기 전 색상:', snapShot);
      {
        return this.myRef.style.color;
      }
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
