import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from 'react-hook-form';

import { saveProfile, getProfile } from './../../../redux/actions/authActions';
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer';
import HeaderContainer from './../../containers/HeaderContainer/HeaderContainer';
import Separator from './../../../components/dumb/Separator/Separator';
import Input from './../../dumb/Input/Input';
import Button from './../../dumb/Button/Button';
import CardHeader from './../../dumb/CardHeader/CardHeader';
import StatusHeader from './../../smart/StatusHeader/StatusHeader';
import Menu from './../../smart/Menu/Menu';
import IconProfile from './../../../assets/svg/name.svg';

const User: FunctionComponent = () => {
  const dispatch = useDispatch();
  const myWallet = useSelector((state: any) => state.wallet);
  const { auth } = useSelector((state: any) => state);
  const { register, handleSubmit } = useForm();
  const { profile } = auth;

  useEffect(() => {
    dispatch(getProfile(auth.user_id));
  }, []);

  const onSubmit = (values: object) => {
    dispatch(saveProfile(values, auth.user_id));
  };

  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader cryptoValue={myWallet.currency.BTC} fiatValue={myWallet.currency.USD} />
      <ScreenContainer>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }}>
          <CardHeader content="Settings" subtitle="Personal Information" icon={IconProfile} className="header" />
          <Separator className="medium" />
          <div className="form--container">
            <Input name="name" labelText="Full name" defaultValue={profile && profile.name} inputRef={register} required />
          </div>
          <Separator className="medium" />
          <div className="form--container">
            <Input name="phone" labelText="Phone number" defaultValue={profile && profile.phone} inputRef={register} required />
            <Separator className="empty" />
            <Input name="location" labelText="Country, Province" defaultValue={profile && profile.location} inputRef={register} required />
            <Separator className="empty" />
            <Input name="address" labelText="Your address" defaultValue={profile && profile.address} inputRef={register} required />
          </div>
          <Separator className="medium" />
          <Button content="Save" onClick={() => console.log('click')} />
          <Separator className="medium" />
          <Menu />
        </form>
      </ScreenContainer>
    </Fragment>
  );
};

export default User;
