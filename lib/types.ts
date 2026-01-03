// Polymarket API Response Types
export interface PolymarketTrade {
  proxyWallet: string;
  side: 'BUY' | 'SELL';
  asset: string;
  conditionId: string;
  size: number;
  price: number;
  timestamp: number;
  title: string;
  slug: string;
  icon?: string;
  eventSlug: string;
  outcome: string;
  outcomeIndex: number;
  name?: string;
  pseudonym?: string;
  transactionHash?: string;
}

// Insider Scoring Types
export interface InsiderScores {
  newness: number;
  concentration: number;
  timing: number;
  sizeVsLiquidity: number;
  winRate: number;
  specialization: number;
  composite: number;
}

// Analyzed Trade (what we display)
export interface AnalyzedTrade {
  id: string;
  timestamp: string;
  market: string;
  marketSlug: string;
  conditionId: string;
  side: 'YES' | 'NO';
  size: number;
  price: number;
  wallet: string;
  txHash?: string;
  outcome: string;
  insiderScore: number;
  scores: InsiderScores;
  walletAge: number;
  marketsTraded: number;
}

// Filter State
export interface FilterState {
  minSize: number;
  minScore: number;
  timeRange: '1h' | '6h' | '24h' | '7d' | '30d';
  side?: 'YES' | 'NO';
}

// Dashboard Stats
export interface Stats {
  totalAnalyzed: number;
  highScoreCount: number;
  totalVolume: number;
  marketsTracked: number;
}
