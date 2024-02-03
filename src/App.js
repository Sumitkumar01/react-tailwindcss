import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/page2',
    element:<HomePage/>
  },
  {
    path:'/page3',
    element:<HomePage/>
  },
])
function App() {
  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
