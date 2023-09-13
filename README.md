# HNG-Task2

A Backend Application for HNG stage2 Backend Task

## Table of Contents

- [Introduction](#introduction)
- [API Documentation](#api-documentation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Directory Structure](#directory-structure)
- [API Endpoints](#api-endpoints)
- [Contribution](#contribution)

## Introduction
![image](https://drive.google.com/uc?id=1wmGkSc6mMet9b3p7Lv9OZmMYmAKepTEC)

This is a REST API that is capable of CRUD operations on a "person's" resource.

## API Documentation

- For detailed API documentation, please refer to the
  [Postman API Documentation](https://documenter.getpostman.com/view/26542199/2s9YC4UY4X).

- For tests, refer to the [PostmanTests](https://github.com/StephanieMfon/HNG-Task2/blob/main/tests.js) file.

## Features

Lists the key features or functionalities of this project, implemented a CRUD API that uses request METHODS for GET, POST, PATCH and DELETE .

The API has the following endpoints:

- **GET** `/api/:user_id` - Get's a User resource using the id parameter.
- **POST** `/api` - Ceates a new User resource.
- **PATCH** `/api/:user_id` - Updates the User's name using the id paramter.
- **DELETE** `/api/:user_id`- Deletes a User's details using the id parameter

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi for validation

## Prerequisites

Before setting up the codebase, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (version 18 or above)
- [Git](https://git-scm.com/)

## Installation

Please follow the steps below to get started

````bash
# Clone the repository
git clone https://github.com/StephanieMfon/HNG-Task2.git

# Change into the project directory
cd HNG-Task2

# Install dependencies
npm install

# Setting up Environment Variables

1. Create a `.env` file in the root directory of your project if it doesnt exist.
2.  Open the `.env` file in a text editor of your choice.
3. Add the following environment variables to the `.env` file and set their values according to your environment:

```plaintext
MONGO_URI=your-mongodb-URI
PORT=your-port

# Use this to run the server
npm run start

Visit http://localhost:4000 in your web browser to access the application.
````

## Directory Structure

```bash
Hng_Stage_two/
├───config/
├───src/
│ ├───controller.ts
│ ├───error.ts
│ ├───middleware.ts
│ ├───route.ts
│ ├───utils.ts
│ └───validator.ts
│
├───.env
├───server.ts
├───package.json
├───test.js
└───README.md
```

- `src/`: Contains the main source code files.
- `.env`: Configuration file for environment variables.
- `server.ts`: The entry point of the application.
- `package.json`: Dependencies and scripts configuration.
- `README.md`: Documentation for the project.
- `test.js`: postman tests for the endpoints.

## API Endpoints

- **Create User:**

  - URL: `/api`
  - Method: `POST`
  - Description: Create a new user.
  - Request Body:
    - Example:
      ```json
      {
      	"name": "Jane Doe"
      }
      ```
  - Response:
    - Status Code: `201 Created`
    - Example:
      ```json
      {
      	"name": "Jane Doe",
      	"id": "user_id"
      }
      ```

- **Get User by ID:**

  - URL: `/api/:user_id`
  - Method: `GET`
  - Description: Retrieve user information by their ID.
  - Response:
    - Status Code: `200 OK`
    - Example:
      ```json
      {
      	"name": "Jane Doe",
      	"id": "user_id"
      }
      ```

- **Update User by ID:**

  - URL: `/api/:user_id`
  - Method: `PUT`
  - Description: Update user data by their ID.
  - Request Body:
    - Example:
      ```json
      {
      	"name": "Updated Name"
      }
      ```
  - Response:
    - Status Code: `200 OK`
    - Example:
      ```json
      {
      	"name": "Updated Name",
      	"id": "user_id"
      }
      ```

- **Delete User by ID:**

  - URL: `/api/:user_id`
  - Method: `DELETE`
  - Description: Delete a user by their ID.
  - Response:

    - Status Code: `200 OK`
    - Example:

      ```json
      "User data deleted"
      ```

## Contribution

Contributions are welcome! Please fork this repository and create a pull request with your changes.
