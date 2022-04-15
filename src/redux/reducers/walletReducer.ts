import { AnyAction } from 'redux'

import { ResultOperation } from './../../entities/Operation'

import { Trading, CurrencyPrice } from './../../entities'

import * as types from './../types'

const INITIAL_STATE = {
    currency: {
        BTC: 0,
        USD: 0,
    } as CurrencyPrice,
    operations: [] as ResultOperation[],
    tradings: [] as Trading[],
}

export default function (state = INITIAL_STATE, action: AnyAction) {
    switch (action.type) {
        case types.WALLET_LOAD: {
            const { wallet, operations, tradings } = action.payload

            return {
                currency: wallet,
                operations: operations,
                tradings: tradings,
            }
        }
        case types.WALLET_UPDATE: {
            const { BTC, USD } = action.payload
            return {
                ...state,
                currency: { BTC, USD },
            }
        }
        default:
            return state
    }
}
