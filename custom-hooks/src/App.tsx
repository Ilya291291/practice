import React from 'react';
import './App.scss';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import useFetch from './useFetch';
// import { useHover } from './useHover'
// import { useLocalStorage } from './useLocalStorage';
// import { useViewportSize } from './useViewportSize';
// import { useWindowEvent }from './useWindowEvent';

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

    // const { hovered, ref } = useHover();

    // return (
    //   <div ref={ref}>
    //     {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    //   </div>
    // );

//   const [value, { setItem, removeItem }] = useLocalStorage('some-key');
//   return (
//     <div>
//       <p>Значение из LocalStorage: {value}</p>
//       <div>
//         <button onClick={() => setItem('new storage value')}>Задать значение</button>
//         <button onClick={() => removeItem()}>Удалить значение</button>
//       </div>
//     </div>
//   );
// }
// const { height, width } = useViewportSize();

  return (
    // <>
    //   Width: {width}, height: {height}
    // </>
    <>
      <SignIn />
      <SignUp />
    </>
  );

}

export default App;
