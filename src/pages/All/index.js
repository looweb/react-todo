import React, { useContext } from 'react';

import AppContext from 'AppContext';

import PageLayout from 'components/PageLayout';
import TodoList from 'components/TodoList';

const All = () => {
  const { todoList } = useContext(AppContext);

  return (
    <PageLayout mainClassName="All" title="Todas mis tareas">
      <div className="All-list">
        <TodoList list={todoList} />
      </div>
    </PageLayout>
  );
};

export default All;
