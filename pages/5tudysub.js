import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import s5tudyCSS from '../public/styles/s5tudy.module.css'
import axios from 'axios';




function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'https://raw.githubusercontent.com/JS3322/project_homepage/main/public/data/studylist'
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>; 
  if (error) return <div>에러가 발생했습니다</div>;

	// 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!users) return null;

	// 드디어 users가 성공적으로 받아와 진 상태입니다.


  return (
    <div className={s5tudyCSS.containerCheck}>
    {!users && <h4>Loading...</h4>}
    {users?.map((user) => (
      <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
    ))}
  </div>
  );

}

export default Users;



