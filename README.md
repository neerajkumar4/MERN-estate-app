# MakEstate - MERN Stack Full-Stack App

Welcome to the MakEstate repository! MakEstate is a full-stack web application built using the MERN stack. It serves as a platform for managing real estate properties, providing users with the ability to list, search, and manage properties conveniently.

## Features

1.  Authentication: Users can sign up, log in, and log out securely.
2.  Property Listings: Users can view available properties with details.
3.  Search Functionality: Users can search for properties based on various criteria.
4.  User Profile: Registered users have access to a personalized Profile for managing their listed
    properties.

# Installation

1. Clone the repository to your local machine:
   ### `git clone https://github.com/neerajkumar4/MakEstate.git`
2. Navigate to the project directory:
   ### `cd .\MakEstate\`
3. Navigate to the api directory:
   ### `cd .\api\`
4. Install server-side dependencies:
   ### `npm i`
5. Navigate back to the project root directory:
   ### `cd ..`
6. Navigate to the client directory:
   ### `cd .\client\`
7. Install client-side dependencies:
   ### `npm i`

# Configuration

Before running the application, you need to set up the environment variables.

1. Create a .env file in the api directory and specify the following variables:
   ```
    MONGO=your_mongodb_url
    JWT_SECRET=your_secret_key
   ```
   Replace `your_mongodb_url` with your MongoDB connection string and `your_secret_key` with a secret key for JWT token generation.
2. Create a .env file in the client directory and specify the following variables:
   ```
    REACT_APP_FIREBASE_KEY=your_firebase_key
   ```
   Replace `your_firebase_key` with your Firebase key string

# Usage

To start the application, you have to start front-end and back-end in separate terminal simultaneously:

1. open a terminal and navigate to api directory then run the following command:
   ### `npm start`
2. open another terminal and navigate to client directory then run the following command:
   ### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
