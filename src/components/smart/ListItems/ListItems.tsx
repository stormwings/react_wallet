import React, { FunctionComponent, Fragment } from 'react';
import './ListItems.scss';

import CardHeader from './../../../components/dumb/CardHeader/CardHeader';
import SpanList from './../../../components/dumb/SpanList/SpanList';
import Separator from './../../dumb/Separator/Separator';
import IconWallet from './../../../assets/svg/icon_wallet.svg';

interface IProps {}

export const ItemRow = () => {
  return (
    <div id="transaction-row">
      <div className="transaction-item elements">
        <CardHeader content="Buy Bitcoins" subtitle="14 Dec 2019, 3:40 PM" icon={IconWallet} />
      </div>
      <div className="transaction-item values">
        <CardHeader content="+$3415" subtitle="-BTC0,35415" className="operations" />
      </div>
    </div>
  );
};

const ListItems: FunctionComponent<IProps> = props => {
  return (
    <Fragment>
      <SpanList
        content="Today"
        className="capital-letters"
        contentSecondary="See all"
        onClickContentSecondary={() => console.log('onClick')}
      />
      <Separator className="empty" />
      <ItemRow />
      <ItemRow />
    </Fragment>
  );
};

export default ListItems;
