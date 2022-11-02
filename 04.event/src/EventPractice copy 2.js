import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    mgeeage: '',
    username: '',
  };

  // 화살표 함수 형태로 바꾼 이벤트!
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.message + ':' + this.state.username);
    this.setState({
      message: '',
      username: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeypress={this.handleKeyPress}
        ></input>

        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
