import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.scss';

import Icon from './../../dumb/Icon/Icon';
import IconUser from './../../../assets/svg/user.svg';
import IconWallet from './../../../assets/svg/wallet.svg';
import IconAdd from './../../../assets/svg/add.svg';
import IconContact from './../../../assets/svg/contact.svg';
import IconLogout from './../../../assets/svg/logout.svg';

interface IProps {}

const Menu: FunctionComponent<IProps> = () => {
  const history = useHistory();

  return (
    <div id="card--header__container">
      <Icon image={IconContact} copy="History" onClick={() => history.push('/history')} />
      <Icon image={IconWallet} copy="Wallet" onClick={() => history.push('/')} />
      <Icon image={IconAdd} copy="Charge" onClick={() => history.push('/charge/buy_fiat')} />
      <Icon image={IconUser} copy="Profile" onClick={() => history.push('/user')} />
      <Icon image={IconLogout} copy="Logout" onClick={() => history.push('/logout')} />
    </div>
  );
};

export default Menu;
