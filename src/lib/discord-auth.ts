// Discord OAuth Configuration
// Add these to your .env.local file:
// DISCORD_CLIENT_ID=your_discord_client_id
// DISCORD_CLIENT_SECRET=your_discord_client_secret
// DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/discord/callback
// NEXTAUTH_SECRET=your_nextauth_secret (generate with: openssl rand -base64 32)

export const DISCORD_CONFIG = {
  clientId: process.env.DISCORD_CLIENT_ID || '',
  clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
  redirectUri: process.env.DISCORD_REDIRECT_URI || 'http://localhost:3000/api/auth/discord/callback',
  scope: 'identify email',
  authorizeUrl: 'https://discord.com/api/oauth2/authorize',
  tokenUrl: 'https://discord.com/api/oauth2/token',
  userInfoUrl: 'https://discord.com/api/users/@me',
};

export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  email: string;
}

export const getDiscordAuthUrl = (): string => {
  const params = new URLSearchParams({
    client_id: DISCORD_CONFIG.clientId,
    redirect_uri: DISCORD_CONFIG.redirectUri,
    response_type: 'code',
    scope: DISCORD_CONFIG.scope,
  });

  return `${DISCORD_CONFIG.authorizeUrl}?${params.toString()}`;
};

export const exchangeCodeForToken = async (code: string): Promise<string | null> => {
  try {
    const response = await fetch(DISCORD_CONFIG.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: DISCORD_CONFIG.clientId,
        client_secret: DISCORD_CONFIG.clientSecret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: DISCORD_CONFIG.redirectUri,
      }),
    });

    const data = await response.json();
    return data.access_token || null;
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    return null;
  }
};

export const getDiscordUser = async (accessToken: string): Promise<DiscordUser | null> => {
  try {
    const response = await fetch(DISCORD_CONFIG.userInfoUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) return null;

    const user = await response.json();
    return {
      id: user.id,
      username: user.username,
      discriminator: user.discriminator,
      avatar: user.avatar,
      email: user.email,
    };
  } catch (error) {
    console.error('Error fetching Discord user:', error);
    return null;
  }
};

export const getDiscordAvatarUrl = (userId: string, avatarHash: string | null): string => {
  if (!avatarHash) {
    return `https://cdn.discordapp.com/embed/avatars/${parseInt(userId) % 5}.png`;
  }
  return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png`;
};
