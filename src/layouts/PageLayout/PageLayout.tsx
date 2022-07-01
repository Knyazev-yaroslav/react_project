import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Sidebar from '../../shared/Sidebar/Sidebar';
import style from './PageLayout.module.scss';

const PageLayout: FC = () => {
  return (
    <div className={style.page_wrapper}>
      <div className={style.section_wrapper}>
        <Header />
        <div className={style.content_wrapper}>
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
