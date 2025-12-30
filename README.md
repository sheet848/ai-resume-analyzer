# AI Resume Analyzer

An intelligent, serverless AI-powered resume analyzer that provides real-time ATS (Applicant Tracking System) scores and personalized feedback to help job seekers optimize their resumes for specific positions.

![AI Resume Analyzer](https://claude.ai/chat/public/images/hero-preview.png)

## 🌟 Overview

Stop sending resumes into the void. Get instant, AI-powered feedback on how well your resume matches any job posting, with detailed suggestions on how to improve your chances of landing an interview.

**Built with cutting-edge technologies:**

- ✅ 100% serverless architecture
- ✅ Zero backend configuration required
- ✅ Free AI models (GPT, Claude, Grok)
- ✅ User-pays model (zero infrastructure costs)
- ✅ Real-time analysis and feedback

## 🚀 Features

### Core Functionality

- **Smart Resume Upload** - Drag-and-drop PDF upload with instant preview
- **Job Matching Analysis** - Compare your resume against specific job descriptions
- **ATS Score Calculation** - Get a comprehensive score (0-100) on resume effectiveness
- **AI-Powered Feedback** - Detailed suggestions across 4 key categories:
    - Tone & Style
    - Content Quality
    - Structure & Format
    - Skills Matching
- **PDF to Image Conversion** - Automatic thumbnail generation for easy browsing

### Advanced Features

- **Serverless Authentication** - Secure login through Puter.js
- **Cloud Storage** - All resumes stored securely in the cloud
- **Key-Value Database** - Fast data retrieval with no configuration
- **Multiple AI Models** - Access to Claude Sonnet, GPT, and more
- **Responsive Design** - Works beautifully on desktop and mobile

## 🛠️ Tech Stack

### Frontend Framework

- **React 19** - Latest React with concurrent features
- **React Router v7** - Modern routing with data loading
- **TypeScript** - Full type safety throughout
- **Vite** - Lightning-fast build tool and dev server

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **tailwindcss-animate** - Beautiful animations out of the box
- **Custom Gradients** - Unique design system

### Backend & Services (via Puter.js)

- **Puter.js** - Serverless cloud platform
    - Authentication (OAuth)
    - File storage (cloud storage)
    - Key-Value storage (database)
    - AI integration (multiple models)

### State Management

- **Zustand** - Lightweight state management

### PDF Processing

- **pdf.js-dist** - PDF rendering and conversion
- **Canvas API** - PDF to image conversion

### Additional Tools

- **clsx** - Conditional classNames utility
- **tailwind-merge** - Merge Tailwind classes intelligently
- **react-dropzone** - File upload with drag-and-drop

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Puter account (free - no credit card required)

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/ai-resume-analyzer.git
cd ai-resume-analyzer
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a Puter account**

- Visit [puter.com](https://puter.com/)
- Sign up for a free account (no credit card required)
- No API keys needed - authentication handled in-app

4. **Start the development server**

```bash
npm run dev
```

The application will open at `http://localhost:5173`

5. **Build for production**

```bash
npm run build
```

## 📁 Project Structure

```
ai-resume-analyzer/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ResumeCard.tsx
│   │   ├── FileUploader.tsx
│   │   ├── ScoreCircle.tsx
│   │   ├── ScoreGauge.tsx
│   │   ├── ScoreBadge.tsx
│   │   ├── Summary.tsx
│   │   ├── ATS.tsx
│   │   ├── Details.tsx
│   │   └── Accordion.tsx
│   ├── routes/
│   │   ├── home.tsx
│   │   ├── auth.tsx
│   │   ├── upload.tsx
│   │   ├── resume.tsx
│   │   └── wipe.tsx
│   ├── lib/
│   │   ├── puter.ts
│   │   ├── pdfToImage.ts
│   │   └── utils.ts
│   ├── app.css
│   └── root.tsx
├── constants/
│   └── index.ts
├── types/
│   ├── index.d.ts
│   └── puter.d.ts
├── public/
│   ├── images/
│   └── icons/
├── package.json
├── vite.config.ts
└── README.md
```

## 🎯 How It Works

### 1. Authentication Flow

- Users click "Login" and are redirected to Puter's authentication
- After successful login, users return to the app with a session
- All data is tied to the authenticated user

### 2. Resume Upload Process

```
User uploads PDF → Convert to image thumbnail → 
Upload both to Puter storage → Store metadata in KV database
```

### 3. AI Analysis Pipeline

```
Extract resume + job description → 
Send to Puter AI (Claude Sonnet) → 
Parse structured feedback → 
Calculate ATS score → 
Store results → Display feedback
```

### 4. Data Storage

- **File Storage**: Original PDFs and generated thumbnails
- **Key-Value Store**: Resume metadata, scores, and AI feedback
- **Format**: `resume:{uuid}` → JSON object

## 🔑 Key Features Explained

### Puter.js Integration

Puter.js provides a complete backend without any server setup:

```typescript
// Authentication
await puter.auth.signIn();

// File Upload
await puter.fs.upload([file]);

// AI Analysis
await puter.ai.chat(model, messages);

// Key-Value Storage
await puter.kv.set(key, value);
```

### PDF to Image Conversion

Automatically converts uploaded PDFs to thumbnails for easy preview:

```typescript
const convertPDFToImage = async (file: File) => {
  // Load PDF
  const pdf = await pdfjsLib.getDocument(arrayBuffer);
  // Render to canvas
  const canvas = document.createElement('canvas');
  // Convert to PNG
  return canvas.toBlob('image/png');
};
```

### AI Feedback Structure

The AI returns structured feedback in JSON format:

```json
{
  "overallScore": 75,
  "ats": {
    "score": 75,
    "tips": ["Add relevant keywords", "Include metrics"]
  },
  "toneAndStyle": {
    "score": 80,
    "tips": ["Use action verbs"],
    "whatWentWell": ["Professional tone"],
    "whatToImprove": ["Add more passion"]
  }
  // ... more categories
}
```

## 🎨 Design Features

### Animations

- Fade-in effects on page load
- Smooth transitions between pages
- Animated score gauges and circles
- Loading states with custom GIFs

### Responsive Layout

- Mobile-first design
- Flexible grid system
- Collapsible components on smaller screens
- Touch-friendly interactions

### Custom Components

- **Score Circle**: Circular progress indicator (0-100)
- **Score Gauge**: Half-circle gauge for overview
- **Score Badge**: Color-coded labels (Strong/Good/Needs Work)
- **Accordion**: Expandable feedback sections

## 💡 Usage Guide

### Analyzing Your First Resume

1. **Log In**
    
    - Click "Login" in the navigation
    - Authenticate through Puter
    - Get redirected back to the app
2. **Upload Resume**
    
    - Click "Upload Resume"
    - Fill in:
        - Company name (optional)
        - Job title (optional)
        - Job description (paste full description)
    - Drag and drop your PDF resume
    - Click "Analyze Resume"
3. **View Results**
    
    - Wait for AI analysis (15-30 seconds)
    - Get redirected to detailed feedback page
    - Review scores and suggestions
4. **Browse History**
    
    - Return to homepage
    - View all analyzed resumes
    - Click any card to see full feedback

### Understanding Your Score

- **70-100**: Strong - Resume is well-optimized
- **50-69**: Good Start - Some improvements needed
- **0-49**: Needs Work - Significant changes recommended

## 🚀 Deployment

### Deploy to Puter App Store

1. **Prepare for build**

```typescript
// In react-router.config.ts
export default {
  ssr: false  // Required for Puter deployment
}
```

2. **Build the application**

```bash
npm run build
```

3. **Deploy to Puter**
    
    - Go to [puter.com/app-center](https://puter.com/app-center)
    - Click "Add Your App"
    - Give it a name (e.g., "AI Resume Analyzer")
    - Drag and drop contents of `build/client/` folder
    - Click "Deploy Now"
4. **Configure App Settings**
    
    - Update title and description
    - Set category
    - Upload favicon
    - Publish to Puter Store (optional)

### Alternative Deployment

You can also deploy to traditional platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop build folder
- **GitHub Pages**: Configure in repo settings

## 🔧 Customization

### Changing AI Model

Edit `app/lib/puter.ts`:

```typescript
const feedback = await puter.ai.chat(
  'claude-sonnet-3-5-20241022', // Change model here
  messages
);
```

Available models:

- `claude-sonnet-3-5-20241022` (recommended)
- `claude-sonnet-3-7`
- `gpt-4o`
- Check Puter docs for latest models

### Modifying Feedback Format

Edit `constants/index.ts`:

```typescript
export const AI_RESPONSE_FORMAT = `
  // Define your custom feedback structure
  {
    "overallScore": number,
    "customCategory": {...}
  }
`;
```

### Styling

All custom styles in `app/app.css`:

- Color tokens (CSS variables)
- Component classes
- Gradient definitions
- Animation keyframes

## 📊 Data Flow

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│  React Frontend     │
│  (Vite + React 19)  │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│    Puter.js         │
│  - Auth             │
│  - Storage          │
│  - AI               │
│  - KV Database      │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  AI Models          │
│  - Claude Sonnet    │
│  - GPT-4            │
└─────────────────────┘
```

## 🐛 Troubleshooting

### AI Analysis Stuck

- Try refreshing the page
- Check Puter service status
- Switch AI model in code
- Verify job description isn't too long

### Images Not Loading

- Check file size (max 20MB)
- Ensure PDF is valid
- Clear browser cache
- Check Puter storage quota

### Authentication Issues

- Clear browser cookies
- Try incognito mode
- Re-initialize Puter script
- Check internet connection

## 🔮 Future Enhancements

- [ ] Resume template suggestions
- [ ] Skills gap analysis
- [ ] Industry-specific scoring
- [ ] Resume version comparison
- [ ] Export feedback as PDF
- [ ] LinkedIn profile integration
- [ ] Batch resume analysis
- [ ] Cover letter generation
- [ ] Interview prep suggestions

## 📄 License

This project is open source and available under the [MIT License](https://claude.ai/chat/LICENSE).

## 🙏 Acknowledgments

- **Puter.js** - For providing an incredible serverless platform
- **Anthropic** - For Claude AI models
- **React Team** - For React 19 and React Router
- **Tailwind Labs** - For Tailwind CSS
- **Adrian from JavaScript Mastery** for the tutorial inspiration

---

**Built with ❤️ to help job seekers land their dream jobs**

**Try it live:** [Your Puter App URL]

## Screenshots  

<img width="1047" height="905" alt="Screenshot 2025-09-28 155249" src="https://github.com/user-attachments/assets/0502e9f9-7f1e-4280-b2e5-4ccb7b403dad" />

<img width="961" height="855" alt="Screenshot 2025-09-28 160026" src="https://github.com/user-attachments/assets/3fe11a5d-f992-4e5c-baef-07332a52fd44" />
