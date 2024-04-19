import { green, red } from '../utils/colorCodedLogs.js'

export const up = async (db) => {
  const User = db.collection('users');

  try {
    await User.createIndex({ email: 1 }, { unique: true });
    console.log(green, `001-initia-user-schema --> Migration successful`);
  } catch (error) {
    console.error(red, `001-initia-user-schema --> Migration failed`);
    throw error;
  }
};