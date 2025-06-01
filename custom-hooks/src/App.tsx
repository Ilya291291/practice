import React from 'react';
import './App.css';
import useFetch from './useFetch';
import { useHover } from './useHover';

function App() {
  // const {
  //   data,
  //   isLoading,
  //   error,
  //   refetch
  // } = useFetch('https://jsonplaceholder.typicode.com/posts');
  // return (
  //     <div>
  //       <div>
  //         <button onClick={() => refetch({
  //           params: {
  //             _limit: 3
  //         }})}>Загрузить</button>
  //       </div>
  //       {isLoading && 'Загрузка...'}
  //       {error && 'Произошла ошибка'}

  //       {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
  //     </div>
  //   );

    const { hovered, ref } = useHover();

    return (
      <div ref={ref}>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
    );
  }

export default App;
