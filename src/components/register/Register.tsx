'use client';

import { useRouter } from 'next/navigation';

import AuthForm from '@/Components/authForm';
import registerFetcher from '@/Fetchers/user/registerFetcher';
import { UserReq } from '@/Types/user';

const Register = () => {
  const router = useRouter();

  const handleFormSubmit = async (values: UserReq) => {
    const res = await registerFetcher(values);
    if (res.ok) {
      router.replace('/');
    }
  };

  return <AuthForm submitButtonText="Register" handleFormSubmit={handleFormSubmit} />;
};

export default Register;
