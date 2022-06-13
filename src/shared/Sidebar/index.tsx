import React from 'react';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={style.page_sidebar}>
      <div className={style.container}>
        <div className={style.sidebar_menu}> sidebar</div>
      </div>
    </div>
  );
};

export default Sidebar;
