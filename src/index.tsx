import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const initialState = {
//   data: [],
//   info: 'My Store',
// };

// const myReducer = (state: any = initialState, action: any) => {
//   switch (action.type) {
//     case 'SET_DATA':
//       return { ...state, data: action.payload };
//     default:
//       return state;
//   }
// };

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
