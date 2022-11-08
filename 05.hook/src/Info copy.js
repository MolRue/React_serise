import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다');
  //     console.log({ name, nickname });
  //   });

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다');
  //     console.log({ name, nickname });
  //   }, []);

  // 특정값이 변경 될대만 호출
  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다');
  //     console.log({ name, nickname });
  //   }, [name]);

  useEffect(() => {
    console.log('effect');
    console.log({ name });

    // 뒷정리 함수 : 컴포넌트가 업데이트 되기 전에 실행
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);

  // name를 변경시킴
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // nickname을 변경시킴
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
