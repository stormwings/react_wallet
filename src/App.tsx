import React, { FunctionComponent } from 'react';
import './App.scss';
import CardHeader from './components/dumb/CardHeader/CardHeader';

const App: FunctionComponent = () => {
  return (
    <div className="container">
      {/* <Select
        onSelect={(value: any) => console.log(value)}
        items={[
          { title: 'bitcoin', value: 'bitcoin' },
          { title: 'ethereum', value: 'ethereum' }
        ]}
      /> */}
      <CardHeader content={'+$3415'} subtitle={'-BTC0,35415'} className="operations" />
    </div>
  );
};

export default App;
