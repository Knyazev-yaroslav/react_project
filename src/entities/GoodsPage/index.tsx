import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import style from './Goods.module.scss';
import { useAppSelector } from '../../hooks/redux_hooks';

import GoodsHeader from './components/GoodsHeader';
import Search from './components/Search';
import Categories from './components/Categories';
import GoodsBlock from './components/GoodsBlock';
import { selectFilter } from '../../redux/slices/filterSlice';
import useDebounce from '../../hooks/useDebounce';
import Pagination from './components/Pagination';

export type TGoodObj = {
  title: string;
  phone: string;
  publicated: boolean;
  price: string;
  category: string;
  description: string;
  address: string;
  id: string;
  date: string;
};

const Goods: FC = () => {
  const [items, setItems] = useState([]);
  const { currentPage, searchValue, orderValue, titleSort } = useAppSelector(selectFilter);
  // Чтобы у тебя дебаунс отработал, тебе нужно сам коллбэк, который ты обернул в дебаунс,
  // в onChange поискового импута прокидывать, а там ты меняешь значение в сторе, и тем временем
  // юзэффект тут у тебя на это значение смотрит и каждый раз на изменении значения выполняет запрос.
  // Посмотри нетворки в браузере
  const debouncedSearch = useDebounce(searchValue, 500);

  const search = debouncedSearch ? `title=${debouncedSearch}` : '';
  const order = orderValue ? 'desc' : 'asc';
  const title = titleSort ? `sortBy=title&order=${order}` : '';

  const fetchGoods = async () => {
    const { data } = await axios.get(
      `https://62bf109bbe8ba3a10d630620.mockapi.io/goods?&page=${currentPage}&limit=8&${search}&${title}`
    );
    setItems(data);
  };
  useEffect(() => {
    fetchGoods();
  }, [currentPage, orderValue]);

  const goods = items.map((obj: TGoodObj) => {
    // очень много пропсов, лучше прокинь туда сам obj,
    // опиши интерфейс и уже внутри компонента вытащи и прокинь, куда надо все значения
    // то есть из пропсов у тебя будет только obj и onDelete.
    // Ну и переименуй obj - чтобы семантично (=понятно) было)
    return (
      <GoodsBlock
        key={obj.id}
        title={obj.title}
        category={obj.category}
        date={obj.date}
        publicated={obj.publicated}
        id={obj.id}
        price={obj.price}
        description={obj.description}
        address={obj.address}
        phone={obj.phone}
        onDelete={fetchGoods}
      />
    );
  });

  return (
    <div className={style.goods_page}>
      {/* Вот здесь хорошо все поделил на компоненты */}
      <GoodsHeader />
      <div className={style.goods_search_pagination_block}>
        <Search />
        <Pagination />
      </div>
      <Categories />
      {goods}
    </div>
  );
};

export default Goods;
