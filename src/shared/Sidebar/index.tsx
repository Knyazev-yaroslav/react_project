import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarConfig } from './sidebarConfig';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <ul className={style.sidebar_menu}>
        {sidebarConfig.map((menuItem) => {
          const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
          return (
            <Link
              key={menuItem.id}
              to={menuItem.path}
              className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
              <li>{menuItem.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
