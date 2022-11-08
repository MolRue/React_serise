import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const [searchParams, setSerchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 싫어 ㅠㅠㅠ</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <p>쿼리스트링: {location.search} </p>
    </div>
  );
};

export default About;
