import * as mongoose from 'mongoose';
let gracefulShutdown;
const dbURI = 'mongodb://localhost/inventory_network_prototype';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected');
});

gracefulShutdown = (msg: string, callback: () => void) => {
    mongoose.connection.close(() => {
        console.log(`mongoose disconnected through ${msg}`);
        callback();
    });
};

// for app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
