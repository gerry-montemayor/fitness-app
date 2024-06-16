import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import "../index.css"
import { useLogout } from '../hooks/useLogout'


const Profile = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }



  return (
    <div className="profile-container">
      <div className="profile">
        {user && (
          <div className="logged-in">
            <span>{user.username}</span>
            <button className="logout-btn" onClick={handleClick}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
