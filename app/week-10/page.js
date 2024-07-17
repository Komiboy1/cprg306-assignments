'use client';

import Link from 'next/link';
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div>
      {user ? (
        <ul>
          <li>Logged in as {user.email}</li>
          <li><Link href='week-8/shopping-list'>Proceed to shopping list</Link></li>
          <li><button className="p-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-900" onClick={handleLogout}>Logout</button></li>
        </ul>
      ) : (
        <ul>
          <li>Please login to continue.</li>
          <li><button className="p-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-900" onClick={handleLogin}>Login with GitHub</button></li>
        </ul>
      )}
    </div>
  );
};

export default Page;