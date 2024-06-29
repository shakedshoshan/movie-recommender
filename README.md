# Movie Recommendation Web Application

This project is a full-stack web application that provides movie recommendations to users based on their ratings on movies.
The application is containerized using Docker, making it easy to set up and run.

## Features

- Movie recommendation system using SVD algorithm
- Interactive and responsive user interface with React and Next.js
- RESTful API with Node.js and Express
- User authentication using JWT
- Data storage with MongoDB
- Containerized with Docker for easy deployment

## Technologies Used

- Frontend: React, Next.js
- Backend: Node.js, Express, MongoDB
- Algorithm: SVD (Singular Value Decomposition) implemented in Flask
- Containerization: Docker

## Architecture

- Client: React and Next.js
- Server: Node.js with Express following the MVC pattern
  - Routes
  - Controllers
  - Services
- Database: MongoDB
- Authentication: JWT stored in cookies
- Recommendation System: Flask API running the SVD algorithm

## Setup and Installation
Clone the repository:

   ```bash
   git clone https://github.com/DavidKras95/URL-Shortener-Service.git
   ```
Run Docker Compose:

   ```bash
    docker-compose up -d
   ```

## Usage
Open your web browser and go to http://localhost:3000 to access the client application.
Register or log in to access the movie recommendation features.
Use the application to receive movie recommendations based on your preferences

