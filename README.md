# 🚀 Servana - Digital Agency Website

A modern, responsive digital agency website built with React.js and Node.js, featuring contact forms, project requests, and a complete service showcase.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

Servana is a full-stack digital agency website that provides:
- **Frontend**: Modern React.js application with responsive design
- **Backend**: Node.js/Express server with email integration
- **Forms**: Contact and project request forms with email notifications
- **Responsive Design**: Mobile-first approach using Tailwind CSS

## ✨ Features

### Frontend Features
- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first responsive layout
- 🧭 Dynamic navigation with React Router
- 📧 Contact form with validation
- 🚀 Project request form
- 🎯 Service showcase pages
- 📊 Case studies section
- 🔒 Privacy policy and support pages

### Backend Features
- 📧 Email integration with Nodemailer
- 🛡️ CORS protection
- 🔐 Environment variable configuration
- 📋 Form validation and error handling
- 🚀 RESTful API endpoints

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables

## 📁 Project Structure

```
servana/
├── Backend/
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   └── .gitignore        # Backend ignore rules
├── Frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Images and assets
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite configuration
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account for email functionality

### Installation

1. **Clone the repository**
```bash
git clone [repository-url]
cd servana
```

2. **Install backend dependencies**
```bash
cd Backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../Frontend
npm install
```

4. **Set up environment variables**
Create a `.env` file in the Backend directory (see [Environment Variables](#environment-variables))

5. **Start the development servers**

Backend:
```bash
cd Backend
npm run dev
```

Frontend:
```bash
cd Frontend
npm run dev
```

## 📝 Available Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 👥 Contact

- **Project**: Servana Digital Agency
- **Email**: [cse.priyaranjan@gmail.com]

---

Built with ❤️ by [Priyaranjan]
