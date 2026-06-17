# Certification Practice Hub

A multi-certification exam practice platform built with Next.js 16, TypeScript, and Tailwind CSS.

## Supported Certifications

### AWS Cloud
- **AWS ML Engineer Associate** (MLA-C01) - 4 test sets, 170 questions
- **AWS Solutions Architect** (SAA-C03) - 2 test sets, 130 questions

### ISTQB Testing
- **ISTQB Foundation Level** (CTFL v4.0) - 2 test sets, 80 questions
- **ISTQB Testing with GenAI** (CT-GenAI v1.1) - 3 test sets, 120 questions

## Features

- **Full Exam Mode** - Timed practice tests with 40-65 questions
- **Section Mode** - Domain/chapter-specific practice
- **Light/Dark Mode** - Theme toggle available on all screens
- **Saved Tests** - Resume in-progress exams or review submitted ones
- **Progress Tracking** - Domain-level breakdown and scoring
- **Question Shuffling** - Randomized options to prevent memorization

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript (strict mode)
- Tailwind CSS
- localStorage for persistence

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── screens/           # Exam session orchestration
│   └── start-screen/      # Start screen sub-components
├── hooks/                 # Custom React hooks
├── lib/
│   ├── exams/             # Exam configs & questions
│   │   ├── aws-ml/
│   │   ├── aws-saa/
│   │   ├── istqb-foundation/
│   │   └── istqb-genai/
│   └── theme.ts          # Light/dark theme system
└── types/                 # TypeScript interfaces
```

## Architecture

See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for detailed architecture documentation.

## Available Skills

- `code-decomposer` - Break down complex components
- `dry-code-auditor` - Find code duplication
- `question-quality-auditor` - Review exam questions
- `istqb-exam-generator` - Generate ISTQB questions
- `ml-exam-generator` - Generate AWS ML questions
- `study-enhancer` - Suggest study improvements
- `typescript-refactorer` - TypeScript optimization
