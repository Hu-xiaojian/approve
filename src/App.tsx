import React from 'react';
import { Filter, FilterList } from '@/components';
import './App.css';

function App() {

  const changeHandle = (val: any) => {

  }

  return (
    <div className="App">
      <h1>审核页面-列表页面</h1>
      <Filter onChange={changeHandle} />
      <FilterList />
    </div>
  );
}

export default App;
