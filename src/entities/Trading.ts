export class Trading {
  public publisher: number | string;
  public currencyStart: string | null;
  public currencyEnd: string | null;
  public type: string;
  public date: string;
  public substractionAmount: string | null;
  public ingressAmount: string;

  constructor(currency: any, userId: number) {
    this.publisher = userId;
    this.type = currency.type;
    this.date = currency.date;
    // changeds because its a buy
    this.currencyStart = currency.currencyEnd;
    this.currencyEnd = currency.currencyStart;
    this.substractionAmount = currency.ingressAmount;
    this.ingressAmount = currency.substractionAmount;
  }
}
