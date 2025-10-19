<div align="center">

# 🦀 Vera Rust

### *Premium Rust Server Network*

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🌐 Live Site](https://verarust.co.uk) • [📖 Documentation](#-project-structure) • [🚀 Quick Start](#-getting-started) • [⚙️ Admin Panel](#-admin-panel)

<img src="https://img.shields.io/badge/Status-Production-success?style=flat-square" alt="Status" />
<img src="https://img.shields.io/badge/Maintained-Yes-brightgreen?style=flat-square" alt="Maintained" />

---

### ✨ *Cutting-edge server management meets sleek design*

</div>

## 📋 Overview

A modern Next.js web application for the **Vera Rust** server network, featuring a full-stack authentication system, **Pterodactyl-inspired admin panel**, and glassmorphism UI with orange-to-red gradient accents.

### 🎯 Key Highlights

```diff
+ Pterodactyl-style admin panel with server control
+ Real-time console & file management interface
+ Comprehensive user management system
+ Mobile-first responsive design with sidebar navigation
+ Static admin account for instant access
+ Glass-morphism UI with custom font stack
```

---

## ⚡ Features

<table>
<tr>
<td width="50%">

### 🔐 Authentication System
- **Local Storage Auth** with React Context
- **Static Admin Access** (admin@system.local)
- Register, Login, Logout flows
- Protected routes & middleware
- User profiles with XP/Level system

</td>
<td width="50%">

### 🎮 User Experience
- **Profile Dashboard** with stats & activity
- **Leaderboard Rankings** (Level, Wins, Rate)
- **Server Browser** with live status
- **Legacy Features** showcase
- **Mobile Sidebar** navigation

</td>
</tr>
<tr>
<td width="50%">

### ⚙️ Admin Panel
- **5-Tab Interface** (Overview, Server, Console, Files, Users)
- **Server Controls** (Start/Stop/Restart)
- **Live Console** with command execution
- **File Manager** with path navigation
- **User Management** with role system

</td>
<td width="50%">

### 🎨 Design System
- **Pterodactyl Colors** (#0a0a0a, #131313, #1f1f1f)
- **Custom Fonts** (Rajdhani, Orbitron)
- **Glass-morphism** with backdrop blur
- **Orange-to-Red** gradients
- **Fully Responsive** (Mobile & Desktop)

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14.2.5 (App Router) |
| **Language** | TypeScript 5.0 |
| **Styling** | Tailwind CSS 3.4.1 |
| **State** | React Context API |
| **Auth** | Custom Local Storage System |
| **Fonts** | Rajdhani (300-700), Orbitron (400-900) |

</div>

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18.17.1
npm >= 9.6.7
```

### Installation

```bash
# Clone the repository
git clone https://github.com/scros18/vera-rust-website.git

# Navigate to project
cd vera-rust-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 🔑 Admin Access

```
Email: admin@system.local
Password: Password123
```

---

## 📁 Project Structure

```
vera-rust-website/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📄 layout.tsx           # Root layout with metadata
│   │   ├── 📄 page.tsx             # Homepage with hero & features
│   │   ├── 📄 sitemap.ts           # Dynamic XML sitemap
│   │   ├── 📂 admin/
│   │   │   └── 📄 page.tsx         # Admin panel (5 tabs)
│   │   ├── 📂 profile/
│   │   │   └── 📄 page.tsx         # User profile dashboard
│   │   ├── 📂 login/
│   │   │   └── 📄 page.tsx         # Login page
│   │   ├── 📂 register/
│   │   │   └── 📄 page.tsx         # Registration page
│   │   ├── 📂 servers/
│   │   │   └── 📄 page.tsx         # Server browser
│   │   ├── 📂 leaderboard/
│   │   │   └── 📄 page.tsx         # Rankings
│   │   └── 📂 legacy/
│   │       └── 📄 page.tsx         # Legacy features
│   ├── 📂 components/
│   │   └── 📄 Navbar.tsx           # Navigation with mobile sidebar
│   ├── 📂 contexts/
│   │   └── 📄 AuthContext.tsx      # Auth state management
│   └── 📂 lib/
│       └── 📄 auth.ts              # Auth utilities & static admin
├── 📂 public/
│   ├── 🖼️ site-bg.jpg             # Background images
│   ├── 🖼️ steam.webp              # Platform logos
│   ├── 📄 robots.txt               # SEO robots file
│   └── ...
├── 📄 tailwind.config.ts           # Tailwind customization
├── 📄 next.config.mjs              # Next.js configuration
└── 📄 package.json                 # Dependencies
```

---

## 🎛️ Admin Panel

<div align="center">

### *Pterodactyl-Inspired Server Management*

</div>

The admin panel (`/admin`) features a comprehensive server management interface:

### Tabs Overview

| Tab | Features |
|-----|----------|
| **📊 Overview** | Server stats, player count, resource usage, quick actions |
| **🖥️ Server Control** | Start/Stop/Restart buttons, status indicators, resource bars |
| **💻 Console** | Live log display, command execution, colored output |
| **📁 File Manager** | Path navigation, file browser, sizes, timestamps |
| **👥 Users** | User management, role assignment, online status |

### Color Scheme

```css
Background: #0a0a0a
Cards: #131313
Borders: #1f1f1f
Hover: #252525, #2a2a2a
Accents: Orange-to-Red gradients
```

---

## 🎨 Design Features

### Glassmorphism

```tsx
backdrop-blur-xl
bg-black/50
border border-white/10
```

### Custom Fonts

- **Rajdhani**: Body text, headings (weights: 300, 400, 500, 600, 700)
- **Orbitron**: Display text, buttons (weights: 400, 500, 600, 700, 800, 900)

### Gradient Accents

```css
from-orange-500 to-red-600   /* Primary gradient */
from-orange-400 to-red-500   /* Hover states */
```

---

## 📱 Mobile Experience

- **Hamburger Menu** with slide-in sidebar
- **Touch-Optimized** navigation
- **Responsive Tables** for admin panel
- **Centered Layout** for mobile screens
- **Backdrop Blur** overlay on sidebar open

---

## 🔧 Server Optimizations

<div align="center">

| Optimization | Details |
|--------------|---------|
| ⚡ **Performance** | Latest-gen CPUs, NVMe SSDs, 60+ tick rate |
| 🛡️ **Protection** | Enterprise DDoS protection, 99.9% uptime |
| 🌐 **Network** | Strategic data centers, low latency routing |
| 💾 **Memory** | Advanced RAM optimization, efficient caching |
| 🔒 **Security** | Enhanced anti-cheat, regular security audits |
| 💿 **Backups** | Automated every 30 minutes, instant restore |
| 📊 **Monitoring** | 24/7 real-time system oversight |
| 🔄 **Updates** | Seamless zero-downtime deployments |

</div>

---

## 📦 Scripts

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint checks
```

---

## 🗺️ Sitemap & SEO

- **Dynamic Sitemap**: `/sitemap.xml` (auto-generated)
- **Robots.txt**: Configured for optimal crawling
- **Meta Tags**: Comprehensive SEO metadata
- **Open Graph**: Social media preview cards
- **Keywords**: 40+ targeted SEO keywords

---

## 🔮 Future Enhancements

<table>
<tr>
<td>

### Backend Integration
- [ ] Database connection
- [ ] Real authentication API
- [ ] Server status polling
- [ ] User data persistence

</td>
<td>

### VPS Integration
- [ ] SSH connection to Rust server
- [ ] Real-time console streaming
- [ ] File system operations
- [ ] Server restart/stop commands

</td>
</tr>
<tr>
<td>

### Features
- [ ] Discord OAuth integration
- [ ] Google OAuth integration
- [ ] Achievement system
- [ ] Clan/team features

</td>
<td>

### Admin Panel
- [ ] Real resource monitoring
- [ ] Plugin management
- [ ] Backup scheduling
- [ ] User ban/kick system

</td>
</tr>
</table>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Development

### Local Storage Keys

```javascript
verarust_users          // All registered users
verarust_current_user   // Active session
verarust_passwords      // Password storage (demo)
```

### Admin System

Static admin account bypasses normal authentication:
```typescript
// src/lib/auth.ts
if (username === 'admin@system.local' && password === 'Password123') {
  return adminUser; // Level 99, unlimited access
}
```

---

<div align="center">

### 🌟 Built with passion for the Rust community

Made by [scros18](https://github.com/scros18) • [⭐ Star this repo](https://github.com/scros18/vera-rust-website)

**[Report Bug](https://github.com/scros18/vera-rust-website/issues)** • **[Request Feature](https://github.com/scros18/vera-rust-website/issues)**

---

*Last Updated: October 2025*

</div>

