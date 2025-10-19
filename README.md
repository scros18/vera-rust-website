# Vera | Rust Servers

A modern, fully-functional TypeScript website for Vera Rust Servers - featuring pure vanilla 2018-2019 Rust gameplay experience.

## 🎮 Features

- **Full Authentication System**: Register, login, and user profile pages
- **Local Storage**: All user data stored locally (ready for backend integration)
- **User Profiles**: Customizable profiles with stats, levels, and XP system
- **Leaderboard**: Competitive rankings by level, wins, and win rate
- **Server Browser**: List of available Rust servers with detailed information
- **Legacy Features Page**: Showcases authentic 2018-2019 Rust gameplay elements
- **Responsive Design**: Fully responsive with Tailwind CSS
- **Modern UI/UX**: Dark theme with orange/red gradient accents

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Custom local storage auth system
- **State Management**: React Context API

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.1 or higher
- npm 9.6.7 or higher

### Installation & Running

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with AuthProvider
│   ├── page.tsx            # Homepage with features and optimizations
│   ├── login/page.tsx      # Login page
│   ├── register/page.tsx   # Registration page
│   ├── profile/page.tsx    # User profile page
│   ├── servers/page.tsx    # Server browser with optimizations
│   ├── leaderboard/page.tsx # Player rankings
│   └── legacy/page.tsx     # 2018-2019 features showcase
├── components/
│   └── Navbar.tsx          # Navigation bar with auth state
├── contexts/
│   └── AuthContext.tsx     # Authentication context provider
└── lib/
    └── auth.ts             # Authentication utilities
```

## 🎯 Key Pages

### Home (`/`)
- Hero section with call-to-action
- Feature highlights
- Server optimization details (8 key optimizations)
- Statistics showcase

### Register (`/register`)
- User registration form with validation

### Login (`/login`)
- User login with authentication

### Profile (`/profile`)
- User information display & editing
- Stats dashboard (games, wins, losses, win rate)
- XP and level progression
- Protected route (requires authentication)

### Servers (`/servers`)
- List of available Rust servers
- Detailed server optimization information

### Leaderboard (`/leaderboard`)
- Sortable player rankings (by level, wins, win rate)

### Legacy Features (`/legacy`)
- 2018-2019 Rust features showcase
- Image placeholders for Rust assets

## 🔧 Server Optimizations

- **High-Performance Hardware**: Latest-gen processors & NVMe SSDs
- **DDoS Protection**: Enterprise-grade with 99.9% uptime
- **Optimized Tick Rate**: 60+ tick for responsive gameplay
- **Low Latency Network**: Strategic data center locations
- **Memory Optimization**: Advanced RAM management
- **Anti-Cheat Protection**: Enhanced detection systems
- **Regular Backups**: Every 30 minutes
- **24/7 Monitoring**: Real-time oversight

## 📝 Local Storage

User data stored in browser localStorage:
- `warbandits_users`: All registered users
- `warbandits_current_user`: Current user session
- `warbandits_passwords`: Password storage (demo only)

## 🔜 Future Enhancements

- Backend API integration
- Real Rust server status integration
- Discord integration
- Achievement system
- Clan/group features
- Real Rust game transparent PNG assets

## 📦 Scripts

```bash
npm run dev   # Development server
npm run build # Production build
npm start     # Production server
npm run lint  # Run ESLint
```

---

**Note**: Image placeholders throughout site should be replaced with actual Rust game transparent PNG assets (weapons, tools, building elements).

