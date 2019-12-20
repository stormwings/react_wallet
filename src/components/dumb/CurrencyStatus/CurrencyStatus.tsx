import React, { FunctionComponent } from 'react';
import './CurrencyStatus.scss';
import CardHeader from '../CardHeader/CardHeader';

import bitcoin from './../../../assets/svg/icon_bitcoin.svg';
import ethereum from './../../../assets/svg/icon_ethereum.svg';

interface IProps {
  principalIcon: 'bitcoin' | 'ethereum';
  principalValue: string;
  secondaryValue: string;
  onClick?: Function;
}

const CurrencyStatus: FunctionComponent<IProps> = props => {
  const { principalValue, secondaryValue, principalIcon, onClick } = props;

  return (
    <div id="currency-status" onClick={() => (onClick ? onClick() : defaultProps.onClick())}>
      <CardHeader content={principalValue} icon={principalIcon === 'bitcoin' ? bitcoin : ethereum} className="text-big" />
      <CardHeader content={secondaryValue} className="currency-status" />
    </div>
  );
};

const defaultProps = {
  onClick: () => console.log('onClick empty')
};

export default CurrencyStatus;
