import React, { FunctionComponent, Fragment } from 'react';

import SpanList from './../../../components/dumb/SpanList/SpanList';
import CardHeader from './../../../components/dumb/CardHeader/CardHeader';
import IconWallet from './../../../assets/svg/icon_wallet.svg';
import Separator from '../../dumb/Separator/Separator';

interface IProps {}

export const ItemRow = () => {
  return (
    <div className="transaction-list" style={{ width: '100%', display: 'flex', marginBottom: '15px' }}>
      <div
        className="today-transaction-elements"
        style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <CardHeader content="Buy Bitcoins" subtitle="14 Dec 2019, 3:40 PM" icon={IconWallet} />
      </div>
      <div className="today-transaction-values" style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
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
