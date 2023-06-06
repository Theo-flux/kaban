import mongoose, { ConnectOptions } from 'mongoose';

const connectMongo = async () => {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  } as ConnectOptions);

  return mongoose.connection.useDb('boards');
};

export default connectMongo;
