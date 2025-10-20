# Database Setup Guide

## Overview

This project uses an optimized database system that supports:
- **localStorage** (development/fallback)
- **PostgreSQL** (production - recommended)
- **Discord OAuth** for authentication
- **Rust Server API** integration for live stats

---

## Quick Start (Development)

The site works out of the box with localStorage. No database setup required!

Data stored locally:
- User accounts
- Forum posts  
- Server stats

**Note:** Data clears on restart when no database is configured.

---

## Production Setup

### 1. Database Setup (PostgreSQL)

**Option A: Local PostgreSQL**
```bash
# Install PostgreSQL
# macOS
brew install postgresql

# Ubuntu/Debian
sudo apt-get install postgresql

# Create database
createdb verarust

# Update .env
DATABASE_URL="postgresql://localhost:5432/verarust"
```

**Option B: Hosted Database (Recommended)**

Use one of these providers:
- [Supabase](https://supabase.com) - Free tier available
- [Railway](https://railway.app) - $5/month
- [Neon](https://neon.tech) - Serverless PostgreSQL

Copy the connection string to your `.env` file.

### 2. Discord OAuth Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Name it "Vera Rust" and create
4. Go to **OAuth2** tab
5. Add redirect URL: `http://localhost:3000/api/auth/discord/callback`
   - For production: `https://verarust.co.uk/api/auth/discord/callback`
6. Copy **Client ID** and **Client Secret**
7. Add to `.env`:

```env
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret
DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/discord/callback
```

### 3. Rust Server Integration (Optional)

To pull live stats from your Rust server:

1. Enable RCON on your Rust server
2. Note your server IP and RCON port
3. Add to `.env`:

```env
RUST_SERVER_API_URL=http://your-server-ip:28016
RUST_SERVER_API_KEY=your_rcon_password
```

---

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Production only |
| `DISCORD_CLIENT_ID` | Discord OAuth client ID | Yes |
| `DISCORD_CLIENT_SECRET` | Discord OAuth secret | Yes |
| `DISCORD_REDIRECT_URI` | OAuth callback URL | Yes |
| `NEXTAUTH_SECRET` | Auth encryption key | Yes |
| `RUST_SERVER_API_URL` | Rust server API endpoint | Optional |
| `RUST_SERVER_API_KEY` | RCON password | Optional |

Generate `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

---

## Database Schema (Future Prisma Integration)

### Users Table
```sql
- id (UUID, PK)
- email (VARCHAR, UNIQUE)
- username (VARCHAR, UNIQUE)
- displayName (VARCHAR)
- avatar (VARCHAR)
- provider (ENUM: 'local', 'discord')
- providerId (VARCHAR)
- level (INT)
- xp (INT)
- gamesPlayed (INT)
- wins (INT)
- losses (INT)
- winRate (DECIMAL)
- joinedDate (TIMESTAMP)
- lastLogin (TIMESTAMP)
```

### Forum Posts Table
```sql
- id (UUID, PK)
- category (ENUM: 'bug-reports', 'suggestions', 'applications')
- title (VARCHAR)
- content (TEXT)
- authorId (UUID, FK -> Users)
- status (ENUM: 'pending', 'approved', 'resolved', 'rejected')
- replies (INT)
- views (INT)
- isPinned (BOOLEAN)
- isLocked (BOOLEAN)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

### Server Stats Table
```sql
- id (UUID, PK)
- serverId (VARCHAR)
- serverName (VARCHAR)
- currentPlayers (INT)
- maxPlayers (INT)
- uptime (BIGINT)
- fps (INT)
- entities (INT)
- map (VARCHAR)
- wipeDate (TIMESTAMP)
- lastUpdate (TIMESTAMP)
```

---

## Data Flow

```
User Login (Discord)
    ↓
Discord OAuth → Get user info
    ↓
Check if user exists in DB
    ↓
Create/Update user record
    ↓
Generate session token
    ↓
Store in localStorage + cookies
```

```
Forum Post Creation
    ↓
Validate auth → Check user session
    ↓
Create post record in DB
    ↓
Update category stats
    ↓
Emit real-time update (future)
```

```
Server Stats Sync
    ↓
Cron job (every 30 seconds)
    ↓
Fetch from Rust server API
    ↓
Update database
    ↓
Cache for 30 seconds
    ↓
Serve to clients
```

---

##  Performance Optimizations

### Implemented:
- ✅ Debounced search/filters
- ✅ Lazy loading for lists
- ✅ localStorage caching
- ✅ Optimized re-renders (React.memo)
- ✅ CSS GPU acceleration
- ✅ Image optimization (Next.js)
- ✅ Code splitting (dynamic imports)

### Database Level:
- Indexes on frequently queried fields
- Connection pooling (20 connections)
- Query result caching (Redis - future)
- Read replicas for scaling (future)

### Frontend Level:
- Service Worker for offline support (future)
- Prefetching critical data
- Incremental Static Regeneration
- Edge caching (Vercel/Cloudflare)

---

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy!

### Manual Deployment

```bash
# Build
npm run build

# Start production server
npm start
```

---

## Monitoring

Future integrations:
- **Sentry** - Error tracking
- **PostHog** - Analytics
- **Uptime Robot** - Uptime monitoring
- **Grafana** - Server metrics

---

## Troubleshooting

**"Database not found" errors:**
- Data is saving to localStorage
- Configure `DATABASE_URL` for persistence

**Discord login not working:**
- Check CLIENT_ID and SECRET are correct
- Verify redirect URI matches exactly
- Enable OAuth2 in Discord app settings

**Slow performance:**
- Enable database connection pooling
- Add Redis caching layer
- Use CDN for static assets

---

## Support

Need help? Create an issue on GitHub or contact the development team.

**Built with ❤️ for the Vera Rust community**
