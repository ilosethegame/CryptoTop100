import { PriceCoordinates } from './';

export class BitcoinPrice {
    public status: string;
    public name: string;
    public unit: string;
    public period: string;
    public description: string;
    public values: any[];

    constructor(data?: any) {
        const defaults = {
            values: [],
            ...data
        }

        this.description = defaults.description;
        this.name = defaults.name;
        this.unit = defaults.unit;
        this.period = defaults.period;
        this.description = defaults.description;
        this.values = defaults.values;
    }
}