'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
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
    <div className="w-full space-y-8 rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 sm:p-8 lg:max-w-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sign in</h2>
      <AuthForm submitButtonText="Login" handleFormSubmit={handleFormSubmit} />
      <span className="text-sm font-medium text-gray-900 dark:text-white">
        Not registered yet?{' '}
        <Link className="inline text-blue-600 hover:underline dark:text-blue-500" href="/register">
          Create account
        </Link>
      </span>
      <span className="mt-6 text-red-600">{error}</span>
    </div>
  );
};

export default Login;
