import React, { FunctionComponent } from 'react';
import './CurrencyStatus.scss';
import CardHeader from '../CardHeader/CardHeader';

import bitcoin from './../../../assets/bitcoin_coin.svg';
import exchange from './../../../assets/exchange.svg';

interface IProps {
  principalValue: string;
  secondaryValue: string;
  changeHelper?: boolean;
  onClick?: Function;
}

const CurrencyStatus: FunctionComponent<IProps> = props => {
  const { principalValue, secondaryValue, changeHelper, onClick } = props;

  return (
    <div className="temporal--container">
      <div id="currency-status" onClick={() => (onClick ? onClick() : defaultProps.onClick())}>
        {changeHelper && <CardHeader subtitle="Click to change" icon={exchange} className="currency-status" />}
        <div className="principal">
          <CardHeader content={principalValue} icon={bitcoin} className="text-big" />
        </div>
        <CardHeader content={secondaryValue} className="currency-status" />
      </div>
    </div>
  );
};

const defaultProps = {
  onClick: () => console.log('onClick empty')
};

export default CurrencyStatus;
