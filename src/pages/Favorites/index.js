import React, { useContext } from 'react';

import AppContext from 'AppContext';

import PageLayout from 'components/PageLayout';
import TodoList from 'components/TodoList';

const getFavList = (list) => {
  return list.slice().filter((item) => item.isFav);
};

const Favorites = () => {
  const { todoList } = useContext(AppContext);
  const filteredList = getFavList(todoList);

  return (
    <PageLayout mainClassName="Favorites" title="Mis favoritos">
      <div className="Favorites-list">
        <TodoList list={filteredList} />
      </div>
    </PageLayout>
  );
};

export default Favorites;
