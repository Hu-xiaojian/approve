import React from 'react';
import { Button, Table } from 'antd';

const columns = [
  {
    title: '用户名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '产品线',
    dataIndex: 'productLine',
    key: 'productLine',
  },
  {
    title: '行业',
    dataIndex: 'industry',
    key: 'industry',
  },
  {
    title: '创建时间',
    dataIndex: 'taskCreateTime',
    key: 'taskCreateTime',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <>
        <Button>审核</Button>
        <Button>删除</Button>
      </>
    ),
  },
];

const data = [
  {
    key: '1',
    userName: 'John Brown',
    productLine: 32,
    industry: 'New York No. 1 Lake Park',
    taskCreateTime: '12：44',
  },
  {
    key: '2',
    userName: 'John Brown',
    productLine: 32,
    industry: 'New York No. 1 Lake Park',
    taskCreateTime: '12：44',
  },
  {
    key: '3',
    userName: 'John Brown',
    productLine: 32,
    industry: 'New York No. 1 Lake Park',
    taskCreateTime: '12：44',
  },
];

const FilterList = () => {
  return (<Table columns={columns} dataSource={data} />)
};

export default FilterList;