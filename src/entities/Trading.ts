export class Trading {
  public id: number | string;
  public publisher: number | string;
  public currencyStart: string | null;
  public currencyEnd: string | null;
  public type: string;
  public date: string;
  public substractionAmount: string | null;
  public ingressAmount: string;

  constructor(currency: any) {
    this.id = Date.now();
    this.publisher = 3;
    this.type = currency.type;
    this.date = currency.date;
    // changeds because its a buy
    this.currencyStart = currency.currencyEnd;
    this.currencyEnd = currency.currencyStart;
    this.substractionAmount = currency.ingressAmount;
    this.ingressAmount = currency.substractionAmount;
  }
}
