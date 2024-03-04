import bcrypt from 'bcrypt';

import UserModel from '@/Models/user';
import mongoConnect from '@/ServerUtils/mongoConnect';
import { UserReq } from '@/Types/user';

type RegisterPostReturn = Promise<[{ data: { message: string } }, { status: number }]>;

type CatchError = {
  message: string;
};

const register = async (reqData: UserReq): RegisterPostReturn => {
  try {
    const { email, password } = reqData;

    await mongoConnect();

    const user = await UserModel.findOne({ email }).select('_id');
    if (user) {
      return [{ data: { message: 'Email is already being used' } }, { status: 401 }];
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);

    await UserModel.create({ email, password: hashedPassword });

    return [{ data: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default register;
