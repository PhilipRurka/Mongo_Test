import { UserReq } from '@/Types/user';

type RegisterProps = UserReq;

const registerFetcher = async (data: RegisterProps) => {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });

  if (response.ok) return response;

  const res = await response.json();
  return res;
};

export default registerFetcher;
