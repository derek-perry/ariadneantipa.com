/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  crossOrigin: 'anonymous',
  images: {
    domains: ['localhost', 'ariadneantipa.netlify.app', 'ariadneantipa.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        "source": "/index",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/home",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/homepage",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/me",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/bio",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/biography",
        "destination": "/about",
        "permanent": true
      },
      {
        "source": "/events",
        "destination": "/calendar",
        "permanent": true
      },
      {
        "source": "/schedule",
        "destination": "/calendar",
        "permanent": true
      },
      {
        "source": "/media",
        "destination": "/photos",
        "permanent": true
      },
      {
        "source": "/media/photos",
        "destination": "/photos",
        "permanent": true
      },
      {
        "source": "/media/photo",
        "destination": "/photos",
        "permanent": true
      },
      {
        "source": "/media/pictures",
        "destination": "/photos",
        "permanent": true
      },
      {
        "source": "/media/picture",
        "destination": "/photos",
        "permanent": true
      },
      {
        "source": "/photo",
        "destination": "/photos",
        "permanent": true
      },
      {
        "source": "/pictures",
        "destination": "/photos",
        "permanent": true
      },
      {
        "source": "/picture",
        "destination": "/photos",
        "permanent": true
      },
      {
        "source": "/media/recordings",
        "destination": "/recordings",
        "permanent": true
      },
      {
        "source": "/media/recording",
        "destination": "/recordings",
        "permanent": true
      },
      {
        "source": "/media/videos",
        "destination": "/recordings",
        "permanent": true
      },
      {
        "source": "/media/video",
        "destination": "/recordings",
        "permanent": true
      },
      {
        "source": "/videos",
        "destination": "/recordings",
        "permanent": true
      },
      {
        "source": "/video",
        "destination": "/recordings",
        "permanent": true
      },
      {
        "source": "/project",
        "destination": "/projects",
        "permanent": true
      },
      {
        "source": "/flight88",
        "destination": "/project/flight88?id=1",
        "permanent": true
      },
      {
        "source": "/flight-88",
        "destination": "/project/flight88?id=1",
        "permanent": true
      },
      {
        "source": "/flight%2088",
        "destination": "/project/flight88?id=1",
        "permanent": true
      },
      {
        "source": "/flight 88",
        "destination": "/project/flight88?id=1",
        "permanent": true
      },
      {
        "source": "/between-you-and-i",
        "destination": "/project/between-you-and-i?id=2",
        "permanent": true
      },
      {
        "source": "/betweenyouandi",
        "destination": "/project/between-you-and-i?id=2",
        "permanent": true
      },
      {
        "source": "/between%20you%20and%20i",
        "destination": "/project/between-you-and-i?id=2",
        "permanent": true
      },
      {
        "source": "/between you and i",
        "destination": "/project/between-you-and-i?id=2",
        "permanent": true
      },
      {
        "source": "/teachingphilosophy",
        "destination": "/teaching-philosophy",
        "permanent": true
      },
      {
        "source": "/philosophy",
        "destination": "/teaching-philosophy",
        "permanent": true
      },
      {
        "source": "/privacypolicy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacy-policy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookie",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookies",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookiepolicy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookie-policy",
        "destination": "/privacy",
        "permanent": true
      }
    ]
  }
}

module.exports = nextConfig
