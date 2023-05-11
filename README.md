# Natours

Natours is a full-stack project for an adventure tour booking company.

## Getting Started

To get started with the project, clone the repository to your local machine and install the dependencies:

`git clone https://github.com/saket61195/natours`

`cd natours`

`npm install`

To start the server, run:

`npm start` or `npm run start:dev` for development mode or `npm run start:prod` for production mode

this will start the server on `http://localhost:3000`

The server will listen on port `3000` by default. You can also access the API at `http://localhost:3000/api/v1`.

You can test with some test user-emails stored on the database like: `leo@example.com`, `loulou@example.com` with a password of "test1234", or you can create a new user.

## Features and Functionality

The Natours project includes the following features:

- CRUD operations for tours, reviews, users, and bookings through a handler factory class that supports advanced fetures like: filtering, sorting, pagination, and field limiting
- Using aggregate functions to calculate tour statistics
- Geospatial querying for finding tours within a certain radius of a given location
- User authentication and authorization using JWT tokens
- Password encryption using the bcrypt library
- Password reset functionality using JWT tokens
- Handling of user roles and permissions
- Handling forgetting and resetting user passwords
- Specifying 2 special routes for updating either the current user's data or password
- Sending real emails for new signUps and resetting passwords to users using the SendinBlue(Brevo) API and the Mailtrap service
- Ability to get all reviews and create new reviews for a specific tour (nested routes)
- Ability to make new bookings through Stripe checkout sessions
- Using Stripe webhooks to handle asynchronous payment events to update booking statuses and protect against fraud
- Sophisticated handling of errors and exceptions using global error middleware and error controller in both development and production environments
- Catching errors in asynchronous functions using the catchAsync utility function
- Handling all unhandled rejections and uncaught exceptions
- Image upload and processing using the Cloudinary API, Multer and sharp packages
- Implementing advanced security measures like rate limiting and data sanitization to prevent security vulnerabilities
- Integration with the Maptiler API for displaying tour locations on a map
- Use of the MVC (Model-View-Controller) architecture pattern to organize the project's code
- Use of the Pug template engine to render HTML templates on the server
- Use of the Parcel bundler to bundle the project's JavaScript files
- Use of the ESLint linter to maintain a consistent code style
- Use of the Prettier code formatter to maintain a consistent code style
- Deployment of the project to Cyclic hosting platform
- Enable CORS (Cross-Origin Resource Sharing) to allow requests from other domains

## Technologies Used

- `Node.js`: a server-side JavaScript runtime environment for building scalable and efficient network applications
- `Express`: a popular Node.js web application framework for building APIs and web applications
- `MongoDB`: a popular NoSQL database for storing and querying large volumes of unstructured data
- `Mongoose`: an Object Data Modeling (ODM) library for MongoDB and Node.js that provides a more intuitive way to interact with MongoDB
- `JWT`: a widely-used standard for representing and transmitting secure authentication and authorization information
- `Bcrypt`: a library to help you hash passwords..
- `Stripe`: a payment processing platform for securely processing credit and debit card payments
- `Mailtrap`: an email testing service that helps developers test email notifications without sending them to real users
- `Maptiler`: a popular location data platform for building location-based applications and services
- `Pug`: a template engine for Node.js that makes it easy to create HTML templates with JavaScript
- `SendInBlue(Brevo)`: a transactional email service for sending emails to real users
- `CSS`: a style sheet language used for describing the presentation of a document written in a markup language such as HTML
- `Multer`: a Node.js middleware for handling multipart/form-data, which is primarily used for uploading files
- `Sharp`: a Node.js image processing library for resizing and optimizing images
- `cloudinary`: a cloud service that offers a solution to a web application's entire image management pipeline
- `Prettier`: an opinionated code formatter that helps maintain consistent code style across the entire project
- `ESLint`: a popular JavaScript linter for identifying and reporting on patterns found in JavaScript code
- `parcel`: a web application bundler for JavaScript and CSS
