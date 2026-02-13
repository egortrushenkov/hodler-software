import type { Rate } from "@/types/Rate"

const COIN_IDS = [
    'bitcoin', 'ethereum', 'binancecoin', 'solana', 'ripple',
    'dogecoin', 'cardano', 'tron', 'avalanche-2', 'the-open-network'
].join(',')
const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS}`

export async function fetchApiRate(): Promise<Rate> {
    try {
        const res = await fetch(API_URL, {next:{revalidate: 10}});
        if (!res.ok) {
            throw new Error(`Failed to fetch coin market data: ${res.statusText}`)
        }
        return res.json()
    }
    catch (error) {
        console.error(error)
        return [] // Пусто
    }
}