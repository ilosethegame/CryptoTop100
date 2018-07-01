export class BitcoinMarket {
    public bitcoin_percentage_of_market_cap: number;
    public active_currencies: number;
    public total_24h_volume_usd: number;
    public active_markets: number;
    public total_market_cap_usd: number;

    constructor(data?: any) {
        const defaults = {
            ...data
        };
        this.bitcoin_percentage_of_market_cap = defaults.bitcoin_percentage_of_market_cap;
        this.active_currencies = defaults.active_currencies;
        this.total_24h_volume_usd = defaults.total_24h_volume_usd;
        this.active_markets = defaults.active_markets;
        this.total_market_cap_usd = defaults.total_market_cap_usd;
    }
}