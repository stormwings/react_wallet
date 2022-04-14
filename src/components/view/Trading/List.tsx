import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Style.scss'

import { fetchWallet } from './../../../redux/actions/walletActions'

import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer'
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer'
import Separator from './../../../components/dumb/Separator/Separator'
import StatusHeader from './../../smart/StatusHeader/StatusHeader'
import ListItems from './../../smart/ListItems/ListItems'
import Menu from './../../smart/Menu/Menu'
import Button from './../../dumb/Button/Button'
import CardHeader from './../../dumb/CardHeader/CardHeader'
import IconTradingMoney from './../../../assets/svg/trading_money.svg'

const TradingList = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {
        wallet: myWallet,
        auth: { user_id },
    } = useSelector((state: any) => state)

    React.useEffect(() => {
        dispatch(fetchWallet(user_id))
    }, [dispatch, user_id])

    return (
        <>
            <HeaderContainer />
            <StatusHeader
                cryptoValue={myWallet.currency.BTC}
                fiatValue={myWallet.currency.USD}
            />
            <ScreenContainer>
                <div style={{ width: '95%', display: 'flex' }}>
                    <CardHeader
                        content="User Trading"
                        subtitle="Click to buy"
                        icon={IconTradingMoney}
                        className="header"
                    />
                    <div
                        className="card--header__currencies"
                        style={{
                            width: '200px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            className="--primary"
                            content="Publish"
                            onClick={() => history.push('/trading/publish')}
                        />
                    </div>
                </div>
                <Separator className="medium" />
                <ListItems
                    items={myWallet.tradings}
                    onClick={(element: any) =>
                        history.push(`/trading/buy/${element}`)
                    }
                />
                <Separator />
                <Menu />
            </ScreenContainer>
        </>
    )
}

export default TradingList
