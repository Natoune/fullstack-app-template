# Fullstack App Template

A modern fullstack application template built with:
- **Frontend**: SvelteKit (Web + Mobile with Capacitor)
- **Landing**: SvelteKit (Web only)
- **Backend**: Fastify
- **Shared**: Common UI components, utilities, and types
- **Monorepo**: NX for project management

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- pnpm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fullstack-app-template

# Install dependencies
pnpm install

# Build shared package first
pnpm --filter @fullstack-app-template/shared build

# Start all applications
pnpm dev
```

### Individual Development Servers

```bash
# Start landing page (port 4201)
pnpm dev:landing

# Start frontend app (port 4200)
pnpm dev:frontend

# Start backend API (port 4000)
pnpm dev:backend
```

## 📁 Project Structure

```
fullstack-app-template/
├── apps/
│   ├── backend/          # Fastify API server
│   │   └── src/
│   │       ├── app/      # Fastify routes and plugins
│   │       └── main.ts   # Entry point
│   │
│   ├── frontend/         # SvelteKit app (Web + Mobile)
│   │   ├── src/          # Source files
│   │   ├── capacitor.config.ts
│   │   └── vite.config.ts
│   │
│   └── landing/          # SvelteKit landing page (Web only)
│       └── src/          # Source files
│
├── packages/
│   └── shared/           # Shared code between apps
│       └── src/
│           ├── lib/
│           │   ├── components/  # Shared Svelte components
│           │   │   ├── Button.svelte
│           │   │   └── ApiDemo.svelte
│           │   ├── types/       # TypeScript interfaces
│           │   └── utils/       # Utility functions
│           └── index.ts         # Public API
│
└── package.json          # Root package.json
```

## 🔧 Configuration

### Tailwind CSS

Both `landing` and `frontend` apps use Tailwind CSS v4 for styling. The configuration files are:
- `apps/landing/tailwind.config.js`
- `apps/frontend/tailwind.config.js`

### Shared Components

The `shared` package contains reusable components and utilities:

#### Components
- **Button**: Customizable button with variants (primary, secondary, danger) and sizes (sm, md, lg)
- **ApiDemo**: Demo component showing API calls to the backend

#### Utilities
- **api.ts**: API client with health check and greeting functions

#### Types
- **ApiResponse**: Standard response format
- **HealthCheckResponse**: Backend health status
- **GreetingResponse**: Greeting message from backend

### Backend API

The backend provides these endpoints:
- `GET /health` - Check backend health status
- `GET /greet?name=...` - Get a personalized greeting

CORS is enabled for development.

### Frontend API Calls

The frontend uses the Vite proxy configuration to call the backend:
- Proxy: `/api/*` → `http://localhost:4000/*`

## 📱 Mobile Development (Capacitor)

The `frontend` app is configured with Capacitor for mobile development.

```bash
# Add platform
pnpm cap:add:android
pnpm cap:add:ios

# Sync changes
pnpm cap:sync

# Open in IDE
pnpm cap:open:android
pnpm cap:open:ios
```

## 🏗️ Build

```bash
# Build all applications
pnpm build

# Build specific app
pnpm build:landing
pnpm build:frontend
pnpm build:backend
```

## 🧪 Testing

```bash
# Run linting
pnpm lint

# Run tests
pnpm test
```

## 🔄 CI/CD

The GitHub Actions workflow uses pnpm for dependency management and NX for task distribution.

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all applications |
| `pnpm dev:landing` | Start landing page |
| `pnpm dev:frontend` | Start frontend app |
| `pnpm dev:backend` | Start backend API |
| `pnpm build` | Build all applications |
| `pnpm lint` | Run linting |
| `pnpm test` | Run tests |
| `pnpm cap:add:android` | Add Android platform |
| `pnpm cap:add:ios` | Add iOS platform |
| `pnpm cap:sync` | Sync Capacitor changes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
