import React, { useEffect, useMemo, useState } from 'react';

const TestPageComponent = () => {
  const [counter, setCount] = useState(0);
  const [someArray, setSomeArray] = useState([1, 2, 3]);

  const updatedArray = useMemo(() => {
    return someArray.map((num) => {
      console.log('hello');
      return num + 10;
    });
  }, [someArray]);

  // componentDidMount
  useEffect(() => {
    console.log('Компонент отображен');
  }, []);

  // componentDidUpdate
  //   useEffect(() => {
  //     console.log('Компонент обновлен');
  //   });

  //   useEffect(() => {
  //     console.log('COUNTER обновлен');
  //   }, [counter]);

  //   useEffect(() => {
  //     console.log('SOME_ARRAY обновлен');
  //   }, [someArray]);

  //   useEffect(() => {
  //     console.log('COUNTER ИЛИ SOME_ARRAY обновлен');
  //   }, [counter, someArray]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Компонент был удален');
    };
  }, []);

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Увеличить counter
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        Добавить число в массив
      </button>
      {updatedArray.map((num, index) => {
        return <div key={`${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
