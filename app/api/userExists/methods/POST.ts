import UserModel from '@/Models/user';
import mongoConnect from '@/ServerUtils/mongoConnect';
import { UserReq } from '@/Types/user';

type UserExistsPostReturn = Promise<[{ data: { message: string } }, { status: number }]>;

type CatchError = {
  message: string;
};

const userExists = async (reqData: UserReq): UserExistsPostReturn => {
  try {
    const { email } = reqData;

    await mongoConnect();
    const user = await UserModel.findOne({ email }).select('_id');
    console.log(user);

    return [{ data: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default userExists;
