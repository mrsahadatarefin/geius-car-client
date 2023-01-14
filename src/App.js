import logo from './logo.svg';
import './App.css';
import router from './Router/Router';
import { RouterProvider } from 'react-router-dom';

function App() {
  

  return (
    <div data-theme="light" className="max-w-screen-xl m-auto">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
