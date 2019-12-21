import IconBitcoinPill from './../assets/svg/bitcoin_pill.svg';
import IconCash from './../assets/svg/cash_icon.svg';
import IconAdd from './../assets/svg/add.svg';
import CurrencyPrice from './CurrencyPrice';

export class Operation {
  public title: string;
  public subtitle: string;
  public icon: string;
  public type: string;
  public amountInUsd?: string;
  public currencyStart?: string | null;
  public currencyEnd?: string;
  public cryptoPrices: CurrencyPrice;
  public validator: any;

  constructor(type: string, cryptoPrices: CurrencyPrice = new CurrencyPrice()) {
    switch (type) {
      case 'sell_crypto':
        this.type = type;
        this.title = 'Sell bitcoin';
        this.subtitle = 'Charge USD Account';
        this.icon = IconCash;
        this.currencyStart = 'BTC';
        this.currencyEnd = 'USD';
        this.cryptoPrices = cryptoPrices;
        this.validator = /^\s*-?[0-9]\d*(\.\d{1,5})?\s*$/;
        break;
      case 'buy_crypto':
        this.type = type;
        this.title = 'Buy bitcoin';
        this.subtitle = 'Charge BTC Account';
        this.icon = IconBitcoinPill;
        this.currencyStart = 'USD';
        this.currencyEnd = 'BTC';
        this.cryptoPrices = cryptoPrices;
        this.validator = /^\s*-?[1-9]\d*(\.\d{1,5})?\s*$/;
        break;
      default:
        this.type = 'buy_fiat';
        this.title = 'Charge balance';
        this.subtitle = 'Charge USD Account';
        this.icon = IconAdd;
        this.currencyStart = null;
        this.currencyEnd = 'USD';
        this.cryptoPrices = cryptoPrices;
        this.validator = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;
        break;
    }
  }

  public transformCurrency(amount: string) {
    switch (this.currencyEnd) {
      case 'BTC':
        return (parseFloat(amount) / this.cryptoPrices.BTC).toFixed(5);
      case 'USD':
        if (this.currencyStart) {
          return (parseFloat(amount) * this.cryptoPrices.BTC).toFixed(2);
        }
      default:
        return amount;
    }
  }

  public createOperation(amount: number | string, resultAmount: number | string) {
    const date = new Date();
    const formatDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()},${date.getHours()}:${date.getMinutes()}`;

    return {
      type: this.type,
      date: formatDate,
      currencyStart: this.currencyStart,
      currencyEnd: this.currencyEnd,
      substractionAmount: amount,
      ingressAmount: resultAmount
    };
  }
}
