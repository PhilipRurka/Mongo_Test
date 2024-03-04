'use client';

import { signOut } from 'next-auth/react'

const Header = () => {
  const handleLogout = () => {
    signOut()
  };

  return (
    <button className="border border-blue-500" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Header;
