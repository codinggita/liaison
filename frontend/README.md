# 📲 SyncSetu - WhatsApp-Integrated Micro-CRM
## Contact Management System for Indian Micro-Businesses

**Version:** 1.0.0 (MVP)  
**Status:** Development  
**Target Launch:** Q2 2026

---

## 📋 Project Overview

SyncSetu is a **WhatsApp-integrated contact management system** designed specifically for micro-businesses in India (jewelry stores, coaching institutes, real estate agents, logistics operators). It acts as an intelligent layer on top of existing WhatsApp conversations—everything stays in WhatsApp, but now it's actually organized.

### Problem Statement
Traditional CRM systems (Salesforce, HubSpot, Zoho) are **too expensive** (₹5,000-50,000/month), **too complex** (40+ hours setup), and **too powerful** (90% of features unused) for 3-person businesses that just need simple contact management.

### Solution
SyncSetu combines the familiarity of WhatsApp with smart CRM features:
- ✅ Contact management (linked to WhatsApp)
- ✅ Conversation history & quick actions
- ✅ Task & reminder management
- ✅ Payment tracking (₹)
- ✅ Simple dashboard with actionable metrics
- ✅ Affordable pricing: ₹299-2,999/month

---

## 🎯 Key Features (MVP)

### 1. Contact Management
- WhatsApp Business API integration
- Auto-sync contact list from WhatsApp
- Custom notes & tags per contact
- Business type, location, custom fields
- Quick contact search & filtering

### 2. Chat Integration
- Full WhatsApp conversation history (synced)
- Read/unread message tracking
- Quick action buttons (Follow-up, Payment, Note, Schedule)
- Message timestamps & sender identification

### 3. Task & Reminder System
- Create tasks from chats (one-tap)
- Task types: Follow-up, Payment, Call, Callback
- Due date & reminder notifications
- Daily task overview

### 4. Dashboard & Metrics
- **Active Chats:** Contacts communicated with this week
- **Follow-ups Due:** Count of pending reminders
- **Pending Payments:** Total amount owed (₹)
- **Response Rate:** % of replied conversations

### 5. Payment Tracking
- Log payment amounts & dates
- Mark paid/pending status
- Payment reminders
- Payment history per contact

---

## 💻 Technology Stack

### Frontend
- **Framework:** React 18.x with Vite
- **Routing:** React Router v7
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS v4 + Material-UI (MUI)
- **Form Management:** Formik + Yup validation
- **HTTP Client:** Axios with interceptors
- **Icons:** Lucide React + MUI Icons
- **Animations:** Framer Motion

### Backend (Planned)
- **Runtime:** Node.js 18.x
- **Framework:** Express.js
- **Database:** MongoDB / PostgreSQL
- **Authentication:** JWT

---

## 📁 Project Folder Structure

```
syncsetu/
├── frontend/
│   ├── public/
│   │   └── quiet_bg.png
│   ├── src/
│   │   ├── components/    # Reusable UI elements (Button, Input, Card)
│   │   ├── pages/         # Page components (LoginPage, Dashboard)
│   │   ├── features/      # Slice-level logic and feature components
│   │   ├── services/      # API configurations and service layers
│   │   ├── hooks/         # Custom React hooks (useAuth, useLocalStorage)
│   │   ├── utils/         # Helper functions (formatters, validators)
│   │   ├── store/         # Redux global state configuration
│   │   ├── App.jsx        # Routing and entry layout
│   │   └── main.jsx       # App entry and provider wrapping
│   └── ...
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js:** v18.x or higher
- **npm:** Latest version

### Step 1: Clone & Install
```bash
git clone https://github.com/your-org/syncsetu.git
cd syncsetu/frontend
npm install
```

### Step 2: Environment Setup
Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Step 3: Start Development
```bash
npm run dev
```

---

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Lint check
- `npm run preview`: Preview production build

---

## 🎨 Design System

### Colors
- **Primary:** WhatsApp Green (#25D366)
- **Teal Brand:** #1b6855
- **Teal Dark:** #125143

### Typography
- **Font Family:** 'Inter', sans-serif
- **Weights:** 400 (Regular), 600 (Semibold), 800 (Extra Bold)

---

## 📦 Deployment

### Frontend Deployment (Vercel)
The frontend is optimized for deployment on Vercel. 
1. Build the project: `npm run build`
2. Deploy the `dist` folder.

---

## 🚀 Roadmap

- **Phase 1:** MVP with core Contact and Payment tracking.
- **Phase 2:** Two-way WhatsApp message synchronization.
- **Phase 3:** AI-powered conversation summaries.
- **Phase 4:** Mobile App (React Native).

---

**Last Updated:** April 25, 2026  
**Project Status:** Initial Development Phase  
**Lead Developer:** [Antigravity AI]
