import dotenv from "dotenv/config";
// we can use the above code to load the environment variables from the .env file, so that we can access the MONGO_URI variable in our code. This is a good practice to keep our sensitive information like database credentials in a separate file and not hardcode it in our codebase.
import connectDB from "./db/index.js";

// explain the prev code: we are importing the dotenv package and calling the config() method to load the environment variables from the .env file. We are also specifying the path to the .env file using the path option, which allows us to keep our environment variables in a separate file and avoid hardcoding them in our codebase. This way, we can easily manage our environment variables and keep our sensitive information secure.
import { app } from "./app.js";
// explain the prev code: we are importing the app object from the app.js file, which is an instance of the Express application that we have set up with all the necessary middleware and configurations. We will use this app object to start our server and handle incoming requests to our application.
// why we are using ./app.js ? we are using ./app.js because it is a relative path to the app.js file, which is in the same directory as the index.js file. The dot (.) represents the current directory, so by using ./app.js, we are telling Node.js to look for the app.js file in the same directory as the index.js file. If we were to use ../app.js, it would mean that we want to go back one level in the directory structure and look for the app.js file there, which is not what we want in this case since both files are in the same directory.
// why there is one dot when we use double dot use it means we are going back one level in the directory structure, so if we are in the src folder and we want to access the db folder, we can use ../db/index.js to go back one level and then access the db folder. In this case, since we are in the src folder and the db folder is also in the src folder, we can simply use ./db/index.js to access the db folder without going back any levels.

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app is listening to the port: ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
// explain the prev code: we are calling the connectDB function, which returns a promise, and we are using the .then() method to start the server only after the connection to the MongoDB server is established successfully. If there is an error while connecting to the MongoDB server, we are catching that error in the .catch() method and logging it to the console. This way, we can ensure that our application only starts if the database connection is successful, and we can handle any connection errors gracefully without crashing the application.
// we are calling the connectDB function to establish a connection to the MongoDB server when the application starts. This way, we can ensure that the connection is established before we perform any database operations in our application.
// if we want to use the connection in other files, we can simply import the connectDB function and call it to establish the connection before performing any database operations in those files. This way, we can maintain a single connection to the MongoDB server throughout our application and avoid creating multiple connections that can lead to performance issues.

// this approach is good but it will not work if we want to use the connection in other files, so we can create a separate file for the connection and export the connection object, and then import it in other files where we need to use the connection.
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// })();
// how can i install nodemon ? you can install nodemon globally using the command `npm install -g nodemon`, or you can install it as a dev dependency in your project using the command `npm install --save-dev nodemon`. After installing nodemon, you can use it to run your application by replacing the `node` command with `nodemon` in your start script in the package.json file. For example, if your start script is currently `"start": "node index.js"`, you can change it to `"start": "nodemon index.js"` to use nodemon for running your application.
// what is dev dependency ? a dev dependency is a package that is only needed during the development phase of your application, and it is not required for the production environment. These packages are typically used for tasks such as testing, linting, or running a development server. By installing nodemon as a dev dependency, you can ensure that it is only included in your development environment and not in your production build, which can help reduce the size of your production bundle and improve performance.
//
