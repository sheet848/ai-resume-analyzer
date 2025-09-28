# AI Resume Analyzer  

An **AI-powered web application** that analyzes resumes and provides actionable feedback on structure, skills, and presentation.  
Built using **Puter.js** and inspired by the [JS Mastery YouTube tutorial](https://www.youtube.com/c/javascriptmastery).

---

## 🚀 Features
- Upload resumes for AI-based analysis  
- Get feedback on **skills, structure, and presentation**  
- Responsive, clean, and accessible UI  
- File handling & storage with **Puter.js**  
- Integration with AI for text evaluation  

---

## 🛠️ Tech Stack
- **TypeScript (ES6+)**  
- **Puter.js** for file handling and backend logic  
- **HTML5 / CSS3** for responsive UI  
- **AI API integration** for text analysis  

---

## 📂 Project Structure
```
ai-resume-analyzer/
│── public/ # Static assets
│── src/ # Application source code
│ ├── components/ # Reusable UI components
│ ├── pages/ # Main pages
│ └── utils/ # Helper functions & Puter.js logic
│── index.html # Entry point
│── style.css # Global styles
│── main.js # App logic
│── README.md # Project documentation
```

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
