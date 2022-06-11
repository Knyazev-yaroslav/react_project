import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { usersUrl } from '../../api/constats';
import { IUsers } from '../../interfaces/IUsers';
import { setUsersDataAction } from '../../store/pages/UsersPage/actions';
import { getUsersData } from '../../store/pages/UsersPage/selectors';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  // const [usersData, setUsersData] = useState<IUsers[] | null>(null);
  const dispatch = useDispatch();
  const usersData = useSelector(getUsersData);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    // setUsersData(data);
    dispatch(setUsersDataAction(data));
  };

  useEffect(() => {
    if (pathname === '/') {
      navigate('/users_page');
    }
    if (!search) {
      navigate('?page=1');
    }
  }, [pathname, navigate, search]);

  useEffect(() => {
    getData(usersUrl);
    // dispatch({ type: 'SET_DATA', payload: [1, 2, 3] });
  }, []);

  return !usersData ? <div>Загрузка...</div> : <UsersPageComponent usersDataAttr={usersData} />;
};

export default UsersPage;
