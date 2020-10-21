import React, { useContext, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Button, Tooltip } from 'antd';
import { PlusOutlined, StarFilled, UnorderedListOutlined } from '@ant-design/icons';

import AppContext from 'AppContext';

import TodoItemForm from 'components/TodoItemForm';

import './AppHeader.scss';
import Utils from 'common/Utils';

const AppHeader = () => {
  const [showForm, setShowForm] = useState(false);
  const { todoList, setTodoList } = useContext(AppContext);

  const handleNewTask = (data) => {
    const currentTasks = todoList.slice();
    currentTasks.push({ ...data, id: Utils.createId() });
    setTodoList(currentTasks);
  };

  return (
    <div className="AppHeader">
      <div className="AppHeader-wrapper">
        <h1 className="AppHeader-wrapper-title">Mi lista de tareas</h1>
        <div className="AppHeader-wrapper-menu">
          <NavLink to="/" exact>
            <Tooltip placement="bottom" title="Ver todo">
              <UnorderedListOutlined />
            </Tooltip>
          </NavLink>
          <NavLink to="/fav" exact activeClassName="active">
            <Tooltip placement="bottom" title="Favoritos">
              <StarFilled />
            </Tooltip>
          </NavLink>
          <Tooltip title="Nueva tarea" placement="bottom">
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => setShowForm(true)}
              shape="circle"
            />
          </Tooltip>
          {showForm && <TodoItemForm onSubmit={handleNewTask} onClose={() => setShowForm(false)} />}
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
