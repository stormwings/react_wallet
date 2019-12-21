import { ResultOperation } from './Operation';

export class WalletCurrency {
  public BTC: number;
  public USD: number;

  constructor(btc: number, usd: number) {
    this.BTC = btc;
    this.USD = usd;
  }
}

export class Wallet {
  public userId: number;
  public currency: WalletCurrency;
  public operations: Array<ResultOperation>;

  constructor(wallet: any) {
    this.userId = wallet.userId;
    this.currency = new WalletCurrency(wallet.currency.BTC, wallet.currency.USD);
    this.operations = [...wallet.operations];
  }

  public newOperation(operationResult: any) {
    switch (operationResult.type) {
      case 'buy_crypto':
        const usdToSell = parseFloat(operationResult.substractionAmount);
        const btcToBuy = parseFloat(operationResult.ingressAmount);

        if (usdToSell <= this.currency.USD) {
          this.currency.USD = parseFloat((this.currency.USD - usdToSell).toFixed(2));
          this.currency.BTC = parseFloat((this.currency.BTC + btcToBuy).toFixed(5));

          let newOperationsArray = [operationResult, ...this.operations];
          this.operations = newOperationsArray;
          return true;
        } else {
          return false;
        }
      case 'sell_crypto':
        const btcToSell = parseFloat(operationResult.substractionAmount);
        const usdToBuy = parseFloat(operationResult.ingressAmount);

        if (btcToSell <= this.currency.BTC) {
          this.currency.BTC = parseFloat((this.currency.BTC - btcToSell).toFixed(5));
          this.currency.USD = parseFloat((this.currency.USD + usdToBuy).toFixed(2));

          let newOperationsArray = [operationResult, ...this.operations];
          this.operations = newOperationsArray;
          return true;
        } else {
          return false;
        }
      case 'buy_fiat':
      default:
        const usdToCharge = parseFloat(operationResult.ingressAmount);
        this.currency.USD = parseFloat((this.currency.USD + usdToCharge).toFixed(2));

        let newOperationsArray = [operationResult, ...this.operations];
        this.operations = newOperationsArray;
        return true;
    }
  }
}
