export class Trading {
    public id: number | string
    public publisher: number | string
    public currencyStart: string | null
    public currencyEnd: string | null
    public trading_type: string
    public date: string
    public substractionAmount: string | null
    public ingressAmount: string

    constructor(currency: any, userId: number) {
        this.id = userId
        this.publisher = userId
        this.trading_type = currency.operation_type
        this.date = currency.date
        // changeds because its a buy
        this.currencyStart = currency.currencyEnd
        this.currencyEnd = currency.currencyStart
        this.substractionAmount = currency.ingressAmount
        this.ingressAmount = currency.substractionAmount
    }
}
