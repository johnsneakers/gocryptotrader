import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Currency } from "./../../services/currency/currency";
import { CurrencyService } from "./../../services/currency/currency.service"
import { ConfigService } from "./../../services/config/config.service"

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
  providers:[CurrencyService, ConfigService]
})

export class CurrencyListComponent implements OnInit {
  constructor(private currencys:CurrencyService, private confsrvs:ConfigService) {}
  currency_list : Currency[];
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  getCurrencies():void {
    this.currencys.getCurrencies().then(currency_list => this.currency_list = currency_list);
  }

  getCoins():void {
    // this.confsrvs.getCoins();
  }

  ngOnInit() {
    this.getCurrencies();
    this.getCoins();
  }

}
