import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CryptoService } from '../services/crypto.service';
import { BitcoinMarket } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public bitcoinMarketCap: BitcoinMarket = new BitcoinMarket();
  public bitcoinStatsSub: Subscription;

  constructor(public cryptoService: CryptoService) {
  }

  public ngOnDestroy(): void {
    this.bitcoinStatsSub.unsubscribe();
  }

  public ngOnInit(): void {
    this.getBitcoinStats();
  }

  public getBitcoinStats(): void {
    this.bitcoinStatsSub = this.cryptoService.getBitcoinmarketCap().subscribe((data: BitcoinMarket) => {
      this.bitcoinMarketCap = data;
    });
  }

}