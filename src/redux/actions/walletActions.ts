// import Axios from 'axios'
import { Dispatch } from 'redux'
import * as types from './../types'
// import * as urls from './../../helpers/api'
// import { buildTokenHeader } from './../../helpers/functions'

import server from './../server.json'

export const loadWallet = (payload: object) => ({
    type: types.WALLET_LOAD,
    payload,
})

export const updateWallet = (payload: object) => ({
    type: types.WALLET_UPDATE,
    payload,
})

export const errorWallet = (payload: object) => ({
    type: types.WALLET_ERROR,
    payload,
})

export const walletLoading = () => ({ type: types.WALLET_LOADING })

export const fetchWallet = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(walletLoading())
    try {
        // const headers = buildTokenHeader()

        // const wallet = await Axios.get(urls.URL_WALLET(userId), { headers })
        // const tradings = await Axios.get(urls.URL_TRADINGS, { headers })
        // const operations = await Axios.get(urls.URL_OPERATIONS, { headers })

        const wallet = server.wallet
        const tradings = server.tradings
        const operations = server.operation

        await dispatch(loadWallet({ wallet, operations, tradings }))
    } catch (error) {
        const { message } = error as Error
        dispatch(errorWallet({ message_error: message }))
    }
}

export const updateCurrency =
    (userId: number, body: any) => async (dispatch: Dispatch) => {
        try {
            // const headers = buildTokenHeader()

            // const { data } = await Axios.put(urls.URL_WALLET(userId), body, {
            //     headers,
            // })

            const wallet = server.wallet

            dispatch(updateWallet(wallet))
        } catch (error) {
            const { message } = error as Error
            dispatch(errorWallet({ message_error: message }))
        }
    }

export const createOperation = (body: object) => async (dispatch: Dispatch) => {
    try {
        // const headers = buildTokenHeader()
        // await Axios.post(urls.URL_OPERATIONS, body, { headers })
    } catch (error) {
        const { message } = error as Error
        dispatch(errorWallet({ message_error: message }))
    }
}

export const createTrading = (body: object) => async (dispatch: Dispatch) => {
    try {
        // const headers = buildTokenHeader()
        // await Axios.post(urls.URL_TRADINGS, body, { headers })
    } catch (error) {
        const { message } = error as Error

        dispatch(errorWallet({ message_error: message }))
    }
}

export const removeTrading =
    (tradingId: number) => async (dispatch: Dispatch) => {
        try {
            // const headers = buildTokenHeader()
            // await Axios.delete(urls.URL_TRADING(tradingId), { headers })
        } catch (error) {
            const { message } = error as Error
            dispatch(errorWallet({ message_error: message }))
        }
    }

export const updatePublisherCurrency =
    (publisherId: number, publisherMoney: number) =>
    async (dispatch: Dispatch) => {
        try {
            // const headers = buildTokenHeader()
            // let {
            // data: { USD },
            // } = await Axios.get(urls.URL_WALLET(publisherId), { headers })
            // USD += publisherMoney
            // await Axios.put(urls.URL_WALLET(publisherId), { USD }, { headers })
        } catch (error) {
            const { message } = error as Error
            dispatch(errorWallet({ message_error: message }))
        }
    }
