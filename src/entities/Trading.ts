export class Trading {
  public currencyStart: string | null;
  public currencyEnd: string | null;
  public type: string;
  public date: string;
  public substractionAmount: string | null;
  public ingressAmount: string;

  constructor(currency: any) {
    this.currencyStart = currency.currencyStart;
    this.currencyEnd = currency.currencyEnd;
    this.type = currency.type;
    this.date = currency.date;
    // changeds because its a buy
    this.substractionAmount = currency.ingressAmount;
    this.ingressAmount = currency.substractionAmount;
  }
}
