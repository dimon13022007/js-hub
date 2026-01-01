# ⚡ JS Hub

> Modern interactive documentation for JavaScript and React with achievements system

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)

---

## 📖 About

**JS Hub** is an interactive platform for learning JavaScript and React with a minimalistic tech design. The project combines educational content, interactive code examples, and gamification through an achievements system.

### ✨ Features

- 📚 **Comprehensive documentation** — from JavaScript basics to advanced React topics
- 💻 **Interactive code examples** — with syntax highlighting and copy functionality
- 🏆 **Achievements system** — track progress and unlock rewards
- 🎨 **Minimalistic design** — black and white theme with clean UI
- 📱 **Responsive** — works great on all devices
- ⚡ **Fast** — built with Vite and React 19

---

## 🚀 Technologies

- **React 19.2.0** — UI library
- **TypeScript 5.9.3** — typed JavaScript
- **Vite 7.2.4** — fast build tool
- **Tailwind CSS 3.4.19** — utility-first CSS framework
- **Lucide React** — modern icons

---

## 📦 Installation

### Requirements

- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd js-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start dev server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🛠️ Available Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🎯 Features

### 📚 Documentation

The project includes detailed sections on:

- **JavaScript Basics**

  - Variables and data types
  - Functions and scope
  - Arrays and objects
  - Destructuring
  - Modern array methods

- **Asynchrony**

  - Promises
  - Async/Await
  - Parallel execution

- **DOM Manipulation**

  - Element selection
  - Event handling

- **React**

  - Introduction to React
  - JSX and conditional rendering
  - React Hooks (useState, useEffect, useContext)
  - Props and State

- **Advanced Topics**
  - Closures
  - Prototypes
  - React optimization

### 🏆 Achievements System

- **Automatic tracking** — progress is saved when reading topics
- **8 unique achievements** — from "First Steps" to "Completionist"
- **Visual progress** — progress indicators for each achievement
- **LocalStorage persistence** — progress is saved across sessions

---

## 🎨 Design

The project uses a minimalistic black and white design:

- **Color scheme**: Black background with white and gray accents
- **Typography**: Space Grotesk for main text, JetBrains Mono for code
- **Icons**: Lucide React — modern minimalistic icons
- **Animations**: Smooth transitions and hover effects

---

## 🔧 Development

### Adding a New Topic

1. Open `src/data/topics.ts`
2. Add a new topic to the appropriate section:

```typescript
{
  id: "new-topic",
  title: "New Topic",
  description: "Topic description",
  icon: BookOpen,
  sections: [
    {
      title: "Section",
      content: [
        { type: "text", value: "Text..." },
        { type: "code", value: "code...", language: "javascript" }
      ]
    }
  ]
}
```

### Adding an Achievement

1. Open `src/data/achievements.ts`
2. Add a new achievement:

```typescript
{
  id: "new_achievement",
  title: "Title",
  description: "Description",
  icon: Trophy,
  requirement: "read_5"
}
```

---
