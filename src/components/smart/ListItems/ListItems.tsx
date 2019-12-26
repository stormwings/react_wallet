import React, { FunctionComponent, Fragment } from 'react';
import './ListItems.scss';

import CardHeader from './../../../components/dumb/CardHeader/CardHeader';
import SpanList from './../../../components/dumb/SpanList/SpanList';
import Separator from './../../dumb/Separator/Separator';
import { ResultOperation, Operation } from './../../../entities/Operation';

interface IPropsList {
  items: Array<ResultOperation>;
  onClick?: Function;
  onClickSpan?: Function;
  includeSpan?: boolean;
}

const ListItems: FunctionComponent<IPropsList> = props => {
  const { items, onClick, includeSpan, onClickSpan } = props;

  return (
    <Fragment>
      {includeSpan && (
        <SpanList
          content="Last"
          className="capital-letters"
          contentSecondary="See all"
          onClickContentSecondary={() => (onClickSpan ? onClickSpan() : null)}
        />
      )}
      <Separator className="empty" />
      <div className="overflow_scroll">
        {items.map((item, i) => (
          <ItemRow key={i} item={item} onClick={onClick} />
        ))}
      </div>
    </Fragment>
  );
};

export default ListItems;

interface IPropsItem {
  item: ResultOperation;
  onClick?: Function | any;
}

export const ItemRow: FunctionComponent<IPropsItem> = props => {
  const {
    onClick,
    item: { id, operation_type, currencyEnd, currencyStart, date, ingressAmount, substractionAmount, trading_type }
  } = props;

  const type: any = operation_type ? operation_type : trading_type;
  const operation: Operation = new Operation(type);

  return (
    <div id="transaction-row" onClick={() => (onClick ? onClick(id) : null)}>
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
