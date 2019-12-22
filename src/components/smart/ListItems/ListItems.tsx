import React, { FunctionComponent, Fragment } from 'react';
import './ListItems.scss';

import CardHeader from './../../../components/dumb/CardHeader/CardHeader';
import SpanList from './../../../components/dumb/SpanList/SpanList';
import Separator from './../../dumb/Separator/Separator';
import { ResultOperation, Operation } from '../../../entities/Operation';

interface IPropsList {
  items: Array<ResultOperation>;
}
interface IPropsItem {
  item: ResultOperation;
}

export const ItemRow: FunctionComponent<IPropsItem> = props => {
  const {
    item: { type, currencyEnd, currencyStart, date, ingressAmount, substractionAmount }
  } = props;

  const operation: Operation = new Operation(type);

  return (
    <div id="transaction-row">
      <div className="transaction-item elements">
        <CardHeader content={operation.title} subtitle={date} icon={operation.icon} />
      </div>
      <div className="transaction-item values">
        <CardHeader
          content={`+ ${currencyEnd} ${ingressAmount}`}
          subtitle={`- ${currencyStart ? currencyStart : 'Cash'} ${substractionAmount}`}
          className="operations"
        />
      </div>
    </div>
  );
};

const ListItems: FunctionComponent<IPropsList> = props => {
  const { items } = props;

  return (
    <Fragment>
      <SpanList
        content="Last"
        className="capital-letters"
        contentSecondary="See all"
        onClickContentSecondary={() => console.log('onClick')}
      />
      <Separator className="empty" />

      <div style={{ maxHeight: '350px', overflowY: 'scroll', width: '100%' }}>
        {items.map((item, i) => (
          <ItemRow key={i} item={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default ListItems;
