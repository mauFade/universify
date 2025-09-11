# Universify

AI-Powered Cryptocurrency Trading Platform

## Setup Instructions

### 1. Environment Configuration

First, clone the environment files:
```bash
cp .env.example .env
cp .env.local.example .env.local
```

### 2. Clerk Authentication Setup

Generate and apply Clerk environment variables in `.env.local` following the [Clerk documentation](https://dashboard.clerk.com/).

### 3. Database Setup

#### Prerequisites
- Docker installed and running
- Unix environment (Linux/macOS)

#### First-time setup
Make the database script executable:
```bash
chmod +x start-database.sh
```

Start the database:
```bash
./start-database.sh
```

Apply database migrations:
```bash
pnpm db:migrate
```

### 4. Schema Changes

When modifying the database schema:
```bash
pnpm db:generate  # Generate migrations
pnpm db:migrate   # Apply migrations
```

### 5. Development

Start the development server:
```bash
pnpm dev
```

Access the application at [localhost:3000](http://localhost:3000)

## Adding Shadcn Components

```bash
pnpm dlx shadcn@latest add [component_name]
```
