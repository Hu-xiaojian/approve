import React from 'react';
import { Filter, FilterList } from '@/components';
import { getList } from '@/api';
import { filterEmpty } from '@/utils';
import './App.css';

const _initState = { pageIndex: 1, pageSize: 10 };

function App() {
  const [ tableData, setTableData ] = React.useState<object>({});
  const [ state, setState ] = React.useState<object>(_initState);

  const getListFn = (params: object) => {
    getList(filterEmpty(params)).then((res) => {
      setTableData(res)
    })
  }

  React.useEffect(() => {
    getListFn(state);
  }, [state])

  const changeHandle = (val: any) => {
    setState(prevState => ({ ...prevState,...val }));
  }


  const searchHandle = (val: any) => {
    if (!val) return getListFn(state);
    setState(prevState => ({ ...prevState,...val }));
  }

  return (
    <div className="App">
      <h1>审核页面-列表页面</h1>
      <Filter onChange={changeHandle} />
      <FilterList data={tableData} search={searchHandle} />
    </div>
  );
}

export default App;
