import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useForm from 'react-hook-form'

import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer'
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer'
import Menu from './../../smart/Menu/Menu'
import StatusHeader from './../../smart/StatusHeader/StatusHeader'
import CardHeader from './../../dumb/CardHeader/CardHeader'
import Separator from './../../dumb/Separator/Separator'
import Input from './../../dumb/Input/Input'
import Button from './../../dumb/Button/Button'
import { Operation, ResultOperation } from './../../../entities/Operation'
import { Wallet } from './../../../entities/Wallet'
import { fetchWallet } from './../../../redux/actions/walletActions'
import { Trading } from '../../../entities'

type TradingParams = {
    id: string
}

const TradingBuy = () => {
    const {
        auth: { user_id },
        wallet: myWallet,
    } = useSelector((state: any) => state)

    const dispatch = useDispatch()
    const history = useHistory()

    const { register, handleSubmit } = useForm()
    const { id } = useParams<TradingParams>()

    const ChargeOperation: Operation = new Operation('trading_buy')

    const [disabled, setDisabled] = React.useState(false)
    const [error, setError] = React.useState({ error: false, message: '' })

    const findTradingById = (trading: Trading) => trading.id === id

    const trading = myWallet.tradings.find(findTradingById)

    const wallet: Wallet = new Wallet({ ...myWallet })

    React.useEffect(() => {
        dispatch(fetchWallet(user_id))
    }, [user_id, dispatch])

    const onSubmit = (values: any) => {
        // create Operation to send to backend
        let result: ResultOperation = ChargeOperation.createOperation(
            values.amount,
            values.finalAmount
        )
        const operation: any = wallet.newOperation(result, user_id)
        if (operation && myWallet.currency.USD >= trading.substractionAmount) {
            setError({ error: false, message: '' })
            setDisabled(true)
            console.log(user_id, operation.currency)
            console.log(operation.operation)
            console.log(trading.id)

            console.log('send publisher payment')
            setTimeout(async () => {
                let FinishOperation: Operation = new Operation('trading_finish')
                let result_final: ResultOperation =
                    FinishOperation.createOperation(
                        values.finalAmount,
                        values.amount
                    )
                const finish_operation: any = wallet.newOperation(
                    result_final,
                    trading.publisher
                )
                console.log(trading.publisher, finish_operation.publisherMoney)
                console.log(finish_operation.operation)
                // redirect
                history.push('/trading/list')
            }, 1000)
        } else {
            setError({
                error: true,
                message: 'Invalid number or insufficient funds',
            })
        }
    }

    return (
        <>
            <HeaderContainer />
            <StatusHeader
                cryptoValue={myWallet.currency.BTC}
                fiatValue={myWallet.currency.USD}
            />
            <ScreenContainer>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ display: 'contents' }}
                >
                    <CardHeader
                        content={ChargeOperation.title}
                        subtitle={ChargeOperation.subtitle}
                        icon={ChargeOperation.icon}
                        className="header"
                    />
                    <Separator className="medium" />
                    {trading && (
                        <div className="form--container">
                            <Input
                                id="buy_input"
                                name="amount"
                                disabled
                                defaultValue={trading.substractionAmount}
                                labelText="Amount to pay"
                                error={error.error}
                                autoComplete={false}
                                errorText={error.message}
                                inputRef={register}
                            />
                            <Separator className="empty" />
                            <Input
                                id="buy_input_result"
                                name="finalAmount"
                                labelText="Your new amount"
                                defaultValue={trading.ingressAmount}
                                disabled
                                inputRef={register}
                            />
                        </div>
                    )}
                    <Separator className="medium" />
                    <Button
                        className="--primary"
                        content="Confirm"
                        disabled={disabled}
                    />
                    <Separator />
                    <Menu />
                </form>
            </ScreenContainer>
        </>
    )
}

export default TradingBuy
