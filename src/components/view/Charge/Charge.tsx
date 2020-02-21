import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import useForm from 'react-hook-form';

import { fetchWallet, createOperation, updateCurrency } from './../../../redux/actions/walletActions';
import { Operation, ResultOperation } from './../../../entities/Operation';
import { Wallet } from './../../../entities/Wallet';

import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import Menu from './../../smart/Menu/Menu';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import CardHeader from './../../dumb/CardHeader/CardHeader';
import Separator from './../../dumb/Separator/Separator';
import Input from './../../dumb/Input/Input';
import Button from './../../dumb/Button/Button';

const Charge: FunctionComponent = () => {
  const {
    auth: { user_id }
  } = useSelector((state: any) => state);
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // initialize operation type
  const { type }: any = useParams();
  let ChargeOperation: Operation = new Operation(type);
  // form information handler
  const [newAmount, setAmount] = useState('Your new amount');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({ error: false, message: '' });
  // sync with redux information
  const myWallet = useSelector((state: any) => state.wallet);
  let wallet: Wallet = new Wallet({ ...myWallet }, user_id);
  // get user's wallet from api
  useEffect(() => {
    dispatch(fetchWallet(user_id));
  }, []);

  const onSubmit = (values: any) => {
    values.finalAmount = newAmount;
    // create Operation to send to backend
    let result: ResultOperation = ChargeOperation.createOperation(values.amount, values.finalAmount);

    const operation: any = wallet.newOperation(result);

    if (operation) {
      dispatch(updateCurrency(user_id, operation.currency));
      dispatch(createOperation(operation.operation));
      setDisabled(true);
      setError({ error: false, message: '' });
      // redirect
      setTimeout(() => {
        history.push('/');
      }, 100);
    } else {
      setError({ error: true, message: 'Invalid number or insufficient funds' });
    }
  };

  const onChange = (value: string) => {
    if (ChargeOperation.validator.test(value)) {
      // enable form to submit
      setDisabled(false);
      // transform to selected currency and set
      const valueInNewCurrency: any = ChargeOperation.transformCurrency(value);
      setAmount(valueInNewCurrency);
    } else {
      // block submit form
      setDisabled(true);
      setAmount('Invalid amount');
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
          {/* generate the inputs depending the router */}
          {type === 'sell_crypto' && (
            <SellOperationForm error={error} onChange={onChange} register={register} newAmount={newAmount} setAmount={setAmount} />
          )}
          {type === 'buy_crypto' && (
            <BuyOperationForm error={error} onChange={onChange} register={register} newAmount={newAmount} setAmount={setAmount} />
          )}
          {type === 'buy_fiat' && (
            <ChargeOperationForm error={error} onChange={onChange} register={register} newAmount={newAmount} setAmount={setAmount} />
          )}
          <Separator className="medium" />
          <Button content="Confirm" disabled={disabled} />
          <Separator />
          <Menu />
        </form>
      </ScreenContainer>
    </Fragment>
  );
};

export default Charge;

const SellOperationForm = ({ error, onChange, register, newAmount, setAmount }: any) => {
  useEffect(() => {
    setAmount('Your new amount');
  }, []);

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
      <Input id="charge_input_result" 
        name="finalAmount" 
        labelText="Your BTC to charge" 
        placeholder={newAmount} 
        disabled inputRef={register} 
      />
    </div>
  );
};

const BuyOperationForm = ({ error, onChange, register, newAmount, setAmount }: any) => {
  useEffect(() => {
    setAmount('Your purchase in BTC');
  }, []);

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
        inputRef={register} />
    </div>
  );
};

const ChargeOperationForm = ({ error, onChange, register, newAmount, setAmount }: any) => {
  useEffect(() => {
    setAmount('Your charge in USD');
  }, []);

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
  );
};
