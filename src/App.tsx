import React, { FunctionComponent } from 'react';
import './App.scss';

import Icon from './components/dumb/Icon/Icon';
import addIcon from './assets/add.svg';

const App: FunctionComponent = () => {
  return (
    <div className="container">
      <Icon copy="Mariano" image={addIcon} onClick={() => console.log('Mariano')} />
    </div>
  );
};

export default App;
