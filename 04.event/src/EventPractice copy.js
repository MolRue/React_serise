import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    mgeeage: '',
  };
  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  // 화살표 함수 형태로 바꾼 이벤트!
  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick = (e) => {
    alert(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
          //   onChange={(e) => {
          //     // console.log(e.target.value);
          //     // state 변경 함수
          //     this.setState({ message: e.target.value });
          //   }}
        ></input>
        {/* <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button> */}
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
