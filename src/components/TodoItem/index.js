import React, { useState } from 'react';

import { Checkbox, Modal, Tooltip, Typography } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';

import './TodoItem.scss';
import Utils from 'common/Utils';
import TodoItemForm from 'components/TodoItemForm';

const TodoItem = ({ data, onCheck, onFav, onDelete, onEdit }) => {
  const [isChecked, setIsChecked] = useState(data.isReady);
  const [showForm, setShowForm] = useState(false);

  const handleCheck = (e) => {
    const { checked } = e.target;
    setIsChecked(checked);
    onCheck(data.id, checked);
  };

  const handleToggleFav = () => {
    onFav(data.id, !data.isFav);
  };

  const handleDelete = () => {
    Modal.confirm({
      title: '¿Seguro que desea eliminar esta tarea?',
      icon: <ExclamationCircleFilled />,
      content: 'Esta acción no se puede deshacer.',
      okText: 'Eliminar',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk: () => onDelete(data.id),
      onCancel: () => {},
    });
  };

  return (
    <div className="TodoItem">
      <div className="TodoItem-content">
        <Checkbox checked={isChecked} onChange={handleCheck}>
          <Typography.Text
            strong={!data.isReady}
            delete={data.isReady}
            type={data.isReady ? 'secondary' : ''}
          >
            {data.text}
          </Typography.Text>
        </Checkbox>
      </div>
      <div className="TodoItem-meta">
        <div className="TodoItem-meta-date">
          <Typography.Text type={data.isReady ? 'secondary' : ''}>
            {Utils.simpleDate(data.date)}
          </Typography.Text>
        </div>
        <div className="TodoItem-meta-fav">
          <Tooltip title={data.isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}>
            {data.isFav ? (
              <StarFilled onClick={handleToggleFav} />
            ) : (
              <StarOutlined onClick={handleToggleFav} />
            )}
          </Tooltip>
        </div>
        <div className="TodoItem-meta-edit">
          <Tooltip title="Editar tarea">
            <EditOutlined onClick={() => setShowForm(true)} />
          </Tooltip>
        </div>
        <div className="TodoItem-meta-remove">
          <Tooltip title="Eliminar tarea">
            <DeleteOutlined onClick={handleDelete} />
          </Tooltip>
        </div>
      </div>
      {showForm && (
        <TodoItemForm item={data} onSubmit={onEdit} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default TodoItem;
