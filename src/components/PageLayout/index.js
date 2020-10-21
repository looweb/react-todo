import React from 'react';

import './PageLayout.scss';

const PageLayout = ({ title, mainClassName, children }) => {
  return (
    <div className="PageLayout">
      <div className="PageLayout-content">
        {title && <h2 className="PageLayout-content-title">{title}</h2>}
        <div className={`PageLayout-content-body ${mainClassName || ''}`}>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
