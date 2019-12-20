import React, { FunctionComponent, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import './Auth.scss';

import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import Separator from './../../../components/dumb/Separator/Separator';
import SvgBitcoin from './../../../assets/components/SvgBitcoin';
import { Title } from './../../dumb/Text/Text';
import Input from './../../dumb/Input/Input';
import Button from './../../dumb/Button/Button';

interface IProps {}

const Auth: FunctionComponent<IProps> = () => {
  const { type } = useParams();

  const RegisterInputs = () => (
    <Fragment>
      <Input name="username" labelText="Username" />
      <Separator className="empty" />
      <Input name="password" labelText="Password" type="password" />
      <Separator className="empty" />
      <Input name="confirm-password" labelText="Confirm password" type="password" />
    </Fragment>
  );

  const LoginInputs = () => (
    <Fragment>
      <Input name="username" labelText="Username" />
      <Separator className="empty" />
      <Input name="password" labelText="Password" type="password" />
    </Fragment>
  );

  return (
    <div className="container">
      <div id="responsive--screen">
        <HeaderContainer />
        <ScreenContainer className="hover">
          <div className="welcome--image">
            <Title content="Glad to see you!" className="text-center" />
            <SvgBitcoin className="welcome--icon" />
          </div>
          <div className="form--container">
            {type === 'register' && <RegisterInputs />}
            {type === 'login' && <LoginInputs />}
          </div>
          <Separator className="empty" />
          <Button content="Confirm" onClick={() => console.log('click')} />
          <Separator className="empty" />
        </ScreenContainer>
      </div>
    </div>
  );
};

export default Auth;
