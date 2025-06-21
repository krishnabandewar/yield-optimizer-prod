# AI-Driven Yield Vault Frontend

A modern Next.js frontend for the AI-Driven Yield Vault platform, built with TypeScript and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Wallet Integration**: MetaMask connection and wallet management
- **Real-time Dashboard**: Live yield tracking and analytics
- **Strategy Selection**: Interactive strategy comparison and selection
- **Deposit/Withdraw**: Seamless fund management interface
- **AI Insights**: Real-time AI recommendations and market analysis

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Ethers.js**: Ethereum blockchain interaction
- **Axios**: HTTP client for API calls

## Getting Started

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ConnectWallet.tsx  # Wallet connection
│   ├── Dashboard.tsx      # Main dashboard
│   ├── DepositForm.tsx    # Deposit/withdraw form
│   ├── Features.tsx       # Features section
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── StrategySelector.tsx # Strategy selection
│   └── YieldDisplay.tsx   # Yield analytics
├── types/                 # TypeScript type definitions
└── ...config files
```

## Key Components

### ConnectWallet
Handles MetaMask wallet connection and displays connection status.

### Dashboard
Main interface for managing deposits, selecting strategies, and viewing yields.

### StrategySelector
Interactive component for choosing between low-risk (Aave) and high-risk (Pendle) strategies.

### YieldDisplay
Real-time analytics showing current yields, projections, and AI insights.

## Styling

The project uses Tailwind CSS with custom components and utilities:

- **Custom color palette**: Primary, success, warning, and danger colors
- **Component classes**: Reusable button, card, and input styles
- **Animations**: Fade-in and slide-up animations for enhanced UX
- **Responsive design**: Mobile-first approach with responsive breakpoints

## Integration

The frontend is designed to integrate with:

- **Smart Contracts**: Vault, StrategyManager, and strategy contracts
- **AI Agent**: Real-time strategy recommendations and market analysis
- **Blockchain**: Ethereum/Sepolia testnet for transactions

## Development

- **Hot Reload**: Automatic page refresh during development
- **TypeScript**: Full type safety and IntelliSense
- **ESLint**: Code linting with Next.js recommended rules
- **Responsive**: Mobile-first responsive design

## Deployment

Build for production:
```bash
npm run build
npm start
```

The frontend can be deployed to Vercel, Netlify, or any static hosting platform.