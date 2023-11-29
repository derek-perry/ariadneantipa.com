/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  crossOrigin: 'anonymous',
  images: {
    domains: ['localhost', 'ariadneantipa.com'],
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
        "source": "/teachingphilosophy",
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
