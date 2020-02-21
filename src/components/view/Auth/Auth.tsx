import React, { FunctionComponent, Fragment } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
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
  const { key, errors } = useSelector((state: any) => state.auth);
  const { type } = useParams();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (values: object) => {
    dispatch(type === 'login' ? authSignIn(values) : authSignUp(values));
  };

  // check authentication successful
  if (key) return <Redirect to={'/'} />;

  return (
    <div className="container">
      <div id="responsive--screen">
        <HeaderContainer />
        <ScreenContainer className="hover">
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
            <div className="welcome--image">
              <Title content={type === 'login' ? 'Glad to see you!' : '¡Join the crypto world!'} className="text-center" />
              <SvgBitcoin className="welcome--icon" />
            </div>
            {/* error messages */}
            {errors && (
              <p className="option">
                {errors.map((error: string, i: number) => (
                  <i key={i} className="red">
                    {error}
                  </i>
                ))}
              </p>
            )}
            {/* login helper account */}
            {type === 'login' && <p className="option">example => user: testing pass: testing63 </p>}
            <div className="form--container">
              {/* generate the inputs depending the router */}
              {type === 'register' && <RegisterInputs bind={register} />}
              {type === 'login' && <LoginInputs bind={register} />}
            </div>
            <Separator className="empty" />
            <Button content="Confirm" onClick={() => console.log('click')} />
          </form>
          {/* url auth switch depending the router */}
          {type === 'login' && (
            <p className="option">
              Dont have an account?{' '}
              <Link to="/auth/register" className="blue">
                Sign Up
              </Link>
            </p>
          )}
          {type === 'register' && (
            <p className="option">
              Already have an account?{' '}
              <Link to="/auth/login" className="blue">
                Log In
              </Link>
            </p>
          )}
        </ScreenContainer>
      </div>
    </div>
  );
};

export default Auth;

interface IProps {
  bind: Function;
}

const RegisterInputs: FunctionComponent<IProps> = props => {
  return (
    <Fragment>
      <Input id="auth_username" name="username" labelText="Username" inputRef={props.bind} required autoComplete={false} />
      <Separator className="empty" />
      <Input id="auth_password" name="password1" labelText="Password" type="password" inputRef={props.bind} required autoComplete={false} />
      <Separator className="empty" />
      <Input
        id="auth_rpassword"
        name="password2"
        labelText="Confirm password"
        type="password"
        inputRef={props.bind}
        required
        autoComplete={false}
      />
    </Fragment>
  );
};

const LoginInputs: FunctionComponent<IProps> = props => {
  return (
    <Fragment>
      <Input id="auth_username" name="username" labelText="Username" inputRef={props.bind} required autoComplete={false} />
      <Separator className="empty" />
      <Input id="auth_password" name="password" labelText="Password" type="password" inputRef={props.bind} required autoComplete={false} />
    </Fragment>
  );
};
