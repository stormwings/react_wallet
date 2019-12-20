import React, { FunctionComponent, Fragment } from 'react';

import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import Separator from './../../../components/dumb/Separator/Separator';
import Input from '../../dumb/Input/Input';
import Button from '../../dumb/Button/Button';
import CardHeader from '../../dumb/CardHeader/CardHeader';
import IconProfile from '../../../assets/svg/name.svg';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import StatusHeader from '../../smart/StatusHeader/StatusHeader';

const User: FunctionComponent = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader />
      <ScreenContainer>
        <CardHeader content="Settings" subtitle="Personal Information" icon={IconProfile} className="header" />
        <Separator className="medium" />
        <div className="form--container">
          <Input name="name" labelText="Your name" />
          <Separator className="empty" />
          <Input name="email" labelText="Email Address" />
        </div>
        <Separator className="medium" />
        <div className="form--container">
          <Input name="phone" labelText="Phone number" />
          <Separator className="empty" />
          <Input name="location" labelText="Country, Province" />
          <Separator className="empty" />
          <Input name="address" labelText="Your address" />
        </div>
        <Separator className="medium" />
        <Button content="Save" onClick={() => console.log('click')} />
        <Separator className="medium" />
      </ScreenContainer>
    </Fragment>
  );
};

export default User;
