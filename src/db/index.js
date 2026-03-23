import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // explain the prev line: we are connecting to the MongoDB server using the mongoose.connect() method, which returns a connection instance object that contains information about the connection, such as the host name, port number, etc.
    // we are using the MONGODB_URI environment variable to get the URI of the MongoDB server, and we are also using the DB_NAME constant to specify the name of the database that we want to connect to.
    // what is process.env.MONGODB_URI ? it is an environment variable that we can set in our system or in a .env file to store the URI of the MongoDB server, which can be useful for security reasons to avoid hardcoding sensitive information in our code.
    console.log(
      `Connected to MongoDB !! DB Name: ${connectionInstance.connection.host}`
    );
    // explain the prev line: we are logging the host name of the MongoDB server that we are connected to, which is obtained from the connection instance object returned by the mongoose.connect() method. This can be useful for debugging purposes to confirm that we are connected to the correct MongoDB server.
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
    // what is process.exit(1) ? it is a method that is used to exit the process with a specific code, in this case 1 means that there was an error, and 0 means that the process exited successfully.
  }
};
export default connectDB;
// explain the prev line: we are exporting the connectDB function as the default export of this module, which can be imported in other files to establish a connection to the MongoDB server when needed.
// in the future, if we want to use the connection in other files, we can simply import the connectDB function and call it to establish the connection before performing any database operations.
// what is the advantage of using it as default export ? it allows us to import the function without using curly braces, which can make the code cleaner and easier to read when we only have one export in the module.
// is there any other method to export the function ? yes, we can also use named exports by exporting the function with a specific name and then importing it using that name in other files. For example, we could export the function as `export const connectDB = async () => { ... }` and then import it using `import { connectDB } from "./db/index.js"`.
