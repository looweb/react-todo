import React, { useContext, useEffect, useState } from 'react';

import moment from 'moment';
import AppContext from 'AppContext';

import PageLayout from 'components/PageLayout';
import TodoList from 'components/TodoList';
import TodoListFilters from 'components/TodoListFilters';

const getFavList = (list) => {
  return list.slice().filter((item) => item.isFav);
};

const Favorites = () => {
  const { todoList } = useContext(AppContext);
  const [filteredList, setFilteredList] = useState(getFavList(todoList));

  useEffect(() => {
    setFilteredList(getFavList(todoList));
  }, [todoList]);

  const handleFilterByDate = (filterDate) => {
    if (filterDate) {
      setFilteredList(filteredList.slice().filter(({ date }) => moment(date).isAfter(filterDate)));
    } else {
      setFilteredList(getFavList(todoList));
    }
  };

  return (
    <PageLayout mainClassName="Favorites" title="Mis favoritos">
      <TodoListFilters onChangeDate={handleFilterByDate} />
      <div className="Favorites-list">
        <TodoList list={filteredList} />
      </div>
    </PageLayout>
  );
};

export default Favorites;
