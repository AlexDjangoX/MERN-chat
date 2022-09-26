import mongoose from 'mongoose';
import colors from 'colors';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB hot: ${conn.connection.host}`.cyan.underline.italic);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit;
  }
};
