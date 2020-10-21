import React from 'react';

import moment from 'moment';
import { DatePicker, Select } from 'antd';

import './TodoListFilters.scss';

const TodoListFilters = ({ onChangeFav, onChangeDate }) => {
  return (
    <div className="TodoListFilters">
      {!!onChangeFav && (
        <div className="TodoListFilters-fav">
          <Select defaultValue="all" onChange={onChangeFav} style={{ width: 150 }}>
            <Select.Option value="all">Ver todo</Select.Option>
            <Select.Option value="fav">Ver solo favoritos</Select.Option>
          </Select>
        </div>
      )}
      {!!onChangeDate && (
        <div className="TodoListFilters-date">
          <DatePicker
            placeholder="Mostrar desde"
            allowClear
            onChange={onChangeDate}
            showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
            format="DD-MM-YYYY HH:mm"
          />
        </div>
      )}
    </div>
  );
};

export default TodoListFilters;
