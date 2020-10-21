import React, { useContext, useEffect, useState } from 'react';

import moment from 'moment';

import AppContext from 'AppContext';

import PageLayout from 'components/PageLayout';
import TodoList from 'components/TodoList';
import TodoListFilters from 'components/TodoListFilters';

const All = () => {
  const { todoList } = useContext(AppContext);
  const [filteredList, setFilteredList] = useState(todoList);
  const [favFilter, setFavFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState(null);

  useEffect(() => {
    let currentList = filteredList.slice();
    if (favFilter === 'fav') {
      currentList = currentList.filter((item) => item.isFav);
    } else {
      currentList = todoList.slice();
    }

    if (dateFilter) {
      currentList = currentList.filter(({ date }) => moment(date).isAfter(dateFilter));
    }

    setFilteredList(currentList);
  }, [favFilter, dateFilter]); // eslint-disable-line

  const handleFilterByDate = (filterDate) => setDateFilter(filterDate);
  const handleFilterByFav = (filterFav) => setFavFilter(filterFav);

  return (
    <PageLayout mainClassName="All" title="Todas mis tareas">
      <TodoListFilters onChangeDate={handleFilterByDate} onChangeFav={handleFilterByFav} />
      <div className="All-list">
        <TodoList list={filteredList} />
      </div>
    </PageLayout>
  );
};

export default All;
