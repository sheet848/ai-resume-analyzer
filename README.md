# AI Resume Analyzer
An AI-powered Resume Analyzer built with Puter.js, inspired by the JS Mastery tutorial (reference project). This app allows users to upload resumes, extract content, and receive intelligent analysis and feedback on skills, strengths, and improvements.

## Features
- **User Authentication:** Handle authentication entirely in the browser using Puter.js—no backend or setup required.
- **Resume Upload & Storage:** Let users upload and store all their resumes in one place, safely and reliably.
- **AI Resume Matching:** Provide a job listing and get an ATS score with custom feedback tailored to each resume.
- **Reusable, modern UI:** Built with clean, consistent components for a great-looking and maintainable interface.
- **Code Reusability:** Leverage reusable components and a modular codebase for efficient development.
- **Cross-Device Compatibility:** Fully responsive design that works seamlessly across all devices.
- **Modern UI/UX:** Clean, responsive design built with Tailwind CSS and shadcn/ui for a sleek user experience.

## Tech Stack
- **React** is a popular open‑source JavaScript library for building user interfaces using reusable components and a virtual DOM, enabling efficient, dynamic single-page and native apps.
- **React Router v7** is the go‑to routing library for React apps, offering nested routes, data loaders/actions, error boundaries, code splitting, and SSR support—all with a smooth upgrade path from v6.
- **Puter.js** is a tiny client‑side SDK that adds serverless auth, storage, database, and AI (GPT, Claude, DALL·E, OCR…) straight into your browser app—no backend needed and costs borne by users.
- **Tailwind CSS** is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.
- **TypeScript** is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers, making it ideal for building large-scale applications.
- **Vite** is a fast build tool and dev server using native ES modules for instant startup, hot‑module replacement, and Rollup‑powered production builds—perfect for modern web development.
- **Zustand** is a minimal, hook-based state management library for React. It lets you manage global state with zero boilerplate, no context providers, and excellent performance through selective state subscriptions.

## Project Structure

```
ai-resume-analyzer/
|── app/ # Application source code
│ ├── components/ # Reusable UI components
│ ├── constants/ # ATS page constant content
│ ├── lib/ # convert PDFtoImg / handle Puter code
│ ├── routes/ # Main pages & Navigation
│ |  ├── app.css # Global CSS
│ |  ├── root.tsx # Root page
│ |  ├── routes.ts # react route navigation
│── public/ # Static assets
|── types/ # typescript interfaces
│── README.md # Project documentation
```

## How It Works
1. User Authentication via Puter :
2. Upload Resume:
3. Conveet PDF to Image:
4. Text Extraction:
5. AI Analysis:
6. Feedback Display: 

## Screenshots  

<img width="1047" height="905" alt="Screenshot 2025-09-28 155249" src="https://github.com/user-attachments/assets/0502e9f9-7f1e-4280-b2e5-4ccb7b403dad" />

<img width="961" height="855" alt="Screenshot 2025-09-28 160026" src="https://github.com/user-attachments/assets/3fe11a5d-f992-4e5c-baef-07332a52fd44" />
