import React, { useContext } from 'react';

import AppContext from 'AppContext';

import TodoItem from 'components/TodoItem';
import Utils from 'common/Utils';
import EmptyList from 'components/EmptyList';

const TodoList = ({ list }) => {
  const { todoList, setTodoList } = useContext(AppContext);

  const updateItem = (id, newData) => {
    const theItem = Utils.findById(list, id);
    if (!theItem) {
      Utils.error('Item no encontrado');
    } else {
      setTodoList(Utils.updateById(todoList, { ...theItem, ...newData }));
    }
  };

  const handleCheckItem = (id, isReady) => {
    updateItem(id, { isReady });
  };

  const handleFav = (id, isFav) => {
    updateItem(id, { isFav });
  };

  const handleDelete = (id) => {
    setTodoList(Utils.deleteById(list, id));
  };

  return (
    <div className="TodoList">
      {!list.length && <EmptyList />}
      {list.map((item) => (
        <TodoItem
          key={item.id}
          data={item}
          onCheck={handleCheckItem}
          onFav={handleFav}
          onDelete={handleDelete}
          onEdit={updateItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
