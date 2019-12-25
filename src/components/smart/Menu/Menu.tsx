import React, { FunctionComponent } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Menu.scss';

import Icon from './../../dumb/Icon/Icon';
import IconUser from './../../../assets/svg/user.svg';
import IconWallet from './../../../assets/svg/wallet.svg';
import IconAdd from './../../../assets/svg/add.svg';
import IconContact from './../../../assets/svg/contact.svg';
import IconLogout from './../../../assets/svg/logout.svg';
import { authSignOut } from '../../../redux/actions/authActions';

const Menu: FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { key } = useSelector((state: any) => state.auth);

  if (!key) return <Redirect to={'/auth/login'} />;

  return (
    <div id="card--header__container">
      <Icon image={IconContact} copy="History" onClick={() => history.push('/history')} />
      <Icon image={IconWallet} copy="Wallet" onClick={() => history.push('/')} />
      <Icon image={IconAdd} copy="Charge" onClick={() => history.push('/charge/buy_fiat')} />
      <Icon image={IconUser} copy="Profile" onClick={() => history.push('/user')} />
      <Icon image={IconLogout} copy="Logout" onClick={() => dispatch(authSignOut())} />
    </div>
  );
};

export default Menu;
