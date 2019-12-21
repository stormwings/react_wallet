export class Wallet {
  public userId: number;
  public currency: object;

  constructor() {
    this.userId = 1;
    this.currency = {
      BTC: 0,
      USD: 450
    };
  }
}
