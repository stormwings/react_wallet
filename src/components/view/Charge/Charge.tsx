import React, { FunctionComponent, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ScreenContainer from '../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import Menu from '../../smart/Menu/Menu';
import StatusHeader from '../../smart/StatusHeader/StatusHeader';
import CardHeader from '../../dumb/CardHeader/CardHeader';
import Separator from '../../dumb/Separator/Separator';
import Input from '../../dumb/Input/Input';
import Button from '../../dumb/Button/Button';

import IconBitcoinPill from './../../../assets/svg/bitcoin_pill.svg';
import IconCash from '../../../assets/svg/cash_icon.svg';
import IconAdd from './../../../assets/svg/add.svg';

const Charge: FunctionComponent = () => {
  const { currency } = useParams();
  let operation: any;

  switch (currency) {
    case 'sell_crypto':
      operation = {
        content: 'Sell bitcoin',
        subtitle: 'Charge ARS Account',
        icon: IconCash
      };
      break;
    case 'buy_crypto':
      operation = {
        content: 'Buy bitcoin',
        subtitle: 'Charge BTC Account',
        icon: IconBitcoinPill
      };
      break;
    default:
      operation = {
        content: 'Charge balance',
        subtitle: 'Charge ARS Account',
        icon: IconAdd
      };
      break;
  }

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader />
      <ScreenContainer>
        <CardHeader content={operation.content} subtitle={operation.subtitle} icon={operation.icon} className="header" />
        <Separator className="medium" />
        <div className="form--container">
          <Input name="amount" labelText="Set an amount" />
          <Separator className="empty" />
          <Input name="payment" labelText="Set your payment" />
        </div>
        <Separator className="medium" />
        <Button content="Confirm" onClick={() => console.log('click')} />
        <Separator />
        <Menu />
      </ScreenContainer>
    </Fragment>
  );
};

export default Charge;
