import { green, red } from '../utils/colorCodedLogs.js'

export const up = async (db,) => {
  const User = db.collection('users');
  
  try {
    await User.createIndex({ email: 1 }, { unique: true });
    
    const result = await User.updateMany(
      { isActive: { $exists: false } },
      { $set: { isActive: true } }
    );

    console.log(green, `002-update-user-schema --> Migration successful: ${result.modifiedCount} users updated`);
  } catch (error) {
    console.error(red, '002-update-user-schema --> Migration failed');
    throw error;
  }
}