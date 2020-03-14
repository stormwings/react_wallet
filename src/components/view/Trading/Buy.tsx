import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';

import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import Menu from './../../smart/Menu/Menu';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import CardHeader from './../../dumb/CardHeader/CardHeader';
import Separator from './../../dumb/Separator/Separator';
import Input from './../../dumb/Input/Input';
import Button from './../../dumb/Button/Button';
import { Operation, ResultOperation } from './../../../entities/Operation';
import { Wallet } from './../../../entities/Wallet';
import {
  fetchWallet,
  updateCurrency,
  createOperation,
  updatePublisherCurrency,
  removeTrading
} from './../../../redux/actions/walletActions';

const TradingBuy: FunctionComponent = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  // initialize operation type
  const { id }: any = useParams();
  let ChargeOperation: Operation = new Operation('trading_buy');
  // form information handler
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState({ error: false, message: '' });
  // sync with redux information
  const myWallet = useSelector((state: any) => state.wallet);
  // get trading and set
  const trading = myWallet.tradings.find((item: any) => item.id == id);
  let wallet: Wallet = new Wallet({ ...myWallet });
  // get user's wallet from api
  const {
    auth: { user_id }
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchWallet(user_id));
  }, []);

  const onSubmit = (values: any) => {
    // create Operation to send to backend
    let result: ResultOperation = ChargeOperation.createOperation(values.amount, values.finalAmount);
    const operation: any = wallet.newOperation(result, user_id);
    if (operation && myWallet.currency.USD >= trading.substractionAmount) {
      setError({ error: false, message: '' });
      setDisabled(true);
      dispatch(updateCurrency(user_id, operation.currency));
      dispatch(createOperation(operation.operation));
      dispatch(removeTrading(trading.id));

      // send publisher payment
      setTimeout(async () => {
        let FinishOperation: Operation = new Operation('trading_finish');
        let result_final: ResultOperation = FinishOperation.createOperation(values.finalAmount, values.amount);
        const finish_operation: any = wallet.newOperation(result_final, trading.publisher);
        dispatch(updatePublisherCurrency(trading.publisher, finish_operation.publisherMoney));
        dispatch(createOperation(finish_operation.operation));
        // redirect
        history.push('/trading/list');
      }, 1000);
    } else {
      setError({ error: true, message: 'Invalid number or insufficient funds' });
    }
  };

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={myWallet.currency.BTC} fiatValue={myWallet.currency.USD} />
      <ScreenContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
          <CardHeader content={ChargeOperation.title} subtitle={ChargeOperation.subtitle} icon={ChargeOperation.icon} className="header" />
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
          <Button className="--primary" content="Confirm" disabled={disabled} />
          <Separator />
          <Menu />
        </form>
      </ScreenContainer>
    </Fragment>
  );
};

export default TradingBuy;
