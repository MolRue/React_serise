import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>리액트 싫어 ㅠㅠㅠ</p>
      <Link to="/about">개?소?</Link>
    </div>
  );
};

export default Home;
