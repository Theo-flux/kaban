import mongoose, { ConnectOptions } from 'mongoose';

const connectMongo = () => {
  return mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
};

export default connectMongo;
