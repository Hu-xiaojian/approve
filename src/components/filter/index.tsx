import React from 'react';
import { Form, DatePicker, Button, Input } from 'antd';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};

interface FilterProps {
  onChange: Function;
}

const Filter = (props: FilterProps) => {
  return (<Form
    layout="inline"
    name="time_related_controls"
    {...formItemLayout}
    onFinish={(fieldsValue: any) => {
      const rangeTimeValue = fieldsValue['taskCreateTime'];
      const values = { ...fieldsValue, };
      if (rangeTimeValue) {
        values.taskCreateTime = JSON.stringify([
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ])
      }
      props?.onChange(values);
    }}
    onReset={() => {
      props?.onChange({userName: '', productLine: '', industry: '', taskCreateTime: ''});
    }}
    style={{ maxWidth: 600, flexWrap: "nowrap" }}
  >
    <Form.Item name="userName" label="用户名" >
      <Input />
    </Form.Item>
    <Form.Item name="productLine" label="产品线" >
      <Input />
    </Form.Item>
    <Form.Item name="industry" label="行业" >
      <Input />
    </Form.Item>
    <Form.Item name="taskCreateTime" label="任务创建时间">
      <RangePicker placeholder={['开始时间', '结束时间']} />
    </Form.Item>
    <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
      <Button type="primary" htmlType="submit">
        搜索
      </Button>

    </Form.Item>
    <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }}>
      <Button type="primary" htmlType="reset">
        重置
      </Button>
    </Form.Item>

  </Form>)
};

export default Filter;