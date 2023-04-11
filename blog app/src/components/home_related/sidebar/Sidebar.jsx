import React from 'react';
import Filter from './Filter';
import Sort from './Sort';

function Sidebar() {
  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <Sort />
        </div>
        <div className="sidebar-content">
          <Filter />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
