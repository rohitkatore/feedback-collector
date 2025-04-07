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

```
feedback-collector/
├── client/                 # Frontend React application
│   ├── public/             # Public assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Root component
│   │   └── main.jsx        # Entry point
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Backend Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose data models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── server.js           # Server entry point
│   └── package.json        # Backend dependencies
│
├── .env                    # Environment variables (not in repo)
├── .gitignore              # Git ignore file
├── package.json            # Root package.json
└── README.md               # Project documentation
```

## Features

- User-friendly feedback submission form
- Form validation on both client and server side
- Admin dashboard for viewing all feedback
- Responsive design for mobile and desktop
- Animation effects for better user experience

## Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas URI)

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/feedback-collector.git
   cd feedback-collector
   ```

2. Install dependencies:

   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Environment setup:
   Create a `.env` file in the root directory with the following variables:

   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

4. Start development servers:

   ```bash
   # Start both frontend and backend (from root directory)
   npm run dev

   # Or start separately
   # Frontend (from client directory)
   npm run dev

   # Backend (from server directory)
   npm run dev
   ```

## Deployment

This application can be deployed using platforms like Heroku, Vercel, or Netlify.

## License

MIT
