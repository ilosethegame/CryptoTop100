import { Component, OnInit, OnDestroy } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Subscription } from 'rxjs/Subscription';
import { CryptoCurrency, SortValues } from '../models';
import { element } from 'protractor';
import { sortValues } from '../models/datasets';

@Component({
    selector: 'crypto-table',
    templateUrl: './crypto-table.component.html',
    styleUrls: ['./crypto-table.component.css']

})
export class CryptoTableComponent implements OnInit{
    public top100Cryptos: CryptoCurrency[];
    public filteredCryptos: CryptoCurrency[];
    public sortValues: SortValues = sortValues;
    public priceUnit: string = 'USD';
    public top100CryptosSub: Subscription;

    constructor(public cryptoService: CryptoService) {
    }

    public ngOnInit(): void {
        this.getTop100Cryptos();
    }

    public ngOnDestroy(): void {
        this.top100CryptosSub.unsubscribe();
    }

    public getTop100Cryptos(): void {
        this.top100CryptosSub = this.cryptoService.getAllCryptos().subscribe((data?: CryptoCurrency[]) => {
            this.top100Cryptos = data;
            this.filteredCryptos = this.top100Cryptos;
        });
    }

    public listenFilterCryptos(e: CryptoCurrency[]): void {
        this.filteredCryptos = e; 
    }

    public listenPriceUnit(e: string): void {
        this.priceUnit = e;
    }

    public sortString(sortValue: boolean): void {
        if (sortValue) {
            this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                } else if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        } else {
            this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA > nameB) {
                    return -1;
                } else if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
        }
    }

    public sortNumeric(sortValue: boolean, key: string): void {
        if (sortValue) {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                return a[key] - b[key];
            });
        } else {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                return b[key] - a[key];
            });
        }
    }

}