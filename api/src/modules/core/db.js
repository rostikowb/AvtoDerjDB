import mongoose from 'mongoose';
export default () => {
    mongoose.set('useUnifiedTopology', true);
    mongoose.set('useCreateIndex', true);
    mongoose.connect(
        `mongodb://${process.env.MONGO_HOST}`,
        // `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}`,
        //     error =>{
        //     if (error)  throw error
        // },
        { useCreateIndex: true, useNewUrlParser: true },

    );

    mongoose.connection.on('error', () => {
        throw new Error('Unable to connect to database');
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection disconnected');
    });
};
