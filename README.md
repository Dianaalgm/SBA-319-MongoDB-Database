Project Name: SBA 319 Mongo Database

Description:
This project sets up a Node.js Express server with routes for managing notes, comments, and users. 
It utilizes a MongoDB database and the dotenv library for environment configuration.
Installed dependencies using `npm install`.
Created a `.env` file in the root directory.

 Dependencies:
- express
- dotenv
- mongoose
- cors

File Structure
- `server.js`: Main entry point of the application.
- `config/connectToDb.js`: Connects to the MongoDB database.
- `models/`: Directory containing Mongoose models for notes, comments, and users.
- `controllers/`: Directory containing route handlers for notes, comments, and users.

(attempted) Used Postman to create collections for users, comments, and notes with sample data.
