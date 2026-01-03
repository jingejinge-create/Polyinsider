import { PolymarketTrade } from './types';

const DATA_API = 'https://data-api.polymarket.com';

/**
 * Fetch recent trades from Polymarket Data API
 * No authentication required!
 */
export async function fetchRealTrades(options?: {
  limit?: number;
  minSize?: number;
}): Promise<PolymarketTrade[]> {
  const limit = options?.limit || 100;
  const minSize = options?.minSize || 0;
  
  try {
    let url = `${DATA_API}/trades?limit=${limit}&takerOnly=true`;
    
    if (minSize > 0) {
      url += `&filterType=CASH&filterAmount=${minSize}`;
    }
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 30 },
    });
    
    if (!response.ok) {
      console.error(`Data API error: ${response.status}`);
      return [];
    }
    
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error('Error fetching trades:', error);
    return [];
  }
}

/**
 * Fetch trades for a specific wallet
 */
export async function fetchWalletTrades(walletAddress: string, limit: number = 50): Promise<PolymarketTrade[]> {
  try {
    const url = `${DATA_API}/trades?user=${walletAddress}&limit=${limit}`;
    
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 60 },
    });
    
    if (!response.ok) return [];
    
    return await response.json() || [];
  } catch (error) {
    console.error('Error fetching wallet trades:', error);
    return [];
  }
}
