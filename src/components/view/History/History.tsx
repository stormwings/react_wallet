import React, { FunctionComponent, Fragment } from 'react';

import ScreenContainer from '../../containers/ScreenContainer/ScreenContainer';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import ListItems from '../../smart/ListItems/ListItems';
import StatusHeader from '../../smart/StatusHeader/StatusHeader';

const History: FunctionComponent = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <StatusHeader />
      <ScreenContainer>
        <ListItems />
      </ScreenContainer>
    </Fragment>
  );
};

export default History;
