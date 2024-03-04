import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import Register from '@/Components/register';
import authOptions from '@/ServerUtils/authOptions';

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('dashboard');
  }

  return <Register />;
};

export default RegisterPage;
