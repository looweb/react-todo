import { Empty } from 'antd';
import React from 'react';

const EmptyList = () => {
  return (
    <Empty description="No hay tareas" image={Empty.PRESENTED_IMAGE_SIMPLE} className="EmptyList" />
  );
};

export default EmptyList;
