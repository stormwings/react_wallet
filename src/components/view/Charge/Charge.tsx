import React, { FunctionComponent, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import useForm from 'react-hook-form';

import ScreenContainer from '../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import Menu from '../../smart/Menu/Menu';
import StatusHeader from '../../smart/StatusHeader/StatusHeader';
import CardHeader from '../../dumb/CardHeader/CardHeader';
import Separator from '../../dumb/Separator/Separator';
import Input from '../../dumb/Input/Input';
import Button from '../../dumb/Button/Button';

import { Operation } from '../../../entities/Operation';
import { Wallet } from '../../../entities/Wallet';

const Charge: FunctionComponent = () => {
  const { type }: any = useParams();
  const { register, handleSubmit } = useForm();
  let ChargeOperation: Operation = new Operation(type);

  // form information handler
  const [newAmount, setAmount] = useState('Your new amount');
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (values: any) => {
    values.finalAmount = newAmount;
    // create Operation and send to backend
    console.log(ChargeOperation.createOperation(values.amount, values.finalAmount));
  };

  const onChange = (e: any) => {
    if (ChargeOperation.validator.test(e)) {
      // update amount
      setDisabled(false);
      // transform to selected currency
      const valueInNewCurrency: any = ChargeOperation.transformCurrency(e);
      setAmount(valueInNewCurrency);
    } else {
      // block submit
      setDisabled(true);
      setAmount('Invalid amount');
    }
  };

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader />
      <ScreenContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
          <CardHeader content={ChargeOperation.title} subtitle={ChargeOperation.subtitle} icon={ChargeOperation.icon} className="header" />
          <Separator className="medium" />
          <div className="form--container">
            <Input name="amount" labelText="Set an amount" onChange={(value: number | string) => onChange(value)} inputRef={register} />
            <Separator className="empty" />
            <Input name="finalAmount" labelText="Your charge" placeholder={newAmount} disabled inputRef={register} />
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

export default Charge;
