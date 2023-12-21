import React from 'react'
import { auth, provider } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  };

  return (
    <div>
      <p>ログアウトして始める</p>
      <button onClick={logout}>Googleでログアウト</button>
    </div>
  )
}

export default Logout