import React, { FunctionComponent } from 'react';
import './App.scss';

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
      <div id="responsive--screen"></div>
    </div>
  );
};

export default App;
