import React, { FunctionComponent, Fragment } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';
import './Auth.scss';

import { authSignIn, authSignUp } from './../../../redux/actions/authActions';
import SvgBitcoin from './../../../assets/components/SvgBitcoin';
import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import Separator from './../../../components/dumb/Separator/Separator';
import { Title } from './../../dumb/Text/Text';
import Input from './../../dumb/Input/Input';
import Button from './../../dumb/Button/Button';

const Auth: FunctionComponent = () => {
  const { key } = useSelector((state: any) => state.auth);
  const { type } = useParams();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (values: object) => {
    if (type === 'login') {
      dispatch(authSignIn(values));
    } else {
      dispatch(authSignUp(values));
    }
  };

  const RegisterInputs = () => (
    <Fragment>
      <Input name="username" labelText="Username" inputRef={register} required />
      <Separator className="empty" />
      <Input name="password1" labelText="Password" type="password" inputRef={register} required />
      <Separator className="empty" />
      <Input name="password2" labelText="Confirm password" type="password" inputRef={register} required />
    </Fragment>
  );

  const LoginInputs = () => (
    <Fragment>
      <Input name="username" labelText="Username" inputRef={register} required />
      <Separator className="empty" />
      <Input name="password" labelText="Password" type="password" inputRef={register} required />
    </Fragment>
  );

  if (key) return <Redirect to={'/'} />;

  return (
    <div className="container">
      <div id="responsive--screen">
        <HeaderContainer />
        <ScreenContainer className="hover">
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
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
          </form>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default Auth;
