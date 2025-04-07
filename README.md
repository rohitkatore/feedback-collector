# Feedback Collector

A full-stack web application for collecting and displaying user feedback. Users can submit feedback through a form, and administrators can view all submitted feedback entries.

![Feedback Collector Screenshot](screenshot.png)

## Tech Stack

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client

### Backend

- **Express** - Node.js web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **Express Validator** - Middleware for validating requests

## Project Structure

feedback-collector/ ├── frontend/ # React frontend application │ ├── public/ # Static assets │ ├── src/ │ │ ├── components/ # React components │ │ │ ├── FeedbackCard.jsx │ │ │ ├── FeedbackForm.jsx │ │ │ ├── FeedbackList.jsx │ │ │ └── Footer.jsx │ │ ├── App.jsx # Main application component │ │ ├── main.jsx # Application entry point │ │ └── index.css # Global styles │ ├── index.html # HTML entry point │ ├── package.json # Frontend dependencies │ └── vite.config.js # Vite configuration │ ├── backend/ # Express backend application │ ├── controllers/ # Request handlers │ │ └── feedback.controller.js │ ├── models/ # Database models │ │ └── feedback.model.js │ ├── routes/ # API routes │ │ └── feedback.route.js │ ├── db/ # Database configuration │ │ └── db.js │ ├── app.js # Express application setup │ ├── server.js # Server entry point │ ├── .env # Environment variables │ └── package.json # Backend dependencies | └── README.md # Project documentation

## Features

- **User Feedback Form**: Simple form for collecting user feedback
- **Admin Dashboard**: View all submitted feedback
- **Responsive Design**: Works on desktop and mobile devices
- **Form Validation**: Input validation for required fields
- **Loading States**: Visual indicators for form submission
- **Error Handling**: Proper error display to users
- **Animation Effects**: Smooth transitions between views

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file with the following variables:

   ```
   DB_URL=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the backend server:
   ```
   node server.js
   ```
   The server will run on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The frontend will run on http://localhost:5173 (or another port if 5173 is in use)

## Deployment Steps

### Backend Deployment (using a service like Render, Heroku or Railway)

1. Create a new web service on your preferred platform
2. Set environment variables:
   - `DB_URL` - Your MongoDB connection string
   - `PORT` - The port your service will run on (often auto-assigned by the platform)
3. Set build command to `npm install`
4. Set start command to `node server.js`
5. Connect your GitHub repository or upload your code

### Frontend Deployment (using Netlify, Vercel, or similar)

1. Build your frontend for production:

   ```
   cd frontend
   npm run build
   ```

2. Upload the `dist` directory to your hosting provider
   (or set up automatic deployments from your repository)

3. Update API endpoint URLs in your frontend code to point to your deployed backend API

## API Documentation

### Endpoints

- **POST /submit-feedback**

  - Submit new feedback
  - Required fields: fullname, email, message
  - Returns: 201 Created on success

- **GET /feedbacks**
  - Get all feedback submissions
  - Returns: Array of feedback objects

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

MIT License
