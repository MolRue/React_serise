import { useParams } from 'react-router-dom';

const data = {
  mycol: {
    name: '마이콜',
    descrption: '가수',
  },
  gildong: {
    name: '고길동',
    descrption: '소드마스터',
  },
};

const Profile = () => {
  const Params = useParams;
  const profile = nata[Params.username];

  return (
    <div>
      <h1>프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.descrption}</p>
        </div>
      ) : (
        <p> 존재하지 않는 프로필 입니다호이 </p>
      )}
    </div>
  );
};

export default Profile;
