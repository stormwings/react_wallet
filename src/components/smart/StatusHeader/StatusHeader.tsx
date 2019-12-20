import React, { FunctionComponent } from 'react';

import CardHeader from './../../dumb/CardHeader/CardHeader';
import CurrencyStatus from './../../dumb/CurrencyStatus/CurrencyStatus';
import Separator from './../../dumb/Separator/Separator';
import ScreenContainer from './../../containers/ScreenContainer/ScreenContainer';
import IconWallet from './../../../assets/svg/icon_wallet.svg';
import IconList from './../IconList/IconList';

interface IProps {}

const StatusHeader: FunctionComponent<IProps> = props => {
  return (
    <ScreenContainer style={{ marginTop: '-80px' }}>
      <div className="card--header__container" style={{ display: 'flex' }}>
        <CardHeader content="My balance" subtitle="View Balance Details" icon={IconWallet} />
        <CurrencyStatus principalValue="BTC 0,10458" secondaryValue="48.000,32ARS" principalIcon="bitcoin" />
      </div>
      <Separator />
      <IconList />
    </ScreenContainer>
  );
};

export default StatusHeader;
