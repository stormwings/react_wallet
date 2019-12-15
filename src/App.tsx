import React, { FunctionComponent } from 'react';
import './App.scss';
import SpanList from './components/dumb/SpanList/SpanList';
import Button from './components/dumb/Button/Button';

const App: FunctionComponent = () => {
  return (
    <div className="container">
      <SpanList
        className="capital-letters"
        content="Yesterday"
        contentSecondary="See all"
        onClickContentSecondary={() => console.log('change')}
      />
      <Button content="Login" onClick={() => console.log('click')} />
    </div>
  );
};

export default App;
