import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css'

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  

  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user.picture} alt={user.name} />
        <h2>Welcome, {user.name}!</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
