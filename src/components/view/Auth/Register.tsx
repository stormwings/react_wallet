import React, { useEffect, FunctionComponent } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'react-hook-form';
import './Auth.scss';

import { authSignUp, authClearErrors } from './../../../redux/actions/authActions';
import SvgBitcoin from './../../../assets/components/SvgBitcoin';
import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import Separator from './../../../components/dumb/Separator/Separator';
import { Title } from './../../dumb/Text/Text';
import Input from './../../dumb/Input/Input';
import Button from './../../dumb/Button/Button';

const Register: FunctionComponent = () => {
  const { key, errors } = useSelector((state: any) => state.auth);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (errors) dispatch(authClearErrors())
  }, [])

  const onSubmit = (values: object) => {
    dispatch(authSignUp(values));
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
              <Title content={'¡Join the crypto world!'} className="text-center" />
              <SvgBitcoin className="welcome--icon" />
            </div>
            {errors && (
              <p className="option">
                {errors.map((error: string, i: number) => (
                  <i key={i} className="auth_error_message red">
                    {error}
                  </i>
                ))}
              </p>
            )}
            <div className="form--container">
            <Input 
                id="auth_input_username" 
                name="username" 
                labelText="Username" 
                inputRef={register} 
                required 
                autoComplete={false}
              />
              <Separator className="empty" />
              <Input
                id="auth_input_password"
                name="password1"
                labelText="Password"
                type="password"
                inputRef={register}
                required autoComplete={false}
              />
              <Separator className="empty" />
              <Input
                id="auth_input_rpassword"
                name="password2"
                labelText="Confirm password"
                type="password"
                inputRef={register}
                required
                autoComplete={false}
              />
            </div>
            <Separator className="empty" />
            <Button content="Confirm" onClick={() => console.log('click')} />
          </form>
          <p className="option">
            Already have an account?{' '}
            <Link to="/login" className="blue">
              Log In
            </Link>
          </p>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default Register;
