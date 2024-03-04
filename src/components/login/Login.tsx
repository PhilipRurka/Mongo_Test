'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { UserReq } from '@/Types/user';

import AuthForm from '../authForm';

const Login = () => {
  const [error, setError] = useState<string>();

  const router = useRouter();

  const handleFormSubmit = async ({ email, password }: UserReq) => {
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      console.log({ res });

      if (res?.error) {
        setError('Invalid!!');
      }

      router.replace('dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AuthForm submitButtonText="Login" handleFormSubmit={handleFormSubmit} />
      <span className="mt-6 text-red-600">{error}</span>
    </>
  );
};

export default Login;
