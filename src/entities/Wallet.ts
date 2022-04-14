import { ResultOperation } from './Operation'

export class WalletCurrency {
    public BTC: number
    public USD: number

    constructor(btc: number, usd: number) {
        this.BTC = btc
        this.USD = usd
    }
}

export class Wallet {
    public userId: number
    public currency: WalletCurrency
    public operations: Array<ResultOperation>
    public tradings: Array<any>

    constructor(wallet: any, userId: number = 1) {
        this.userId = userId
        this.currency = new WalletCurrency(
            wallet.currency.BTC,
            wallet.currency.USD
        )
        this.operations = [...wallet.operations]
        this.tradings = [...wallet.tradings]
    }

    public newOperation(operationResult: any, otherUserId: any = null) {
        // check owner's operation
        operationResult.user = otherUserId ? otherUserId : this.userId

        // return Operation to save in the wallet
        // * return false if incorrect data *
        switch (operationResult.operation_type) {
            case 'buy_crypto': {
                const usdToSell = parseFloat(operationResult.substractionAmount)
                const btcToBuy = parseFloat(operationResult.ingressAmount)

                if (usdToSell <= this.currency.USD) {
                    this.currency.USD = parseFloat(
                        (this.currency.USD - usdToSell).toFixed(2)
                    )
                    this.currency.BTC = parseFloat(
                        (this.currency.BTC + btcToBuy).toFixed(5)
                    )

                    return {
                        currency: this.currency,
                        operation: operationResult,
                    }
                } else {
                    return false
                }
            }
            case 'trading_buy': {
                const usdToSell = parseFloat(operationResult.substractionAmount)
                const btcToBuy = parseFloat(operationResult.ingressAmount)

                if (usdToSell <= this.currency.USD) {
                    this.currency.USD = parseFloat(
                        (this.currency.USD - usdToSell).toFixed(2)
                    )
                    this.currency.BTC = parseFloat(
                        (this.currency.BTC + btcToBuy).toFixed(5)
                    )

                    return {
                        currency: this.currency,
                        operation: operationResult,
                    }
                } else {
                    return false
                }
            }
            case 'sell_crypto': {
                const btcToSell = parseFloat(operationResult.substractionAmount)
                const usdToBuy = parseFloat(operationResult.ingressAmount)

                if (btcToSell <= this.currency.BTC) {
                    this.currency.BTC = parseFloat(
                        (this.currency.BTC - btcToSell).toFixed(5)
                    )
                    this.currency.USD = parseFloat(
                        (this.currency.USD + usdToBuy).toFixed(2)
                    )

                    return {
                        currency: this.currency,
                        operation: operationResult,
                    }
                } else {
                    return false
                }
            }
            case 'trading_publish': {
                // const btcPrice = parseFloat(operationResult.ingressAmount);
                const btcToSell = parseFloat(operationResult.substractionAmount)

                if (btcToSell <= this.currency.BTC) {
                    this.currency.BTC = parseFloat(
                        (this.currency.BTC - btcToSell).toFixed(5)
                    )

                    return {
                        currency: this.currency,
                        operation: operationResult,
                    }
                } else {
                    return false
                }
            }
            case 'trading_finish': {
                const usdToCharge = parseFloat(operationResult.ingressAmount)
                // this.currency.USD = parseFloat((this.currency.USD + usdToCharge).toFixed(2));

                return {
                    publisherMoney: usdToCharge,
                    operation: operationResult,
                }
            }
            case 'buy_fiat':
            default: {
                const usdToCharge = parseFloat(operationResult.ingressAmount)
                this.currency.USD = parseFloat(
                    (this.currency.USD + usdToCharge).toFixed(2)
                )
                return { currency: this.currency, operation: operationResult }
            }
        }
    }
}
