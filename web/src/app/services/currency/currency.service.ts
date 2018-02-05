import { Injectable } from '@angular/core';
import { Currency,Element } from "./currency";
import { CURRENCY_LIST } from "./mock-currency";

@Injectable()
export class CurrencyService {
    getCurrencies():Promise<Currency[]> {
        return Promise.resolve(CURRENCY_LIST)
    }
}
