# Gokul'S Portfolio
### Live Demo
[View Live Portfolio](https://gokulportfolio-ten.vercel.app/)


A fully responsive personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**, showcasing projects, certificates, and contact information. Includes a backend for email submission with **Node.js** and **Express**, and integrates with **Pipedream** for email handling.
<img width="1907" height="916" alt="image" src="https://github.com/user-attachments/assets/ff011f7e-f4c0-4196-ac09-40f62c340f1c" />

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion, ShadCN/UI, Lucide React
- **Backend:** Node.js, Express, sendGrid
- **Deployment:** Vercel (Frontend), Render (Backend), Pipedream (Email events)

---

## Features

- Fully responsive design for **mobile, tablet, and desktop**
- **Dark & Light mode** toggle
- Animated sections using **Framer Motion**
- **Contact form** with dynamic loading messages and confetti on submission
- Integration with **Email, LinkedIn, Telegram, and Google Maps**
- Projects and certificates showcase
- Interactive and visually appealing UI
- Secure handling of user messages
- Smooth scrolling and section navigation
---

## Project Structure
```
├─ Frontend/
│ ├─ src/
│ │ ├─ assets/ # Images, certificates
│ │ ├─ components/ # React components
│ │ └─ App.tsx
│ ├─ package.json
│ └─ vite.config.ts
├─ Backend/
│ ├─ server.js # Express server
│ └─ package.json
├─ .gitignore
└─ README.md
```

---

## Deployment

### Frontend (Vercel)

1. Connect the GitHub repository to Vercel
2. Set the root directory to `Frontend`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

### Backend (Render)

1. Create a Web Service on Render
2. Connect the backend repository
3. Start command: `node server.js`
4. Add environment variables (email credentials)
5. Deploy

---

## Usage

1. Open the portfolio in a browser
2. Explore projects, certificates, and contact form
3. Submit a message through the contact form
4. Confetti animation confirms successful submission
