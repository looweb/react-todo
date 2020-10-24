import React from 'react';

import moment from 'moment';
import { DatePicker, Select } from 'antd';

import './TodoListFilters.scss';

const TodoListFilters = ({ onChangeReady, onChangeSince, onChangeTo }) => {
  return (
    <div className="TodoListFilters">
      <div className="TodoListFilters-ready">
        <Select defaultValue="all" onChange={onChangeReady} style={{ width: 150 }}>
          <Select.Option value="all">Ver todo</Select.Option>
          <Select.Option value="ready">Ver solo completados</Select.Option>
          <Select.Option value="not-ready">Ver solo pendientes</Select.Option>
        </Select>
      </div>
      <div className="TodoListFilters-date">
        <DatePicker
          placeholder="Desde"
          allowClear
          onChange={onChangeSince}
          showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
          format="DD-MM-YYYY HH:mm"
        />
        <DatePicker
          placeholder="Hasta"
          allowClear
          onChange={onChangeTo}
          showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
          format="DD-MM-YYYY HH:mm"
        />
      </div>
    </div>
  );
};

export default TodoListFilters;
