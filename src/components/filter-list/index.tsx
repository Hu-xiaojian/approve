import React from 'react';
import { Button, Table, Modal } from 'antd';
import { deleteItem } from '@/api';

interface FilterListProps {
  data: any;
  search: Function;
}

const FilterList: React.FunctionComponent<FilterListProps> = (props: FilterListProps): React.ReactElement => {
  const { data, search } = props;
  const { list, total } = data || {};

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
      title: '操作',
      key: 'action',
      render: (record: any) => (
        <>
          <Button>审核</Button>
          <Button onClick={() => {
            Modal.confirm({
              title: "确定删除此用户吗？",
              okText: '确认',
              cancelText: '取消',
              onOk() {
                deleteItem({ id: record.id }).then(() => {
                  search()
                })
              },
            });
          }}>删除</Button>
        </>
      ),
    },
  ];

  return (<Table columns={columns} dataSource={list} pagination={{ total, onChange:(page, pageSize) => {
      search({ pageIndex: page, pageSize });
    } }}/>)
};

export default FilterList;