import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useForm from 'react-hook-form';

import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import Menu from './../../smart/Menu/Menu';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import CardHeader from './../../dumb/CardHeader/CardHeader';
import Separator from './../../dumb/Separator/Separator';
import Input from './../../dumb/Input/Input';
import Button from './../../dumb/Button/Button';
import { fetchWallet, updateCurrency, createOperation, createTrading } from './../../../redux/actions/walletActions';
import { Operation, ResultOperation } from './../../../entities/Operation';
import { Trading } from './../../../entities/Trading';
import { Wallet } from './../../../entities/Wallet';

const TradingPublish: FunctionComponent = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  // initialize operation type
  let ChargeOperation: Operation = new Operation('trading_publish');
  // form information handler
  const [disabled, setDisabled] = useState(true);
  const [amountError, setAmountError] = useState({ error: false, message: '' });
  // sync with redux information
  const myWallet = useSelector((state: any) => state.wallet);
  let wallet: Wallet = new Wallet({ ...myWallet });
  // get user's wallet from api
  const {
    auth: { user_id }
  } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchWallet(user_id));
  }, []);

  const onSubmit = (values: any) => {
    let result: ResultOperation = ChargeOperation.createOperation(values.amount, values.finalAmount);
    const operation: any = wallet.newOperation(result);
    if (operation) {
      setAmountError({ error: false, message: '' });
      // create Trading and Operation to send to backend
      let TradingToCreate: Trading = new Trading(result, user_id);
      setDisabled(true);
      dispatch(updateCurrency(user_id, operation.currency));
      dispatch(createOperation(operation.operation));
      dispatch(createTrading(TradingToCreate));
      // redirect
      setTimeout(() => {
        history.push('/trading/list');
      }, 100);
    } else {
      setAmountError({ error: true, message: 'Invalid number or insufficient funds' });
    }
  };

  const onChange = (e: any, type: string) => {
    // block submit form
    const SwitchValidator = type === 'amount' ? /^\s*-?[0-9]\d*(\.\d{1,5})?\s*$/ : /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;
    SwitchValidator.test(e) ? setDisabled(false) : setDisabled(true);
  };

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={myWallet.currency.BTC} fiatValue={myWallet.currency.USD} />
      <ScreenContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
          <CardHeader content={ChargeOperation.title} subtitle={ChargeOperation.subtitle} icon={ChargeOperation.icon} className="header" />
          <Separator className="medium" />
          <div className="form--container">
            <Input
              id="publish_input"
              name="amount"
              labelText="Crypto amount to sell"
              error={amountError.error}
              autoComplete={false}
              errorText={amountError.message}
              onChange={(value: number | string) => onChange(value, 'amount')}
              inputRef={register}
              required
            />
            <Separator className="empty" />
            <Input
              id="publish_input_result"
              name="finalAmount"
              labelText="Set price in USD"
              autoComplete={false}
              onChange={(value: number | string) => onChange(value, 'finalAmount')}
              inputRef={register}
              required
            />
          </div>
          <Separator className="medium" />
          <Button content="Confirm" disabled={disabled} />
          <Separator />
          <Menu />
        </form>
      </ScreenContainer>
    </Fragment>
  );
};

export default TradingPublish;
