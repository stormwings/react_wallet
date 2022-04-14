import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import useForm from 'react-hook-form'

import { fetchWallet } from './../../../redux/actions/walletActions'
import { Operation, ResultOperation } from './../../../entities/Operation'
import { Wallet } from './../../../entities/Wallet'

import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer'
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer'
import Menu from './../../smart/Menu/Menu'
import StatusHeader from './../../smart/StatusHeader/StatusHeader'
import CardHeader from './../../dumb/CardHeader/CardHeader'
import Separator from './../../dumb/Separator/Separator'
import Input from './../../dumb/Input/Input'
import Button from './../../dumb/Button/Button'

type ChargeParams = {
    type: string
}

const Charge = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const { type: operationType } = useParams<ChargeParams>()

    const {
        auth: { user_id },
        wallet: userWallet,
    } = useSelector((state: any) => state)

    let ChargeOperation: Operation = new Operation(operationType)

    const [newAmount, setAmount] = React.useState('Your new amount')
    const [disabled, setDisabled] = React.useState(true)
    const [error, setError] = React.useState({ error: false, message: '' })

    const wallet: Wallet = new Wallet({ ...userWallet }, user_id)

    React.useEffect(() => {
        dispatch(fetchWallet(user_id))
    }, [dispatch, user_id])

    const onSubmit = (values: any) => {
        values.finalAmount = newAmount
        // create Operation to send to backend
        let result: ResultOperation = ChargeOperation.createOperation(
            values.amount,
            values.finalAmount
        )

        const operation: any = wallet.newOperation(result)

        if (operation) {
            console.log(user_id, operation.currency)
            console.log(operation.operation)
            setDisabled(true)
            setError({ error: false, message: '' })
            // redirect
            setTimeout(() => {
                history.push('/')
            }, 100)
        } else {
            setError({
                error: true,
                message: 'Invalid number or insufficient funds',
            })
        }
    }

    const onChange = React.useCallback(
        (value: string) => {
            if (ChargeOperation.validator.test(value)) {
                // enable form to submit
                setDisabled(false)
                // transform to selected currency and set
                const valueInNewCurrency: any =
                    ChargeOperation.transformCurrency(value)
                setAmount(valueInNewCurrency)
            } else {
                // block submit form
                setDisabled(true)
                setAmount('Invalid amount')
            }
        },
        [ChargeOperation]
    )

    const FormBodies: any = {
        sell_crypto: SellOperationForm,
        buy_crypto: BuyOperationForm,
        buy_fiat: ChargeOperationForm,
    }

    const FormBody = FormBodies[operationType]

    return (
        <>
            <HeaderContainer />
            <StatusHeader
                cryptoValue={userWallet.currency.BTC}
                fiatValue={userWallet.currency.USD}
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
                    <FormBody
                        error={error}
                        onChange={onChange}
                        register={register}
                        newAmount={newAmount}
                        setAmount={setAmount}
                    />
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

export default Charge

const SellOperationForm = ({
    error,
    onChange,
    register,
    newAmount,
    setAmount,
}: any) => {
    React.useEffect(() => {
        setAmount('Your new amount')
    }, [setAmount])

    return (
        <div className="form--container">
            <Input
                id="charge_input"
                name="amount"
                labelText='Set the amount "in BTC" to sell'
                error={error.error}
                autoComplete={false}
                errorText={error.message}
                onChange={(value: string) => onChange(value)}
                inputRef={register}
            />
            <Separator className="empty" />
            <Input
                id="charge_input_result"
                name="finalAmount"
                labelText="Your BTC to charge"
                placeholder={newAmount}
                disabled
                inputRef={register}
            />
        </div>
    )
}

const BuyOperationForm = ({
    error,
    onChange,
    register,
    newAmount,
    setAmount,
}: any) => {
    React.useEffect(() => {
        setAmount('Your purchase in BTC')
    }, [setAmount])

    return (
        <div className="form--container">
            <Input
                id="charge_input"
                name="amount"
                labelText='Set the amount "in USD" to pay'
                error={error.error}
                autoComplete={false}
                errorText={error.message}
                onChange={(value: string) => onChange(value)}
                inputRef={register}
            />
            <Separator className="empty" />
            <Input
                id="charge_input_result"
                name="finalAmount"
                labelText="BTC to buy"
                placeholder={newAmount}
                disabled
                inputRef={register}
            />
        </div>
    )
}

const ChargeOperationForm = ({
    error,
    onChange,
    register,
    newAmount,
    setAmount,
}: any) => {
    React.useEffect(() => {
        setAmount('Your charge in USD')
    }, [setAmount])

    return (
        <div className="form--container">
            <Input
                id="charge_input"
                name="amount"
                labelText='Set the amount "in USD" to charge'
                error={error.error}
                autoComplete={false}
                errorText={error.message}
                onChange={(value: string) => onChange(value)}
                inputRef={register}
            />
            <Separator className="empty" />
            <Input
                id="charge_input_result"
                name="finalAmount"
                labelText="Your new amount"
                placeholder={newAmount}
                disabled
                inputRef={register}
            />
        </div>
    )
}
