# HNG-Task2

A Backend Application for HNG stage2 Backend Task

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)

## Introduction

This is a REST API that is capable of CRUD operations on a "person's" resource.

## Features

Lists the key features or functionalities of this project, implemented a CRUD API that uses request METHODS for GET, POST, PATCH and DELETE .

The API has the following endpoints:

      **GET** `/api/:id` - Get's a User resource using the id parameter.
     **POST** `/api` - Ceates a new User resource.
      **PATCH** `/api/:id` - Updates the User's name using the id paramter.
     **DELETE** `/api/:id`- Deletes a User's details using the id parameter

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
````
