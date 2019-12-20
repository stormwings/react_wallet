import React, { FunctionComponent, Fragment } from 'react';

import ScreenContainer from '../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import CardHeader from '../../dumb/CardHeader/CardHeader';
import Separator from '../../dumb/Separator/Separator';
import Input from '../../dumb/Input/Input';
import Button from '../../dumb/Button/Button';
import IconCash from '../../../assets/svg/cash_icon.svg';

const Charge: FunctionComponent = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <ScreenContainer className="hover">
        <CardHeader content="Charge balance" subtitle="ARS Account" icon={IconCash} className="header" />
        <Separator className="medium" />
        <div className="form--container">
          <Input name="amount" labelText="Set an amount" />
          <Separator className="empty" />
          <Input name="payment" labelText="Set your payment" />
        </div>
        <Separator className="medium" />
        <Button content="Confirm" onClick={() => console.log('click')} />
        <Separator className="medium" />
      </ScreenContainer>
    </Fragment>
  );
};

export default Charge;
