const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./.env" });

process.on("uncaughtException", error => {
  console.log("unhandledRejection shutting down the application");
  console.log(error.name, error.message);
  process.exit(1);
});

// For development, start server without MongoDB connection
console.log("Starting server in development mode...");
console.log(process.env.NODE_ENV);

// Start server without database for development
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`You are listening to the port ${port} (development mode)`);
});

process.on("unhandledRejection", err => {
  console.log("UnhandleRejection Shutting down the application");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
