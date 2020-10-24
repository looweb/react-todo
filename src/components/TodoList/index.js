import React, { useContext, useEffect, useState } from 'react';

import moment from 'moment';

import AppContext from 'AppContext';

import TodoItem from 'components/TodoItem';
import Utils from 'common/Utils';
import EmptyList from 'components/EmptyList';
import TodoListFilters from 'components/TodoListFilters';

const TodoList = ({ list }) => {
  const { todoList, setTodoList } = useContext(AppContext);
  const [readyFilter, setReadyFilter] = useState('all');
  const [sinceFilter, setSinceFilter] = useState(null);
  const [toFilter, setToFilter] = useState(null);
  const [filteredList, setFilteredList] = useState(todoList);

  useEffect(() => {
    let currentList = todoList.slice();
    if (readyFilter === 'ready') {
      currentList = currentList.filter((item) => item.isReady);
    } else if (readyFilter === 'not-ready') {
      currentList = currentList.filter((item) => !item.isReady);
    } else {
      currentList = todoList.slice();
    }

    if (sinceFilter) {
      currentList = currentList.filter(({ date }) => moment(date).isAfter(sinceFilter));
    }

    if (toFilter) {
      currentList = currentList.filter(({ date }) => moment(date).isBefore(toFilter));
    }

    setFilteredList(currentList);
  }, [sinceFilter, toFilter, readyFilter, todoList]); // eslint-disable-line

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

  const handleFilterBySince = (filterSince) => setSinceFilter(filterSince);
  const handleFilterByTo = (filterTo) => setToFilter(filterTo);
  const handleFilterByReady = (filterReady) => setReadyFilter(filterReady);

  return (
    <div className="TodoList">
      <TodoListFilters
        onChangeReady={handleFilterByReady}
        onChangeSince={handleFilterBySince}
        onChangeTo={handleFilterByTo}
      />
      {!filteredList.length && <EmptyList />}
      {filteredList.map((item) => (
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
